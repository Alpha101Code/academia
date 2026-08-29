# Academia — SC / O Level exam prep (Mauritius)

Revision platform for Cambridge School Certificate subjects, built as a static web app
(hostable anywhere) on top of a growing bank of classified past-paper questions.

**Current subject:** O Level Additional Mathematics **4037** (syllabus 2025–2027).
Planned next: Mathematics D 4024, Physics 5054, and other SC subjects.

**▶ To revise: open [`app/index.html`](app/index.html) in a browser** — no install, no server needed.
Chapter 4 (Equations, inequalities and graphs) is live: 21 past-paper questions (98 marks) with
tips, worked solutions, mark schemes, exam-pace timers, plus a full interactive lesson.

| Where | What |
|---|---|
| [PLAN.md](PLAN.md) | Roadmap, architecture and workflows (start here) |
| `app/` | The revision web app (static — open `index.html` or host anywhere) |
| `subjects/add-math-4037/` | Syllabus, sorted past papers, question bank |
| `subjects/add-math-4037/INVENTORY.md` | Auto-generated paper inventory + gaps to download |
| `subjects/add-math-4037/inbox/` | Drop newly downloaded papers here, then run the sorter |
| `tools/` | `sort_inbox.py` (file new papers), `inventory.py` (rebuild inventory) |
| `app/` | The revision web app |

## Everyday workflow

1. Download new papers from [PapaCambridge 4037](https://pastpapers.papacambridge.com/papers/caie/o-level-mathematics-additional-4037) into `subjects/add-math-4037/inbox/`.
2. Run `python tools/sort_inbox.py` — papers are renamed, filed and deduplicated; the inventory refreshes.
3. Ask Claude to extract + classify the new questions into the bank and regenerate the app data
   (`python tools/build_app_data.py` packages `bank/ch*.json` into `app/data/`).
