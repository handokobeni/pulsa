# 2ND SUBMISSION PROPOSAL — DIGDAYA x HACKATHON 2026
# PULSA: AI Financial Intelligence untuk UMKM Berbasis Data Transaksi

---

## 1. TEAM IDENTITY

### Team ID
P0670

### Team Name
404 Inovators

### Proposal Title
PULSA: AI Financial Intelligence untuk UMKM Berbasis Data Transaksi

### Team Composition *(maks. 120 kata)*

| Peran | Nama | Tanggung jawab utama |
|---|---|---|
| Product Lead / Full-Stack Engineer | Beni Handoko | Strategi produk, arsitektur sistem, full-stack development, validasi UMKM |
| Software Engineer / Data Engineer | Moch Arsya Adzma Syahputra | Backend, ingestion pipeline, analytics engine, implementasi Business Health Score |

Tim **404 Inovators** adalah tim *engineering* kecil dengan latar belakang *software development*, *data engineering*, dan AI/ML. Kombinasi kompetensi ini memungkinkan kami merancang dan membangun PULSA dari arsitektur hingga fitur — dari ingestion data hingga model analitik. Tim kecil yang fokus memungkinkan iterasi cepat dan keputusan produk yang lincah pada fase MVP. Pasca-pendanaan pre-seed, tim direncanakan diperluas dengan UI/UX designer, marketing lead (community & content), dan additional engineer untuk fase *open beta* dan *scale*.

### Executive Summary *(maks. 150 kata)*

Banyak UMKM kuliner, retail, dan jasa kini menerima pembayaran digital lewat QRIS, marketplace, dan transfer. Masalahnya, data itu berhenti sebagai rekap pembayaran; mereka belum punya alat sederhana untuk membacanya menjadi keputusan bisnis. PULSA (*Payment Understanding & Ledger for Smart Analytics*) menutup celah itu. Kami menyatukan transaksi lintas kanal ke satu ledger usaha, lalu menyajikan insight harian, **Business Health Score**, dan rekomendasi yang bisa langsung dijalankan pemilik usaha. Sejak submission pertama, kami menajamkan empat hal: prototype web 7 modul yang sudah bisa diakses publik; metodologi Business Health Score dengan 5 komponen yang terdefinisi jelas; target dampak yang realistis untuk tim dua orang (150 UMKM di tahun pertama, 7.500 di tahun ketiga); dan validasi pasar awal lewat survei kuantitatif (N=7, sinyal WTP positif). Tujuan akhirnya sederhana: UMKM lebih produktif, dan analitik bisnis yang dulu hanya milik perusahaan besar kini terjangkau bagi usaha mikro penyumbang 61% PDB.

---

## 2. PROBLEM ALIGNMENT & REFINEMENT

### Problem Statement
**Peningkatan Produktivitas, Ketahanan Pangan, dan Penciptaan Lapangan Kerja**

### Primary Sub-Problem Statement
**Inklusi Ekonomi (UMKM)** — *Pemanfaatan Data Alternatif / Credit Scoring*

### Problem Validation *(maks. 180 kata)*

Masalah inti yang ingin diselesaikan adalah kesenjangan antara digitalisasi pembayaran yang sudah masif dengan rendahnya pemanfaatan data transaksi sebagai sumber data alternatif untuk analisis bisnis dan penguatan inklusi ekonomi UMKM. Setelah adopsi QRIS naik tajam, banyak UMKM kuliner, retail, dan jasa menerima pembayaran digital setiap hari, namun data tersebut hanya berhenti sebagai rekap transaksi.

Penyebabnya bertumpuk. Data tersebar di banyak kanal (QRIS, marketplace, transfer bank, input manual) tanpa pernah disatukan. Aplikasi pembayaran cuma memberi ringkasan seadanya. Alat analitik kelas enterprise terlalu mahal sekaligus rumit untuk usaha mikro. Dan belum ada yang menerjemahkan pola transaksi ke bahasa keputusan sehari-hari.

Akibatnya, sebagian besar UMKM memutuskan stok, jam buka, promo, dan alokasi marketing berdasarkan intuisi, bukan data. Keadaan ini makin berat karena tools business intelligence yang ada sulit dijangkau: solusi kelas enterprise berbiaya jutaan rupiah per bulan, sementara aplikasi pencatatan dasar tidak menawarkan analitik yang mendalam. Pada akhirnya UMKM kehilangan peluang yang tidak pernah mereka sadari, dan makin tertinggal secara efisiensi dari pelaku usaha yang lebih besar.

### Problem–Solution Mapping *(maks. 180 kata)*

PULSA memetakan setiap masalah inti ke mekanisme solusi dan outcome terukur:

**Problem 1 — Data transaksi tersebar di banyak kanal**
→ Mekanisme: Modul ingestion multi-channel (upload CSV/XLSX, input manual, ke depan integrasi API agregator) yang mengonsolidasi ke satu ledger usaha.
→ Outcome: UMKM memiliki *single source of truth* untuk seluruh transaksi.

**Problem 2 — UMKM tidak mengenali pola bisnisnya sendiri**
→ Mekanisme: Analytics engine menghasilkan tren revenue, peak hours heatmap, performa produk, dan analisis channel.
→ Outcome: Pelaku usaha mengenal jam tersibuk, produk terlaris, dan hari peak yang dapat langsung ditindaklanjuti.

**Problem 3 — Keputusan operasional berbasis intuisi**
→ Mekanisme: Business Health Score (5 komponen) + rekomendasi AI berbasis pola historis (stok, jam buka, bundling promo).
→ Outcome: Rekomendasi mingguan yang ringkas, terklasifikasi prioritas, dan mudah dieksekusi.

**Problem 4 — Efektivitas marketing tidak terukur**
→ Mekanisme: Analisis kontribusi tiap *channel* terhadap revenue + korelasi pola promosi dengan momentum penjualan (roadmap V2 mencakup integrasi metrik konten media sosial).
→ Outcome: Keputusan alokasi budget marketing berbasis ROI nyata. Validasi awal survei (N=7): **57,1% responden memilih analisis efektivitas konten media sosial sebagai fitur prioritas**, dan **42,9% mengaku menebak konten mana yang efektif menarik penjualan**.

### Ecosystem Alignment *(maks. 150 kata)*

