# SIMULASI Q&A JURI - TAHAP 3
## PULSA / 404 Inovators (Team ID P0670) - Digdaya x Hackathon 2026

> Antisipasi pertanyaan panel juri (BI/OJK/praktisi) beserta jawaban singkat, jujur, dan konsisten dengan proposal. Prinsip menjawab: akui yang belum ada, kuatkan dengan bukti dan logika, dan selalu tutup dengan langkah konkret berikutnya.

---

## A. USE CASE & MASALAH

**1. Kenapa UMKM butuh PULSA, bukankah sudah ada BukuWarung, BukuKas, atau POS seperti Moka?**
Aplikasi pencatatan seperti BukuWarung fokus pada catatan manual harian, dan POS seperti Moka kuat di penjualan satu kanal toko fisik. Tidak ada yang menyatukan semua kanal (QRIS, marketplace, transfer, tunai) ke satu tempat lalu mengubahnya jadi rekomendasi. PULSA mengisi celah itu: konsolidasi lintas kanal plus Business Health Score plus rekomendasi berbahasa UMKM. Kami melengkapi POS, bukan menyaingi kasir.

**2. Apa bukti masalah ini nyata, bukan asumsi tim?**
Tiga lapis. Data makro: 45,3 juta merchant QRIS tapi baru 25,5 juta UMKM go digital penuh, jadi ada gap menerima versus memanfaatkan data. Survei tujuh responden: tidak satu pun merasa cukup terbantu tools saat ini, dan 85,7% ingin rekomendasi produk untuk dipromosikan. Wawancara mendalam pemilik kafe menegaskan mereka ingin saran berbahasa natural, bukan dashboard.

**3. Survei Anda cuma tujuh responden. Bukankah itu terlalu kecil?**
Betul, itu masih indikatif, bukan konklusif, dan kami sampaikan apa adanya. Fungsinya menajamkan hipotesis, bukan membuktikan pasar. Karena itu putaran kedua menuju 30 responden sedang berjalan, dan validasi sesungguhnya akan datang dari perilaku nyata di closed beta 20 UMKM, bukan dari survei.

**4. Siapa persis target penggunanya?**
Pemilik sekaligus operator UMKM F&B dan retail mikro di kota Tier 1 dan Tier 2, omzet Rp 5 sampai 100 juta per bulan, sudah menerima minimal dua kanal pembayaran, dijalankan tim satu sampai sepuluh orang tanpa analis data. Kami sengaja mempersempit ke F&B Bandung dan Jabodetabek dulu agar fokus.

---

## B. TEKNIS, FEASIBILITY & ALGORITMA

**5. Sejujurnya, apa yang sudah jadi dan apa yang belum?**
Yang sudah berfungsi dan publik: prototype web tujuh modul lengkap dengan dashboard, Health Score, dan rekomendasi, berjalan di atas sample dataset. Yang belum: backend nyata, ingestion file sungguhan, autentikasi, dan penyimpanan permanen, semuanya sedang dibangun. Kami memisahkan ini secara terbuka di proposal supaya panel tidak salah menilai kematangannya.

**6. Kalau backend belum ada, apa dasar Anda mengklaim ini bisa dibangun?**
Health Score sudah berjalan penuh di sisi front-end atas sample data, jadi logikanya terbukti jalan, tinggal dipindah ke backend. Stack yang kami pilih (FastAPI, PostgreSQL) sengaja boring dan matang, dan tim kami berlatar data engineering. Risiko terbesarnya bukan bisa atau tidak dibangun, melainkan kematangan parser antar-issuer, dan itu kami jawab dengan template parser per kanal.

**7. Health Score ini apakah benar-benar AI atau sekadar rumus?**
Kami tidak melebih-lebihkan. Saat ini kombinasi statistik klasik, aturan, dan regresi ringan, bukan model black-box. Itu pilihan sadar: bisa dijelaskan ke UMKM sehingga membangun kepercayaan, dan realistis untuk data yang masih tumbuh. Saat volume cukup, baru naik ke gradient boosting atau clustering.

