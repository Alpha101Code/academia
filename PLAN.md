# Project plan — SC/O Level exam prep platform

_Living document. Last updated: 2026-08-29._

## 1. Goal

Prepare for the Mauritius School Certificate (Cambridge O Level) with a self-hosted revision
app that combines **learning** (full chapter lessons with visual/interactive explanations) and
**exam practice** (a growing bank of real past-paper questions with tips, worked solutions,
mark-scheme points, time targets and progress tracking).

First subject: **Additional Mathematics 4037** (2025–2027 syllabus). The structure is
multi-subject from day one so Mathematics 4024, Physics 5054, etc. can be added later.

## 2. What the exam is (from the official syllabus)

- Two compulsory papers, each **2 hours, 80 marks, 50%** — grades A* to E.
- **Paper 1: calculator NOT allowed. Paper 2: scientific calculator required.**
  → every practice question is tagged calculator / non-calculator so practice matches exam conditions.
- Pace benchmark: 80 marks in 120 min = **1.5 min per mark**. Every question in the bank gets
  `targetMinutes = marks × 1.5` (rounded) and the app shows a timer against it.
- 14 topics; content assumes O Level Maths knowledge. A List of formulas is printed on page 2
  of each exam paper (lessons will point out exactly which formulas are given vs must be memorised).

### Priority order (weak topics first — the red-dot chapters)

| Order | Ch | Topic | Syllabus outcomes |
|---|---|---|---|
| **1 (start here)** | 4 | Equations, inequalities and graphs | 4.1–4.5 (modulus equations & inequalities, solving via quadratic substitution, cubic graphs & their moduli, cubic inequalities) |
| 2 | 6 | Logarithmic and exponential functions | 6.1–… |
| 3 | 8 | Coordinate geometry of the circle | new topic in this syllabus |
| 4 | 9 | Circular measure | |
| 5 | 11 | Permutations and combinations | |
| 6 | 12 | Series | |
| 7 | 13 | Vectors in two dimensions | |
| then | 1,2,3,5,7,10,14 | remaining chapters | |

## 3. Repository layout / filing system

```
academia/
├── README.md, PLAN.md
├── tools/                        # bank maintenance scripts (Python, uses PyMuPDF)
│   ├── paperbank.py              # shared naming/parsing rules
│   ├── sort_inbox.py             # file + dedupe newly downloaded papers
│   └── inventory.py              # regenerate INVENTORY.md / inventory.json
├── subjects/
│   └── add-math-4037/
│       ├── syllabus/             # official syllabus PDF + text extract
│       ├── inbox/                # DROP ZONE for new downloads
│       ├── papers/               # canonical bank: papers/2024-mayjune/4037_s24_qp_11.pdf …
│       ├── INVENTORY.md          # auto-generated: what we have + gaps to download
│       ├── inventory.json        # same, machine-readable (consumed by the app build)
│       └── bank/                 # classified question bank (JSON per chapter + figures)
└── app/                          # the static web app
```

**Naming rules** (enforced by `tools/sort_inbox.py`): Cambridge canonical names
(`4037_s24_qp_11.pdf`; sessions `m`=Feb/March, `s`=May/June, `w`=Oct/Nov; docs `qp`, `ms`,
`er` examiner report, `gt` grade thresholds). Session folders are `YYYY-session` so they sort
chronologically. Exact duplicates are deleted by MD5; same-name-different-content goes to
`papers/_conflicts/` for review. New subjects = add one line to `SUBJECTS` in `tools/paperbank.py`.

**Current holdings (2026-08-29):** 19 QPs + 18 MSs = 17 complete pairs across s24, w24, s25,
w25, s26. Gaps flagged in INVENTORY.md: `4037_w24_ms_12`, `4037_s25_ms_22`, `4037_s26_qp_22`.
Worth also downloading **examiner reports (`er`)** — they feed the "common mistakes" tips.

## 4. Question bank data model

One JSON file per chapter: `bank/ch04.json` etc. Each question:

```jsonc
{
  "id": "s24-p12-q4",                  // globally unique within subject
  "source": {"paper": "4037/12", "session": "May/June 2024", "question": 4},
  "calc": false,                        // Paper 1 → false, Paper 2 → true
  "chapter": 4,
  "outcomes": ["4.2"],                  // syllabus outcome codes
  "topics": ["modulus inequality"],     // human-friendly tags
  "marks": 6,
  "targetMinutes": 9,                   // 1.5 × marks
  "difficulty": 2,                      // 1 easy / 2 standard / 3 hard (A* style)
  "statement": "…KaTeX-ready HTML…",    // question retyped, parts (a)/(b) preserved
  "figures": ["s24-p12-q4-fig1.svg"],   // diagrams recreated as SVG (or cropped PNG)
  "tips": ["…the 2–4 things you must spot/recall to solve it…"],
  "solution": [ {"step": "…", "why": "…"} ],   // full worked solution, exam-style layout
  "markScheme": ["B1 …", "M1 …", "A1 …"]       // condensed from the official MS
}
```

Extraction pipeline per paper: PyMuPDF text + page-render → identify questions and the
chapter(s) they test → retype statement in KaTeX, recreate diagram → write tips + worked
solution → cross-check answers against the official mark scheme. Cross-topic questions get one
primary chapter plus `alsoTests: [chapters]`.

## 5. The app

Static single-page app, **no build step, no backend** — plain HTML/CSS/JS modules with KaTeX
vendored locally for math. Hostable on GitHub Pages/Netlify/any static host; also works
opened from disk. Question/lesson data ships as JS data files generated from `bank/`.

Screens (v1):