PULSA dirancang selaras dengan **Blueprint Sistem Pembayaran Indonesia 2025–2030** (Bank Indonesia) yang menempatkan digitalisasi UMKM sebagai pilar inklusi ekonomi, dan **POJK 3/2024** tentang Penyelenggaraan Inovasi Teknologi Sektor Keuangan (ITSK) untuk jalur *regulatory sandbox* bila dibutuhkan. **Stakeholder ekosistem**: (1) **UMKM** sebagai pengguna utama; (2) **Mitra distribusi**: agregator pembayaran (Midtrans, Xendit, QRIS aggregator), asosiasi UMKM (HIPMI, KADIN), komunitas kuliner/retail daerah; (3) **Mitra ekosistem micro B2B**: platform supplier/vendor UMKM, vendor POS lokal, lembaga pelatihan; (4) **Regulator**: Bank Indonesia (kerangka QRIS), OJK (UU PDP), Kemenkop UKM (program digitalisasi UMKM). Batasan implementasi: kepatuhan **UU No. 27/2022 (PDP)**, persetujuan eksplisit pengguna, keterbatasan akses API marketplace tanpa kerja sama formal. PULSA berkembang bertahap dari *ingestion* mandiri ke integrasi resmi seiring tumbuhnya kepercayaan ekosistem.

---

## 3. SOLUTION & IMPACT DEEP DIVE

### Solution Approach & Mechanism *(maks. 250 kata)*

PULSA bekerja *end-to-end* dalam empat tahap.

**Input.** Data transaksi masuk melalui tiga jalur: (a) upload file (CSV/XLSX dari export QRIS, POS, marketplace, atau mutasi bank), (b) input manual untuk transaksi tunai, dan (c) ke depan, integrasi API dengan agregator pembayaran.

**Proses.** Modul ingestion menormalisasi format, melakukan deduplikasi referensi, memetakan kategori produk, dan menyimpan ke ledger usaha tunggal. Analytics engine mengekstrak fitur — frekuensi transaksi, nilai rata-rata, tren omzet, stabilitas pendapatan, pola jam, diversitas channel — yang menjadi dasar dashboard. AI engine ringan (rule-based + regresi sederhana, dapat dikembangkan ke gradient boosting) memproses pola historis untuk membentuk **Business Health Score** (0–100 dari 5 komponen: Revenue Stability, Transaction Frequency, Customer Diversity, Channel Diversity, Growth Trend) dan rekomendasi *actionable* (contoh: tambah stok produk X di hari Y, bundling promo, optimasi jam buka).

**Output.** Dashboard web menampilkan KPI utama, tren revenue, heatmap peak hours, performa produk, donut channel, breakdown health score, dan daftar rekomendasi terklasifikasi (stok/operasional/promosi).

**Interaksi pengguna.** UMKM mengakses melalui browser tanpa instalasi tambahan, dengan opsi PWA untuk mobile.

**Penajaman dari proposal sebelumnya**: (1) prototype web interaktif sudah siap dan dapat diakses publik sebagai bukti kelayakan UX, (2) Business Health Score sekarang punya 5 komponen terdefinisi dengan komputasi terstruktur, bukan lagi konsep abstrak, (3) flow ingestion menambahkan jalur manual untuk UMKM yang transaksinya masih sebagian tunai, sehingga adopsi tidak terhambat pada UMKM yang belum sepenuhnya digital.

*Lihat lampiran:* `attachments/data_flow_diagram.png` — diagram alur input → processing → analytics & AI → output.

### Impact Scale & Targets *(maks. 230 kata)*

PULSA menargetkan dampak pada tiga lapisan: pengguna langsung, ekosistem keuangan, dan ekonomi UMKM nasional.

**Target jumlah pengguna (konservatif):**
- **Tahun 1**: 150 UMKM aktif (closed beta 20 + early adopter 130) di Bandung & Jabodetabek, fokus F&B dan retail — realistis untuk 2 *founders*.
- **Tahun 2**: 1.500 UMKM (10x) via 1–2 kemitraan agregator/asosiasi UMKM, tim 5.
- **Tahun 3**: 7.500 UMKM (5x) via 3–5 mitra distribusi, ekspansi sektor jasa & kota Tier 2.

**Manfaat per pengguna:**
- Pengurangan waktu rekapitulasi manual ±2 jam/minggu per UMKM.
- Akses ke insight yang setara *enterprise tools* (peak hours, produk terlaris, stabilitas omzet) tanpa biaya tinggi.
- Visibilitas Business Health Score sebagai profil usaha yang dapat dibagikan.

**Manfaat sistemik:**
- **Demokratisasi business intelligence**: tools analitik yang sebelumnya hanya untuk enterprise menjadi terjangkau bagi UMKM mikro.
- Peningkatan literasi data UMKM secara progresif.
- Penguatan disiplin pencatatan transaksi sebagai fondasi pertumbuhan & daya saing jangka panjang.

**Skenario asumtif**: Tanpa PULSA, UMKM rata-rata menghabiskan **2–3 jam/minggu** untuk rekapitulasi manual dan tetap kehilangan **5–10% revenue** dari peluang tak teridentifikasi (peak hours, produk terlaris). Dengan PULSA: rekapitulasi otomatis ≤15 menit/minggu + rekomendasi spesifik → uplift target **10–15% dalam 6 bulan** (lihat *Impact Measurement*).

**Skala data yang diproses:**
- Tahun 1: ±450 ribu transaksi/bulan (100 transaksi/hari × 150 UMKM × 30 hari).
- Tahun 3: ±22,5 juta transaksi/bulan.

Target ini dipilih konservatif agar realistis untuk MVP dengan tim kecil, namun tetap menyediakan ruang pertumbuhan signifikan ketika kemitraan distribusi terbentuk.

### Impact Measurement *(maks. 270 kata)*

Keberhasilan PULSA diukur melalui indikator kuantitatif dalam empat kategori.

**1. Adopsi & Engagement**
- *Monthly Active Users (MAU)*: 60% dari registered users dalam 6 bulan pertama
- Rata-rata sesi per pengguna per minggu: ≥3 sesi
- *Retention rate* 30-hari: ≥40% pada tahun pertama
- *Onboarding completion rate*: ≥75% (dari sign-up ke transaksi pertama)

**2. Pemanfaatan Insight**
- Persentase pengguna yang melihat dashboard ≥1×/minggu: ≥70%
- Persentase rekomendasi prioritas tinggi yang ditandai "diterapkan": ≥25%
- *Average Business Health Score improvement* per user dalam 6 bulan: +5 poin
- *Self-reported confidence* dalam keputusan bisnis (survey 6-bulanan): peningkatan ≥30%

**3. Kualitas Data & Ledger**
- Rata-rata jumlah channel terhubung per UMKM: ≥2 dalam 3 bulan
- Konsistensi pencatatan transaksi: ≥80% hari aktif dalam periode 30 hari
- Volume transaksi tercatat per UMKM per bulan: ≥150

