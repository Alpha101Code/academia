"""Package bank JSON files into app data scripts (file:// friendly).

Usage:  python tools/build_app_data.py
Reads  subjects/<sub>/bank/ch*.json  and writes  app/data/ch*.bank.js
"""
from __future__ import annotations

import json
from pathlib import Path

from paperbank import REPO_ROOT, SUBJECTS


def main() -> None:
    out_dir = REPO_ROOT / "app" / "data"
    out_dir.mkdir(parents=True, exist_ok=True)
    for sub in SUBJECTS.values():
        bank_dir = REPO_ROOT / "subjects" / sub / "bank"
        if not bank_dir.is_dir():
            continue
        for src in sorted(bank_dir.glob("ch*.json")):
            bank = json.loads(src.read_text(encoding="utf-8"))
            out = out_dir / f"{src.stem}.bank.js"
            js = ("/* Generated from subjects/%s/bank/%s — do not edit by hand. */\n"
                  "window.A.registerBank(%s);\n") % (sub, src.name, json.dumps(bank, ensure_ascii=False))
            out.write_text(js, encoding="utf-8")
            print(f"built app/data/{out.name}  ({len(bank['questions'])} questions, "
                  f"{sum(q['marks'] for q in bank['questions'])} marks)")


if __name__ == "__main__":
    main()
