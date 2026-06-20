# Stax Landing Page — Design Spec

**Date:** 2026-06-19
**Owner:** Beni Handoko (Product Lead, 404 Inovators)
**Status:** Approved design, awaiting implementation
**Implementation skill:** `frontend-design` (per user request — skip `writing-plans` since this is a single-page UI build)
**Branch:** `brand-stax`

---

## 1. Overview

Landing page promosi produk **Stax** — aplikasi analitik transaksi & AI insight untuk UMKM Indonesia. Halaman bersifat promosi (consumer-facing, B2C), bukan dokumen institusional. PULSA tetap di proposal sebagai project codename; landing page hanya menampilkan brand **Stax**.

Primary goal: drive **Coba Demo** (langsung ke prototype) dan capture **Waitlist** (email/WA UMKM untuk follow-up).

---

## 2. Goals & Non-Goals

**Goals**
- Promosikan Stax sebagai produk modern + UMKM-friendly dalam 1 halaman scroll
- Drive UMKM ke prototype interaktif (existing di `prototype/index.html`)
- Capture lead via waitlist form (untuk closed beta Tahap 3 atau post-hackathon)
- Bisa di-link sebagai bukti pendukung di proposal Tahap 2/3 jika juri klik
- Deploy ke GitHub Pages tanpa build pipeline

**Non-Goals**
- Bukan dashboard/app — UI utama tetap di `prototype/`
- Bukan pricing page formal (skip pricing section)
- Bukan blog/changelog/company page
- Bukan multi-page site (single page scroll only)
- Tidak melibatkan backend nyata (waitlist form bisa pakai Formspree/Tally/Netlify Forms — TBD via implementation)

---

## 3. Locked Decisions (from brainstorming)

| # | Decision | Value |
|---|---|---|
| Brand | Brand name | **Stax** |
| CTA | Primary | "Coba Demo" → buka `prototype/index.html?login=1&section=dashboard&demo=1` tab baru |
| CTA | Secondary | "Daftar Waitlist" → form 3 fields (nama, WA/email, kategori usaha) |
| Visual | Mood | Hybrid modern: **dark hero/footer + light body** |
| Visual | Hero approach | Outcome + Showcase (tagline + sub + dashboard mockup floating) |
| Stack | Tech | Tailwind via CDN + minimal vanilla JS |
| Stack | Hosting | GitHub Pages dari folder `landing/` di branch `brand-stax` |

---

## 4. Visual Design System

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `dark-bg` | `#0B1020` | Hero & footer background (deep navy black) |
| `dark-bg-2` | `#0F172A` | Secondary dark sections (Slate 950) |
| `dark-text` | `#F8FAFC` | Text on dark sections |
| `dark-muted` | `#94A3B8` | Subtle text on dark (Slate 400) |
| `light-bg` | `#FAFAFA` | Body/light sections |
| `light-bg-2` | `#FFFFFF` | Cards on light |
| `light-text` | `#0F172A` | Text on light sections |
| `light-muted` | `#64748B` | Subtle text on light (Slate 500) |
| `primary` | `#4F46E5` | Primary CTA, brand accent (Indigo 600) |
| `primary-light` | `#818CF8` | Primary hover/glow (Indigo 400) |
| `accent` | `#10B981` | "Cuan up", success, glow effect (Emerald 500) |
| `accent-glow` | `rgba(16, 185, 129, 0.25)` | Glow for hero mockup |
| `border-light` | `#E2E8F0` | Card borders on light |
| `border-dark` | `rgba(255, 255, 255, 0.08)` | Card borders on dark |

### Typography
- **Display heading** (h1, h2 hero): `Inter` (or `Plus Jakarta Sans` if loadable) — `font-weight: 700-800`, tracking tight
- **Body heading** (h3, h4): `Inter` — `font-weight: 600-700`
- **Body text**: `Inter` — `font-weight: 400`, line-height 1.6
- **Mono** (code, reference IDs): `JetBrains Mono` — for stat numbers if used decoratively
- **Sizes** (mobile-first, scale at md:):
  - H1 hero: 2.5rem mobile → 4rem desktop
  - H2 section: 1.875rem mobile → 2.5rem desktop
  - H3 subsection: 1.25rem mobile → 1.5rem desktop
  - Body: 1rem mobile → 1.0625rem desktop