**8. Bagaimana memastikan skornya akurat dan tidak menyesatkan?**
Setiap skor bisa ditelusuri per komponen, jadi transparan alasannya. Bobot dan benchmark masih perlu dikalibrasi di lapangan, dan itu kami akui sebagai keterbatasan. Kualitas diukur lewat target kesalahan di bawah 15%, uplift yang divalidasi lewat studi kasus, dan porsi rekomendasi yang benar-benar diterapkan pengguna.

**9. Kalau data yang diunggah UMKM kotor atau salah, bagaimana?**
Itu risiko utama produk kami, garbage in garbage out. Kami tangani dengan validasi schema, penghapusan duplikasi berdasarkan referensi, normalisasi kategori, deteksi anomali, plus fitur ubah dan hapus untuk pengguna. Justru karena itu kami tidak mengejar volume besar terlalu cepat, agar akurasi terbukti dulu.

---

## C. COMPLEXITY

**10. Apa yang sulit dari ini, bukankah hanya menampilkan grafik dari CSV?**
Yang sulit bukan grafiknya, tapi menyatukan format export yang berbeda-beda dari tiap issuer QRIS, marketplace, dan bank ke satu skema, lalu menjaga akurasi skor di atas data yang kualitasnya bervariasi. Tidak ada standar tunggal, jadi normalisasi lintas kanal inilah inti tantangan teknisnya.

**11. Di titik mana sistem ini akan pecah kalau pengguna banyak?**
Titik patahnya bukan jumlah UMKM, melainkan saat analytics dijalankan sinkron dan mulai menghambat permintaan pengguna. Itu terjadi jauh sebelum ribuan pengguna. Karena itu sejak awal kami pakai agregasi terjadwal, bukan hitung saat diminta, dan arsitektur modular yang siap naik ke antrian pekerjaan.

---

## D. TEAM READINESS

**12. Tim cuma dua orang. Realistis mengeksekusi ini?**
Untuk fase MVP, dua founder justru cukup dan lincah, dan kami sudah membuktikannya lewat prototype tujuh modul plus metodologi Health Score. Kami sadar gap-nya di UI/UX dan pengembangan bisnis, dan itu kami tutup dengan advisor industri tanpa merekrut penuh waktu, lalu rekrut setelah pre-seed. Kami tidak berpura-pura sudah jadi perusahaan besar.

**13. Kalau salah satu founder keluar, apa yang terjadi?**
Itu risiko bus factor yang nyata untuk tim dua orang. Mitigasi kami adalah dokumentasi arsitektur dan metodologi yang eksplisit, pembagian kepemilikan yang jelas per milestone, dan komitmen equity yang mengikat. Menambah engineer setelah pre-seed juga mengurangi ketergantungan pada satu orang.

**14. Bagaimana Anda membagi peran dan mengambil keputusan?**
Beni memegang produk, UX, strategi, dan bisnis; Arsya memegang teknologi, backend, data, dan AI. Keputusan produk di Product Lead, teknis di Tech Lead, strategis diambil bersama lewat sinkronisasi mingguan. Karena kecil, kami bisa memutuskan cepat berbasis data validasi.

---

## E. BUSINESS MODEL & ROI

**15. Dari mana uangnya, bagaimana PULSA menghasilkan pendapatan?**
Freemium untuk UMKM plus lisensi institusi. UMKM bayar Premium Rp 49 ribu sampai 199 ribu per bulan, sementara institusi seperti agregator, asosiasi, koperasi, dan pemda bayar lisensi Rp 5 sampai 50 juta per bulan untuk dashboard portofolio merchant binaan. Segmen institusi inilah yang mensubsidi pengguna gratis.

**16. ROI 42 kali itu terdengar terlalu bagus. Jelaskan.**
Itu ROI dari sisi UMKM, bukan pendapatan kami. Biayanya Rp 588 ribu setahun, potensi tambahan omzetnya sekitar Rp 25 juta setahun. Tapi kami tegaskan, angka uplift 10 sampai 15% ini masih asumsi yang belum divalidasi lapangan, dan itu justru titik paling perlu kami buktikan lewat studi kasus di closed beta.

**17. Kapan PULSA balik modal atau untung?**
Pada tahun ketiga di skala 1.000 UMKM, pendapatan kami perkirakan sekitar Rp 0,6 miliar per tahun, didominasi lisensi institusi, dan mendekati titik impas operasional untuk tim ramping. Tahun pertama dan kedua ditopang hibah, kredit cloud, dan pre-seed. Kami sengaja tidak menjanjikan profit cepat.

