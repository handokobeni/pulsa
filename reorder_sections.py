#!/usr/bin/env python3
"""Reorder sections in PROPOSAL_TAHAP2.md to match official SIMULASI template:
  Old 4 (Technical Validation)        -> New 5
  Old 5 (Innovation & Differentiation) -> New 4
  Old 6 (Market Validation)            -> New 7
  Old 7 (Business Model & Scalability) -> New 6
"""
import re
from pathlib import Path

FILE = Path(__file__).parent / "PROPOSAL_TAHAP2.md"
content = FILE.read_text(encoding="utf-8")

# Split on top-level section headers `## N. NAME` (preserve the delimiter)
parts = re.split(r'(?m)(?=^## \d+\. )', content)

# parts[0] = pre-section content (title etc.)
preface = parts[0]
sections = parts[1:]

# Index sections by leading number
indexed = {}
for s in sections:
    m = re.match(r'^## (\d+)\. (.+?)\n', s)
    if not m:
        continue
    indexed[int(m.group(1))] = s

# Re-map old numbers to new numbers
remap = {1: 1, 2: 2, 3: 3, 4: 5, 5: 4, 6: 7, 7: 6, 8: 8}

renumbered = {}
for old_num, new_num in remap.items():
    sec = indexed[old_num]
    # Replace the leading `## OLD. ` with `## NEW. `
    sec = re.sub(r'^## \d+\. ', f'## {new_num}. ', sec, count=1)
    renumbered[new_num] = sec

# Write in order 1..8
output_parts = [preface]
for n in range(1, 9):
    output_parts.append(renumbered[n])

FILE.write_text(''.join(output_parts), encoding="utf-8")
print("Reordered. New section order:")
for n in range(1, 9):
    m = re.search(r'^## \d+\. (.+?)$', renumbered[n], re.MULTILINE)
    print(f"  {n}. {m.group(1)}")
