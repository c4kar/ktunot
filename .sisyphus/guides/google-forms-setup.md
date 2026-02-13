# Google Forms Kurulum Rehberi

## 📋 Genel Bakış

ktünot projesi için toplam **5 Google Form** oluşturulacak:

- **4 Geri Bildirim Formu** (hoca/ders yorum ve yıldız)
- **1 Not Yükleme Formu**

Bu rehber, her formu adım adım oluşturmanız için gerekli tüm bilgileri içermektedir.

---

## 🚀 Ön Hazırlık

1. **Google Hesabınızla Giriş Yapın**
   - [Google Accounts](https://accounts.google.com) adresine gidin
   - Üniversite veya kişisel Google hesabınızla giriş yapın

2. **Google Forms Sayfasına Gidin**
   - [Google Forms](https://forms.google.com) adresine gidin
   - Sağ üst köşedeki "+" butonuna tıklayarak yeni form oluşturun

3. **Temel Bilgiler**
   - Her form için yeni bir form oluşturacaksınız
   - Formlar anonim yanıt toplaması için ayarlanacaktır
   - Form linklerini kopyalayıp README'ye entegre edeceksiniz

---

## Form 1: Hocalar İçin Yorum (✍️)

### Placeholder ID

```
#placeholder-hoca-yorum
```

### Adım 1: Form Oluşturma

1. [Google Forms](https://forms.google.com) sayfasında "+" butonuna tıklayın
2. "Boş form" seçeneğini seçin
3. Form başlığı olarak `Hocalar İçin Yorum` yazın
4. Açıklama kısmına yazın:
   ```
   Mühendislik Fakültesi hocaları hakkında deneyimlerinizi ve önerilerinizi bizimle paylaşın.
   ```

### Adım 2: Soruları Ekleme

**Soru 1: Hoca Adı**

- Tür: `Kısa yanıt`
- Başlık: `Hoca Adı`
- Zorunlu: ✓ İşaretli

**Soru 2: Ders Adı**

- Tür: `Kısa yanıt`
- Başlık: `Ders Adı`
- Zorunlu: ✓ İşaretli

**Soru 3: Yorum Metni**

- Tür: `Uzun yanıt`
- Başlık: `Yorum Metni`
- Zorunlu: ✓ İşaretli
- İpucu: `Hoca hakkındaki görüş ve önerilerinizi yazın (yapı, anlatım, materyal, vb.)`

**Soru 4: Dönem**

- Tür: `Açılır menü`
- Başlık: `Dönem`
- Zorunlu: ✓ İşaretli
- Seçenekler:
  - Güz 2024
  - Bahar 2025
  - Güz 2025
  - Bahar 2026
  - Diğer

### Adım 3: Ayarlar

1. Sağ üst köşedeki ⚙️ (Ayarlar) butonuna tıklayın
2. **Yanıtlar sekmesinde:**
   - "Yanıt alınız" kutusunu işaretleyin
   - "Yanıt bildirimlerini e-postaya gönder" seçeneğini istersen işaretle

3. **Tercihler sekmesinde:**
   - "Anonim yanıtlara izin ver" seçeneğini ✓ işaretleyin
   - "Bildirim için e-posta adresi göster" seçeneğini işaretlemeyin
   - Diğer seçenekleri varsayılan bırakın

### Adım 4: Form Linkini Alma

1. Sağ üst köşedeki "Gönder" butonuna tıklayın
2. "Link" ikonu seçin (bağlantı sembolü)
3. Açılan pencerede linki kopyalayın
4. Bu linki not edin (README güncellemesi için lazım olacak)

### Adım 5: Form Yayınlama

1. "Gönder" butonunun yanındaki seçeneklere bakın
2. "Form bağlantısını kopyala" seçeneğini kullanın
3. Form linkini kaydedin

---

## Form 2: Hocalar İçin Yıldız (⭐)

### Placeholder ID

```
#placeholder-hoca-yildiz
```

### Adım 1: Form Oluşturma

1. [Google Forms](https://forms.google.com) sayfasında "+" butonuna tıklayın
2. "Boş form" seçeneğini seçin
3. Form başlığı: `Hocalar İçin Yıldız`
4. Açıklama:
   ```
   Mühendislik Fakültesi hocaları hakkında genel değerlendirmenizi yapın.
   ```

### Adım 2: Soruları Ekleme

**Soru 1: Hoca Adı**

- Tür: `Kısa yanıt`
- Başlık: `Hoca Adı`
- Zorunlu: ✓ İşaretli

**Soru 2: Ders Adı**

- Tür: `Kısa yanıt`
- Başlık: `Ders Adı`
- Zorunlu: ✓ İşaretli

**Soru 3: Yıldız Puanlaması**

- Tür: `Doğrusal ölçek`
- Başlık: `Bu hoca hakkında genel değerlendirmeniz nedir?`
- Sol uç: `1 - Kötü`
- Sağ uç: `5 - Harika`
- 1-5 ölçeği
- Zorunlu: ✓ İşaretli

**Soru 4: Dönem**

- Tür: `Açılır menü`
- Başlık: `Dönem`
- Zorunlu: ✓ İşaretli
- Seçenekler:
  - Güz 2024
  - Bahar 2025
  - Güz 2025
  - Bahar 2026
  - Diğer

### Adım 3: Ayarlar

1. Sağ üst köşedeki ⚙️ (Ayarlar) butonuna tıklayın
2. **Tercihler sekmesinde:**
   - "Anonim yanıtlara izin ver" seçeneğini ✓ işaretleyin
   - Diğer seçenekleri varsayılan bırakın

### Adım 4: Form Linkini Alma

1. Sağ üst köşedeki "Gönder" butonuna tıklayın
2. "Link" ikonu seçin
3. Linki kopyalayın ve kaydedin

---

## Form 3: Dersler İçin Yorum (✍️)

### Placeholder ID

```
#placeholder-ders-yorum
```

### Adım 1: Form Oluşturma

1. [Google Forms](https://forms.google.com) sayfasında "+" butonuna tıklayın
2. "Boş form" seçeneğini seçin
3. Form başlığı: `Dersler İçin Yorum`
4. Açıklama:
   ```
   Mühendislik Fakültesi derslerinin içeriği, zorluk ve faydası hakkında görüş paylaşın.
   ```

### Adım 2: Soruları Ekleme

**Soru 1: Ders Adı**

- Tür: `Kısa yanıt`
- Başlık: `Ders Adı`
- Zorunlu: ✓ İşaretli

**Soru 2: Bölüm**

- Tür: `Açılır menü`
- Başlık: `Bölüm`
- Zorunlu: ✓ İşaretli
- Seçenekler:
  - Elektrik-Elektronik Mühendisliği (EEE)
  - Bilgisayar Mühendisliği
  - Makine Mühendisliği
  - İnşaat Mühendisliği
  - Kimya Mühendisliği
  - Endüstri Mühendisliği
  - Ortak Ders
  - Diğer

**Soru 3: Yorum Metni**

- Tür: `Uzun yanıt`
- Başlık: `Yorum Metni`
- Zorunlu: ✓ İşaretli
- İpucu: `Ders hakkındaki görüş ve önerilerinizi yazın (zorluk, fayda, içerik, vb.)`

**Soru 4: Dönem**

- Tür: `Açılır menü`
- Başlık: `Dönem`
- Zorunlu: ✓ İşaretli
- Seçenekler:
  - Güz 2024
  - Bahar 2025
  - Güz 2025
  - Bahar 2026
  - Diğer

### Adım 3: Ayarlar

1. Sağ üst köşedeki ⚙️ (Ayarlar) butonuna tıklayın
2. **Tercihler sekmesinde:**
   - "Anonim yanıtlara izin ver" seçeneğini ✓ işaretleyin
   - Diğer seçenekleri varsayılan bırakın

### Adım 4: Form Linkini Alma

1. Sağ üst köşedeki "Gönder" butonuna tıklayın
2. "Link" ikonu seçin
3. Linki kopyalayın ve kaydedin

---

## Form 4: Dersler İçin Yıldız (⭐)

### Placeholder ID

```
#placeholder-ders-yildiz
```

### Adım 1: Form Oluşturma

1. [Google Forms](https://forms.google.com) sayfasında "+" butonuna tıklayın
2. "Boş form" seçeneğini seçin
3. Form başlığı: `Dersler İçin Yıldız`
4. Açıklama:
   ```
   Mühendislik Fakültesi derslerini puanlayın.
   ```

### Adım 2: Soruları Ekleme

**Soru 1: Ders Adı**

- Tür: `Kısa yanıt`
- Başlık: `Ders Adı`
- Zorunlu: ✓ İşaretli

**Soru 2: Bölüm**

- Tür: `Açılır menü`
- Başlık: `Bölüm`
- Zorunlu: ✓ İşaretli
- Seçenekler:
  - Elektrik-Elektronik Mühendisliği (EEE)
  - Bilgisayar Mühendisliği
  - Makine Mühendisliği
  - İnşaat Mühendisliği
  - Kimya Mühendisliği
  - Endüstri Mühendisliği
  - Ortak Ders
  - Diğer

**Soru 3: Yıldız Puanlaması**

- Tür: `Doğrusal ölçek`
- Başlık: `Bu ders hakkında genel değerlendirmeniz nedir?`
- Sol uç: `1 - Çok zayıf`
- Sağ uç: `5 - Çok iyi`
- 1-5 ölçeği
- Zorunlu: ✓ İşaretli

**Soru 4: Dönem**

- Tür: `Açılır menü`
- Başlık: `Dönem`
- Zorunlu: ✓ İşaretli
- Seçenekler:
  - Güz 2024
  - Bahar 2025
  - Güz 2025
  - Bahar 2026
  - Diğer

### Adım 3: Ayarlar

1. Sağ üst köşedeki ⚙️ (Ayarlar) butonuna tıklayın
2. **Tercihler sekmesinde:**
   - "Anonim yanıtlara izin ver" seçeneğini ✓ işaretleyin
   - Diğer seçenekleri varsayılan bırakın

### Adım 4: Form Linkini Alma

1. Sağ üst köşedeki "Gönder" butonuna tıklayın
2. "Link" ikonu seçin
3. Linki kopyalayın ve kaydedin

---

## Form 5: Not Yükleme Formu (📤)

### Placeholder ID

```
#placeholder-not-yukleme
```

### Adım 1: Form Oluşturma

1. [Google Forms](https://forms.google.com) sayfasında "+" butonuna tıklayın
2. "Boş form" seçeneğini seçin
3. Form başlığı: `Not Yükleme Formu`
4. Açıklama:
   ```
   Ders notları, çıkmış sorular, ödevler, lab raporları ve diğer kaynakları bu form aracılığıyla yükleyebilirsiniz.
   İndirme linkini GitHub aracılığıyla sağlanacaktır.
   ```

### Adım 2: Soruları Ekleme

**Soru 1: Dosya Yükleme**

- Tür: `Dosya Yükleme`
- Başlık: `Dosya Yükle`
- İpucu: `PDF, DOCX, PPTX, ZIP dosyaları yükleyebilirsiniz (Maksimum 100MB)`
- Zorunlu: ✓ İşaretli
- İzin verilen dosya türleri:
  - PDF
  - DOCX
  - PPTX
  - ZIP
- Maksimum dosya boyutu: 100 MB

**Soru 2: Ders Adı**

- Tür: `Kısa yanıt`
- Başlık: `Ders Adı`
- Zorunlu: ✓ İşaretli

**Soru 3: Bölüm**

- Tür: `Açılır menü`
- Başlık: `Bölüm`
- Zorunlu: ✓ İşaretli
- Seçenekler:
  - Elektrik-Elektronik Mühendisliği (EEE)
  - Bilgisayar Mühendisliği
  - Makine Mühendisliği
  - İnşaat Mühendisliği
  - Kimya Mühendisliği
  - Endüstri Mühendisliği
  - Ortak Ders
  - Diğer

**Soru 4: İçerik Türü**

- Tür: `Onay kutularıyla seçim`
- Başlık: `İçerik Türü (Birden fazla seçebilirsiniz)`
- Zorunlu: ✓ İşaretli
- Seçenekler:
  - Ders Notu
  - Çıkmış Soru
  - Ödev
  - Lab Raporu
  - Proje
  - Özet
  - Video Kaydı
  - Diğer

**Soru 5: Dönem**

- Tür: `Kısa yanıt`
- Başlık: `Dönem (Örn: Güz 2024, Bahar 2025)`
- Zorunlu: ✓ İşaretli

**Soru 6: Ek Açıklama**

- Tür: `Uzun yanıt`
- Başlık: `Ek Açıklama`
- İpucu: `Dosyanız hakkında eklemek istediğiniz bilgileri yazın (opsiyonel)`
- Zorunlu: ✗ İşaretli değil

### Adım 3: Ayarlar

1. Sağ üst köşedeki ⚙️ (Ayarlar) butonuna tıklayın
2. **Tercihler sekmesinde:**
   - "Anonim yanıtlara izin ver" seçeneğini ✓ işaretleyin
   - Diğer seçenekleri varsayılan bırakın

3. **Dosya Yükleme Ayarları:**
   - Dosya yükleme sorusunda "Dosya depolama konumunu değiştir" seçeneğine tıklayın
   - Google Drive klasörünüz seçin (varsa) veya yeni klasör oluşturun
   - Klasör adı örneği: `ktunot-yuklemeler`

### Adım 4: Form Linkini Alma

1. Sağ üst köşedeki "Gönder" butonuna tıklayın
2. "Link" ikonu seçin
3. Linki kopyalayın ve kaydedin

---

## 📝 README'ye Entegrasyon

Form linklerini oluşturduktan sonra `/README.md` dosyasını güncelleyin:

### Adım 1: Form Linklerini Bulun

Her formun "Gönder" bölümünden kopyaladığınız linkler `https://forms.gle/xxxxx` formatında olacaktır.

### Adım 2: README'yi Açın ve Düzenleyin

`/README.md` dosyasını bir text editörü ile açın.

### Adım 3: Placeholder'ları Değiştirin

Şu placeholder'ları bulun ve form linkleriniz ile değiştirin:

**Form 1 - Hocalar İçin Yorum:**

```markdown
Bulun:

- [✍️ **Hocalar için yorum yapın**](#placeholder-hoca-yorum) _(Form linki eklenecek)_

Değiştirin:

- [✍️ **Hocalar için yorum yapın**](https://forms.gle/YOURLINK1)
```

**Form 2 - Hocalar İçin Yıldız:**

```markdown
Bulun:

- [⭐ **Hocalar için yıldız verin**](#placeholder-hoca-yildiz) _(Form linki eklenecek)_

Değiştirin:

- [⭐ **Hocalar için yıldız verin**](https://forms.gle/YOURLINK2)
```

**Form 3 - Dersler İçin Yorum:**

```markdown
Bulun:

- [✍️ **Dersler için yorum yapın**](#placeholder-ders-yorum) _(Form linki eklenecek)_

Değiştirin:

- [✍️ **Dersler için yorum yapın**](https://forms.gle/YOURLINK3)
```

**Form 4 - Dersler İçin Yıldız:**

```markdown
Bulun:

- [⭐ **Dersler için yıldız verin**](#placeholder-ders-yildiz) _(Form linki eklenecek)_

Değiştirin:

- [⭐ **Dersler için yıldız verin**](https://forms.gle/YOURLINK4)
```

**Form 5 - Not Yükleme Formu:**

```markdown
Bulun:

1.  [📤 **Buraya tıklayarak**](#placeholder-not-yukleme) dosyalarınızı yükleyebilirsiniz. _(Google Forms linki eklenecek)_

Değiştirin:

1.  [📤 **Buraya tıklayarak**](https://forms.gle/YOURLINK5) dosyalarınızı yükleyebilirsiniz.
```

### Adım 4: Değişiklikleri Kaydedin

Dosyayı kaydedip GitHub'a Push edin (veya Pull Request gönderin).

---

## 🔄 Form Yanıtlarını İnceleme

### Yanıtları Görüntüleme

1. [Google Forms](https://forms.google.com) sayfasında formunuzu açın
2. "Yanıtlar" sekmesine tıklayın
3. Yanıtları göz atın, eğer istatistiksel grafik isterseniz "Özet" görünümünü seçin

### Yanıtları Google Sheets'e Aktarma

1. "Yanıtlar" sekmesinde sağ üst köşedeki 3 nokta menüsüne tıklayın
2. "Elektronik tablo oluştur" seçeneğini seçin
3. Yeni bir Google Sheets dosyası oluşturulacak
4. Bu Sheets dosyasından yanıtları göz atabilir ve indirebilirsiniz

### Manuel Entegrasyon

Şimdilik form yanıtları README'ye manuel olarak eklenecektir. Gelecekte n8n otomasyonu eklenebilir.

---

## 💡 İpuçları ve En İyi Uygulamalar

1. **Anonim Yanıtlar**
   - Tüm formlar anonim olmalı (gizlilik ve dürüst geri bildirim için)
   - Tercihler → "Anonim yanıtlara izin ver" seçeneğini her zaman işaretleyin

2. **Dönem Güncelleme**
   - Her yeni dönem başında "Dönem" dropdown'unu güncelleyin
   - Eski dönemleri kaldırmayın (geçmiş veriler için)

3. **Form Başlıkları**
   - Açık ve anlaşılır başlıklar kullanın
   - Türkçe karakterleri doğru kullanın

4. **Not Yükleme Formu**
   - Google Drive kapasitesini kontrol edin
   - Dosya boyutu sınırını takip edin (100MB)
   - Yüklenen dosyaları düzenli olarak kontrol edin

5. **Form Linklerini Güvende Tutun**
   - `forms.gle` linklerini paylaşmaktan önce formun ayarlarını kontrol edin
   - Anonim seçeneğinin işaretli olduğundan emin olun

6. **Test Yapmak**
   - Her formu test ortamında açıp soruları ve ayarları kontrol edin
   - Gereksiz sorular eklemeyin (yanıt oranı düşer)

---

## ❓ Sık Sorulan Sorular

### S: Form yanıtları otomatik olarak README'ye eklenecek mi?

**C:** Hayır, şimdilik manuel olarak eklenecek. Gelecekte n8n otomasyonu eklenebilir.

### S: Formları oluşturduktan sonra soruları değiştirebilir miyim?

**C:** Evet, istediğiniz zaman değiştirebilirsiniz. Ancak yanıtlar değiştirilmeyecek.

### S: Not yükleme formu dosyaları nereye kaydedilir?

**C:** Google Drive'ınızda oluşturduğunuz klasöre kaydedilir. Form ayarlarında klasörü seçebilirsiniz.

### S: Formların linkini paylaşmamdan sonra kimler erişebilir?

**C:** Linki olan herkes (kimliği gizli tutarak) form doldurabileceği için internete açık tutunsunuz.

### S: Yanıtları silmek isteyip form yapısını tutabilir miyim?

**C:** Evet, "Yanıtlar" sekmesinde yanıtları silebilirsiniz (Ctrl+A ile seçip Delete tuşuna basın).

### S: Form başlığını ve açıklamasını değiştirebilir miyim?

**C:** Evet, istediğiniz zaman değiştirebilirsiniz.

### S: Formları deaktive etmek isteyersem ne yapabilirim?

**C:** Form ayarlarında "Yanıtları topla" kutusunun işaretini kaldırırsanız form kapalı olur.

### S: Birden fazla hoca veya derse yanıt verilebildi, sorun olur mu?

**C:** Hayır, birden fazla yanıt beklenmektedir. İstatistikler aggregate olarak gösterilecek.

---

## 📞 Destek ve Sorular

Sorularınız veya sorunlarınız olursa:

- GitHub Issues: [ktunot GitHub](https://github.com/c4kar/ktunot/issues)
- Form ayarlarında sorun yaşarsanız Google Forms resmi yardımını kontrol edin

---

## ✅ Kontrol Listesi

Form oluşturmayı tamamladıktan sonra kontrol edin:

- [ ] **Form 1: Hocalar İçin Yorum**
  - [ ] 4 soru eklendi (Hoca Adı, Ders Adı, Yorum Metni, Dönem)
  - [ ] Anonim yanıtlar etkinleştirildi
  - [ ] Form linki kopyalandı
  - [ ] README'ye entegre edildi

- [ ] **Form 2: Hocalar İçin Yıldız**
  - [ ] 4 soru eklendi (Hoca Adı, Ders Adı, Yıldız, Dönem)
  - [ ] Anonim yanıtlar etkinleştirildi
  - [ ] Form linki kopyalandı
  - [ ] README'ye entegre edildi

- [ ] **Form 3: Dersler İçin Yorum**
  - [ ] 4 soru eklendi (Ders Adı, Bölüm, Yorum Metni, Dönem)
  - [ ] Anonim yanıtlar etkinleştirildi
  - [ ] Form linki kopyalandı
  - [ ] README'ye entegre edildi

- [ ] **Form 4: Dersler İçin Yıldız**
  - [ ] 4 soru eklendi (Ders Adı, Bölüm, Yıldız, Dönem)
  - [ ] Anonim yanıtlar etkinleştirildi
  - [ ] Form linki kopyalandı
  - [ ] README'ye entegre edildi

- [ ] **Form 5: Not Yükleme Formu**
  - [ ] 6 soru eklendi (Dosya Yükleme, Ders Adı, Bölüm, İçerik Türü, Dönem, Ek Açıklama)
  - [ ] Anonim yanıtlar etkinleştirildi
  - [ ] Google Drive klasörü seçildi
  - [ ] Form linki kopyalandı
  - [ ] README'ye entegre edildi

- [ ] **README Güncellemeleri**
  - [ ] 5 placeholder tamamının form linkle değiştirildi
  - [ ] Değişiklikler kaydedildi
  - [ ] Push/Pull Request gönderildi

---

**Rehberi oluşturduktan sonra her formun çalışması test ediniz!**
