/* Chapter 14 — Calculus. Full lesson. */
window.A.registerLesson(14, {
  sections: [

    /* ============================================================ */
    {
      title: "Start here",
      html: `
<p class="lead">Calculus is the largest chapter in the syllabus — 15 outcomes — and the most valuable per paper.
It has two halves that mirror each other: <b>differentiation</b> (find the rate of change) and
<b>integration</b> (undo it), plus their applications to tangents, stationary points, areas and motion.</p>
<div class="callout warn"><b>No formulas are given for Calculus in the List of formulas.</b> Every derivative,
every integral, the product rule, the quotient rule — all from memory. That makes this the chapter with the
highest recall load in the whole course.</div>
<div class="callout"><b>Where it appears:</b> two or three questions on every paper, often 15–25 marks in total —
more than any other topic. Long "area" and "kinematics" questions are frequently the final question worth 9–11 marks.</div>
<div class="method"><div class="m-title">The two halves</div>
<ol>
<li><b>Differentiation (14.1–14.9):</b> standard derivatives, chain/product/quotient rules, tangents and normals,
stationary points and their nature, rates of change and small increments.</li>
<li><b>Integration (14.10–14.13):</b> reversing differentiation, the standard integral forms, definite integrals and areas.</li>
<li><b>Kinematics (14.14–14.15)</b> ties both halves to motion in a straight line.</li>
</ol></div>`
    },

    /* ============================================================ */
    {
      title: "The derivatives you must know",
      html: `
<div class="method"><div class="m-title">Standard derivatives (memorise — nothing is given)</div>
<ol>
<li>\\(\\dfrac{d}{dx}x^n = nx^{n-1}\\) &nbsp;(any rational \\(n\\) — including \\(\\sqrt{x} = x^{1/2}\\) and \\(\\dfrac1x = x^{-1}\\))</li>
<li>\\(\\dfrac{d}{dx}\\sin x = \\cos x\\); &ensp; \\(\\dfrac{d}{dx}\\cos x = -\\sin x\\); &ensp; \\(\\dfrac{d}{dx}\\tan x = \\sec^2 x\\)</li>
<li>\\(\\dfrac{d}{dx}\\mathrm{e}^x = \\mathrm{e}^x\\); &ensp; \\(\\dfrac{d}{dx}\\ln x = \\dfrac1x\\)</li>
</ol></div>
<div class="method"><div class="m-title">The three rules</div>
<ol>
<li><b>Chain rule</b> (a function inside a function): differentiate the outside, then <b>multiply by the derivative of the inside</b>.<br>
\\(\\dfrac{d}{dx}f(ax+b) = a\\,f'(ax+b)\\), so \\(\\dfrac{d}{dx}\\mathrm{e}^{2x-1} = 2\\mathrm{e}^{2x-1}\\), \\(\\dfrac{d}{dx}\\ln(3x^2+16) = \\dfrac{6x}{3x^2+16}\\), \\(\\dfrac{d}{dx}\\sin^2x = 2\\sin x\\cos x\\).</li>
<li><b>Product rule:</b> \\((uv)' = u'v + uv'\\).</li>
<li><b>Quotient rule:</b> \\(\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}\\) — <b>numerator derivative first</b>; swapping the order flips the sign and loses every subsequent mark.</li>
</ol></div>
<div class="callout good"><b>Radians always.</b> Trig derivatives are only valid in radians — put the calculator in RAD mode for
the whole chapter, and read "\\(x\\) increases from 3" as 3 radians.</div>
<div class="callout"><b>Layered questions</b> are the hard ones: \\(\\left(\\dfrac{x^2-1}{x^2+1}\\right)^4\\) needs the chain rule
wrapped around the quotient rule, and \\(\\cos x\\sin^2x\\) needs the chain rule inside the product rule. Do the inner
derivative on its own line first, then substitute it in.</div>
<p class="minilinks">▶ Practise now: group <b>“Differentiation: chain, product & quotient”</b> — 3 questions, 16 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Gradients, tangents and normals (14.5)",
      html: `
<p>\\(\\dfrac{dy}{dx}\\) <b>is</b> the gradient of the curve at a point. Everything in this section follows from that.</p>
<div class="widget" data-widget="calculus"></div>
<div class="method"><div class="m-title">Tangent and normal routine</div>
<ol>
<li>Differentiate to get \\(\\dfrac{dy}{dx}\\).</li>
<li>Substitute the \\(x\\)-value for the <b>gradient</b> \\(m\\) — and substitute into the ORIGINAL equation for the \\(y\\)-<b>coordinate</b>. You need both.</li>
<li>Tangent: \\(y - y_1 = m(x - x_1)\\). &ensp;Normal: same point, gradient \\(-\\dfrac1m\\) (perpendicular).</li>
<li>"Cuts the \\(x\\)-axis" → set \\(y=0\\); "cuts the \\(y\\)-axis" → set \\(x=0\\); "meets the line …" → solve simultaneously.</li>
</ol></div>
<div class="example"><div class="e-title">Worked example — May/June 2024 P2</div>
<p>\\(y = 5\\mathrm{e}^{2x-1}+\\mathrm{e}\\) at \\(x=1\\): gradient \\(10\\mathrm{e}\\), point \\((1, 6\\mathrm{e})\\) → tangent \\(y = 10\\mathrm{e}x - 4\\mathrm{e}\\).
Setting \\(y=0\\) the \\(\\mathrm{e}\\) cancels, giving \\(x = 0.4\\). Note \\(+\\mathrm{e}\\) is a constant and differentiates to zero.</p></div>
<p class="minilinks">▶ Practise now: group <b>“Tangents & normals”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Stationary points and their nature (14.6, 14.9)",
      html: `
<div class="method"><div class="m-title">Finding and classifying</div>
<ol>
<li><b>Find:</b> solve \\(\\dfrac{dy}{dx} = 0\\).</li>
<li><b>Classify</b> — two accepted methods:
<ul><li><b>Second derivative test:</b> \\(\\dfrac{d^2y}{dx^2} > 0\\) → minimum; \\(< 0\\) → maximum.</li>
<li><b>First derivative test:</b> check the SIGN of \\(\\dfrac{dy}{dx}\\) just left and just right of the point (− then + → minimum; + then − → maximum).</li></ul></li>
<li>The syllabus demands <b>full justification</b> — state the values/signs you found, not just the conclusion. Points of inflexion are excluded.</li>
</ol></div>
<div class="callout warn"><b>Careful with what you are given.</b> If the question hands you \\(\\dfrac{dy}{dx}\\) (a "gradient function"),
then \\(\\dfrac{dy}{dx}=0\\) is solved directly — but to get the \\(y\\)-coordinate you must <b>integrate</b> and use a
given point to find \\(c\\) (s25-p12-q12 → the stationary point is \\(\\left(\\tfrac25, 4\\right)\\)).</div>
<div class="example"><div class="e-title">Identity questions — May/June 2024 P2</div>
<p>"\\(3\\dfrac{d^2y}{dx^2} = \\left(\\dfrac{dy}{dx}\\right)^2 - y\\) <b>for all values of x</b>" means the two sides are identical
polynomials, so <b>compare coefficients</b> of \\(x^2\\), \\(x\\) and the constant separately: \\(m=\\tfrac14\\), \\(n=-\\tfrac54\\).</p></div>
<p class="minilinks">▶ Practise now: group <b>“Stationary points & second derivatives”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Rates of change & small increments (14.7)",
      html: `
<p>Two closely related applications that students mix up. The wording tells you which is which.</p>
<div class="method"><div class="m-title">Connected rates of change (things changing with TIME)</div>
<ol>
<li>Chain rule: \\(\\dfrac{dy}{dt} = \\dfrac{dy}{dx}\\times\\dfrac{dx}{dt}\\).</li>
<li>Identify which two you know and which you want — then multiply or divide accordingly.</li>
<li>"\\(y\\) is increasing at the rate of \\(h\\) units per second" means \\(\\dfrac{dy}{dt}=h\\); wanting \\(\\dfrac{dx}{dt}\\) means <b>dividing</b>: \\(\\dfrac{dx}{dt} = \\dfrac{dy}{dt}\\div\\dfrac{dy}{dx}\\).</li>
</ol></div>
<div class="method"><div class="m-title">Small increments / approximate change (no time involved)</div>
<ol>
<li>\\(\\delta y \\approx \\dfrac{dy}{dx}\\times\\delta x\\).</li>
<li>"as \\(x\\) increases from \\(k\\) to \\(k+h\\)" → \\(\\delta x = h\\); evaluate \\(\\dfrac{dy}{dx}\\) at \\(x = k\\).</li>
<li>Answer looks like \\(1.94h\\) or \\(h\\ln\\tfrac12\\) — a multiple of \\(h\\), not a number.</li>
</ol></div>
<div class="callout warn">Mark schemes penalise using small-changes notation for a rates question and vice versa. If the
question mentions <b>per second</b>, it is rates (\\(\\frac{dx}{dt}\\)); if it says <b>increases from … to … + h</b>, it is an increment (\\(\\delta y\\)).</div>
<p class="minilinks">▶ Practise now: group <b>“Rates of change & small increments”</b> — 3 questions, 15 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Integration (14.10–14.12)",
      html: `
<p>Integration is differentiation run backwards. Every rule below is just a derivative rule reversed.</p>
<div class="method"><div class="m-title">The standard integrals (all must be memorised)</div>
<ol>
<li>\\(\\displaystyle\\int x^n dx = \\dfrac{x^{n+1}}{n+1} + c\\) &nbsp;(\\(n \\neq -1\\)); &ensp;\\(\\displaystyle\\int\\dfrac1x dx = \\ln x + c\\)</li>
<li>\\(\\displaystyle\\int(ax+b)^n dx = \\dfrac{(ax+b)^{n+1}}{a(n+1)} + c\\) — raise the power, then divide by the new power <b>AND by \\(a\\)</b></li>
<li>\\(\\displaystyle\\int\\dfrac{1}{ax+b}dx = \\dfrac{\\ln(ax+b)}{a} + c\\) &nbsp;(the \\(n=-1\\) case)</li>
<li>\\(\\displaystyle\\int\\mathrm{e}^{ax+b}dx = \\dfrac{\\mathrm{e}^{ax+b}}{a} + c\\)</li>
<li>\\(\\displaystyle\\int\\sin(ax+b)dx = -\\dfrac{\\cos(ax+b)}{a}+c\\); &ensp;\\(\\displaystyle\\int\\cos(ax+b)dx = \\dfrac{\\sin(ax+b)}{a}+c\\); &ensp;\\(\\displaystyle\\int\\sec^2(ax+b)dx = \\dfrac{\\tan(ax+b)}{a}+c\\)</li>
</ol></div>
<div class="callout warn"><b>Always \\(+c\\)</b> for an indefinite integral — the syllabus states it explicitly and marks are lost without it.
Definite integrals need no \\(c\\) (it cancels).</div>
<h3>“Hence” integration</h3>
<p>When part (a) asks you to differentiate something and part (b) says "hence find \\(\\int\\ldots\\)", <b>reverse part (a)</b>:</p>
<div class="example"><div class="e-title">Worked example — May/June 2024 P1</div>
<p>(a) \\(\\dfrac{d}{dx}(x^2\\ln x) = 2x\\ln x + x\\). (b) So \\(\\int(2x\\ln x + x)dx = x^2\\ln x\\), giving
\\(2\\int x\\ln x\\,dx = x^2\\ln x - \\dfrac{x^2}{2}\\), hence \\(\\int x\\ln x\\,dx = \\dfrac{x^2\\ln x}{2} - \\dfrac{x^2}{4} + c\\).</p></div>
<p class="minilinks">▶ Practise now: group <b>“Integration techniques”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Areas (14.13)",
      html: `
<div class="method"><div class="m-title">Area routine</div>
<ol>
<li><b>Find the limits</b> — usually by solving the two equations simultaneously (or from where the curve meets an axis).</li>
<li><b>Subtract before integrating:</b> area between curves \\(= \\displaystyle\\int_a^b(\\text{top} - \\text{bottom})\\,dx\\). One integral, not two.</li>
<li>Integrate, substitute the limits, subtract. Show the substitution — it carries a method mark.</li>
<li><b>Straight-line pieces are trapezia</b> — use \\(\\tfrac12(p+q)h\\) instead of integrating; it is faster and less error-prone.</li>
</ol></div>
<div class="callout"><b>Getting the order right matters:</b> mark schemes award A0 if the subtraction is done the wrong
way round (a negative area). Sketch or check one \\(x\\)-value to see which graph is on top.</div>
<div class="example"><div class="e-title">Between two curves — Oct/Nov 2025 P1</div>
<p>\\(y=12-x^2\\) and \\(y=x^4-4x^2+8\\) meet where \\(x^4-3x^2-4=0 \\Rightarrow (x^2-4)(x^2+1)=0 \\Rightarrow x=\\pm2\\).
Then \\(\\int_{-2}^{2}(-x^4+3x^2+4)dx = \\dfrac{96}{5}\\).</p></div>
<div class="example"><div class="e-title">Line minus curve — May/June 2026 P1 (11 marks)</div>
<p>Line \\(y=-4x+6\\) meets \\(y = \\dfrac{10}{4x+1}\\) at \\(x=\\tfrac14, 1\\). Area = trapezium \\(\\tfrac{21}{8}\\) minus
\\(\\int\\dfrac{10}{4x+1}dx = \\tfrac{10}{4}\\ln(4x+1)\\), giving the exact answer \\(\\dfrac{21}{8} - \\dfrac52\\ln\\dfrac52\\).</p></div>
<p class="minilinks">▶ Practise now: group <b>“Areas under and between curves”</b> — 2 questions, 18 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Kinematics (14.14, 14.15)",
      html: `
<p>One diagram governs the whole topic:</p>
<p style="text-align:center; font-size:17px">\\(s \\;\\xrightarrow[\\;\\text{differentiate}\\;]{}\\; v \\;\\xrightarrow[\\;\\text{differentiate}\\;]{}\\; a\\)
&emsp;and back by &emsp;\\(a \\;\\xrightarrow[\\;\\text{integrate}\\;]{}\\; v \\;\\xrightarrow[\\;\\text{integrate}\\;]{}\\; s\\)</p>
<div class="method"><div class="m-title">Translating the words</div>
<ol>
<li>"<b>At rest</b>" or "<b>changes direction</b>" → \\(v = 0\\).</li>
<li>"<b>Maximum velocity</b>" → \\(a = 0\\) (differentiate \\(v\\) and set to zero).</li>
<li>"<b>Returns to O</b>" / "passes through O" → \\(s = 0\\).</li>
<li>Integrating always introduces \\(+c\\): find it from the stated initial condition (e.g. "passes through \\(O\\) when \\(t=0\\)" gives \\(s=0\\) at \\(t=0\\)).</li>
<li>Displacement can be negative (position relative to \\(O\\)); <b>distance</b> is its size.</li>
</ol></div>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2024 P2</div>
<p>\\(v = \\cos t - \\sin t\\). Then \\(a = -\\sin t - \\cos t\\). Changes direction when \\(v=0 \\Rightarrow \\tan t = 1 \\Rightarrow t = \\tfrac{\\pi}{4}\\).
Integrating, \\(s = \\sin t + \\cos t + c\\), and \\(s=0\\) at \\(t=0\\) gives \\(c=-1\\); so \\(s = \\sqrt2 - 1\\).
Finally, since \\(s+1 = \\sin t+\\cos t\\), we get \\(a = -s-1\\).</p></div>
<div class="callout good"><b>Graph questions (14.15)</b> reuse the Chapter 4 sketching skills: a displacement given as
\\((t-4)^2(t-1)\\) is a cubic with a <b>repeated root</b> at \\(t=4\\), so the curve TOUCHES the axis there — that
detail is the mark.</div>
<p class="minilinks">▶ Practise now: group <b>“Kinematics”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Exam checklist",
      html: `
<div class="method"><div class="m-title">Before you leave any Chapter 14 question</div>
<ol>
<li>Chain rule: did you multiply by the derivative of the inside?</li>
<li>Quotient rule: numerator derivative FIRST (\\(u'v - uv'\\)), denominator squared.</li>
<li>Calculator in <b>radians</b> for anything trigonometric.</li>
<li>Tangent/normal: found BOTH the gradient and the \\(y\\)-coordinate? Normal gradient \\(=-1/m\\)?</li>
<li>Stationary points: nature justified with an actual value or sign, not just asserted.</li>
<li>Rates (per second) vs small increments (\\(\\delta y \\approx \\frac{dy}{dx}\\,h\\)) — the right one for the wording?</li>
<li>Indefinite integral → \\(+c\\). \\((ax+b)^n\\) → divide by the new power AND by \\(a\\).</li>
<li>Areas: limits from simultaneous equations, subtract top − bottom in that order, substitution shown.</li>
<li>Kinematics: \\(v=0\\) for at rest/direction change, \\(a=0\\) for maximum speed, and find \\(c\\) from the initial condition.</li>
<li>"Exact form" → keep \\(\\mathrm{e}\\), \\(\\ln\\), \\(\\pi\\) and surds; never round.</li>
</ol></div>
<p class="minilinks">Now clear the <a href="#/ch/14">Practice list</a> — 16 real exam questions, 95 marks.
Split it over two sessions: differentiation and its applications first, then integration, areas and kinematics.</p>`
    }
  ]
});
