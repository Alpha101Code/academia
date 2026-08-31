/* Chapter 12 — Series. Full lesson. */
window.A.registerLesson(12, {
  sections: [

    /* ============================================================ */
    {
      title: "Start here",
      html: `
<p class="lead">Two independent halves share this chapter: the <b>binomial theorem</b> (expanding brackets to
a power, and picking out one particular term) and <b>progressions</b> (AP and GP — patterns of terms and
their sums). Together they are the most heavily examined topic in the whole syllabus.</p>
<div class="callout"><b>Where it appears:</b> essentially <i>every</i> paper carries a binomial question AND a
progressions question — often 12–17 marks between them. Two of the five outcomes (12.4, 12.5) also show up
inside other chapters' questions, so time invested here pays twice.</div>
<div class="callout good"><b>What is given on the paper:</b> the binomial expansion, the AP formulas
(\\(u_n\\) and \\(S_n\\)) and the GP formulas (\\(u_n\\), \\(S_n\\), \\(S_\\infty\\)) are all in the List of formulas.
What is <i>not</i> given: how to spot which progression you have, and every technique below.</div>
<div class="method"><div class="m-title">The five skills (12.1–12.5)</div>
<ol>
<li><b>12.1</b> Expand \\((a+b)^n\\) for positive integer \\(n\\), simplifying coefficients</li>
<li><b>12.2</b> Use the general term \\({}^nC_r\\,a^{n-r}b^r\\) — e.g. find the term independent of \\(x\\)</li>
<li><b>12.3</b> Recognise AP vs GP and know the difference</li>
<li><b>12.4</b> Use \\(u_n\\) and \\(S_n\\) for both, including problems in context</li>
<li><b>12.5</b> Convergence \\(|r|<1\\) and the sum to infinity</li>
</ol></div>`
    },

    /* ============================================================ */
    {
      title: "The binomial theorem (12.1)",
      html: `
<p>\\[ (a+b)^n = a^n + {}^nC_1 a^{n-1}b + {}^nC_2 a^{n-2}b^2 + \\ldots + b^n \\]</p>
<div class="method"><div class="m-title">Expanding cleanly</div>
<ol>
<li><b>Ascending powers of x</b> → start from the term with no \\(x\\); <b>descending</b> → start from the highest power. Read which one is asked!</li>
<li>Write each term as \\({}^nC_r(\\text{first})^{n-r}(\\text{second})^r\\) <b>with brackets</b>, then simplify — most lost marks come from forgetting to raise the coefficient and the sign inside the second bracket.</li>
<li>"Simplify your coefficients" means finish the arithmetic: \\({}^{10}C_2 2^8(3)^2 = 45\\times256\\times9 = 103\\,680\\).</li>
<li>If the bracket is a quadratic, look for a <b>factorisation first</b>: \\((9x^2+12x+4)^5 = ((3x+2)^2)^5 = (3x+2)^{10}\\).</li>
</ol></div>
<h3>Finding unknown constants</h3>
<p>Given the first few terms with unknowns, match them term by term — but when unknowns are <b>tangled together</b>
(e.g. terms \\(b\\), \\(abx\\), \\(\\frac98abx^2\\)), divide consecutive terms so the unknowns cancel:</p>
<div class="example"><div class="e-title">The ratio trick — May/June 2024 P2 (8 marks)</div>
<p>For \\(\\left(2+\\tfrac x2\\right)^n\\) with terms \\(b + abx + \\tfrac98abx^2\\):
\\(\\dfrac{\\text{3rd}}{\\text{2nd}} = \\dfrac98\\), and on the expansion side that ratio is \\(\\dfrac{n-1}{8}\\).
So \\(n = 10\\), then \\(b = 2^{10} = 1024\\) and \\(a = 2.5\\).</p></div>
<div class="example"><div class="e-title">Straightforward matching — May/June 2024 P1</div>
<p>\\((3+px)^n = 243+810x+qx^2\\): constant \\(3^n = 243 \\Rightarrow n=5\\); then \\(5(81)p = 810 \\Rightarrow p=2\\);
then \\(q = 10(27)(4) = 1080\\). Always start with the term containing fewest unknowns.</p></div>
<p class="minilinks">▶ Practise now: group <b>“Binomial expansions & unknown constants”</b> — 4 questions, 27 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "The general term: picking one term out (12.2)",
      html: `
<div class="method"><div class="m-title">The routine that answers every “find the term …” question</div>
<ol>
<li>Write the general term: \\({}^nC_r(\\text{first})^{n-r}(\\text{second})^r\\).</li>
<li><b>Collect the powers of x</b> into a single index — it is always linear in \\(r\\).</li>
<li>Set that index to what you need (0 for "independent of x" / "constant"), and solve for \\(r\\).</li>
<li>Substitute that \\(r\\) back and evaluate the number.</li>
</ol></div>
<p>Worked index examples: for \\(\\left(x+\\tfrac{2}{x^2}\\right)^{10}\\) the index is \\((10-r)-2r = 10-3r\\);
for \\(\\left(4x^2+\\tfrac{1}{2x^2}\\right)^8\\) it is \\(2(8-r)-2r = 16-4r\\);
for \\(\\left(\\tfrac{6}{x^2}+\\tfrac{x^4}{2}\\right)^{12}\\) it is \\(-2(12-r)+4r = 6r-24\\).</p>
<div class="callout warn"><b>The off-by-one trap:</b> the <b>\\((r+1)\\)th</b> term uses \\(r\\). So the "3rd term" means
\\(r=2\\) and the "6th term" means \\(r=5\\). Exam questions about "the 3rd and 6th terms" are testing exactly this.</div>
<h3>Products of two brackets</h3>
<p>For \\(\\left(2+\\tfrac{3}{x^2}\\right)^{10}(1-4x^2)^2\\): expand the small bracket fully, then ask which term of
the big expansion each piece needs to make the required power. Here the constant needs
\\((\\text{const}\\times1) + (x^{-2}\\text{ term}\\times-8x^2) + (x^{-4}\\text{ term}\\times16x^4)\\), giving \\(1\\,537\\,024\\).</p>
<p class="minilinks">▶ Practise now: group <b>“General term & term independent of x”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "AP and GP: telling them apart (12.3)",
      html: `
<div class="method"><div class="m-title">The two patterns</div>
<ol>
<li><b>Arithmetic (AP)</b> — you <b>add</b> \\(d\\) each time: \\(u_n = a+(n-1)d\\), \\(S_n = \\tfrac n2\\{2a+(n-1)d\\}\\).<br>
Test: consecutive <b>differences</b> are equal — \\(u_2-u_1 = u_3-u_2\\).</li>
<li><b>Geometric (GP)</b> — you <b>multiply</b> by \\(r\\) each time: \\(u_n = ar^{n-1}\\), \\(S_n = \\dfrac{a(1-r^n)}{1-r}\\).<br>
Test: consecutive <b>ratios</b> are equal — \\(\\dfrac{u_2}{u_1} = \\dfrac{u_3}{u_2}\\), i.e. \\(u_2^{\\,2} = u_1u_3\\).</li>
</ol></div>
<div class="widget" data-widget="series"></div>
<div class="callout"><b>Percentage growth is a GP:</b> "10% greater each week" means \\(r = 1.1\\); "loses 15% each year"
means \\(r = 0.85\\). Spotting this converts a word problem into a formula problem instantly.</div>
<p>The GP ratio test is the engine behind a whole exam species: given three algebraic terms, set the two ratios
equal and solve. \\(\\dfrac{x+5}{11x-1} = \\dfrac{x-1}{x+5}\\) → \\(x = 3\\) → the GP is \\(128, 32, 8, 2, \\ldots\\)</p>`
    },

    /* ============================================================ */
    {
      title: "Working with progressions (12.4)",
      html: `
<div class="method"><div class="m-title">Turning sentences into equations</div>
<ol>
<li>Every sentence gives one equation. "The 6th term is 1.5 times the 3rd" → \\(a+5d = 1.5(a+2d)\\). "The sum of the first ten terms is 255" → \\(\\tfrac{10}{2}(2a+9d) = 255\\).</li>
<li>Two unknowns need two equations — solve simultaneously.</li>
<li><b>GP shortcut:</b> dividing two term-equations kills \\(a\\). \\(\\dfrac{ar^5}{ar^3} = r^2\\) — terms two apart give \\(r^2\\) directly.</li>
<li><b>Factorise before dividing</b> when sums of pairs are given: \\(ar+ar^2 = ar(1+r)\\) and \\(ar^3+ar^4 = ar^3(1+r)\\) — dividing cancels \\(a\\) AND \\((1+r)\\), leaving \\(r^2\\).</li>
<li>Anchor on a known term when possible: if the 3rd term is 10, write the others as \\(10-d\\) and \\(10-2d\\) — one variable instead of two.</li>
</ol></div>
<h3>“How many terms until …?”</h3>
<div class="method"><div class="m-title">Threshold questions</div>
<ol>
<li><b>AP:</b> form \\(\\tfrac n2\\{2a+(n-1)d\\} > N\\), expand to a quadratic in \\(n\\), solve, then <b>round up</b>.</li>
<li><b>GP:</b> the sum formula collapses to \\(r^n > \\text{something}\\); take logs: \\(n > \\dfrac{\\log(\\ldots)}{\\log r}\\), then round up.</li>
<li>Rounding: "more than" always rounds UP to the next whole number. Quoting the two neighbouring sums (\\(n=159\\) too small, \\(n=160\\) big enough) proves it and rescues marks.</li>
</ol></div>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2024 P2 (marathon)</div>
<p>10 km then +10% weekly, total > 200 km: \\(\\dfrac{10(1.1^n-1)}{0.1} > 200 \\Rightarrow 1.1^n > 3
\\Rightarrow n > \\dfrac{\\log3}{\\log1.1} = 11.5 \\Rightarrow n = 12\\) weeks.</p></div>
<p class="minilinks">▶ Practise now: groups <b>“Arithmetic progressions”</b> and <b>“Geometric progressions”</b> — 6 questions, 45 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Sum to infinity & convergence (12.5)",
      html: `
<p>Add infinitely many terms of a GP and you get a finite answer <b>only if the terms shrink</b>:</p>
<p>\\[ S_\\infty = \\frac{a}{1-r}\\quad\\text{valid exactly when } |r| < 1. \\]</p>
<div class="method"><div class="m-title">Convergence questions</div>
<ol>
<li>"Explain why this GP has no sum to infinity" → state \\(|r| \\geqslant 1\\) with the value of \\(r\\).</li>
<li>"Find the values of \\(k\\) for which a sum to infinity exists" → identify \\(r\\) in terms of \\(k\\), then solve \\(|r|<1\\) as a double inequality \\(-1 < r < 1\\).</li>
<li>If a question gives two possible ratios, only the one with \\(|r|<1\\) gets a sum to infinity — quote it "only" (see s24-p21: \\(r = 0.5\\) or \\(-1.5\\), but \\(S_\\infty = 8\\) from \\(r=0.5\\) alone).</li>
<li>An AP <b>never</b> converges (its terms don't tend to zero) — that is the difference examiners test in 12.3.</li>
</ol></div>
<div class="example"><div class="e-title">Disguised ratios</div>
<p>The ratio is often hidden until you simplify. Terms \\(\\left(2w-\\tfrac14\\right), \\left(2w-\\tfrac14\\right)^2, \\ldots\\)
→ \\(r = 2w-\\tfrac14\\), so \\(\\left|2w-\\tfrac14\\right|<1 \\Rightarrow -\\tfrac38 < w < \\tfrac58\\).<br>
Terms \\(\\cos\\theta\\sin\\theta, \\cos\\theta\\sin^3\\theta,\\ldots\\) → \\(r = \\sin^2\\theta\\), and
\\(S_\\infty = \\dfrac{\\cos\\theta\\sin\\theta}{1-\\sin^2\\theta} = \\dfrac{\\cos\\theta\\sin\\theta}{\\cos^2\\theta} = \\tan\\theta\\).<br>
Terms \\(\\ln2y, \\ln4y^2, \\ln16y^4\\) → rewrite as \\(\\ln2y, 2\\ln2y, 4\\ln2y\\), so \\(r = 2\\) (a number, not a log!).</p></div>
<p class="minilinks">▶ Practise now: group <b>“Sum to infinity & convergence”</b> — 3 questions, 20 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "When an AP and a GP meet",
      html: `
<p>A favourite hard question: some terms of one progression are also terms of the other. The method never changes.</p>
<div class="method"><div class="m-title">Linked-progression routine</div>
<ol>
<li>Write the relevant terms of BOTH progressions in their own letters.</li>
<li>Equate the matching pairs — you get two equations.</li>
<li>Eliminate the unwanted letter by <b>dividing</b> the equations.</li>
<li>Factorise and cancel — a \\((r-1)\\) usually cancels, which is why the question states \\(r \\neq 1\\).</li>
</ol></div>
<div class="example"><div class="e-title">GP terms inside an AP — Oct/Nov 2024 P2</div>
<p>GP \\(a, ar, ar^2\\) are the 1st, 3rd, 7th terms of an AP: \\(ar - a = 2D\\), \\(ar^2 - a = 6D\\).
Divide: \\(\\dfrac{r^2-1}{r-1} = 3 \\Rightarrow r+1 = 3 \\Rightarrow r = 2\\).</p></div>
<div class="example"><div class="e-title">AP terms forming a GP — Oct/Nov 2025 P2</div>
<p>4th, 8th, 20th terms of an AP (\\(d=1.5\\)) form a GP: \\(\\dfrac{t+10.5}{t+4.5} = \\dfrac{t+28.5}{t+10.5}\\).
Cross-multiplying makes the \\(t^2\\) cancel, giving \\(t = -1.5\\) and hence \\(r = 3\\).</p></div>
<p class="minilinks">▶ Practise now: group <b>“AP and GP linked / in context”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Exam checklist",
      html: `
<div class="method"><div class="m-title">Before you leave any Chapter 12 question</div>
<ol>
<li>Binomial: ascending or descending as asked? Brackets used on BOTH parts, coefficients and signs raised to the power?</li>
<li>"Term independent of x" → single index in \\(r\\), set to 0, solve, substitute back.</li>
<li>Counting: the \\((r+1)\\)th term uses \\(r\\) — the 6th term means \\(r=5\\).</li>
<li>AP or GP? Check differences vs ratios before choosing a formula.</li>
<li>GP with two facts → divide the equations to eliminate \\(a\\); factorise pairs like \\(ar+ar^2\\) first.</li>
<li>Sum to infinity → \\(|r|<1\\) checked and STATED; reject the divergent ratio explicitly.</li>
<li>Threshold questions → round UP, and show the two neighbouring sums.</li>
<li>"Exact" answers: keep surds, fractions and logs (\\(\\tfrac{80}{3}\\), \\(\\tfrac{243}{8}\\), \\((2^n-1)\\ln2y\\)).</li>
</ol></div>
<p class="minilinks">Now clear the <a href="#/ch/12">Practice list</a> — 17 real exam questions, 119 marks.
This is the biggest chapter in the app; split it over two sessions (binomial first, progressions second).</p>`
    }
  ]
});
