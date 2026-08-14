# Product Requirements Document

## PT Samudra Biru Indonesia — Company Profile Website

> **Tagline:** _Perdagangan Terpercaya. Kemitraan Berkelanjutan._

---

## 1. Ringkasan Proyek

| Aspek         | Detail                                                                                                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Klien**     | PT Samudra Biru Indonesia                                                                                                                                                            |
| **Jenis**     | Company Profile Website — 5 halaman                                                                                                                                                  |
| **Bahasa**    | Bahasa Indonesia (seluruh konten)                                                                                                                                                    |
| **Halaman**   | Beranda · Tentang Kami · Layanan · Tim · Hubungi Kami                                                                                                                                |
| **Framework** | React 18 + Vite                                                                                                                                                                      |
| **Styling**   | Vanilla CSS + Custom Properties (OKLCH)                                                                                                                                              |
| **Routing**   | React Router v6 (SPA)                                                                                                                                                                |
| **Logo**      | Tersedia — logo bulat dengan motif layar perahu, tetesan air, ombak emas, dan burung. Warna utama: biru laut & emas. Tagline pada logo: _SEAFOOD \| SPICES \| BIRD'S NEST \| EXPORT_ |

---

## 2. Arah Desain

### 2.1 Analisis Referensi

Desain mengacu pada referensi website _The Sea Turtle Observatory_ — sebuah situs konservasi laut dengan estetika premium, diadaptasi untuk konteks perusahaan perdagangan B2B:

| Elemen Referensi                              | Adaptasi Samudra Biru                                                  |
| --------------------------------------------- | ---------------------------------------------------------------------- |
| Bodi navy gelap sebagai permukaan dominan     | Merek secara harfiah berarti "Samudra Biru" — navy _adalah_ brand      |
| Fotografi bawah laut full-bleed pada hero     | Fotografi budidaya, armada perikanan, logistik cold-chain              |
| Blok konten putih/krem bergantian dengan navy | Struktur ritmis yang sama — navy untuk narasi, putih untuk detail/data |
| UI chrome minimal, tanpa border dekoratif     | Kesan profesional B2B — biarkan fotografi dan konten berbicara         |
| Ikon teal monoline untuk nilai-nilai          | Diadaptasi untuk nilai perusahaan (Integritas, Kualitas, dll.)         |
| CTA sederhana (gelap/outline)                 | Tombol "Hubungi Kami" / "Lihat Layanan" dalam treatment yang sama      |
| Grid produk dengan swatch                     | Kartu katalog komoditas dengan tag asal/spesifikasi                    |

### 2.2 Scene Sentence

> Seorang manajer pengadaan senior di jaringan hotel Jakarta membuka situs ini pada monitor desktop pukul 14.00 di kantor bercahaya neon. Ia perlu mengevaluasi PT Samudra Biru Indonesia sebagai pemasok seafood dan komoditas — memeriksa kredensial, jangkauan produk, dan cara meminta penawaran. Situs harus terasa _institusional dan terpercaya_, bukan mencolok. Warna samudra dalam menandakan domain kelautan; bagian putih memberi istirahat mata dan membuat data mudah dipindai. Kesan: "Orang-orang ini adalah operator serius."

Ini memaksa struktur **gelap-di-atas-terang**: navy pada hero dan section brand, putih bersih untuk area padat data. Bukan full dark-mode — pergantiannya ADALAH desainnya.

### 2.3 Strategi Warna: Committed

Warna brand (deep oceanic navy) menempati 50–60% area permukaan. Section putih/off-white memecah ritme. Satu aksen hangat (amber/emas) menandakan premium trade — mengambil langsung dari warna emas pada logo perusahaan.

### 2.4 Komitmen Anti-Pattern

Sesuai panduan Impeccable, desain ini **tidak** menggunakan:

- ❌ Glassmorphism / blur card dekoratif
- ❌ Gradient text (`background-clip: text`)
- ❌ Side-stripe borders pada kartu
- ❌ Template hero-metric (angka besar + label kecil + gradien)
- ❌ Grid kartu identik yang diulang tanpa akhir
- ❌ Eyebrow uppercase bertrek di atas setiap section
- ❌ Numbered section markers (01 / 02 / 03) sebagai scaffolding tanpa makna
- ❌ Transform pada `<img>` saat hover
- ❌ Body background cream/sand/beige
- ❌ Monospace sebagai jalan pintas untuk kesan "teknis"
- ❌ Estetika editorial-majalah (serif drop-caps, broadsheet grid)

---

## 3. Design Tokens

### 3.1 Sistem Warna (OKLCH)

