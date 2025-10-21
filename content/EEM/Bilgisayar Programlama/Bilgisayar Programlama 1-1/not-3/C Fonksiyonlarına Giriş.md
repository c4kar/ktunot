# BİLGİSAYAR PROGRAMLAMAYA GİRİŞ – DERS NOTU 3  
## C Fonksiyonlarına Giriş ve Değişkenler  

> **Konya Teknik Üniversitesi**  
> **Elektrik - Elektronik Mühendisliği Bölümü**  
> **15.03.2024 | Konya**

---

## İçindekiler

- [[#C Dilinin Özellikleri]]
- [[#C Programlarının Temel Yapısı]]
- [[#Önişlemci Direktifleri]]
- [[#Bazı Kütüphane Başlık Dosyaları]]
- [[#Genel Giriş-Çıkış Kütüphanesi]]
- [[#Main Fonksiyonu]]
- [[#printf() Fonksiyonu]]
- [[#Format Karakterleri]]
- [[#Escape Karakterleri]]
- [[#C Dilinin Genel Yazım Kuralları]]
- [[#İlk C Programınız]]
- [[#Değişken Tanımlamaları ve Veri Türleri]]
- [[#Değişken İsimlendirme]]
- [[#Veri Türleri]]
- [[#Değişken Tanımlama ve İlk Değer Atama]]
- [[#scanf() Fonksiyonu]]
- [[#Program Hataları]]
- [[#Örnek: Küçük Harfi Büyük Harfe Dönüştürme]]
- [[#Ödev]]

---

## C Dilinin Özellikleri

- C dili **donanımdan bağımsız** (machine independent) ve **taşınabilirdir** (portable).
- Taşınabilirlik, aynı programın **farklı donanımlarda ve işletim sistemlerinde** çalışabilmesidir.
- C dili **verimli**, **basit** ve **güçlü** bir yapıya sahiptir.
- Bu özellikler sayesinde hem sistem programlamada hem de uygulama geliştirme süreçlerinde yaygın olarak kullanılır.

---

## C Programlarının Temel Yapısı

Bir C programı iki temel bölümden oluşur:

1. **Önişlemci Direktifleri** (`#include`, `#define` vb.)
2. **Ana Fonksiyon** (`main()`)

---

## Önişlemci Direktifleri

- `#` işareti ile başlar.
- Derleme öncesi **C önişlemcisi** tarafından işlenir.
- En yaygın kullanılanları:
  - `#include <dosya.h>` → Belirtilen başlık dosyasını programa ekler.
  - `#define` → Sabit tanımlamaları yapar.

> **Örnek:** `printf()` fonksiyonunu kullanmak için `<stdio.h>` başlık dosyası gerekir:
```c
#include <stdio.h>
```

---

## Bazı Kütüphane Başlık Dosyaları

| Başlık Dosyası       | Açıklama |
|----------------------|----------|
| `<ctype.h>`          | Karakter işlemleri (`isalpha`, `isdigit` vb.) |
| `<math.h>`           | Matematiksel fonksiyonlar (`sin`, `sqrt`, `pow` vb.) |
| `<stdio.h>`          | Giriş/çıkış (`printf`, `scanf`, `getchar`) |
| `<stdlib.h>`         | Genel amaçlı (`exit`, `malloc`, `rand`) |
| `<string.h>`         | String işlemleri (`strlen`, `strcpy`) |
| `<time.h>`           | Zaman işlemleri (`time`, `clock`) |

> **Örnek Fonksiyonlar:**
- `exit()`: Programı sonlandırır.
- `sqrt()`: Karekök alır.
- `printf()`: Ekrana çıktı verir.

---

## Genel Giriş-Çıkış Kütüphanesi

- Kullanıcı ile etkileşim kurmak için **giriş-çıkış fonksiyonları** kullanılır.
- En temel fonksiyonlar:
  - `printf()`: Ekrana veri yazdırır.
  - `scanf()`: Kullanıcıdan veri alır.
- Bu fonksiyonlar **`<stdio.h>`** başlık dosyasında tanımlıdır.

---

## Main Fonksiyonu

- Her C programında **tek bir `main()` fonksiyonu** olmalıdır.
- Programın **giriş noktasıdır**; çalıştırıldığında buradan başlar.
- Fonksiyon gövdesi `{ }` içinde yazılır.

```c
int main() {
    // Kodlar buraya yazılır
    return 0;
}
```

> **Not:** `return 0;` → Programın başarıyla bittiğini belirtir.

---

## printf() Fonksiyonu

- Ekrana veri yazdırmak için kullanılır.
- Genel kullanım:
```c
printf("format_dizisi", değişken_listesi);
```

**Örnekler:**
```c
printf("Merhaba Dünya!");
printf("Yaşınız: %d", yas);
printf("Pi = %.2f", 3.14159);
```

---

## Format Karakterleri

| Format | Açıklama |
|--------|----------|
| `%d`   | `int` tamsayı |
| `%c`   | Karakter |
| `%s`   | String |
| `%f`   | `float` |
| `%lf`  | `double` |
| `%x`   | Hexadecimal (küçük harf) |
| `%X`   | Hexadecimal (büyük harf) |
| `%u`   | İşaretsiz tamsayı |

> **Not:** `%lf` → `double` türü için kullanılır.

---

## Escape Karakterleri

| Karakter | Açıklama |
|---------|----------|
| `\n`    | Yeni satır |
| `\t`    | Sekme |
| `\"`    | Çift tırnak |
| `\\`    | Ters bölü |
| `\a`    | Bip sesi |

**Örnek:**
```c
printf("İsim:\tAli\nYaş:\t25");
```

---

## C Dilinin Genel Yazım Kuralları

- Yorum satırları: `/* ... */` veya `// ...` (C99+)
- Her ifade `;` ile biter.
- **Büyük-küçük harf duyarlıdır**: `Toplam ≠ toplam`
- Anahtar kelimeler **küçük harfle** yazılır (`int`, `if`, `while`).
- `#define` ile yapılan tanımlamalarda genellikle **büyük harf** kullanılır.

---

## İlk C Programınız

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("Merhaba Dunya");
    getch();
    return 0;
}
```

> **Not:** `getch()` → `<conio.h>` gerektirir (Windows özelidir). Taşınabilirlik için `getchar()` tercih edilebilir.

---

## Değişken Tanımlamaları ve Veri Türleri

Her değişken **isim**, **veri türü** ve **değer** içerir. Tanımlama örneği:
```c
int yas;
float ortalama;
char harf = 'A';
```

---

## Değişken İsimlendirme

**Kurallar:**
- Sadece **İngilizce harfler**, **rakamlar** ve **alt çizgi (`_`)** kullanılabilir.
- **Rakamla başlanamaz**: `1ogrenci` ❌, `ogrenci1` ✅
- **Türkçe karakter** veya **özel karakter** (`+`, `-`, `!`) **kullanılamaz**.
- **Anahtar kelimeler** (`int`, `return`, `if`) değişken ismi olamaz.

---

## Veri Türleri

| Tür | Açıklama | Bellek | Aralık |
|-----|----------|--------|--------|
| `char` | Karakter | 1 byte | -128 → +127 |
| `int` | Tamsayı | 2/4 byte | ±32.767 / ±2.147.483.647 |
| `float` | Ondalıklı | 4 byte | ±3.4E±38 (6 basamak) |
| `double` | Yüksek hassasiyet | 8 byte | ±1.7E±308 (15 basamak) |

> **Not:** `float` virgülden sonra **en fazla 6** basamak tutar.

---

## Değişken Tanımlama ve İlk Değer Atama

- Değişkenler **fonksiyon dışında** (global) tanımlanırsa **otomatik sıfırlanır**.
- **Fonksiyon içinde** (local) tanımlanırsa **rastgele değer** alır (ilk değer atanmalı!).

**Örnek:**
```c
#include <stdio.h>
int global = 10; // global → 0 atanır

int main() {
    int local; // undefined!
    float pi = 3.1415926535;
    printf("%.6f\n", pi); // 3.141593
    return 0;
}
```

---

## scanf() Fonksiyonu

- Kullanıcıdan veri alır.
- Değişkenin **adresi** (`&`) ile kullanılır.

**Örnek:**
```c
int yas;
printf("Yaşınızı girin: ");
scanf("%d", &yas);
```

> **Önemli:** String (`char[]`) okurken `&` **kullanılmaz**.

---

## Program Hataları

| Hata Türü | Açıklama |
|-----------|----------|
| **Syntax** | Yazım kurallarına uyulmaması → Derleyici yakalar |
| **Run-time** | Çalışma esnasında oluşan hata (bölme sıfır, dosya bulunamadı) |
| **Logic** | Mantık hatası → Program çalışır ama yanlış sonuç verir |

> Mantık hataları en zor tespit edilenlerdir!

---

## Örnek: Küçük Harfi Büyük Harfe Dönüştürme

ASCII’de küçük harfler büyük harflerden **32 fazladır**.

```c
#include <stdio.h>
int main() {
    char kucuk = 'a';
    char buyuk = kucuk - 32;
    printf("Büyük harf: %c\n", buyuk); // A
    return 0;
}
```

> Veya `toupper()` fonksiyonuyla: `<ctype.h>`

---

## Ödev

> **Ödev 1:**  
> Kullanıcıdan **4 adet tam sayı** alın.  
> - Bu sayıların **toplamını** hesaplayın.  
> - Her sayının **toplama göre yüzdesini** (`float`) hesaplayıp ekrana yazdırın.  
> - **Dikkat:** 4 yüzdelik değerin toplamı **100.00** olmalıdır.

**Örnek Çıktı:**
```
Sayıları girin: 10 20 30 40
Toplam: 100
Yüzde değerleri:
10 → %10.00
20 → %20.00
30 → %30.00
40 → %40.00
Toplam Yüzde: %100.00
```

> **İpucu:** Yüzde = `(sayı * 100.0) / toplam`

---

**Hazırlayan:** [Konya Teknik Üniversitesi – EEM]  
**Tarih:** 15.03.2024  
**Ders:** Bilgisayar Programlamaya Giriş 1

Kaynaklar:  
- K.N. King, *C Programming: A Modern Approach*  
- ISO/IEC 9899:1999 (C99 Standard)  
- Konya Teknik Üniversitesi Ders Notları