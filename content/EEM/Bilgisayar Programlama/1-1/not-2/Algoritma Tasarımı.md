İçindekiler
---

- [Genel Özet](#genel-özet)
- [Temel Terimler ve Kavramlar](#temel-terimler-ve-kavramlar)
- [Ana Gövde: Kronolojik veya Tematik Kayıt](#ana-gövde-kronolojik-veya-tematik-kayıt)
  - [Program Oluşum Süreci](#program-oluşum-süreci)
  - [Algoritma Nedir?](#algoritma-nedir)
  - [Algoritmada Olması Gereken Özellikler](#algoritmada-olması-gereken-özellikler)
  - [Sözde Kod (Pseudo Code)](#sözde-kod-pseudo-code)
  - [Tanımlayıcılar](#tanımlayıcılar)
  - [Akış Şeması (Flowchart)](#akış-şeması-flowchart)
  - [Temel Akış Şeması Yapıları](#temel-akış-şeması-yapıları)
    - [Sıralı Yapı](#sıralı-yapı)
    - [Karar Verme Yapısı](#karar-verme-yapısı)
    - [Tekrarlı Yapı (Döngü)](#tekrarlı-yapı-döngü)
  - [Örneklerle Algoritma ve Akış Şemaları](#örneklerle-algoritma-ve-akış-şemaları)
- [Temel Formüller ve Hızlı Bilgiler](#temel-formüller-ve-hızlı-bilgiler)
- [Kaynaklar](#kaynaklar)

---

## Genel Özet

Bu ders notu, **Bilgisayar Programlama 1** dersinin ikinci haftasında ele alınan **algoritma tasarımı** ve **akış diyagramları** konularını kapsamaktadır. Öğrencilere bir problemin adım adım nasıl çözüleceği, bu adımların **algoritmik yapıya** nasıl dönüştürüleceği ve bunların **akış şeması** ile görselleştirilmesi öğretilmektedir. Ayrıca **sözde kod (pseudo code)**, **tanımlayıcı kuralları** ve temel yapılar (sıralı, karar, döngü) detaylı örneklerle açıklanmaktadır. Dersin sonunda ise öğrencilere, **30 öğrencinin vize notlarına göre harf notu veren** bir algoritma ve akış şeması oluşturma ödevi verilmiştir.

---

## Temel Terimler ve Kavramlar

- **Algoritma**: Bir problemin çözümü için gerekli olan, adım adım tanımlanmış işlemler bütünüdür.
- **Akış Şeması (Flowchart)**: Algoritmanın grafiksel olarak sembollerle ifade edilmesidir.
- **Sözde Kod (Pseudo Code)**: Algoritmanın yarı programlama dili, yarı doğal dil ile açıklanmasıdır.
- **Tanımlayıcı**: Programda değişken, sabit gibi öğeleri temsil eden geçerli isimlerdir.
- **Sıralı Yapı**: İşlemlerin sırayla yapıldığı algoritmik yapıdır.
- **Karar Verme Yapısı**: Belirli bir koşula göre farklı işlemler yapılması gerektiğinde kullanılır.
- **Döngü (Tekrarlı Yapı)**: Belirli bir işlem ya da işlem grubunun tekrar edilmesi için kullanılır.
- **Sonluluk**: Algoritmanın belirli adımlarla sınırlı olması ve bir noktada sona ermesi koşuludur.
- **Etkinlik**: Algoritmanın gereksiz tekrar ve işlemler içermemesi ve verimli sonuç üretmesidir.
- **Kesinlik**: Aynı girdilerle her çalıştırıldığında aynı çıktıyı üretmesidir.

---

## Ana Gövde: Kronolojik veya Tematik Kayıt

### Program Oluşum Süreci

Program geliştirme süreci yedi temel adımdan oluşur:

1. **Problemin Belirlenmesi**
2. **Veri Toplama**
3. **Veri Analizi**
4. **Algoritma / Akış Şeması / Sözde Kod Hazırlama**
5. **Kodlama** (Programlama dili ile)
6. **Test Etme**
7. **Lisanslama ve Paketleme**

Bu süreçte dördüncü adım, algoritmanın doğru tasarlanması çok kritiktir. Çünkü hatalı algoritmaya dayalı bir kod, istenilen sonucu üretmez.

---

### Algoritma Nedir?

Algoritma, bir problemin bilgisayarda çözülmesi için yapılması gereken adımların sıralı bir şekilde tanımlanmasıdır. Terim, **Ebu Abdullah Muhammed İbn Musa el-Harezmi**’den gelmektedir. Onun *“Hisab el-cebir ve el-mukabala”* adlı eseri, dünyada ilk cebir kitabı ve aynı zamanda ilk algoritma koleksiyonudur.

---

### Algoritmada Olması Gereken Özellikler

>[!example]+ Algoritma Özellikleri
> - **Giriş/Çıkış:** Girdi almalı, çıktı üretmelidir.  
> - **Sonluluk:** Sonlu adımda bitmeli.  
> - **Kesinlik:** Aynı girdiyle aynı çıktı üretilmeli.  
> - **Etkinlik:** İşlevsel ve verimli olmalı.  
> - **Başarım:** Bellek ve zaman kullanımı dengeli olmalı.

---

### Sözde Kod (Pseudo Code)

Sözde kod, algoritmaların programlama diline yakın ancak doğal dile yakın bir şekilde yazılmasıdır. Örneğin:

```plaintext
Algoritma BuyuguBul;
1. A değerini OKU
2. B değerini OKU
3. EĞER A > B İSE EB = A DEĞİLSE EB = B
4. EB’yi YAZ
5. DUR
```

>[!note] 
> Sözde kodlar, algoritmaların daha anlaşılır ve programlamaya uyarlanabilir olmasını sağlar.

---

### Tanımlayıcılar

Tanımlayıcılar, programda kullanılan değişken ve sabit isimleridir. Geçerli tanımlayıcı kuralları:

- Harf (A-Z, a-z) veya alt çizgi (_) ile başlamalı.
- Rakamla başlayamaz.
- Sadece İngiliz alfabesi ve rakamlar kullanılabilir.
- Alt çizgi dışında özel karakter kullanılamaz.

Örnek geçerli tanımlayıcılar: `sayi1`, `_toplam`, `sonuc`

---

### Akış Şeması (Flowchart)

Akış şemaları, algoritmaları görsel sembollerle anlatan araçlardır. Kullanılan temel semboller:

| Sembol | Açıklama |
|--------|----------|
| ![[img-0.jpeg]] | Başla / Bitir |
| ![[img-1.jpeg]] | Giriş / Çıkış |
| ![[img-2.jpeg]] | İşlem (Hesaplama, Atama) |
| ![[img-3.jpeg]] | Karar (Koşul) |
| ![[img-4.jpeg]] | Döngü |
| ![[img-5.jpeg]] | Akış yönü |
| ![[img-6.jpeg]] | Fonksiyon çağrısı |

>[!infobox]
> Akış şemaları, algoritmanın mantıksal akışını daha kolay takip etmeye yardımcı olur.

---

### Temel Akış Şeması Yapıları

#### Sıralı Yapı

İşlemler sırayla yapılır, bir sonraki işlem bir önceki tamamlanmadan başlamaz.

**Örnek:**
1. Sayıyı oku  
2. Karesini al  
3. Yazdır  

![[img-5.jpeg|400]]

---

#### Karar Verme Yapısı

Belirli bir koşula göre iki farklı yöne dallanılır.

**Örnek:**  
Pozitif sayıysa karesini al, değilse "geçersiz" yaz.

![[img-7.jpeg|400]]

---

#### Tekrarlı Yapı (Döngü)

Belirli bir koşul sağlanana kadar işlemler tekrar edilir.

**Örnek:** 1’den 5’e kadar sayıları yazdırma

![[img-9.jpeg|400]]

**Başka bir örnek:** 1–10 arasındaki tek sayıların toplamı

| Sayac (Eski) | Toplam (Eski) | Yeni Toplam | Yeni Sayac |
|--------------|----------------|--------------|-------------|
| 1            | 0              | 1            | 3           |
| 3            | 1              | 4            | 5           |
| 5            | 4              | 9            | 7           |
| 7            | 9              | 16           | 9           |
| 9            | 16             | 25           | 11          |

![[img-10.jpeg|400]]

---

### Örneklerle Algoritma ve Akış Şemaları

#### 1. İki Sayının Toplamı

```plaintext
1. BAŞLA
2. X OKU
3. Y OKU
4. T = X + Y
5. T YAZ
6. BİTİR
```

#### 2. Üçgenin Alanı

```plaintext
1. BAŞLA
2. t OKU
3. y OKU
4. A = (t * y) / 2
5. A YAZ
6. BİTİR
```

#### 3. İkinci Dereceden Denklemin Köklerini Bulma

> [!CODE]- delta-hesabı
```plaintext
1. BAŞLA
2. a, b, c OKU
3. Δ = b² - 4ac
4. EĞER Δ > 0 İSE
     x₁ = (-b - √Δ) / (2a)
     x₂ = (-b + √Δ) / (2a)
     x₁, x₂ YAZ
   DEĞİLSE EĞER Δ = 0 İSE
     x = -b / (2a)
     x YAZ
   DEĞİLSE
     "Reel kök yok" YAZ
5. BİTİR
```

![[img-13.jpeg|500]]

---

## Temel Formüller ve Hızlı Bilgiler

>[!example]+ Formüller
> - **Üçgen Alanı:** `A = (taban * yükseklik) / 2`  
> - **Diskriminant:** `Δ = b² - 4ac`  
> - **İkinci Dereceden Kökler:**  
>   `x₁ = (-b - √Δ) / (2a)`  
>   `x₂ = (-b + √Δ) / (2a)`

>[!note] Tanımlayıcı Kuralları Özeti
> - Harf veya `_` ile başlamalı  
> - Rakamla başlamaz  
> - Sadece İngilizce harf, rakam ve `_` kullanılabilir

---

## Kaynaklar

Kaynak bulunamadı.