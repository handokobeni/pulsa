# PROMPT AI UNTUK VIDEO PULSA (3rd Submission)

> **Aturan main:**
> - **Demo (60–180 dtk) = screen recording prototype asli** — TIDAK pakai AI (model gambar buruk membuat UI/teks & guideline melarang klaim palsu).
> - AI video hanya untuk **intro + B-roll** di bagian pitch (0–60 dtk) & transisi.
> - Prompt ditulis **Bahasa Inggris** (model text-to-video paling akurat di English), setting tetap Indonesia.
> - Output: **16:9, 1080p**, klip 5–8 detik.
> - Cocok untuk **Veo 3 / Sora / Runway Gen-4 / Kling / Luma**. Untuk Runway/Kling, buang kalimat kamera jika perlu — inti prompt tetap sama.

---

## 🎨 GAYA VISUAL KONSISTEN (tempel di setiap prompt)

> **STYLE:** warm cinematic documentary, natural daylight, shallow depth of field, authentic Indonesian small-business setting, realistic (not cartoon), soft film grain, 16:9, color palette warm neutrals with subtle indigo/blue accent. Handheld-subtle camera.
>
> **NEGATIVE (hindari):** text overlays, on-screen UI, dashboards, charts, logos, watermarks, distorted hands, extra fingers, warped faces, cartoon, oversaturated, western/foreign setting.

*(Kebanyakan model punya kolom "negative prompt" terpisah — tempel bagian NEGATIVE di sana.)*

---

## 🎬 PROMPT PER SCENE (bagian Pitch)

### Scene A — Intro / Hook (0–5 dtk)
*Alternatif AI B-roll untuk latar logo. (Logo & teks lebih baik ditambah di CapCut/Canva, BUKAN di AI.)*

> Cinematic slow push-in over a cozy Indonesian coffee shop at morning, warm sunlight through window, steam rising from a cup, a QRIS payment sticker on the counter softly in focus then blurred. Calm, hopeful mood. Warm cinematic documentary style, shallow depth of field, 16:9, subtle film grain. No text, no UI, no logos.

### Scene B — Pengguna & pain point (5–15 dtk) ⭐ paling penting
> A 35-year-old Indonesian woman cafe owner in an apron standing behind her small counter, looking slightly overwhelmed, glancing at her phone showing payment notifications. Around her, subtle visual hints of multiple payment channels — a QRIS stand, a smartphone, cash in a drawer. Busy but warm neighborhood cafe. Documentary realism, natural light, shallow depth of field, gentle handheld camera, 16:9. No text, no charts, no UI.

### Scene C — "Menebak / kehilangan peluang" (sisipan 5–15 dtk)
> Close-up of the same Indonesian cafe owner thoughtfully looking at handwritten notes and a calculator, uncertain expression, scattered receipts on the table. Soft warm light, intimate documentary tone, shallow focus on her eyes, 16:9. Conveys guessing and uncertainty. No text, no digital screens.

### Scene D — Kafe ramai / peak hours (transisi, pasangkan narasi analytics)
> Time-lapse-style busy Indonesian coffee shop during lunch rush, customers ordering, barista making drinks, energetic but warm atmosphere, natural daylight. Cinematic documentary, 16:9, shallow depth of field. Conveys a peak busy hour. No text, no UI overlays.

### Scene E — Closing / pertumbuhan & kemitraan (170–180 dtk latar CTA)
> Uplifting slow-motion shot of a confident Indonesian cafe owner smiling while serving a customer, bright hopeful morning light, sense of growth and optimism. Warm cinematic style, 16:9, shallow depth of field. Leaves space on one side for text overlay. No text baked in.

---

## 🎙️ NARASI SUARA (Voice-Over)

**Teks narasi = ambil persis dari [VIDEO_SCRIPT_TAHAP3.md](VIDEO_SCRIPT_TAHAP3.md).** Dua opsi:

### Opsi 1 — Rekam suara sendiri (disarankan; autentik & gratis)
- Ruang sunyi, mic dekat mulut, tempo ~2,5–3 kata/detik, nada percaya diri & ramah.

### Opsi 2 — TTS (ElevenLabs / sejenis)
Pengaturan yang saya sarankan:
- **Bahasa:** Indonesia · **Voice:** pilih suara pria/wanita Indonesia yang hangat & jelas
- **Stability:** ~50% · **Similarity/Clarity:** ~75% · **Style exaggeration:** rendah
- Generate **per segmen** (bukan sekaligus) agar mudah sinkron ke visual per waktu.

---

## 🧑‍💼 OPSIONAL — AI Presenter/Avatar (HeyGen / Synthesia)
*Kalau tak mau tampil di kamera & tak mau VO polos. Pakai untuk bagian pitch berbicara ke kamera.*

- **Avatar:** pilih presenter tampak Asia/Indonesia, pakaian kasual-profesional
- **Bahasa/voice:** Indonesia
- **Script:** tempel narasi segmen 0–60 dtk dari naskah
- **Background:** polos/soft studio; nanti overlay B-roll di CapCut

---

## 🎵 MUSIK LATAR (bebas hak cipta)
- CapCut/Canva built-in royalty-free, YouTube Audio Library, atau **Suno** (AI musik — kamu punya haknya).
- Prompt Suno contoh: *"warm uplifting corporate acoustic, soft piano and light percussion, hopeful, minimal, background ambience, 120 bpm"*
- **Volume musik jangan menutup narasi** (syarat guideline).

---

## ✅ ALUR PRODUKSI RINGKAS
1. Generate Scene A–E (AI) → simpan klip 1080p 16:9
2. Rekam **screen recording demo** prototype (60–180 dtk)
3. Buat/rekam **narasi** semua segmen
4. Gabung di **CapCut**: pitch (B-roll + narasi) → demo (screen rec + narasi) → subtitle otomatis Indonesia → musik pelan
5. Cek durasi ≤180 dtk, ekspor 1080p, upload YouTube **publik**

---

*Prompt AI Video · PULSA / 404 Inovators · Digdaya x Hackathon 2026*
