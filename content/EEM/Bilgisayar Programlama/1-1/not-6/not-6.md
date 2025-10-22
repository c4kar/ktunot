İşte ders notunuzu daha okunabilir, düzenli ve öğretici bir biçimde yeniden yapılandırılmış hali:

---

# **Bilgisayar Programlama I**  
## **Ders Notu 6 – Döngüler**  

**Konya Teknik Üniversitesi**  
**Elektrik-Elektronik Mühendisliği Bölümü**  
**21.03.2024 – Konya**

---

## **İçindekiler**
- [Döngü Deyimleri](#döngü-deyimleri)
- [while Döngüsü](#while-döngüsü)
- [do...while Döngüsü](#dowhile-döngüsü)
- [for Döngüsü](#for-döngüsü)
- [İç İçe Döngüler](#iç-içe-döngüler)
- [break Deyimi](#break-deyimi)
- [continue Deyimi](#continue-deyimi)
- [Ödev](#ödev)

---

## **Döngü Deyimleri**

Döngüler, belirli bir kod bloğunun **koşul sağlandığı sürece** tekrar tekrar çalışmasını sağlar. Kod tekrarını azaltır, programın okunabilirliğini ve verimliliğini artırır.

### Döngü Türleri:
| Tür | Koşul Kontrol Zamanı | En Az Kaç Kez Çalışır? |
|-----|----------------------|------------------------|
| `while` | Başta | 0 (koşul sağlanmazsa hiç çalışmaz) |
| `do...while` | Sonda | 1 (koşul sağlanmasa bile en az bir kez çalışır) |
| `for` | Başta | 0 |

> ⚠️ **Sonsuz döngü** oluşmaması için döngü şartının bir noktada **yanlış** olması gerekir.

---

## **Döngü Kullanmadan vs. Kullanarak: Örnek Karşılaştırma**

### ❌ Döngüsüz (verimsiz yaklaşım)
```c
#include <stdio.h>
int main() {
    int toplam = 0;
    toplam += 1;
    toplam += 2;
    // ... (3'ten 10'a kadar tekrar eder)
    toplam += 10;
    printf("Toplam: %d\n", toplam);
    return 0;
}
```

### ✅ Döngülü (verimli yaklaşım)
```c
#include <stdio.h>
int main() {
    int toplam = 0, i = 1;
    while (i <= 10) {
        toplam += i;
        i++;
    }
    printf("Toplam: %d\n", toplam);
    return 0;
}
```
> 📌 **Not:** Aynı işlem `for` döngüsüyle de çok daha sade yazılabilir.

---

## **while Döngüsü**

```c
while (koşul) {
    // işlemler
}
```

- Koşul **başta** kontrol edilir.
- Koşul `false` ise döngüye **hiç girilmez**.
- Sayac değişkenine **başlangıç değeri** verilmelidir.
- Döngü içinde **koşulun değişmesi** (örneğin sayaç artırımı) sağlanmalıdır.

### ⚠️ Yaygın Hata:
```c
int k = 1;
while (k < 2) {
    printf("%d\n", k); // Sonsuz döngü! k artırılmıyor.
}
```

### ✅ Örnek: Yıldız Deseni Yazdırma
```c
#include <stdio.h>
int main() {
    int i = 0, j;
    while (i < 5) {
        j = 0;
        while (j < i + 1) {
            printf("* ");
            j++;
        }
        printf("\n");
        i++;
    }
    return 0;
}
```
**Çıktı:**
```
* 
* * 
* * * 
* * * * 
* * * * * 
```

---

## **do...while Döngüsü**

```c
do {
    // işlemler
} while (koşul);
```

- Koşul **sonda** kontrol edilir.
- **En az bir kez** çalışır.
- `while` satırının sonunda **noktalı virgül (`;`)** olmalıdır.

### ✅ Örnek: Kullanıcıdan tekrarlı toplama isteme
```c
#include <stdio.h>
#include <conio.h> // getch() için (Windows)
int main() {
    int a, b;
    char cevap;
    do {
        printf("Bir sayı giriniz: ");
        scanf("%d", &a);
        printf("Bir sayı daha giriniz: ");
        scanf("%d", &b);
        printf("%d + %d = %d\n", a, b, a + b);
        printf("Başka işlem yapmak ister misiniz? (E/H): ");
        cevap = getch();
    } while (cevap != 'h' && cevap != 'H');
    return 0;
}
```

> 💡 **Not:** `getch()` yerine `scanf(" %c", &cevap);` da kullanılabilir (boşluk, önceki satır sonunu yutar).

---

## **for Döngüsü**

```c
for (başlangıç; koşul; artış/azalış) {
    // işlemler
}
```

- En sık kullanılan döngü türüdür.
- Başlangıç, koşul ve artış **tek satırda** tanımlanır.
- Her bölüm isteğe bağlıdır: `for (;;)` → sonsuz döngü.

### ✅ Örnek: İki değişkenli for döngüsü
```c
#include <stdio.h>
int main() {
    int a, b;
    for (a = 4, b = 6; a * b <= 100; a++, b += 2) {
        printf("a = %d, b = %d, a*b = %d\n", a, b, a * b);
    }
    return 0;
}
```

### ✅ Sade for döngüsü
```c
int x;
for (x = 0; x < 5; x += 2)
    printf("%d\n", x); // Çıktı: 0, 2, 4
```

---

## **İç İçe Döngüler**

Bir döngü içinde başka bir döngü kullanılabilir.

### ✅ Örnek: Çarpım Tablosu
```c
#include <stdio.h>
int main() {
    int n, i, j;
    printf("Bir sayı giriniz: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= 10; j++) {
            printf("%d * %d = %d\t", i, j, i * j);
        }
        printf("\n");
    }
    return 0;
}
```

---

## **break Deyimi**

Döngüyü **anında sonlandırır**.

```c
for (int i = 1; i < 7; i++) {
    if (i == 5) break;
    printf("%d\n", i);
}
// Çıktı: 1, 2, 3, 4
```

---

## **continue Deyimi**

Geçerli iterasyonu **atlar**, döngünün başına döner.

```c
for (int i = 1; i < 7; i++) {
    if (i == 5) continue;
    printf("%d\n", i);
}
// Çıktı: 1, 2, 3, 4, 6
```

---

## **Ödev**

> 📘 **"c-dongu-ornek.pdf"** dosyasındaki tüm örnekleri:
> 1. **Önce kendi başınıza** Dev-C++ (veya başka bir C derleyicisi) üzerinde çözün.
> 2. Sonra verilen cevaplarla **karşılaştırın**.
> 3. Hangi çözümün **daha verimli**, **okunabilir** ve **hata ayıklanabilir** olduğunu değerlendirin.

---

> ✅ **İpucu:** Her döngü türünü öğrenirken, **"bu problemi başka bir döngüyle nasıl çözerdim?"** diye düşünmek, anlamanızı derinleştirir.

--- 

**Hazırlayan:** [Öğretim Üyesi / Ders Sorumlusu]  
**Konya Teknik Üniversitesi – EEM Bölümü**  
**Bilgisayar Programlama I – Bahar 2024**