**4. Dampak Ekosistem**
- Persentase pengguna aktif yang melaporkan peningkatan omzet ≥10% setelah 6 bulan: ≥35%
- *Average revenue uplift* pengguna aktif yang menerapkan ≥3 rekomendasi (case study sample): +10–15%

Pengukuran dilakukan melalui *in-app analytics*, *survey* pengguna kuartalan, wawancara case study, dan rekapitulasi data ledger anonim. Dashboard internal akan menampilkan semua KPI ini dengan target dan progres per bulan untuk evaluasi rutin. Indikator ini sengaja dipilih agar tetap dapat diukur pada skala MVP (150 pengguna), namun proportional untuk skala 7.500 pengguna di tahun ketiga.

### System & Public Value Proposition *(maks. 200 kata)*

Manfaat PULSA tidak berhenti di satu UMKM. Ketika dipakai banyak usaha, dampaknya menjalar ke sistem yang lebih luas.

**Demokratisasi business intelligence**: Tools analitik yang sebelumnya hanya terjangkau enterprise (BI/Looker/Power BI berbiaya jutaan rupiah/bulan) menjadi tersedia untuk UMKM mikro dengan harga di bawah Rp 100rb/bulan. Ini menutup ketimpangan akses tools antara pelaku usaha besar dan mikro.

**Kualitas data ekosistem**: Dengan ribuan UMKM yang mendisiplinkan pencatatan, kualitas data agregat di sektor UMKM membaik. Mendukung pemetaan ekonomi mikro untuk perumusan kebijakan publik (pemerintah daerah, BI, Kemenkop UKM).

**Inklusi pembiayaan (roadmap)**: profil usaha berbasis data alternatif dari PULSA ke depan dapat menjadi sinyal *credit-readiness* saat UMKM mengakses pembiayaan formal, lewat kemitraan dengan lembaga keuangan.

**Penguatan literasi data**: Bahasa sederhana — "produk terlaris", "jam tersibuk", "kesehatan operasional" — membuat UMKM terbiasa mengambil keputusan berbasis data. Transformasi perilaku jangka panjang ini bernilai akumulatif.

**Multiplier produktivitas ekonomi mikro**: UMKM yang lebih efisien menghasilkan omzet lebih besar, menyerap tenaga kerja lebih banyak, dan berkontribusi lebih ke PDB. Dengan UMKM = 61% PDB, peningkatan produktivitas 10–15% di segmen ini punya dampak makro signifikan.

**Resiliensi UMKM**: UMKM yang mengenali pola bisnisnya beradaptasi lebih cepat terhadap perubahan musiman atau guncangan ekonomi, memperkuat ketahanan ekonomi mikro secara agregat.

---

## 4. INNOVATION & DIFFERENTIATION

### Solution Originality *(maks. 300 kata)*

Pendekatan yang sudah ada di Indonesia terbagi tiga kategori, masing-masing memiliki keterbatasan yang membuat PULSA tetap unik.

**Kategori 1 — Aplikasi pencatatan keuangan UMKM** (BukuKas, BukuWarung): fokus pencatatan manual dan ringkasan keuangan harian. *Keterbatasan*: tidak mengonsolidasi data kanal digital (QRIS, marketplace, transfer) dan tidak punya analytics mendalam atau *scoring*.

**Kategori 2 — Sistem Point-of-Sale** (Pawoon, MokaPOS, Olsera, Wahyoo): kuat pada pencatatan penjualan di toko fisik. *Keterbatasan*: terbatas pada channel POS sendiri; tidak menjadi *hub* lintas channel; mahal untuk usaha mikro (Rp 200rb–1jt+/bulan); fokus operasional kasir, bukan analitik mendalam.

**Kategori 3 — Tools BI enterprise** (Jurnal/Mekari, Looker, Power BI): analytics luas. *Keterbatasan*: mahal, kompleks, tidak dirancang untuk UMKM mikro yang butuh insight sederhana langsung pakai.

**Pembeda PULSA:**

1. **Konsolidasi multi-channel sebagai default** — QRIS, POS, marketplace, transfer, manual semuanya masuk satu ledger. Belum ada solusi UMKM Indonesia yang menjadikan ini fitur inti.
2. **Business Health Score 5 komponen** — bahasa universal untuk kesehatan usaha berbasis data transaksi nyata, dengan metodologi terstruktur. Skor merchant memang dipakai sebagian pemain *lending*, tetapi belum dikemas sebagai metrik kesehatan tunggal yang dirancang khusus untuk operasional UMKM mikro.
3. **Fokus eksklusif segmen UMKM mikro & kecil** — dirancang khusus untuk usaha dengan omzet Rp 5–100 juta/bulan, bukan adaptasi enterprise tools; UX, harga, dan feature set match dengan kebutuhan riil segmen ini.
4. **Bahasa UMKM-native** — rekomendasi konkret seperti "Tambah stok ayam bakar 20% di Jumat", bukan dashboard generik yang harus diinterpretasi sendiri.
5. **Lightweight & terjangkau** — model *freemium*, akses via PWA tanpa instalasi native, biaya operasional rendah untuk pengguna.

**Penajaman dari proposal sebelumnya**: PULSA sekarang punya *prototype interaktif* yang dapat dieksperimentasikan publik, dengan 5 komponen Health Score terdefinisi konkret beserta bobot dan metode komputasinya. Ini bukti bahwa diferensiasi PULSA realistis untuk dibangun, bukan sekadar klaim konseptual.

### Technological / Method Innovation *(maks. 240 kata)*

**Business Health Score: metodologi inti.** PULSA mengukur kesehatan usaha melalui 5 komponen yang diskor 0–100, dikombinasikan dengan bobot tertimbang:

| Komponen | Bobot | Metode |
|---|---|---|
| Revenue Stability | 25% | 1 − Coefficient of Variation harian, normalisasi terhadap median industri |
| Transaction Frequency | 20% | Rasio transaksi/hari vs benchmark sektor (F&B, retail, jasa) |
| Customer Diversity | 15% | Distribusi unique customer, indeks konsentrasi (Herfindahl-like) |
| Channel Diversity | 15% | Jumlah channel aktif + distribusi revenue per channel |
| Growth Trend | 25% | Slope regresi linear revenue 30 hari, normalisasi industri |

Skor akhir = Σ (komponen × bobot). Klasifikasi: 80–100 (A, Sangat Baik), 65–79 (B, Baik), 50–64 (C, Cukup), <50 (D, Perlu Perhatian).

