# 3RD SUBMISSION PROPOSAL — DIGDAYA x HACKATHON 2026
# PULSA: AI Financial Intelligence untuk UMKM Berbasis Data Transaksi

> Disusun mengikuti Buku Panduan 3rd Submission Proposal. Penilaian: Video 35% + Proposal 65%.
> Kriteria: Use Case Clarity · Algorithm Quality & UX · Implementation Feasibility · Team Readiness · Complexity · Business Plan & ROI.

---

## A. TEAM IDENTITY

**Team ID:** P0670
**Team Name:** 404 Inovators

**Final Solution Title:**
PULSA — AI Financial Intelligence untuk UMKM Berbasis Data Transaksi

**Problem Statement:**
Peningkatan Produktivitas, Ketahanan Pangan, dan Penciptaan Lapangan Kerja

**Sub-Problem Statement:**
Inklusi Ekonomi (UMKM)

### Final Team Composition *(maks. 100 kata)*

| Peran | Nama | Tanggung jawab utama |
|---|---|---|
| Product Lead / Full-Stack Engineer | Beni Handoko | Strategi produk, arsitektur sistem, full-stack development, UX, validasi UMKM, business model |
| Software Engineer / Data Engineer | Moch Arsya Adzma Syahputra | Backend, ingestion pipeline, analytics engine, implementasi Business Health Score |

Tidak ada perubahan komposisi inti sejak 2nd submission. Tim tetap dua *founder* berlatar *engineering* dan *data*. Beberapa peran masih dirangkap (Product & Business pada Product Lead) — disadari sebagai gap dan dimitigasi lewat advisor industri serta rencana *hire* UI/UX dan marketing/community lead pasca pre-seed.

### Final Solution Summary *(maks. 150 kata)*

PULSA membantu pemilik UMKM F&B dan retail mikro mengubah data transaksi digital yang tersebar menjadi keputusan bisnis. Aplikasi menyatukan transaksi multi-channel (QRIS, marketplace, transfer, tunai) ke satu *ledger* usaha melalui *upload* CSV/XLSX dan input manual, lalu menyajikan insight harian, **Business Health Score** (skor 0–100 dari 5 komponen), dan rekomendasi *actionable* dalam bahasa UMKM (mis. "tambah stok ayam bakar 20% di Jumat"). Diakses via web/PWA tanpa instalasi, gratis untuk fitur inti. Saat ini PULSA berstatus **prototype interaktif 7 modul yang sudah dapat diakses publik**, dengan backend, *ingestion* nyata, dan AI engine dalam tahap pengembangan. Manfaat utama: memangkas waktu rekap dari ±2 jam menjadi ≤15 menit/minggu dan membuka analitik setara *enterprise* dengan biaya di bawah Rp 100rb/bulan bagi usaha mikro.

### Progress and Change Log *(maks. 150 kata)*

Sejak 2nd submission:
1. **Target dampak direvisi konservatif** menjadi **30 → 200 → 1.000 UMKM** (Th-1/2/3), dari sebelumnya 150 → 7.500. *Alasan:* penyelarasan dengan kapasitas riil tim 2 orang dan *roadmap* akuisisi yang jujur — bukti, bukan ambisi.
2. **Strategi pertumbuhan dipertajam** menjadi *bottom-up* (komunitas → kemitraan → *self-serve*), dengan pembedaan tegas **registered vs aktif** dan *fallback* organik bila kemitraan tertunda.
3. **Status teknis diklarifikasi jujur:** prototype UI 7 modul berfungsi & publik, sementara backend, *ingestion*, dan AI engine masih sebagian simulasi/dalam pengembangan.
4. **Kuantifikasi nilai dipertajam:** ROI per-UMKM ±42×, nilai ekonomi agregat ±Rp 263 jt (Th-1) → ±Rp 8,75 M (Th-3).

Bukti pendukung: survei kuantitatif N=7 (sinyal WTP positif) dan 1 wawancara mendalam pemilik kafe tetap menjadi dasar validasi; survei putaran 2 (N≥30) berjalan.

