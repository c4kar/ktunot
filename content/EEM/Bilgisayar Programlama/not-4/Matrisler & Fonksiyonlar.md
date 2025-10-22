<iframe src="https://drive.google.com/file/d/1IYb1AUmVwceMTrQwT8Q00RwP_C_mameI/preview"
		width="100%"
        height="100%"
        allow="autoplay; fullscreen"
        allowfullscreen
        style="border:none; aspect-ratio:16/9;">
</iframe>

---

# **Bilgisayar Programlama 2**  
## **Ders Notu 4: Matrisler & Fonksiyonlar (Devamı)**  
**Konya Teknik Üniversitesi – Elektrik-Elektronik Mühendisliği Bölümü**  
**Tarih:** 5 Kasım 2020, Konya

---

## **İçindekiler**
1. [Matris İşlemleri Uygulaması](#matris-i̇şlemleri-uygulaması)  
2. [Polinom Değer Hesaplama](#polinom-değer-hesaplama)  
3. [Matris İndeksleme ve (:) Notasyonu](#matris-i̇ndeksleme-ve--notasyonu)  
4. [Matrise Eleman Ekleme/Silme/Değiştirme](#matrise-eleman-eklemesilmedeği̇şti̇rme)  
5. [Temel Fonksiyonlar](#temel-fonksi̇yonlar)  
   - Trigonometrik Fonksiyonlar  
   - Üstel ve Logaritmik Fonksiyonlar  
   - Karmaşık Sayı İşlemleri  
   - Yuvarlatma Fonksiyonları  
   - Diğer Yardımcı Fonksiyonlar (`sign`, `gcd`, `factor`, `primes`)  
6. [Fonksiyon Tanımlama](#fonksi̇yon-tanımlama)  

---

## **Matris İşlemleri Uygulaması**

Verilen matris:
$$
A = \begin{bmatrix}
11 & -1 & -6 \\
12 & 0 & -5 \\
-6 & 4 & 1
\end{bmatrix}
$$

### **Matlab Komutları:**
```matlab
A = [11 -1 -6; 12 0 -5; -6 4 1];
```

### **İstenen İşlemler:**
a) **Her sütundaki en büyük ve en küçük değerler:**
```matlab
max_col = max(A);   % Her sütunun maksimumu
min_col = min(A);   % Her sütunun minimumu
```

b) **Her satırdaki en büyük ve en küçük değerler:**
```matlab
max_row = max(A, [], 2);  % Satırlara göre maksimum (2. boyut)
min_row = min(A, [], 2);  % Satırlara göre minimum
```

---

## **Polinom Değer Hesaplama**

Fonksiyon:
$$
f(x) = \frac{2x^3 + x^2 + x + 4}{x^2 + 5x + 2}
$$

### **Matlab Çözümü:**
Not: `deconv` polinom bölmesi yapar; ancak doğrudan `polyval` ile pay ve paydayı hesaplamak daha güvenlidir.

```matlab
x_vals = [2, 4];
num = [2 1 1 4];      % 2x^3 + x^2 + x + 4
den = [1 5 2];        % x^2 + 5x + 2

f_at_x = polyval(num, x_vals) ./ polyval(den, x_vals);
```

> ❗ **Not:** Ders notundaki `f = deconv([2 1 1 4], [1 5 2])` yaklaşımı **yanıltıcıdır**, çünkü `deconv` bölme sonucu **bölüm + kalan** döndürür, fonksiyonun değerini değil. Doğru yöntem yukarıdakidir.

---

## **Matris İndeksleme ve (:) Notasyonu**

Verilen matris:
$$
A = \begin{bmatrix}
2 & 3 & -7 & 8 \\
7 & 9 & 4 & 1 \\
5 & 8 & 6 & -7 \\
-2 & 5 & -1 & 4
\end{bmatrix}
$$

### **Matlab Tanımı:**
```matlab
A = [2 3 -7 8; 7 9 4 1; 5 8 6 -7; -2 5 -1 4];
```

### **İstenen İşlemler:**
a) **(2,4) elemanı:**
```matlab
A(2,4)   % Sonuç: 1
```

b) **3. satır:**
```matlab
A(3,:)   % Sonuç: [5 8 6 -7]
```

c) **1. sütun:**
```matlab
A(:,1)   % Sonuç: [2; 7; 5; -2]
```

d) **3. ile 11. elemanlar arası:**
```matlab
A(3:11)  % Sütun öncelikli indislemeye göre
```

> 🔍 **Örnek:** Matrisin sütun öncelikli indis sıralaması:
> ```
> [1] 2   [5] 7   [9] 5   [13] -2
> [2] 3   [6] 9   [10] 8  [14] 5
> [3] -7  [7] 4   [11] 6 [15] -1
> [4] 8   [8] 1   [12] -7[16] 4
> ```
> → A(3:11) = [-7, 8, 7, 9, 4, 1, 5, 8, 6]

---

## **Matrise Eleman Ekleme / Silme / Değiştirme**

Aynı A matrisi üzerinden:

### **Örnekler:**
- **Eleman değiştirme:**
  ```matlab
  A(2,3) = 100;  % 2. satır, 3. sütun → 100
  ```
- **Satır silme:**
  ```matlab
  A(2,:) = [];   % 2. satır silinir
  ```
- **Sütun ekleme:**
  ```matlab
  A(:,5) = [1; 2; 3; 4];  % 5. sütun ekle
  ```

> ⚠️ Satır/sütun silme işlemi matris boyutunu kalıcı olarak değiştirir.

---

## **Temel Fonksiyonlar**