**Contoh** (warung kopi, Rp 18 jt/bulan): Revenue Stability 80, Frequency 70, Customer Diversity 60, Channel Diversity 80, Growth 80 → 80(0,25)+70(0,20)+60(0,15)+80(0,15)+80(0,25) = **75 (B, Baik)**.

**Algoritma analitik & rekomendasi:**

*Analytics layer*: *time-series aggregation* (harian/mingguan), *moving average* untuk *smoothing*, *heatmap density* untuk peak hours, dekomposisi pola weekday vs weekend.

*Rule-based recommendation engine* (MVP): aturan seperti "if revenue Hari X > avg + 1σ → boost stock 20%", diturunkan dari pola historis pengguna dan dapat dikalibrasi per kategori usaha.

*Future ML*: *gradient boosting* (XGBoost/LightGBM) untuk prediksi risiko dan *clustering* (k-means/HDBSCAN) untuk segmentasi UMKM sejenis sebagai *peer benchmark*.

Kombinasi *statistik klasik + ML ringan* dipilih karena: (a) dapat dijelaskan ke pengguna UMKM (penting untuk *trust*), (b) realistis dengan tim kecil dan data yang masih tumbuh, (c) dapat ditingkatkan ke model lebih kompleks ketika volume data sudah cukup.

### Creativity in Implementation *(maks. 250 kata)*

PULSA menerapkan beberapa pendekatan kreatif dalam distribusi, monetisasi, dan engagement.

**Distribusi via ekosistem yang sudah ada:**
- Kerja sama dengan asosiasi UMKM daerah dan komunitas (HIPMI, KUMKM, komunitas kuliner kota) untuk *onboarding* batch dan testimoni komunitas.
- Program *referral* antar UMKM dengan insentif fitur premium bulan tambahan.

**Monetisasi berlapis:**
- *Freemium individual* — fitur inti (dashboard, Health Score, 3 rekomendasi/minggu) gratis untuk UMKM tunggal.
- *Premium subscription* — Rp 49.000/bulan (Individual: export laporan, rekomendasi tanpa batas) atau Rp 199.000/bulan (Bisnis: multi-cabang, integrasi API, multi-user role).
- *Institutional licensing* — agregator pembayaran, asosiasi UMKM, koperasi, atau pemda membayar lisensi untuk dashboard *portfolio* merchant binaan (data anonim) atau integrasi analytics agregat.

**Engagement berbasis kebiasaan UMKM:**
- *Health Score badge* — dapat di-*share* ke media sosial atau profil bisnis (gamifikasi *soft*).
- *Onboarding terpandu* dengan sample dataset agar pengguna langsung melihat manfaat sebelum *upload* data sendiri.
- *Templated business goal* — pengguna memilih target (mis. naik omzet 10% bulan depan), rekomendasi disesuaikan dengan target.
- *Notifikasi insight in-app & email mingguan* — push insight singkat ke pengguna tanpa harus aktif buka dashboard.

Kreativitas ini memanfaatkan komunitas yang sudah dikenal UMKM dan kanal komunikasi familiar (email, in-app) sehingga PULSA tidak terasa sebagai platform baru yang harus dipelajari dari nol.

---

## 5. TECHNICAL VALIDATION

### System Architecture *(maks. 250 kata)*

Arsitektur PULSA dirancang modular berbasis layanan, dengan komponen utama yang dapat diskalakan terpisah.

**Frontend layer**: Aplikasi web responsif (HTML/CSS/JS, opsi migrasi ke framework reaktif di tahap lanjut) dengan PWA untuk akses mobile tanpa instalasi native. Dashboard terdiri dari navigasi, KPI cards, visualisasi chart, tabel transaksi, dan modul ingestion.

**Backend API**: Layanan REST yang menangani autentikasi (JWT + role-based access control), CRUD transaksi, query analytics, dan endpoint khusus untuk Business Health Score serta rekomendasi.

**Ingestion service**: Modul khusus parsing file (CSV/XLSX), validasi schema, deduplikasi referensi, normalisasi kategori produk, dan staging ke ledger. Mendukung input manual via form; siap menerima webhook/API agregator pembayaran di tahap lanjut.

**Ledger database**: PostgreSQL relasional sebagai *single source of truth* — tabel inti `users`, `businesses`, `transactions`, `products`, `categories`, `channels`, `daily_aggregates`.

**Analytics engine**: Pipeline Python (pandas/numpy) menjalankan agregasi terjadwal harian/mingguan untuk metrik: tren omzet, peak hours, performa produk, stabilitas pendapatan, diversitas channel.

**AI/ML service**: Komputasi Business Health Score (5 komponen, bobot tunable) dan rekomendasi berbasis rule + regresi sederhana untuk MVP; dapat diperluas ke gradient boosting/clustering.

**Infrastruktur pendukung**: object storage (S3-compatible) untuk file upload mentah; Redis cache untuk percepatan dashboard query; job scheduler untuk pipeline analytics.

**Alur sistem**: pengguna → Frontend → API → Ingestion → Ledger → Analytics Engine → AI Service → API → Dashboard. Komponen terpisah memungkinkan setiap layanan di-scale independen seiring pertumbuhan volume.

```mermaid
flowchart LR
    UMKM([UMKM Owner])
    Web[Web App / PWA]
    API[Backend API<br/>Auth + RBAC]
    Ing[Ingestion Service<br/>CSV / XLSX / Manual]
    Storage[(Object Storage<br/>raw files)]
    DB[(PostgreSQL<br/>Ledger Database)]
    Analytics[Analytics Engine<br/>Aggregation + Metrics]
    AI[AI / ML Service<br/>Health Score + Recs]
    Cache[(Redis Cache)]

    UMKM --> Web
    Web <--> API
    API --> Ing
    Ing --> Storage
    Ing --> DB
    DB --> Analytics
    Analytics --> DB
    DB --> AI
    AI --> DB
    API <--> Cache
    API --> DB

    External[Future:<br/>Aggregator / Marketplace API] -.-> Ing
```

### Data & Feasibility *(maks. 200 kata)*

Data utama yang dibutuhkan PULSA adalah transaksi UMKM dengan field minimum: waktu, nominal, channel pembayaran, referensi transaksi, dan kategori produk. Sumber data dirancang multi-jalur agar adopsi tidak terhambat satu integrasi.