**18. WTP dari survei kecil. Apa dasar pricing Rp 49 ribu?**
Dari survei, tidak ada satu pun yang memilih hanya gratis dan 57,1% bersedia membayar Rp 50 sampai 100 ribu. Kami pasang Premium di ujung bawah rentang itu untuk menurunkan hambatan. Angka ini akan diuji ulang saat monetisasi nyata, dan kami siap menyesuaikan.

---

## F. PERTANYAAN JEBAKAN (titik paling rawan)

**19. Target Anda melompat dari 30 ke 200, lalu ke 1.000. Bukankah itu tidak realistis?**
Kami sudah menurunkannya justru agar realistis untuk tim dua orang. Yang penting, lompatan itu bukan menjual seribu pengguna satu per satu, melainkan lewat tiga sampai empat kemitraan distribusi, masing-masing membawa ratusan UMKM. Kami juga memisahkan pengguna terdaftar dan aktif, serta menyiapkan jalur organik cadangan sekitar 600 sampai 700 bila kemitraan tertunda.

**20. Apa yang mencegah BukuWarung atau pemain besar meniru ini besok?**
Tidak ada fitur tunggal yang tak bisa ditiru, dan kami jujur soal itu. Pembedanya adalah kombinasi konsolidasi lintas kanal sebagai bawaan, Health Score yang terdefinisi, fokus khusus UMKM mikro, dan yang paling sulit ditiru, efek jaringan data: makin banyak UMKM makin kaya benchmark sektor kami. Keunggulan kami adalah fokus dan kecepatan, bukan mengklaim tak tertandingi.

**21. Ini menyangkut data keuangan UMKM. Bagaimana soal privasi dan kepatuhan?**
Kami mengikuti UU PDP dengan persetujuan eksplisit, prinsip data seperlunya, dan opt-in terpisah untuk analitik agregat anonim, ditambah enkripsi dan kontrol akses. Bila kelak masuk ranah ITSK, kami selaras dengan POJK 3/2024 dan terbuka pada jalur regulatory sandbox.

**22. Kenapa Bank Indonesia harus peduli pada solusi ini?**
Karena PULSA memperkuat pemanfaatan data QRIS yang sudah masif, mendorong UMKM naik kelas, dan selaras dengan Blueprint Sistem Pembayaran. Data agregat anonimnya juga bisa membantu pemetaan ekonomi mikro untuk kebijakan. Ini menutup gap antara digitalisasi pembayaran dan inklusi ekonomi.

**23. Apa yang membuat saya percaya Anda akan menyelesaikan ini, bukan menyerah setelah hackathon?**
Kami sudah menunjukkan eksekusi lewat prototype publik dan metodologi yang matang tanpa didanai. Milestone 12 bulan kami konkret dengan pemilik yang jelas, dan komitmen waktu kami tegas. Kami datang dengan angka yang diturunkan agar bisa ditepati, bukan angka besar yang mengesankan tapi meleset.

**24. Apa satu hal yang paling Anda khawatirkan tentang PULSA?**
Pembuktian bahwa rekomendasi kami benar-benar menaikkan omzet UMKM. Itu asumsi terbesar kami. Kalau closed beta menunjukkan uplift di bawah harapan, kami akan pivot pada nilai yang sudah pasti, yaitu penghematan waktu dan konsolidasi data, sambil memperbaiki mesin rekomendasi.

---

## G. TIPS MENJAWAB DI HADAPAN PANEL
- Akui keterbatasan lebih dulu, lalu tutup dengan langkah konkret. Juri BI menghargai kejujuran di atas klaim mulus.
- Selalu bedakan tiga hal saat ditanya angka: nilai untuk UMKM, pendapatan PULSA, dan asumsi yang belum terbukti.
- Bawa pembicaraan kembali ke bukti nyata: prototype live, survei, wawancara, dan roadmap yang bisa ditepati.
- Jangan berdebat soal apakah fitur bisa ditiru. Alihkan ke fokus, kecepatan, dan efek jaringan data.
- Kalau tidak tahu, katakan tidak tahu, lalu jelaskan bagaimana Anda akan mencari tahu.

---

*Simulasi Q&A Juri - PULSA / 404 Inovators*
