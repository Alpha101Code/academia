/* Chapter 4 — Equations, inequalities and graphs. Full lesson. */
window.A.registerLesson(4, {
  sections: [

    /* ============================================================ */
    {
      title: "Start here",
      html: `
<p class="lead">This chapter is about one big idea — the <b>modulus</b> (absolute value) — plus two skills that
travel with it: <b>substitution</b> that turns strange equations into quadratics, and <b>sketching cubics</b> well
enough to solve inequalities by eye.</p>
<div class="callout">
  <b>Where it appears:</b> almost every paper has 1–2 questions from this chapter, usually early (Q1–Q6),
  worth 3–9 marks. They are <i>speed questions</i>: bank these marks quickly and accurately.
  Remember the pace rule — <b>1.5 minutes per mark</b> — so a [3] question deserves under 5 minutes.
</div>
<div class="method"><div class="m-title">The five skills (syllabus 4.1–4.5)</div>
<ol>
<li><b>4.1</b> Solve modulus equations: \\(|ax+b|=c\\), \\(|ax+b|=cx+d\\), \\(|ax+b|=|cx+d|\\), \\(|ax^2+bx+c|=d\\)</li>
<li><b>4.2</b> Solve modulus inequalities (same shapes, with &lt;, ⩽, &gt;, ⩾)</li>
<li><b>4.3</b> Use a substitution to turn an equation into a quadratic (powers, roots, exponentials)</li>
<li><b>4.4</b> Sketch cubics given as three linear factors — and their moduli</li>
<li><b>4.5</b> Solve cubic inequalities from a sketch</li>
</ol></div>
<p>Work through the sections in order; each ends with the matching questions in the
<a href="#/ch/4">Practice tab</a>.</p>`
    },

    /* ============================================================ */
    {
      title: "The modulus function",
      html: `
<p>\\(|x|\\) means the <b>size</b> of \\(x\\), ignoring its sign: \\(|5| = 5\\) and \\(|-5| = 5\\).
Formally,</p>
<p>\\[ |x| = \\begin{cases} x & x \\geqslant 0 \\\\ -x & x < 0 \\end{cases} \\]</p>
<p>Think of \\(|x-a|\\) as <b>“the distance between \\(x\\) and \\(a\\)”</b>. Distance is never negative —
that single idea explains everything in this chapter.</p>
<h3>The graph of \\(y = |ax+b|\\)</h3>
<div class="method"><div class="m-title">To sketch y = |ax + b|</div>
<ol>
<li>Sketch the plain line \\(y = ax+b\\) lightly.</li>
<li><b>Reflect</b> the part below the \\(x\\)-axis upward (fold at the axis).</li>
<li>You get a <b>V</b>. Vertex on the \\(x\\)-axis where \\(ax+b=0\\), i.e. \\(x = -\\tfrac{b}{a}\\);
\\(y\\)-intercept at \\(|b|\\). <b>Label both</b> — that is what the marks are for.</li>
</ol></div>
<div class="widget" data-widget="mod-linear"></div>
<div class="callout good"><b>Exam habit:</b> when a sketch is asked for, examiners award marks for
(1) the V-shape with the vertex ON the axis, and (2) the labelled intercepts. Two coordinates = two easy marks.</div>
<p class="minilinks">▶ Practise now (Practice tab): <b>s24-p21 Q1(a)</b> — sketch \\(y=|4x-6|\\).</p>`
    },

    /* ============================================================ */
    {
      title: "Modulus equations (4.1)",
      html: `
<p>Every modulus equation is solved by removing the modulus <i>correctly</i>. There are three shapes:</p>
<h3>Shape 1 — \\(|A| = c\\) (a positive number)</h3>
<p>The inside is at distance \\(c\\) from 0, so \\(A = c\\) <b>or</b> \\(A = -c\\). Two linear equations, two answers.</p>
<div class="example"><div class="e-title">Worked example — May/June 2025 P1</div>
<p>Solve \\(5|2x-1| + 8 = 23\\).</p>
<p><b>Isolate first:</b> \\(5|2x-1| = 15 \\Rightarrow |2x-1| = 3\\).<br>
Then \\(2x-1 = 3 \\Rightarrow x = 2\\), or \\(2x-1 = -3 \\Rightarrow x = -1\\). ✓ both check.</p></div>
<div class="callout warn"><b>Most common error:</b> splitting before isolating.
\\(5|2x-1|+8=23\\) does <u>not</u> mean \\(5(2x-1)+8=\\pm23\\). Always get \\(|\\,\\cdot\\,|\\) alone first.</div>

<h3>Shape 2 — \\(|A| = |B|\\)</h3>
<p>Equal sizes: \\(A = B\\) or \\(A = -B\\). (Or square both sides: \\(A^2 = B^2\\).)</p>
<div class="example"><div class="e-title">Worked example — May/June 2026 P1</div>
<p>Solve \\(|5x+4| = |3x-2|\\).</p>
<p>\\(5x+4 = 3x-2 \\Rightarrow x = -3\\); &ensp; \\(5x+4 = -(3x-2) \\Rightarrow 8x = -2 \\Rightarrow x = -\\tfrac14\\).</p></div>

<h3>Shape 3 — \\(|A| = cx+d\\) (a variable right-hand side)</h3>
<p>Still split into \\(A = cx+d\\) and \\(A = -(cx+d)\\), <b>but now candidates can be false</b>:
a solution only counts if the right-hand side is \\(\\geqslant 0\\) there (a modulus can’t equal a negative number).
<b>Check each candidate in the original equation.</b></p>
<div class="widget" data-widget="mod-eq"></div>

<h3>Shape 4 — \\(|\\text{quadratic}| = d\\)</h3>
<p>Split into <b>two full quadratics</b>: \\(q(x) = d\\) and \\(q(x) = -d\\), and solve both completely — up to
<b>4 solutions</b>. Keep every real root (nothing needs rejecting: both \\(\\pm d\\) have modulus \\(d\\)).</p>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2025 P1 (5 marks)</div>
<p>Solve \\(|2x^2+x-10| = 5\\).</p>
<p>\\(2x^2+x-15=0 \\Rightarrow (2x-5)(x+3)=0 \\Rightarrow x=\\tfrac52, -3\\).<br>
\\(2x^2+x-5=0 \\Rightarrow x = \\dfrac{-1\\pm\\sqrt{41}}{4}\\) (formula — keep exact on P1).<br>
<b>All four</b> are answers. The mark scheme explicitly gives A0 if you reject the negative or surd roots!</p></div>
<p class="minilinks">▶ Practise now: group <b>“Modulus equations”</b> — 4 questions, 16 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Modulus of a quadratic — graphs",
      html: `
<p>Fold a parabola and you get the most-examined picture in this chapter.</p>
<div class="method"><div class="m-title">To sketch y = |x² + bx + c| (two real roots)</div>
<ol>
<li>Factorise / find the roots and the vertex of the plain parabola.</li>
<li>Reflect the part <b>between the roots</b> (where it dips below the axis) upward.</li>
<li>Result: <b>cusps</b> (sharp corners) at the roots, a smooth folded <b>hump</b> whose height is
\\(|\\text{minimum value}|\\), and \\(y\\)-intercept \\(|c|\\).</li>
</ol></div>
<div class="widget" data-widget="mod-quad"></div>
<h3>Counting the roots of \\(|f(x)| = k\\)</h3>
<p>Slide the line \\(y=k\\) up and down in the widget and watch the count: for a fold of height \\(h\\),</p>
<ul>
<li>\\(k > h\\): <b>2</b> solutions (line above the hump)</li>
<li>\\(k = h\\): <b>3</b> solutions (line touches the hump)</li>
<li>\\(0 < k < h\\): <b>4</b> solutions</li>
<li>\\(k = 0\\): <b>2</b> solutions (the roots themselves)</li>
</ul>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2024 P1</div>
<p>For \\(y=|(x+3)(x-4)|\\): vertex of the parabola at \\(x=\\tfrac12\\) (midway between roots), value
\\((\\tfrac72)(-\\tfrac72) = -\\tfrac{49}{4}\\) → hump height \\(\\tfrac{49}{4}\\).
So \\(|(x+3)(x-4)|=k\\) has exactly 2 distinct roots when \\(k > \\tfrac{49}{4}\\).</p></div>
<p class="minilinks">▶ Practise now: group <b>“Modulus-of-quadratic graphs”</b> — the w24-p13 and w25-p23 multi-part questions (15 marks).</p>`
    },

    /* ============================================================ */
    {
      title: "Modulus inequalities (4.2)",
      html: `
<p>Two patterns to burn in — they behave <b>opposite</b> ways:</p>
<div class="method"><div class="m-title">The two patterns (c &gt; 0)</div>
<ol>
<li>\\(|A| \\leqslant c\\) &nbsp;⇒&nbsp; \\(-c \\leqslant A \\leqslant c\\) — <b>one interval</b> (“close to 0”): a sandwich.</li>
<li>\\(|A| \\geqslant c\\) &nbsp;⇒&nbsp; \\(A \\geqslant c\\) <b>or</b> \\(A \\leqslant -c\\) — <b>two intervals</b> (“far from 0”), joined by <b>or</b>.</li>
</ol></div>
<div class="callout warn">Writing \\(x &lt; -1\\) <b>and</b> \\(x &gt; \\tfrac15\\) (impossible!) instead of <b>or</b> is a classic lost mark.
Sandwiches use “and”/combined form; far-from-zero answers use “or”.</div>
<div class="example"><div class="e-title">Worked example — May/June 2025 P2</div>
<p>Solve \\(|5x+2| \\geqslant 3\\): &nbsp; \\(5x+2 \\geqslant 3 \\Rightarrow x \\geqslant \\tfrac15\\); or
\\(5x+2 \\leqslant -3 \\Rightarrow x \\leqslant -1\\).</p></div>
<h3>Variable right-hand side: \\(|ax+b| < cx+d\\)</h3>
<p>Squaring both sides is clean and safe here (both sides are \\(\\geqslant 0\\) where solutions exist), giving a
quadratic inequality:</p>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2025 P1</div>
<p>\\(|3x-4| < x+2\\;\\Rightarrow\\; 9x^2-24x+16 < x^2+4x+4 \\;\\Rightarrow\\; 2x^2-7x+3<0
\\;\\Rightarrow\\; (2x-1)(x-3)<0 \\;\\Rightarrow\\; \\tfrac12 < x < 3.\\)</p>
<p>(A positive quadratic is negative <b>between</b> its roots.)</p></div>
<h3>When the question says “use a graphical method”…</h3>
<p>…the graphs ARE the marks: draw \\(y=|ax+b|\\) (V) and the other line accurately on the grid, mark the
crossing points, then read the interval(s). See <b>w24-p22 Q4</b>: \\(|2x-8|>4\\) → draw V + line \\(y=4\\),
crossings \\(x=2, 6\\), answer \\(x<2\\) or \\(x>6\\).</p>
<div class="callout good"><b>Strictness rule:</b> strict inequality → strict answer (&lt;, &gt;); non-strict (⩽, ⩾) → include the
boundary values. Match the symbols of the question.</div>
<p class="minilinks">▶ Practise now: group <b>“Modulus inequalities”</b> — 3 questions, 13 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Substitution → hidden quadratics (4.3)",
      html: `
<p>Exam setters disguise quadratics inside powers, roots and exponentials. Your job: <b>spot the disguise,
substitute, solve, undo</b>.</p>
<div class="method"><div class="m-title">The routine</div>
<ol>
<li><b>Spot</b> the repeated block whose square also appears: \\(x^{1/3}=(x^{1/6})^2\\), \\(x^{2/3}=(x^{1/3})^2\\),
\\(e^{2x}=(e^x)^2\\), \\(\\frac1u\\) pairs with \\(u\\)…</li>
<li><b>Substitute</b> \\(u = \\) that block → a 3-term quadratic in \\(u\\) (multiply through by \\(u\\) first if there are fractions).</li>
<li><b>Solve</b> the quadratic (factorise or formula).</li>
<li><b>Filter</b>: is each \\(u\\)-value possible? &nbsp;<b>Undo</b>: convert every surviving \\(u\\) back to \\(x\\). <b>Check</b> in the original.</li>
</ol></div>
<h3>The filter — which roots survive?</h3>
<ul>
<li>\\(u = x^{1/6}, x^{1/4}, \\sqrt{x}\\) (<b>even</b> roots) → \\(u \\geqslant 0\\): <b>reject negatives</b> (and say so — it earns a mark).</li>
<li>\\(u = x^{1/3}, \\sqrt[3]{x}\\) (<b>odd</b> roots) → any sign allowed: <b>keep negatives</b>! \\(x = u^3\\) can be negative.
Rejecting them <i>loses</i> the A mark (the schemes say “A0 if rejected”).</li>
<li>\\(u = e^{\\text{anything}}\\) → \\(u > 0\\): <b>reject</b> the negative root and state it (“A0 if negative root not discounted”).</li>
</ul>
<div class="example"><div class="e-title">Contrast pair (both May/June 2025 P1!)</div>
<p><b>(i)</b> \\(x^{1/3} - x^{1/6} = 2\\): \\(u=x^{1/6}\\Rightarrow u^2-u-2=0 \\Rightarrow u=2\\text{ or }-1\\).
Even-type root → reject \\(u=-1\\). Answer: \\(x=64\\) <b>only</b>.</p>
<p><b>(ii)</b> \\(x^{1/3} + 1 = \\dfrac{6}{x^{1/3}}\\): multiply by \\(x^{1/3}\\), \\(u=x^{1/3}\\Rightarrow u^2+u-6=0
\\Rightarrow u = 2\\text{ or } -3\\). Cube root → keep both! \\(x = 8\\) <b>and</b> \\(x = -27\\).</p></div>
<div class="example"><div class="e-title">Exponential — May/June 2024 P1 (exact form)</div>
<p>\\(10e^{2x-1} - 11 = 6e^{1-2x}\\). Spot \\(e^{1-2x} = \\dfrac1{e^{2x-1}}\\); let \\(u = e^{2x-1}\\):<br>
\\(10u^2 - 11u - 6 = 0 \\Rightarrow (5u+2)(2u-3)=0 \\Rightarrow u = \\tfrac32\\) (reject \\(-\\tfrac25\\): exponentials are positive).<br>
\\(2x-1 = \\ln\\tfrac32 \\Rightarrow x = \\tfrac12 + \\tfrac12\\ln\\tfrac32\\) — “exact form” means stop there, no decimals.</p></div>
<div class="callout"><b>“Hence” questions:</b> if part (b) factorised a cubic \\(p(x)\\), part (c)’s
\\(p(u^2)=0\\) reuses those factors: each factor \\(px-q\\) becomes \\(pu^2-q\\), so \\(u^2 = \\tfrac{q}{p}\\) —
real solutions only when \\(\\tfrac{q}{p} \\geqslant 0\\). (See s26-p12 Q3.)</div>
<p class="minilinks">▶ Practise now: group <b>“Substitution → quadratic”</b> — 6 questions, 27 marks (the biggest block in this chapter).</p>`
    },

    /* ============================================================ */
    {
      title: "Sketching cubics from factors (4.4)",
      html: `
<p>Given \\(y = k(x-p)(x-q)(x-r)\\), a full-marks sketch needs exactly three ingredients:</p>
<div class="method"><div class="m-title">Three-step cubic sketch</div>
<ol>
<li><b>Roots</b> — read them straight off the factors and mark them on the \\(x\\)-axis.
(\\(2x-5\\) → root \\(\\tfrac52\\); \\(1-x\\) → root \\(1\\).)</li>
<li><b>\\(y\\)-intercept</b> — substitute \\(x=0\\) into the <i>factorised</i> form (fast multiplication of the constants). Mark it.</li>
<li><b>End behaviour</b> — the sign of the \\(x^3\\) coefficient: multiply the \\(x\\)-coefficients of the factors (and \\(k\\)).
Positive → rises to the right (up–down–up). Negative → falls to the right. <b>Watch for factors like \\((1-x)\\), which flip the sign!</b></li>
</ol></div>
<div class="widget" data-widget="cubic"></div>
<h3>The modulus of a cubic</h3>
<p>\\(y = |k(x-p)(x-q)(x-r)|\\): reflect anything below the axis up. Cusps at all three roots, every arch above
the axis, \\(y\\)-intercept made positive, <b>both ends rise</b>.</p>
<h3>Reverse problems</h3>
<p>Given the graph of \\(y=|f(x)|\\) with intercepts marked, reconstruct \\(f\\): roots → factors (clear fractions:
root \\(-0.5\\) → factor \\(2x+1\\)), then fix the constant \\(k\\) from the \\(y\\)-intercept — remembering
\\(|f(0)|\\) is given, so \\(k\\) has <b>two possible signs</b>: \\(f = \\pm(\\dots)\\). (See s25-p12 Q1.)</p>
<p class="minilinks">▶ Practise now: group <b>“Cubic sketches &amp; inequalities”</b> — 4 questions, 21 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Cubic inequalities from graphs (4.5)",
      html: `
<p>Once the sketch exists, an inequality like \\(f(x) \\geqslant 0\\) is a <b>reading</b> exercise: shade where the
curve is on the required side of the axis and write the \\(x\\)-intervals.</p>
<div class="method"><div class="m-title">Reading the solution set (roots a &lt; b &lt; c)</div>
<ol>
<li><b>Positive cubic</b> (rises right): \\(f&gt;0\\) on \\(a&lt;x&lt;b\\) and \\(x&gt;c\\); \\(f&lt;0\\) on \\(x&lt;a\\) and \\(b&lt;x&lt;c\\).</li>
<li><b>Negative cubic</b> (falls right): exactly the other way round.</li>
<li>Non-strict (⩾, ⩽) → include the roots with ⩽/⩾; strict → exclude them.</li>
<li>Answers come as <b>two pieces joined by “or”</b> (one bounded interval + one tail).</li>
</ol></div>
<p>Try it live: in the cubic widget above, set an inequality and check your prediction against the shading.</p>
<div class="callout warn"><b>The d ≠ 0 trap:</b> for \\((x+1)(x-1)(x-2) &lt; 1\\) you must draw the line
\\(y = 1\\) and read the three crossing \\(x\\)-values from the grid (≈ 1 d.p.) — the answer is NOT read from the roots!
Two regions lie below the line: the far-left tail and the dip between the middle crossings. (w24-p23 Q1.)</div>
<div class="example"><div class="e-title">Worked example — May/June 2024 P1</div>
<p>\\(y = -\\tfrac15(x+2)(2x-1)(x+5)\\): roots \\(-5, -2, \\tfrac12\\); negative cubic.
Solve \\(y \\geqslant 0\\): curve on/above axis for \\(x \\leqslant -5\\) or \\(-2 \\leqslant x \\leqslant \\tfrac12\\).</p></div>
<p class="minilinks">▶ Practise now: groups <b>“Cubic sketches &amp; inequalities”</b> and <b>“Reading given graphs”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Exam checklist",
      html: `
<div class="method"><div class="m-title">Before you leave any Chapter 4 question</div>
<ol>
<li>Modulus equation → did you get <b>all</b> the solutions (2 for linear, up to 4 for quadratic)?</li>
<li>Variable RHS → did you <b>check candidates</b> in the original equation?</li>
<li>Inequality → “or” vs sandwich correct? Strict vs non-strict symbols match the question?</li>
<li>Substitution → even root / exponential: negative branch <b>rejected and stated</b>; odd root: negative branch <b>kept</b>.</li>
<li>“Exact form” → answer left with \\(\\ln\\), fractions, surds — no decimals.</li>
<li>Sketch → roots + \\(y\\)-intercept <b>labelled</b>, correct end behaviour, cusps for moduli.</li>
<li>Graphical method demanded → the drawn graphs earn the marks; draw them properly on the grid.</li>
<li>Pace: [marks] × 1.5 min. A [3] should take ≈ 4–5 min. Practise with the timer on.</li>
</ol></div>
<p class="minilinks">Now clear the whole <a href="#/ch/4">Practice list</a> — 21 real exam questions, 98 marks.
Aim for two passes: first untimed for method, then timed at exam pace on the “Redo later” set.</p>`
    }
  ]
});
