<iframe src="https://drive.google.com/file/d/1IYb1AUmVwceMTrQwT8Q00RwP_C_mameI/preview"
		width="100%"
        height="100%"
        allow="autoplay; fullscreen"
        allowfullscreen
        style="border:none; aspect-ratio:16/9;">
</iframe>

---

## **İçindekiler**
1. [Polinomlar](#polinomlar)  
2. [Matrisler](#matrisler)  
3. [Matrislerde Aritmetik İşlemler](#matrislerde-aritmetik-i̇şlemler)  
4. [Matris Fonksiyonları](#matris-fonksiyonları)  
5. [Lineer Denklemlerin Matrisel Çözümleri](#lineer-denklem-sistemlerinin-matrisel-çözümü)  
6. [Örnekler ve Uygulamalar](#örnekler-ve-uygulamalar)

---

## **Polinomlar**

### **Tanım ve Gösterim**
- Polinomlar, genel olarak şu şekilde tanımlanır:  
  $$
  P(x) = a_n x^n + a_{n-1} x^{n-1} + \ldots + a_1 x + a_0
  $$
  Burada:
  - **n**: polinomun derecesi
  - **a₀, a₁, ..., aₙ**: katsayılar

- **MATLAB’de temsili**:  
  Polinomlar, **katsayıların azalan dereceye göre sıralandığı bir vektör** ile gösterilir:
  $$
  \text{P = [a_n, a_{n-1}, ..., a_1, a_0]}
  $$

  > 📌 **Not**: Eksik dereceler için `0` konulmalıdır.

---

### **Örnekler**

- **Örnek 1**:  
  $P(x) = 5x^3 - 6x^2 + 10x - 3$  
  → `P1 = [5, -6, 10, -3]`

- **Örnek 2**:  
  $P(x) = 9x^3 + 3x^2 + 12$  
  → `P2 = [9, 3, 0, 12]`

---

### **Polinom İşlemleri**

#### **Toplama / Çıkarma**
- Aynı boyutlu olmalı (eksik dereceler `0` ile doldurulmalı).  
- Normal dizi işlemleriyle yapılır: `p1 + p2` veya `p1 - p2`

#### **Skaler ile Çarpma**
```matlab
p = [2, -4, 10, -3];
g = 2 * p;  % g = [4, -8, 20, -6]
```

#### **Çarpma – `conv(p, q)`**
```matlab
p1 = [2, 4, 5];
p2 = [1, -2, 4];
g = conv(p1, p2);  % g = [2, 0, 5, 6, 20]
```

#### **Bölme – `[b, k] = deconv(p, q)`**
```matlab
p1 = [6, 3, 4, 8];
p2 = [2, 1, -5, 12];
[g, r] = deconv(p1, p2);  % g = [3], r = [0, 0, 19, -28]
```

#### **Polinom Değeri – `polyval(p, x)`**
```matlab
p = [1, 0, 1, 0];  % x³ + x
polyval(p, 2)  % Sonuç: 10
```

#### **Kök Bulma – `roots(p)`**
```matlab
p = [1, 3, -15, -2, 9];
kokler = roots(p);
```

#### **Köklerden Polinom – `poly(kokler)`**
```matlab
SPol = poly([-1.23+3.5i, -1.23-3.5i, 6.75]);
% Sonuç: [1.0000, -4.2900, -2.8421, -92.8996]
```

#### **Türev – `polyder(p)`**
```matlab
P = [-7, -3, 1, 14];  % -7x³ -3x² + x + 14
pturev = polyder(P);  % [-21, -6, 1]
```

> Ayrıca: `polyder(p, q)` → `(p*q)'` türevini verir.

---

## **Matrisler**

### **Tanım**
- iki veya daha fazla boyutlu dizilere **matris** denir.  
- Genel gösterim:
  $$
  F = 
  \begin{bmatrix}
  F_{11} & F_{12} & \cdots & F_{1n} \\
  F_{21} & F_{22} & \cdots & F_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  F_{m1} & F_{m2} & \cdots & F_{mn}
  \end{bmatrix}
  $$

### **MATLAB’de Tanımlama**
```matlab
A = [11, 12, 13;
     21, 22, 23];
```

> Matrisler skalerlerin yanı sıra fonksiyonlar da içerebilir:
```matlab
A = [1, 3, 4;
     sqrt(4), cos(60), 4^2];
```

### **Özel Matris Fonksiyonları**
| Fonksiyon         | Açıklama                                      |
|------------------|-----------------------------------------------|
| `ones(m,n)`      | tüm elemanları 1 olan matris                  |
| `zeros(m,n)`     | tüm elemanları 0 olan matris                 |
| `eye(n)`         | n×n birim matris                             |
| `rand(m,n)`      | rastgele [0,1] aralığında sayılar            |
| `pascal(k)`      | Pascal üçgeninden oluşan k×k matris          |
| `magic(m)`       | Satır/sütün/köşegen toplamları eşit kare matris |

---

## **Matrislerde Aritmetik İşlemler**

| İşlem             | MATLAB Formu        | Açıklama                                                                 |
|------------------|----------------------|--------------------------------------------------------------------------|
| Skaler İşlemler  | `A + 3`, `A * 2`     | Tüm elemanlar skalerle işleme girer.                                    |
| Toplama          | `A + B`              | Aynı boyutlu matrislerde eleman-eleman toplama.                         |
| Çıkarma          | `A - B`              | Eleman-eleman çıkarma.                                                  |
| Matris Çarpımı   | `A * B`              | **İç boyutlar eşleşmeli** (A: m×n, B: n×p → sonuç: m×p)                |
| Eleman-eleman Çarpım | `A .* B`         | Aynı boyuttaki elemanlar çarpılır.                                      |
| Ters Matris      | `inv(A)`             | Kare matris olmalı.                                                     |
| Bölme            | `A / B`              | `A * inv(B)` anlamında                                                     |
| Eleman-eleman Üs | `A .^ n`             | Her elemanın n. kuvveti                                                  |
| Matris Üssü      | `A ^ n`              | Sadece **kare matrisler** için, matris çarpımı yoluyla                   |

> ❗ `A * B` → matris çarpımı, `A .* B` → eleman-eleman çarpım!

---

## **Matris Fonksiyonları**

| Fonksiyon         | MATLAB Komutu | Açıklama                     |
|------------------|----------------|------------------------------|
| Determinant      | `det(A)`       | Kare matrisin determinantı   |
| Transpoz         | `A'`           | Satır ↔ Sütun                |
| Ters             | `inv(A)`       | Matrisin tersi               |
| Boyut            | `size(A)`      | [satır, sütun] döndürür     |
| Köşegen          | `diag(A)`      | Köşegen elemanları           |

---

## **Lineer Denklem Sistemlerinin Matrisel Çözümü**

### **1. Kare Sistemler (Denklem Sayısı = Bilinmeyen Sayısı)**

Denklem sistemi:
$$
\begin{aligned}
x + y &= 2 \\
2x + 3y &= 8
\end{aligned}
\quad \Rightarrow \quad
A = \begin{bmatrix} 1 & 1 \\ 2 & 3 \end{bmatrix},\quad
b = \begin{bmatrix} 2 \\ 8 \end{bmatrix}
$$

Çözüm:
```matlab
x = A \ b;       % Tercih edilen yöntem
% veya
x = inv(A) * b;  % Daha az verimli
```

### **2. Dikdörtgen Sistemler (Eksik/Aşırı Belirli)**

Örnek:
$$
\begin{aligned}
x + y + z &= 400 \\
10x + 5y &= 1600
\end{aligned}
$$

Bu durumda **sonsuz çözüm** veya **en küçük kareler çözümü** aranır:
```matlab
A = [1, 1, 1;
     10, 5, 0];
b = [400; 1600];
x = A \ b;  % En küçük kareler çözümü
```

---

## **Örnekler ve Uygulamalar**

### **Örnek 1: Polinom Çarpımı ve Değer Hesaplama**
```matlab
x = 1:10;
f = conv([2, 1, 1, 4], [1, 1, 1]);  % (2x³ + x² + x + 4)(x² + x + 1)
y = polyval(f, x);
disp([x', y']);
```

### **Örnek 2: 5 Bilinmeyenli Lineer Sistem**
```matlab
A = [3, 2, -1, 1, 3;
     -1, -1, 2, 1, 1;
     1, 1, 3, -1, -1;
     1, 1, 1, 1, 1;
     2, 2, -1, 3, 5];
b = [14; 7; 3; 9; 23];
x = A \ b;  % Çözüm vektörü
```

### **Ödev: Matris Çarpımı**
Verilen:
$$
A = \begin{bmatrix}
3 & 1 & 6 \\
1 & 5 & 8 \\
6 & 8 & 1
\end{bmatrix}, \quad
B = \begin{bmatrix}
2 & 11 & 0 \\
0 & 2 & 8 \\
7 & 5 & 2
\end{bmatrix}
$$

MATLAB’de:
```matlab
A = [3,1,6; 1,5,8; 6,8,1];
B = [2,11,0; 0,2,8; 7,5,2];
C = A * B;
```

---

## **Ödevler**

1. $p(x) = 3x^3 + 2x^2 + 7x + 4$ polinomunun köklerini bulunuz.
2. Yukarıdaki A ve B matrislerinin çarpımını hem elle hem MATLAB’de yapınız ve karşılaştırınız.

---

> 📘 **Not**: Ders notu, MATLAB’de polinom ve matris işlemlerinin temel kullanımını kapsamaktadır. Detaylı uygulamalar için MATLAB komut satırında pratik yapılması önerilir.
**Tarih**: 22 Ekim 2020  
