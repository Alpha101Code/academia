"""Sort Cambridge past-paper PDFs into the subjects/<subject>/papers/ tree.

Usage:
    python tools/sort_inbox.py                # sorts every subjects/*/inbox/
    python tools/sort_inbox.py <source-dir>   # sorts an arbitrary folder of PDFs

Behaviour:
  - Recognises Cambridge names like 4037_s24_qp_11.pdf (case-insensitive,
    tolerates " (1)" browser-download suffixes and -/space separators).
  - Renames to canonical form and files under papers/<year>-<session>/.
  - If the destination already exists with identical content (MD5), the
    incoming copy is deleted and reported as a duplicate.
  - If the destination exists with DIFFERENT content, the incoming file is
    parked in papers/_conflicts/ for manual review.
  - Unrecognised files are left in place and listed.
  - Finishes by regenerating the inventory (tools/inventory.py).
"""
from __future__ import annotations

import hashlib
import shutil
import sys
from pathlib import Path

from paperbank import REPO_ROOT, SUBJECTS, PaperName, subject_dir


def md5(path: Path) -> str:
    h = hashlib.md5()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def sort_folder(source: Path) -> None:
    moved, dups, conflicts, skipped = [], [], [], []

    for path in sorted(source.iterdir()):
        if not path.is_file():
            continue
        name = PaperName.parse(path.name)
        if name is None:
            skipped.append(path.name)
            continue
        dest_root = subject_dir(name.code)
        if dest_root is None:
            skipped.append(f"{path.name}  (unknown syllabus code {name.code} — add it to SUBJECTS in tools/paperbank.py)")
            continue

        dest_dir = dest_root / "papers" / name.session_folder
        dest = dest_dir / name.canonical
        if dest.exists():
            if md5(dest) == md5(path):
                path.unlink()
                dups.append(f"{path.name}  (already filed as {dest.relative_to(REPO_ROOT)})")
                continue
            park = dest_root / "papers" / "_conflicts" / path.name
            park.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(path), str(park))
            conflicts.append(f"{path.name}  -> {park.relative_to(REPO_ROOT)}  (same name, different content!)")
            continue

        dest_dir.mkdir(parents=True, exist_ok=True)
        shutil.move(str(path), str(dest))
        moved.append(f"{path.name}  ->  {dest.relative_to(REPO_ROOT)}")

    print(f"== {source} ==")
    for line in moved:
        print(f"  filed      {line}")
    for line in dups:
        print(f"  duplicate  {line}")
    for line in conflicts:
        print(f"  CONFLICT   {line}")
    for line in skipped:
        print(f"  skipped    {line}")
    if not any([moved, dups, conflicts, skipped]):
        print("  (empty)")


def main() -> None:
    if len(sys.argv) > 1:
        sources = [Path(sys.argv[1]).resolve()]
    else:
        sources = [
            REPO_ROOT / "subjects" / sub / "inbox"
            for sub in SUBJECTS.values()
            if (REPO_ROOT / "subjects" / sub / "inbox").is_dir()
        ]
    for source in sources:
        sort_folder(source)

    # Refresh the inventory after any sort.
    import inventory
    inventory.main()


if __name__ == "__main__":
    main()
