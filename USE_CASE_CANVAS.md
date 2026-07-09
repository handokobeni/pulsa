# USE CASE CANVAS — PULSA

| | |
|---|---|
| **Tim** | 404 Inovators |
| **Produk** | PULSA — AI Financial Intelligence untuk UMKM Berbasis Data Transaksi |

---

## 1. WHO — Target User & Pengguna Utama
*Siapa yang paling merasakan masalah? Persona spesifik, bukan umum.*

**Persona utama: "Bu Sari" — pemilik-operator kafe/warung F&B**
- Usaha F&B di kota Tier 1–2 (Bandung / Jabodetabek), omzet **Rp 15–20 juta/bulan**
- Menerima pembayaran **QRIS + tunai + GoFood/marketplace** (≥2 kanal)
- Dijalankan sendiri dengan **2–3 staf**; tidak punya tim keuangan/analis
- Hanya punya **< 5 menit/hari** untuk pencatatan; keputusan stok & promo masih berbasis ingatan/intuisi
- Familiar aplikasi digital harian (WhatsApp, marketplace, e-wallet), tapi **literasi data terbatas**

**Persona sekunder:** pemilik toko retail mikro (kelontong, fashion, kosmetik) dengan profil omzet & perilaku digital serupa.

---

## 2. PROBLEM — Pernyataan Masalah Utama
*Satu kalimat: "Pengguna X kesulitan karena Z."*

> **Pemilik UMKM F&B & retail kesulitan mengubah data transaksi digitalnya menjadi keputusan bisnis, karena data tersebar di banyak kanal dan tools yang ada hanya memberi rekap pembayaran — bukan insight — sementara alat analitik mendalam terlalu mahal dan rumit untuk usaha mikro.**

**Bukti / validasi masalah:**
- **Survei (N=7, Mei 2026):** 100% terima QRIS; **0% merasa "sudah cukup terbantu"** tools analitik saat ini; 57,1% masih mengandalkan ingatan untuk analisis produk terlaris.
- **Wawancara mendalam (pemilik kafe):** tools eksisting belum cukup; butuh rekomendasi bahasa natural, bukan dashboard generik.
- **Data makro:** 64,2 juta UMKM, 45,3 juta merchant QRIS, tapi hanya 25,5 juta UMKM *go digital* penuh → gap "menerima vs memanfaatkan" data (BI, Kemenkop UKM).

---

## 3. PAIN POINT & KEBUTUHAN TAK TERPENUHI
*Frustrasi nyata pengguna + apa yang hilang dari solusi saat ini.*

**Frustrasi nyata:**
- "Data transaksi banyak, tapi saya tidak tahu artinya apa untuk keputusan besok."
- Rekap manual lintas kanal makan waktu (±2 jam/minggu) dan tetap tidak menghasilkan insight.
- Keputusan stok, jam buka, dan promo masih menebak — takut salah stok / kehilangan momen ramai.

**Apa yang hilang dari solusi saat ini:**
- **Konsolidasi multi-channel** — BukuWarung/POS hanya pegang 1 kanal, tidak menyatukan QRIS + marketplace + transfer + tunai.
- **Insight & scoring** — aplikasi pencatatan berhenti di ringkasan, tidak ada analitik mendalam atau metrik kesehatan usaha.
- **Rekomendasi actionable bahasa UMKM** — bukan dashboard generik yang harus diinterpretasi sendiri (mis. "tambah stok ayam bakar 20% di Jumat").
- **Harga terjangkau** — tools BI enterprise berbiaya jutaan/bulan, di luar jangkauan usaha mikro.

---

## 4. SOLUSI YANG DIUSULKAN
*Bagaimana produkmu menyelesaikan masalah tersebut secara signifikan?*

PULSA menyatukan transaksi multi-channel ke **satu ledger usaha**, lalu mengubahnya menjadi **insight harian**, **Business Health Score (5 komponen)**, dan **rekomendasi actionable** yang bisa langsung dijalankan pemilik usaha — diakses via web/PWA tanpa instalasi, gratis untuk fitur inti.

**Unique Value Proposition (UVP):**
> Analitik bisnis setara *enterprise* — dalam bahasa UMKM yang langsung pakai — dengan biaya di bawah Rp 100rb/bulan.

**Diferensiator:**
1. **Konsolidasi multi-channel sebagai default** (QRIS + marketplace + transfer + tunai → 1 ledger)
2. **Business Health Score 5 komponen** — metrik kesehatan usaha tunggal berbasis data transaksi nyata
3. **Bahasa UMKM-native** — rekomendasi konkret, bukan dashboard generik
4. **Fokus eksklusif UMKM mikro** (omzet Rp 5–100 jt/bln), bukan adaptasi tools enterprise
5. **Lightweight & freemium** — PWA, low-friction, terjangkau

---

## 5. STRATEGI VALIDASI PRODUCT–MARKET FIT
*Bagaimana kamu membuktikan pasar benar-benar membutuhkan ini?*