```css
:root {
  /* === Brand Core === */
  --abyss: oklch(0.15 0.04 240); /* Near-black navy — background terdalam */
  --deep-ocean: oklch(0.22 0.06 235); /* Permukaan gelap utama — hero, nav, footer */
  --ocean: oklch(0.35 0.08 230); /* Gelap sekunder — hover, border */
  --current: oklch(0.5 0.1 225); /* Mid-tone — ikon pada gelap, teks muted */

  /* === Accent === */
  --trade-gold: oklch(0.75 0.14 75); /* Emas hangat — CTA, highlight utama */
  --trade-gold-dim: oklch(0.6 0.1 75); /* Emas redup — aksen sekunder */

  /* === Surfaces === */
  --surface-light: oklch(0.98 0.005 240); /* Near-white, sentuhan biru sangat halus */
  --surface-mid: oklch(0.94 0.01 235); /* Section terang dengan kedalaman subtle */
  --ink: oklch(0.18 0.02 240); /* Teks body pada permukaan terang */
  --ink-muted: oklch(0.4 0.03 235); /* Teks sekunder — lolos 4.5:1 */

  /* === Teks pada gelap === */
  --text-on-dark: oklch(0.95 0.005 240); /* Teks utama pada navy */
  --text-on-dark-m: oklch(0.7 0.02 235); /* Teks muted pada navy — lolos 4.5:1 */
}
```

**Rasionalisasi warna:**

- Biru laut dan emas diambil langsung dari logo perusahaan
- Tidak ada tinted warm neutral (menghindari AI default cream/sand)
- Tinted neutral mengarah ke hue brand (240° biru), bukan warm/cool generik

### 3.2 Tipografi

**Kata kunci brand voice:** _institutional_ · _maritime_ · _robust_

| Peran             | Font              | Weight   | Alasan                                                                                                                                             |
| ----------------- | ----------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display / Heading | **Barlow**        | 600, 700 | Sans-serif industrial. Letterform geometris lebar membangkitkan kesan kontainer kapal dan signage pelabuhan. Tidak ada dalam daftar reflex-reject. |
| Body              | **Source Sans 3** | 400, 600 | Terbaca di semua ukuran, netral namun tidak generik. Workhorse Adobe — dirancang untuk UI dan teks panjang.                                        |
| Utility / Caption | **Source Sans 3** | 400      | Keluarga sama, ukuran lebih kecil — tanpa pairing font yang tidak perlu.                                                                           |

**Type Scale** (fluid, rasio ≈ 1.333 — perfect fourth):

```css
:root {
  --text-xs: clamp(0.75rem, 0.7rem + 0.2vw, 0.85rem);
  --text-sm: clamp(0.85rem, 0.8rem + 0.25vw, 0.95rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.1rem);
  --text-lg: clamp(1.15rem, 1.05rem + 0.5vw, 1.35rem);
  --text-xl: clamp(1.4rem, 1.2rem + 1vw, 1.8rem);
  --text-2xl: clamp(1.8rem, 1.5rem + 1.5vw, 2.5rem);
  --text-3xl: clamp(2.2rem, 1.8rem + 2vw, 3.2rem);
  --text-hero: clamp(2.8rem, 2rem + 3vw, 5rem);
}
```

> Heading `text-wrap: balance` pada h1–h3. Body `text-wrap: pretty` pada prosa. Max body line-length: `65ch`.

### 3.3 Spacing Scale

```css
:root {
  --space-xs: clamp(0.25rem, 0.2rem + 0.15vw, 0.5rem);
  --space-sm: clamp(0.5rem, 0.4rem + 0.3vw, 0.75rem);
  --space-md: clamp(1rem, 0.8rem + 0.5vw, 1.5rem);
  --space-lg: clamp(1.5rem, 1.2rem + 1vw, 2.5rem);
  --space-xl: clamp(2.5rem, 2rem + 2vw, 4rem);
  --space-2xl: clamp(4rem, 3rem + 3vw, 6rem);
  --space-3xl: clamp(6rem, 4rem + 4vw, 9rem);
}
```

### 3.4 Layout

```css
:root {
  --max-content: 1200px;
  --max-prose: 65ch;
  --grid-gap: var(--space-lg);
  --border-r: 0.5rem; /* Radius halus — tidak bulat, tidak tajam */
}
```

### 3.5 Z-Index Scale

```css
:root {
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
}
```

---

## 4. Spesifikasi Halaman

### 4.1 BERANDA (`/`)