---

## B. USE CASE CLARITY & ALIGNMENT WITH USER PROBLEM

### Validated User Problem and Evidence *(maks. 250 kata)*

**Siapa pengguna.** Pemilik-operator UMKM F&B (kafe, warung) dan retail mikro (kelontong, fashion, kosmetik) di kota Tier 1–2, omzet Rp 5–100 juta/bulan, menerima ≥2 kanal pembayaran (QRIS + tunai + marketplace), dijalankan tim 1–10 orang tanpa analis data.

**Kapan & kondisi masalah muncul.** Saat pemilik menyiapkan stok, jam buka, atau promo — keputusan diambil berbasis ingatan/intuisi karena data transaksi berhenti sebagai rekap.

**Penyebab utama.** (1) Data tersebar di banyak kanal tanpa konsolidasi; (2) aplikasi pembayaran hanya memberi ringkasan; (3) tools BI enterprise terlalu mahal (jutaan rupiah/bulan) & rumit; (4) tidak ada yang menerjemahkan pola transaksi ke keputusan harian.

**Dampak.** UMKM kehilangan estimasi 5–10% revenue dari peluang tak teridentifikasi (jam tersibuk, produk terlaris) dan membuang ±2 jam/minggu untuk rekap manual.

**Bukti terbaru.**
- *Survei kuantitatif (N=7, Mei 2026):* 100% terima QRIS; **0% merasa "cukup terbantu"** tools saat ini; 85,7% memilih "rekomendasi produk untuk dipromosikan"; 85,7% bersedia setup via *upload* CSV/XLSX; 57,1% WTP Rp 50–100rb/bln.
- *Wawancara mendalam (pemilik kafe):* menginginkan rekomendasi bahasa natural, bukan dashboard generik.
- *Data makro:* 64,2 jt UMKM (61% PDB), 45,3 jt merchant QRIS, hanya 25,5 jt *go digital* penuh — gap "menerima vs memanfaatkan" data (BI, Kemenkop UKM).

**Penajaman sejak 2nd submission:** akar masalah dipertegas sebagai *fragmentasi tools & data*, bukan sekadar "intuisi vs data" — UMKM sudah ingin menganalisis, tapi alatnya belum ada.

### End-to-End Use Case and Feature-to-Pain Mapping *(maks. 300 kata)*

**Use case utama: "Evaluasi mingguan & keputusan stok."**

| Tahap | Detail |
|---|---|
| **Kondisi awal** | Bu Sari (pemilik kafe) punya transaksi tercecer di QRIS + GoFood + tunai; tidak tahu produk/jam mana yang paling menguntungkan |
| **Pemicu** | Akhir minggu / notifikasi insight minguan / mau ambil keputusan stok |
| **Tindakan pengguna** | Login PULSA → modul *Ingestion* → *upload* file CSV/XLSX export QRIS/marketplace atau input manual transaksi tunai |
| **Input** | File transaksi (waktu, nominal, channel, referensi, kategori produk) |
| **Proses sistem** | *Parsing* → validasi schema → deduplikasi referensi → normalisasi kategori → simpan ke *ledger* → *analytics engine* (tren, peak hours, produk, channel) → *AI service* hitung Health Score + rekomendasi |
| **Output** | Dashboard KPI, tren revenue, *peak hours heatmap*, produk terlaris, donut channel; Health Score 0–100 + breakdown; daftar rekomendasi berprioritas |
| **Tindakan lanjutan** | Pengguna menandai rekomendasi "diterapkan" (mis. tambah stok produk X di hari Y) |
| **Hasil** | Keputusan stok/promo berbasis data; waktu rekap turun ke ≤15 menit; potensi uplift omzet |

**Feature-to-Pain Mapping** (masalah → fitur → proses → output → outcome):

