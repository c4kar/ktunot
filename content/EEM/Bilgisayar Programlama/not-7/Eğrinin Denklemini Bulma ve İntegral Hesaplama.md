<iframe src="https://drive.google.com/file/d/1Q1dw3LTDYTZ4iy2lda2CJ0Z9qHwdv8Px/preview"
		width="100%"
        height="100%"
        allow="autoplay; fullscreen"
        allowfullscreen
        style="border:none; aspect-ratio:16/9;">
</iframe>
---
# BİLGİSAYAR PROGRAMLAMA 2  
**Ders Notu 7: Eğrinin Denklemini Bulma ve İntegral Hesaplama**  
Konya Teknik Üniversitesi – Elektrik-Elektronik Mühendisliği Bölümü  
26/11/2020 – Konya

---

## İçindekiler

1. [Verilen Noktalardan Geçen Eğrinin Denklemini Bulma](#verilen-noktalardan-geçen-eğrinin-denklemini-bulma)  
2. [Polinom Uydurma: `polyfit` ve `polyval`](#polinom-uydurma-polyfit-ve-polyval)  
3. [Örnek-1: Farklı Dereceli Polinomlar ile Eğri Uydurma](#örnek-1-farklı-dereceli-polinomlar-ile-eğri-uydurma)  
4. [Örnek-2: Kullanıcıdan Veri Alan Polinom Programı](#örnek-2-kullanıcıdan-veri-alan-polinom-programı)  
5. [Ödev: Öğrenci Çalışma Saati – GNO Bağıntısı](#ödev-öğrenci-çalışma-saati--gno-bağıntısı)  
6. [Otomatik Polinom Uydurma: Basic Fitting Aracı](#otomatik-polinom-uydurma-basic-fitting-aracı)  
7. [Örnek-3: Basic Fitting ile Polinom Analizi](#örnek-3-basic-fitting-ile-polinom-analizi)  
8. [Veri İstatistiksel Analizi: Data Statistics](#veri-istatistiksel-analizi-data-statistics)  
9. [İnterpolasyon: `interp1` Fonksiyonu](#interpolasyon-interp1-fonksiyonu)  
10. [Örnek-4: İnterpolasyon Uygulaması](#örnek-4-interpolasyon-uygulaması)  
11. [İntegral Hesaplama](#integral-hesaplama)  
    - [Nümerik İntegral: `quad`](#nümerik-integral-quad)  
    - [Sembolik İntegral: `int`](#sembolik-integral-int)  
12. [Örnek-5: Sembolik İntegral ile Çarpım İntegrali](#örnek-5-sembolik-integral-ile-çarpım-integrali)  
13. [Ödevler](#ödevler)  

---

## Verilen Noktalardan Geçen Eğrinin Denklemini Bulma

Deneylerde elde edilen veri noktaları genellikle bir matematiksel modele uydurulmak istenir. Bu model **en küçük kareler yöntemi** ile belirlenir; yani her noktaya olan dikey uzaklıkların karelerinin toplamı en aza indirgenir.

- En yaygın yaklaşım, veriye **bir polinom** uydurmaktır:  
  $$
  p(x) = a_n x^n + a_{n-1} x^{n-1} + \ldots + a_1 x + a_0
  $$
- **n. dereceden** bir polinomda **n+1** adet katsayı vardır.
- Eğer **n+1** adet veri noktası varsa, bu noktaların **hepsinden geçen** tek bir n. dereceden polinom vardır. Ancak bu çok yüksek dereceli olabilir ve **aşırı uydurma (overfitting)** yapabilir.
- Bu yüzden genellikle **düşük dereceli** (1., 2., 3.) polinomlar tercih edilir.

---

## Polinom Uydurma: `polyfit` ve `polyval`

MATLAB'ta bu işlem için iki temel fonksiyon kullanılır:

### `p = polyfit(x, y, n)`
- `x`, `y`: Veri noktaları (vektörler)
- `n`: Polinom derecesi
- `p`: Katsayılar vektörü → **yüksekten düşüğe sıralı**:  
  `p = [a_n, a_{n-1}, ..., a_1, a_0]`

### `y_est = polyval(p, x_new)`
- `p`: `polyfit` ile bulunan katsayılar
- `x_new`: Yeni x değerleri
- `y_est`: Polinomun bu x’lerdeki tahmini y değerleri

> 📌 **Not:** Polinomun uygunluğunu kontrol etmek için `plot(x, y, 'o')` ile orijinal veri, `plot(x_new, y_est, '-')` ile eğri çizdirilir.

---

## Örnek-1: Farklı Dereceli Polinomlar ile Eğri Uydurma

| X | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| Y | 5 | 8 | 7 | 6 | 9 | 11 | 14 |

Verilen veriye farklı derecelerden polinomlar uydurulduğunda:

- **1. derece (doğrusal):**  
  $ p_1(x) = 1.25x + 4.8214 $
- **2. derece:**  
  $ p_2(x) = 0.2738x^2 - 0.3929x + 6.1905 $
- **3. derece:**  
  $ p_3(x) = 0.1111x^3 - 0.7262x^2 + 1.8294x + 5.5238 $
- **...**
- **6. derece:**  
  Tüm noktalardan **tam olarak** geçer (çünkü 7 nokta var → 6. derece polinom tekil çözümdür)

> 📈 **Gözlem:** Derece arttıkça veriye daha çok uyar, ancak genelleme yeteneği düşer. Uygun derece, **hata (residual)** ve **basitlik** dengesiyle seçilir.

---

## Örnek-2: Kullanıcıdan Veri Alan Polinom Programı

Aşağıdaki MATLAB programı, kullanıcıdan veri alır, polinom uydurur ve grafiğini çizer:

```matlab
% Örnek-2: Kullanıcıdan veri alan polinom programı
clc; clear;

n = input('Polinom derecesini giriniz: ');
m = input('Veri sayısını giriniz: ');

x = zeros(1, m);
y = zeros(1, m);

for i = 1:m
    fprintf('%d. noktanın x değerini girin: ', i);
    x(i) = input('');
    fprintf('%d. noktanın y değerini girin: ', i);
    y(i) = input('');
end

p = polyfit(x, y, n);
fprintf('Polinom katsayıları (yüksekten düşüğe):\n');
disp(p);

% Grafik çizimi
x_plot = linspace(min(x), max(x), 100);
y_plot = polyval(p, x_plot);

figure;
plot(x, y, 'ro', 'MarkerSize', 8, 'DisplayName', 'Veri Noktaları');
hold on;
plot(x_plot, y_plot, 'b-', 'LineWidth', 2, 'DisplayName', ['Derece ', num2str(n)]);
grid on;
xlabel('x');
ylabel('y');
legend('Location', 'best');
title('Polinom Uydurma');
hold off;
```

---

## Ödev: Öğrenci Çalışma Saati – GNO Bağıntısı

| GNO | 2.9 | 3.1 | 3.7 | 4.0 | 3.9 |
|-----|-----|-----|-----|-----|-----|
| S/H | 5   | 6   | 7   | 8   | 9   |

> 🎯 **Görev:** Bu veriye en uygun polinomu (örneğin 2. derece) uydurun, denklemini bulun ve grafiğini çizin.

**Çözüm Önerisi:**
```matlab
x = [5 6 7 8 9];      % Çalışma saati
y = [2.9 3.1 3.7 4.0 3.9]; % GNO

p = polyfit(x, y, 2);
x_fit = 5:0.1:9;
y_fit = polyval(p, x_fit);

plot(x, y, 'ko', 'MarkerSize', 10);
hold on;
plot(x_fit, y_fit, 'r--', 'LineWidth', 2);
xlabel('Haftalık Çalışma Saati (S/H)');
ylabel('Genel Not Ortalaması (GNO)');
title('GNO vs. Çalışma Saati');
grid on;
legend('Veri', '2. Derece Polinom');
```

---

## Otomatik Polinom Uydurma: Basic Fitting Aracı

MATLAB Figure penceresinde **Tools → Basic Fitting** seçeneğiyle görsel olarak polinom uydurma yapılabilir:

- Farklı dereceler seçilebilir (1–10 arası)
- Denklem katsayıları gösterilebilir
- **Residual (artık)** grafiği ile hata analizi yapılabilir
- **"Center and scale x data"** seçeneği, sayısal kararlılık için x verisini normalize eder (özellikle yüksek dereceli polinomlarda önerilir)

---

## Örnek-3: Basic Fitting ile Polinom Analizi

Veri:
```matlab
x = [0 2 4 6 8 10 12];
y = [0 5 17 37 67 102 146];
plot(x, y, 'o'); grid on;
```

Basic Fitting ile **quadratic (2. derece)** polinom seçildiğinde:
- Denklem:  
  $ y = 0.98214 x^2 + 0.39286 x + 3.5662 \times 10^{-14} $
- Kalan terim ≈ 0 → Sabit terim ihmal edilebilir
- **Norm of residuals = 1.3093** → Küçük hata → iyi uyum

> 📊 **Gözlem:** Veri yaklaşık olarak $ y \approx x^2 $ şeklinde → 2. derece polinom idealdir.

---

## Veri İstatistiksel Analizi: Data Statistics

Figure penceresinde **Tools → Data Statistics** seçeneğiyle:
- Ortalama, medyan, standart sapma
- Min/max değerler
- Veri üzerinde istatistiksel özet görüntülenebilir

> 🔍 Özellikle veri kalitesi ve dağılımı hakkında hızlı bilgi sağlar.

---

## İnterpolasyon: `interp1` Fonksiyonu

İki veri noktası arasındaki değeri tahmin etmek için kullanılır.

### Kullanım:
```matlab
yi = interp1(x, y, xi, 'method');
```

### Yöntemler (`method`):
- `'linear'` → Doğrusal (varsayılan)
- `'nearest'` → En yakın komşu
- `'spline'` → Kübik spline (pürüzsüz)
- `'cubic'` → Kübik interpolasyon

---

## Örnek-4: İnterpolasyon Uygulaması

Veri:
| X | 5 | 10 | 20 | 30 | 40 |
|---|---|----|----|----|----|
| Y | 4 | 12 | 24 | 40 | 62 |

Tahmin istenenler: **x = 15, 25, 35**

```matlab
x = [5 10 20 30 40];
y = [4 12 24 40 62];
xi = [15 25 35];

yi_linear = interp1(x, y, xi, 'linear');
yi_spline = interp1(x, y, xi, 'spline');

% Sonuçlar
disp('Linear:'); disp(yi_linear);
disp('Spline:'); disp(yi_spline);

% Grafik
x_plot = 5:0.5:40;
y_plot_lin = interp1(x, y, x_plot, 'linear');
y_plot_spl = interp1(x, y, x_plot, 'spline');

figure;
plot(x, y, 'ko', 'MarkerSize', 10, 'DisplayName', 'Veri');
hold on;
plot(x_plot, y_plot_lin, 'b--', 'DisplayName', 'Linear');
plot(x_plot, y_plot_spl, 'r-', 'DisplayName', 'Spline');
plot(xi, yi_spline, 'r*', 'MarkerSize', 12);
xlabel('x'); ylabel('y');
legend('Location', 'best'); grid on;
```

---

## İntegral Hesaplama

### Nümerik İntegral: `quad`

> ⚠️ **Not:** `quad` eski sürümlerde kullanılır; yeni sürümlerde **`integral`** önerilir.

```matlab
% Örnek: ∫₀² 1/(x³ - 2x - 5) dx
f = @(x) 1./(x.^3 - 2*x - 5);
Q = integral(f, 0, 2);  % quad yerine integral kullanın
```

### Sembolik İntegral: `int`

Symbolic Math Toolbox gerekir.

```matlab
syms x
f = -2*x^5 - 4*x + 20;
F = int(f);  % Belirsiz integral
disp(F);
```

---

## Örnek-5: Sembolik İntegral ile Çarpım İntegrali

$$
\int \sin(3tx) \cos(x) \, dx
$$

```matlab
clc; clear all;
syms x t
f4 = sin(3*t*x) * cos(x);

% Varsayılan değişkene göre integral (x)
sonuc_x = int(f4, x);
pretty(sonuc_x)

% t’ye göre integral
sonuc_t = int(f4, t);
pretty(sonuc_t)
```

> 🔎 `symvar(f4,1)` ile varsayılan sembolik değişken (genellikle alfabetik ilk: `t` değil `x`) belirlenir.

---

## Ödevler

### 1. İntegralleri Hesaplayın:
a) $\displaystyle \int_{1}^{\ln 5} e^{2x} \, dx$  
b) $\displaystyle \int_{1}^{\pi/2} \sin x \cos x \, dx$

**Çözüm (sembolik):**
```matlab
syms x
% a)
a = int(exp(2*x), x, 1, log(5));
double(a)

% b)
b = int(sin(x)*cos(x), x, 1, pi/2);
double(b)
```

### 2. Belirsiz İntegral:
$$
\int \frac{x^2 + x + 1}{x^3 + x} \, dx
$$

```matlab
syms x
f = (x^2 + x + 1) / (x^3 + x);
F = int(f);
pretty(F)
```

---

> 📘 **Not:** Bu ders notu, veri modelleme, interpolasyon ve integral hesaplama konularında temel MATLAB yeteneklerini kapsamaktadır. Uygulamalarda **aşırı uydurmadan kaçınmak**, **hata analizi yapmak** ve **uygun yöntemi seçmek** önemlidir.

---  
**Kaynak:** Konya Teknik Üniversitesi – Bilgisayar Programlama 2 Ders Notları (26/11/2020)