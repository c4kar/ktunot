İçindekiler  
[Genel Özet](#genel-özet)  
[Temel Terimler ve Kavramlar](#temel-terimler-ve-kavramlar)  
[Matematiksel Fonksiyonlar ve Kullanımı](#matematiksel-fonksiyonlar-ve-kullanımı)  
[Karmaşık Sayılar](#karmaşık-sayılar)  
[Trigonometrik Fonksiyonlar](#trigonometrik-fonksiyonlar)  
[Yuvarlama Fonksiyonları](#yuvarlama-fonksiyonları)  
[Logaritmik ve Üstel Fonksiyonlar](#logaritmik-ve-üstel-fonksiyonlar)  
[Diğer Önemli Matematiksel Fonksiyonlar](#diğer-önemli-matematiksel-fonksiyonlar)  
[Integral Hesabı ve Sayısal Yöntem](#integral-hesabı-ve-sayısal-yöntem)  
[Ödev Problemleri](#ödev-problemleri)  
[Kaynaklar](#kaynaklar)

---

## Genel Özet

Bu ders notu, C programlama dilinde **matematiksel işlemler** gerçekleştirmek amacıyla kullanılan **math.h** ve **complex.h** kütüphanelerini ayrıntılı olarak inceler. Matematiksel fonksiyonlar genellikle `double` türünde çalışır ve `#include <math.h>` yönergesi ile programa dahil edilir. Trigonometrik, logaritmik, üstel, yuvarlama ve mutlak değer fonksiyonları gibi işlemler bu kütüphane aracılığıyla kolaylıkla yapılır. 

Ayrıca, **karmaşık sayılar** için `complex.h` kütüphanesi tanıtılmıştır. Bu kütüphane, karmaşık sayıların reel ve sanal bileşenlerini elde etmek gibi işlemleri mümkün kılar. İntegral hesaplaması için **sayısal yöntemlerden dikdörtgen yöntemi** örneklendirilmiştir. Notun sonunda verilen ödevler, öğrencilerin karmaşık sayılarla işlem yapma ve sayısal hesaplama becerilerini geliştirmeyi amaçlamaktadır.

---

## Temel Terimler ve Kavramlar

- **math.h**: Matematiksel fonksiyonları içeren C standart kütüphanesi.
- **complex.h**: Karmaşık sayı işlemleri için kullanılan başlık dosyası.
- **EDOM**: Fonksiyona geçersiz (etki alanının dışında) bir değer girildiğinde oluşan hata.
- **HUGE_VAL**: Aşırı büyük sonuçlar için kullanılan özel sabit.
- **double _Complex**: Karmaşık sayı tanımlamak için kullanılan veri türü.
- **creal() / cimag()**: Karmaşık sayının reel ve sanal kısmını döndüren fonksiyonlar.
- **ceil() / floor()**: Sayıyı yukarı/aşağı yuvarlayan fonksiyonlar.
- **pow(x, y)**: x üzeri y işlemini yapan fonksiyon.
- **Sayısal İntegral**: İntegralin yaklaşık olarak dikdörtgen toplamı ile hesaplanması.

---

## Matematiksel Fonksiyonlar ve Kullanımı

C dilinde matematiksel işlemler genellikle `math.h` kütüphanesi ile yapılır. Bu kütüphane şu tür fonksiyonları içerir:

- Trigonometrik (`sin`, `cos`, `tan`, `asin`, `acos`, `atan`)
- Hiperbolik (`sinh`, `cosh`)
- Logaritmik (`log`, `log10`)
- Üstel (`exp`, `pow`, `ldexp`)
- Yuvarlama (`ceil`, `floor`)
- Diğerleri (`fabs`, `sqrt`, `fmod`, `modf`)

> [!note]  
> Açılar **radyan** cinsindendir. Derece kullanmak için $\text{radyan} = \text{derece} \times \frac{\pi}{180}$ dönüşümü yapılmalıdır.

---

## Karmaşık Sayılar

C99 standardı ile birlikte `complex.h` kütüphanesi tanıtılmıştır. Karmaşık sayılar şu şekilde tanımlanır:

```c
#include <complex.h>
double _Complex z = 3.0 + 4.0 * I;
```

Karmaşık sayının bileşenlerine erişim:

- `creal(z)`: Reel kısmı döndürür.
- `cimag(z)`: Sanal kısmı döndürür.

### Örnek Kod:
```c
#include <stdio.h>
#include <complex.h>

int main() {
    double _Complex a = 3 + 5 * I;
    double _Complex b = 3 + 4 * I;
    printf("%.2f\n", creal(a) * cimag(b));  // 3 * 4 = 12
    printf("%.2f\n", cimag(a) + creal(b));  // 5 + 3 = 8
    return 0;
}
```

Çıktı:
```
12.000000
8.000000
```

---

## Trigonometrik Fonksiyonlar

| Fonksiyon     | Açıklama |
|---------------|----------|
| `sin(x)`      | x radyanının sinüsünü verir |
| `cos(x)`      | x radyanının kosinüsünü verir |
| `tan(x)`      | x radyanının tanjantını verir |
| `asin(x)`     | x’in ters sinüsünü verir (x ∈ [-1,1]) |
| `acos(x)`     | x’in ters kosinüsünü verir |
| `atan(x)`     | x’in ters tanjantını verir |
| `sinh(x)`     | Hiperbolik sinüs |
| `cosh(x)`     | Hiperbolik kosinüs |

> [!example]+ Dereceden Radyana Dönüşüm Örneği
```c
#include <stdio.h>
#include <math.h>

int main() {
    float x_deg = 45.0;
    float PI = 22.0 / 7.0;
    float x_rad = x_deg * (PI / 180);
    printf("sin(%.2f°) = %.2f\n", x_deg, sin(x_rad));
    return 0;
}
```

---

## Yuvarlama Fonksiyonları

- `ceil(x)`: x’ten büyük veya eşit en küçük tam sayı → yukarı yuvarlar.  
  Örn: `ceil(7.3) → 8.0`, `ceil(-7.3) → -7.0`

- `floor(x)`: x’ten küçük veya eşit en büyük tam sayı → aşağı yuvarlar.  
  Örn: `floor(7.3) → 7.0`, `floor(-7.3) → -8.0`

---

## Logaritmik ve Üstel Fonksiyonlar

| Fonksiyon     | Açıklama |
|---------------|----------|
| `exp(x)`      | $e^x$ değerini verir |
| `log(x)`      | Doğal logaritma ($\ln x$) |
| `log10(x)`    | 10 tabanında logaritma |
| `pow(x, y)`   | $x^y$ değerini hesaplar |
| `ldexp(x, n)` | $x \cdot 2^n$ işlemini yapar |

> [!note]  
> `log(x)` ve `log10(x)` fonksiyonlarında $x \leq 0$ olması **EDOM** hatası üretir.

### Örnek:
```c
#include <stdio.h>
#include <math.h>

int main() {
    float x = 10.0, y = -5.0, z = 25.0;
    printf("log10(%.1f) = %.2f\n", x, log10(x));       // 1.00
    printf("ln(%.1f) = %.2f\n", x, log(x));            // 2.30
    printf("Mutlak değer: %.2f\n", fabs(y));           // 5.00
    printf("(-5.0)^2 = %.2f\n", pow(y, 2));            // 25.00
    printf("sqrt(25) = %.2f\n", sqrt(z));              // 5.00
    return 0;
}
```

---

## Diğer Önemli Matematiksel Fonksiyonlar

| Fonksiyon         | Açıklama |
|--------------------|----------|
| `abs(x)`           | Tamsayı mutlak değeri (`#include <stdlib.h>` gerekir) |
| `fabs(x)`          | Kayan noktalı mutlak değer |
| `labs(x)`          | `long int` mutlak değeri |
| `sqrt(x)`          | Karekök (x < 0 ise EDOM) |
| `rand()`           | Rastgele sayı üretir |
| `fmod(x, y)`       | Kayan noktalı mod işlemi |
| `modf(x, &intpart)`| x’in tam ve kesirli kısmını ayırır |

---

## Integral Hesabı ve Sayısal Yöntem

İntegral, bir fonksiyonun belirli bir aralıktaki **alanını** temsil eder. Sayısal olarak, bu alan dikdörtgenlerle yaklaşık olarak hesaplanabilir:

$$
\int_a^b f(x)\,dx \approx \sum_{i=0}^{n-1} f(x_i) \cdot h, \quad h = \frac{b - a}{n}
$$

### Örnek Kod (Dikdörtgen Yöntemi):
```c
#include <stdio.h>
#define F(a) ((a * a) + 4)

int main() {
    float x, x_alt = 1, x_ust = 4, top = 0.0, h, integral;
    int dilim = 1000;
    h = (x_ust - x_alt) / dilim;
    x = x_alt;
    while (x < x_ust) {
        top += F(x);
        x += h;
    }
    integral = h * top;
    printf("Integral (%.1f ve %.1f arasında): %.2f\n", x_alt, x_ust, integral);
    return 0;
}
```

> [!infobox]  
> Dikdörtgen sayısı (dilim) arttıkça sonuç gerçek değere daha çok yaklaşır. Ancak işlem süresi de artar.

---

## Ödev Problemleri

1. **Kartezyen → Polar ve Polar → Kartezyen Dönüşüm Programları**  
   - Kartezyen: $z = a + jb$  
   - Polar: $z = r \angle \theta$, burada $r = \sqrt{a^2 + b^2}$, $\theta = \tan^{-1}(b/a)$  
   - Dönüşüm sırasında `atan2(b, a)` fonksiyonu tercih edilmelidir (çeyrek belirlemede daha doğru).

2. **AC Devre Akım Hesabı**  
   - Gerilim: $V = 220 \angle 30^\circ$ V  
   - Empedans: $Z = 20 + j10\ \Omega$  
   - Adımlar:  
     a. $Z$’yi polar forma çevir: $|Z| = \sqrt{20^2 + 10^2}$, $\theta_Z = \tan^{-1}(10/20)$  
     b. Akım: $I = \frac{V}{Z} = \frac{|V|}{|Z|} \angle (\theta_V - \theta_Z)$  
   - Sonucu ekrana **polar formatta** yazdır.

> [!success]  
> İpucu: Karmaşık sayı bölme işlemi doğrudan `complex.h` ile yapılabilir, ancak ödev, manuel dönüşümü zorunlu kılar.

---

## Kaynaklar

- Dr. Rıfat ÇÖLKESEN, *Programlama Sanatı*, Papatya Yayıncılık, Cilt 1, Kasım 2004.