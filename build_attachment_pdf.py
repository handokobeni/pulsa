#!/usr/bin/env python3
"""Build a single PDF from all PULSA prototype screenshots + diagrams.

Output: attachments/PULSA_Prototype_Lampiran.pdf
Page format: A4 landscape, each image centered with title bar at top.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ATTACH = Path(__file__).parent / "attachments"
OUTPUT = ATTACH / "PULSA_Prototype_Lampiran.pdf"

# A4 landscape at 200 DPI = 2339 × 1654 px
PAGE_W, PAGE_H = 2339, 1654
MARGIN = 60
TITLE_BAR_H = 90
WHITE = (255, 255, 255)
INDIGO = (79, 70, 229)
SLATE = (30, 41, 59)

PAGES = [
    ("01_login.png",            "1. Halaman Login & Register"),
    ("02_dashboard.png",        "2. Dashboard — KPI, Tren Revenue, Channel, Top Produk, Rekomendasi AI"),
    ("03_transactions.png",     "3. Transaksi — Tabel Multi-Channel dengan Filter & Pagination"),
    ("04_analytics.png",        "4. Analytics — Peak Hours Heatmap, Performa Produk, Revenue per Channel"),
    ("05_health_score.png",     "5. Business Health Score — 5 Komponen Tertimbang + Bagikan Skor"),
    ("06_recommendations.png",  "6. Rekomendasi AI — Goal-Driven + Stok, Operasional, Promosi"),
    ("07_ingestion.png",        "7. Import Data — Upload File, Input Manual, Riwayat Import"),
    ("architecture_diagram.png", "8. Diagram Arsitektur Sistem"),
    ("data_flow_diagram.png",    "9. Diagram Alur Data (Input → Processing → Analytics → Output)"),
]


def find_font(size: int) -> ImageFont.FreeTypeFont:
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf",
    ]
    for c in candidates:
        if Path(c).exists():
            return ImageFont.truetype(c, size=size)
    return ImageFont.load_default()


def compose_page(img_path: Path, title: str) -> Image.Image:
    canvas = Image.new("RGB", (PAGE_W, PAGE_H), WHITE)
    draw = ImageDraw.Draw(canvas)

    # Title bar (indigo strip at top)
    draw.rectangle([(0, 0), (PAGE_W, TITLE_BAR_H)], fill=INDIGO)
    font_title = find_font(28)
    draw.text((MARGIN, (TITLE_BAR_H - 28) // 2), title, fill=WHITE, font=font_title)

    # Footer
    font_foot = find_font(14)
    draw.text(
        (MARGIN, PAGE_H - 36),
        "PULSA — AI Financial Intelligence untuk UMKM Berbasis Data Transaksi  •  404 Inovators",
        fill=SLATE,
        font=font_foot,
    )

    # Image area
    inner_w = PAGE_W - 2 * MARGIN
    inner_h = PAGE_H - TITLE_BAR_H - MARGIN * 2 - 30  # leave space for footer

    img = Image.open(img_path).convert("RGB")
    iw, ih = img.size
    scale = min(inner_w / iw, inner_h / ih)
    new_w, new_h = int(iw * scale), int(ih * scale)
    img_resized = img.resize((new_w, new_h), Image.LANCZOS)

    off_x = (PAGE_W - new_w) // 2
    off_y = TITLE_BAR_H + MARGIN + (inner_h - new_h) // 2
    canvas.paste(img_resized, (off_x, off_y))

    # Subtle border around image
    draw.rectangle(
        [(off_x - 2, off_y - 2), (off_x + new_w + 1, off_y + new_h + 1)],
        outline=(226, 232, 240),
        width=2,
    )

    return canvas


def main():
    pages = []
    for filename, title in PAGES:
        src = ATTACH / filename
        if not src.exists():
            print(f"!! missing: {src}")
            continue
        print(f"composing {filename} ...")
        pages.append(compose_page(src, title))

    if not pages:
        raise SystemExit("no pages composed")

    print(f"writing {OUTPUT} ({len(pages)} pages)")
    pages[0].save(
        OUTPUT,
        format="PDF",
        save_all=True,
        append_images=pages[1:],
        resolution=200.0,
    )
    print(f"done: {OUTPUT.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