**Tersedia di tahap MVP** (realistis tanpa kerja sama institusional):
- *Export file* dari aplikasi QRIS issuer (BCA, Mandiri, BRI, dll.) dalam CSV/XLSX
- *Export marketplace* (Shopee, Tokopedia) dari seller dashboard
- *Mutasi rekening* CSV dari internet banking
- *Input manual* via form untuk transaksi tunai

**Membutuhkan kerja sama** (tahap lanjut):
- API agregator pembayaran (Midtrans, Xendit, atau QRIS aggregator) untuk integrasi *real-time*
- API marketplace untuk sinkronisasi otomatis

Kualitas data dijaga melalui validasi schema, deduplikasi berbasis referensi transaksi, normalisasi kategori produk (mapping ke taksonomi standar), dan deteksi anomali dasar (outlier nilai transaksi). Pada tahap awal, *dataset simulasi* yang menyerupai pola transaksi UMKM nyata dapat digunakan untuk demo dan pengujian.

Pendekatan multi-source membuat PULSA tidak bergantung pada satu kanal, sehingga profil usaha yang dihasilkan tetap representatif. Data input pengguna pertama dapat sepenuhnya berbasis file/manual tanpa ketergantungan API eksternal — realistis untuk fase peluncuran.

### Security & Compliance *(maks. 200 kata)*

PULSA menempatkan keamanan dan kepatuhan sebagai bagian inti, bukan *add-on*.

**Perlindungan data pribadi**: Patuh pada **UU No. 27/2022 (Perlindungan Data Pribadi)**. Konsen pengguna diperoleh eksplisit pada *onboarding*; *opt-in* terpisah untuk pemrosesan analitik agregat anonim. Prinsip *data minimization* — hanya field yang dibutuhkan analytics yang disimpan.

**Autentikasi & otorisasi**: JWT-based authentication; *role-based access control* (RBAC) memisahkan tier owner, staff, dan admin. Password disimpan dengan hashing bcrypt + salt.

**Enkripsi**: Data *in transit* dengan TLS 1.3 (HTTPS); data sensitif *at rest* (kredensial, identitas pengguna) dienkripsi AES-256. *Object storage* untuk file upload mengikuti enkripsi penyedia.

**Retensi & anonimisasi**: Data transaksi disimpan default 24 bulan, dengan opsi pengguna untuk *request* penghapusan. Data agregat untuk *benchmarking* ekosistem dianonimkan sebelum diproses.

**Audit & monitoring**: Log akses dan perubahan data tersimpan; sistem mendeteksi anomali login (brute force, IP unusual).

**Kepatuhan operasional**: Selaras dengan pedoman OJK (POJK 3/2024) bila ke depan PULSA berperan dalam ekosistem sektor keuangan; opsi registrasi *regulatory sandbox* untuk validasi *compliance* sebelum *scale up*.

**Quality assurance & resiliensi**: target *unit test coverage* ≥70% pada modul *ingestion*, *Health Score engine*, dan analytics; *integration test* untuk parser CSV per *issuer*. *Backup*: snapshot harian PostgreSQL dengan retensi 30 hari; **RPO ≤ 24 jam, RTO ≤ 4 jam** untuk fase MVP.

### Implementation Readiness (MVP) *(maks. 300 kata)*

**Scope MVP (12 bulan)** dipilih untuk memvalidasi nilai inti tanpa kompleksitas integrasi.

*Masuk MVP:*
1. **Ingestion**: Upload file CSV/XLSX (QRIS issuer, marketplace, bank statement) + input manual via form.
2. **Ledger usaha**: Konsolidasi multi-channel ke satu database transaksi terstruktur.
3. **Dashboard analytics**: KPI utama, tren revenue, peak hours heatmap, performa produk, distribusi channel.
4. **Business Health Score**: 5 komponen (Revenue Stability, Transaction Frequency, Customer Diversity, Channel Diversity, Growth Trend), skor 0–100.
5. **Rekomendasi AI**: Rule-based + regresi sederhana, 3–5 rekomendasi mingguan dengan prioritas.
6. **Mobile access via PWA**: Responsif, *installable* tanpa native development.
7. **User management**: Registrasi, login, RBAC dasar.

*Out-of-scope MVP:* Integrasi API *real-time* agregator/marketplace, native mobile app, multi-cabang, advanced ML (gradient boosting/clustering), integrasi metrik konten media sosial (roadmap V2).

**Tahapan 12 bulan:**
- **Bulan 1–2**: Refinement arsitektur, schema database final, CI/CD setup
- **Bulan 3–5**: Build ingestion + ledger + dashboard inti
- **Bulan 6–7**: Health Score engine + rekomendasi rule-based
- **Bulan 8–9**: PWA + UX polish + *closed beta* 20 UMKM
- **Bulan 10–12**: Iterasi feedback + *open beta* 50–150 UMKM

**Kebutuhan tim**: 2 *founders* inti (Product Lead & Software/Data Engineer) menjalankan Bulan 1–8; rencana hire 3 anggota (UI/UX, marketing lead community/content, additional engineer) pasca pre-seed pada Bulan 9–12, dengan opsi QA freelance on-demand. **Model kompensasi *equity-heavy* + *cash salary* lean (avg ~Rp 5jt/orang/bln) memungkinkan bootstrap efisien pada fase MVP; peningkatan cash pasca-seed funding.**

**Tech stack**: Frontend HTML/CSS/JS + PWA, Backend Python (FastAPI), PostgreSQL, Redis, S3-compatible storage, cloud tier *startup* (AWS/GCP/DigitalOcean).

**Risiko teknis utama & mitigasi:**
- *Variasi format export antar issuer QRIS* → parser dengan template per channel + manual mapping fallback
- *Kualitas input manual* → validasi inline, fitur edit, dan deteksi anomali nilai
- *Skalabilitas analytics pipeline* saat user tumbuh → arsitektur modular memungkinkan upgrade ke job queue terdistribusi atau data warehouse
- *Adopsi awal lambat* → strategi *closed beta* dengan insentif komunitas dan onboarding terpandu

---

## 6. BUSINESS MODEL & SCALABILITY

### Value Proposition *(maks. 220 kata)*

PULSA menyajikan nilai berbeda untuk dua tipe stakeholder utama.

**Untuk UMKM (pengguna langsung):**
- *Hemat waktu*: konsolidasi otomatis transaksi multi-channel menghemat ±2 jam/minggu pencatatan manual.
- *Insight yang langsung pakai*: bahasa sederhana ("Jam tersibuk: 12:00–13:00", "Tambah stok ayam bakar 20% di Jumat") menggantikan dashboard generik yang harus diinterpretasi sendiri.
- *Akses tools setara enterprise*: peak hours, analisis stabilitas omzet, rekomendasi AI tersedia tanpa biaya tinggi.
- *Self-assessment kesehatan operasional*: Business Health Score memberi gambaran objektif tentang kondisi bisnis dengan benchmark sektor.
- *Kemudahan akses*: web + PWA, tanpa instalasi native, *free* untuk fitur inti.

