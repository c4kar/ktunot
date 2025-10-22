# **İçindekiler**

- [Baskı Devre (PCB) Nedir?](#baskı-devre-pcb-nedir)
- [Baskı Devrenin Avantajları](#baskı-devrenin-avantajları)
- [Baskı Devre Çizimi](#baskı-devre-çizimi)
- [Baskı Devre Çiziminde Dikkat Edilmesi Gerekenler](#baskı-devre-çiziminde-dikkat-edilmesi-gerekenler)
- [Toner Transferi için Çizim Sonrası Çıktı Almak](#toner-transferi-için-çizim-sonrası-çıktı-almak)
- [Kağıt Üzerindeki Çizimin Pertinaksa Aktarılması](#kağıt-üzerindeki-çizimin-pertinaksa-aktarılması)
- [Pertinaks Üzerindeki Bakırın Eritilmesi](#pertinaks-üzerindeki-bakırın-eritilmesi)
- [Plaketin Delinmesi](#plaketin-delinmesi)
- [Baskı Devredeki Elemanların Dizgisi](#baskı-devredeki-elemanların-dizgisi)
- [Kaynaklar](#kaynaklar)

---

## **Baskı Devre (PCB) Nedir?**

**PCB** (*Printed Circuit Board*), elektronik bileşenlerin monte edildiği ve aralarındaki elektriksel bağlantıların **iletken yollar** (genellikle bakırdan yapılmış) üzerinden sağlandığı, bu yollar dışındaki alanların ise **yalıtkan** olduğu bir devre kartıdır.

---

## **Baskı Devrenin Avantajları**

- Elektronik bileşenleri sabitler ve **temas sorunlarını azaltır**.
- **Lehimleme** için uygun bir yapı sunar.
- Aynı devrenin **hızlı ve seri üretimine** olanak tanır.

---

## **Baskı Devre Çizimi**

1. Devre öncelikle **ISIS** programında çizilir ve **simülasyonu** yapılır.
2. Simülasyonda olmayan ancak gerçekte gerekli olan bağlantılar eklenir.
3. Devre **ARES** programına aktarılır.
4. ARES’in sol panelinde ISIS'te tanımlanan tüm bileşenler hazır olarak gelir.
5. Kart boyutuna göre **eleman yerleşimi** planlanır.
6. ARES, ISIS'ten gelen bağlantı bilgilerine göre hangi bacakların nereye bağlanacağını gösterir.

---

## **Baskı Devre Çiziminde Dikkat Edilmesi Gerekenler**

- **Bakır yolların direnci vardır**; yollar **kısa tutulmalı**dır.
- Hassas sinyaller (örn. **kristal - mikrodenetleyici** arası) taşıyan yollar **mutlaka kısa olmalıdır**.
- ARES'te mümkün olan **tüm bağlantılar çizilmelidir**.  
  → Çizilemeyen yollar **"jumper"** (köprü) ile sonra elle bağlanmak zorunda kalınır.
- Çizim tamamlandıktan sonra:
  - Ya **toner transfer yöntemi** ile elde edilir,
  - Ya da **profesyonel PCB üretici firmalara** gönderilir.

---

## **Toner Transferi için Çizim Sonrası Çıktı Almak**

- **Lazer yazıcı** kullanılır (mürekkep püskürtmeli yazıcılar uygunsuzdur).
- **Transfer kağıdı** türüne dikkat edilmelidir:
  - Yağlı kağıt,
  - Asetat,
  - Fotoğraf kağıdı gibi özel kağıtlar tercih edilir.
- Çıktı **temiz, koyu ve yüksek çözünürlüklü** olmalıdır.
- **Ayna görüntüsü** alınması gerekebilir (özellikle alt yüzeyde yazı varsa).

![[img-0.jpeg]]

---

## **Kağıt Üzerindeki Çizimin Pertinaksa Aktarılması**

1. **Bakır plaket**:
   - Uygun ölçüde kesilir,
   - Zımparalanarak **parlak hale getirilir**,
   - Gerekirse **suyla yıkanıp kurutulur**.
2. Kağıt, plaket üzerine düzgünce yerleştirilir ve **kaymaması için bantlanır**.
3. **Yüksek ısıda ütü** ile toner, bakır yüzeye aktarılır.
   - Ütü, **tüm yüzeye eşit ısı** vermeli.

![[img-1.jpeg]]

4. Ütülemeden sonra plaket **ılık suda bekletilerek** kağıt kolayca sıyrılır.

![[img-2.jpeg]]

5. Eksik veya silik bölgeler **ince uçlu CD kalemi** ile tamamlanır.

![[img-3.jpeg]]

---

## **Pertinaks Üzerindeki Bakırın Eritilmesi**

- Eritme için **kimyasal çözelti** hazırlanır:
  - **%25 perhidrol** (%20’lik eczane perhidrolü),
  - **%75 tuz ruhu** (HCl).
- Plaket, çözeltiye konur ve **açıkta bekletilir**.
  - **Çözeltiye kesinlikle temas edilmemeli**.
  - **Çıkan gazlar zehirlidir** → **açık alanda** yapılmalı.

![[img-4.jpeg]]  
![[img-5.jpeg]]

6. Eritme tamamlandıktan sonra:
   - Plaket **iyice yıkanır**,
   - **Aseton veya tiner** ile toner temizlenir,
   - Bakır yolların **bütünlüğü kontrol edilir**.

![[img-6.jpeg]]

---

## **Plaketin Delinmesi**

- Eleman bacaklarının geçeceği delikler **el matkabı** veya **sütun matkap** ile açılmalıdır.
- **Uygun uç çapı** seçilmelidir (bacağa göre).
- **Aşırı baskı uygulanmamalı** → plaket çatlayabilir.
- **Koruyucu gözlük takılmalıdır**!

---

## **Baskı Devredeki Elemanların Dizgisi**

- Montaj sırası:
  - **Küçük ve merkezdeki** elemanlardan,
  - **Büyük ve kenarlardaki** elemanlara doğru yapılır.
- Lehimleme:
  - Lehim teli ile havya aynı anda lehim noktasına dokunur.
- Lehim **parlak değilse** → **soğuk lehim** oluşmuş olabilir.
  - Bu durumda bağlantı **iletkenliği kaybeder** ve devre çalışmaz.

---

## **Kaynaklar**

- Yavuz Erol, *Bilim ve Teknik*, Ağustos 2005  
- Hacettepe Robot Topluluğu Sunusu, *HUNRobotX 2012*  
- *Baskı Devre Kartının Üretilmesi* Sunusu, Öğr. Gör. Emre ÖZDEMIRCİ

---

Eğer bu ders notunu PDF veya basılı döküman haline getirmek isterseniz, Markdown veya LaTeX formatında da düzenleyebilirim. Yardımcı olmamı ister misiniz?
