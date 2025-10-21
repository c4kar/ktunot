İşte verdiğiniz ders notlarını temel alarak hazırlanan, **Türkçe dilinde**, **okunaklı ve düzenli biçimde** yazılmış bir **çalışma dökümanı**:

---

# **BİLGİSAYAR PROGRAMLAMA I**  
## **Ders Notu 7: Diziler ve Matrisler**  
**Konya Teknik Üniversitesi – Elektrik-Elektronik Mühendisliği Bölümü**  
**Tarih: 18.04.2024**

---

## **İçindekiler**

1. [Diziler (Arrays) Nedir?](#diziler-arrays-nedir)
2. [Dizilerin Tanımı ve Özellikleri](#dizilerin-tanımı-ve-özellikleri)
3. [Dizi Tanımlama ve Kullanım Kuralları](#dizi-tanımlama-ve-kullanım-kuralları)
4. [Dizilere Başlangıç Değeri Atama](#dizilere-başlangıç-değeri-atama)
5. [Dizi Elemanlarını Kullanıcıdan Okuma](#dizi-elemanlarını-kullanıcıdan-okuma)
6. [Dizilerde Dikkat Edilmesi Gerekenler](#dizilerde-dikkat-edilmesi-gerekenler)
7. [Dizilerin Dezavantajları](#dizilerin-dezavantajları)
8. [Çok Boyutlu Diziler (Matrisler)](#çok-boyutlu-diziler-matrisler)
9. [Matris İşlemleri: Toplama ve Çarpma](#matris-işlemleri-toplama-ve-çarpma)
10. [Ödev](#ödev)
11. [Kaynaklar](#kaynaklar)

---

## **Diziler (Arrays) Nedir?**

Programlama dilinde verileri depolamak için değişkenler kullanılır. Ancak bazı durumlarda **çok sayıda aynı türden veriyi** depolamak gerekir. Örneğin, bir elektrik sinyalinin voltajını 5 saniyede bir 500 saniye boyunca kaydetmek isterseniz **100 adet `double` değişkeni** tanımlamanız gerekir. Bu durumda **diziler (arrays)** devreye girer.

Diziler, **aynı tipteki verileri tek bir isim altında**, **indislerle erişilebilir şekilde** saklamamıza olanak tanır.

> Örnek:  
> $$ a = \{a[0], a[1], a[2], \ldots, a[99]\} $$

---

## **Dizilerin Tanımı ve Özellikleri**

- Diziler, **aynı veri türünden** elemanlardan oluşur.
- Bellekte **ardışık (contiguous)** olarak saklanır.
- **Indisler (indices)** ile erişilir; ilk indis **0’dır**.
- `int a[] = {1123, 1125, 1234, 1256, 1321};`

### **Boyutlara Göre Dizi Türleri**

| Boyut | Adı         | Örnek Gösterim       |
|-------|-------------|----------------------|
| 1     | Vektör      | `a[0], a[1], ..., a[n-1]` |
| 2     | Matris      | `a[0][0], a[0][1], ..., a[m-1][n-1]` |
| 3+    | Çok boyutlu | `a[i][j][k]...`       |

---

## **Dizi Tanımlama ve Kullanım Kuralları**

### **Genel Tanımlama Şekli**
```c
veri_türü dizi_adı[eleman_sayısı];
```

### **Örnek:**
```c
double ogrenci_notu[8]; // 8 adet double değer saklar
```

> **Not:** Eğer diziler kullanılmazsa, her bir öğrenci notu için ayrı ayrı değişken tanımlamak gerekirdi:
> ```c
> double ogrenci_notu1, ogrenci_notu2, ..., ogrenci_notu8;
> ```

### **Dizi Elemanlarına Erişim**
- 7. eleman: `ogrenci_notu[6]`
- 8. eleman: `ogrenci_notu[7]`

### **Kullanım Örneği**
```c
printf("Sonuc: %f", ogrenci_notu[0] + ogrenci_notu[1]);
x = ogrenci_notu[6] / 2;
```

---

## **Dizilere Başlangıç Değeri Atama**

### **1. Boyut Belirtilmeden**
```c
int a[] = {100, 200, 300, 400}; // 4 elemanlı dizi
float v[] = {9.8, 11.0, 7.5, 0.0, 12.5}; // 5 elemanlı dizi
```

### **2. Kısmi Başlangıç Değeri**
```c
int sayilar[20] = {1, 2, 3}; 
// İlk 3 eleman 1,2,3; geri kalanlar 0 olur
```

### **3. Tüm Elemanlara 0 Atama**
```c
int sayilar[20] = {}; // Tüm elemanlar 0 olur
```

> **Not:** Sayısal tiplerde eksik elemanlara `0`, karakter dizilerinde `NULL` atanır.

---

## **Dizilerle İşlem Yapma: Döngülerle Kullanım**

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int ornek_dizi[5] = {1, 2, 3, 4, 5};
    int i;

    // Tüm elemanları 3 ile çarp
    for (i = 0; i < 5; i++) {
        ornek_dizi[i] *= 3;
    }

    // Sonuçları yazdır
    for (i = 0; i < 5; i++) {
        printf("Dizinin %d. elemani: %d'dir.\n", i+1, ornek_dizi[i]);
    }

    return 0;
}
```

**Çıktı:**
```
Dizinin 1. elemani: 3'dir.
Dizinin 2. elemani: 6'dir.
Dizinin 3. elemani: 9'dir.
Dizinin 4. elemani: 12'dir.
Dizinin 5. elemani: 15'dir.
```

---

## **Dizi Elemanlarını Kullanıcıdan Okuma**

**Problem:** Kullanıcıdan maksimum 10 sayı al. 0 girilene kadar devam et. 0 hariç tüm sayıları yazdır.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int ornek_dizi[10];
    int i, j;

    for (i = 0; i < 10; i++) {
        printf("%d. sayiyi giriniz: ", i + 1);
        scanf("%d", &ornek_dizi[i]);
        if (ornek_dizi[i] == 0) {
            j = i;
            break;
        }
    }

    for (i = 0; i < j; i++) {
        printf("%d\n", ornek_dizi[i]);
    }

    return 0;
}
```

---

## **Dizilerde Dikkat Edilmesi Gerekenler**

- Dizi indisleri **0’dan başlar**, **boyut-1’e kadar** gider.
- **Dizi sınırları dışına çıkılmamalıdır.** Bu durum **tanımsız davranışa (undefined behavior)** yol açar.
- Örneğin `int a[5];` için `a[5]` ya da `a[-1]` geçersizdir.

---

## **Dizilerin Dezavantajları**

1. **Boyut değiştirilemez:**  
   Dizi boyutu tanımlandığında sabit kalır. Çalışma zamanında genişletilemez.

2. **Tek veri türü:**  
   Tüm elemanlar aynı tipte olmalıdır. Farklı türleri bir arada tutmak için **struct** veya dinamik veri yapıları gerekir.

> **Not:** Python, Java gibi dillerde bu sınır yoktur; ancak C dilinde bu kısıtlamalar vardır.

---

## **Çok Boyutlu Diziler (Matrisler)**

### **Tanımlama**
```c
int y[5][10]; // 5 satır, 10 sütun → 50 eleman
```

### **Genel Formlar**
| Tür               | Tanım                          | Örnek               |
|-------------------|--------------------------------|---------------------|
| Tek boyutlu       | `tip ad[boyut]`                | `int v[10];`        |
| İki boyutlu       | `tip ad[satır][sütun]`         | `float m[3][4];`    |
| Çok boyutlu       | `tip ad[b1][b2]...[bn]`        | `double x[2][3][4];`|

### **Başlangıç Değeri Atama**
```c
int x[3][4] = {
    {11, 34, 42, 60},  // 1. satır
    {72, 99, 10, 50},  // 2. satır
    {80, 66, 21, 38}   // 3. satır
};
```

> Alternatif (tek satırda):  
> `int x[3][4] = {11,34,42,60,72,99,10,50,80,66,21,38};`

---

## **Matris İşlemleri: Toplama ve Çarpma**

### **1. Matris Toplama**
$$
\begin{bmatrix}
1 & 3 \\
1 & 2
\end{bmatrix}
+
\begin{bmatrix}
7 & 5 \\
2 & 1
\end{bmatrix}
=
\begin{bmatrix}
8 & 8 \\
3 & 3
\end{bmatrix}
$$

```c
for (i = 0; i < 2; i++) {
    for (j = 0; j < 2; j++) {
        C[i][j] = A[i][j] + B[i][j];
        printf("%d ", C[i][j]);
    }
    printf("\n");
}
```

### **2. Matris Çarpma**
$$
\begin{bmatrix}
1 & 2 \\
3 & 1
\end{bmatrix}
\cdot
\begin{bmatrix}
4 & 3 \\
1 & 2
\end{bmatrix}
=
\begin{bmatrix}
6 & 7 \\
13 & 11
\end{bmatrix}
$$

```c
for (i = 0; i < 2; i++) {
    for (j = 0; j < 2; j++) {
        C[i][j] = 0;
        for (k = 0; k < 2; k++) {
            C[i][j] += A[i][k] * B[k][j];
        }
        printf("%d ", C[i][j]);
    }
    printf("\n");
}
```

> **Önemli:** Matris çarpımında iç boyutlar eşleşmelidir: A(m×n) × B(n×p) → C(m×p)

---

## **Ödev**

> **Bir dersi alan 10 öğrencinin vize ve final notlarını dizilerde saklayabilecek bir program tasarlayın.**
>
> - Not girişini kullanıcıdan isteyin.
> - Her öğrencinin **yıl sonu notunu** hesaplayın:  
>   `yil_sonu = vize * 0.4 + final * 0.6`
> - **Harf notunu** belirleyin (örneğin: 90-100 → AA, 80-89 → BA, vs.).
> - **Sınıf ortalamasını** hesaplayıp yazdırın.
> - Tüm sonuçları ekrana yazdırın.

---

## **Kaynaklar**

- Programlama Sanatı, Algoritmalar, C Dili Uyarlaması – Dr. Rifat ÇÖLKESEN, Papatya Yayıncılık  
- Her Yönüyle C – Tevfik KIZILÖREN, Kodlab  
- C Programlama Dili – Dr. Rifat ÇÖLKESEN, Papatya Yayıncılık  
- Celal Bayar Üniversitesi, Hasan Ferdi Turgutlu Teknoloji Fakültesi, YZM1105 Ders Notu

---

> 📌 **Not:** Bu döküman, ders notlarını temel alarak **özetlenmiş, yapılandırılmış ve örneklerle zenginleştirilmiştir**. Çalışmalarınızda başarılar!