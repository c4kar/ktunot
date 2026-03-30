#!/usr/bin/env python3
"""
EEM Ders Materyalleri Sayfa Üretici.

ktunDepo/EEM altındaki dosyaları tarar ve her ders klasörü için
Quartz uyumlu index.md sayfaları üretir (pdf-grid kart görünümüyle).

Kullanım:
  python scripts/generate_eem_pages.py

Ortam değişkenleri:
  KTUN_DEPO_EEM   — Kaynak EEM deposu yolu (varsayılan: ../ktunDepo/EEM)
  KTUN_CONTENT    — Hedef Quartz content yolu (varsayılan: ./content/EEM)
  GITHUB_RAW_BASE — GitHub raw dosya URL tabanı
"""

import json
import os
import re
import shutil
import sys
from pathlib import Path
from urllib.parse import quote

# ─── Ayarlar ────────────────────────────────────────────────────
SCRIPT_DIR = Path(__file__).parent.resolve()
PROJECT_ROOT = SCRIPT_DIR.parent

DEPO_EEM = Path(
    os.environ.get("KTUN_DEPO_EEM", str(PROJECT_ROOT.parent / "ktunDepo" / "EEM"))
)
CONTENT_EEM = Path(
    os.environ.get("KTUN_CONTENT", str(PROJECT_ROOT / "content" / "EEM"))
)
GITHUB_RAW_BASE = os.environ.get(
    "GITHUB_RAW_BASE", "https://github.com/c4kar/ktunDepo/raw/main/EEM"
)
JSDELIVR_BASE = os.environ.get(
    "JSDELIVR_BASE", "https://cdn.jsdelivr.net/gh/c4kar/ktunDepo@main/EEM"
)
GITHUB_BLOB_BASE = os.environ.get(
    "GITHUB_BLOB_BASE", "https://github.com/c4kar/ktunDepo/blob/main/EEM"
)

# Desteklenen dosya türleri
FILE_TYPES = {
    ".pdf": ("📄", "pdf"),
    ".docx": ("📝", "doc"),
    ".doc": ("📝", "doc"),
    ".xlsx": ("📊", "doc"),
    ".xls": ("📊", "doc"),
    ".pptx": ("📽️", "doc"),
    ".ppt": ("📽️", "doc"),
    ".zip": ("📦", "other"),
    ".rar": ("📦", "other"),
    ".jpg": ("🖼️", "img"),
    ".jpeg": ("🖼️", "img"),
    ".png": ("🖼️", "img"),
    ".webp": ("🖼️", "img"),
    ".gif": ("🖼️", "img"),
}

# Dönem etiketleri
DONEM_LABELS = {
    "EEM-1": "1. Yarıyıl (1. Sınıf Güz)",
    "EEM-2": "2. Yarıyıl (1. Sınıf Bahar)",
    "EEM-3": "3. Yarıyıl (2. Sınıf Güz)",
    "EEM-4": "4. Yarıyıl (2. Sınıf Bahar)",
    "EEM-5": "5. Yarıyıl (3. Sınıf Güz)",
    "EEM-6": "6. Yarıyıl (3. Sınıf Bahar)",
    "EEM-7": "7. Yarıyıl (4. Sınıf Güz)",
    "EEM-8": "8. Yarıyıl (4. Sınıf Bahar)",
}


def slug_to_title(slug: str) -> str:
    """kebab-case slug'ı okunabilir başlığa çevirir."""
    title = slug.replace("-", " ")
    # Kısaltmaları büyük yap (lab, 1, 2 vb hariç)
    words = []
    for word in title.split():
        if word.isdigit() or len(word) <= 2:
            words.append(word.upper() if len(word) <= 2 and word.isalpha() else word)
        else:
            words.append(word.capitalize())
    return " ".join(words)


def format_size(size_bytes: int) -> str:
    """Dosya boyutunu okunabilir formata çevirir."""
    if size_bytes < 1024:
        return f"{size_bytes} B"
    elif size_bytes < 1024 * 1024:
        return f"{size_bytes / 1024:.1f} KB"
    elif size_bytes < 1024 * 1024 * 1024:
        return f"{size_bytes / (1024 * 1024):.1f} MB"
    else:
        return f"{size_bytes / (1024 * 1024 * 1024):.1f} GB"


def github_raw_url(relative_path: str) -> str:
    """EEM içindeki göreli yoldan GitHub raw URL oluşturur."""
    encoded = quote(relative_path, safe="/")
    return f"{GITHUB_RAW_BASE}/{encoded}"


def jsdelivr_url(relative_path: str) -> str:
    """Tarayıcının yerleşik önizleyicisini kullanabilmek için JSDelivr CDN URL oluşturur."""
    encoded = quote(relative_path, safe="/")
    return f"{JSDELIVR_BASE}/{encoded}"


