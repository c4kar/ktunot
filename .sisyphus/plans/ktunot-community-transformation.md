# ktünot Topluluk Dönüşümü - İş Planı

## 📋 Proje Özeti

**Hedef**: ktünot projesini tek kişilik bir not paylaşım sisteminden **topluluk odaklı bir bilgi mirası arşivine** dönüştürmek.

**Referans**: YTÜ Bilgisayar Mühendisliği GitHub Arşivi  
**Süre**: 3-4 hafta (Normal tempo)  
**Strateji**: Organik büyüme (iyi ürün kendini yayar)  
**Yayınlama**: Faz bazında kademeli yayınlama (her faz bittiğinde güncelle)

---

## ✅ Kabul Kriterleri

Plan tamamlandığında şunlar sağlanmalı:

1. ✅ **README.md** YTÜ standartlarında, tamamen Türkçe, detaylı yeniden yazılmış
2. ✅ **Google Forms** 4 adet oluşturulmuş ve README'de linklenmiş (kullanıcı oluşturacak - talimat verilecek)
3. ✅ **Kavramlar bölümü** website'te yayında (`content/Kavramlar/`)
4. ✅ **Issue templates** GitHub'da mevcut (3 adet: bug, feature, blank)
5. ✅ **CONTRIBUTING.md** rehberi oluşturulmuş
6. ✅ **Not yükleme** kolaylaştırılmış (form + rehber)
7. ✅ **Komarev görüntülenme sayacı** doğru şekilde eklenmiş
8. ✅ Öğrenciler **kolayca not yükleyebilmeli**
9. ✅ Öğrenciler **kolayca geri bildirim verebilmeli**

---

## 🚫 Kapsam Dışı (Bu Planda Yapılmayacak)

- ❌ Maaş istatistikleri
- ❌ Website kodu değişikliği (Quartz config, layout vb.)
- ❌ n8n otomasyonu değişikliği
- ❌ Haftalık blog
- ❌ NotebookLM entegrasyonu
- ❌ Sınav arşivi otomasyonu
- ❌ GitHub Actions/CI kurulumu
- ❌ Aktif tanıtım kampanyası
- ❌ 10'dan fazla kavram sayfası (MVP: 7-8 temel kavram)

---

## 🎯 Guardrails (Sınırlar)

### Yapılacak ✅

- README Türkçe yeniden yazım (YTÜ stili)
- 4 Google Form linki ekleme (form oluşturma talimatı verilecek)
- Kavramlar klasör yapısı + 7-8 temel kavram sayfası
- 3 Türkçe GitHub issue template
- Kısa CONTRIBUTING.md (maksimum 100 satır)
- Komarev sayacı ekleme (`username=ktunot`)

### Yapılmayacak ❌

- Website kodu değişikliği (sadece markdown content)
- Form oluşturma (kullanıcı yapacak - talimat verilecek)
- 10+ kavram sayfası (7-8 ile başla)
- GitHub Actions workflow
- Maaş, blog, NotebookLM gibi gelecek özellikler

---

## 📦 Deliverables (Teslimatlar)

| #   | Deliverable           | Dosya                                    | Açıklama                     |
| --- | --------------------- | ---------------------------------------- | ---------------------------- |
| 1   | README.md             | `/README.md`                             | YTÜ stili, Türkçe, detaylı   |
| 2   | Google Forms Talimatı | `.sisyphus/guides/google-forms-setup.md` | 4 form oluşturma rehberi     |
| 3   | Issue Templates       | `.github/ISSUE_TEMPLATE/*.md`            | 3 adet (bug, feature, blank) |
| 4   | Contributing Guide    | `CONTRIBUTING.md`                        | Katkıda bulunma rehberi      |
| 5   | Kavramlar Bölümü      | `content/Kavramlar/*.md`                 | 7-8 temel kavram sayfası     |
| 6   | Kavramlar Ana Sayfa   | `content/Kavramlar/index.md`             | Kavramlar bölümü giriş       |

---

## 📝 Detaylı Task Listesi

### Faz 1: Temel Dokümantasyon (Öncelik: Yüksek)

#### Task 1.1: README.md Yeniden Yazımı