| Aspek | Isi |
|---|---|
| **Metode** | Survei kuantitatif + wawancara mendalam + closed beta (in-app usage analytics) + case study |
| **Target Responden** | UMKM F&B & retail, omzet Rp 5–100 jt/bln, sudah terima QRIS, di Bandung & Jabodetabek (distribusi target survei: 40% F&B, 30% retail, 20% jasa, 10% marketplace) |
| **Metrik Sukses** | Retention 30-hari ≥40%; MAU ≥60%; ≥25% rekomendasi prioritas ditandai "diterapkan"; WTP Rp 50–100rb terkonfirmasi; NPS positif |
| **Timeline Validasi** | Survei putaran 1 (N=7) selesai → putaran 2 (N≥30) berjalan → closed beta 20 UMKM (Bulan 8–9) → open beta hingga ~30 UMKM aktif (Bulan 10–12) |

---

## 6. SCOPE — Lingkup MVP (Fitur & Batasan)
*Apa yang masuk & keluar dari MVP?*

### ✅ Termasuk (MVP 12 bulan)
- Ingestion **CSV/XLSX** (QRIS issuer, marketplace, bank statement) + **input manual**
- **Ledger usaha** multi-channel (single source of truth)
- **Dashboard analytics**: KPI, tren revenue, peak hours heatmap, performa produk, distribusi channel
- **Business Health Score** (5 komponen, skor 0–100)
- **Rekomendasi AI** rule-based + regresi sederhana (3–5/minggu, berprioritas)
- **PWA** (mobile, installable tanpa native dev)
- **User management** (registrasi, login, RBAC dasar)

### ❌ Tidak Termasuk (out-of-scope / roadmap)
- Integrasi **API real-time** agregator/marketplace
- **Native mobile app**
- **Multi-cabang** / multi-user role lanjutan
- **Advanced ML** (gradient boosting, clustering/peer benchmark)
- **Analisis konten media sosial** (roadmap V2)
- **Auto-reorder supplier** (roadmap V2)

### 🛠️ Tech Stack / Platform
Frontend HTML/CSS/JS + **PWA** · Backend **Python (FastAPI)** · **PostgreSQL** · **Redis** · S3-compatible storage · cloud tier *startup* (AWS/GCP/DigitalOcean)

### ⚠️ Hambatan Integrasi
- **Variasi format export** antar issuer QRIS → parser template per channel + manual mapping fallback
- **Akses API marketplace/agregator** butuh kerja sama formal (tidak tersedia di tahap MVP)
- **Kepatuhan UU PDP (No. 27/2022)** → consent eksplisit + data minimization
- **Kualitas input manual** → validasi inline + deteksi anomali

---

## 7. ALUR DEMO
*Alur end-to-end use case inti: dari pemicu hingga value yang diterima pengguna.*

`Entry Point` → `Aksi Pengguna` → `Proses Sistem` → `Output` → `Impact`

### 1️⃣ Entry Point / Trigger
Bu Sari ingin meninjau performa usahanya (akhir minggu / sebelum ambil keputusan stok & promo). Ia membuka **PULSA via browser/PWA dan login** — terpicu oleh **notifikasi insight mingguan** (email/in-app) atau kebutuhan evaluasi.

### 2️⃣ Aksi Utama Pengguna
Di modul **Ingestion**, ia **mengunggah file transaksi (CSV/XLSX)** hasil export QRIS/marketplace, atau **input manual** untuk transaksi tunai.

### 3️⃣ Proses / Logika Sistem
- **Ingestion service:** parsing file → validasi schema → deduplikasi referensi → normalisasi kategori produk → simpan ke **ledger usaha**
- **Analytics engine:** agregasi tren revenue, peak hours, performa produk, distribusi channel, stabilitas pendapatan
- **AI service:** hitung **Business Health Score** (5 komponen berbobot) + generate **rekomendasi** (rule-based + regresi sederhana)

### 4️⃣ Output / Hasil untuk User
Dashboard menampilkan **KPI + tren revenue + heatmap peak hours + produk terlaris + donut channel**, **Business Health Score 0–100** dengan breakdown 5 komponen, dan **daftar rekomendasi berprioritas** — mis. *"Tambah stok ayam bakar 20% di Jumat"*.

### 5️⃣ Impact / Value Delivered
- Waktu rekap turun dari **±2 jam → ≤15 menit/minggu** (−88%)
- Keputusan **stok, promo, jam buka berbasis data**, bukan intuisi
- Potensi **omzet naik 10–15% dalam 6 bulan** bagi yang menerapkan rekomendasi
- **Health Score** jadi profil usaha yang bisa dibagikan & sinyal *credit-readiness* (roadmap)

| Tahap | Inti |
|---|---|
| **1. Entry Point / Trigger** | Login PULSA, terpicu notifikasi insight mingguan / kebutuhan evaluasi |
| **2. Aksi Utama Pengguna** | Upload CSV/XLSX atau input manual di modul Ingestion |
| **3. Proses / Logika Sistem** | Parsing → dedup → normalisasi → ledger → analytics → Health Score + rekomendasi |
| **4. Output / Hasil untuk User** | Dashboard KPI, peak hours, Health Score 0–100, rekomendasi berprioritas |
| **5. Impact / Value Delivered** | Rekap 2 jam→15 menit, keputusan berbasis data, potensi omzet +10–15% |

---

*Use Case Canvas · PULSA / 404 Inovators*
