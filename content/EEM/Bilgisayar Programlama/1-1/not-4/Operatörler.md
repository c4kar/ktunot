İşte ders notunuzu düzenli, okunaklı ve ders notu formatında yeniden yazılmış hali:

---

# **BİLGİSAYAR PROGRAMLAMA 1**  
## **Ders Notu 4 – Operatörler**  
**Konya Teknik Üniversitesi**  
**Elektrik – Elektronik Mühendisliği Bölümü**  
**15.03.2024 – Konya**

---

## **Operatörler Nedir?**  
Operatörler, programlama dillerinde değişkenlerin veya sabit değerlerin üzerinde **matematiksel**, **mantıksal**, **karşılaştırmalı** veya **bit düzeyinde** işlemler yapmamızı sağlayan sembollerdir.

C dilinde kullanılan temel operatör türleri şunlardır:  
✅ Atama operatörü  
✅ Aritmetik operatörler  
✅ Karşılaştırma (ilişkisel) operatörler  
✅ Mantıksal operatörler  
✅ Bit-tabanlı operatörler  
✅ İşaretçi (pointer) operatörleri  
✅ `sizeof` operatörü  

---

## **1. Atama Operatörü (`=`)**  
Değişkenlere değer atamak için kullanılır.  
**Söz dizimi:**  
```c
int tam_sayi = 32;
int tam_sayi1 = tam_sayi;
```
> Sol tarafta **değişken**, sağ tarafta **değer** veya **ifade** bulunur.

---

## **2. Aritmetik Operatörler**

| Operatör | İşlem             | Operatör | İşlem              |
|----------|-------------------|----------|--------------------|
| `+`      | Toplama           | `--`     | 1 eksiltme         |
| `-`      | Çıkarma           | `+=`     | Topla ve ata       |
| `*`      | Çarpma            | `-=`     | Çıkar ve ata       |
| `/`      | Bölme             | `*=`     | Çarp ve ata        |
| `%`      | Mod alma          | `/=`     | Böl ve ata         |
| `++`     | 1 artırma         | `%=`     | Mod al ve ata      |

---

### **2.1 Mod Operatörü (`%`)**
Bir sayının başka bir sayıya bölümünden **kalanı** verir.  
**Örnek:**
```c
int Bolunen = 45;
int Bolen1 = 15, Bolen2 = 8;
int Kalan1 = Bolunen % Bolen1; // 0
int Kalan2 = Bolunen % Bolen2; // 5
```

---

### **2.2 Artırma ve Eksiltme Operatörleri (`++`, `--`)**
Değişkenin değerini **1 artırır** veya **1 azaltır**.

```c
a++;   // a = a + 1 (sonradan artırma)
++a;   // a = a + 1 (önceden artırma)
a--;   // a = a - 1
--a;   // a = a - 1
```

> **Önemli fark:**  
> - `b = a++;` → Önce `b = a` atanır, sonra `a` artırılır.  
> - `d = ++a;` → Önce `a` artırılır, sonra `d = a` olur.

#### **Örnek Kod ve Çıktı:**
```c
#include <stdio.h>
int a, b, c, d;
int main() {
    a = 5;
    b = a++; // b = 5, a = 6
    c = a;   // c = 6
    d = ++a; // a = 7, d = 7
    printf("b=%d dir, c=%d dir, d=%d dir, a=%d dir\n", b, c, d, a);
    printf("Simdi ise b=%d dir", --b); // b = 4
    return 0;
}
```
**Ekran çıktısı:**  
```
b=5 dir, c=6 dir, d=7 dir, a=7 dir
Simdi ise b=4 dir
```

---

### **2.3 Aritmetik Atama Operatörleri (`+=`, `-=`, `*=`, `/=`, `%=`)**
İşlem ve atamayı aynı anda yapar.

```c
b -= a;   // b = b - a;
d *= a;   // d = d * a;
b %= a;   // b = b % a;
```