```
┌──────────────────────────────────────────────────┐
│  NAVBAR (transparan di atas hero)                │
│  Logo kiri  ·  Nav tengah  ·  CTA kanan          │
├──────────────────────────────────────────────────┤
│                                                  │
│  HERO — full-bleed foto samudra                  │
│  ┌──────────────────────────────┐                │
│  │ Perdagangan Terpercaya.      │  ← Barlow 700  │
│  │ Kemitraan Berkelanjutan.     │    --text-hero  │
│  │                              │                │
│  │ [deskripsi singkat]          │  ← Source Sans  │
│  │                              │                │
│  │ [Tentang Kami]  [Layanan]    │  ← CTA pair    │
│  └──────────────────────────────┘                │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  PENGENALAN PERUSAHAAN — bg: surface-light       │
│  ┌──────────┐  ┌───────────────────────┐         │
│  │          │  │ PT Samudra Biru       │         │
│  │  FOTO    │  │ Indonesia merupakan   │         │
│  │ budidaya │  │ perusahaan yang...    │         │
│  │          │  │                       │         │
│  │          │  │ [Pelajari Lebih Lanjut]│        │
│  └──────────┘  └───────────────────────┘         │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  BIDANG USAHA — bg: deep-ocean                   │
│  ┌────────┐ ┌────────┐ ┌────────┐               │
│  │ icon   │ │ icon   │ │ icon   │               │
│  │Budidaya│ │Prdgngan│ │Produk  │               │
│  │        │ │Besar   │ │Perikan │               │
│  ├────────┤ ├────────┤ ├────────┤               │
│  │ icon   │ │ icon   │ │ icon   │               │
│  │Makanan │ │Kontrak │ │Berbagai│               │
│  │Minuman │ │& Jasa  │ │Barang  │               │
│  └────────┘ └────────┘ └────────┘               │
│  (3×2 grid — NOT identical cards. Varied sizes)  │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  KOMITMEN KUALITAS — bg: surface-light           │
│  ┌───────────────────────┐  ┌──────────┐         │
│  │ Kami percaya bahwa    │  │          │         │
│  │ keberhasilan bisnis   │  │  FOTO    │         │
│  │ dibangun melalui...  │  │ inspeksi │         │
│  │                       │  │ kualitas │         │
│  └───────────────────────┘  └──────────┘         │
│  (layout asimetris terbalik)                     │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  NILAI PERUSAHAAN — bg: deep-ocean               │
│  Integrity · Quality · Professionalism ·         │
│  Partnership · Sustainability                    │
│  (strip horizontal, ikon monoline + label +      │
│   satu baris teks. BUKAN kartu — baris bersih    │
│   dengan divider vertikal)                       │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  CTA BANNER — bg: abyss, aksen trade-gold        │
│  "Siap Menjadi Mitra Kami?"                      │
│  [Hubungi Kami]                                  │
│                                                  │
├──────────────────────────────────────────────────┤
│  FOOTER — bg: abyss                              │
│  4 kolom: Info · Navigasi · Kontak · Jam Kerja   │
│  (TANPA newsletter)                              │
└──────────────────────────────────────────────────┘
```

#### Konten Hero

```
Heading:    "Perdagangan Terpercaya. Kemitraan Berkelanjutan."
Subheading: "PT Samudra Biru Indonesia — mitra usaha terpercaya
             dalam budidaya, perdagangan, dan distribusi komoditas
             perikanan serta berbagai produk perdagangan."
CTA 1:      "Tentang Kami" → /about (emas fill)
CTA 2:      "Layanan Kami" → /services (putih outline)
```

#### Konten Pengenalan Perusahaan

```
PT Samudra Biru Indonesia merupakan perusahaan yang bergerak dalam
bidang budidaya, perdagangan, dan distribusi komoditas perikanan
serta berbagai produk perdagangan.

Dengan ruang lingkup kegiatan usaha yang mencakup budidaya ikan
bersirip dan biota air laut lainnya, perdagangan besar ikan dan
biota air hidup, perdagangan produk perikanan, perdagangan bahan
makanan dan minuman, perdagangan atas dasar balas jasa atau kontrak,
serta perdagangan besar berbagai macam barang, kami hadir sebagai
mitra usaha yang mengutamakan kualitas, profesionalisme, dan
kepercayaan.
```

---

### 4.2 TENTANG KAMI (`/about`)

```
┌──────────────────────────────────────────────────┐
│  NAVBAR (solid deep-ocean)                       │
├──────────────────────────────────────────────────┤
│                                                  │
│  PAGE HERO — bg: deep-ocean + subtle foto overlay│
│  "Tentang Kami"                                  │
│  Mengenal lebih dekat PT Samudra Biru Indonesia  │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  PROFIL PERUSAHAAN — bg: surface-light           │
│  Layout asimetris + foto perusahaan              │
│  Narasi lengkap dari brief (max prose 65ch)      │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  VISI — bg: deep-ocean                           │
│  Blok kutipan besar, tengah, Barlow 600          │
│  --text-2xl                                      │
│  "Menjadi perusahaan yang terpercaya dan         │
│   berdaya saing dalam bidang perikanan,           │
│   perdagangan, dan distribusi dengan jaringan    │
│   usaha yang luas dan berkelanjutan."            │
│  (tanpa tanda kutip dekoratif)                   │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  MISI — bg: surface-light                        │
│  6 misi dalam layout 2 kolom                     │
│  Tiap misi: heading tebal + paragraf penjelasan  │
│  Penomoran 1–6 earned (urutan prioritas nyata)   │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  NILAI PERUSAHAAN — bg: surface-mid              │
│  5 nilai dalam staggered grid:                   │
│  ikon monoline besar + nama nilai + deskripsi    │
│                                                  │
│  INTEGRITY — Kejujuran dan tanggung jawab        │
│              menjadi dasar setiap hubungan bisnis │
│  QUALITY — Mengutamakan kualitas produk dan      │
│            pelayanan                             │
│  PROFESSIONALISM — Bekerja secara profesional,   │
│                    efektif, dan bertanggung jawab │
│  PARTNERSHIP — Membangun kemitraan yang kuat     │
│               dan berkelanjutan                  │
│  SUSTAINABILITY — Mengembangkan bisnis untuk     │
│                   pertumbuhan jangka panjang      │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  SERTIFIKASI & KEPATUHAN — bg: deep-ocean        │
│  Baris horizontal badge/ikon sertifikasi:        │
│  NIB · Izin Usaha · Sertifikat Kelayakan · SOP  │
│  (ikon putih di atas navy)                       │
│                                                  │
├──────────────────────────────────────────────────┤
│  FOOTER                                          │
└──────────────────────────────────────────────────┘
```