**Untuk mitra institusional (agregator pembayaran, asosiasi UMKM, koperasi, pemda):**
- *Dashboard portfolio*: ringkasan kesehatan merchant binaan (data anonim) untuk monitoring & strategi pendampingan.
- *Distribusi value-add*: dapat menawarkan PULSA sebagai fitur tambahan ke merchant tanpa membangun analytics sendiri.
- *Insight agregat sektoral*: data agregat anonim untuk pemetaan ekonomi mikro daerah — input kebijakan & program intervensi.

Kedua sisi ini saling mendorong. Makin banyak UMKM yang aktif, makin kaya insight agregat yang bisa kami tawarkan ke mitra institusional. Sebaliknya, distribusi lewat mitra mempercepat UMKM baru bergabung.

### Model Revenue / Funding *(maks. 200 kata)*

PULSA menggunakan **model freemium B2C + micro B2B**: revenue pengguna akhir (UMKM) + revenue institusional skala mikro (agregator/asosiasi/pemda).

**Sumber pendapatan utama** *(pricing divalidasi survei N=7: 57,1% WTP Rp 50–100rb/bln, 0% pilih "hanya gratis")*:

1. **Premium individual** (Rp 49rb/bln): export laporan, rekomendasi tanpa batas, peer benchmark sektor, notifikasi insight mingguan.
2. **Premium bisnis** (Rp 199rb/bln): multi-cabang, multi-user role, *priority support*, akses modul roadmap V2 (analisis konten medsos).
3. **Institutional licensing** (Rp 5–50 jt/bln): agregator, asosiasi UMKM, koperasi, pemda untuk dashboard *portfolio* merchant binaan + insight agregat sektoral.

**Pendanaan & tahap funding** (right-sized untuk lean startup 2 *founders* + cloud credits):
- *Pre-seed* (Y1, ±Rp 150–250 jt): bootstrap founders + hibah BI/Kemenkop UKM/akselerator + *Google for Startups* / AWS Activate (±12 bln runway infra). MVP + closed beta 150 UMKM.
- *Seed* (Y2, ±Rp 1–2 M): angel/VC ticket kecil → scale 1.500 user + 1–2 mitra distribusi awal.
- *Series A* (Y3+, ±Rp 5–10 M): ekspansi nasional 7.500+ user + ML lanjutan.

Model berkelanjutan: revenue institusional + Premium *scale* menutupi *freemium* UMKM mikro; cloud credits menahan biaya infra hingga revenue stabil.

### Cost Structure & Sustainability *(maks. 200 kata)*

**Komponen biaya utama (asumsi *lean*, *cloud-credit-heavy*):**

1. **Infrastruktur**: Y1 **±Rp 0–500rb/bln** (Cloud Run + Supabase/Neon + Cloudflare R2 — semua *free tier*); Y2 Rp 1–3 jt/bln; Y3 Rp 5–15 jt/bln (skala 22 jt transaksi/bln).

2. **Tim pengembangan** (*lean & equity-heavy*): Y1 2 *founders* (~Rp 5 jt/orang + equity) ≈ **Rp 10 jt/bln**. Y2 tim 5 ≈ **Rp 25 jt/bln**. Y3 tim 8–10 ≈ **Rp 40–50 jt/bln**.

3. **Akuisisi & community building**: Y1 **Rp 0–3 jt/bln** (organik, content founders); Y2 Rp 10–25 jt/bln; Y3 Rp 25–50 jt/bln.

4. **Compliance & legal**: Y1 **Rp 5–10 jt** (PT/CV + *privacy-by-design* in-product: penghapusan data, *consent flow*, audit log — tanpa lawyer fee).

5. **Customer support**: Y1 founders; Y2 Rp 3–8 jt/bln; Y3 Rp 10–25 jt/bln.

**Unit economics & path ke keberlanjutan finansial:**

*Blended ARPU* ~Rp 55rb/bln; *CAC* via mitra <Rp 30rb; *gross margin* ≥85% (infra *free-tier heavy*). *Break-even operasional* **Tahun 3**: (a) 3–5 *institutional* (Rp 700jt–1,2M/thn), (b) Premium 8% × 7.500 ≈ Rp 350jt, (c) Bisnis 1% ≈ Rp 180jt — total ≈ Rp 1,2–1,7M vs *operating cost* ≈ Rp 1,0–1,7M/thn. Y1–2 didanai hibah + cloud credits + pre-seed. *Sensitivity*: churn 15% geser break-even ke Q3 Y4 — dimitigasi via gamifikasi Health Score & onboarding terpandu.

### Scalability *(maks. 170 kata)*

Skalabilitas PULSA didesain dari arsitektur, distribusi, hingga model bisnis.

**Faktor pendukung:**
- *Arsitektur modular*: ingestion, ledger, analytics, AI service dapat di-*scale* independen.
- *Cloud-native*: *auto-scaling*, *managed database*, *object storage* memungkinkan pertumbuhan tanpa *rewrite* signifikan.
- *Distribusi via mitra*: setiap *institutional partnership* membawa ratusan hingga ribuan UMKM dalam satu kerja sama — jauh lebih efisien daripada akuisisi individual.
- *Onboarding low-friction*: file *upload* dan input manual berarti UMKM dapat mulai pakai tanpa menunggu integrasi sistem.

**Persiapan untuk skala lebih besar:**
- Migrasi ke *job queue* + *worker* terdistribusi (Celery/RQ) ketika volume transaksi >10 juta/bulan.
- *Data warehouse* (BigQuery/Snowflake) untuk analytics agregat lintas ribuan UMKM.
- *ML model retraining pipeline* berkala saat data sudah cukup.
- *Multi-region deployment* ketika basis pengguna ekspansi ke Indonesia Timur.

Model *freemium + institutional* memastikan skala UMKM gratis didanai oleh segmen institusional yang membayar — *unit economics* tetap sehat saat pengguna tumbuh.

### Partnership & Distribution *(maks. 170 kata)*

PULSA dirancang dengan **strategi distribusi berbasis mitra** untuk mempercepat adopsi tanpa biaya akuisisi besar.

