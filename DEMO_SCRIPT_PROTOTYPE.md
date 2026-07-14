# SCRIPT DEMO PROTOTYPE - PULSA
## 404 Inovators - untuk rekaman video (segmen demo) & demo langsung

> Prototype: https://handokobeni.github.io/pulsa-demo/ (7 modul, data sampel).
> Prinsip: ikuti SATU alur cerita (evaluasi mingguan Bu Sari), tunjukkan input sampai output, dan sebut jujur bahwa ini berjalan di atas data sampel.

---

## 0. PERSIAPAN SEBELUM REKAM (checklist)

- [ ] Buka prototype di browser, resolusi layar 1920x1080
- [ ] Zoom browser 100% (Ctrl+0), sembunyikan bookmark bar
- [ ] Tutup tab lain, matikan notifikasi (Do Not Disturb)
- [ ] Aktifkan cursor highlight (bawaan tool rekam) supaya penonton mudah mengikuti
- [ ] Muat data sampel dulu sehingga dashboard sudah terisi saat direkam
- [ ] Jalankan alur ini 1x sebagai gladi supaya lancar tanpa error
- [ ] Rekam layar dan narasi terpisah, lalu sinkronkan (narasi lebih jernih)

---

## 1. ALUR DEMO (click-by-click + narasi)

Total target segmen demo: sekitar 2 menit. Angka di kiri adalah patokan waktu di dalam video (mulai dari menit ke-1).

### 🎬 0:00-0:10 — Pengantar (layar: Dashboard sudah terbuka)
- **Aksi:** Diamkan di halaman Dashboard, biarkan penonton melihat tampilan utuh.
- **Narasi:**
> "Mari lihat langsung. Ini yang dilihat Bu Sari, pemilik kafe, saat membuka PULSA untuk mengevaluasi usahanya di akhir minggu."

### 🎬 0:10-0:35 — Ingestion, dari mana datanya (layar: modul Ingestion)
- **Aksi:** Klik menu **Ingestion**. Tunjuk area upload CSV/XLSX, lalu tunjuk form input manual. Perlihatkan riwayat import.
- **Narasi:**
> "Semuanya berawal di sini. Bu Sari cukup mengunggah file transaksi hasil export QRIS atau marketplace, atau memasukkan transaksi tunai secara manual. PULSA membaca, membersihkan, dan menyatukan semuanya ke satu ledger. Untuk demo ini kami memakai data sampel yang menyerupai pola UMKM nyata."

### 🎬 0:35-1:00 — Dashboard, gambaran cepat (layar: Dashboard)
- **Aksi:** Klik **Dashboard**. Sorot berurutan: KPI cards (omzet, jumlah transaksi), grafik tren revenue, donut channel, lalu daftar produk terlaris.
- **Narasi:**
> "Di Dashboard, dalam sekali lihat ada total omzet, tren pendapatan harian, kontribusi tiap kanal pembayaran, dan produk terlaris. Data yang tadinya tercecer di banyak aplikasi kini jadi satu gambaran utuh."

### 🎬 1:00-1:20 — Analytics, pola yang selama ini tak terlihat (layar: Analytics)
- **Aksi:** Klik **Analytics**. Sorot **peak hours heatmap**, lalu performa produk, lalu revenue per channel.
- **Narasi:**
> "Masuk ke Analytics, heatmap jam sibuk menunjukkan kapan kafenya paling ramai, sesuatu yang selama ini hanya dikira-kira. Ada juga performa tiap produk dan kontribusi tiap kanal, dasar untuk keputusan stok dan promo."

### 🎬 1:20-1:35 — Business Health Score, cara kerjanya (layar: Health Score)
- **Aksi:** Klik **Health Score**. Tunjuk ring skor (mis. 75, B), lalu breakdown 5 komponen.
- **Narasi:**
> "Inti PULSA ada di Business Health Score. Sistem menghitung lima komponen kesehatan usaha, dari stabilitas omzet sampai tren pertumbuhan, lalu menggabungkannya jadi satu skor. Yang penting, tiap skor bisa ditelusuri per komponen, jadi pemilik paham alasannya, bukan sekadar angka."

### 🎬 1:35-1:50 — Rekomendasi, dari data ke tindakan (layar: Recommendations)
- **Aksi:** Klik **Recommendations**. Sorot satu rekomendasi berprioritas dan labelnya (stok / operasional / promosi).
- **Narasi:**
> "Dari skor dan pola itu lahir rekomendasi yang bisa langsung dijalankan, dalam bahasa UMKM. Misalnya menambah stok produk tertentu di hari ramai, atau mengatur promo. Bukan dashboard yang harus ditafsirkan sendiri."

### 🎬 1:50-2:00 — Status jujur + penutup (layar: kembali ke Dashboard atau logo)
- **Aksi:** Kembali ke Dashboard atau tampilkan slide penutup.
- **Narasi:**
> "Antarmuka ini sudah berfungsi penuh atas data sampel. Backend dan ingestion file nyata sedang kami bangun menuju closed beta bersama UMKM. Inilah PULSA, dari data yang terbuang menjadi keputusan."

---

## 2. URUTAN MODUL (ringkas)
Ingestion (dari mana data) → Dashboard (gambaran) → Analytics (pola) → Health Score (penilaian) → Recommendations (tindakan) → penutup jujur.

Alasan urutan ini: mengikuti alur input sampai output, sehingga penonton paham cerita utuh, bukan sekadar tur fitur.

---

## 3. DO & DON'T SAAT DEMO

**Lakukan:**
- Gerakkan kursor perlahan, beri jeda 1-2 detik di tiap elemen penting
- Ucapkan manfaatnya, bukan hanya nama fitur ("jam tersibuk, supaya bisa atur stok dan staf")
- Sebut sekali di awal bahwa ini data sampel, lalu lanjut percaya diri
- Akhiri dengan status jujur dan ajakan (closed beta, kemitraan)

**Hindari:**
- Klik acak antar modul tanpa alur
- Membaca setiap angka satu per satu (pilih yang paling bercerita)
- Mengklaim fitur yang belum ada seolah sudah jalan
- Kursor bergerak cepat atau layar penuh tab lain

---

## 4. VERSI DEMO LANGSUNG (di depan juri/mentor)
Jika demo tatap muka, tambahkan interaksi:
- Awali dengan 1 kalimat konteks: "Bayangkan Anda pemilik kafe dengan transaksi di QRIS, GoFood, dan tunai."
- Setelah menampilkan Health Score, ajak juri: "Kalau skor Anda 75, komponen mana yang paling ingin Anda perbaiki?"
- Siapkan jawaban bila ditanya "ini datanya nyata?": "Ini data sampel untuk demonstrasi; logika dan tampilannya sudah berjalan, backend nyata sedang dibangun."
- Sediakan cadangan bila internet lambat: screenshot tiap modul atau rekaman singkat.

---

## 5. CATATAN KONSISTENSI
- Target pengguna bila disebut: 30 UMKM tahun pertama menuju 1.000 di tahun ketiga.
- Selalu bedakan yang sudah berfungsi (antarmuka atas data sampel) dan yang sedang dibangun (backend, ingestion nyata).
- Selaras dengan naskah utama di VIDEO_SCRIPT_TAHAP3.md dan jawaban di QNA_JURI_TAHAP3.md.

---

*Script Demo Prototype - PULSA / 404 Inovators*
