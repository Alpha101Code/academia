"""Build contact-sheet PNGs (2x3 pages per image) from paper PDFs for visual skimming.

Usage:
    python tools/sheet.py <pdf> [<pdf> ...] [--from 3] [--out <dir>]

--from N   first (1-based) page to include (default 3: skips cover + formula list)
Writes <stem>-sheet<k>.png files into --out (default: CLAUDE_SCRATCHPAD or pdf folder).
Each cell is labelled with its page number in red.
"""
from __future__ import annotations

import os
import sys
from pathlib import Path

import fitz

COLS, ROWS = 2, 3
CELL_W, CELL_H = 595, 842          # A4 points
W, H = COLS * CELL_W, ROWS * CELL_H


def make_sheets(pdf: Path, first: int, out_dir: Path) -> None:
    src = fitz.open(pdf)
    pages = list(range(first - 1, len(src)))
    per = COLS * ROWS
    for k in range(0, len(pages), per):
        group = pages[k:k + per]
        sheet = fitz.open()
        page = sheet.new_page(width=W, height=H)
        for idx, pno in enumerate(group):
            r, c = divmod(idx, COLS)
            rect = fitz.Rect(c * CELL_W, r * CELL_H, (c + 1) * CELL_W, (r + 1) * CELL_H)
            page.show_pdf_page(rect, src, pno)
            page.draw_rect(rect, color=(0.6, 0.6, 0.6), width=0.5)
            page.insert_text((rect.x0 + 6, rect.y0 + 16), f"p{pno + 1}",
                             fontsize=11, color=(0.9, 0, 0))
        out = out_dir / f"{pdf.stem}-sheet{k // per + 1}.png"
        page.get_pixmap(dpi=96).save(out)
        print(out.name)


def main() -> None:
    args = sys.argv[1:]
    first = 3
    out_dir = None
    if "--from" in args:
        i = args.index("--from")
        first = int(args[i + 1])
        del args[i:i + 2]
    if "--out" in args:
        i = args.index("--out")
        out_dir = Path(args[i + 1])
        del args[i:i + 2]
    for a in args:
        pdf = Path(a)
        dest = out_dir or Path(os.environ.get("CLAUDE_SCRATCHPAD", pdf.parent))
        dest.mkdir(parents=True, exist_ok=True)
        make_sheets(pdf, first, dest)


if __name__ == "__main__":
    main()