def github_blob_url(relative_path: str) -> str:
    """GitHub'ın kendi önizleyicisi ve büyük dosyalar için Blob URL."""
    encoded = quote(relative_path, safe="/")
    return f"{GITHUB_BLOB_BASE}/{encoded}"


def collect_materials(ders_dir: Path, eem_relative: str) -> list[dict]:
    """Bir ders klasöründeki (ve alt klasörlerindeki) materyalleri toplar."""
    materials = []
    
    # rglob ile ders_dir altındaki tüm dosyaları bulalım
    for f in sorted(ders_dir.rglob("*")):
        # Klasörleri atla
        if f.is_dir():
            continue
            
        # . veya _ ile başlayan dosya/klasörleri atla
        if any(p.startswith(".") or p.startswith("_") for p in f.relative_to(ders_dir).parts):
            continue
            
        # thumbs dizinlerinin içeriğini ana dosya gibi listeleme
        if "thumbs" in f.parts:
            continue

        ext = f.suffix.lower()
        if ext == ".json":
            continue

        icon, badge = FILE_TYPES.get(ext, ("📎", "other"))
        
        # Dosyanın ders klasörüne göre yolu (örn: lms/01GirisTR.pdf)
        sub_rel_path = f.relative_to(ders_dir).as_posix()
        rel_path = f"{eem_relative}/{sub_rel_path}"

        # Thumbnail var mı? (Dosyanın bulunduğu klasörün 'thumbs' alt klasörü içinde aranır)
        thumb_webp = f.parent / "thumbs" / f"{f.stem}.webp"
        thumb_png = f.parent / "thumbs" / f"{f.stem}.png"
        
        if thumb_webp.exists():
            has_thumb = True
            thumb_path = thumb_webp
        elif thumb_png.exists():
            has_thumb = True
            thumb_path = thumb_png
        else:
            has_thumb = False
            thumb_path = None

        size_bytes = f.stat().st_size

        # jsDelivr, 20 MB'tan büyük dosyaları engelliyor.
        is_large = size_bytes > (19 * 1024 * 1024)
        preview_url = github_blob_url(rel_path) if is_large else jsdelivr_url(rel_path)
        is_image = ext in (".jpg", ".jpeg", ".png", ".webp", ".gif")

        # Benzersiz bir ad üretelim (dosya isimleri çakışmasın)
        safe_stem = sub_rel_path.replace("/", "_").rsplit(".", 1)[0]

        materials.append(
            {
                "name": f.name,
                "stem": f.stem,
                "safe_stem": safe_stem, # thumb isim çakışmasını önlemek için
                "ext": ext,
                "size": size_bytes,
                "icon": icon,
                "badge": badge,
                "raw_url": github_raw_url(rel_path),
                "preview_url": preview_url,
                "has_thumb": has_thumb,
                "thumb_source": thumb_path if has_thumb else None,
                "rel_path": rel_path,
                "is_image": is_image,
            }
        )

    return materials


def generate_material_card_html(mat: dict, thumb_rel: str | None) -> str:
    """Tek bir materyal kartının HTML'ini üretir."""
    size_str = format_size(mat["size"])

    if thumb_rel:
        thumb_html = f'<img src="{thumb_rel}" alt="{mat["stem"]}" loading="lazy" />'
    else:
        thumb_html = f'<span class="materyal-icon">{mat["icon"]}</span>'

    return f"""<div class="materyal-card">
  <a href="{mat["preview_url"]}" target="_blank" rel="noopener" class="materyal-thumb-link">
    <div class="materyal-thumb">
      {thumb_html}
    </div>
  </a>
  <div class="materyal-body">
    <p class="materyal-title">{mat["stem"]}</p>
    <div class="materyal-meta">
      <span class="materyal-badge {mat["badge"]}">{mat["ext"].upper().lstrip(".")}</span>
      <span>{size_str}</span>
    </div>
  </div>
  <a href="{mat["raw_url"]}" class="materyal-download" target="_blank" rel="noopener">
    ↓ İndir
  </a>
</div>"""


def generate_ders_page(
    ders_slug: str,
    eem_code: str,
    materials: list[dict],
    output_dir: Path,
    thumb_dest_dir: Path,
) -> None:
    """Bir ders klasörü için index.md sayfası üretir."""
    title = slug_to_title(ders_slug)
    output_dir.mkdir(parents=True, exist_ok=True)

    # Thumbnail'ları Quartz content dizinine kopyala
    thumb_dest_dir.mkdir(parents=True, exist_ok=True)
    card_htmls = []

    for mat in materials:
        thumb_rel = None
        if mat["has_thumb"] and mat["thumb_source"]:
            thumb_ext = mat["thumb_source"].suffix
            thumb_filename = f"{mat['safe_stem']}{thumb_ext}"
            dest = thumb_dest_dir / thumb_filename
            shutil.copy2(str(mat["thumb_source"]), str(dest))
            thumb_rel = f"./thumbs/{thumb_filename}"
        elif mat.get("is_image"):
            thumb_rel = mat["preview_url"]

        card_htmls.append(generate_material_card_html(mat, thumb_rel))

    cards_html = "\n".join(card_htmls)

    # Quartz uyumlu frontmatter + içerik
    md_content = f"""---
title: "{title}"
cssclasses:
  - pdf-grid
tags:
  - eem
  - {eem_code.lower()}
---

## 📚 Ders Materyalleri

<div class="materyal-grid">
{cards_html}
</div>
"""

    index_path = output_dir / "index.md"
    index_path.write_text(md_content, encoding="utf-8")
    print(f"  ✓ {eem_code}/{ders_slug} — {len(materials)} materyal")