**Mitra distribusi (kanal pengguna):**
- *QRIS aggregator / PSP* (Midtrans, Xendit, Faspay, QRIS issuer bank) — menawarkan PULSA sebagai *value-add* bagi merchant binaan.
- *E-wallet merchant program* (DANA, OVO, GoPay) untuk merchant UMKM.
- *Asosiasi & komunitas UMKM* (HIPMI, KADIN, asosiasi kuliner, Komunitas UKM Naik Kelas) untuk *batch onboarding*.
- *Marketplace seller program* (Shopee, Tokopedia) via pendampingan seller.

**Mitra ekosistem micro B2B:**
- *Platform supplier/vendor UMKM* (Ralali, distribusi grosir lokal) — integrasi rekomendasi pengadaan bahan baku berbasis pola pengeluaran.
- *Vendor POS lokal* (Wahyoo, MokaPOS) — partnership data sync sebagai komplemen, bukan kompetisi.
- *Lembaga pelatihan & inkubator UMKM* (BLK, kampus, akselerator) — co-distribusi via program literasi data.

**Mitra regulator & ekosistem:**
- *Bank Indonesia* — selaras dengan Blueprint SPI 2025–2030
- *OJK* — opsional *regulatory sandbox* (POJK 3/2024) bila ke depan masuk ranah fintech
- *Kemenkop UKM* — program digitalisasi UMKM nasional

Peran mitra dirancang *win-win*: PULSA mendapat distribusi, mitra mendapat *value-add* untuk merchant/anggota.

---

## 7. MARKET VALIDATION

### Problem–Market Fit *(maks. 120 kata)*

Masalah ini mendesak karena tiga konsekuensi langsung yang dialami UMKM. Pertama, **keputusan bisnis suboptimal**: tanpa pemahaman pola transaksi, UMKM diperkirakan kehilangan revenue 5–10% dari peluang yang tidak teridentifikasi (jam tersibuk, produk terlaris, alokasi promo). Kedua, **kesenjangan akses tools BI**: solusi analitik kelas enterprise berbiaya jutaan rupiah per bulan — di luar jangkauan UMKM mikro dengan omzet Rp 5–50 juta/bulan. Ketiga, **kerentanan operasional**: UMKM yang tidak mengenali pola bisnisnya lebih rentan terhadap perubahan musiman dan guncangan ekonomi. Bagi UMKM ini bukan masalah teoretis. Setiap minggu ada ongkos nyata yang terus berulang: revenue yang bocor, waktu yang terbuang, dan posisi yang makin tertinggal dari pesaing yang lebih besar.

### Evidence of Demand *(maks. 220 kata)*

Bukti kebutuhan PULSA berasal dari tiga lapis: data makro nasional, survei kuantitatif awal, dan wawancara mendalam.

**Data makro (BI, OJK, Kemenkop UKM)**: Indonesia punya **64,2 juta UMKM** (61,07% PDB). Per April 2026, **45,3 juta merchant terdaftar QRIS** — mayoritas UMKM; transaksi QRIS tumbuh **+108% YoY** (Bank Indonesia, 2026). Hanya **25,5 juta UMKM** *go digital* penuh — gap menerima vs memanfaatkan data. **Literasi keuangan 65,43%, inklusi 75,02%** (OJK SNLIK 2024) — perlu tools sederhana & terjangkau.

**Survei kuantitatif (N=7, indikatif awal — Mei 2026)** lintas F&B, retail, digital product di Bandung/Cianjur/Bekasi/Nasional:
- **100% terima QRIS**; **0% memilih "sudah cukup terbantu"** dengan tools analitik saat ini
- **57,1% mengandalkan ingatan / belum pernah menganalisis** produk terlaris secara serius
- **85,7% memilih "rekomendasi produk untuk dipromosikan"** sebagai fitur paling dibutuhkan
- **85,7% bersedia setup via upload Excel/CSV** — validasi strategi *ingestion* PULSA
- **57,1% WTP Rp 50.000–100.000/bulan**; **0% memilih "hanya jika gratis"** — validasi pricing Premium
- **Mayoritas menulis "kenaikan omzet"** sebagai goal 6 bulan ke depan

**Wawancara mendalam (pemilik kafe, Mei 2026)**: tools eksisting belum cukup; pengguna menginginkan rekomendasi dalam bahasa natural seperti *"tambah stok ayam bakar tanggal 17–18 karena ada reservasi 30 orang"* (verbatim) — bukan dashboard generik.

Triangulasi tiga lapis ini menunjukkan *demand* terdokumentasi makro, sinyal positif kuantitatif, dan arah kualitatif spesifik. Survei putaran 2 (N ≥ 30) berjalan. *Detail*: `attachments/survey_summary.md`.

### Target Market *(maks. 150 kata)*

**Target market utama PULSA:**

UMKM sektor F&B (kuliner, kafe, warung) dan retail (toko kelontong, fashion, kosmetik) di kota Tier 1–2 (Jabodetabek, Bandung, Yogyakarta, Surabaya) yang:
- Memiliki omzet bulanan Rp 5–100 juta
- Sudah menerima pembayaran QRIS atau marketplace ≥1 channel
- Dijalankan oleh *owner-operator* atau tim kecil (1–10 orang)

**Konteks penggunaan:** UMKM membuka dashboard PULSA mingguan untuk meninjau performa, harian untuk cek tren omzet & stok, dan saat menyiapkan promosi atau evaluasi kampanye marketing.

**Sizing:**
- **TAM**: 64,2 juta UMKM Indonesia
- **SAM**: 40,92 juta UMKM aktif QRIS (95,74% merchant QRIS)
- **SOM tahun 1**: 150 UMKM F&B/retail Bandung & Jabodetabek (segmen siap secara perilaku digital)
- **SOM tahun 3**: 7.500 UMKM (ekspansi sektor + Tier 2)

Segmentasi awal sengaja dipersempit untuk memvalidasi *product-market fit* dengan tingkat fokus tinggi sebelum ekspansi.

### Adoption Readiness *(maks. 180 kata)*

**Faktor pendukung adopsi:**
- Penetrasi *smartphone* Indonesia **68,1% nasional** dengan **83% di wilayah urban** (Puslitbang Aptika Kominfo, 2025); adopsi QRIS masif di merchant UMKM — infrastruktur sudah siap di target segmen.
- UMKM familiar dengan aplikasi digital harian (WhatsApp, marketplace, e-wallet).
- Indeks inklusi keuangan **75,02%** (OJK SNLIK 2024) — UMKM secara umum sudah masuk ekosistem keuangan formal.

