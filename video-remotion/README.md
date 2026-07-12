# PULSA — Video Motion Graphics (Remotion)

Motion-graphic pendukung video pitch PULSA (Digdaya x Hackathon 2026). Dibuat dengan [Remotion](https://remotion.dev) (video = React). Semua klip **1920×1080, 30fps, 16:9** (sesuai guideline).

## Isi (Compositions)

| ID | Durasi | Kegunaan di video |
|---|---|---|
| `PulsaOpener` | ~18 dtk | Gabungan semua scene (intro → time saved → revenue → health score → outro) |
| `IntroTitle` | 3 dtk | Kartu judul "404 Inovators · PULSA" (segmen 0–5 dtk) |
| `TimeSaved` | 4 dtk | Animasi "2 jam → 15 menit/minggu" (segmen 45–55 dtk) |
| `RevenueUplift` | 4 dtk | Potensi omzet +10–15% (dibingkai jujur sbg potensi) |
| `HealthScoreRing` | 4 dtk | Ring skor 0→75 + 5 komponen (segmen 35–45 & demo 120–150) |
| `OutroCTA` | 3 dtk | Status jujur + "Mari bangun bersama" (segmen 170–180) |

> Klip ini **bukan pengganti demo** (demo tetap screen recording). Ini sisipan intro/angka/outro yang dirakit di CapCut bersama screen recording + narasi.

## Cara pakai

```bash
cd video-remotion
npm install          # instalasi pertama (butuh Node 18+)
npm start            # buka Remotion Studio (preview & edit interaktif di browser)
```

### Render ke MP4
```bash
npm run render              # PulsaOpener → out/pulsa-opener.mp4
npm run render:intro       # hanya IntroTitle
npm run render:timesaved   # hanya TimeSaved
npm run render:healthscore # hanya HealthScoreRing
npm run render:outro       # hanya OutroCTA
```

Hasil render ada di folder `out/`.

## Kustomisasi cepat
- **Warna & font:** `src/brand.ts` (indigo #4F46E5, dst — selaras dengan `prototype/styles.css`).
- **Skor Health Score:** ubah `defaultProps={{target: 75}}` di `src/Root.tsx` atau saat render `--props='{"target":80}'`.
- **Teks/angka:** edit langsung di masing-masing `src/*.tsx`.
- **Font Inter identik prototype:** `npm i @remotion/google-fonts` lalu `loadFont()` di `brand.ts`.

## Catatan
- Remotion butuh Chrome/Chromium (diunduh otomatis saat render pertama).
- Lisensi Remotion: gratis untuk individu & perusahaan kecil; cek remotion.pro untuk tim besar.