#### **Örnek Kod ve Çıktı:**
```c
#include <stdio.h>
int main() {
    int a = 45, b = 2;
    a += b; b += 3;       // a=47, b=5
    printf("a=%d , b=%d\n", a, b);
    a -= b; b -= 3;       // a=42, b=2
    printf("a=%d , b=%d\n", a, b);
    a *= b; b *= 3;       // a=84, b=6
    printf("a=%d , b=%d\n", a, b);
    a /= b; b /= 5;       // a=14, b=1
    printf("a=%d , b=%d\n", --a, b); // a=13
    return 0;
}
```
**Ekran çıktısı:**
```
a=47 , b=5
a=42 , b=2
a=84 , b=6
a=13 , b=1
```

---

## **3. Karşılaştırma (İlişkisel) Operatörler**
`<`, `>`, `<=`, `>=`, `==`, `!=`  
Karşılaştırma sonucu **1 (true)** veya **0 (false)** döner.

> C dilinde `bool` tipi yoktur. `0` → false, `0’dan farklı` → true kabul edilir.

#### **Örnek Kod ve Çıktı:**
```c
#include <stdio.h>
int main() {
    int a = 5, b = 5, c = 10;
    printf("%d == %d -> %d \n", a, b, a == b);     // 1
    printf("%d == %d -> %d \n", a, c, a == c);     // 0
    printf("%d > %d -> %d \n", a, b, a > b);       // 0
    printf("%d > %d -> %d \n", a, c, a > c);       // 0
    printf("%d < %d -> %d \n", a, c, a < c);       // 1
    printf("%d != %d -> %d \n", a, b, a != b);     // 0
    printf("%d != %d -> %d \n", a, c, a != c);     // 1
    printf("%d >= %d -> %d \n", a, b, a >= b);     // 1
    printf("%d <= %d -> %d \n", a, c, a <= c);     // 1
    return 0;
}
```

---

## **4. Operatör Öncelik Sırası**

| Sıra | Operatörler                    | Açıklama              |
|------|--------------------------------|------------------------|
| 1    | `()`, `[]`                     | Parantez               |
| 2    | `++`, `--`                     | Artırma / Eksiltme     |
| 3    | `*`, `/`, `%`                  | Çarpma, Bölme, Mod     |
| 4    | `+`, `-`                       | Toplama, Çıkarma       |
| 5    | `<`, `>`, `<=`, `>=`           | İlişkisel              |
| 6    | `==`, `!=`                     | Eşitlik                |
| 7    | `=`, `+=`, `-=`, `*=`, `/=`, `%=` | Atama               |

> **Not:** Karmaşık ifadelerde önceliği belirtmek için **parantez** kullanın.

### **Örnek İfade:**
```c
a = 10 * 2 + 1 >= 4 * 4 + 5 == 5 > 5 - 3 * 2;
```
**Adım adım çözüm:**
1. `10*2 = 20` → `4*4 = 16` → `3*2 = 6`  
2. `20+1 = 21` → `16+5 = 21` → `5–6 = -1`  
3. `21 >= 21 → 1`  
4. `5 > -1 → 1`  
5. `1 == 1 → 1`  
**Sonuç:** `a = 1`

---

## **5. Mantıksal Operatörler**
Koşulları birleştirmek için kullanılır:  
- `&&` → VE (AND)  
- `||` → VEYA (OR)  
- `!` → DEĞİL (NOT)  
- `^` → XOR (Ayrıcalıklı OR)

### **Doğruluk Tabloları:**

#### **AND (`&&`) ve OR (`||`)**
| x | y | x && y | x || y |
|---|---|--------|--------|
| 0 | 0 |   0    |   0    |
| 0 | 1 |   0    |   1    |
| 1 | 0 |   0    |   1    |
| 1 | 1 |   1    |   1    |

#### **NOT (`!`)**
| x | !x |
|---|----|
| 0 | 1  |
| 1 | 0  |

#### **XOR (`^`)**
| A | B | A ^ B |
|---|---|-------|
| 0 | 0 |   0   |
| 0 | 1 |   1   |
| 1 | 0 |   1   |
| 1 | 1 |   0   |

### **XOR Örneği:**
```c
int a = 62; // 00111110
int b = 15; // 00001111
int e = a ^ b; // 00110001 = 49
printf("(a^b) = %u", e); // Çıktı: 49
```