def generate_semester_page(eem_code: str, courses: list[str], output_dir: Path) -> None:
    """Bir dönem (EEM-X) index sayfası üretir."""
    label = DONEM_LABELS.get(eem_code, eem_code)
    output_dir.mkdir(parents=True, exist_ok=True)

    course_cards = []
    for slug in sorted(courses):
        title = slug_to_title(slug)
        course_cards.append(
            f'<a href="./{slug}/" class="donem-card">\n'
            f'  <span class="donem-icon">📖</span>\n'
            f'  <span class="donem-title">{title}</span>\n'
            f"</a>"
        )

    cards_html = "\n".join(course_cards)

    md_content = f"""---
title: "{label}"
cssclasses:
  - pdf-grid
tags:
  - eem
  - {eem_code.lower()}
---

## 📑 Dersler

<div class="donem-grid">
{cards_html}
</div>
"""

    index_path = output_dir / "index.md"
    index_path.write_text(md_content, encoding="utf-8")
    print(f"✓ {eem_code} — {len(courses)} ders")


def generate_main_eem_page(semesters: list[str], output_dir: Path) -> None:
    """Ana EEM index sayfası üretir."""
    output_dir.mkdir(parents=True, exist_ok=True)

    semester_cards = []
    for sem in sorted(semesters):
        label = DONEM_LABELS.get(sem, sem)
        num = sem.split("-")[1]
        emoji = ["📘", "📗", "📙", "📕", "📓", "📔", "📒", "📚"][int(num) - 1]
        semester_cards.append(
            f'<a href="./{sem}/" class="donem-card">\n'
            f'  <span class="donem-icon">{emoji}</span>\n'
            f'  <span class="donem-title">{label}</span>\n'
            f"</a>"
        )

    cards_html = "\n".join(semester_cards)

    md_content = f"""---
title: "EEM Ders Materyalleri"
cssclasses:
  - pdf-grid
tags:
  - eem
---

Elektrik-Elektronik Mühendisliği bölümüne ait tüm ders materyallerine dönem bazında erişebilirsiniz.

_Ham materyaller için [GitHub depomuz](https://github.com/c4kar/ktunDepo)u ziyaret edebilirsiniz._

## 🎓 Dönemler

<div class="donem-grid">
{cards_html}
</div>
"""

    index_path = output_dir / "index.md"
    index_path.write_text(md_content, encoding="utf-8")
    print(f"✓ Ana EEM sayfası oluşturuldu")


def main():
    if not DEPO_EEM.exists():
        print(f"HATA: EEM deposu bulunamadı: {DEPO_EEM}")
        sys.exit(1)

    print(f"Kaynak: {DEPO_EEM}")
    print(f"Hedef:  {CONTENT_EEM}")
    print()

    semesters = []

    for eem_dir in sorted(DEPO_EEM.iterdir()):
        if not eem_dir.is_dir() or not eem_dir.name.startswith("EEM-"):
            continue

        eem_code = eem_dir.name
        semesters.append(eem_code)
        courses = []

        for ders_dir in sorted(eem_dir.iterdir()):
            if (
                not ders_dir.is_dir()
                or ders_dir.name.startswith(".")
                or ders_dir.name.startswith("_")
                or ders_dir.name == "thumbs"
            ):
                continue

            ders_slug = ders_dir.name
            courses.append(ders_slug)
            eem_relative = f"{eem_code}/{ders_slug}"

            materials = collect_materials(ders_dir, eem_relative)
            if not materials:
                continue

            output_dir = CONTENT_EEM / eem_code / ders_slug
            thumb_dest = output_dir / "thumbs"
            generate_ders_page(ders_slug, eem_code, materials, output_dir, thumb_dest)

        if courses:
            semester_output = CONTENT_EEM / eem_code
            generate_semester_page(eem_code, courses, semester_output)

    if semesters:
        generate_main_eem_page(semesters, CONTENT_EEM)

    print(f"\nBitti! Toplam {len(semesters)} dönem işlendi.")


if __name__ == "__main__":
    main()
