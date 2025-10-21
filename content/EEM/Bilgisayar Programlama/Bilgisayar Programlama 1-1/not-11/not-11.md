İşte ders notlarınıza dayanarak hazırlanmış, temizlenmiş ve **öğrenciye yönelik** bir **ders özeti ve örnek uygulama**:

---

# **Bilgisayar Programlama I – Ders Notu 11: String (Sözce / Karakter Dizisi)**  
**Konya Teknik Üniversitesi – Elektrik-Elektronik Mühendisliği Bölümü**  
**Tarih:** 16.05.2024  

---

## **İçindekiler**
- [String Nedir?](#string-nedir)
- [String Tanımlama Yöntemleri](#string-tanımlama-yöntemleri)
- [Giriş/Çıkış Fonksiyonları: `gets()`, `puts()`, `scanf()`](#girişçıkış-fonksiyonları-get-scanfp-puts)
- [String Kütüphane Fonksiyonları](#string-kütüphane-fonksiyonları)
  - `strlen()` – Uzunluk Bulma
  - `strcpy()` – Kopyalama
  - `strcat()` – Birleştirme
  - `strcmp()` – Karşılaştırma
  - `strncpy()`, `strncat()`, `strncmp()` – N Karakterlik İşlemler
- [Yaygın Hatalar](#yaygın-hatalar)
- [Ödev Çözümü: Farklı Karakterleri Sıralı Yazdırma](#ödev-çözümü-farklı-karakterleri-sıralı-yazdırma)

---

## **String Nedir?**

- C dilinde **`string`** diye özel bir veri tipi **yoktur**.
- String'ler, **`char` türünden bir dizi** olarak tanımlanır.
- Her string’in **sonunda `\0` (NULL)** karakteri olmalıdır.
  - Bu karakter, string’in **sonunu** işaretler.
  - ASCII’de sıfır numaralı karakterdir (`'\0'`).

> 🔹 Örnek: `"Hello"` → Hafızada: `'H', 'e', 'l', 'l', 'o', '\0'`

---

## **String Tanımlama Yöntemleri**

1. **Otomatik NULL ekleme (Tavsiye edilen):**  
   ```c
   char selam[6] = "Hello"; // Derleyici '\0' ekler
   ```

2. **Manuel tanımlama (NULL eklemek zorunlu):**  
   ```c
   char selam[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
   ```

> ⚠️ Dizinin boyutu **NULL karakterini de içermelidir**!

---

## **Giriş/Çıkış Fonksiyonları: `gets()`, `scanf()`, `puts()`**

| Fonksiyon | Özellik |
|----------|--------|
| `scanf("%s", dizi);` | Sadece **ilk boşluk öncesini** alır. |
| `gets(dizi);` | **Tüm satırı** alır (boşluk dahil). |
| `puts(dizi);` | String’i yazdırıp **otomatik `\n` ekler**. |

### Örnek Karşılaştırma:

```c
// scanf() örneği
char kelime[20];
scanf("%s", kelime); // "Merhaba Dunya" → Sadece "Merhaba"

// gets() örneği
gets(kelime); // "Merhaba Dunya" → Tamamı alınır
```

> 🔴 **UYARI:** `gets()` fonksiyonu **güvenlik açığı** oluşturabilir. Gerçek projelerde `fgets()` tercih edilir.

---

## **String Kütüphane Fonksiyonları** (`#include <string.h>`)

### ✅ `strlen()` – Uzunluk Hesaplama
```c
int uzunluk = strlen("abc"); // 3 döner ('\0' sayılmaz)
```

### ✅ `strcpy()` – Kopyalama
```c
strcpy(hedef, kaynak); // hedef = kaynak
```

### ✅ `strcat()` – Birleştirme
```c
strcat(dizi1, dizi2); // dizi1'in sonuna dizi2 eklenir
```

### ✅ `strcmp()` – Alfabetik Karşılaştırma
- `strcmp(a, b)`:
  - `0` → eşit
  - `< 0` → `a`, `b`'den önce gelir
  - `> 0` → `a`, `b`'den sonra gelir

### ✅ `strncpy()`, `strncat()`, `strncmp()`
- İlk **N karakter** üzerinde işlem yapar.
- Örnek:
  ```c
  strncpy(dizi1, dizi2, 5); // dizi2'nin ilk 5 karakterini dizi1'e kopyalar
  ```

---

## **Yaygın Hatalar**

❌ **Hatalı Atama:**
```c
char sehir[20];
sehir = "Ankara"; // HATA! Derleme hatası verir.
```

✅ **Doğru Kullanım:**
```c
char sehir[20] = "Ankara";        // Tanımlama sırasında
// veya
strcpy(sehir, "Ankara");          // Sonradan atama için
```

> 🔹 Dizi isimleri **sabit adres işaretçileridir**. Onlara yeni bir adres atayamazsınız.

---

## **Ödev Çözümü: Farklı Karakterleri Sıralı Yazdırma**

### ❓ **Görev:**  
“merhaba dunya” gibi bir string’teki **boşluk dışındaki** tüm **farklı** karakterleri **alfabetik sırayla** yazdır.

### ✅ **Çözüm Kodu:**
```c
#include <stdio.h>
#include <string.h>

void farkli_karakterleri_yazdir(const char *metin) {
    int kullanilan[256] = {0}; // ASCII karakterler için

    // Tüm karakterleri tara
    for (int i = 0; metin[i] != '\0'; i++) {
        if (metin[i] != ' ') {
            kullanilan[(unsigned char)metin[i]] = 1;
        }
    }

    // ASCII sırasına göre yazdır
    int ilk = 1;
    for (int i = 0; i < 256; i++) {
        if (kullanilan[i]) {
            if (!ilk) printf(", ");
            printf("%c", i);
            ilk = 0;
        }
    }
    printf("\n");
}

int main() {
    farkli_karakterleri_yazdir("merhaba dunya");
    return 0;
}
```

### 🖨️ **Çıktı:**
```
a, b, d, e, h, m, n, r, u, y
```

> 🔍 **Nasıl Çalışır?**
- `kullanilan[256]` dizisi, hangi karakterlerin geçtiğini işaretler.
- ASCII değerlerine göre döngüyle yazdırılır → doğal sıralama olur.

---

## **Notlar & İpuçları**

- String işlemleri için **her zaman `<string.h>`** ekleyin.
- `gets()` yerine **`fgets()`** kullanmayı öğrenin (Daha sonra işlenecek).
- String boyutunu **daima yeterli tutun** (NULL karakter için +1 unutmayın!).

---

**Hazırlayan:** [Öğrenci Notlarına Göre Düzenlenmiştir]  
**Konya Teknik Üniversitesi – EEM Bölümü**  
**Son Güncelleme:** 16.05.2024

--- 

İyi çalışmalar! 🎓