**Parallelizable**: ❌ Hayır (diğer tasklar README'yi referans alabilir)

**Beklenen Çıktı**:

- [x] Tamamen Türkçe README.md
- [x] YTÜ'den ilham alınmış yapı (🗂 İçindekiler, 🗣️ Geri Bildirim, 🤝 Katkıda Bulunun bölümleri)
- [x] Quartz bölümü kısaltılmış (alt kısımda kısa "Powered by Quartz v4" notu)
- [x] Komarev sayacı eklendi (`username=ktunot`)
- [x] Katkıda bulunanlar bölümü eklendi (başlangıçta boş, manuel eklenecek)
- [x] Google Forms placeholder linkleri eklendi (🔗 #placeholder-hoca-yorum formatında)

**Araçlar**:

- Read: Mevcut README.md ve YTÜREADME.md
- Edit: README.md'yi yeniden yaz
- Grep: Mevcut linkleri ve yapıyı anla

**Dikkat Edilecekler**:

- YTÜ README'sinden doğrudan kopyalama - KTÜN'e uyarla
- Mevcut n8n, ktunDepo gibi referansları koru
- EEM bölümü vurgusunu koru (şu an sadece EEM içeriği var)
- Diğer bölümlere genişleme vizyonunu belirt

**Zorunlu Bölümler**:

1. Başlık ve proje açıklaması
2. 🗂 İçindekiler (collapsible)
3. 🗣️ Geri Bildirim ve Değerlendirme (4 form linki)
4. 🤝 Katkıda Bulunun (form linki + PR rehberi)
5. 👥 Katkıda Bulunanlar (başlangıçta boş)
6. 📝 Yapılacaklar Listesi (mevcut TODO'ları tut)
7. Komarev görüntülenme sayacı
8. Alt kısımda: Powered by Quartz v4 (kısa not)

---

#### Task 1.2: Google Forms Oluşturma Talimatı

**Parallelizable**: ✅ Evet (README ile paralel yapılabilir)

**Beklenen Çıktı**:

- [ ] `.sisyphus/guides/google-forms-setup.md` dosyası oluşturuldu
- [ ] 4 form için detaylı talimat (adım adım, ekran görüntülü açıklama metni)
- [ ] Form soruları örnekleri
- [ ] Form ayarları (anonim, sonuç gizleme vb.)
- [ ] README'ye entegrasyon talimatı

**4 Form**:

1. **Hocalar İçin Yorum** (✍️ Emoji)
   - Sorular: Hoca adı, Ders, Yorum metni, Dönem
   - Anonim: Evet
2. **Hocalar İçin Yıldız** (⭐ Emoji)
   - Sorular: Hoca adı, Ders, Yıldız (1-5), Dönem
   - Anonim: Evet
3. **Dersler İçin Yorum** (✍️ Emoji)
   - Sorular: Ders adı, Bölüm, Yorum metni, Dönem
   - Anonim: Evet
4. **Dersler İçin Yıldız** (⭐ Emoji)
   - Sorular: Ders adı, Bölüm, Yıldız (1-5), Dönem
   - Anonim: Evet

**Araçlar**:

- Write: Talimat dosyası oluştur
- YTÜ README'sini referans al (form yapısını anla)

**Dikkat Edilecekler**:

- KTÜN'e özel bölüm isimleri kullan (EEM, Bilgisayar Müh., Makine Müh. vb.)
- Form sonuçlarının manuel README'ye nasıl ekleneceğini açıkla
- Anonim yanıt ayarlarını vurgula
- Form linklerinin nasıl alınacağını göster

---

#### Task 1.3: CONTRIBUTING.md Oluşturma

**Parallelizable**: ✅ Evet (README ile paralel yapılabilir)

**Beklenen Çıktı**:

- [ ] `CONTRIBUTING.md` dosyası oluşturuldu
- [ ] Türkçe, kısa (maksimum 100 satır)
- [ ] 3 katkı yöntemi açıklandı:
  1. Google Forms ile not yükleme
  2. GitHub Issues ile hata bildirme
  3. Pull Request ile doğrudan katkı

**İçerik Yapısı**:

```markdown
# Katkıda Bulunma Rehberi

## Hoş Geldiniz!

## Katkı Yöntemleri

### 1. 📤 Not Yükleme (En Kolay)

[Google Form linki] üzerinden...

### 2. 🐛 Hata Bildirme

[GitHub Issues] üzerinden...

### 3. 🔧 Doğrudan Katkı (Pull Request)

1. Repository'yi fork edin
2. Değişikliklerinizi yapın
3. Pull request gönderin

## Davranış Kuralları

- Saygılı olun
- Yapıcı eleştiri yapın
- Akademik dürüstlük

## Sorularınız mı var?

yc4kar[at]gmail[nokta]com
```

**Araçlar**:

- Write: CONTRIBUTING.md oluştur
- YTÜ modelini referans al ama kısa tut

---

### Faz 2: GitHub Templates (Öncelik: Yüksek)

#### Task 2.1: Issue Templates Oluşturma

**Parallelizable**: ✅ Evet (Faz 1 ile paralel yapılabilir)

**Beklenen Çıktı**:

- [ ] `.github/ISSUE_TEMPLATE/bug_report.md` oluşturuldu
- [ ] `.github/ISSUE_TEMPLATE/feature_request.md` oluşturuldu
- [ ] `.github/ISSUE_TEMPLATE/BLANK_ISSUE.md` oluşturuldu
- [ ] Tüm template'ler Türkçe
- [ ] YTÜ template'lerinden ilham alınmış

**Araçlar**:

- Read: Mevcut `.github/ISSUE_TEMPLATE/` klasörü (varsa)
- Write: 3 yeni template dosyası
- YTÜ repo'sunu referans al

**Template İçerikleri**:

1. **bug_report.md**:

```yaml
---
name: 🐛 Hata Bildirimi
about: Sitede veya içerikte bulduğunuz hataları bildirin
title: '[HATA] '
labels: bug
assignees: ''
---

## Hata Açıklaması
[Hatayı açıklayın]

## Hangi Sayfada?
[Sayfa linki veya ders adı]

## Ekran Görüntüsü (Opsiyonel)
[Ekran görüntüsü ekleyin]
```

2. **feature_request.md**:

```yaml
---
name: ✨ Özellik İsteği
about: Projede görmek istediğiniz özellikleri önerin
title: '[ÖZELLİK] '
labels: enhancement
assignees: ''
---

## Özellik Açıklaması
[Özelliği açıklayın]

## Neden Gerekli?
[Kullanım senaryosu]

## Alternatifler (Opsiyonel)
[Başka çözümler düşündünüz mü?]
```

3. **BLANK_ISSUE.md**:

```yaml
---
name: 📝 Genel Geri Bildirim
about: Diğer konular için
title: ""
labels: ""
assignees: ""
---
[Geri bildiriminizi buraya yazın]
```

---

### Faz 3: Kavramlar Bölümü (Öncelik: Orta)

#### Task 3.1: Kavramlar Klasör Yapısı

**Parallelizable**: ❌ Hayır (Task 3.2 bağımlı)

**Beklenen Çıktı**:

- [ ] `content/Kavramlar/` klasörü oluşturuldu
- [ ] `content/Kavramlar/index.md` ana sayfa oluşturuldu
- [ ] KTÜN'e özel kavramlar belirlendi (7-8 tane MVP)

**MVP Kavramlar** (KTÜN'e Özel İçerik):

1. **Staj** - KTÜN staj süreci, dönem içi/yaz, saydırma
2. **Bütünleme** - Bütünleme sınavı nedir, kimler girer, süreç
3. **Vize** - Vize sınavları, mazeret, süreç
4. **Final** - Final sınavları, süreç
5. **Ders Seçimi** - KTÜN ders seçim sistemi, kontenjanlar, ipuçları
6. **Yatay Geçiş** - Yatay geçiş süreci, şartlar, başvuru
7. **Öğrenci Toplulukları** - KTÜN'deki aktif öğrenci kulüpleri ve topluluklar
8. **Erasmus** (Opsiyonel) - KTÜN Erasmus süreci

**index.md İçeriği**:

```markdown
---
title: Kavramlar
---

# 🔍 Kavramlar Ansiklopedisi

KTÜN öğrenci hayatınızda karşılaşacağınız kavramlar hakkında detaylı bilgiler.

## 📚 Kategoriler

### Sınavlar

- [[Vize]]
- [[Final]]
- [[Bütünleme]]

### Akademik Süreçler

- [[Ders Seçimi]]
- [[Staj]]
- [[Yatay Geçiş]]

### Kampüs Yaşamı

- [[Öğrenci Toplulukları]]

### Uluslararası Fırsatlar

- [[Erasmus]]

---

> Bu sayfalar öğrenci deneyimlerine dayanmaktadır. Resmi bilgi için üniversite yönetmeliklerine başvurunuz.
```

**Araçlar**:

- Write: Klasör ve index.md oluştur
- Glob: Mevcut content/ yapısını kontrol et

---

#### Task 3.2: Kavram Sayfaları Oluşturma

**Parallelizable**: ✅ Evet (her kavram bağımsız yazılabilir)

**Beklenen Çıktı**:

- [ ] 7-8 kavram sayfası oluşturuldu
- [ ] Her sayfa KTÜN'e özel içerik
- [ ] Tutarlı format (Soru-Cevap yapısı)
- [ ] İçsel linkler (Quartz wikilink: `[[Kavram Adı]]`)

**Format Örneği** (`content/Kavramlar/Staj.md`):

```markdown
---
title: Staj
tags: [akademik, süreç]
---

# Staj

## 📖 Staj Nedir?

Bölümle alakalı herhangi bir şirkette, üniversiteye bildirerek çalışma işlemidir.

## ❓ Sıkça Sorulan Sorular

### Staj Dönem İçi Yapılabilir mi?

Dönem içi yapılabilir ama haftada en az 2 günün boş olması lazımdır...

### Staj Tek Seferde mi Yapılmalı?

Staj parça parça yapılabilir. Bu parçalar 10'un katı olmalıdır...

### Genel Staj ve Mesleki Stajın Farkı Nedir?

...

## 📋 Staj Süreci

1. Staj yeri bulma
2. Üniversiteye bildirme
3. Evrak teslimi
4. ...

## 🔗 Faydalı Linkler

- [KTÜN Staj Belgeleri](#)
- ...

## 💡 İpuçları

- ...

---

> **Not**: Bu sayfa öğrenci deneyimlerine dayanmaktadır. Resmi bilgi için bölüm sekreterliğine başvurunuz.
```

**Kavramlar** (Her biri ayrı dosya):

1. `Staj.md`
2. `Bütünleme.md`
3. `Vize.md`
4. `Final.md`
5. `Ders-Seçimi.md`
6. `Yatay-Geçiş.md`
7. `Öğrenci-Toplulukları.md`
8. `Erasmus.md` (opsiyonel)

**Araçlar**:

- Write: 5-6 kavram dosyası oluştur
- YTÜ'nün kavramlar bölümünden yapı al, içeriği KTÜN'e özel yaz

**Dikkat Edilecekler**:

- YTÜ içeriğini DOĞRUDAN kopyalama (KTÜN'e özel yaz)
- Soru-Cevap formatı kullan (YTÜ stili)
- Resmi olmayan bilgi olduğunu belirt (disclaimer)
- İçsel linkler kullan (`[[Diğer Kavram]]`)

---

### Faz 4: Entegrasyon ve Test (Öncelik: Yüksek)

#### Task 4.1: README Placeholder Güncelleme

**Parallelizable**: ❌ Hayır (Google Forms oluşturulduktan sonra)

**Beklenen Çıktı**:

- [ ] README'deki placeholder linkler gerçek Google Form linkleriyle değiştirildi
- [ ] Tüm linkler test edildi (404 kontrolü)

**Not**: Bu task **kullanıcı** Google Forms oluşturduktan sonra yapılacak

**Araçlar**:

- Edit: README.md placeholder linklerini güncelle
- Bash: Link kontrolü (wget/curl ile 200 OK kontrolü)

---

#### Task 4.2: Kavramlar İçsel Link Kontrolü

**Parallelizable**: ✅ Evet (Task 4.1 ile paralel)

**Beklenen Çıktı**:

- [ ] Tüm `[[wikilink]]` formatı doğru
- [ ] Kırık linkler yok
- [ ] index.md'deki linkler çalışıyor

**Araçlar**:

- Grep: `\[\[` pattern ile wikilink ara
- Read: Her kavram dosyasını kontrol et

---

#### Task 4.3: Dokümantasyon Tutarlılık Kontrolü

**Parallelizable**: ✅ Evet (Task 4.1, 4.2 ile paralel)

**Beklenen Çıktı**:

- [ ] README, CONTRIBUTING, issue templates tutarlı
- [ ] Ton ve dil tutarlı (Türkçe, resmi olmayan ama saygılı)
- [ ] Email formatı tutarlı (`yc4kar[at]gmail[nokta]com`)
- [ ] Link formatları tutarlı

**Araçlar**:

- Read: Tüm dokümantasyon dosyaları
- Grep: Email, link pattern kontrolleri

---

### Faz 5: Final Touches (Öncelik: Düşük)

#### Task 5.1: Komarev Sayacı Test

**Parallelizable**: ✅ Evet

**Beklenen Çıktı**:

- [ ] Komarev badge görünüyor
- [ ] `username=ktunot` parametresi doğru
- [ ] Badge stili YTÜ ile aynı (`for-the-badge`, `color=orange`)

**Badge Kodu**:

```markdown
![](https://komarev.com/ghpvc/?username=ktunot&label=Görüntülenme+Sayısı&abbreviated=true&style=for-the-badge&color=orange)
```

**Araçlar**:

- Edit: README.md (badge kontrol)
- Webfetch: Badge URL'ini test et

---

#### Task 5.2: Katkıda Bulunanlar Bölümü İlklendirme

**Parallelizable**: ✅ Evet

**Beklenen Çıktı**:

- [ ] README'de "👥 Katkıda Bulunanlar" bölümü var
- [ ] Başlangıçta kurucu ekip eklendi (kullanıcının isteğine göre)
- [ ] Manuel ekleme talimatı `CONTRIBUTING.md`'de

**Format**:

```markdown
## 👥 Katkıda Bulunanlar

Projeye katkıda bulunan herkese teşekkür ederiz!

- [@c4kar](https://github.com/c4kar) - Kurucu
- [İsim eklemek için katkıda bulunun!](CONTRIBUTING.md)
```

**Araçlar**:

- Edit: README.md (contributors bölümü)

---

## 🎨 Parallelization Map

### Paralel Grup 1 (Faz 1 - Dokümantasyon)

- ✅ Task 1.2 (Google Forms Talimatı)
- ✅ Task 1.3 (CONTRIBUTING.md)
- ✅ Task 2.1 (Issue Templates)

**Not**: Task 1.1 (README) tamamlandıktan sonra bu grup başlatılabilir

### Paralel Grup 2 (Faz 3 - Kavramlar)

- ✅ Task 3.2 (6 kavram sayfası - her biri bağımsız)

**Not**: Task 3.1 tamamlandıktan sonra bu grup başlatılabilir

### Paralel Grup 3 (Faz 4 - Test)

- ✅ Task 4.2 (İçsel link kontrolü)
- ✅ Task 4.3 (Tutarlılık kontrolü)

**Not**: Task 4.1 kullanıcı formu oluşturduktan sonra yapılabilir

### Paralel Grup 4 (Faz 5 - Final)

- ✅ Task 5.1 (Komarev test)
- ✅ Task 5.2 (Contributors)

---

## 📊 Bağımlılık Grafiği

```
Task 1.1 (README)
    ├─> Task 1.2 (Forms Talimatı) ─┐
    ├─> Task 1.3 (CONTRIBUTING)   ├─> Paralel Grup 1
    └─> Task 2.1 (Issue Templates)─┘

Task 3.1 (Kavramlar Yapısı)
    └─> Task 3.2.1 (Staj.md)              ─┐
        Task 3.2.2 (Bütünleme.md)         │
        Task 3.2.3 (Vize.md)              │
        Task 3.2.4 (Final.md)             ├─> Paralel Grup 2
        Task 3.2.5 (Ders Seçimi.md)       │
        Task 3.2.6 (Yatay Geçiş.md)       │
        Task 3.2.7 (Öğrenci Toplulukları) │
        Task 3.2.8 (Erasmus.md)           ─┘

[KULLANICI: Google Forms Oluşturma]
    └─> Task 4.1 (README Link Update)

Task 4.2 (Link Kontrolü)    ─┐
Task 4.3 (Tutarlılık)       ├─> Paralel Grup 3
                            ─┘

Task 5.1 (Komarev)          ─┐
Task 5.2 (Contributors)     ├─> Paralel Grup 4
                            ─┘
```

---

## 🔍 Verification Checklist (Her Task Sonrası)

### Automated

- [ ] `npx quartz build` başarılı (syntax hataları yok)
- [ ] Markdown lint hataları yok (prettier)
- [ ] Kırık linkler yok (grep `\]\(.*\)` kontrol)

### Manual

- [ ] README okunabilir ve tutarlı
- [ ] Türkçe yazım hataları yok
- [ ] YTÜ'den doğrudan kopyalanan içerik yok
- [ ] Tüm placeholder linkler işaretli (#placeholder-)
- [ ] Email formatı doğru (`[at]`, `[nokta]`)

---

## 📌 Önemli Notlar

### Kullanıcı Sorumlulukları

1. **Google Forms Oluşturma**: Task 1.2'deki talimat dokümanına göre 4 form oluşturup linklerini README'ye ekleyecek
2. **Form Linklerini README'ye Ekleme**: Task 4.1'de placeholder'ları gerçek linklerle değiştirecek

### KTÜN'e Özel İçerik

- Kavramlar YTÜ'den **ilham alacak** ama **KTÜN'e özel** yazılacak
- EEE bölümü vurgusu korunacak
- Diğer bölümlere genişleme vizyonu belirtilecek

### Quartz v4 Uyumluluğu

- Tüm markdown dosyaları Quartz v4 frontmatter formatına uygun
- Wikilink kullanımı (`[[Kavram Adı]]`)
- Tag sistemi kullanımı (`tags: [akademik, süreç]`)

---

## 🚀 Başlatma Talimatları

Bu planı başlatmak için:

```bash
/start-work ktunot-community-transformation
```

---

**Plan Versiyonu**: 1.0  
**Oluşturulma**: 2026-02-13  
**Son Güncelleme**: 2026-02-13
