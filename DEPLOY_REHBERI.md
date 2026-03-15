# EEM Materyalleri Yayınlama ve Deploy Rehberi

Bu rehber, `ktunDepo` klasörüne yeni ders materyalleri eklendiğinde bu materyallerin nasıl `ktunot` sistemine dahil edileceğini ve nasıl yayınlanacağını (deploy) adım adım anlatmaktadır.

## 1. Adım: PDF Küçük Resimlerini (Thumbnails) Oluşturma
Yeni eklenen PDF dosyalarının kapak/önizleme görsellerini oluşturmak için proje kök dizininde aşağıdaki Python script'ini çalıştırın:

```bash
python3 scripts/generate_pdf_thumbnails.py
```

- **Ne yapar?** `ktunDepo` (veya tanımlı kaynak) deposundaki PDF'leri tarar, eksik veya yeni olan PDF'ler için ilk sayfayı bularak `.webp` (veya `.png`) formatında küçük resimler oluşturur.
- **Dikkat Edilmesi Gerekenler:** Eğer `ktunDepo` klasörünüzde yeni oluşturulan thumbnail dosyaları varsa, o repoya da gidip `git commit` ve `git push` yapmayı unutmayın! Önizlemelerin sağlıklı çalışabilmesi için `.webp` dosyalarının GitHub'da ulaşılabilir olması gerekir.

## 2. Adım: EEM Sayfalarını Oluşturma
Önizleme görselleri de oluşturulduktan sonra, Quartz altyapısına uygun `index.md` Markdown sayfalarını üretmek için aşağıdaki script'i çalıştırın:

```bash
python3 scripts/generate_eem_pages.py
```

- **Ne yapar?** Kaynak klasördeki dizin yapısına bakarak, `content/EEM/` dizini altında her dönem (EEM-1, EEM-2 vb.) ve her ders için `.md` dosyalarını üretir. Ayrıca üretilen thumbnail'ları projenin `content` içerisine kopyalar.

## 3. Adım: Değişiklikleri Yayınlama (Deploy Etme)
Sayfalar başarılı bir şekilde üretildikten sonra son aşama, bunları canlı ortama taşımaktır. Eğer otomatik olarak yayınlama entegrasyonuna sahipseniz veya Quartz'ın iç yapısını kullanıyorsanız;

### Yöntem 1: Standart Git İşlemleri ile Deploy (Vercel/GitHub Pages vs.)
```bash
# Tüm oluşturulan ve değişen dosyaları takip listesine al
git add .

# Yapılan güncellemeleri isimlendir
git commit -m "feat: yeni ders materyalleri eklendi ve sayfalar güncellendi"

# GitHub'a gönder (push)
git push origin v4
```
*(Push işleminin ardından, bağlı olan CI/CD iş akışınız veya Vercel gibi barındırma hizmetiniz yeni sürümü derleyip otomatik olarak yayına alacaktır.)*

### Yöntem 2: Quartz Sync (Eğer Quartz Sync kullanıyorsanız)
```bash
npx quartz sync
```
Bu komut değişiklikleri işler, commit'ler ve GitHub deponuza gönderir (gerekiyorsa bağladığınız sunucuya deploy eder).

---
**Özet:**
1. `python3 scripts/generate_pdf_thumbnails.py`
2. `ktunDepo` tarafında thumbnail commit + push (yapıldıysa)
3. `python3 scripts/generate_eem_pages.py`
4. `ktunot` tarafında `git add .`, `git commit ...`, `git push origin ...`
