# İçindekiler

- [İçindekiler](#i̇çindekiler)
  - [Genel Özet](#genel-özet)
  - [Temel Terimler ve Kavramlar](#temel-terimler-ve-kavramlar)
  - [Ana Gövde: Kronolojik / Kavramsal Kayıt](#ana-gövde-kronolojik--kavramsal-kayıt)
    - [Kuvvet Sistemlerine Giriş](#kuvvet-sistemlerine-giriş)
    - [2 Boyutlu Kuvvet Sistemleri](#2-boyutlu-kuvvet-sistemleri)
      - [Dikdörtgensel Bileşenler](#dikdörtgensel-bileşenler)
      - [Moment](#moment)
      - [Kuvvet Çifti (Couple)](#kuvvet-çifti-couple)
      - [Bileşke (Resultant)](#bileşke-resultant)
    - [3 Boyutlu Kuvvet Sistemlerine Kısa Bakış](#3-boyutlu-kuvvet-sistemlerine-kısa-bakış)
  - [Temel Formüller ve Hızlı Bilgiler](#temel-formüller-ve-hızlı-bilgiler)
  - [Kaynaklar](#kaynaklar)
- [PDF](#pdf)

---

## Genel Özet

Bu ders notu, **mühendislik mekaniğinin** durağanlık (statik) dalında temel bir konu olan **kuvvet sistemleri**ni kapsamaktadır. Kuvvet, bir cismin başka bir cisme uyguladığı çekme veya itme etkisi olarak tanımlanır ve **büyüklük, yön ve uygulama noktası** ile karakterize edilen bir **vektörel niceliktir**.

Ders, kuvvetlerin **2 boyutlu düzlemde** analizini detaylı şekilde ele alırken, 3 boyutlu sistemlere de genel bir giriş sunar. Temel konular arasında **dikdörtgensel bileşenlere ayırma**, **moment hesabı**, **kuvvet çifti (couple)** kavramı ve birden fazla kuvvetin yerine geçebilecek tek bir **bileşke kuvvetin (resultant)** belirlenmesi yer alır.

Öğrenme çıktıları:
- Kuvvetleri vektörel olarak toplayabilme,
- Herhangi bir noktaya göre moment hesaplayabilme,
- Kuvvet çiftinin özelliklerini anlayabilme,
- Karmaşık kuvvet sistemlerini tek bir kuvvet-çift sistemine veya yalnızca bir bileşke kuvvete indirgeyebilme.

---

## Temel Terimler ve Kavramlar

- **Kuvvet (Force):** Bir cismin başka bir cisme uyguladığı itme veya çekme etkisi; vektörel bir büyüklüktür.
- **Moment (Tork):** Bir kuvvetin bir nokta etrafında döndürme eğilimidir; $$ M = F \cdot d $$ veya $$ \vec{M} = \vec{r} \times \vec{F} $$
- **Kuvvet Çifti (Couple):** Eşit büyüklükte, zıt yönde ve paralel doğrultuda olan iki kuvvet; **serbest vektör** oluşturur ve momenti $$ M = F \cdot d $$ dir.
- **Bileşke (Resultant):** Birden fazla kuvvet ve momentin etkisini tek başına temsil eden eşdeğer kuvvet-çift sistemidir.
- **Dikdörtgensel Bileşenler:** Bir kuvvetin x ve y (veya x, y, z) eksenlerindeki izdüşümleri; $$ F_x = F \cos\theta $$ $$ F_y = F \sin\theta $$
- **Varignon Teoremi:** Bir kuvvetin bir noktaya göre momenti, bileşenlerinin o noktaya göre momentlerinin toplamına eşittir.

---

## Ana Gövde: Kronolojik / Kavramsal Kayıt

### Kuvvet Sistemlerine Giriş

Kuvvet, **vektörel** bir niceliktir. Bu nedenle, toplanması vektör kurallarına uyar:

- **Paralelkenar Kuralı**
- **Üçgen Kuralı**

> [!note]  
> **Etki çizgisi (line of action)** boyunca bir kuvvet kaydırılabilir; bu, **etkileşim ilkesi (principle of transmissibility)** olarak bilinir. Dış tepkiler değişmez, ancak iç gerilmeler değişebilir.

---

### 2 Boyutlu Kuvvet Sistemleri

#### Dikdörtgensel Bileşenler

Herhangi bir kuvvet:

$$
\vec{F} = F_x \hat{i} + F_y \hat{j}
$$
olarak ifade edilir. Bileşenler:
$$
F_x = F \cos\theta, \quad F_y = F \sin\theta
$$

Birden fazla kuvvetin bileşkesi:
$$
R_x = \sum F_x, \quad R_y = \sum F_y, \quad R = \sqrt{R_x^2 + R_y^2}, \quad \theta = \tan^{-1}\left(\frac{R_y}{R_x}\right)
$$

> [!example]  
> Örnek: 
> $$ F_1 = 800\, \text{N}, F_2 = 600\, \text{N} $$
> - Paralelkenar yöntemiyle $$ R = 721\, \text{N} $$ $$ \alpha = 46.1^\circ $$  
> - Cebirsel çözümle:  
>   $$ R_x = 500\, \text{N},\ R_y = -520\, \text{N} \Rightarrow R = 721\, \text{N} $$

---

#### Moment

Bir $$ \vec{F} $$ kuvvetinin **O** noktasına göre momenti:
$$
\vec{M}_O = \vec{r} \times \vec{F}, \quad |\vec{M}_O| = F \cdot d
$$
Burada $d$ O noktasından kuvvetin etki çizgisine olan **dik uzaklıktır**.

> [!infobox]  
> **5 Farklı Yöntemle Moment Hesabı** (600 N’luk kuvvet için):  
> 1. $ M = F \cdot d $ → $ d = 4\cos40^\circ + 2\sin40^\circ = 4.35\, \text{m} $  
> 2. Varignon Teoremi: $M = 460 \times 4 + 386 \times 2 = 2610 \, \text{N} \cdot \text{m}$  
> 3. Kuvveti yer değiştirerek (zemin seviyesine veya O’nun üzerine)  
> Hepsi aynı sonucu verir: **2610 N·m (saat yönünde)**.

---

#### Kuvvet Çifti (Couple)

- İki eşit, zıt, paralel kuvvetten oluşur.
- Momenti $ M = F \cdot d $ dir.
- **Moment merkezinden bağımsızdır** → **serbest vektör**dür.

> [!example]  
> 80 lb’lik iki kuvvet → $$ M = 80 \times 7 = 560 \, \text{lb} \cdot \text{ft} $$
>
> Hem O hem A noktasına göre aynı!

> [!example]+  
> Yatay 80 lb’lik kuvvet, O noktasında eşdeğer sistemle ifade edilirse:  
> - 80 lb kuvvet O’da  
> $ M = 80 \cdot (9 \sin 60^\circ) = 624 \, \text{lb} \cdot \text{in} $   (saat yönünün tersi)

---

#### Bileşke (Resultant)

Herhangi bir kuvvet sistemi, bir **bileşke kuvvet (R)** ve bir **bileşke moment (M₀)** ile temsil edilebilir.

**Adımlar:**
1. Tüm kuvvetler bir noktaya (genelde O) taşınır → her taşımada bir couple eklenir.
2. Kuvvetler vektörel toplanır: $$ \vec{R} = \sum \vec{F} $$
3. Momentler cebirsel toplanır: $$ M_O = \sum (F \cdot d) + \sum \text{(mevcut couple’lar)} $$
4. İstenirse, bu **kuvvet-çift sistemi**, sadece **tek bir kuvvete** indirgenebilir:  
   $R \cdot d = |M_O| \Rightarrow d = \frac{|M_O|}{R}$

> [!example]  
> Verilen sistem:  
> - $ R_x = 66.9\, \text{N},\ R_y = 132.4\, \text{N} \Rightarrow R = 148.3\, \text{N},\ \theta = 63.2^\circ $  
> - $ M_O = -237\,\text{N⋅m} $ (saat yönünde)  
> - Tek kuvvet için: $$ d = \frac{237}{148.3} = 1.600 \, \text{m}$$

---

### 3 Boyutlu Kuvvet Sistemlerine Kısa Bakış

Konu başlıkları benzerdir:
 $$ \vec{F} = F_x \hat{i} + F_y \hat{j} + F_z \hat{k} $$
- Moment vektörel çarpımla: $$ \vec{M}_O = \vec{r} \times \vec{F} $$
- Couple yine serbest vektördür.
 Bileşke: $$ \vec{R} = \sum \vec{F},\ \vec{M}_O = \sum (\vec{r} \times \vec{F}) $$

Ancak bu ders notunda 3B sistemlere örnek verilmemiştir.

---

## Temel Formüller ve Hızlı Bilgiler

> [!success] **Vektör İşlemleri**
- $$ \vec{R} = \sum F_x \hat{i} + \sum F_y \hat{j} $$
- $$ R = \sqrt{R_x^2 + R_y^2} $$
- $$ \theta = \tan^{-1}(R_y / R_x) $$

> [!success] **Moment**
- $$ M = F \cdot d $$
- $$ \vec{M}_O = \vec{r} \times \vec{F} $$
- **Varignon:** $$ M_O = \sum (F_x \cdot y - F_y \cdot x) $$

> [!success] **Couple**
- $$ M = F \cdot d $$ → **Yerden bağımsız!**

> [!success] **Bileşke Kuvvetin Konumu**
- $$ d = \dfrac{|M_O|}{R} $$
- Yönü, momentin dönüş yönüne göre belirlenir.

> [!note]  
> **İz düşüm ≠ Bileşen!**  
> Sadece dik eksenlerde izdüşüm = bileşen olur.

---

## Kaynaklar

- Meriam, J. L., & Kraige, L. G. (2007). *Engineering Mechanics: Statics* (6th Edition). Wiley.
- Ders sunumları ve örnek problemler – Dr. Yusuf YILMAZ, Makina Mühendisliği Bölümü, Konya, Türkiye.

> [!infobox]  
> Bu döküman, ders slaytlarında sunulan bilgiler sentezlenerek, öğrenciye kolay tekrar ve öğrenme imkânı sunmak amacıyla **Mistral OCR** ve **qwen3-max** LLM modeli kullanılarak hazırlanmıştır. Görseller ders slaytlarından alınmıştır.

---

# PDF

<iframe src="https://drive.google.com/file/d/1gL0pYQg_GYNDWITbUIqXCBe7W1oxXI7B/preview"
        width="100%"
        height="700x"
        allow="fullscreen"
        style="border:none;">
</iframe>

