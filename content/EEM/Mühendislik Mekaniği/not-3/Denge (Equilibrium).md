# İçindekiler (Table of Contents)

- [Genel Özet](#genel-özet)
- [Temel Terimler ve Kavramlar](#temel-terimler-ve-kavramlar)
- [Ana Gövde: Kronolojik veya Tematik Kayıt](#ana-gövde-kronolojik-veya-tematik-kayıt)
  - [Dengeye Giriş (Introduction to Equilibrium)](#dengeye-giriş-introduction-to-equilibrium)
  - [Serbest Cisim Diyagramı (Free-Body Diagram – FBD)](#serbest-cisim-diyagramı-free-body-diagram--fbd)
  - [İki Boyutta Denge (Equilibrium in Two Dimensions)](#iki-boyutta-denge-equilibrium-in-two-dimensions)
  - [Üç Boyutta Denge (Equilibrium in Three Dimensions)](#üç-boyutta-denge-equilibrium-in-three-dimensions)
  - [Örnek Problemler ve Çözümleri](#örnek-problemler-ve-çözümleri)
- [Temel Formüller ve Hızlı Bilgiler](#temel-formüller-ve-hızlı-bilgiler)
- [Kaynaklar](#kaynaklar)

---

## Genel Özet

**Denge (Equilibrium)**, mühendislik mekaniğinin statik dalının temel konusudur ve bir cismin hem ötelenme hem de dönme hareketi yapmaması durumunu ifade eder. Bu durumda, cisme etki eden **bileşke kuvvet** ve **bileşke moment** sıfıra eşit olmalıdır. İki boyutlu sistemlerde üç, üç boyutlu sistemlerde ise altı bağımsız denge denklemi mevcuttur.

Bu belgede, **serbest cisim diyagramlarının (FBD)** nasıl çizileceği, **destek tepkilerinin modellenmesi**, ve **iki/üç boyutlu denge problemlerinin çözüm adımları** detaylı şekilde işlenmiştir. Ayrıca, Meriam & Kraige kitabından alınan **örnek problemler** ve **ders notları** üzerinden öğrenme pekiştirilmiştir.

---

## Temel Terimler ve Kavramlar

- **Denge (Equilibrium)**: Cisme etki eden net kuvvet ve net momentin sıfır olduğu durum.
- **Serbest Cisim Diyagramı (FBD)**: Cisim çevresinden izole edilip üzerine etkiyen tüm dış kuvvet ve momentlerin gösterildiği şematik çizim.
- **Statik Belirli (Statically Determinate)**: Bilinmeyen sayısı, kullanılabilir denge denklem sayısına eşit veya daha az olan sistem.
- **Statik Belirsiz (Statically Indeterminate)**: Bilinmeyen sayısı, denge denklemlerinden fazla olan sistem.
- **Tepki Kuvvetleri (Reaction Forces)**: Desteklerin cisme uyguladığı kuvvet ve/veya momentler.
- **Moment (Couple)**: Bir kuvvetin bir noktaya göre dönme eğilimini ifade eden vektörel büyüklük.

---

## Ana Gövde: Kronolojik veya Tematik Kayıt

### Dengeye Giriş (Introduction to Equilibrium)

Bir rijit cismin dengede olabilmesi için şu iki vektörel koşulun sağlanması gerekir:

> [!success] Denge Koşulları
> $$
> \sum \mathbf{F} = 0 \quad \text{(Ötelenme dengesi)} \\
> \sum \mathbf{M} = 0 \quad \text{(Dönme dengesi)}
> $$

Dikdörtgen koordinat sisteminde bunlar altı skaler denkleme dönüşür:

$$
\begin{aligned}
\sum F_x &= 0, \quad \sum F_y = 0, \quad \sum F_z = 0 \\
\sum M_x &= 0, \quad \sum M_y = 0, \quad \sum M_z = 0
\end{aligned}
$$

İki boyutlu (x-y düzleminde) problemlerde genellikle sadece şu üç denklem kullanılır:
- $\sum F_x = 0$
- $\sum F_y = 0$
- $\sum M_O = 0$ (O noktası keyfi seçilebilir)

---

### Serbest Cisim Diyagramı (Free-Body Diagram – FBD)

FBD, denge problemlerinin çözümünde **kritik ilk adımdır**. İyi bir FBD şu unsurları içerir:

1. Cisim çevresinden **izole edilmiş** olarak çizilir (sade hatlarla).
2. Üzerine etkiyen **tüm dış kuvvet ve momentler** oklarla gösterilir.
3. Bilinmeyen kuvvetler **sembollerle** (örn. $A_x$, $R$, $M$) etiketlenir.
4. Gerekli **boyutlar ve koordinat sistemi** belirtilir.

#### Destek Türlerine Göre Tepkiler (2B)

| Destek Türü | Tepki Kuvvetleri |
|-------------|------------------|
| Esnek kablo | Sadece **çeki** kuvveti (kablodan uzağa doğru) |
| Pürüzsüz yüzey | Sadece **normal** kuvvet (yüzeye dik) |
| Pürüzlü yüzey | Normal kuvvet **+** sürtünme kuvveti (teğetsel) |
| Makara (roller) | Yüzeye **dik** tek kuvvet |
| Kayar kılavuz | Kılavuza **dik** tek kuvvet |
| Pim (mafsal) | İki yönlü kuvvet ($R_x$, $R_y$) |
| Ankastre (sabit) | $F_x$, $F_y$ **+** moment ($M$) |
| Yay | $F = kx$ (Hooke yasası) |

> [!note] 3B sistemlerde:
> - **Küresel mafsal (ball-and-socket)**: $R_x, R_y, R_z$
> - **Sabit bağlantı**: 3 kuvvet + 3 moment bileşeni

---

### İki Boyutta Denge (Equilibrium in Two Dimensions)

#### Çözüm Adımları:
1. İlgili **cisim veya sistem** seçilir ve **FBD çizilir**.
2. Üç denge denklemi yazılır.
3. Bilinmeyen sayısı ≤ 3 ise sistem **statik belirlidir**.
4. Sonuçlar **fiziksel anlamda** değerlendirilir (yön, büyüklük, birim).

#### Örnek: Vinç Kiriş Problemi
- Kiriş ağırlığı: 6 kN
- Uç yükü: 10 kN
- Kablo açısı: 25°
  
**Denge Denklemleri**:

$$
\begin{aligned}
\sum F_x &= 0: & A_x - T \cos 25^\circ &= 0 \\
\sum F_y &= 0: & A_y + T \sin 25^\circ - 6 - 10 &= 0 \\
\sum M_A &= 0: & (T \cos 25^\circ)(0.25) + (T \sin 25^\circ)(4.88) \\
&& - 10(3.38) - 6(2.38) &= 0
\end{aligned}
$$

**Çözüm**:  
$T = 21.0\, \text{kN}, \quad A = \sqrt{A_x^2 + A_y^2} = 20.3\, \text{kN}$

---

### Üç Boyutta Denge (Equilibrium in Three Dimensions)

Altı denge denklemi kullanılır. FBD çiziminde 3B destek modelleri dikkate alınır.

#### Örnek: Küresel Mafsal ile Taşınan Mil
- Kütle: 200 kg → $W = 1962\, \text{N}$
- Geometri: $x=2\, \text{m}, y=6\, \text{m}, z=3\, \text{m}$

**Denge Denklemleri**:

$$
\begin{aligned}
\sum F_x &= 0: & -A_x + B_x &= 0 \\
\sum F_y &= 0: & -A_y + B_y &= 0 \\
\sum F_z &= 0: & A_z - 1962 &= 0 \\
\sum M_{Ax} &= 0: & 1962(3) - 3B_y &= 0 \\
\sum M_{Ay} &= 0: & -1962(1) + 3B_x &= 0
\end{aligned}
$$

**Çözüm**:  
$A_x = 654\, \text{N},\ A_y = 1962\, \text{N},\ A_z = 1962\, \text{N}$  
$A = \sqrt{654^2 + 1962^2 + 1962^2} = 2850\, \text{N}$

> [!note] $\sum M_{Az} = 0$ denklemi **kontrol** amacıyla kullanılabilir.

---

### Örnek Problemler ve Çözümleri

#### Problem 3/2: Makaralı Sistem
- Kütle: 500 kg
- Pulley A: $T_1 = T_2 = 2450\, \text{N}$
- Pulley B: $T_3 = T_4 = 1226\, \text{N}$
- Pulley C: $T = 1226\, \text{N}$
- Rulman kuvveti: $F = \sqrt{(1062)^2 + (613)^2} = 1226\, \text{N}$

#### Problem 3/3: Eğik Kiriş
- $\sin \theta = 3/8 \Rightarrow \theta = 22.0^\circ$
- $P = 654\, \text{N},\ R = 327\, \text{N}$

#### Problem 3/14: Kayar Askı
- $m = 300\, \text{kg} \rightarrow W = 2943\, \text{N}$
- Moment alınarak $A$ ve $B$ tepkileri bulunur.

#### Problem 3/31: Birleşik Makara
- $T = 3.2\, \text{kN}$
- $R = \sqrt{(-2.95)^2 + (3.23)^2} = 4.38\, \text{kN}$

#### Problem 3/57: Halat-Sistem (Turnbuckle)
- $T = \frac{2}{7} mg$

---

## Temel Formüller ve Hızlı Bilgiler

> [!example]+ 2B Denge Denklemleri
> $$\sum F_x = 0,\quad \sum F_y = 0,\quad \sum M_O = 0$$

> [!example]+ 3B Denge Denklemleri
> $$\sum F_x = \sum F_y = \sum F_z = 0 \\ \sum M_x = \sum M_y = \sum M_z = 0$$

> [!example]+ Yay Kuvveti
> $$F = kx$$  
> *k: yay sabiti, x: uzama/mıkılaşma*

> [!example]+ Ağırlık
> $$W = mg,\quad g \approx 9.81\, \text{m/s}^2$$

> [!example]+ Moment
> $$M = F \cdot d$$  
> *d: kuvvetin moment noktasına dik mesafesi*

> [!CODE]- Yaygın Destek Tepkileri (2B)
> - **Pim**: 2 bilinmeyen ($R_x, R_y$)  
> - **Ankastre**: 3 bilinmeyen ($R_x, R_y, M$)  
> - **Makara**: 1 bilinmeyen (normal kuvvet)

---

## Kaynaklar

- Meriam, J. L., & Kraige, L. G. (2007). *Engineering Mechanics: Statics* (6th ed.). Wiley.
- Ders notları, Dr. Yusuf YILMAZ, Mechanical Engineering Department, Konya, Türkiye.

> [!infobox]  
> Bu döküman, ders slaytlarında sunulan bilgiler sentezlenerek, öğrenciye kolay tekrar ve öğrenme imkânı sunmak amacıyla **Mistral OCR** ve **qwen3-max** LLM modeli kullanılarak hazırlanmıştır. Görseller ders slaytlarından alınmıştır.

---

# PDF

<iframe src="https://drive.google.com/file/d/1JBDhzSPQo34sR3P2Jh6PGocUPr_dyYFr/preview"
        width="100%"
        height="700x"
        allow="fullscreen"
        style="border:none;">
</iframe>

