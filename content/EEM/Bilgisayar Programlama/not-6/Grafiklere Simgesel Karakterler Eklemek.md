<iframe src="https://drive.google.com/file/d/106JhfRGHWgHVQTi9EnR_Cd-locjTeYbK/preview"
		width="100%"
        height="100%"
        allow="autoplay; fullscreen"
        allowfullscreen
        style="border:none; aspect-ratio:16/9;">
</iframe>

---

# İçindekiler  
- [Grafiklere Simges  el Karakterler Eklemek](#grafiklere-simges--el-karakterler-eklemek)
- [Temel Grafik İşlemleri](#temel-grafik-i̇şlemleri)
  - [Grafikleri Kaydetmek](#grafikleri-kaydetmek)
    - [1. GUI Üzerinden](#1-gui-üzerinden)
    - [2. Komut Satırından](#2-komut-satırından)
    - [3. Kopyalama-Yapıştırma](#3-kopyalama-yapıştırma)
- [Grafikleri Yazıcıda Yazdırmak](#grafikleri-yazıcıda-yazdırmak)
- [Özel Grafik Çeşitleri](#özel-grafik-çeşitleri)
  - [Polar Grafikler](#polar-grafikler)
  - [Pasta Dilimi Grafikler](#pasta-dilimi-grafikler)
    - [2D:](#2d)
    - [3D:](#3d)
  - [Çubuk Grafikler](#çubuk-grafikler)
  - [Histogram Grafikler](#histogram-grafikler)
- [3 Boyutlu Grafikler](#3-boyutlu-grafikler)
  - [3D Çizgi Grafikler](#3d-çizgi-grafikler)
  - [3D Ağ Grafikler](#3d-ağ-grafikler)
  - [3D Yüzey Grafikler](#3d-yüzey-grafikler)
  - [3 Boyutlu Grafiklerin Doğrudan Çizdirilmesi](#3-boyutlu-grafiklerin-doğrudan-çizdirilmesi)
  - [3 Boyutlu Özel Grafikler](#3-boyutlu-özel-grafikler)
  - [3 Boyutlu Grafiklerin Döndürülmesi](#3-boyutlu-grafiklerin-döndürülmesi)
- [Kaynaklar](#kaynaklar)

---

# Grafiklere Simgesel Karakterler Eklemek

MATLAB grafiklerinde başlık, eksen etiketleri, lejant veya metin kutularında **matematiksel semboller** ve **Yunanca harfler** kullanmak mümkündür. Bunun için `\` (ters eğik çizgi) ve sembol adı kullanılır.

> [!example]+ Örnek Kullanım:
> ```matlab
> title('Sin(\omega t)')
> xlabel('\alpha (radyan)')
> ylabel('\mu (mikro)')
> ```

Popüler semboller şunlardır:

| Karakter Dizisi | Sembol     | Karakter Dizisi | Sembol     |
|------------------|------------|------------------|------------|
| `\alpha`         | $\alpha$   | `\omega`         | $\omega$   |
| `\beta`          | $\beta$    | `\Omega`         | $\Omega$   |
| `\pi`            | $\pi$      | `\mu`            | $\mu$      |
| `\Phi`           | $\Phi$     | `\infty`         | $\infty$   |
| `\leq`           | $\leq$     | `\sim`           | $\sim$     |

> [!note]  
> Tüm semboller ve kullanım detayları için:  
> [MATLAB Dokümantasyonu – Greek Letters and Special Characters](https://www.mathworks.com/help/matlab/creating_plots/greek-letters-and-special-characters-in-graph-text.html)

---

# Temel Grafik İşlemleri

## Grafikleri Kaydetmek

MATLAB’da bir grafiği şu yollarla kaydedebilirsiniz:

### 1. GUI Üzerinden
- **File → Save**: `.fig` formatında (düzenlenebilir MATLAB figürü).
- **File → Save As**: `.jpg`, `.png`, `.bmp`, `.pdf` vb. formatlara aktarabilirsiniz.

### 2. Komut Satırından
```matlab
saveas(gcf, 'grafikAdi')          % Varsayılan .fig
saveas(gcf, 'grafikAdi', 'jpg')   % .jpg olarak kaydeder
```

> [!example]+ Örnek-1: `sin(ωt)` Grafiğini Kaydetme
> ```matlab
> t = 0:0.01:2*pi;
> y = sin(t);
> plot(t, y);
> title('Sin(\omega t)');
> saveas(gcf, 'sinus_grafik', 'jpg');
> ```

### 3. Kopyalama-Yapıştırma
- **Edit → Copy Figure** ile panoya kopyalayıp Word, PowerPoint gibi ortamlarda kullanabilirsiniz.

---

# Grafikleri Yazıcıda Yazdırmak

- **GUI**: Grafik penceresinde **File → Print**.
- **Komut satırı**:
  ```matlab
  print        % Varsayılan yazıcıya gönderir
  print -dpdf grafik.pdf  % PDF olarak kaydeder
  ```

---

# Özel Grafik Çeşitleri

## Polar Grafikler

Kutupsal koordinat sisteminde veri görselleştirimi için kullanılır.

> [!infobox]
> **Komut**: `polar(theta, rho)`
> - `theta`: Radyan cinsinden açılar
> - `rho`: Uzaklık (yarıçap)

> [!example]+ Örnek-2: `cos(t)`'nin Polar Grafiği
> ```matlab
> t = 0:0.01:2*pi;
> y = cos(t);
> polar(t, y);
> title('Cos(\omega t)');
> ```

![[img-0.jpeg|400]]

---

## Pasta Dilimi Grafikler

Bir bütünü oluşturan parçaların oranlarını göstermek için idealdir.

### 2D:
```matlab
pie(veri, etiketler)
```
### 3D:
```matlab
pie3(veri, etiketler)
```

> [!example]+ Örnek-3: Harf Notu Dağılımı
> ```matlab
> notlar = [5, 10, 22, 33, 10];
> etiketler = {'AA', 'BB', 'CC', 'DD', 'FF'};
> pie(notlar, etiketler);
> title('Harf Notu Dağılımı');
> ```

---

## Çubuk Grafikler

Kategorik verileri karşılaştırmak için kullanılır.

- Dikey: `bar(x, y)`
- Yatay: `barh(x, y)`
- 3D: `bar3(x, y)`

> [!example]+ Örnek-4: Rüzgâr Enerjisi Üretimi (2010–2017)
> ```matlab
> yil = 2010:2017;
> enerji = [2916, 4724, 5861, 7558, 8367, 11652, 15370, 17716];
> bar(yil, enerji);
> xlabel('Yıl'); ylabel('Enerji (GWh)');
> title('Yıllara Göre Rüzgâr Enerjisi Üretimi');
> ```

![[img-1.jpeg|350]]  
![[img-2.jpeg|350]]

---

## Histogram Grafikler

Veri dağılımını frekans bazında gösterir.

- `hist(x, n)`: Eski fonksiyon, sadece vektörlerde çalışır.
- `histogram(x, n)`: **Tercih edilen**, vektör ve matris destekler.

> [!example]+ Örnek-5: Basit Histogram
> ```matlab
> x = [5 3 4 3 5 4 4 7 4 7 5 7 6 7 6 9 9];
> histogram(x);
> ```

> [!example]+ Örnek-6: Rastgele Sayı Histogramı
> ```matlab
> x = 200 * rand(10, 1);  % 0–200 arası 10 sayı
> histogram(x, 2);        % 2 gruba böl
> ```

> [!example]+ Örnek-7: Gri Resim Histogramı
> ```matlab
> r = imread('football.jpg');
> w = rgb2gray(r);
> histogram(w(:));  % w(:) tüm pikselleri vektöre çevirir
> ```

> [!infobox]  
> Gri seviye resimlerde piksel değerleri 0–255 arasındadır. Histogram, hangi tonların ne sıklıkta kullanıldığını gösterir.

![[img-3.jpeg|400]]

---

# 3 Boyutlu Grafikler

MATLAB, 3D veri görselleştirimi için zengin araçlar sunar:

| Grafik Türü        | Komutlar                              |
|--------------------|----------------------------------------|
| Çizgi              | `plot3`                                |
| Ağ (Wireframe)     | `mesh`, `meshc`, `meshz`, `waterfall` |
| Yüzey              | `surf`, `surfc`, `surfl`              |
| Kontur             | `contour`, `contour3`, `contourf`      |
| Hacim              | `slice`, `isosurface`                 |
| Özel Şekiller      | `sphere`, `cylinder`, `patch`         |

---

## 3D Çizgi Grafikler

> [!example]+ Örnek-9: Spiral Çizimi
> ```matlab
> t = 0:0.01:10*pi;
> x = sin(t);
> y = cos(t);
> plot3(x, y, t);
> xlabel('x(t)'); ylabel('y(t)'); zlabel('t (sn)');
> grid on;
> ```

Bu, zamanla dönen bir spiral oluşturur.

---

## 3D Ağ Grafikler

İlk önce ızgara oluşturulur: `meshgrid`.

> [!example]+ Örnek-10: 3D Parabol (`z = x² + y²`)
> ```matlab
> x_nok = -10:1:10;
> y_nok = -10:1:10;
> [X, Y] = meshgrid(x_nok, y_nok);
> Z = X.^2 + Y.^2;
> mesh(X, Y, Z);
> title('3D Parabol - Ağ Grafik');
> ```

---

## 3D Yüzey Grafikler

Ağ grafiklerinin içi renkli dolgulu halidir.

> [!example]+ Örnek-11: Aynı Parabol, `surf` ile
> ```matlab
> surf(X, Y, Z);
> title('3D Parabol - Yüzey Grafik');
> shading interp;  % Renk geçişlerini yumuşatır
> ```

---

## 3 Boyutlu Grafiklerin Doğrudan Çizdirilmesi

Fonksiyon ifadeleri doğrudan çizilebilir:

- `ezplot3('x(t)', 'y(t)', 'z(t)', [tmin, tmax])`
- `ezsurf('f(x,y)', [xmin xmax], [ymin ymax])`

> [!example]+ Örnek-12: Spiral (Doğrudan)
> ```matlab
> ezplot3('sin(t)', 'cos(t)', 't', [0, 10*pi]);
> ```

> [!example]+ Örnek-13: Küre Üst Yarısı
> ```matlab
> ezsurf('sqrt(9 - x^2 - y^2)', [-4 4], [-4 4]);
> axis equal;
> ```

![[img-4.jpeg|400]]

---

## 3 Boyutlu Özel Grafikler

Önceden tanımlanmış geometrik şekiller:

> [!example]+ Örnek-14: Kaydırılmış Birim Küre
> ```matlab
> [x, y, z] = sphere(30);  % 30 çözünürlük
> surf(x + 2, y - 1, z + 1);  % Merkez: (2, -1, 1)
> axis equal;
> ```

Benzer şekilde:
- `cylinder`: Silindir veya koni
- `patch`: Çokgen yüzeyler

---

## 3 Boyutlu Grafiklerin Döndürülmesi

`view(AZ, EL)` komutu ile kamera açısını ayarlayabilirsiniz.

- **AZ (Azimuth)**: Yatay dönüş (saat yönü +)
- **EL (Elevation)**: Dikey yükseklik

> [!example]+ Örnek-15: Üstten Görünüm
> ```matlab
> ezsurf('sqrt(9 - x^2 - y^2)');
> view(0, 90);  % Tam üstten bakış
> ```

Diğer yaygın açılar:
- `view(0, 0)`: Yandan (x ekseni yönünden)
- `view(90, 0)`: Önden (y ekseni yönünden)
- `view(3D)`: Varsayılan 3D açısı

---

# Kaynaklar

- MATLAB ve Programlama – Dr. Aslan İNAN  
- Sayısal Analiz Ders Notları – Doç. Dr. Cüneyt Bayılmış, Sakarya Üniversitesi  
- [MATLAB Central](http://www.mathworks.com/matlabcentral/)  
- [File Exchange](http://www.mathworks.com/matlabcentral/fileexchange/)