### Spacing & Layout
- Container max-width: `1280px` (Tailwind `max-w-7xl`)
- Section vertical padding: `py-20 md:py-28` (light) / `py-24 md:py-32` (hero & footer)
- Horizontal padding: `px-6 md:px-12`
- Grid gap: `gap-8` cards, `gap-6` tight rows
- Card border-radius: `rounded-2xl`
- Button border-radius: `rounded-xl`

### Iconography & Visual Style
- Heroicons (outline + solid via CDN-inline SVG) for icons
- Subtle gradient backgrounds in hero (radial emerald glow behind mockup)
- Soft shadows on cards: `shadow-[0_4px_20px_rgba(0,0,0,0.08)]` for light, `shadow-[0_4px_24px_rgba(79,70,229,0.15)]` for dark glow
- Borders: 1px solid with very low alpha on dark sections, 1px solid Slate 200 on light

---

## 5. Section-by-Section Specification

### Section 1 — Hero (DARK)

**Background:** `dark-bg` (`#0B1020`) with subtle radial gradient (emerald glow at 30% opacity behind mockup).

**Layout:** 2-column on desktop — left = copy (60% width), right = visual mockup (40% width). Stacked on mobile (copy first, mockup below).

**Left column (copy):**
- **Eyebrow tag** (small, indigo): `STAX — AI FINANCIAL INTELLIGENCE`
- **H1 tagline** (display, white, max ~14 words):
  > **Tumpuk data, tumpuk cuan.**
- **Sub paragraph** (muted, 2 sentences):
  > Stax membaca transaksi multi-channel Anda — QRIS, marketplace, transfer, manual — lalu memberitahu langkah berikutnya untuk naik omzet. Bukan dashboard. Bukan kasir. Ini intelligence.
- **CTA group** (flex row):
  - Primary: `Coba Demo Gratis →` (indigo bg, white text, large)
  - Secondary: `Daftar Waitlist` (outline white, transparent bg)
- **Trust line** (subtle, below CTA):
  > 🔒 Aman & sesuai UU PDP · ⚡ Tanpa instalasi · 📊 Data Anda, milik Anda

**Right column (visual):**
- Dashboard mockup floating, slight tilt (`rotate-[-2deg] hover:rotate-0 transition-transform`)
- Emerald glow behind mockup (`bg-emerald-500/20 blur-3xl`)
- Mockup content (static image extracted from `attachments/02_dashboard.png` OR live iframe-embed of prototype OR custom-drawn HTML mockup)
- **Choice for implementation**: use the existing `attachments/02_dashboard.png` (already optimized 2x DPI) → simpler, no iframe overhead

### Section 2 — Problem Hook (TRANSITION DARK → LIGHT)

**Background:** Transition section — top fades from `dark-bg` to `light-bg` with diagonal gradient OR clean break with light-bg.

**Layout:** Single column centered, max-width `prose-lg`.

**Content:**
- **H2:** "Anda punya data di 4 tempat. Tapi data itu tidak pernah ngomong."
- **Subhead:** Setiap hari Anda menerima pembayaran dari banyak channel. Setiap channel menyimpan rekap. Tapi tidak ada yang menggabungkan semuanya jadi satu cerita yang bisa Anda baca.
- **Visual: 4 channel cards** dengan icon (QRIS, Marketplace, Transfer, Manual) bertumpuk visually dengan slight rotation:
  - Each card: icon + label + sample "Rp X.XXX dari Y transaksi" (mock data)
  - Cards have stacked depth (drop-shadow each, slight offset)
- **Closing line** (centered, larger):
  > Sampai sekarang, data itu cuma jadi catatan. **Stax membaca pola di dalamnya.**

### Section 3 — Solution: 3 Pilar (LIGHT)

**Background:** `light-bg`

**Layout:** Section header + 3-column grid (stack on mobile).

**Content:**
- **H2 (centered):** "Tiga cara Stax menumpuk data Anda jadi cuan"
- **Subhead (centered, muted):** Bukan satu dashboard rumit. Tiga modul fokus yang saling melengkapi.

**3 Pilar Cards:**