**Hambatan adopsi:**
- Indeks literasi keuangan **65,43%** — pemahaman atas konsep "analisis bisnis berbasis data" masih terbatas.
- *Behavior change* dari intuisi ke keputusan berbasis data membutuhkan pembiasaan.
- Kekhawatiran privasi / *data sharing* pada UMKM yang belum terbiasa.
- Keterbatasan waktu UMKM yang fokus pada operasional sehari-hari.

**Strategi mitigasi:**
- Bahasa UI sederhana, visualisasi langsung pakai.
- *Sample dataset* + *onboarding* terpandu — pengguna langsung melihat manfaat.
- *Notifikasi insight mingguan via email & in-app* — informasi mengalir tanpa harus aktif buka aplikasi.
- *Training* via komunitas & asosiasi UMKM untuk mengurangi *cognitive load*.
- Transparansi data + *opt-in* eksplisit untuk analitik agregat anonim.

**Validasi awal survei (N=7, Mei 2026)**: 85,7% bersedia setup via *upload* Excel/CSV — selaras dengan jalur *ingestion* MVP; 28,6% hanya punya <5 menit/hari untuk pencatatan, memperkuat keharusan UI *low-friction*. *Adoption pathway* PULSA realistis.

---

## 8. PROGRESS UPDATE & ATTACHMENT

### Progress Since the 1st Submission *(maks. 150 kata)*

Sejak submission pertama, PULSA mengalami perkembangan konkret pada empat aspek utama:

1. **Prototype interaktif**: web 7 modul (login, dashboard, transaksi, analytics, health score, rekomendasi, ingestion) live di *https://handokobeni.github.io/pulsa-demo/*.

2. **Metodologi Business Health Score**: dari konsep abstrak menjadi 5 komponen berbobot (Revenue Stability 25%, Transaction Frequency 20%, Customer Diversity 15%, Channel Diversity 15%, Growth Trend 25%) dengan metode komputasi spesifik.

3. **Target dampak realistis**: berbasis kapasitas tim 2 *founders* — 150 UMKM tahun 1 → 7.500 tahun 3, dengan 16 KPI kuantitatif dalam 4 kategori.

4. **Validasi pasar awal**: survei putaran 1 selesai (N=7) — 100% terima QRIS, 57,1% WTP Rp 50–100rb/bulan, 85,7% memilih *upload* file; melengkapi 1 wawancara mendalam pemilik kafe.

Penyempurnaan teknis (arsitektur modular 8 komponen) dan identifikasi mitra (Midtrans, Xendit, asosiasi kuliner, supplier B2B, vendor POS lokal) menyertai keempat capaian utama tersebut.

### Current Status *(maks. 50 kata)*

**Interactive prototype** — Aplikasi web fungsional 7 modul telah dibangun dan dapat diakses publik di **https://handokobeni.github.io/pulsa-demo/**. *Source code* tersedia di **https://github.com/handokobeni/pulsa-demo**. Tahap berikutnya: *closed beta* dengan UMKM pilot dan integrasi backend nyata.

### Attachment

Lampiran yang menyertai proposal ini:

1. **Link prototype interaktif** — https://handokobeni.github.io/pulsa-demo/
2. **Source code repository** — https://github.com/handokobeni/pulsa-demo
3. **Screenshot prototype** — 7 halaman utama:
   - `01_login.png` — Halaman login & register
   - `02_dashboard.png` — Dashboard dengan KPI, tren revenue, donut channel, produk terlaris, rekomendasi AI
   - `03_transactions.png` — Tabel transaksi multi-channel dengan filter & pagination
   - `04_analytics.png` — Peak hours heatmap, performa produk, revenue per channel
   - `05_health_score.png` — Ring score + breakdown 5 komponen (Revenue Stability, Tx Frequency, Customer Diversity, Channel Diversity, Growth Trend) + tombol Bagikan Skor
   - `06_recommendations.png` — Daftar rekomendasi AI terklasifikasi prioritas
   - `07_ingestion.png` — Upload file CSV/XLSX, input manual, riwayat import
4. **Diagram sistem**:
   - `architecture_diagram.png` / `.svg` — arsitektur teknis (Section 5)
   - `data_flow_diagram.png` / `.svg` — alur data input → processing → analytics → output (Section 3)
5. **Survei validasi pasar (kuantitatif, putaran 1 selesai N=7)** — ringkasan struktur di `attachments/survey_summary.md`; instrumen survei: [Google Form Survei Kebutuhan UMKM](https://docs.google.com/forms/d/e/1FAIpQLSc7b2UDNqrd__QBGXGd0m390mDZvJ2xflkKPA90D2fObBhPcQ/viewform); putaran 2 menuju N ≥ 30 sedang berjalan.
6. **Dokumen referensi**:
   - Spesifikasi metodologi Business Health Score (komponen, bobot, formula)
   - Data sumber dukungan (BI, OJK, Kemenkop UKM) — referensi di bawah

---

## REFERENSI DATA (untuk Section 7 Market Validation)

1. **Bank Indonesia** — Statistik QRIS 2026: 45,3 juta merchant terdaftar per April 2026 (target BI "17-8-45": 17 miliar transaksi, 8 negara cross-border, 45 juta merchant); transaksi QRIS tumbuh +108,43% YoY pada April 2026; mayoritas merchant adalah UMKM. Sumber: situs resmi Bank Indonesia (bi.go.id), pemberitaan Infobanknews/Voi.id Q1–Q2 2026, statistik ASPI Indonesia (aspi-indonesia.or.id/statistik-qris/).
2. **OJK** — Survei Nasional Literasi dan Inklusi Keuangan (SNLIK) 2024: indeks literasi 65,43%, indeks inklusi 75,02%.
3. **OJK** — Roadmap Pengembangan UMKM & Roadmap Perusahaan Pembiayaan 2024–2028; *credit gap* UMKM per 2023 ±Rp 2.400 triliun (per EY Indonesia × OJK, kebutuhan Rp 4.300T vs realisasi Rp 1.900T). *Konteks ekosistem makro; PULSA berperan di sisi pemanfaatan data alternatif, bukan penyaluran kredit*.
4. **Kementerian Koperasi & UKM** — Statistik UMKM Indonesia: 64,2 juta UMKM, kontribusi 61,07% PDB, 25,5 juta UMKM "go digital" (2025).
5. **International Finance Corporation (IFC)** — MSME Finance Gap Report 2024: US$234 miliar.
6. **Bank Indonesia** — Blueprint Sistem Pembayaran Indonesia 2025.
7. **Puslitbang Aptika Kominfo (2025)** — Penetrasi smartphone Indonesia 68,1% nasional, 83% di wilayah urban.
