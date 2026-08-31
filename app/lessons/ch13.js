/* Chapter 13 — Vectors in two dimensions. Full lesson. */
window.A.registerLesson(13, {
  sections: [

    /* ============================================================ */
    {
      title: "Start here",
      html: `
<p class="lead">A vector carries <b>both size and direction</b>. Two very different exam styles grow from that:
<b>motion problems</b> (velocities, positions at time \\(t\\), do two particles collide?) and
<b>vector geometry</b> (routes around a diagram, with unknown scalars to find).</p>
<div class="callout"><b>Where it appears:</b> one question on nearly every paper, 5–10 marks. Paper 2 tends to get
the motion/bearings versions; Paper 1 gets the algebraic geometry ones. Both are very learnable — the methods
below cover essentially every past question in the bank.</div>
<div class="method"><div class="m-title">The skills (13.1–13.4)</div>
<ol>
<li><b>13.1</b> Vector notation in every form — \\(\\begin{pmatrix}a\\\\b\\end{pmatrix}\\), \\(\\overrightarrow{AB}\\), bold \\(\\mathbf{p}\\), \\(a\\mathbf{i}-b\\mathbf{j}\\)</li>
<li><b>13.2</b> Position vectors and unit vectors</li>
<li><b>13.3</b> Magnitude; add, subtract, multiply by scalars; equate like vectors; vector geometry</li>
<li><b>13.4</b> Compose and resolve velocities; position from velocity; collisions</li>
</ol></div>
<div class="callout warn"><b>Notation is marked.</b> Write \\(\\overrightarrow{AB}\\) with the arrow, keep column
vectors as columns, and never mix forms like \\(\\begin{pmatrix}10\\mathbf{i}\\\\-24\\mathbf{j}\\end{pmatrix}\\) —
mark schemes explicitly refuse full marks for that.</div>`
    },

    /* ============================================================ */
    {
      title: "The basics: components, magnitude, unit vectors",
      html: `
<div class="method"><div class="m-title">The four operations</div>
<ol>
<li><b>Add / subtract</b> component by component: \\(\\begin{pmatrix}a\\\\b\\end{pmatrix}+\\begin{pmatrix}c\\\\d\\end{pmatrix} = \\begin{pmatrix}a+c\\\\b+d\\end{pmatrix}\\).</li>
<li><b>Scalar multiple</b>: \\(k\\begin{pmatrix}a\\\\b\\end{pmatrix} = \\begin{pmatrix}ka\\\\kb\\end{pmatrix}\\) — same direction (or reversed if \\(k<0\\)), length multiplied by \\(|k|\\).</li>
<li><b>Magnitude</b>: \\(\\left|\\begin{pmatrix}a\\\\b\\end{pmatrix}\\right| = \\sqrt{a^2+b^2}\\) (Pythagoras).</li>
<li><b>Unit vector</b>: \\(\\hat{\\mathbf{a}} = \\dfrac{\\mathbf{a}}{|\\mathbf{a}|}\\) — same direction, length 1.</li>
</ol></div>
<div class="widget" data-widget="vector"></div>
<div class="callout good"><b>Watch for the classic triples</b> — they make magnitudes exact and instant:
\\(\\begin{pmatrix}5\\\\-12\\end{pmatrix}\\to13\\), \\(\\begin{pmatrix}-20\\\\21\\end{pmatrix}\\to29\\),
\\(\\begin{pmatrix}3\\\\4\\end{pmatrix}\\to5\\), \\(\\begin{pmatrix}8\\\\15\\end{pmatrix}\\to17\\). Exam setters choose these deliberately.</div>
<h3>Equating like vectors</h3>
<p>If two vectors are equal, their \\(\\mathbf{i}\\) parts are equal <b>and</b> their \\(\\mathbf{j}\\) parts are equal.
One vector equation = two ordinary equations. That is how \\(\\mathbf{c}=3\\mathbf{a}-2\\mathbf{b}\\) gives both
\\(\\alpha\\) and \\(\\beta\\) (s25-p11-q1).</p>
<p class="minilinks">▶ Practise now: group <b>“Vector algebra & equating components”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Position vectors and motion (13.2, 13.4)",
      html: `
<div class="method"><div class="m-title">The two formulas that run every motion question</div>
<ol>
<li><b>Velocity from speed + direction:</b> \\(\\mathbf{v} = \\text{speed}\\times\\hat{\\mathbf{d}} = \\text{speed}\\times\\dfrac{\\mathbf{d}}{|\\mathbf{d}|}\\).</li>
<li><b>Position at time t:</b> \\(\\mathbf{r}(t) = \\mathbf{r}_0 + \\mathbf{v}t\\) — “start plus velocity times time”.</li>
</ol></div>
<div class="example"><div class="e-title">Worked example — May/June 2024 P1</div>
<p>Speed 14.5 parallel to \\(\\begin{pmatrix}-20\\\\21\\end{pmatrix}\\): magnitude 29, scale factor \\(\\tfrac{14.5}{29}=\\tfrac12\\),
so \\(\\mathbf{v} = \\begin{pmatrix}-10\\\\10.5\\end{pmatrix}\\), and from \\(\\begin{pmatrix}3\\\\5\\end{pmatrix}\\) the position is
\\(\\begin{pmatrix}3\\\\5\\end{pmatrix}+\\begin{pmatrix}-10\\\\10.5\\end{pmatrix}t\\).</p></div>
<h3>Resolving a speed given as an angle or bearing</h3>
<div class="method"><div class="m-title">Angle vs bearing — do not mix them up</div>
<ol>
<li><b>Angle θ above the x-axis:</b> \\(\\mathbf{v} = v\\cos\\theta\\,\\mathbf{i} + v\\sin\\theta\\,\\mathbf{j}\\).</li>
<li><b>Bearing β</b> (measured <b>clockwise from north</b>, with \\(\\mathbf{i}\\)=east, \\(\\mathbf{j}\\)=north):
\\(\\mathbf{v} = v\\sin\\beta\\,\\mathbf{i} + v\\cos\\beta\\,\\mathbf{j}\\) — sin and cos swap over!</li>
<li>Always sanity-check the signs against the compass: a bearing of 300° must come out negative-east (i.e. west) and positive-north.</li>
</ol></div>
<div class="callout warn"><b>Clock-time trap:</b> when two objects start at different times, convert to hours of travel
<i>each</i> before substituting. In s26-p22 boat A sails from 13 00 (so 4 hours by 17 00) while boat B sails from
15 00 (only 2 hours).</div>
<p class="minilinks">▶ Practise now: groups <b>“Velocity, position and collisions”</b> and <b>“Bearings, resolving & real contexts”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Do they collide?",
      html: `
<p>Two particles collide if they are at the <b>same place at the same time</b>. There are two standard routes,
and the question usually tells you which by its wording.</p>
<div class="method"><div class="m-title">Route 1 — equate the position vectors (used to PROVE a collision)</div>
<ol>
<li>Set the \\(x\\)-components equal → an equation in \\(t\\); set the \\(y\\)-components equal → another.</li>
<li>Solve each for \\(t\\).</li>
<li><b>They collide only if the two values of \\(t\\) are the same.</b> Showing one equation is not enough — the marks are for confirming both agree (w24-p22-q11, exact times both \\(\\tfrac{3\\sqrt3}{5}\\)).</li>
</ol></div>
<div class="method"><div class="m-title">Route 2 — the distance function (used to DISPROVE a collision)</div>
<ol>
<li>Find \\(\\overrightarrow{PQ} = \\mathbf{r}_Q-\\mathbf{r}_P\\) (either order — it gets squared).</li>
<li>\\(d^2 = x^2+y^2\\), a quadratic in \\(t\\). (If the question says “show \\(d^2 = mt^2+nt+r\\)”, stop there — no square root needed.)</li>
<li>Collision needs \\(d = 0\\). Show this is impossible in one of two ways:
<ul><li><b>Negative discriminant</b> → no real \\(t\\) at all (s24-p12: disc \\(=-1936\\));</li>
<li><b>Only a negative root</b> → e.g. \\(d^2 = 5(t+4)^2\\) is zero only at \\(t=-4\\), but time cannot be negative (w25-p22).</li></ul></li>
</ol></div>
<div class="callout">Both conclusions must be <b>written out</b>: “discriminant &lt; 0, so no real solutions, so they
never collide”, or “\\(t=-4\\) but \\(t\\geqslant0\\), so no collision”. The reasoning sentence is the mark.</div>`
    },

    /* ============================================================ */
    {
      title: "Vector geometry: routes and scalars (13.3)",
      html: `
<p>Paper 1's version: a triangle \\(OAB\\) with \\(\\overrightarrow{OA}=\\mathbf{a}\\), \\(\\overrightarrow{OB}=\\mathbf{b}\\),
some points dividing the sides, and one or two unknown scalars to find.</p>
<div class="method"><div class="m-title">The route-building method</div>
<ol>
<li><b>Read each ratio the right way round.</b> \\(\\overrightarrow{OA}=3\\overrightarrow{OX}\\) means \\(\\overrightarrow{OX}=\\tfrac13\\mathbf{a}\\).
And \\(AC:CB = 3:1\\) means \\(\\overrightarrow{AC} = \\tfrac34\\overrightarrow{AB}\\) (3 parts out of 4, not out of 1).</li>
<li><b>Walk the arrows</b> to express everything in \\(\\mathbf{a}\\) and \\(\\mathbf{b}\\):
\\(\\overrightarrow{XY} = \\overrightarrow{XO}+\\overrightarrow{OY}\\), and reversing an arrow flips the sign.</li>
<li>Write the SAME vector two different ways — once via each given scalar.</li>
<li><b>Equate the coefficients</b> of \\(\\mathbf{a}\\) and of \\(\\mathbf{b}\\) separately (they are independent directions). Two equations, two scalars.</li>
</ol></div>
<div class="callout good"><b>The zero-coefficient trick:</b> if a point lies on \\(OB\\) then its position vector is a
multiple of \\(\\mathbf{b}\\) alone — so the coefficient of \\(\\mathbf{a}\\) must be <b>zero</b>. That single
observation solves s25-p12-q11 (\\(\\tfrac34-\\tfrac{1}{12}\\mu = 0 \\Rightarrow \\mu=9\\), then \\(\\lambda=3\\)) and
s26-p11-q11 (\\(m=5\\), \\(n=\\tfrac54\\)).</div>
<div class="example"><div class="e-title">Component version — May/June 2026 P1</div>
<p>With numbers instead of letters the same routes apply: \\(AC:CB=3:1\\) gives
\\(\\overrightarrow{OC} = \\overrightarrow{OA}+\\tfrac34\\overrightarrow{AB} = \\begin{pmatrix}-2\\\\4\\end{pmatrix}\\),
then \\(\\overrightarrow{OD} = \\overrightarrow{OC}+\\overrightarrow{CD} = \\begin{pmatrix}3\\\\-1.5\\end{pmatrix}\\), so \\(\\lambda = 0.75\\).</p></div>
<p class="minilinks">▶ Practise now: group <b>“Vector geometry with scalars”</b> — 3 questions, 23 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Exam checklist",
      html: `
<div class="method"><div class="m-title">Before you leave any Chapter 13 question</div>
<ol>
<li>Notation correct: arrows on \\(\\overrightarrow{AB}\\), columns kept as columns, no \\(\\mathbf{i}\\)/\\(\\mathbf{j}\\) inside a column vector.</li>
<li>Velocity = speed × <b>unit</b> vector — did you divide by the magnitude first?</li>
<li>Bearings use \\(\\sin\\) for east and \\(\\cos\\) for north (angles above the x-axis are the other way round).</li>
<li>Different start times → different values of \\(t\\) for each object.</li>
<li>Proving a collision: check BOTH components give the same \\(t\\). Disproving: negative discriminant, or a negative-only root with \\(t\\geqslant0\\) — and write the sentence.</li>
<li>Ratios: \\(AC:CB=3:1\\) → \\(\\tfrac34\\) of the whole. Check "\\(\\overrightarrow{OA}=3\\overrightarrow{OX}\\)" is read as \\(\\overrightarrow{OX}=\\tfrac13\\overrightarrow{OA}\\).</li>
<li>Geometry: equate \\(\\mathbf{a}\\) and \\(\\mathbf{b}\\) coefficients separately; a point on \\(OB\\) has zero \\(\\mathbf{a}\\)-coefficient.</li>
<li>"Exact values" → keep \\(\\sqrt3\\), \\(5\\sqrt3\\), \\(\\tfrac{3\\sqrt3}{5}\\) — no decimals.</li>
</ol></div>
<p class="minilinks">Now clear the <a href="#/ch/13">Practice list</a> — 8 real exam questions, 63 marks.
This completes all seven priority chapters.</p>`
    }
  ]
});