#### Konten Profil Perusahaan (lengkap dari brief)

```
PT Samudra Biru Indonesia merupakan perusahaan yang bergerak dalam
bidang budidaya, perdagangan, dan distribusi komoditas perikanan
serta berbagai produk perdagangan.

Dengan ruang lingkup kegiatan usaha yang mencakup budidaya ikan
bersirip dan biota air laut lainnya, perdagangan besar ikan dan
biota air hidup, perdagangan produk perikanan, perdagangan bahan
makanan dan minuman, perdagangan atas dasar balas jasa atau kontrak,
serta perdagangan besar berbagai macam barang, kami hadir sebagai
mitra usaha yang mengutamakan kualitas, profesionalisme, dan
kepercayaan.

PT Samudra Biru Indonesia berkomitmen untuk membangun kegiatan usaha
yang profesional dan berkelanjutan melalui pengembangan jaringan
perdagangan, kemitraan strategis, serta pelayanan yang mampu menjawab
kebutuhan pasar.

Kami percaya bahwa keberhasilan bisnis dibangun melalui produk yang
berkualitas, pelayanan yang konsisten, serta hubungan kemitraan yang
saling memberikan nilai.
```

#### Konten 6 Misi (lengkap dari brief)

```
1. Menyediakan Produk Berkualitas
   Menyediakan dan memperdagangkan komoditas perikanan serta berbagai
   produk perdagangan dengan memperhatikan kualitas dan kebutuhan pasar.

2. Mengembangkan Usaha Perikanan
   Mengembangkan kegiatan budidaya ikan dan biota air laut secara
   profesional dan berkelanjutan.

3. Membangun Kemitraan Jangka Panjang
   Membangun hubungan bisnis yang terpercaya, profesional, dan saling
   menguntungkan dengan pelanggan, pemasok, distributor, dan mitra usaha.

4. Memperluas Jaringan Perdagangan
   Mengembangkan jaringan perdagangan dan distribusi untuk menjangkau
   pasar yang lebih luas serta menciptakan peluang usaha baru.

5. Menjunjung Integritas dan Profesionalisme
   Menjalankan setiap kegiatan usaha dengan integritas, tanggung jawab,
   transparansi, dan standar profesional.

6. Menciptakan Pertumbuhan Berkelanjutan
   Mendorong pertumbuhan perusahaan melalui pengembangan pasar, inovasi,
   peningkatan kualitas, dan penciptaan nilai tambah.
```

---

### 4.3 LAYANAN (`/services`)

```
┌──────────────────────────────────────────────────┐
│  NAVBAR                                          │
├──────────────────────────────────────────────────┤
│                                                  │
│  PAGE HERO — bg: deep-ocean                      │
│  "Bidang Usaha"                                  │
│  Jangkauan layanan perdagangan dan distribusi    │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  OVERVIEW — bg: surface-light                    │
│  Paragraf singkat kapabilitas multi-sektor       │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  6× DETAIL LAYANAN — alternating backgrounds     │
│  Tiap bidang usaha mendapat section sendiri      │
│  Layout asimetris bergantian (foto kiri/kanan)   │
│                                                  │
│  Section 1: bg surface-light (foto kiri)         │
│  Section 2: bg deep-ocean   (foto kanan)         │
│  Section 3: bg surface-light (foto kiri)         │
│  Section 4: bg deep-ocean   (foto kanan)         │
│  Section 5: bg surface-light (foto kiri)         │
│  Section 6: bg deep-ocean   (foto kanan)         │
│                                                  │
│  Tiap section berisi:                            │
│  · Heading bidang usaha                          │
│  · Deskripsi diperluas (lihat konten di bawah)   │
│  · "Minta Penawaran" CTA                        │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  RANTAI PASOKAN — bg: surface-mid                │
│  4 tahap horizontal (urutan nyata = earned):     │
│                                                  │
│  Pengadaan → Cold Chain → Inspeksi → Distribusi  │
│     ●──────────●──────────●──────────●           │
│  Ikon monoline tiap tahap + deskripsi singkat    │
│  Dihubungkan garis subtle                        │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  KOMODITAS UNGGULAN — bg: deep-ocean             │
│  Grid fotografi kategori produk:                 │
│  · Ikan Hidup    · Seafood Beku                  │
│  · Bahan F&B     · Barang Umum                   │
│  Tiap item: gambar + judul overlay               │
│  (tanpa border kartu)                            │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  JAMINAN MUTU — bg: surface-light                │
│  Teks tentang standar kualitas + foto fasilitas  │
│                                                  │
├──────────────────────────────────────────────────┤
│  CTA BANNER — "Butuh Penawaran Khusus?"          │
├──────────────────────────────────────────────────┤
│  FOOTER                                          │
└──────────────────────────────────────────────────┘
```