### **Mantıksal Operatör Önceliği:**
1. `!` → 2. `&&` → 3. `||`

> **Not:** Şüpheli durumlarda **parantez** kullanın.

#### **Örnek Kod ve Çıktı:**
```c
#include <stdio.h>
int main() {
    int a = 5, b = 5, c = 10, result;
    result = (a == b) && (c > b);   // 1 && 1 → 1
    printf("(a == b) && (c > b) -> %d \n", result);
    result = (a == b) && (c < b);   // 1 && 0 → 0
    printf("(a == b) && (c < b) -> %d \n", result);
    result = (a == b) || (c < b);   // 1 || 0 → 1
    printf("(a == b) || (c < b) -> %d \n", result);
    result = (a != b) || (c < b);   // 0 || 0 → 0
    printf("(a != b) || (c < b) -> %d \n", result);
    result = !(a != b);             // !(0) → 1
    printf("!(a != b) -> %d \n", result);
    result = !(a == b);             // !(1) → 0
    printf("!(a == b) -> %d \n", result);
    return 0;
}
```

---

## **6. Bit Tabanlı Operatörler**

### **6.1 Tümleme Operatörü (`~`)**
Bitleri tersine çevirir (0 → 1, 1 → 0).

```c
unsigned char ch = 63;        // 00111111
unsigned char tumleyen = ~ch; // 11000000 = 192
printf("%d 'nin tumleyeni: %d", ch, tumleyen);
// Çıktı: 63 'nin tumleyeni: 192
```

### **6.2 Kaydırma Operatörleri (`<<`, `>>`)**
- `<<` → Sola kaydır (×2)  
- `>>` → Sağa kaydır (÷2)

```c
int g = 8; // 00001000
int saga1 = g >> 1; // 4 → 00000100
int sola2 = g << 2; // 32 → 00100000
```

**Çıktı örneği:**
```
(8 >> 1) = 4
(8 >> 2) = 2
(8 << 1) = 16
(8 << 2) = 32
```

---

## **7. Şartlı Atama Operatörü (`? :`)**
C dilindeki **tek üçlü operatör**dür.

**Söz dizimi:**  
`koşul ? ifade1 : ifade2;`  
→ Koşul **true** ise `ifade1`, **false** ise `ifade2` döner.

**Örnek:**
```c
int a = 10, b = 20;
int max = (a > b) ? a : b; // max = 20
```

---

## **8. İşaretçi Operatörü (`*`)**
- `*` → Hem **çarpma**, hem de **işaretçi** operatörüdür.  
- İşaretçiler ileride detaylı işlenecektir.

---

## **9. `sizeof` Operatörü**
Bir veri tipinin veya değişkenin **bellekte kapladığı bayt sayısını** verir.

**Özellikler:**
- Sonuç **`unsigned int`** türündedir.
- `printf` ile yazdırırken `%lu` kullanılır.

**Örnek:**
```c
int ornekSayi = 5;
unsigned int kacBayt = sizeof(ornekSayi);
printf("Bellekte kapladigi alan: %lu bayttir", kacBayt);
// Genelde çıktı: 4
```

---

## **ÖDEV**

Aşağıdaki ifadelerin sonuçlarını hesaplayınız ve C programıyla doğrulayınız:

1. `a = 80 / 5 - 3 * 2 < 2 + 3 * 2;`  
2. `b = 15 - 7 * 2 >= 1 == 19 - 9 * 2;`  
3. `a && b = ?`  
4. `a || b = ?`  
5. `!a && b = ?`

> **İpucu:** Operatör önceliklerini ve karşılaştırma mantığını dikkate alın.

---

**Not:** Tüm örnek kodları kendi bilgisayarınızda derleyip çalıştırarak sonuçları gözlemleyiniz. Teorik çözümle pratik sonuç karşılaştırması, öğrenmeyi pekiştirir.

--- 

**Kaynaklar:**  
- Konya Teknik Üniversitesi – Bilgisayar Programlama 1 Ders Notları  
- Kernighan & Ritchie – *The C Programming Language*