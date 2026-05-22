#!/usr/bin/env python3
"""Count words per section in PROPOSAL_TAHAP2.md against panduan limits."""
import re
from pathlib import Path

FILE = Path(__file__).parent / "PROPOSAL_TAHAP2.md"
content = FILE.read_text(encoding="utf-8")

# Find all "### Section Name *(maks. NUM kata)*" headings + their content
pattern = re.compile(
    r'^###\s+(.+?)\s+\*\(maks\.\s+(\d+)\s+kata\)\*\s*$([\s\S]*?)(?=^###\s+|^##\s+|\Z)',
    re.MULTILINE,
)

def clean_for_count(text: str) -> str:
    """Strip markdown syntax + table syntax + code fences so word count = visible prose."""
    # Remove fenced code blocks
    text = re.sub(r'```[\s\S]*?```', '', text)
    # Remove table separator rows (e.g. |---|---|)
    text = re.sub(r'^\|[\s\-:|]+\|\s*$', '', text, flags=re.MULTILINE)
    # Remove leading "|" pipes (but keep table content)
    text = text.replace('|', ' ')
    # Remove markdown emphasis markers
    text = re.sub(r'[*_`]', '', text)
    # Remove italic/bold residue
    text = re.sub(r'[<>]', '', text)
    # Remove markdown links syntax but keep text
    text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', text)
    # Remove HTML-like tags (br, etc.)
    text = re.sub(r'<[^>]+>', '', text)
    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def word_count(text: str) -> int:
    cleaned = clean_for_count(text)
    if not cleaned:
        return 0
    # Count "words" as sequences of alphanumeric + Indonesian chars
    words = re.findall(r"[A-Za-zÀ-ÿ0-9\-./]+", cleaned)
    # Filter out pure punctuation
    words = [w for w in words if any(c.isalnum() for c in w)]
    return len(words)

print(f"{'Section':<60}{'Count':>8}{'Limit':>8}{'Status':>10}")
print("=" * 86)

total_over = 0
total_sections = 0

for match in pattern.finditer(content):
    title = match.group(1).strip()
    limit = int(match.group(2))
    body = match.group(3)
    wc = word_count(body)
    status = "OK" if wc <= limit else f"OVER +{wc - limit}"
    marker = "✅" if wc <= limit else "❌"
    print(f"{title:<60}{wc:>8}{limit:>8}{marker} {status:>8}")
    total_sections += 1
    if wc > limit:
        total_over += 1

print("=" * 86)
print(f"Total: {total_sections} sections, {total_over} over limit")