**Card A — Multi-channel Ledger**
- Icon: stacked database layers (custom inline SVG)
- Title: **Stax Ledger**
- Body: Konsolidasi otomatis transaksi QRIS, POS, marketplace, transfer, dan input manual ke satu ledger usaha. Upload Excel/CSV — Stax baca semua.
- Mini visual: stacked layer icon dengan label channels

**Card B — Business Health Score**
- Icon: heart + chart pulse
- Title: **Stax Score**
- Body: Skor kesehatan bisnis 0–100 dari 5 komponen (stabilitas omzet, frekuensi transaksi, diversitas pelanggan, diversitas channel, tren pertumbuhan). Bagikan ke lembaga keuangan saat butuh modal.
- Mini visual: ring score "76 — B" mockup

**Card C — AI Recommendations**
- Icon: sparkle + lightbulb
- Title: **Stax AI**
- Body: Rekomendasi mingguan yang sudah pakai bahasa Anda, bukan jargon. "Tambah stok ayam bakar 20% Jumat ini" — bukan "optimize inventory turnover ratio".
- Mini visual: rec card "[Target] Dorong Nasi Bakar Ayam +15 unit dalam 30 hari" (high priority)

### Section 4 — How It Works (LIGHT, alternating bg)

**Background:** `light-bg-2` (white) atau pakai card containers di light-bg.

**Layout:** 3 steps horizontal (stack on mobile).

**Content:**
- **H2 (centered):** "Tiga langkah saja"
- **3 Steps:**

**Step 1 — Upload data**
- Number badge: `01`
- Title: **Tumpuk data Anda**
- Body: Drag-drop Excel/CSV dari export QRIS, marketplace, atau mutasi bank. Atau input manual transaksi tunai. Tanpa ganti POS, tanpa integrasi rumit.
- Visual: Screenshot ingestion section dari prototype (cropped) atau illustration upload zone

**Step 2 — Stax baca pola**
- Number badge: `02`
- Title: **Stax baca polanya**
- Body: Engine kami ekstrak 5 komponen kesehatan bisnis dari data Anda — semua dalam bahasa Indonesia, bukan accounting jargon.
- Visual: Health Score ring + 5 component bars mockup

**Step 3 — Dapat rekomendasi**
- Number badge: `03`
- Title: **Dapat rekomendasi yang jelas**
- Body: Rekomendasi mingguan terprioritasi: tambah stok, optimasi jam buka, bundling promo. Tinggal ikuti.
- Visual: 3 recommendation cards stacked (high/medium/low priority)

### Section 5 — Social Proof (LIGHT CREAM)

**Background:** `#FDFAF3` atau soft cream tone untuk variety.

**Layout:** Stats row + Quote card.

**Content:**

**Top — Stats row** (3 columns, large numbers):
- **100%** terima QRIS *(N=7 survei UMKM)*
- **85,7%** pilih file upload sebagai onboarding *(divalidasi)*
- **0%** mau bayar nol *(WTP positif Rp 50K–100K/bulan)*

Below stats: small label "**Dari survei N=7 UMKM kuliner, retail, dan digital product di Bandung, Cianjur, Bekasi, dan nasional (Mei 2026)**"

**Bottom — Quote card** (testimonial style):
- Large quote mark icon
- Quote: *"Yang jadi masalah bukan analisis manual. Tools yang ada belum cukup membantu. Saya pengen aplikasi yang ngasih business recommendation dari data yang saya punya."*
- Attribution: **— Pemilik kafe di Bandung, wawancara mendalam Mei 2026**
- Sub note: *(Diparafrase dari wawancara — identitas anonim per persetujuan narasumber.)*

### Section 6 — CTA Footer (DARK)

**Background:** Back to `dark-bg` (`#0B1020`) untuk closing impact.

**Layout:** Centered single column, max-width 720px.

**Content:**

**Top — Closing CTA:**
- **H2 (white, large):** "Siap nambah cuan?"
- **Subhead (muted):** Stax sedang closed beta. Daftar untuk dapat akses lebih awal, atau coba demo langsung sekarang.

**Middle — Action group:**

