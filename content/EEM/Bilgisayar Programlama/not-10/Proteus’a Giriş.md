# Bilgisayar Programlama 2  
## Ders Notu 10: Proteus’a Giriş  

---

## İçindekiler

- [Proteus Nedir? Ne İşe Yarar?](#proteus-nedir-ne-i̇şe-yarar)
- [ISIS Araç Çubukları](#isis-araç-çubukları)
- [Display Araç Çubuğu](#display-araç-çubuğu)
- [Düzen Araç Çubuğu](#düzen-araç-çubuğu)
- [Dizayn Araç Çubuğu](#di̇zayn-araç-çubuğu)
- [Tasarım Araç Çubuğu](#tasarım-araç-çubuğu)
- [ISIS Program Ana Menüsü](#isis-program-ana-menüsü)
- [File Menüsü](#file-menüsü)
- [View Menüsü](#view-menüsü)
- [Edit Menüsü](#edit-menüsü)
- [Tools Menüsü](#tools-menüsü)
- [Design Menüsü](#design-menüsü)
- [Graph Menüsü](#graph-menüsü)
- [Source Menüsü](#source-menüsü)
- [Debug Menüsü](#debug-menüsü)
- [Library Menüsü](#library-menüsü)
- [Template Menüsü](#template-menüsü)
- [System Menüsü](#system-menüsü)
- [Help Menüsü](#help-menüsü)
- [Kaynaklar](#kaynaklar)

---

## Proteus Nedir? Ne İşe Yarar?

**Proteus**, elektronik devrelerin tasarlanabileceği, simülasyonunun yapılabileceği ve baskı devre (PCB) şemasının çıkarılabileceği profesyonel bir devre simülasyonu ve tasarım programıdır.  

Proteus, iki temel modülden oluşur:

- **ISIS**: Devre tasarımı ve simülasyonu için kullanılır.
- **ARES**: Baskılı devre (PCB) tasarımını yapmak için kullanılır.

![img-0.jpeg](img-0.jpeg)

Program ilk açıldığında **ISIS** arayüzü karşımıza gelir. Bu modülde devre tasarımı yapılır ve simülasyon testleri yapılır.

![img-1.jpeg](img-1.jpeg)

---

## ISIS Araç Çubukları

ISIS program arayüzünde aşağıdaki araç çubukları yer alır:

- **Başlık Çubuğu**: En üstte yer alır.
- **Menü Çubuğu**: Başlık çubuğunun hemen altında bulunur.
- **Araç Çubukları**: Toplam 7 adet araç çubuğu vardır. Bunlar:
  - Dosya/Yazdırma Araç Çubuğu
  - Display Araç Çubuğu
  - Düzen Araç Çubuğu
  - Dizayn Araçları
  - Tasarım Araç Çubuğu (solda)
  - Yön Araç Çubuğu (altta)
  - Animasyon Kontrol Paneli (altta)

Ek olarak **Tasarım Alanı Ön Görünüş** ve **Durum Çubuğu** da arayüzde yer alır.

---

## Display Araç Çubuğu

| Sıra | İşlev |
|------|-------|
| 1 | Tasarım alanı ekranını yeniler (Redraw). |
| 2 | Izgara noktalarını göster/gizle. |
| 3 | Manuel orijin özelliğini aç/kapat. |
| 4 | Seçilen noktayı merkez yapar. |
| 5 | Görüntüyü büyütür. |
| 6 | Görüntüyü küçültür. |
| 7 | Tüm tasarım alanını gösterir. |
| 8 | Seçilen alanı büyüterek gösterir. |

---

## Düzen Araç Çubuğu

| Sıra | İşlev |
|------|-------|
| - | Seçilen öğeleri panoya kopyalar. |
| - | Panodan öğe yapıştırır. |
| - | Etiketli nesneleri kopyalar. |
| - | Etiketli nesneleri taşır. |
| - | Etiketli nesneleri siler. |
| - | Kütüphaneden cihaz/sembol çağırır. |
| - | Grafik öğeleri yeni cihaz olarak kütüphaneye ekler. |
| - | Visual Packaging Tool’u başlatır. |
| - | Nesneleri temel bileşenlerine ayırır. |

---

## Dizayn Araç Çubuğu

| Sıra | İşlev |
|------|-------|
| 1 | Gerçek zamanlı bağlantı (snap) özelliğini aç/kapat. |
| 2 | Otomatik bağlantı (wire auto-router) özelliğini aç/kapat. |
| 3 | Özellikleri eşleşen bileşenleri arar ve etiketler. |
| 4 | Özellik atama aracı (Property Assignment Tool) açar. |
| 5 | Yeni bir tasarım sayfası oluşturur. |
| 6 | Mevcut tasarım sayfasını siler. |
| 7 | Belirtilen hiyerarşik sayfaya geçer. |
| 8 | Alt sayfaya geçer (klavye ile). |
| 9 | Alt sayfadan üst sayfaya döner. |
| 10 | Malzeme listesi (BOM) oluşturur. |
| 11 | Elektrik kuralları kontrol raporu oluşturur. |
| 12 | Netlist oluşturur ve ARES’e geçer. |

---

## Tasarım Araç Çubuğu

### Temel Tasarım Araçları

| Sıra | Araç | Açıklama |
|------|------|----------|
| 1 | Component | Kütüphaneden bileşen ekleme |
| 2 | Junction dot | Bağlantı noktası (junction) ekleme |
| 3 | Wire label | Bağlantı hattına etiket verme |
| 4 | Text scripts | Metin ekleme |
| 5 | Bus | Çoklu hat (bus) çizimi |
| 6 | Sub-circuit | Alt devre oluşturma |
| 7 | Instant edit mode | Eleman seçme ve düzenleme |

### Simülasyon Araçları

| Araç | Açıklama |
|------|----------|
| Inter-sheet Terminal | Sayfalar arası terminal |
| Device pin | Cihaz pini ekleme |
| Simulation Graph | Simülasyon grafiği oluşturma |
| Tape Recorder | Çıkış sinyallerini kaydetme |
| Generator | Sinyal üreteci ekleme |
| Voltage Probe | Gerilim ölçüm probu |
| Current Probe | Akım ölçüm probu |
| Display operating point | VSM cihazlarını listeleme ve işlem noktası verisi |

### 2D Grafik Araçları

| Sıra | Araç | Açıklama |
|------|------|----------|
| 1 | Line | Çizgi çizme |
| 2 | Box | Dikdörtgen kutu |
| 3 | Circle | Çember |
| 4 | Arc | Yay |
| 5 | Path | Serbest şekil |
| A | Text | Yazı |
| 6 | Symbol | Sembol düzenleme |
| + | Marker | Orijin belirleme |

---

## ISIS Program Ana Menüsü

Ana menüde toplam **12** başlık bulunur:

- **File**
- **View**
- **Edit**
- **Tools**
- **Design**
- **Graph**
- **Source**
- **Debug**
- **Library**
- **Template**
- **System**
- **Help**

![img-4.jpeg](img-4.jpeg)

---

## File Menüsü

- **New Design**: Yeni tasarım başlatır (`UNTITLED.DSN`).
- **Load Design**: Kayıtlı bir dosyayı açar.
- **Save Design**: Mevcut çalışmayı kaydeder.
- **Save Design As**: Farklı adla kaydeder.
- **Import Section**: Dışarıdan tasarım bölümü aktarır.
- **Export Section**: Tasarım bölümünü dışa aktarır.
- **Export Graphics**: Tasarımı resim olarak kaydeder.

![img-5.jpeg](img-5.jpeg)  
![img-6.jpeg](img-6.jpeg)

---

## View Menüsü

- **Redraw**: Ekranı yeniler.
- **Grid**: Izgarayı göster/gizle.
- **Origin**: Manuel orijin ayarlar.
- **X Cursor**: İmleç şekli ayarı.
- **Snap**: Hareket adım ayarı.
- **Pan**: Belirtilen bölgeyi merkeze alır.
- **Toolbars**: Araç çubuklarını göster/gizle.

![img-7.jpeg](img-7.jpeg)  
![img-8.jpeg](img-8.jpeg)  
![img-9.jpeg](img-9.jpeg)  
![img-10.jpeg](img-10.jpeg)

---

## Edit Menüsü

- **Undo / Redo**: İşlem geri al / ileri al.
- **Find and Edit Component**: Bileşen arama ve düzenleme.
- **Align**: Seçilen öğeleri hizalama.
- **Send to back / Bring to front**: Katman sıralaması.
- **Tidy**: Kullanılmayan öğeleri temizleme.

![img-11.jpeg](img-11.jpeg)  
![img-12.jpeg](img-12.jpeg)

---

## Tools Menüsü

- **Real Time Annotation**: Otomatik numaralandırma.
- **Wire Auto Router**: Otomatik hat çizimi.
- **Search and Tag**: Kriterlere göre arama.
- **Property Assignment Tool**: Özellik atama.
- **Global Annotator**: Numaralandırma düzenleme.
- **Bill of Materials**: Malzeme listesi oluşturma.
- **Electrical Rule Check (ERC)**: Elektriksel hata kontrolü.
- **Netlist Compiler / Netlist to ARES**: Netlist oluşturma ve ARES’e aktarma.
- **Backannotate from ARES**: ARES’ten bilgi geri aktarımı.

![img-13.jpeg](img-13.jpeg)  
![img-14.jpeg](img-14.jpeg)  
![img-15.jpeg](img-15.jpeg)

---

## Design Menüsü

- **Configure Power Rails**: Besleme hatlarını ayarlama.
- **Design Explorer**: Tasarım özetini gösterir.
- **Root Sheet 1,2,3...**: Tasarım sayfaları arası geçiş.

![img-16.jpeg](img-16.jpeg)

---

## Graph Menüsü

- **Edit Graph**: Grafik düzenleme.
- **Add Trace**: İzleme noktası ekleme.
- **Simulate Graph**: Grafiği yeniden simüle etme.
- **View Log**: Simülasyon logunu görüntüleme.
- **Export Data**: Veriyi dosyaya aktarma.
- **Batch Mode**: Çoklu sonuç karşılaştırma.
- **Conformance Analysis**: Mikrodenetleyici uygulamalarında uygunluk testi.

![img-17.jpeg](img-17.jpeg)

---

## Source Menüsü

Mikrodenetleyicili devrelerde **.hex dosyalarının** yüklenmesiyle ilgili işlemler yapılır. Genellikle harici derleyiciler (MPLAB X, PIC-C) kullanılır.

---

## Debug Menüsü

Simülasyon sırasında devrenin kontrolü sağlanır:

- **Start/Restart Debugging**: Simülasyonu başlatır/durdurur.
- **Pause / Stop Animation**: Simülasyonu duraklat/durdur.
- **Step Over / Into / Out / To**: Adım adım çalışma.
- **Execute**: Tam çalıştırma.
- **Simulation Log**: Hata ve simülasyon bilgileri.
- **Watch Window**: İzleme noktaları.
- **Digital Oscilloscope**: Sayısal osiloskop.

![img-18.jpeg](img-18.jpeg)  
![img-19.jpeg](img-19.jpeg)  
![img-20.jpeg](img-20.jpeg)

---

## Library Menüsü

- **Pick Device/Symbol**: Kütüphaneden bileşen çağırma.
- **Make Device / Symbol**: Yeni bileşen ve sembol oluşturma.
- **Packaging Tool**: Fiziksel paket atama.
- **Decompose**: Bileşeni temel öğelere ayırma.
- **Compile to Library**: Yeni bileşeni kütüphaneye ekleme.
- **Library Manager**: Kütüphane yönetim aracı.

---

## Template Menüsü

- **Goto Master Sheet**: Arka plan ve başlık bloğu düzenleme.
- **Set Design Defaults**: Renk ve simülasyon ayarları.
- **Set Junction Dots**: Bağlantı noktası ayarları.
- **Apply Template From Design**: Başka bir tasarımdan şablon uygulama.

---

## System Menüsü

Programın sistem ayarlarını içerir:

- **System Info**: Versiyon ve lisans bilgisi.
- **Set Paths**: Kütüphane ve model yolları.
- **Set Sheet Sizes**: Sayfa boyutu ayarı.
- **Set Text Editor**: Metin düzenleyici ayarları.
- **Set Simulator Options**: Simülasyon parametreleri.
- **Restore Default Settings**: Varsayılan ayarlara dön.

---

## Help Menüsü

- **ISIS Help**: Genel yardım.
- **Proteus VSM Help**: Sanal sistem modelleme yardımı.
- **Sample Design**: Örnek tasarımlar.
- **About ISIS**: Program bilgileri.

---

## Kaynaklar

- BİLGİSAYARLA DEVRE ÇİZİMİ VE SİMÜLASYONU, MEGEP, 2007  
- Teknik Resim – Dr. Ahmet KÜÇÜKER