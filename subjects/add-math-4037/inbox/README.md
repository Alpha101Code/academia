# Inbox — drop new papers here

Drop any newly downloaded PDFs (question papers, mark schemes, examiner reports, grade
thresholds) into this folder — original download names are fine, including ` (1)` suffixes.

Then run from the repo root:

```
python tools/sort_inbox.py
```

Each file is renamed to its canonical Cambridge name, filed under `papers/<year>-<session>/`,
exact duplicates are deleted automatically, and `INVENTORY.md` is regenerated (including the
list of gaps still to download).