1. **Data tersebar** → *Ingestion multi-channel* → konsolidasi ke 1 ledger → *single source of truth* → UMKM punya gambaran utuh.
2. **Tidak kenal pola bisnis** → *Analytics engine* → agregasi time-series → tren, peak hours, produk → kenal jam tersibuk & produk terlaris.
3. **Keputusan intuitif** → *Business Health Score + rekomendasi AI* → scoring 5 komponen + rule/regresi → skor + rekomendasi prioritas → keputusan terarah.
4. **Efektivitas marketing tak terukur** → *analisis kontribusi channel* → korelasi channel-revenue → breakdown channel → alokasi promo berbasis ROI (penajaman V2: metrik konten medsos).

### Operational Context, Solution Boundary, and Adoption *(maks. 200 kata)*

**Lingkungan penggunaan.** UMKM mengakses via browser/PWA, mingguan untuk evaluasi & harian untuk cek tren — tanpa instalasi native, ramah perangkat owner.

**Pihak terlibat & peran.** Owner (pengguna utama & pengambil keputusan); staf (input transaksi tunai, opsional); mitra distribusi (asosiasi/agregator) untuk *batch onboarding*.

**Yang sudah bisa dilakukan solusi.** Menampilkan dashboard analitik, Health Score, dan rekomendasi atas dataset transaksi (saat ini *sample/dummy*); *upload* file di prototype.

**Yang belum bisa.** Ingestion file nyata end-to-end, autentikasi/penyimpanan persisten, integrasi API real-time — masih dalam pengembangan.

**Ketergantungan.** Kualitas & format *export* transaksi per-issuer; kepatuhan UU PDP (consent eksplisit); kerja sama formal untuk API agregator/marketplace di tahap lanjut.

**Hambatan adopsi & mitigasi.** (1) *Upload* CSV terasa ribet bagi UMKM non-POS → onboarding terpandu + *sample dataset* + bantu upload pertama; framing "one-tap" sebagai goal Th-2. (2) Literasi data terbatas → bahasa UI sederhana, *outcome-paired copy*. (3) Kekhawatiran privasi → *opt-in* eksplisit & transparansi. (4) Waktu UMKM terbatas → notifikasi insight mingguan via email/in-app.

---

## C. IMPLEMENTATION FEASIBILITY

### Innovation Level *(maks. 50 kata)*

**Level 3 — Prototype, Validasi, atau Implementasi Awal.**
PULSA punya *functional prototype* 7 modul yang dapat diakses publik (UI, dashboard, Health Score, rekomendasi atas sample data) + validasi awal (survei N=7, 1 wawancara mendalam). Target berikutnya: backend & *ingestion* nyata serta *closed beta* dengan UMKM pilot.

### Current Technical Reality, Data, and Integration *(maks. 300 kata)*

**Pembedaan status jujur:**

