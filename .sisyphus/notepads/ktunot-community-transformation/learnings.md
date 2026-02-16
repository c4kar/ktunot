## [2026-02-14] Task 1.1: README.md Yeniden Yazımı

### Öğrenilenler

- YTÜ README yapısı: collapsible TOC, emoji section headers, form placeholders
- Komarev badge syntax: `username` parametresi depo adı olmalı (kullanıcı adı değil)
- Google Forms entegrasyonu: 5 ayrı form placeholder (4 geri bildirim + 1 upload)
- Quartz tanıtımı: footer'da tek satır yeterli (uzun promo gereksiz)

### Kararlar

- Katkıda bulunanlar: Manuel liste (otomatik All-Contributors yerine)
- Form placeholder formatı: `#placeholder-{type}` (anchor link formatı)
- Quartz branding: Minimal (single-line credit)

## [2026-02-14] Task 1.2: Google Forms Kurulum Rehberi

### Öğrenilenler
- Google Forms: 5 form specification (4 feedback + 1 upload)
- Anonim yanıt ayarları: kullanıcı gizliliği ve dürüst geri bildirim için kritik
- File upload form: Google Drive entegrasyonu gerekiyor (100MB limit)
- Form link formatı: forms.gle kısa link kullan (README entegrasyonu için)
- Bölüm listesi: EEE + diğer mühendislik bölümleri
- Dönem dropdown: Dinamik (her dönem güncellenecek)

### Kararlar
- Rehber dili: Türkçe (KTÜN tarafından kurulan proje, Türk kullanıcı tabanı)
- Form soruları: Türkçe ve açık, katılımı teşvik edecek şekilde tasarlandı
- Dosya tipleri: PDF, DOCX, PPTX, ZIP (uyumlu ve yaygın formatlar)
- Entegrasyon: Manuel README güncellemesi (n8n otomasyonu gelecekte)
- Anonim olmayan hocalar: Topluluk geri bildirim kültürü için güvenlik gerekli

### Yapı Seçimleri
- 5 form yapısı: 2 hoca + 2 ders (yorum/yıldız) + 1 upload form
- Doğrusal ölçek (1-5): Yıldız puanlaması için standart
- Checkbox ile çoklu seçim: Dosya türleri için
- Açılır menü: Bölüm ve dönem seçimi için

### İpuçları
- Form başlıkları: Anlaşılır ve kısa olmalı
- İpucu metni: Kullanıcıları doğru bilgi yazmaya yönlendir
- Yapılandırılmış veri: Yanıtları kolayca analiz etmek için soruları yapılandırılmış tut
- Gizlilik: Tüm formlar anonim olmalı (Tercihler → Anonim yanıtlara izin ver)

## [2026-02-14] Task 2.1: GitHub Issue Templates

### Öğrenilenler
- Issue template YAML frontmatter: name, about, title, labels, assignees
- Türkçe emoji kullanımı: 🐛 (hata), ✨ (özellik), 📝 (genel)
- Template yapısı: Net başlıklar, örnek açıklamalar, teşekkür mesajı
- BLANK_ISSUE: Minimal template (sadece geri bildirim alanı)

### Kararlar
- 3 template: Bug, Feature, Blank (YTÜ standartı)
- Title prefix: [HATA], [ÖZELLİK] (kullanıcıya öneri)
- Labels: bug, enhancement (GitHub default labels)
- Assignees: Boş (manuel atama)

### Yapılar
- bug_report.md: Hata sayfası, ekran görüntüsü, tekrarlama adımları
- feature_request.md: Özellik açıklaması, neden gerekli, nasıl çalışmalı
- BLANK_ISSUE.md: Minimal geri bildirim alanı

### İpuçları
- README issue links (.github/ISSUE_TEMPLATE templatelerle çalışır)
- Template ismi (name:) GitHub UI'da görünür
- Title prefix: Açılabilir konular için otomatik kategorilendirme

## [2026-02-14] Task 1.3: CONTRIBUTING.md Oluşturma

### Öğrenilenler
- CONTRIBUTING.md: 100 satır limit (kısa ve öz)
- 3 katkı yöntemi: Form yükleme (en kolay), Issues (hata bildirme), PR (teknik)
- Davranış kuralları: Saygı, akademik dürüstlük, telif hakkı
- Dosya yapısı açıklaması: content/ klasörü yapısını göster

### Kararlar
- Email obfuscation: yc4kar[at]gmail[nokta]com formatı
- Quartz footer: Minimal branding (README ile tutarlı)
- PR workflow: Standard GitHub flow (fork + branch + PR)
- Katkı odağı: Markdown content only (code değişikliği yok)

## [2026-02-16] Task 3.1: Kavramlar Klasör Yapısı

### Öğrenilenler
- Quartz wikilink formatı: [[Kavram Adı]] (internal linking)
- Kavramlar organizasyonu: 4 kategori (Sınavlar, Akademik Süreçler, Kampüs Yaşamı, Uluslararası)
- 8 kavram belirlendi: Vize, Final, Bütünleme, Ders Seçimi, Staj, Yatay Geçiş, Öğrenci Toplulukları, Erasmus
- Frontmatter: title only (minimal Quartz config)

### Kararlar
- Klasör adı: Kavramlar (Türkçe, okunabilir URL)
- Index organizasyonu: Kategori bazlı (kronolojik değil)
- Disclaimer eklendi: "Resmi bilgi için bölüm sekreterliğine başvurunuz"
- Katkı linklerı eklendi: Issue ve CONTRIBUTING.md referansları

### Yapı
- 4 kategori başlığı (📝 🎓 🏫 🌍 emoji)
- Her kavram kısa açıklama ile listelendi
- Nasıl kullanılır bölümü eklendi (kullanıcı rehberliği)

## [2026-02-17] Task 3.2: Kavram Sayfaları Oluşturma

### Öğrenilenler
- 8 kavram sayfası oluşturuldu (KTÜN resmi kaynaklarından)
- Tutarlı format: Nedir, Süreç, Tarihler, Belgeler, SSS, Linkler, İpuçları, İletişim
- KTÜN'e özel içerik: ktun.edu.tr resmi araştırmasından alındı
- Quartz wikilink formatı kullanıldı: [[Kavram Adı]]
- Her sayfada disclaimer eklendi

### Kararlar
- Dosya adları: Tire ile ayırma (Ders-Seçimi.md, Yatay-Geçiş.md, Öğrenci-Toplulukları.md)
- Tags: [akademik, süreç] veya [akademik, sınav] veya [kampüs, sosyal] vb.
- SSS sayısı: 3-5 soru (fazla detaydan kaçınıldı)
- Linkler: Sadece resmi KTÜN linkleri (OBS, Proto, Yatay Geçiş sistemi vb.)
- İpuçları: Öğrenci perspektifinden pratik öneriler
- KTÜN'e özel bilgiler: 2025-2026 tarihleri, telefon numaraları, email adresleri
