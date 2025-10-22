# Bilgisayar Programlama 1  
## Ders Notu 10 - İşaretçiler  
**Konya Teknik Üniversitesi – Elektrik-Elektronik Mühendisliği Bölümü**  
**Tarih:** 6 Mayıs 2024  
**Konum:** Konya  

---

## İçindekiler

- [Genel Özet](#genel-özet)
- [Temel Terimler ve Kavramlar](#temel-terimler-ve-kavramlar)
- [İşaretçi Tanımı ve Kullanımı](#işaretçi-tanımı-ve-kullanımı)
- [İşaretçi Bildirimi ve Atama](#işaretçi-bildirimi-ve-atama)
- [İşaretçi Aritmetiği](#işaretçi-aritmetiği)
- [İşaretçiler ve Diziler](#işaretçiler-ve-diziler)
- [Dinamik Bellek Yönetimi](#dinamik-bellek-yönetimi)
- [İşaretçi Tipi Fonksiyonlar](#işaretçi-tipi-fonksiyonlar)
- [Örnek Uygulamalar](#örnek-uygulamalar)
- [Avantajlar ve Dezavantajlar](#avantajlar-ve-dezavantajlar)
- [Ödev](#ödev)
- [Kaynaklar](#kaynaklar)

---

## Genel Özet

Bu ders notu, **C programlama dilinde işaretçilerin (pointers)** temel kavramlarını, kullanım amaçlarını ve uygulamalarını kapsamaktadır. İşaretçiler, bellekteki **adreslere erişim sağlamak** ve verileri **dolaylı yoldan işleme** imkânı sunar. Bu yapılar, özellikle **diziler, dinamik bellek yönetimi, fonksiyonlar arası veri iletimi** ve **performans odaklı uygulamalar** açısından büyük önem taşır.

---

## Temel Terimler ve Kavramlar

- **Direkt Erişim:** Değişkenin adına doğrudan erişerek değerini okuma/yazma.
- **Dolaylı Erişim:** İşaretçi aracılığıyla bir değişkenin bellek adresine erişim sağlama.
- **İşaretçi (Pointer):** Bellekteki bir adresi saklayan değişken.
- **\& Operatörü:** Bir değişkenin **adresini** alır.
- **\* Operatörü:** Bir işaretçinin **işaret ettiği adresteki değere** erişimi sağlar.
- **NULL:** Geçersiz veya boş bir işaretçi değeridir.
- **Dinamik Bellek:** Program çalışma zamanında `malloc`, `calloc`, `realloc`, `free` gibi fonksiyonlarla yönetilen bellek alanı.

---

## İşaretçi Tanımı ve Kullanımı

> C dilinde her değişken bellekte bir adrese sahiptir. İşaretçiler bu adresleri saklamak için kullanılır.

### Bellek Modeli:

| Adres | Değer |
|-------|-------|
| 1005  | 453   |
| 1006  | 287   |
| ...   | ...   |

Bu örnekte `okul_no = 453` değişkeni, **1005** adresinde saklanmaktadır. İşaretçi, bu 1005 adresini tutar.

---

## İşaretçi Bildirimi ve Atama

### Tanımlama:
```c
int *p;      // int tipinde bir işaretçi
float *q;    // float tipinde bir işaretçi
char *r;     // char tipinde bir işaretçi
```

### Atama:
```c
int a = 10;
int *p = &a;  // p, a'nın adresini tutar
```

### Veriye Erişim:
```c
printf("%d", *p);  // p'nin işaret ettiği değer: 10
```

> ⚠️ **Yaygın Hata:**  
> `p = a;` → **Yanlış** (a bir değer, p bir adres bekler)  
> `*p = a;` → **Doğru** (a'nın değeri p'nin işaret ettiği yere yazılır)

---

## İşaretçi Aritmetiği

İşaretçiler üzerinde aritmetik işlemler, işaret edilen veri tipinin boyutuna göre yapılır:

| İşaretçi Tipi | ++ İşlemi Sonucu |
|---------------|------------------|
| `int *p`      | p += 4 byte      |
| `char *p`     | p += 1 byte      |
| `double *p`   | p += 8 byte      |

### Örnek:
```c
int arr[5] = {10, 20, 30, 40, 50};
int *p = arr;  // p = &arr[0]

printf("%d\n", *(p + 2));  // 30
p++;                       
printf("%d\n", *p);        // 20
```

> 📌 **Not:**  
> `*p++` → Önce `*p` kullanılır, sonra `p` artar.  
> `(*p)++` → Önce `p`'nin işaret ettiği değer artırılır.

---

## İşaretçiler ve Diziler

Dizilerin ismi, ilk elemanın adresidir. Bu nedenle:

```c
int dizi[10] = {1,2,3,...};
int *p1 = &dizi[0];
int *p2 = dizi;  // p1 ve p2 aynı adresi gösterir
```

### Dizi Elemanlarına Erişim:
| Yöntem        | Açıklama                |
|---------------|-------------------------|
| `dizi[i]`     | Direkt erişim           |
| `*(p + i)`    | İşaretçi ile erişim     |

Bu yapılar **performans artışı** sağlar ve **fonksiyonlarda dizi aktarımı** kolaylaştırır.

---

## Dinamik Bellek Yönetimi

### Standart Fonksiyonlar:

| Fonksiyon | Açıklama |
|----------|----------|
| `malloc(size)` | Belirtilen byte kadar bellek ayırır |
| `calloc(n, size)` | n adet eleman için sıfırlanmış bellek ayırır |
| `realloc(ptr, new_size)` | Mevcut alanı yeniden boyutlandırır |
| `free(ptr)` | Ayrılan belleği serbest bırakır |

### Örnek: 20 tamsayı için dinamik dizi
```c
int *p = (int*) malloc(20 * sizeof(int));
// ... işlemler ...
free(p);  // Belleği serbest bırak
```

---

## İşaretçi Tipi Fonksiyonlar

Fonksiyonlar **adres döndürebilir**:

```c
int* EnKucugunAdresi(int A[], int n) {
    int *p = &A[0];
    for (int i = 1; i < n; i++)
        if (A[i] < *p) p = &A[i];
    return p;
}
```

### Kullanım:
```c
int dizi[] = {11, 15, -2, 7};
int *q = EnKucugunAdresi(dizi, 4);
printf("En küçük: %d\n", *q);  // -2
```

---

## Örnek Uygulamalar

### 1. Ortalama Hesaplama (İşaretçi ile)
```c
double OrtBul(int *p, int sayi) {
    double toplam = 0;
    for (int i = 0; i < sayi; i++)
        toplam += *(p + i);
    return toplam / sayi;
}
```

### 2. Rastgele Sayılardan Min/Max Bulma
```c
int *p = (int*) malloc(20 * sizeof(int));
// ... doldurma, min/max bulma ...
free(p);
```

---

## Avantajlar ve Dezavantajlar

### ✅ Avantajlar:
- **Bellek verimliliği**
- **Daha hızlı programlar**
- **Fonksiyonlardan çok değer döndürme**
- **Esnek dizi boyutları**

### ❌ Dezavantajlar:
- **Öğrenmesi zor**
- **Hata yapma riski yüksek**
- **Segmentasyon hatası (segmentation fault)** riski
- **Sistem çökmesine yol açabilir**

---

## Ödev

> **Görev:** Kullanıcıdan alınan sayının **%2,5’unu** hesaplayan bir program yazın.  
> - İşaretçiler kullanılarak yapılmalı.  
> - Program, kullanıcı "çıkış" yapana kadar çalışmaya devam etmeli.  
> - Program 3.7 (PDF'de verilen kare hesaplama örneği) temel alınmalı.

### Örnek Akış:
```
Sayı girin: 100
%2,5 = 2.5
Tekrar hesaplamak ister misiniz? (E/H): E
Sayı girin: 200
%2,5 = 5.0
...
```

---

## Kaynaklar

- Her Yönüyle C, Tevfik KIZILÖREN, Kodlab  
- İşte C Programlama Dili, Dr. Rifat ÇÖLKESEN, Papatya Yayıncılık  
- [http://www.baskent.edu.tr/~tkaracay/etudio/ders/prg/c/pointers.pdf](http://www.baskent.edu.tr/~tkaracay/etudio/ders/prg/c/pointers.pdf)  
- [http://www.alikeskin.org/algoritma/Pointer.pdf](http://www.alikeskin.org/algoritma/Pointer.pdf)  

--- 

**Not:** Bu ders notu, işaretçilerin temel kullanımını ve C dilinde bellek yönetimi prensiplerini öğretmeyi amaçlamaktadır. Uygulamalı kod örnekleriyle desteklenmiştir.