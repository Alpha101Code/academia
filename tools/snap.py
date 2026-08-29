"""Render PDF pages to PNG for visual inspection (question retyping / diagrams).

Usage:
    python tools/snap.py <pdf-path> <page> [<page> ...] [--dpi 150] [--out <dir>]

Pages are 1-based. Writes <stem>-p<page>.png into --out (default: scratchpad
if CLAUDE_SCRATCHPAD is set, else alongside the PDF).
"""
from __future__ import annotations

import os
import sys
from pathlib import Path

import fitz


def main() -> None:
    args = sys.argv[1:]
    dpi = 150
    out_dir = None
    if "--dpi" in args:
        i = args.index("--dpi")
        dpi = int(args[i + 1])
        del args[i:i + 2]
    if "--out" in args:
        i = args.index("--out")
        out_dir = Path(args[i + 1])
        del args[i:i + 2]
    pdf = Path(args[0])
    pages = [int(a) for a in args[1:]]
    if out_dir is None:
        env = os.environ.get("CLAUDE_SCRATCHPAD")
        out_dir = Path(env) if env else pdf.parent
    out_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(pdf)
    for p in pages:
        pix = doc[p - 1].get_pixmap(dpi=dpi)
        out = out_dir / f"{pdf.stem}-p{p}.png"
        pix.save(out)
        print(out)


if __name__ == "__main__":
    main()
