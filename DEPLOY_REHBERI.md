# EEM Materyalleri Yayınlama ve Deploy Rehberi

Bu rehber, `ktunDepo` klasörüne yeni ders materyalleri eklendiğinde bu materyallerin nasıl `ktunot` sistemine dahil edileceğini ve nasıl yayınlanacağını (deploy) adım adım anlatmaktadır.

## 1. Adım: PDF Küçük Resimlerini (Thumbnails) Oluşturma
Yeni eklenen PDF dosyalarının kapak/önizleme görsellerini oluşturmak için proje kök dizininde aşağıdaki Python script'ini çalıştırın:

```bash
python3 scripts/generate_pdf_thumbnails.py
```

- **Ne yapar?** `ktunDepo` (veya tanımlı kaynak) deposundaki PDF'leri tarar, eksik veya yeni olan PDF'ler için ilk sayfayı bularak `.webp` (veya `.png`) formatında küçük resimler oluşturur.
- **Dikkat Edilmesi Gerekenler:** Eğer `ktunDepo` klasörünüzde yeni oluşturulan thumbnail dosyaları varsa, o repoya da gidip `git commit` ve `git push` yapmayı unutmayın! Önizlemelerin sağlıklı çalışabilmesi için `.webp` dosyalarının GitHub'da ulaşılabilir olması gerekir.

## 2. Adım: Materyal Kataloğunun Otomatik Entegrasyonu (MaterialCatalog)
Yeni mimaride ders sayfalarında 400 satırlık ham HTML kartları üretmeye veya `generate_eem_pages.py` çalıştırmaya **gerek yoktur**.
Ders markdown dosyalarında yalnızca `course_id` tanımlı olması yeterlidir:

```markdown
---
title: "Fizik 1"
course_id: "fizik-1"
---
```

Quartz derlemesi (`npx quartz build`), `ktunDepo/manifest.json` dosyasını derleme anında otomatik olarak okur; belgeleri depodaki gerçek alt klasör yapısına göre gruplayarak canlı önizlemeli çift sütunlu katalog arayüzünü dinamik olarak üretir.

## 3. Adım: Değişiklikleri Yayınlama (Deploy Etme)
```bash
# Değişiklikleri ekle ve commit'le
git add .
git commit -m "feat: ders materyalleri güncellendi"

# GitHub'a gönder (push)
git push origin v4
```

---
**Özet:**
1. `python3 scripts/generate_pdf_thumbnails.py` (Varsa yeni PDF kapakları için)
2. `ktunDepo` tarafında `manifest.json` ve kapaklar güncel olsun
3. `npx quartz build` (Katalog doğrudan manifest'i okur)
4. `git push origin v4`

