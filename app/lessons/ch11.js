/* Chapter 11 — Permutations and combinations. Full lesson. */
window.A.registerLesson(11, {
  sections: [

    /* ============================================================ */
    {
      title: "Start here",
      html: `
<p class="lead">Counting without listing. Two tools do all the work — <b>permutations</b> (arrangements, where
order matters) and <b>combinations</b> (selections, where it doesn't) — plus one master principle:
multiply the choices for each slot.</p>
<div class="callout"><b>Where it appears:</b> one question most papers (3–8 marks), usually on Paper 2 for the
everyday-context ones, and increasingly a short <i>algebraic</i> nCr equation or proof on Paper 1 (the 2025–2026
papers end with one). The wording tells you everything: <i>arrangements / orders</i> → P; <i>selections /
groups / teams / committees</i> → C.</p></div>
<div class="callout good"><b>Not examinable</b> (syllabus exclusions — don't waste revision time):
arrangements with <i>repeated objects</i>, <i>circular</i> arrangements, and single problems needing BOTH
permutations and combinations at once.</div>`
    },

    /* ============================================================ */
    {
      title: "The multiplication principle & factorials",
      html: `
<p>To count multi-stage builds, draw <b>slots</b> and multiply the number of choices for each:</p>
<div class="method"><div class="m-title">Slots method</div>
<ol>
<li>One slot per position/decision, restricted slots FIRST.</li>
<li>Fill in the number of choices left for each slot (they shrink as items are used).</li>
<li>Multiply. Disjoint cases? Work each case separately and ADD.</li>
</ol></div>
<p>All \\(n\\) items in a row: \\(n! = n(n-1)(n-2)\\cdots1\\). Know \\(0! = 1\\) (one way to arrange nothing) —
it is on the syllabus by name.</p>
<div class="example"><div class="e-title">Worked example — May/June 2025 P2</div>
<p>5 runners, 4 swimmers, 3 gymnasts in a line, each sport together: arrange 3 blocks (\\(3!\\)), then inside each
block (\\(5!\\times4!\\times3!\\)): \\(6\\times120\\times24\\times6 = 103\\,680\\).</p></div>`
    },

    /* ============================================================ */
    {
      title: "Permutations vs combinations",
      html: `
<div class="method"><div class="m-title">The two formulas (11.2)</div>
<ol>
<li><b>Permutations</b> — ordered picks of r from n: \\(^nP_r = \\dfrac{n!}{(n-r)!} = n(n-1)\\cdots(n-r+1)\\).</li>
<li><b>Combinations</b> — unordered picks: \\(^nC_r = \\dfrac{n!}{r!\\,(n-r)!} = \\dfrac{^nP_r}{r!}\\).</li>
<li>Test: would swapping two chosen items give a DIFFERENT outcome? Yes → P. No → C.</li>
</ol></div>
<div class="widget" data-widget="perm-comb"></div>
<div class="callout warn"><b>Calculator note:</b> both papers allow \\(^nC_r\\)/\\(^nP_r\\) buttons on P2, but P1 is
non-calculator — be able to evaluate \\(^{15}C_8\\)-sized things by cancelling factorials by hand.</div>`
    },

    /* ============================================================ */
    {
      title: "Arrangements with restrictions",
      html: `
<p>Three standard restrictions cover nearly every exam question:</p>
<div class="method"><div class="m-title">Restriction toolkit</div>
<ol>
<li><b>Fixed positions</b> (ends, first/last): fill those slots first, then \\((\\text{rest})!\\).
Choir: women first and last → \\(3\\times2\\times7! = 30\\,240\\) (s24-p21).</li>
<li><b>Together</b>: glue them into a <b>block</b> → \\((\\text{units})!\\times(\\text{inside})!\\).
4 children together in 9: \\(6!\\times4! = 17\\,280\\).</li>
<li><b>Not together</b>: either <b>complement</b> (total − together: \\(5!-4!\\,2! = 72\\), w24-p23)
or <b>gaps</b> (arrange the others, slot the separated ones into the gaps: G B G B G → \\(3!\\times2! = 12\\)).</li>
<li><b>Exact spacing</b>: count the valid position pairs first, then ×2 for the pair's order, ×(rest)!.
"Exactly 3 between Abby and Ben" in 10: \\(6\\times2\\times8! = 483\\,840\\) (w24-p22).</li>
</ol></div>
<p class="minilinks">▶ Practise now: group <b>“Arrangements with restrictions”</b> — 3 questions, 19 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Selections with conditions",
      html: `
<div class="method"><div class="m-title">Selection patterns</div>
<ol>
<li><b>Must include</b> both A and B in a group of 5 from 10 → they're in; choose the remaining 3 from 8: \\(^8C_3\\).</li>
<li><b>Exactly one of A, B</b> → \\(2\\times{}^8C_4\\) (pick which one, then fill up).</li>
<li><b>“At least k”</b> → split into exact cases and ADD (\\(\\geqslant2\\) women from 3: exactly 2 + exactly 3 = \\(45+6=51\\)) — or subtract the bad cases from the total.</li>
<li><b>Quota teams</b> (so many of each type): one \\(^nC_r\\) per type, MULTIPLY across types, ADD across case splits. Same doctors as teachers in a team of 8: (2,2,4)+(3,3,2)+(4,4,0) → \\(150+1200+75=1425\\) (s24-p12).</li>
<li><b>Splitting into groups</b>: fill one group at a time — Anjie's group \\(^{10}C_3\\), Bubay's \\(^7C_3\\), rest 1 way → 4200 (w24-p23).</li>
</ol></div>
<div class="callout warn">List the case split BEFORE computing (write (2,1,1), (1,2,1), (1,1,2)…). Most lost marks
here are a missing case, not wrong arithmetic.</div>
<p class="minilinks">▶ Practise now: group <b>“Selections & teams”</b> — 2 questions, 14 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Digit numbers, codes & passwords",
      html: `
<div class="method"><div class="m-title">Number-building rules</div>
<ol>
<li><b>No leading zero</b>: first slot excludes 0 — count it first. Digits {0,2,4,5,6,8}, 4-digit: \\(5\\times5\\times4\\times3 = 300\\).</li>
<li><b>Even / divisible by 5</b>: the LAST digit is restricted — but it interacts with the no-zero first slot, so split cases on the last digit (0 is the friendly case). Or count the complement: even = total − ending-in-5.</li>
<li><b>Greater than a threshold</b>: case-split on the first digit(s). \"> 750 000\" from 1–9: first 8/9 → \\(2\\times{}^8P_5\\); first 7 → second ∈{5,6,8,9} → \\(4\\times{}^7P_4\\); total 16 800 (w25-p23).</li>
<li><b>Two restrictions at once</b> (e.g. > 40 000 AND divisible by 5): fix both restricted slots first, split where they interact: 2016 + 1680 = 3696 (s26-p21).</li>
<li><b>Zoned codes</b> (password shapes): count each zone, multiply zones, and track which characters remain for the free zone: \\(24\\times56\\times20 = 26\\,880\\) (w25-p22).</li>
</ol></div>
<p class="minilinks">▶ Practise now: group <b>“Digit numbers & codes”</b> — 4 questions, 22 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Algebraic nCr: equations and proofs",
      html: `
<p>Paper 1 now loves a short factorial-algebra finale. Two species:</p>
<div class="method"><div class="m-title">Species 1 — solve for n</div>
<ol>
<li>Replace every \\(^mC_r\\) by \\(\\dfrac{m!}{r!\\,(m-r)!}\\).</li>
<li>Cancel the common \\((\\ldots)!\\) pieces — outside factors like \\((n-4)\\) absorb into factorials: \\((n-4)\\times\\dfrac{1}{(n-4)!} = \\dfrac{1}{(n-5)!}\\).</li>
<li>What survives is tiny: \\(\\dfrac{(n+2)!}{(n+1)!} = n+2\\), \\(\\dfrac{7!}{5!} = 42\\) → a linear (or quadratic) equation.</li>
<li>Reject impossible roots (n must keep every factorial argument ⩾ 0; reject negatives like n+1 = −66).</li>
</ol></div>
<div class="example"><div class="e-title">The three exam equations so far</div>
<p>\\((n-4)\\,^{n+1}C_5 = {}^{n+2}C_7 \\Rightarrow 42 = n+2 \\Rightarrow n=40\\) (w25-p12).<br>
\\(^{n+3}C_6 = 12\\,^{n+2}C_5 \\Rightarrow n+3 = 72 \\Rightarrow n=69\\) (s26-p11).<br>
\\((n+1)\\,^{n+1}C_{12} = 33(n-10)\\,^nC_{10} \\Rightarrow (n+1)^2 = 4356 \\Rightarrow n=65\\) (s25-p22).</p></div>
<div class="method"><div class="m-title">Species 2 — show that (identities)</div>
<ol>
<li>Work from the LEFT side only — using the target to simplify scores M0.</li>
<li>Common denominator, factor out the smaller factorial, simplify the bracket.</li>
<li>Show the final re-assembly into \\(\\frac{m!}{r!(m-r)!}\\) form explicitly.</li>
</ol></div>
<div class="example"><div class="e-title">Worked example — May/June 2026 P1</div>
<p>\\(^{n+2}C_3 - {}^{n}C_3 = \\dfrac{n}{6}\\big[(n^2+3n+2)-(n^2-3n+2)\\big] = \\dfrac{n}{6}\\cdot6n = n^2\\). ✓</p></div>
<p class="minilinks">▶ Practise now: group <b>“Algebraic nCr & proofs”</b> — 4 questions, 14 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Exam checklist",
      html: `
<div class="method"><div class="m-title">Before you leave any Chapter 11 question</div>
<ol>
<li>P or C? Re-read the wording: <i>arrangements/orders</i> vs <i>selections/groups</i>.</li>
<li>Restricted slots filled FIRST (leading digit ≠ 0, fixed ends, last digit for divisibility)?</li>
<li>Cases listed before computing — and are they disjoint (no double counting)?</li>
<li>“At least” handled by exact cases or complement — not by guessing?</li>
<li>Together → block ×(inside)!; not together → complement or gaps.</li>
<li>Algebraic: factorials written out, common pieces cancelled, impossible roots rejected, and proofs driven from the LEFT side.</li>
<li>Sanity check the size: answers here are exact integers — if you get 483 839.99, something slipped.</li>
</ol></div>
<p class="minilinks">Now clear the <a href="#/ch/11">Practice list</a> — 13 real exam questions, 69 marks.</p>`
    }
  ]
});
