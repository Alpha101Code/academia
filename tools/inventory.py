"""Regenerate INVENTORY.md and inventory.json for each subject's paper bank.

Usage:  python tools/inventory.py
(also run automatically at the end of tools/sort_inbox.py)
"""
from __future__ import annotations

import json
from datetime import date
from pathlib import Path

from paperbank import (
    DOC_TYPES,
    REPO_ROOT,
    SESSION_ORDER,
    SUBJECTS,
    PaperName,
)


def scan_subject(sub_root: Path) -> dict:
    """Collect {session_key: {variant: {doc_type: relpath}}} plus session labels."""
    sessions: dict[str, dict] = {}
    papers_root = sub_root / "papers"
    if not papers_root.is_dir():
        return sessions
    for path in sorted(papers_root.rglob("*.pdf")):
        if "_conflicts" in path.parts:
            continue
        name = PaperName.parse(path.name)
        if name is None:
            continue
        sess = sessions.setdefault(
            name.session_key,
            {"label": name.session_label, "year": name.full_year,
             "order": SESSION_ORDER[name.session], "variants": {}, "other": {}},
        )
        rel = str(path.relative_to(sub_root)).replace("\\", "/")
        if name.variant:
            sess["variants"].setdefault(name.variant, {})[name.doc_type] = rel
        else:
            sess["other"][name.doc_type] = rel
    return sessions


def render_markdown(subject: str, sessions: dict) -> str:
    lines = [
        f"# Paper bank inventory — {subject}",
        "",
        f"_Generated {date.today().isoformat()} by `tools/inventory.py` — do not edit by hand._",
        "",
    ]
    n_qp = n_ms = n_pairs = 0
    gaps: list[str] = []

    for key in sorted(sessions, key=lambda k: (sessions[k]["year"], sessions[k]["order"])):
        sess = sessions[key]
        lines += [f"## {sess['label']}  (`{key}`)", "", "| Variant | Question paper | Mark scheme |", "|---|---|---|"]
        for variant in sorted(sess["variants"]):
            docs = sess["variants"][variant]
            qp, ms = docs.get("qp"), docs.get("ms")
            n_qp += bool(qp)
            n_ms += bool(ms)
            n_pairs += bool(qp and ms)
            qp_cell = f"[{Path(qp).name}]({qp})" if qp else "**missing**"
            ms_cell = f"[{Path(ms).name}]({ms})" if ms else "**missing**"
            lines.append(f"| {variant} | {qp_cell} | {ms_cell} |")
            if qp and not ms:
                gaps.append(f"`{key}` variant {variant}: question paper has **no mark scheme**")
            if ms and not qp:
                gaps.append(f"`{key}` variant {variant}: mark scheme has **no question paper**")
        for doc_type, rel in sorted(sess["other"].items()):
            lines.append(f"| — | {DOC_TYPES.get(doc_type, doc_type)}: [{Path(rel).name}]({rel}) | |")
        lines.append("")

    lines += [
        "## Totals",
        "",
        f"- Question papers: **{n_qp}**",
        f"- Mark schemes: **{n_ms}**",
        f"- Complete QP+MS pairs: **{n_pairs}**",
        "",
    ]
    if gaps:
        lines += ["## Gaps to fill", ""] + [f"- {g}" for g in gaps] + [""]
    return "\n".join(lines)


def main() -> None:
    for code, sub in SUBJECTS.items():
        sub_root = REPO_ROOT / "subjects" / sub
        if not sub_root.is_dir():
            continue
        sessions = scan_subject(sub_root)
        (sub_root / "INVENTORY.md").write_text(render_markdown(sub, sessions), encoding="utf-8")
        payload = {"subject": sub, "syllabus_code": code, "generated": date.today().isoformat(), "sessions": sessions}
        (sub_root / "inventory.json").write_text(json.dumps(payload, indent=2), encoding="utf-8")
        print(f"inventory: wrote subjects/{sub}/INVENTORY.md and inventory.json "
              f"({sum(len(s['variants']) for s in sessions.values())} variant rows)")


if __name__ == "__main__":
    main()
