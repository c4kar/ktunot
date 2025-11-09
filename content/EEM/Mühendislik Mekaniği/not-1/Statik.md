# İçindekiler

- [Genel Özet](#genel-özet)  
- [Temel Terimler ve Kavramlar](#temel-terimler-ve-kavramlar)  
- [Mekaniğin Tanımı ve Alt Dalları](#mekaniğin-tanımı-ve-alt-dalları)  
- [Cisim Türleri](#cisim-türleri)  
- [Newton’un Yasaları](#newtonun-yasaları)  
- [Birim Sistemleri](#birim-sistemleri)  
- [Çekim Yasası ve Ağırlık](#çekim-yasası-ve-ağırlık)  
- [Problem Çözme Yöntemleri](#problem-çözme-yöntemleri)  
- [Temel Formüller ve Hızlı Bilgiler](#temel-formüller-ve-hızlı-bilgiler)  
- [Kaynaklar](#kaynaklar)

---

## Genel Özet

Bu döküman, **Mühendislik Mekaniği – Statik** dersinin *Giriş* bölümünü kapsamaktadır. Statik, mühendisliğin temel taşlarından biridir ve **kuvvetler etkisinde dengede olan (hareketsiz ya da sabit hızla hareket eden) cisimlerin analizini** içerir. Ders notları, özellikle **Dr. Yusuf Yılmaz** tarafından hazırlanmış olup **Meriam & Kraige** klasik kitabının altıncı/bir altıncı (belki sekizinci) baskısına dayanmaktadır.

Bu bölümde öğrencilere; mekaniğin tanımı, temel kavramlar (parçacık, rijit cisim, akışkan, elastik cisim), **Newton’un hareket yasaları**, birim sistemleri (SI ve ABD geleneksel sistemleri), **çekim yasası** ve ağırlık ile kütle arasındaki farklar öğretilmektedir. Ayrıca, mühendislik problemlerinin nasıl modelleneceği ve sunulacağına dair **problem çözme yönergeleri** verilmektedir.

---

## Temel Terimler ve Kavramlar

- **Mekanik**: Kuvvetlerin etkisi altındaki cisimlerin hareketini veya dengesini inceleyen uygulamalı bilim dalıdır.  
- **Statik**: Hareketsiz veya sabit hızla hareket eden cisimlerin dengesini inceler.  
- **Dinamik**: Hareket halindeki cisimleri inceler; **kinematik** (hareketin nedeni olmadan) ve **kinetik** (kuvvet-hareket ilişkisi) olmak üzere ikiye ayrılır.  
- **Parçacık**: Boyutları ihmal edilebilen, ancak kütlesi olan idealize cisimdir (örneğin, Dünya Güneş etrafında dönerken bir parçacık olarak alınabilir).  
- **Rijit Cisim**: Kuvvet etkisiyle şekil değiştirmeyen idealize cisimdir (gerçekte yoktur, ancak küçük deformasyonlar ihmal edilebilir).  
- **Elastik Cisim**: Uygulanan kuvvet kaldırıldığında orijinal şeklini geri kazanan cisimdir (örneğin çelik, lastik).  
- **Akışkan**: Kayma gerilmesi uygulandığında sürekli şekil değiştiren maddedir (sıvılar ve gazlar).  
- **Newton’un İkinci Yasası**: $\mathbf{F} = m\mathbf{a}$  
- **Ağırlık**: $W = mg$  
- **Evrensel Çekim Yasası**: $F = G \dfrac{m_1 m_2}{r^2}$

---

## Mekaniğin Tanımı ve Alt Dalları

Mekanik, fiziksel dünyayı anlamak ve mühendislik sistemlerini tasarlamak için temel bir çerçevedir.

| Dal | Açıklama |
|-----|--------|
| **Statik** | Dengedeki cisimlerin analizi |
| **Kinematik** | Hareketin geometrisi (nedeni yok) |
| **Kinetik** | Kuvvetlerin harekete etkisi |
| **Dinamik** | Kinematik + Kinetik |

---

## Cisim Türleri

### 1. **Parçacık**
- Kütle vardır, boyut ihmal edilir.
- Örnek: Yörünge mekaniğinde gezegenler.

### 2. **Rijit Cisim**
- Şekil değiştirmez; iç mesafeler sabittir.
- Gerçek hayatta yoktur, ancak mühendislikte yaygın idealizasyondur.

### 3. **Elastik Cisim**
- Geçici deformasyon yapar; kuvvet kalkınca eski haline döner.
- Örnek: Yay, kauçuk, çelik çubuk.

### 4. **Akışkan**
- Sürekli deformasyon gösterir.
  - **Sıvılar**: Belirli hacim, belirsiz şekil (örnek: su, katran).
  - **Gazlar**: Hem hacim hem şekil kap kaplayana kadar yayılır (örnek: hava, helyum).

> [!note]  
> Cam ve katran, uzun zaman ölçeklerinde akışkan davranır — bu nedenle “akışkan katı” olarak adlandırılır.

---

## Newton’un Yasaları

### **1. Yasası (Eylemsizlik Yasası)**
> Bir parçacık, üzerine dengelenmemiş bir kuvvet etki etmiyorsa, hareketsiz kalır veya sabit hızla doğrusal hareket yapar.

### **2. Yasası (İvme Yasası)**
> Bir parçacığın ivmesi, üzerine etkiyen bileşke kuvvetle doğru, kütlesiyle ters orantılıdır:  
> $$ \mathbf{F} = m\mathbf{a} $$

### **3. Yasası (Etki-Tepki Yasası)**
> İki cisim arasındaki etki-tepki kuvvetleri; eşit büyüklükte, zıt yönde ve aynı doğrultudadır.

---

## Birim Sistemleri

| Nicelik | **SI (Uluslararası)** | **ABD Geleneksel** |
|--------|----------------------|------------------|
| Kütle | kilogram (kg) | slug |
| Uzunluk | metre (m) | foot (ft) |
| Zaman | saniye (s) | saniye (sec) |
| Kuvvet | newton (N) | pound (lb) |

### Temel Tanımlar:
- **1 N** = 1 kg·m/s² → 1 kg kütleyi 1 m/s² ivmelendiren kuvvet.
- **1 slug** → 1 lb kuvvetin 1 ft/s² ivmelendirdiği kütle.

> [!example]+ Dönüşüm
> - 1 lb = 4.4482 N  
> - 1 slug = 14.594 kg

---

## Çekim Yasası ve Ağırlık

### Evrensel Çekim Yasası:

$$
F = G \frac{m_1 m_2}{r^2}
$$

$$
G = 6.673 \times 10^{-11} \, \text{N} \cdot \text{m}^2/\text{kg}^2
$$

### Dünya Yüzeyinde Ağırlık:
$
W = mg \quad \text{burada } g = \frac{G m_e}{R^2}
$

| Sistem | $g$ değeri |
|-------|-----------|
| **SI** | $9.81 \, \text{m/s}^2$ |
| **ABD** | $32.2 \, \text{ft/s}^2$ |

> [!success]  
> Ağırlık kuvvet (N ya da lb), kütle ise skaler niceliktir (kg ya da slug).

---

## Problem Çözme Yöntemleri

Mühendislik problemleri üç aşamada modellenir:

1. **Gerçek Sistem** → İdealizasyonlar (küçük ağırlıklar ihmal edilir, yükler noktasal alınır)
2. **Fiziksel Model** → Basitleştirmeler (küçük açı yaklaşımları: $\sin\theta \approx \theta$)
3. **Matematiksel Model** → Denklemler çözülür

### Sunum Kuralları:
- A4 veya 8½"x11" kağıt, sadece ön yüz
- Kurşun kalem ve cetvelle çizim
- Her problem yeni sayfada başlar
- Vektörler açıkça belirtilir
- Format:
  - **Given:** (Verilenler)
  - **Find:** (İstenenler)
  - **Solution:** (Çözüm adımları)
  - Serbest Cisim Diyagramı (FBD) **zorunludur**
  - Cevaplar kutu içine alınır veya çift çizgiyle altı çizilir

---

## Temel Formüller ve Hızlı Bilgiler

> [!example]+ Temel Formüller
> - Newton’un 2. Yasası: $\mathbf{F} = m\mathbf{a}$  
> - Ağırlık: $W = mg$  
> - Çekim Yasası: $F = G \dfrac{m_1 m_2}{r^2}$  
> - Kütle–Ağırlık Dönüşümü:  
>   - $m = \dfrac{W}{g}$  
>   - 200 lb → $m = \dfrac{200}{32.2} = 6.21$ slug  
>   - 200 lb = 890 N → $m = \dfrac{890}{9.81} = 90.7$ kg

> [!note]  
> Kütle, yerçekiminden bağımsızdır; ağırlık ise konuma (g değerine) bağlıdır.

---

## Kaynaklar

- Meriam, J. L., & Kraige, L. G. *Engineering Mechanics: Statics*, 6th/8th Edition  
- Ders notları: Dr. Yusuf YILMAZ, Makina Mühendisliği Bölümü, Konya, Türkiye  
- Uluslararası Birim Sistemi (SI) ve ABD Birimleri El Kitapları  
- NIST (National Institute of Standards and Technology) verileri

--- 

> [!infobox]  
> Bu döküman, ders slaytlarında sunulan bilgiler sentezlenerek, öğrenciye kolay tekrar ve öğrenme imkânı sunmak amacıyla **Mistral OCR** ve **qwen3-max** LLM modeli kullanılarak hazırlanmıştır. Görseller ders slaytlarından alınmıştır.

---

# PDF 
<iframe src="https://drive.google.com/file/d/1zwiUdnMSSUekoS40RGKIpFn1kr-LiyYg/preview"
        width="100%"
        height="700x"
        allow="fullscreen"
        style="border:none;">
</iframe>
