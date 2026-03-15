#!/usr/bin/env python3
"""
PDF ilk sayfa thumbnail üretici.
ktunDepo/EEM altındaki her PDF dosyasının ilk sayfasını .thumbs/ altına WebP olarak kaydeder.

Poppler'ın pdftoppm ve ppmtopgm araçlarını doğrudan kullanır (pip bağımlılığı yok).
Sistem bağımlılığı: sudo apt install poppler-utils webp

Kullanım:
  python3 scripts/generate_pdf_thumbnails.py
"""

import os
import subprocess
import sys
from pathlib import Path

# --- Ayarlar ---
DEPO_EEM = Path(os.environ.get("KTUN_DEPO_EEM", "/home/c4kar/Code/ktunDepo/EEM"))
THUMB_WIDTH = 480  # piksel genişliği


def check_dependencies():
    """Sistem bağımlılıklarını kontrol eder."""
    for cmd in ["pdftoppm"]:
        result = subprocess.run(["which", cmd], capture_output=True)
        if result.returncode != 0:
            print(f"HATA: '{cmd}' bulunamadı. Kur: sudo apt install poppler-utils")
            sys.exit(1)


def generate_thumbnail(pdf_path: Path, thumb_dir: Path) -> bool:
    """PDF'in ilk sayfasını PNG olarak üretir, sonra WebP'ye çevirir."""
    stem = pdf_path.stem
    thumb_path = thumb_dir / f"{stem}.webp"

    # Zaten varsa ve PDF'den yeni değilse atla
    if thumb_path.exists() and thumb_path.stat().st_mtime >= pdf_path.stat().st_mtime:
        return True  # Mevcut, atlandı

    try:
        # pdftoppm ile ilk sayfayı PNG'ye çevir
        png_prefix = thumb_dir / f"_tmp_{stem}"
        result = subprocess.run(
            [
                "pdftoppm",
                "-png",
                "-f", "1",          # ilk sayfa
                "-l", "1",          # sadece ilk sayfa
                "-scale-to-x", str(THUMB_WIDTH),
                "-scale-to-y", "-1",  # aspect ratio koru
                str(pdf_path),
                str(png_prefix),
            ],
            capture_output=True,
            timeout=30,
        )

        if result.returncode != 0:
            print(f"  ⚠ pdftoppm hatası: {pdf_path.name} — {result.stderr.decode()[:100]}")
            return False

        # pdftoppm çıktısı: _tmp_<stem>-1.png veya _tmp_<stem>-01.png
        png_files = list(thumb_dir.glob(f"_tmp_{stem}*.png"))
        if not png_files:
            print(f"  ⚠ PNG üretilemedi: {pdf_path.name}")
            return False

        png_file = png_files[0]

        # cwebp varsa WebP'ye çevir, yoksa PNG olarak bırak
        cwebp_result = subprocess.run(["which", "cwebp"], capture_output=True)
        if cwebp_result.returncode == 0:
            subprocess.run(
                ["cwebp", "-q", "75", str(png_file), "-o", str(thumb_path)],
                capture_output=True,
                timeout=15,
            )
            png_file.unlink()  # temp PNG sil
        else:
            # cwebp yoksa PNG'yi doğrudan kullan
            final_png = thumb_dir / f"{stem}.png"
            png_file.rename(final_png)
            # Script PNG olarak da çalışır, generate_eem_pages.py bunu handle eder

        return True

    except subprocess.TimeoutExpired:
        print(f"  ⚠ Timeout: {pdf_path.name}")
        return False
    except Exception as e:
        print(f"  ⚠ Hata: {pdf_path.name} — {e}")
        return False


def main():
    check_dependencies()

    if not DEPO_EEM.exists():
        print(f"HATA: EEM deposu bulunamadı: {DEPO_EEM}")
        sys.exit(1)

    total = 0
    created = 0
    skipped = 0
    failed = 0

    for pdf_file in sorted(DEPO_EEM.rglob("*.pdf")):
        # _incoming, _pending, _rejected gibi özel klasörleri atla
        rel_parts = pdf_file.relative_to(DEPO_EEM).parts
        if any(part.startswith("_") or part.startswith(".") for part in rel_parts):
            continue

        total += 1
        thumb_dir = pdf_file.parent / "thumbs"
        thumb_dir.mkdir(exist_ok=True)

        stem = pdf_file.stem
        thumb_webp = thumb_dir / f"{stem}.webp"
        thumb_png = thumb_dir / f"{stem}.png"

        already_exists = (
            (thumb_webp.exists() and thumb_webp.stat().st_mtime >= pdf_file.stat().st_mtime) or
            (thumb_png.exists() and thumb_png.stat().st_mtime >= pdf_file.stat().st_mtime)
        )

        if already_exists:
            skipped += 1
            continue

        success = generate_thumbnail(pdf_file, thumb_dir)
        if success:
            created += 1
            print(f"  ✓ {'/'.join(rel_parts[-2:])}")
        else:
            failed += 1

    print(f"\nToplam: {total} PDF | Yeni: {created} | Mevcut: {skipped} | Başarısız: {failed}")


if __name__ == "__main__":
    main()
