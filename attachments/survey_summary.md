# Ringkasan Survei Validasi Pasar PULSA

**Judul Survei**: Survei Singkat — Kebutuhan UMKM untuk Analisis Bisnis
**Periode pengumpulan**: hingga 2026-05-24
**Jumlah responden (N)**: 6
**Metode**: Google Form online (distribusi via komunitas UMKM)
**Status sample**: indikatif awal (*early signal*), bukan representatif statistik — dilanjutkan ke putaran kedua menuju N ≥ 30

---

## Profil Responden

| Dimensi | Distribusi |
|---|---|
| **Sektor** | Kuliner/F&B 50% (3), Retail/Toko 33,3% (2), Digital 16,7% (1) |
| **Kota** | Bandung 50% (3), Cianjur 33,3% (2), Nasional 16,7% (1) |
| **Lama bisnis** | <1 thn 33,3% — 1–3 thn 33,3% — >5 thn 33,3% |
| **Channel pembayaran** | QRIS **100% (6/6)**, Cash 83,3%, E-wallet 50%, Transfer bank 33,3%, Marketplace 16,7%, EDC 16,7% |
| **POS digital** | Pakai 50% — Tidak pakai 33,3% — Manual buku/Excel 16,7% |

---

## Sinyal Problem Validation

| Sinyal | Hasil | Implikasi untuk PULSA |
|---|---|---|
| **Cara tahu produk terlaris** | 33,3% mengandalkan **ingatan/feeling**, 33,3% **belum pernah analisis serius**, 16,7% lihat POS, 16,7% lihat marketplace | **66,6% UMKM tidak punya proses analisis terstruktur** → konfirmasi keputusan operasional masih intuisi |
| **Masalah utama analisis saat ini** | 33,3% "tidak tahu harus analisis apa", 33,3% "tools yang ada belum cukup membantu", 16,7% kurang waktu, 16,7% kurang efisien penyajian. **"Sudah cukup terbantu" = 0% (0/6)** | **100% responden mengalami friction** dengan analitik bisnis saat ini |
| **Marketing media sosial** | 66,7% jalankan rutin, 16,7% kadang-kadang, 16,7% tidak | **83,4% aktif marketing** — channel marketing sudah ada |
| **Tahu konten medsos mana yang efektif?** | 50% tahu pasti — **50% hanya menebak-nebak** | Pain point baru: koneksi marketing → revenue belum terukur |

---

## Sinyal Feature Demand (Top 3 — pilih maks. 3)

| Fitur | Yang memilih |
|---|---|
| **Rekomendasi produk apa yang harus dipromosikan** | **83,3% (5/6)** ★ |
| **Analisis efektivitas konten media sosial** | **66,7% (4/6)** ★ *(belum di MVP — kandidat V2)* |
| Laporan penjualan otomatis | 50% (3/6) |
| Prediksi/forecast penjualan | 33,3% (2/6) |
| Rekomendasi promo berdasarkan momentum | 33,3% (2/6) |
| Alert stok bahan baku | 16,7% (1/6) |
| Notifikasi otomatis ke supplier | 16,7% (1/6) |
| **Skor kesehatan bisnis untuk akses pinjaman** | **16,7% (1/6)** *(low — lihat catatan strategis)* |

**Catatan strategis Health Score**: hanya 1/6 responden tertarik Health Score sebagai indikator akses pinjaman. Implikasi: **Health Score di-reframe sebagai indikator kesehatan operasional bisnis untuk self-assessment UMKM dengan benchmark sektor** — bukan profil kelayakan kredit untuk lembaga keuangan. Untuk UMKM, framing yang lebih resonan adalah "performa & rekomendasi" (sesuai top fitur yang dipilih).

---

## Sinyal Adoption Readiness

| Pertanyaan | Hasil | Implikasi |
|---|---|---|
| **Setup yang bersedia dicoba** (maks. 2) | **Upload Excel/CSV dari QRIS/marketplace 83,3% (5/6)** ★, Ganti POS terintegrasi 50%, Foto struk via WhatsApp 33,3%, Integrasi QRIS langsung 33,3%, Input manual 33,3% | **Konfirmasi strategi ingestion PULSA tepat**: jalur file upload adalah yang paling diterima — match dengan MVP scope (no API integration needed at start) |
| **Waktu pencatatan per hari** | <5 menit 33,3% — 5–15 menit 16,7% — >30 menit 33,3% — tidak punya waktu 16,7% | Variasi tinggi — solusi harus **bekerja baik di skenario <5 menit/hari** (low friction) |

---