#### Konten 6 Bidang Usaha (diperluas dari brief)

**1. Budidaya Ikan Bersirip & Biota Air Laut**

> Kami mengembangkan kegiatan budidaya ikan bersirip dan biota air laut secara profesional di berbagai lokasi budidaya strategis. Dengan pendekatan berkelanjutan dan penerapan standar mutu yang ketat, kami memastikan setiap hasil budidaya memenuhi kebutuhan pasar domestik maupun internasional.

**2. Perdagangan Besar Ikan & Biota Air Hidup**

> Sebagai pedagang besar ikan dan biota air hidup, kami menyediakan akses langsung ke sumber daya perikanan berkualitas. Jaringan pemasok kami yang luas memungkinkan pasokan yang konsisten dengan standar kesegaran dan keamanan pangan yang terjamin.

**3. Perdagangan Produk & Hasil Perikanan**

> Dari ikan segar hingga produk olahan perikanan, kami memperdagangkan berbagai komoditas hasil laut dengan sistem distribusi berpendingin (cold chain) yang menjaga kualitas dari titik produksi hingga ke tangan pelanggan.

**4. Perdagangan Besar Bahan Makanan & Minuman**

> Kami memperluas jangkauan usaha ke sektor perdagangan bahan makanan dan minuman, melayani kebutuhan restoran, hotel, katering, dan industri pengolahan makanan dengan pasokan yang andal dan harga yang kompetitif.

**5. Perdagangan Atas Dasar Balas Jasa (Fee) atau Kontrak**

> Melalui layanan perdagangan berbasis kontrak, kami menjadi mitra pengadaan terpercaya bagi perusahaan yang membutuhkan solusi procurement menyeluruh — dari identifikasi pemasok hingga pengiriman barang sesuai spesifikasi.

**6. Perdagangan Besar Berbagai Macam Barang**

> Dengan izin usaha perdagangan besar, kami juga melayani kebutuhan komoditas umum di luar sektor perikanan, memberikan fleksibilitas bagi mitra usaha yang membutuhkan satu titik kontak untuk berbagai kebutuhan pengadaan.

---

### 4.4 TIM (`/team`)

```
┌──────────────────────────────────────────────────┐
│  NAVBAR                                          │
├──────────────────────────────────────────────────┤
│                                                  │
│  PAGE HERO — bg: deep-ocean                      │
│  "Tim Kami"                                      │
│  Orang-orang di balik PT Samudra Biru Indonesia  │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  KEPEMIMPINAN — bg: surface-light                │
│  4–8 profil anggota tim                          │
│  Layout: grid asimetris (bukan kartu identik)    │
│                                                  │
│  Profil pertama (pimpinan) lebih besar:          │
│  ┌─────────────────────────────────────┐         │
│  │ ┌──────┐                           │         │
│  │ │ FOTO │  Nama Lengkap             │         │
│  │ │      │  Jabatan                  │         │
│  │ │      │  Bio singkat ...          │         │
│  │ └──────┘                           │         │
│  └─────────────────────────────────────┘         │
│                                                  │
│  Profil berikutnya dalam 2–3 kolom:              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │   FOTO   │ │   FOTO   │ │   FOTO   │         │
│  │   Nama   │ │   Nama   │ │   Nama   │         │
│  │  Jabatan │ │  Jabatan │ │  Jabatan │         │
│  └──────────┘ └──────────┘ └──────────┘         │
│                                                  │
│  DATA KOSONG — akan diisi klien                  │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  DIVISI ORGANISASI — bg: deep-ocean              │
│  Overview 4 divisi korporat:                     │
│  · Budidaya                                      │
│  · Perdagangan & Logistik                        │
│  · Jaminan Mutu                                  │
│  · Pengembangan Bisnis                           │
│  Tiap divisi: deskripsi fungsi dan cakupannya    │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  JARINGAN MITRA — bg: surface-light              │
│  Teks tentang kemitraan dengan koperasi nelayan, │
│  hatchery, cold storage, dan mitra logistik      │
│  + foto/ilustrasi jaringan                       │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  BERGABUNG BERSAMA KAMI — bg: surface-mid        │
│  Undangan untuk talenta dan mitra strategis      │
│  Teks + CTA "Hubungi Kami"                       │
│                                                  │
├──────────────────────────────────────────────────┤
│  FOOTER                                          │
└──────────────────────────────────────────────────┘
```

#### Struktur Data Tim (4–8 slot, data kosong)

```javascript
const teamMembers = [
  {
    name: "", // Diisi klien
    position: "", // Diisi klien
    bio: "", // Diisi klien
    photo: null, // Diisi klien
    featured: true, // Profil besar (pimpinan)
  },
  // ... 3–7 anggota lainnya dengan featured: false
];
```

