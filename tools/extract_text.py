"""Extract plain text from every paper PDF into bank/_text/ (searchable cache).

Usage:  python tools/extract_text.py
Writes subjects/<sub>/bank/_text/<paper>.txt with ===== PAGE n ===== markers.
Skips files whose extract is already newer than the PDF.
"""
from __future__ import annotations

import fitz  # PyMuPDF

from paperbank import REPO_ROOT, SUBJECTS


def main() -> None:
    for sub in SUBJECTS.values():
        papers = REPO_ROOT / "subjects" / sub / "papers"
        out_dir = REPO_ROOT / "subjects" / sub / "bank" / "_text"
        if not papers.is_dir():
            continue
        out_dir.mkdir(parents=True, exist_ok=True)
        done = skipped = 0
        for pdf in sorted(papers.rglob("*.pdf")):
            if "_conflicts" in pdf.parts:
                continue
            out = out_dir / (pdf.stem + ".txt")
            if out.exists() and out.stat().st_mtime >= pdf.stat().st_mtime:
                skipped += 1
                continue
            doc = fitz.open(pdf)
            parts = []
            for i, page in enumerate(doc):
                parts.append(f"===== PAGE {i + 1} =====")
                parts.append(page.get_text())
            out.write_text("\n".join(parts), encoding="utf-8")
            done += 1
        print(f"{sub}: extracted {done}, up-to-date {skipped}")


if __name__ == "__main__":
    main()