### **1. Trigonometrik Fonksiyonlar**
- Matlab **radyan** kullanır.
- Derece → radyan: `x_rad = x_deg * pi / 180`

#### **Örnek:**  
$x = 45^\circ$ için $\sin(4x) - (2\cos x)^3$
```matlab
x = 45 * pi / 180;
result = sin(4*x) - (2*cos(x))^3;
```

#### **Diğer örnek:**  
$x = 35^\circ$ için $y = \frac{(\sin x - 1)^2}{1 - \cos(2x)}$, $z = y - \tan^{-1}(x)$
```matlab
x = 35 * pi / 180;
y = (sin(x) - 1)^2 / (1 - cos(2*x));
z = y - atan(x);
```

---

### **2. Üstel ve Logaritmik Fonksiyonlar**

| Matematik | Matlab |
|---------|--------|
| $\ln(x)$ | `log(x)` |
| $\log_{10}(x)$ | `log10(x)` |
| $\log_2(x)$ | `log2(x)` |
| $\log_b(x)$ | `log(x)/log(b)` |
| $e^x$ | `exp(x)` |
| $a^x$ | `a^x` |
| $\sqrt{x}$ | `sqrt(x)` |

#### **Örnek:** $\log_3(12)$
```matlab
log10(12) / log10(3)   % veya log(12)/log(3)
```

#### **Diğer örnekler:**
```matlab
log(1)        % 0
log10(1)      % 0
log(10)       % ~2.3026
log10(10)     % 1
log2(8)       % 3
log10(0)      % -Inf
log10(-4)     % NaN (karmaşık değilse)
```

> ❗ `log(0)` → `-Inf`, `log(negatif)` → `NaN` (reel sayılar için)

#### **Doğal logaritma doğrulama:**
```matlab
log(exp(1))   % Sonuç: 1
```

---

### **3. Karmaşık (Kompleks) Sayı İşlemleri**

- Yazım şekilleri: `2+3i`, `2+3j`, `2+i*3` (dikkat: `i` veya `j` değişken değilse!)
- Güvenli kullanım: `1i`, `1j` → `2+3*1i`

#### **Fonksiyonlar:**
- `abs(z)` → genlik $r = \sqrt{a^2 + b^2}$
- `angle(z)` → açı (radyan)
- `complex(a, b)` → $a + bi$

#### **Örnek:**
```matlab
z = 2 - 3i;
r = abs(z);     % ~3.6056
theta = angle(z); % ~-0.9828 rad
```

> ⚠️ `i` veya `j` değişken olarak tanımlanmışsa, `sqrt(-1)` ile sıfırlayın:
> ```matlab
> clear i j
> ```

---

### **4. Yuvarlatma Fonksiyonları**

| Fonksiyon | Açıklama | Örnek |
|---------|--------|------|
| `fix(x)` | Sıfıra doğru yuvarla | `fix(-3.8) → -3` |
| `round(x)` | En yakın tam sayı | `round(3.5) → 4` |
| `ceil(x)` | Yukarı yuvarla | `ceil(3.2) → 4` |
| `floor(x)` | Aşağı yuvarla | `floor(3.9) → 3` |

#### **Tablo Özeti:**
| x        | fix | round | ceil | floor |
|----------|-----|-------|------|-------|
| 3.2      | 3   | 3     | 4    | 3     |
| 3.99     | 3   | 4     | 4    | 3     |
| -3.865   | -3  | -4    | -3   | -4    |

---

### **5. Diğer Yardımcı Fonksiyonlar**

- `sign(x)` → -1 (negatif), 0 (sıfır), +1 (pozitif)
- `gcd(a,b)` → en büyük ortak bölen
- `factor(n)` → asal çarpanlar
- `primes(n)` → ≤ n olan asal sayılar

#### **Örnekler:**
```matlab
gcd(16, 56)     % → 8
factor(165)     % → [3 5 11]
primes(50)      % → [2 3 5 7 11 13 17 19 23 29 31 37 41 43 47]
```

---

## **Fonksiyon Tanımlama**

### **Örnek 1: Silindir Alan ve Hacim Hesabı**

**Dosya:** `silindir.m`
```matlab
function [alan, hacim] = silindir(r, h)
    alan = 2 * pi * r^2 + 2 * pi * r * h;  % Toplam yüzey alanı
    hacim = pi * r^2 * h;
end
```

**Kullanım (`ornek.m`):**
```matlab
r = input('Yarıçapı giriniz: ');
h = input('Yüksekliği giriniz: ');
[alan, hacim] = silindir(r, h);
fprintf('Alan: %.2f, Hacim: %.2f\n', alan, hacim);
```

---

### **Örnek 2: Paralel Direnç Hesabı (1-5 direnç)**

**Dosya:** `paralel_direnc.m`
```matlab
function Req = paralel_direnc(varargin)
    % En fazla 5 direnç kabul eder
    if nargin > 5
        error('En fazla 5 direnç girilebilir.');
    end
    Req = 1 / sum(1 ./ [varargin{:}]);
end
```

**Kullanım:**
```matlab
R = paralel_direnc(10, 20, 30);  % 3 direnç
```

> 💡 `varargin` → değişken sayıda giriş parametresi

---

## **Ekstra: `help elfun` Komutu**

```matlab
>> help elfun
```
→ **Elementary Math Functions** listesini gösterir (trig, exp, log, complex, rounding vb.)

---

## **Kaynaklar**
- Ders notları, KTÜ EEM Bölümü, 2020  
- MATLAB Documentation

--- 

> ✅ Bu ders notu, sınav ve laboratuvar hazırlığı için özet niteliğindedir. Tüm örnekler MATLAB R2020a+ ile uyumludur.