#### Jabatan Placeholder (struktur organisasi)

| No  | Jabatan                   | Cakupan                                          |
| --- | ------------------------- | ------------------------------------------------ |
| 1   | Direktur Utama            | Visi strategis dan tata kelola korporat          |
| 2   | Direktur Operasional      | Operasional harian, logistik, rantai pasokan     |
| 3   | Kepala Divisi Budidaya    | Operasi budidaya dan perikanan berkelanjutan     |
| 4   | Kepala Divisi Perdagangan | Kemitraan dagang, operasi grosir, ekspansi pasar |
| 5   | Kepala Divisi Mutu        | Jaminan mutu, cold-chain, sertifikasi            |
| 6–8 | (Opsional)                | Staf pendukung sesuai kebutuhan                  |

---

### 4.5 HUBUNGI KAMI (`/contact`)

```
┌──────────────────────────────────────────────────┐
│  NAVBAR                                          │
├──────────────────────────────────────────────────┤
│                                                  │
│  PAGE HERO — bg: deep-ocean                      │
│  "Hubungi Kami"                                  │
│  Kami siap menjadi mitra usaha Anda              │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  KONTAK SPLIT — bg: surface-light                │
│  ┌────────────────┐ ┌────────────────────┐       │
│  │ INFO KONTAK    │ │ FORMULIR PERTANYAAN│       │
│  │                │ │                    │       │
│  │ 📍 Alamat      │ │ Jenis Pertanyaan ▼ │       │
│  │ Jl. Sentra     │ │ Nama Lengkap  [__] │       │
│  │ Primer No.60   │ │ Perusahaan    [__] │       │
│  │ RT.13/RW.8...  │ │ Email         [__] │       │
│  │                │ │ Telepon       [__] │       │
│  │ 📞 Telepon     │ │ Pesan         [__] │       │
│  │ 082376209524   │ │                    │       │
│  │ 085863500002   │ │ [Kirim Pertanyaan] │       │
│  │                │ │                    │       │
│  │ ✉ Email        │ │                    │       │
│  │ ptsamudrabiru  │ │                    │       │
│  │ indonesia@     │ │                    │       │
│  │ gmail.com      │ │                    │       │
│  │                │ │                    │       │
│  │ 🕐 Jam Kerja   │ │                    │       │
│  │ Sen–Jum        │ │                    │       │
│  │ 08.00–17.00    │ │                    │       │
│  └────────────────┘ └────────────────────┘       │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  PETA — bg: deep-ocean                           │
│  Peta interaktif (atau gambar peta statis)       │
│  menunjukkan lokasi HQ Cakung, Jakarta Timur     │
│  Tile peta bertema gelap jika memungkinkan       │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  FAQ — bg: surface-light                         │
│  Accordion expandable (5 pertanyaan)             │
│                                                  │
├──────────────────────────────────────────────────┤
│  FOOTER                                          │
└──────────────────────────────────────────────────┘
```

#### Detail Kontak (dari brief)

```
Alamat:   Jl. Sentra Primer No.60 RT.13/RW.8, Pulo Gebang,
          Kec. Cakung, Kota Jakarta Timur,
          DKI Jakarta 13950

Telepon:  082376209524 / 085863500002

Email:    ptsamudrabiruindonesia@gmail.com
```

#### Field Formulir Pertanyaan (visual-only, tanpa backend)

| Field            | Tipe                                                                                            | Wajib |
| ---------------- | ----------------------------------------------------------------------------------------------- | ----- |
| Jenis Pertanyaan | Select: Penawaran Kerjasama · Pembelian Grosir · Pasokan Budidaya · Kemitraan Kontrak · Lainnya | Ya    |
| Nama Lengkap     | Text                                                                                            | Ya    |
| Nama Perusahaan  | Text                                                                                            | Tidak |
| Email            | Email                                                                                           | Ya    |
| Nomor Telepon    | Tel                                                                                             | Ya    |
| Pesan            | Textarea                                                                                        | Ya    |

> Tombol submit menampilkan pesan sukses visual. Tidak ada pengiriman data ke server.

#### Konten FAQ

| Pertanyaan                                                  | Jawaban                                                                                                                                                                     |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Berapa minimum order quantity (MOQ) untuk pembelian grosir? | MOQ bervariasi tergantung jenis komoditas. Ikan segar dan biota air hidup mulai dari 100 kg. Produk olahan dan bahan makanan dapat disesuaikan. Hubungi kami untuk diskusi. |
| Bagaimana sistem pembayaran yang berlaku?                   | Transfer bank dengan terms yang dapat dinegosiasikan (COD, Net 14, Net 30) tergantung volume dan frekuensi. Skema kredit tersedia untuk kemitraan jangka panjang.           |
| Bagaimana jaminan kesegaran produk?                         | Sistem cold chain management dari titik produksi hingga pengiriman. Kendaraan berpendingin dan fasilitas penyimpanan berstandar suhu terkontrol di setiap tahapan.          |
| Apakah perusahaan memiliki izin usaha yang lengkap?         | Ya — NIB, izin usaha perdagangan, dan sertifikasi sesuai regulasi pemerintah. Detail sertifikasi disampaikan dalam proses kerjasama.                                        |
| Bagaimana proses menjadi mitra usaha?                       | Hubungi kami via formulir atau kontak langsung. Tim merespons dalam 1×24 jam kerja untuk mendiskusikan kebutuhan dan potensi kerjasama.                                     |