*Waitlist Form* (card with dark glass effect):
- Field 1: Nama lengkap (text input)
- Field 2: WhatsApp atau Email (text input)
- Field 3: Kategori usaha (select: Kuliner/F&B, Retail/Toko, Jasa, Marketplace seller, Lainnya)
- Submit: "Daftar Waitlist →" (indigo button)
- Privacy note: 🔒 Data Anda hanya untuk update Stax. Tidak dibagikan.

*OR divider:* "— atau —"

*Demo CTA:* Large outlined button "Coba Demo Sekarang →" (link ke `prototype/index.html?login=1&section=dashboard&demo=1`)

**Bottom — Footer link block:**
- Left: Logo "STAX" small + 1 line tagline
- Center: Links — "Demo · Proposal PULSA · GitHub · Kontak"
- Right: Brand line — *"Stax — initiative of PULSA project by 404 Inovators · Hackathon Digdaya 2026"*

Copyright line: *© 2026 404 Inovators · Dibuat di Indonesia untuk UMKM Indonesia*

---

## 6. Technical Architecture

### File Structure
```
landing/
├── index.html          # All sections, semantic HTML
├── style.css           # Custom CSS (font imports, custom animations, overrides Tailwind)
├── script.js           # Waitlist form handler, scroll animations, smooth scroll
└── assets/
    ├── og-image.png    # Open Graph preview (1200x630)
    ├── favicon.svg     # Inline SVG favicon
    └── dashboard-mockup.png  # Copy from attachments/02_dashboard.png
```

### Tech Choices
- **Tailwind CSS**: pre-built static CSS file shipped via versioned CDN with SRI hash — *not* Tailwind Play CDN (see Security Note below)
- **Custom CSS** (`style.css`) for: font imports, custom keyframe animations, mockup glow, brand utility classes Tailwind doesn't cover
- **Vanilla JS** (`script.js`) for: form submit, scroll-triggered animations (Intersection Observer), smooth-scroll-to-section, CTA button → open prototype tab
- **Form handling**: For prototype/demo, the waitlist form will POST to a Formspree endpoint OR a simple `mailto:` fallback. Pick one in implementation; **default: Formspree free tier** (no backend needed). Add `<form action="https://formspree.io/f/YOUR_ID" method="POST">`.

### CDN & Resources
- **Tailwind CSS from jsdelivr (versioned, SRI-pinned)**:
  ```html
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    integrity="sha384-LQHGoMv4XlYLT+G/zlnJF0a7nB68LiEvF+Z8d4OqHQ7nUKVaRjUx4Z4w7BJYE3Bf"
    crossorigin="anonymous"
  >
  ```
  Note: Tailwind v2 ships full ready-to-use CSS (~70KB gzipped). We are *not* using the Play CDN (`cdn.tailwindcss.com`) — it's a runtime utility generator without SRI support, which fails subresource integrity check. If we need Tailwind v3+ JIT features, regenerate the SRI hash at implementation time and pin to a specific minor version.
- **Google Fonts** (Inter, optional JetBrains Mono) — loaded via standard `<link rel="stylesheet">` (Google guarantees stable hashes; SRI optional here)
- **Inline SVG icons** (no icon CDN dependency, no SRI concerns)

### Security Note (Subresource Integrity)
Per [security-guidance hook](../../../.claude/plugins/...), external scripts/styles must carry `integrity="sha384-..."` + `crossorigin="anonymous"` attributes to defend against CDN compromise.

**Decision tree for Tailwind**:
- **Default (current spec):** Use versioned Tailwind v2 from jsdelivr with SRI hash above. Trade-off: locked to v2 utility set, no JIT.
- **Alternative if v3+ needed:** Run `npx tailwindcss -i input.css -o output.css` locally one time, commit the generated CSS file (`landing/tailwind.min.css`) — fully offline, no CDN, no SRI concern. Adds one-time build step (~30 sec, no permanent tooling).
- **Rejected:** Tailwind Play CDN (`cdn.tailwindcss.com`) — fails SRI requirement.