1. **Dashboard** — chapter cards in priority order: progress ring (questions done / total),
   marks completed, estimated time remaining, weakest-first badge. Overall progress bar.
2. **Chapter → Practice** — the question list, each labelled with source (`May/June 2024 · Paper 12 · Q4`),
   marks, target time, calculator badge, difficulty. Per question:
   - **Tips** panel (collapsed by default): the quick-review notes needed to attempt it;
   - built-in **timer** vs the target minutes;
   - **Worked solution** + mark-scheme points (revealed on demand);
   - **Mark as done** (with "got it right / with help / redo later" states).
3. **Chapter → Learn** — the full lesson: each syllabus outcome explained from first
   principles with **interactive visual aids** (e.g. for ch.4: a live |ax+b| grapher showing
   the fold-over-the-x-axis idea, drag-the-line intersection explorer for |ax+b| = cx+d,
   cubic sketcher from three factors), worked examples, then "try it" mini-questions that
   link into the practice bank.
4. Progress stored in `localStorage` with export/import as a JSON file (so progress survives
   moving devices; no accounts needed for v1).

Later (v2+): timed mock-exam builder (assemble a fresh 80-mark paper from unseen bank
questions), per-topic time analytics (your min/mark vs the 1.5 target), spaced "redo later"
queue, more subjects behind a subject switcher.

**Note on hosting:** past-paper text © Cambridge. Fine for personal revision use; keep the
hosted app private (or strip verbatim questions) if it ever goes public.

## 6. Phases

- **P0 — done (2026-08-29):** repo structure, filing system + sorter + inventory tooling,
  syllabus filed and text-extracted, 37 papers classified into the bank layout, plan.
- **P1 — done (2026-08-29):** app shell (dashboard, practice, learn, timers, localStorage
  progress with export/import, light/dark) + **Chapter 4 complete**: all 21 ch.4 questions
  mined from the 19 QPs (98 marks), each verified against the official mark scheme, with
  tips/worked solutions/mark schemes; full Learn lesson (4.1–4.5) with 4 interactive
  widgets (modulus explorer, |ax+b|=cx+d solver, |quadratic|=d root counter, cubic
  sketcher with inequality shading). Open `app/index.html` — works from disk or any static host.
- **P2 — in progress:** remaining red-dot chapters in order — same treatment;
  new papers keep flowing into the same pipeline.
  - **Chapter 6 done (2026-08-29):** 11 questions / 72 marks mined and verified vs mark
    schemes (incl. the x=1/5 rejection in w25-p13 and both kept roots in w25-p12 q5b);
    8-section lesson; 2 new widgets (log/exp graph families with asymptotes, e↔ln inverse
    mirror); plot engine extended to ln/exp curves with domain breaks and vertical asymptotes.
  - **Chapter 8 done (2026-08-30):** 6 questions / 36 marks (the new-to-syllabus circle topic
    has fewer past questions; all four outcomes 8.1–8.4 covered incl. the two-circles common
    chord question). 7-section lesson; circle-line discriminant widget; plot engine draws circles.
  - **Gaps filled (2026-08-30):** downloaded 4037_w24_ms_12, 4037_s25_ms_22, 4037_s26_qp_22
    from PapaCambridge — the bank is now 20/20 complete QP+MS pairs. The new s26 P22 paper
    contributed s26-p22-q4 to ch4 (now 22 q / 105 marks) and s26-p22-q11 to ch8 (now 7 q / 45 marks);
    the s25-p22-q1 mark scheme was backfilled with the official allocation.
  - **Chapter 9 done (2026-08-30):** 8 questions / 68 marks, every one verified vs its mark
    scheme, with all diagrams recreated as data-driven SVG (plot engine gained bare-diagram
    mode: arcs, segments, filled compound regions, labels). 6-section lesson (radians, the
    six formulas — s = rθ and ½r²θ are NOT given in the exam — slicing method, tangents,
    sector→cone); sector/segment explorer widget.
  - **Chapter 11 done (2026-08-30):** 13 questions / 69 marks verified vs mark schemes —
    arrangements with restrictions (blocks/gaps/fixed spacing), quota selections, digit
    numbers & passwords, and the four algebraic nCr equations/proofs (n=40, n=65, n=69,
    two identities). 8-section lesson; nPr-vs-nCr slots widget.
  - **Chapter 12 done (2026-08-31):** 17 questions / 119 marks — the biggest chapter.
    Binomial expansions & unknown constants (incl. the ratio trick), general term / term
    independent of x (incl. a product of two expansions = 1 537 024), AP, GP, sum to
    infinity & convergence (log, trig and bracket-disguised ratios) and AP/GP linked
    problems. 8-section lesson; AP-vs-GP convergence widget.
    Note: the published 4037/22 M/J 2024 mark scheme PDF ends at Q10, so s24-p22-q11
    carries a reconstructed allocation (answers verified by substitution).
  - Next: chapter 13 (Vectors in two dimensions) — the last red-dot chapter.
- **P3:** all 14 chapters, mock-exam mode, time analytics, examiner-report-driven tips.
- **P4:** next subjects (math-4024, physics-5054) using the same skeleton.

## 7. Workflows (recurring)

**Add new papers:** drop PDFs in `subjects/add-math-4037/inbox/` → `python tools/sort_inbox.py`
→ ask Claude to "process the new papers": extract ch.-classified questions into `bank/`,
regenerate app data, report what was added.

**Generate a chapter:** ask Claude to "build chapter N": syllabus outcomes → Learn lesson +
visuals → sweep every QP in `papers/` for questions testing that chapter → bank entries with
tips/solutions verified against MS → app data refresh.