**(1) Sudah berfungsi.**
- Prototype web **7 modul live & publik** (https://handokobeni.github.io/pulsa-demo/): login UI, dashboard (KPI, tren, donut channel, produk terlaris, rekomendasi), transaksi (tabel + filter + pagination), analytics (peak hours heatmap, performa produk, revenue/channel), Business Health Score (ring + breakdown 5 komponen), rekomendasi terklasifikasi, ingestion (UI upload + form manual).
- Logika komputasi Health Score & visualisasi berjalan di sisi *front-end* atas **sample dataset**.

**(2) Masih simulasi.**
- Data transaksi memakai *sample/dummy* yang menyerupai pola UMKM nyata; analytics & Health Score dihitung atas data ini untuk demonstrasi.

**(3) Sedang dikembangkan.**
- Backend API (FastAPI), *ingestion parser* CSV/XLSX nyata per-issuer, database PostgreSQL (*ledger*), autentikasi (JWT + RBAC), penyimpanan persisten.

**(4) Direncanakan.**
- Integrasi API agregator/marketplace (real-time), ML lanjutan (gradient boosting/clustering), multi-cabang, analisis konten media sosial.

**Data.** Field minimum: waktu, nominal, channel, referensi transaksi, kategori produk. Sumber tahap MVP (tanpa kerja sama institusional): *export* CSV/XLSX dari QRIS issuer, marketplace seller dashboard, mutasi bank, dan input manual. Kualitas dijaga via validasi schema, deduplikasi referensi, normalisasi kategori, deteksi anomali dasar.

**Integrasi.** MVP berbasis *file upload* + manual (tanpa ketergantungan API eksternal) — realistis untuk peluncuran. Tahap lanjut: webhook/API agregator.

**Keamanan, privasi, kepatuhan.** Patuh **UU No. 27/2022 (PDP)**: consent eksplisit, *data minimization*, *opt-in* terpisah untuk analitik agregat anonim. JWT + RBAC, hashing bcrypt, TLS in-transit, enkripsi data sensitif at-rest, log akses. Selaras pedoman OJK (POJK 3/2024) bila masuk ranah ITSK.

### MVP Execution and Deployment Plan *(maks. 250 kata)*

**Scope MVP (12 bulan) — fitur prioritas:**
1. Ingestion CSV/XLSX + input manual (nyata, end-to-end)
2. Ledger multi-channel (PostgreSQL)
3. Dashboard analytics (KPI, tren, peak hours, produk, channel)
4. Business Health Score (5 komponen)
5. Rekomendasi AI rule-based + regresi (3–5/minggu)
6. PWA + user management (auth, RBAC dasar)

**Belum dimasukkan:** API real-time agregator/marketplace, native app, multi-cabang, advanced ML, analisis konten medsos (V2), auto-reorder supplier (V2).

**Milestone & timeline:**
| Bulan | Output | PIC |
|---|---|---|
| 1–2 | Arsitektur final, schema DB, CI/CD | Beni + Arsya |
| 3–5 | Ingestion + ledger + dashboard inti | Arsya |
| 6–7 | Health Score engine + rekomendasi | Arsya |
| 8–9 | PWA + UX polish + **closed beta 20 UMKM** | Beni |
| 10–12 | Iterasi feedback + **open beta hingga ~30 UMKM** | Beni + Arsya |

**Sumber daya.** 2 *founder* (Bulan 1–8); *hire* UI/UX, marketing/community, +1 engineer pasca pre-seed (Bulan 9–12); QA *freelance* on-demand. Stack: HTML/CSS/JS + PWA, Python/FastAPI, PostgreSQL, Redis, S3-compatible, cloud *startup tier* (free-tier heavy).

**Cara dijalankan & dipelihara.** Deploy cloud-native, *managed database*, snapshot harian (RPO ≤24 jam, RTO ≤4 jam).

**Risiko teknis & mitigasi:** variasi format export QRIS → parser template per channel + manual mapping fallback; kualitas input manual → validasi inline + deteksi anomali; skalabilitas pipeline → arsitektur modular siap upgrade ke job queue.

---

## D. COMPLEXITY

### Problem and System Complexity *(maks. 200 kata)*

Kompleksitas PULSA bersumber dari **heterogenitas data**, bukan kerumitan dibuat-buat.

1. **Banyak format channel.** Setiap issuer QRIS, marketplace, dan bank punya skema *export* berbeda (kolom, format tanggal, label channel). Normalisasi ke satu skema ledger adalah inti masalah teknis — tidak ada standar tunggal.
2. **Banyak variabel analitik.** Health Score mengkombinasikan 5 dimensi (stabilitas revenue, frekuensi, diversitas pelanggan, diversitas channel, tren) yang masing-masing perlu normalisasi terhadap benchmark sektor (F&B/retail/jasa).
3. **Kualitas data bervariasi.** Input manual & export tak konsisten berisiko *garbage-in-garbage-out* yang merusak akurasi skor — perlu validasi & deteksi anomali.
4. **Banyak pemangku kepentingan.** UMKM (pengguna), mitra distribusi (institusi), regulator (PDP) — masing-masing membawa batasan berbeda.
5. **Ketidakpastian benchmark.** Tanpa data sektor yang matang, skor harus dirancang dapat dikalibrasi seiring pertumbuhan data.

Kompleksitas dikelola dengan **pendekatan terstruktur**: parser modular per channel, pipeline normalisasi terpusat, dan metode scoring transparan yang dapat dijelaskan — bukan menumpuk fitur atau teknologi canggih yang tak perlu.

### Processing Pipeline and Engineering Depth *(maks. 250 kata)*

**Alur input → output:**

1. **Pengumpulan data.** File CSV/XLSX (export QRIS/marketplace/bank) atau input manual via form.
2. **Preprocessing.** *Parsing* per template channel → validasi schema → deduplikasi berbasis referensi transaksi → normalisasi kategori produk ke taksonomi standar → deteksi anomali nilai (outlier).
3. **Penyimpanan.** *Staging* ke *ledger* PostgreSQL: tabel `users`, `businesses`, `transactions`, `products`, `channels`, `daily_aggregates`.
4. **Analytics (terjadwal).** Agregasi *time-series* harian/mingguan: tren omzet, *moving average* (smoothing), *heatmap density* peak hours, dekomposisi weekday/weekend, kontribusi channel.
5. **Scoring & rekomendasi.** AI service menghitung Business Health Score (5 komponen berbobot) + *rule-based engine* (mis. "if revenue Hari X > avg + 1σ → boost stock 20%") yang dikalibrasi per kategori.
6. **Output & feedback.** Dashboard menyajikan hasil; pengguna menandai rekomendasi "diterapkan" → sinyal feedback untuk iterasi.

**Aspek rekayasa:**
- **Modularitas:** ingestion, ledger, analytics, AI service terpisah → dapat di-scale & dikembangkan independen.
- **Integrasi:** siap menerima webhook/API agregator di tahap lanjut tanpa rewrite.
- **Skalabilitas:** arsitektur memungkinkan migrasi ke *job queue* (Celery/RQ) saat volume >10 juta transaksi/bulan, dan *data warehouse* untuk analitik agregat.
- **Reliability:** *managed database*, caching Redis untuk percepatan query dashboard, snapshot harian.

**Titik patah teknis sebenarnya** bukan jumlah UMKM, melainkan saat analytics sinkron mulai memblokir request — diantisipasi dengan agregasi terjadwal (bukan on-the-fly) sejak awal.

---

## E. ALGORITHM QUALITY & USER EXPERIENCE

### Algorithm or Rule Quality and Decision Transparency *(maks. 300 kata)*

**Logika inti: Business Health Score.** Mengukur kesehatan usaha via 5 komponen (skor 0–100, bobot tertimbang):

| Komponen | Bobot | Metode |
|---|---|---|
| Revenue Stability | 25% | 1 − Coefficient of Variation harian, normalisasi median industri |
| Transaction Frequency | 20% | Rasio transaksi/hari vs benchmark sektor |
| Customer Diversity | 15% | Distribusi unique customer, indeks konsentrasi (Herfindahl-like) |
| Channel Diversity | 15% | Jumlah channel aktif + distribusi revenue per channel |
| Growth Trend | 25% | Slope regresi linear revenue 30 hari, normalisasi industri |

Skor akhir = Σ (komponen × bobot). Klasifikasi: 80–100 (A), 65–79 (B), 50–64 (C), <50 (D).
*Contoh* (warung kopi Rp 18 jt/bln): 80·0,25 + 70·0,20 + 60·0,15 + 80·0,15 + 80·0,25 = **75 (B)**.

**Input → proses → output.** Input = fitur agregat dari ledger; proses = normalisasi + pembobotan + (untuk rekomendasi) aturan/regresi; output = skor, breakdown per komponen, dan rekomendasi berprioritas.

**Kenapa metode ini dipilih.** Kombinasi *statistik klasik + rule + regresi ringan* karena: (a) **dapat dijelaskan** ke UMKM (krusial untuk *trust*); (b) realistis untuk tim kecil & data yang masih tumbuh; (c) dapat ditingkatkan ke gradient boosting/clustering saat volume cukup.

**Alternatif yang dipertimbangkan & keterbatasan.** *Black-box ML* di awal ditolak — sulit dijelaskan, butuh data besar yang belum ada. Keterbatasan saat ini: bobot & benchmark masih perlu kalibrasi lapangan; rekomendasi rule-based belum personal penuh.

**Cara ukur kualitas.** Akurasi prediksi (error <15% target), *uplift* tervalidasi via case study, % rekomendasi "diterapkan".

**Transparansi & koreksi pengguna.** Setiap skor menampilkan breakdown per komponen sehingga pengguna paham *kenapa* skornya demikian; pengguna dapat mengedit/menghapus data salah, dan menandai rekomendasi relevan/tidak — menjadi sinyal kalibrasi.

### User Flow, Usability Testing, and Product Iteration *(maks. 250 kata)*

**Alur pengguna.** Register/login → onboarding terpandu (+ sample dataset) → upload/ input transaksi → lihat dashboard & Health Score → baca rekomendasi → tandai "diterapkan" → terima notifikasi insight mingguan.

**Pengujian yang sudah dilakukan (jujur).** PULSA belum melalui *usability testing* formal berskala. Validasi awal datang dari: (1) **1 wawancara mendalam** pemilik kafe yang menelusuri kebutuhan & gaya rekomendasi; (2) **survei N=7** lintas F&B/retail/digital; (3) **prototype publik** yang dapat dieksplorasi panel & calon pengguna sebagai bukti kelayakan UX.

**Hasil & temuan utama.**
- UMKM menginginkan rekomendasi **bahasa natural + konteks** ("tambah stok ayam bakar 17–18 karena reservasi 30 orang"), bukan dashboard generik.
- 85,7% bersedia setup via *upload* CSV/XLSX → memvalidasi jalur ingestion.
- 28,6% hanya punya <5 menit/hari → menegaskan keharusan UI *low-friction*.

**Perubahan produk berbasis temuan.**
- Setiap analytics dipasangkan *outcome-paired copy* ("…sehingga Anda dapat…").
- Penambahan jalur **input manual** agar UMKM yang sebagian tunai tidak terhambat.
- Health Score diperjelas dari konsep abstrak menjadi 5 komponen terdefinisi + tombol "Bagikan Skor".
- Onboarding dengan *sample dataset* agar manfaat terlihat sebelum upload data sendiri.

**Pencegahan kesalahan.** Validasi inline saat input, deteksi anomali nilai, fitur edit/hapus, dan transparansi breakdown skor agar pengguna dapat mengoreksi.

**Rencana berikutnya:** *usability testing* terstruktur pada *closed beta* 20 UMKM (task success rate, SUS score, completion rate).

---

## F. TEAM READINESS FOR STARTUP

### Team Capability and Execution Ownership *(maks. 250 kata)*

**Pembagian peran:**

| Domain | Owner | Kompetensi pendukung |
|---|---|---|
| Product, UX, Strategy, Business | **Beni Handoko** | Full-stack development, product design, riset pengguna UMKM, business modeling, GTM |
| Technology, Backend, Data, AI | **Moch Arsya Adzma Syahputra** | Python/FastAPI, data engineering, pandas/numpy, PostgreSQL, ML ringan |

**Bukti kerja nyata.** Prototype interaktif 7 modul (live & publik), metodologi Business Health Score terdefinisi (5 komponen + bobot + formula), instrumen & hasil survei (N=7), dokumentasi arsitektur modular 8 komponen, dan kanvas eksekusi (team role, use case, value canvas).

**Cara tim mengambil keputusan.** Tim kecil dua orang → keputusan cepat via *weekly sync* (Senin 19.00 WIB); keputusan produk dipegang Product Lead, keputusan teknis dipegang Tech Lead, keputusan strategis diambil bersama berbasis data validasi.

**Owner milestone berikutnya.** Backend & ingestion nyata → Arsya; closed beta & kemitraan pilot → Beni; Health Score engine produksi → Arsya; pitch & penggalangan pre-seed → Beni.

**Gap yang disadari & mitigasi.** Belum ada UI/UX designer & marketing/community lead khusus, dan belum ada koneksi formal ke ekosistem distribusi. Mitigasi: manfaatkan komunitas/asosiasi UMKM + akselerator untuk distribusi awal; tambah **advisor industri** (network & BD) tanpa merekrut penuh waktu; rencana *hire* pasca pre-seed; QA *freelance* on-demand. Model kompensasi *equity-heavy* + gaji lean (~Rp 5 jt/orang/bln) menjaga *bootstrap* efisien pada fase MVP.

### Continuation Readiness *(maks. 200 kata)*

**Milestone 6–12 bulan ke depan:**
- **Bulan 1–7:** bangun backend + ingestion nyata + ledger + dashboard + Health Score engine produksi (PIC: Arsya).
- **Bulan 8–9:** PWA + UX polish + **closed beta 20 UMKM** + usability testing terstruktur (PIC: Beni).
- **Bulan 10–12:** iterasi feedback + **open beta hingga ~30 UMKM (target Th-1)** + amankan ≥1 LOI/MOU kemitraan (PIC: Beni + Arsya).

**Pembagian tanggung jawab:** teknis & data → Arsya; produk, validasi, kemitraan, fundraising → Beni; keputusan strategis bersama.

**Komitmen sumber daya:** komitmen waktu founder berlanjut (minimum 15 jam/minggu/anggota pasca fase intensif), *weekly sync* rutin, kompensasi equity-heavy + gaji lean.

**Yang masih dibutuhkan & rencana mendapatkannya:**
- **Advisor** industri keuangan/UMKM → pendekatan via akselerator & jaringan asosiasi.
- **Hire** UI/UX + marketing/community lead + 1 engineer → pasca pre-seed (Bulan 9–12).
- **Pendanaan** pre-seed Rp 150–250 jt → hibah BI/Kemenkop UKM + bootstrap + cloud credits (Google for Startups/AWS Activate, ±12 bulan runway infra).

Rencana ini konkret, *right-sized* untuk tim 2 orang, dan tidak bergantung pada satu sumber tunggal.

---

## G. BUSINESS PLAN & ROI

### Quantified Value, Business Model, and ROI *(maks. 300 kata)*

**Siapa memperoleh manfaat & membayar.**
- **UMKM (pengguna/pembayar B2C):** hemat waktu + potensi uplift omzet; bayar Premium.
- **Institusi (micro B2B):** agregator pembayaran, asosiasi UMKM, koperasi, pemda — dapat *dashboard portfolio* merchant binaan + insight agregat; bayar *licensing*.

**Model pendapatan.** Freemium B2C + micro B2B:
1. **Premium individual** Rp 49rb/bln (export laporan, rekomendasi tanpa batas, peer benchmark).
2. **Premium bisnis** Rp 199rb/bln (multi-cabang, multi-user, priority support).
3. **Institutional licensing** Rp 5–50 jt/bln (portfolio merchant + insight agregat).

**Angka nilai (kuantifikasi):**
- **Per UMKM:** waktu rekap ±2 jam → ≤15 menit/minggu (−88%); potensi uplift omzet **10–15%** (±Rp 25 jt/tahun untuk warung Rp 18 jt/bln).
- **ROI per UMKM (premium):** biaya Rp 49rb/bln (Rp 588rb/thn) vs potensi uplift ±Rp 25 jt/thn → **≈ 42×**, *payback* < 1 bulan.
- **Nilai ekonomi agregat (asumsi 35% menerapkan ≥3 rekomendasi):** Th-1 ±Rp 263 jt → Th-3 (1.000 UMKM) ±**Rp 8,75 M/tahun**.

**Biaya utama & asumsi.** Th-1 ±Rp 150 jt/tahun (2 founder + infra free-tier + akuisisi organik). *Blended ARPU* (pengguna berbayar) ~Rp 55rb/bln; CAC via mitra <Rp 30rb; gross margin ≥85% (infra free-tier heavy).

**Revenue & break-even.** Pada Th-3 (1.000 UMKM): Premium individual (8% konversi) ±Rp 47 jt + Premium bisnis (1%) ±Rp 24 jt + 3 institutional licensing (±Rp 15 jt/bln) ±Rp 540 jt ≈ **±Rp 0,6 M/tahun**, mendekati *break-even operasional* untuk tim lean. Th-1–2 didanai hibah + cloud credits + pre-seed.

**Catatan ROI.** *Impact ROI* (nilai ekonomi ke UMKM) modest di Th-1 karena basis kecil, membesar seiring skala; ROI per-UMKM (42×) adalah angka paling robust. Asumsi WTP & uplift masih perlu validasi case study (titik paling rapuh).

### Adoption, Growth Strategy, and Competitive Moat *(maks. 250 kata)*

**Strategi memperoleh pengguna & mitra pertama — *bottom-up* 3 mesin:**

| Tahun | Target | Mesin pertumbuhan |
|---|---|---|
| **Th-1** | **30 UMKM** | *Founder-led* + komunitas: closed beta 20 (outreach jaringan + 2–3 komunitas kuliner/UMKM Bandung & Jabodetabek) + open beta ~10 (referral) |
| **Th-2** | **200 UMKM** | 1–2 kemitraan komunitas/asosiasi (~100, batch onboarding) + referral/organik (~70) + 1 pilot PSP (~30); pre-seed → hire |
| **Th-3** | **1.000 UMKM** | 3–4 mitra distribusi (~600, ±150–200/mitra) + organik/SEO (~200) + ekspansi Tier 2 & sektor jasa; self-serve onboarding matang |

**Channel & kemitraan.** Asosiasi & komunitas UMKM (HIPMI, komunitas kuliner), agregator/PSP (Midtrans, Xendit, QRIS issuer), koperasi/pemda, vendor POS lokal (komplemen), inkubator/akselerator.

**Framing defensible.** Pisahkan **registered vs aktif** (mis. 1.000 aktif ≈ ±1.600 registered × ~60% aktif); ikat tiap angka ke jumlah mitra; sertakan ***fallback* organik** (~600–700) bila kemitraan tertunda — menunjukkan kesadaran risiko.

**Competitive moat (faktor sulit ditiru):**
1. **Konsolidasi multi-channel sebagai default** — belum jadi fitur inti pemain lokal.
2. **Business Health Score 5 komponen** — bahasa kesehatan usaha tunggal dengan metodologi terstruktur.
3. **Bahasa UMKM-native** — rekomendasi konkret, bukan dashboard generik.
4. **Data network effect** — makin banyak UMKM, makin kaya benchmark sektor & insight agregat untuk mitra institusional.
5. **Fokus eksklusif UMKM mikro** — UX, harga, feature set match segmen.

**Bukti ketertarikan awal:** survei (0% pilih "hanya gratis", 57,1% WTP Rp 50–100rb) + sinyal kualitatif wawancara. Survei putaran 2 (N≥30) & penjajakan kemitraan berjalan.

---

## H. ATTACHMENT

| Item | Isi |
|---|---|
| **Video Submission** | *(Link YouTube Elevator Pitch — DIISI setelah video 3 menit final diunggah publik)* |
| **File Attachment (PDF)** | Proposal ini (PDF) + lampiran pendukung: spesifikasi Business Health Score, ringkasan survei, diagram arsitektur & data flow |
| **Link Attachment (1, publik)** | Prototype interaktif: https://handokobeni.github.io/pulsa-demo/ — *(pastikan dapat diakses tanpa login)*. Source code: https://github.com/handokobeni/pulsa-demo |
| **CV Attachment** | LinkedIn/CV (Google Drive, dapat diakses): Beni Handoko — *(link DIISI)* · Moch Arsya Adzma Syahputra — *(link DIISI)* |

---

*3rd Submission Proposal · PULSA / 404 Inovators (Team ID P0670) · Digdaya x Hackathon 2026*
