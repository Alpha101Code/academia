"""Shared helpers for the Cambridge past-paper bank.

Canonical file naming follows Cambridge conventions:
    4037_s24_qp_11.pdf   question paper, May/June 2024, variant 11
    4037_s24_ms_11.pdf   mark scheme
    4037_s24_er.pdf      examiner report (no variant)
    4037_s24_gt.pdf      grade thresholds (no variant)

Session codes: m = Feb/March, s = May/June, w = Oct/Nov.
"""
from __future__ import annotations

import re
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

# syllabus code -> subject folder under subjects/
SUBJECTS = {
    "4037": "add-math-4037",
    # future: "4024": "math-4024", "5054": "physics-5054", ...
}

SESSION_NAMES = {"m": "febmarch", "s": "mayjune", "w": "octnov"}
SESSION_LABELS = {"m": "Feb/March", "s": "May/June", "w": "Oct/Nov"}
SESSION_ORDER = {"m": 0, "s": 1, "w": 2}
DOC_TYPES = {
    "qp": "Question paper",
    "ms": "Mark scheme",
    "in": "Insert",
    "ci": "Confidential instructions",
    "er": "Examiner report",
    "gt": "Grade thresholds",
}

PAPER_RE = re.compile(
    r"""^(?P<code>\d{4})
        [_\s-](?P<session>[msw])(?P<year>\d{2})
        [_\s-](?P<type>qp|ms|in|ci|er|gt)
        (?:[_\s-](?P<variant>\d{1,2}))?
        (?:\s*\(\d+\))?          # browser download suffix, e.g. " (1)"
        \.pdf$""",
    re.IGNORECASE | re.VERBOSE,
)


class PaperName:
    """A parsed Cambridge past-paper file name."""

    def __init__(self, code: str, session: str, year: str, doc_type: str, variant: str | None):
        self.code = code
        self.session = session.lower()
        self.year = year                      # two digits, e.g. "24"
        self.doc_type = doc_type.lower()
        self.variant = variant                # e.g. "11" or None

    @classmethod
    def parse(cls, filename: str) -> "PaperName | None":
        m = PAPER_RE.match(filename.strip())
        if not m:
            return None
        return cls(m["code"], m["session"], m["year"], m["type"], m["variant"])

    @property
    def full_year(self) -> int:
        return 2000 + int(self.year)

    @property
    def canonical(self) -> str:
        base = f"{self.code}_{self.session}{self.year}_{self.doc_type}"
        if self.variant:
            base += f"_{self.variant}"
        return base + ".pdf"

    @property
    def session_key(self) -> str:
        """e.g. 's24' — used for grouping."""
        return f"{self.session}{self.year}"

    @property
    def session_folder(self) -> str:
        """e.g. '2024-mayjune' — chronological sort order matches name order."""
        return f"{self.full_year}-{SESSION_NAMES[self.session]}"

    @property
    def session_label(self) -> str:
        return f"{SESSION_LABELS[self.session]} {self.full_year}"

    def sort_key(self):
        return (self.full_year, SESSION_ORDER[self.session], self.variant or "", self.doc_type)


def subject_dir(code: str) -> Path | None:
    name = SUBJECTS.get(code)
    return REPO_ROOT / "subjects" / name if name else None