## Sinyal Willingness to Pay (WTP)

**Pertanyaan**: *"Jika aplikasi terbukti meningkatkan omzet Anda 10% per bulan, Anda mau bayar berapa per bulan?"*

| Range | Jumlah | % |
|---|---|---|
| Hanya mau jika gratis | 0 | **0,0%** |
| Kurang dari Rp 50.000 | 1 | 16,7% |
| **Rp 50.000–Rp 100.000** | **4** | **66,7%** ★ |
| Rp 100.000–Rp 300.000 | 0 | 0,0% |
| Lebih dari Rp 300.000 | 1 | 16,7% |

**Implikasi pricing PULSA**:
- Rencana Premium Individual Rp 49.000/bulan **valid** — 83,3% (5/6) bersedia membayar setidaknya pada level ini
- **0% memilih "hanya gratis"** — kuatnya sinyal komersial pada segmen ini
- Potensi tier intermediate Rp 79.000–99.000 menangkap 4/6 responden di band Rp 50–100rb

---

## Sinyal Outcome Yang Diharapkan (Open-Ended)

**Pertanyaan**: *"Ceritakan satu hal yang ingin Anda capai dari bisnis Anda 6 bulan ke depan"*

Jawaban: *"Omzet naik 50%"*, *"Menaikan omzet"*, *"Omzet naik 30% diimbangi peningkatan ROAS"*, *"Dapat produk winning baru"*, *"Kenaikan Omzet 50%"*, *"omzet naik"*

→ **6/6 (100%) fokus pada kenaikan omzet** sebagai outcome utama. Implikasi: KPI utama yang ditampilkan dashboard PULSA harus **revenue growth & contribution to revenue growth per recommendation accepted**, bukan sekadar visualisasi data.

---

## Sinyal Fitur "Wajib Ada" Supaya Bayar (Open-Ended)

Jawaban: *"Pengelolaan stok yang tidak rumit"*, *"POS dan payment gateway"*, *"Fitur garansi uang kembali jika target tidak tercapai"*, *"Produk Digital Winning Update"*, *"bisa menaikan omset"*

**Insight strategis**:
- "Garansi uang kembali jika target tidak tercapai" → ide *outcome-based pricing* yang inovatif (potensi positioning lanjut)
- "Pengelolaan stok yang tidak rumit" → confirm stock/inventory module relevan tapi harus low complexity
- "POS dan payment gateway" → satu responden menginginkan PULSA jadi POS — kemungkinan ekspansi ke partnership/white-label POS

---

## Sinyal Pain Point Stok/Bahan Baku (Open-Ended)

Jawaban: *"Seringkali barang hilang"*, *"Fluktuasi harga bahan"*, *"Harga bahan baku tiba-tiba naik"*, *"Produk digital sekali beli, tidak ada repeat order"*, *"belum tahu ilmunya"*, *"buat UMKM kecil, harus tahu menu mana yang paling laku, biar tidak menghamburkan belanja bahan yang kurang diminati"*

→ Konfirmasi *pain point* stok beragam: shrinkage, volatilitas harga, repeat purchase, dan literasi → mendukung roadmap fitur **stock guidance** berbasis data transaksi.

---

## Kesimpulan & Tindak Lanjut

**Konfirmasi kuat untuk proposal**:
1. Target market UMKM dengan QRIS — **100% match**
2. Pricing Rp 49rb/bulan — **83,3% WTP confirmation**
3. Strategi ingestion via file upload — **83,3% adoption willingness**
4. Top fitur "rekomendasi produk untuk dipromosikan" — **83,3% demand**
5. Outcome metric "revenue uplift" — **100% goal alignment**

**Penajaman positioning yang diperlukan**:
- Health Score di-reframe sebagai **indikator kesehatan operasional dengan benchmark sektor** untuk self-assessment UMKM
- Tambahkan fitur **analisis efektivitas konten medsos** sebagai roadmap V2 (66,7% demand)
- Pertimbangkan **outcome-based pricing** sebagai mekanisme trust (1 responden menyarankan)
- Hapus framing **"credit scoring / data alternatif untuk lembaga keuangan"** — segmen target adalah B2C (UMKM langsung) + micro B2B (agregator pembayaran, asosiasi UMKM, vendor POS lokal, supplier B2B), bukan bank/koperasi/P2P lending

**Tindak lanjut**:
- Putaran 2 survei: target N ≥ 30 responden, ekspansi sektor jasa & wilayah Tier 1
- Wawancara mendalam dengan 2–3 responden survei sebagai konfirmasi kualitatif