Implementation should also add `integrity` + `crossorigin` to any other external resource (Formspree's bundle if used, etc.).

---

## 7. Content Inventory (Copy text — final)

### Brand line
> Stax — AI Financial Intelligence

### Tagline (H1)
> Tumpuk data, tumpuk cuan.

### Hero sub
> Stax membaca transaksi multi-channel Anda — QRIS, marketplace, transfer, manual — lalu memberitahu langkah berikutnya untuk naik omzet. Bukan dashboard. Bukan kasir. Ini intelligence.

### Hero trust line
> 🔒 Aman & sesuai UU PDP · ⚡ Tanpa instalasi · 📊 Data Anda, milik Anda

### Problem H2
> Anda punya data di 4 tempat. Tapi data itu tidak pernah ngomong.

### Problem sub
> Setiap hari Anda menerima pembayaran dari banyak channel. Setiap channel menyimpan rekap. Tapi tidak ada yang menggabungkan semuanya jadi satu cerita yang bisa Anda baca.

### Problem closing
> Sampai sekarang, data itu cuma jadi catatan. **Stax membaca pola di dalamnya.**

### Solution H2
> Tiga cara Stax menumpuk data Anda jadi cuan

### How it works H2
> Tiga langkah saja

### Social proof H2 (implicit, just stats)
- 100% terima QRIS
- 85,7% pilih file upload
- 0% mau bayar nol

### Quote (anonymized)
> "Yang jadi masalah bukan analisis manual. Tools yang ada belum cukup membantu. Saya pengen aplikasi yang ngasih business recommendation dari data yang saya punya."
>
> — Pemilik kafe di Bandung, wawancara mendalam Mei 2026

### CTA footer H2
> Siap nambah cuan?

### CTA footer sub
> Stax sedang closed beta. Daftar untuk dapat akses lebih awal, atau coba demo langsung sekarang.

### Privacy note
> 🔒 Data Anda hanya untuk update Stax. Tidak dibagikan.

### Footer brand line
> Stax — initiative of PULSA project by 404 Inovators · Hackathon Digdaya 2026

### Copyright
> © 2026 404 Inovators · Dibuat di Indonesia untuk UMKM Indonesia

---

## 8. Animations & Interactions

**Page load:**
- Hero h1 + sub fade-up sequenced (200ms stagger)
- Dashboard mockup slide-in from right with subtle scale (`scale-95 → scale-100`)
- Emerald glow pulse (gentle, 4s loop)

**Scroll-triggered (Intersection Observer):**
- Each section fade-up + translate-y(20px) → translate-y(0) when 20% in viewport
- Stagger children within section (cards animate sequentially)

**Hover states:**
- Cards: subtle lift (`translate-y(-4px)` + shadow increase)
- CTA buttons: indigo brighten + slight scale (`scale-105`)
- Dashboard mockup hero: tilt straightens (`rotate-0`)

**Form interactions:**
- Input focus ring: indigo
- Submit success: replace form with success message ("Terima kasih! Kami akan menghubungi Anda saat akses dibuka.")
- Submit error: inline error message

**No JS frameworks:** Pure Intersection Observer + classList toggle. Smooth scroll via CSS `scroll-behavior: smooth` on `<html>`.

---

## 9. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| **Mobile (<768px)** | Single column everywhere. Hero stacks (copy on top, mockup below). CTAs full-width. 3-column grids become 1-column. |
| **Tablet (768-1024px)** | Hero remains stacked (mockup full width below). 3-column grids stay 3-column but tighter. |
| **Desktop (1024px+)** | Hero 60/40 split. All grids full width. Comfortable spacing. |
| **Large (1280px+)** | Centered container. Increased typography sizes. |

Test orientations: portrait phone, landscape tablet, desktop wide.

---

## 10. Accessibility (a11y)

- Semantic HTML5: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Heading hierarchy: single h1 in hero, h2 per section, h3 for cards
- All images have alt text (mockup: "Dashboard Stax menampilkan KPI omzet, tren revenue, dan rekomendasi AI")
- Form fields with `<label>` (visible) + `aria-describedby` for hints
- Focus indicators: visible ring (indigo) on all interactive
- Color contrast: WCAG AA minimum (4.5:1 for body, 3:1 for large text)
- Reduced motion: respect `prefers-reduced-motion: reduce` — disable animations
- Keyboard navigation: tab order natural, skip-to-content link

---

## 11. Performance Budget

| Resource | Target |
|---|---|
| HTML | <30 KB |
| Custom CSS | <15 KB |
| Tailwind CDN | (external, ~100KB cached) |
| Custom JS | <5 KB |
| Hero mockup image | <200 KB (compressed PNG/WebP) |
| Total page weight (without Tailwind CDN) | <300 KB |
| LCP target | <2.5s |
| First Contentful Paint | <1s |

- Use `loading="lazy"` for below-fold images
- Preload critical fonts: `<link rel="preload" as="font" type="font/woff2">`
- Inline critical CSS for hero (above-fold)

---

## 12. SEO & Open Graph

```html
<title>Stax — Tumpuk data, tumpuk cuan. AI Financial Intelligence untuk UMKM</title>
<meta name="description" content="Stax membaca transaksi multi-channel UMKM lalu memberitahu langkah berikutnya untuk naik omzet. Coba demo gratis.">
<meta property="og:title" content="Stax — AI Financial Intelligence untuk UMKM">
<meta property="og:description" content="Tumpuk data, tumpuk cuan. Stax mengubah transaksi QRIS, marketplace, dan kasir Anda jadi rekomendasi yang bisa langsung dipakai.">
<meta property="og:image" content="https://handokobeni.github.io/pulsa/landing/assets/og-image.png">
<meta property="og:type" content="website">
<meta property="og:locale" content="id_ID">
<meta name="twitter:card" content="summary_large_image">
```

---

## 13. Hosting & Deploy

### Initial deploy (this PR)
1. Folder `landing/` di root branch `brand-stax`
2. **Default deploy source**: `brand-stax` branch (preview before merging). After PR merge to `main`, GitHub Pages switches to serve from `main`.
3. URL initial: `https://handokobeni.github.io/pulsa/landing/` (path same regardless of source branch)
4. Configure via repo Settings → Pages → Source = branch + folder root

### Form backend (post-implementation)
- Sign up Formspree free tier → dapat endpoint
- Update `<form action="https://formspree.io/f/{ID}">` di `index.html`
- Tiap submit → email ke `handoko.ben@gmail.com`

### Future
- Custom domain `stax.id` jika sudah tersedia (sesuai BRANDING.md TODO)
- Migrate dari GitHub Pages ke Vercel/Netlify untuk edge speed (optional)

---

## 14. Open Questions / Implementation Decisions

| # | Question | Default if not decided |
|---|---|---|
| 1 | Waitlist form backend: Formspree, Tally, or mailto fallback? | **Formspree free tier** — user signs up + plugs endpoint |
| 2 | Hero dashboard mockup: static PNG, custom HTML mockup, or live iframe? | **Static PNG** dari `attachments/02_dashboard.png` — simpler & faster load |
| 3 | OG preview image: auto-generate or design manually? | **Design manually** — reuse hero dashboard mockup + brand line overlay |
| 4 | Should we add a "View Proposal Tahap 2 PDF" link in footer? | **Yes** — link to `attachments/P0670 - PULSA AI Financial Intelligence untuk UMKM Berbasis Data Transaksi.pdf` |
| 5 | Analytics tracking? (Plausible/GA) | **Skip for now** — minimal scope; user adds later if needed |

---

## 15. Success Criteria

- [ ] Landing page deployed di GitHub Pages, accessible publicly
- [ ] All 6 sections render correctly on mobile (iPhone SE 375px) and desktop (1440px)
- [ ] LCP <2.5s di throttled 3G
- [ ] WCAG AA color contrast lulus di semua text
- [ ] CTA "Coba Demo" buka prototype di tab baru, prototype loads dengan goal pre-set
- [ ] Waitlist form submit works (test submit → terima email konfirmasi)
- [ ] No console errors di Chrome devtools
- [ ] Responsive screenshot di 3 breakpoint terlihat polished

---

## 16. Out of Scope (Explicit)

- Multi-page (about, blog, docs) — bukan landing page
- I18n (English version) — skip, Indonesia-only
- A/B testing infrastructure — overkill
- Pricing page — skip per decision Q3
- Detail tim/founders — skip per scope
- Live chat widget — skip
- Cookie consent banner — skip (no analytics, no cookies)

---

**Implementation skill next:** `frontend-design` (per user request).
**File output:** `landing/index.html`, `landing/style.css`, `landing/script.js`, `landing/assets/*`.
