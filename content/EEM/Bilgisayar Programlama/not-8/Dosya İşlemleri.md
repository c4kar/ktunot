<iframe src="https://drive.google.com/file/d/1R1ihm6u0w1_v5F5vVUTR4vNH0QTU1fsJ/preview"
		width="100%"
        height="100%"
        allow="autoplay; fullscreen"
        allowfullscreen
        style="border:none; aspect-ratio:16/9;">
</iframe>
---
# **İÇİNDEKİLER**

- [Genel Özet](#genel-özet)
- [Temel Terimler ve Kavramlar](#temel-terimler-ve-kavramlar)
- [Dosya Açma ve Kapama](#dosya-açma-ve-kapama)
- [Dosyaya Yazma İşlemleri](#dosyaya-yazma-i̇şlemleri)
- [Dosyadan Okuma İşlemleri](#dosyadan-okuma-i̇şlemleri)
- [textread Fonksiyonu](#textread-fonksiyonu)
- [dlmwrite ve dlmread Fonksiyonları](#dlmwrite-ve-dlmread-fonksiyonları)
- [Excel Dosyalarıyla Çalışmak](#excel-dosyalarıyla-çalışmak)
- [Temel Formüller ve Hızlı Bilgiler](#temel-formüller-ve-hızlı-bilgiler)
- [Kaynaklar](#kaynaklar)

---

## **Genel Özet**

Bu ders notu, **MATLAB ortamında dosya işlemleri** konusunu kapsamaktadır. Dosya işlemleri, veri girişi/çıkışı (I/O) süreçlerinde hayati öneme sahiptir. MATLAB, çeşitli dosya türlerini (metin, Excel, CSV, resim, ses vb.) okuma ve yazma yeteneğine sahiptir. Temel olarak üç işlem üzerinde durulmuştur:  
1. **Dosya açma/kapama** (`fopen`, `fclose`),  
2. **Dosyaya yazma** (`fprintf`),  
3. **Dosyadan okuma** (`fscanf`, `fgetl`, `textread`, `dlmread`, `xlsread`).  

Bu işlemler sayesinde harici veriler MATLAB’e aktarılabilir, işlenebilir ve dışa aktarılabilir. Özellikle **veri analizi**, **raporlama** ve **otomasyon** projelerinde bu beceriler vazgeçilmezdir.

---

## **Temel Terimler ve Kavramlar**

- **Dosya indeksi**: `fopen` ile dönen tamsayı değer; dosyanın sistemdeki tanımlayıcısıdır. Başarılı açılışta ≥3, hata durumunda -1.
- **Açılış modu**: Dosyanın nasıl açılacağını belirten karakter (`'r'`, `'w'`, `'a'` vb.).
- **EOF (End-of-File)**: Dosya sonunu belirten işaret; `feof` fonksiyonu ile kontrol edilir.
- **Format belirteci**: `%d`, `%f`, `%s` gibi okuma/yazma sırasında veri türünü belirten semboller.
- **Delimiter**: Verileri ayıran karakter (virgül, tab, boşluk vb.).

---

## **Dosya Açma ve Kapama**

### `fopen` komutu
```matlab
f = fopen('dosya_adı', 'açılış_modu');
```
- `f == -1` → hata (dosya bulunamadı, erişim yok vb.)
- `f ≥ 3` → başarıyla açıldı.

### `fclose` komutu
```matlab
s = fclose(f);
```
- `s == 0` → başarı
- `s == -1` → hata

> [!note]  
> Her açılan dosya, iş bittikten sonra mutlaka kapatılmalıdır. Aksi halde sistem kaynakları israf olur.

---

## **Dosyaya Yazma İşlemleri**

### `fprintf` ile yazma
```matlab
fprintf(f, 'format dizgisi', değişkenler);
```

#### Örnek: 1-10 arası sayıların karelerini yazma
```matlab
f = fopen('kareler.txt', 'w');
fprintf(f, '1 den 10 a kadar olan sayilarin kareleri\n');
for j = 1:10
    fprintf(f, '%d %d\n', j, j^2);
end
fclose(f);
```

> [!example]+ Ödev  
> 0° ile 30° arası açıların sinüs değerlerini `sinus.txt` dosyasına yazan program:
> ```matlab
> f = fopen('sinus.txt', 'w');
> fprintf(f, 'Açı (derece)\tSinüs\n');
> for aci = 0:30
>     sin_deger = sin(deg2rad(aci));
>     fprintf(f, '%d\t%.6f\n', aci, sin_deger);
> end
> fclose(f);
> ```

---

## **Dosyadan Okuma İşlemleri**

### Satır satır okuma: `fgetl`
```matlab
f = fopen('dosya.txt', 'r');
while ~feof(f)
    satir = fgetl(f);
    disp(satir);
end
fclose(f);
```

### Formatlı okuma: `fscanf`
```matlab
deger = fscanf(f, '%g', 1);  % bir sayı okur
```

#### Örnek: `sinus.txt` dosyasının ilk 5 satırını okuma
```matlab
f = fopen('sinus.txt', 'r');
for j = 1:5
    aci = fscanf(f, '%g', 1);
    sin_val = fscanf(f, '%g\n', 1);
    fprintf('%g %g\n', aci, sin_val);
end
fclose(f);
```

> [!note]  
> `fscanf`, her okumada imleci ilerletir. Satır sonu (`\n`) dikkatle işlenmelidir.

---

## **`textread` Fonksiyonu**

- Dosyayı **otomatik açar/kapatır**.
- Tüm dosyayı belirtilen formatta okur.
- Çoklu çıkış değişkeni destekler.

#### Örnek:
```matlab
[x, y] = textread('deney.txt', '%d %d');
plot(x, y, 'o-');
```

> [!success]  
> `textread`, küçük veri kümeleri için idealdir. Ancak modern MATLAB sürümlerinde `readtable` veya `importdata` tercih edilir.

---

## **`dlmwrite` ve `dlmread` Fonksiyonları**

### `dlmwrite`: Matrisi sınırlayıcı ile yazma
```matlab
A = [1 10 100; 2 20 200; 3 30 300];
dlmwrite('veri.csv', A, ',');
```

### `dlmread`: Sınırlayıcı ile okuma
```matlab
B = dlmread('veri.csv', ',');
```

#### Başlık varsa: Satır/sütun atlamak
```matlab
VERI = dlmread('dosya.txt', '', 2, 0);  % 2. satırdan (0-tabanlı), 0. sütundan başla
```

---

## **Excel Dosyalarıyla Çalışmak**

### `xlsread` fonksiyonu
```matlab
veri = xlsread('dosya.xlsx', 'Sayfa1');
```

> [!note]  
> `xlsread` artık **eski nesil**dir. Yeni sürümlerde `readmatrix`, `readtable` veya `spreadsheetDatastore` önerilir. Ancak `.xls` dosyaları için hâlâ işe yarar.

#### Örnek: İki sayfadan veri alma
```matlab
sicaklik = xlsread('veriler.xlsx', 'Sayfa1');
basinc = xlsread('veriler.xlsx', 'Sayfa2');
plot(sicaklik, basinc, '-o');
xlabel('Sıcaklık (°C)');
ylabel('Basınç (kPa)');
```

> [!infobox]  
> ![img-0.jpeg](img-0.jpeg|400)  
> Şekilde görüldüğü gibi farklı sayfalardan veri alınarak grafik oluşturulabilir.

---

## **Temel Formüller ve Hızlı Bilgiler**

> [!example]+ Dosya İşlemleri – Hızlı Komutlar

| İşlem | Komut |
|------|-------|
| Mevcut klasör | `pwd` |
| Dosya listesi | `dir` |
| Dosya aç | `f = fopen('dosya.txt', 'w')` |
| Dosya kapat | `fclose(f)` |
| Dosyaya yaz | `fprintf(f, '%d\n', x)` |
| Satır oku | `satir = fgetl(f)` |
| Dosya sonu mu? | `feof(f)` |
| CSV oku/yaz | `dlmread`, `dlmwrite` |
| Excel oku | `xlsread('dosya.xls', 'Sayfa1')` |

> [!CODE]- Örnek: Sinüs Tablosu Oluşturma
```matlab title="sinus_tablosu.m"
f = fopen('sinus.txt', 'w');
fprintf(f, 'Derece\tSinus\n');
for d = 0:30
    s = sin(pi * d / 180);
    fprintf(f, '%d\t%.6f\n', d, s);
end
fclose(f);
disp('sinus.txt oluşturuldu.');
```

---

## **Kaynaklar**

- Konya Teknik Üniversitesi, *Bilgisayar Programlama 2 – Ders Notu 8*, 10/12/2020  
- MathWorks Documentation: [File I/O](https://www.mathworks.com/help/matlab/file-io.html)  
- MATLAB Help: `doc fopen`, `doc fprintf`, `doc xlsread`

> [!caption|center]  
> Bu döküman, ders notunun pedagojik akışına sadık kalınarak hazırlanmıştır. Uygulamalı öğrenme için tüm örnekleri MATLAB ortamında deneyiniz.

--- 

Hazırlayan: Öğrenci / Öğretim Görevlisi  
Tarih: 5 Nisan 2025  
Ders: Bilgisayar Programlama 2 (MATLAB)