---

## 5. Komponen Global

### 5.1 Navigasi

| Aspek            | Desktop                                                                     | Mobile                                    |
| ---------------- | --------------------------------------------------------------------------- | ----------------------------------------- |
| **Layout**       | Fixed top bar. Logo kiri, nav tengah, CTA kanan                             | Hamburger icon → drawer kanan full-height |
| **Item**         | Beranda · Tentang Kami · Layanan · Tim · Hubungi Kami                       | Item sama, stacked vertikal               |
| **CTA**          | "Hubungi Kami" (trade-gold fill)                                            | CTA di bagian bawah drawer                |
| **Scroll**       | Transparan di atas hero → solid `--deep-ocean` setelah scroll melewati hero | Selalu solid `--deep-ocean`               |
| **Transisi**     | 300ms opacity                                                               | —                                         |
| **Active state** | Underline halus pada link aktif                                             | Background tint pada item aktif           |

### 5.2 Footer

4 kolom pada `--abyss` (**tanpa newsletter**):

| Kolom 1                                            | Kolom 2                                              | Kolom 3                            | Kolom 4                                                             |
| -------------------------------------------------- | ---------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------- |
| Logo + deskripsi 2 baris + social links (jika ada) | **Navigasi**: Beranda, Tentang, Layanan, Tim, Kontak | **Kontak**: Alamat, Telepon, Email | **Jam Operasional**: Sen–Jum 08.00–17.00 WIB, Sabtu 08.00–12.00 WIB |

Di bawah kolom: horizontal rule + copyright: `© 2024 PT Samudra Biru Indonesia. Seluruh hak dilindungi.`

### 5.3 Page Hero (reusable)

- Background: `--deep-ocean` dengan overlay foto opsional (opacity 0.15)
- Heading: Barlow 700, `--text-3xl`, `--text-on-dark`
- Subtext: Source Sans 3 400, `--text-lg`, `--text-on-dark-m`
- Padding vertikal: `--space-3xl`
- Alignment: left-aligned

### 5.4 CTA Banner (reusable)

- Background: `--abyss`
- Teks: `--text-on-dark`, `--text-2xl`, centered
- Tombol: `--trade-gold` fill, `--ink` text
- Digunakan pada Beranda dan Layanan dengan copy berbeda:
  - Beranda: _"Siap Menjadi Mitra Kami?"_
  - Layanan: _"Butuh Penawaran Khusus?"_

### 5.5 ScrollReveal (intersection observer wrapper)

- Content visible by default (no gating behind animation class)
- Entrance: fade up (translateY 24px → 0, opacity 0 → 1)
- Duration: 500ms, ease-out-quart
- Stagger: 100ms per child element
- Threshold: 0.15 intersection

### 5.6 FaqAccordion

- Trigger: judul pertanyaan + chevron icon (Lucide)
- Expand: clip/height animation, 300ms ease-out
- Satu pertanyaan terbuka pada satu waktu (exclusive)
- Keyboard accessible: Enter/Space toggle, arrow keys navigate

### 5.7 ContactForm (visual-only)

- Validasi client-side sederhana (required fields)
- Submit menampilkan success toast/message
- Tidak mengirim data ke server manapun

---

## 6. Strategi Motion

Situs brand/marketing → weighting desainer motion:

| Desainer          | Bobot     | Peran                                         |
| ----------------- | --------- | --------------------------------------------- |
| **Jakub Krehel**  | Primary   | Polish produksi, refinement profesional halus |
| **Jhey Tompkins** | Secondary | Momen showcase produk (grid komoditas, hero)  |
| **Emil Kowalski** | Selective | Form, navigasi, interaksi frekuensi tinggi    |

### Motion yang Direncanakan

| Elemen                           | Animasi                          | Durasi               | Easing         |
| -------------------------------- | -------------------------------- | -------------------- | -------------- |
| Transisi scroll navigasi         | Fade opacity background          | 300ms                | ease-out       |
| Heading hero halaman             | Fade up + opacity saat load      | 600ms                | ease-out-quart |
| Konten section                   | Fade up saat scroll intersection | 500ms, stagger 100ms | ease-out-quart |
| Tombol CTA hover                 | Background color shift           | 200ms                | ease-out       |
| Card hover (kartu, BUKAN gambar) | Shadow elevation halus           | 200ms                | ease-out       |
| FAQ accordion                    | Height auto-animate + clip       | 300ms                | ease-out       |
| Mobile nav drawer                | Slide dari kanan + backdrop fade | 350ms                | ease-out-expo  |

### Aturan Motion

- Semua animasi menghormati `@media (prefers-reduced-motion: reduce)` → fallback instant/crossfade
- Tidak ada `transform` pada elemen `<img>` saat hover. **Tidak pernah.**
- Scroll-triggered reveal hanya enhancement — konten terlihat by default
- Satu orchestrated load sequence pada hero beranda. Halaman lain: fade-in sederhana

---

## 7. Responsive Behavior

| Breakpoint          | Layout                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------- |
| ≥1024px (Desktop)   | Layout penuh. Max-content 1200px centered.                                                  |
| 768–1023px (Tablet) | 2-kolom → 1-kolom untuk layout asimetris. Grid collapse ke 2 kolom. Nav masih terlihat.     |
| <768px (Mobile)     | 1-kolom seluruhnya. Hamburger nav. Hero text lebih kecil. Footer stack. Section full-width. |

- Semua gambar: `object-fit: cover` dengan aspect ratio sesuai
- Tipografi: fluid `clamp()` menangani semua resize tanpa breakpoint
- Spacing: fluid `clamp()` demikian juga
- Touch targets: minimum 44×44px pada mobile
- Grid responsif tanpa breakpoint: `repeat(auto-fit, minmax(280px, 1fr))`

---

## 8. Kebutuhan Citra

Fotografi **wajib** untuk brief ini. Perusahaan perdagangan kelautan tanpa citra laut/seafood/logistik terasa tidak lengkap.

### Gambar yang Perlu Di-generate (AI)

| ID Gambar              | Subjek                                                                            | Penggunaan                                |
| ---------------------- | --------------------------------------------------------------------------------- | ----------------------------------------- |
| `hero_ocean`           | Aerial view samudra biru dengan perahu nelayan saat fajar, pencahayaan dramatis   | Hero background Beranda                   |
| `aquaculture_facility` | Fish farm laut modern dengan jaring apung di perairan tropis, pekerja di platform | Tentang Kami, Layanan (Budidaya)          |
| `fish_market_trade`    | Ikan segar disortir dan dikemas di pasar grosir profesional                       | Beranda pengenalan, Layanan (Perdagangan) |
| `cold_chain_logistics` | Truk berpendingin dimuat di gudang, pekerja dengan peti seafood                   | Layanan (rantai pasokan, Kualitas)        |
| `quality_inspection`   | Close-up inspeksi kualitas seafood — jas lab, clipboard, ikan di es               | Layanan (QA), Tentang Kami                |
| `team_corporate`       | Tim bisnis profesional di kantor modern dengan aksen biru laut                    | Hero Tim                                  |
| `jakarta_office`       | Eksterior gedung komersial modern di Jakarta                                      | Halaman Kontak                            |

---

## 9. Arsitektur Teknis

| Aspek         | Pilihan                                                    |
| ------------- | ---------------------------------------------------------- |
| **Framework** | React 18 + Vite                                            |
| **Styling**   | Vanilla CSS + Custom Properties (OKLCH)                    |
| **Routing**   | React Router v6 (SPA client-side)                          |
| **Icons**     | Lucide React                                               |
| **Fonts**     | Google Fonts: Barlow (600, 700) + Source Sans 3 (400, 600) |
| **Build**     | Vite production build                                      |
| **Deploy**    | Static files — deployable di hosting manapun               |

### Struktur File

```
src/
├── main.jsx
├── App.jsx
├── index.css
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PageHero.jsx
│   ├── CtaBanner.jsx
│   ├── FaqAccordion.jsx
│   ├── ContactForm.jsx
│   ├── SupplyChainFlow.jsx
│   └── ScrollReveal.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Team.jsx
│   └── Contact.jsx
└── data/
    ├── services.js
    ├── values.js
    ├── missions.js
    ├── team.js          ← data kosong, struktur 4-8 slot
    └── faq.js
```

---

## 10. Aksesibilitas

- HTML semantik: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- Semua gambar memiliki `alt` text deskriptif dalam Bahasa Indonesia
- Focus-visible styles pada semua elemen interaktif
- ARIA labels pada tombol icon-only (hamburger menu, social links)
- Kontras warna ≥ 4.5:1 untuk semua body text, ≥ 3:1 untuk large text
- `prefers-reduced-motion` dihormati pada semua animasi
- Skip-to-content link untuk pengguna keyboard
- Input form dengan elemen `<label>` terasosiasi
- FAQ accordion accessible via keyboard (Enter/Space, arrow keys)

---

## 11. Rencana Verifikasi

### Build Otomatis

```bash
npm run build    # Zero errors JSX, React, CSS
npm run dev      # Semua 5 halaman render dengan benar
```

### Verifikasi Manual

- Navigasi lintas 5 route (Beranda, Tentang, Layanan, Tim, Kontak)
- Menu drawer mobile responsive
- FAQ accordion expand/collapse
- Formulir kontak validasi + success state
- Detail kontak sesuai brief (alamat, telepon, email)
- Scroll reveal tidak menggantung konten (konten visible by default)
- Semua gambar memiliki alt text
- Kontras warna lolos WCAG AA
