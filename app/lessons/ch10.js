/* Chapter 10 — Trigonometry. Full lesson. */
window.A.registerLesson(10, {
  sections: [

    /* ============================================================ */
    {
      title: "Start here",
      html: `
<p class="lead">Six functions, three identities, and two things the exam asks you to do with them:
<b>prove</b> a relationship and <b>solve</b> an equation over a stated domain. Plus the graphs, where
amplitude and period carry easy marks.</p>
<div class="callout good"><b>Good news:</b> the three Pythagorean identities <i>are</i> printed in the List of
formulas. What is not given: the reciprocal definitions, the exact values, and every technique below.</div>
<div class="callout"><b>Where it appears:</b> reliably 1–2 questions per paper, 5–9 marks each. A very common
shape is <b>(a) prove an identity → (b) "hence" solve an equation using it</b> — so part (a) is not decoration,
it is the tool for part (b).</div>
<div class="method"><div class="m-title">The six functions</div>
<ol>
<li>\\(\\sin x,\\ \\cos x,\\ \\tan x = \\dfrac{\\sin x}{\\cos x}\\)</li>
<li><b>Reciprocals:</b> \\(\\operatorname{cosec}x = \\dfrac{1}{\\sin x}\\), \\(\\sec x = \\dfrac{1}{\\cos x}\\), \\(\\cot x = \\dfrac{1}{\\tan x} = \\dfrac{\\cos x}{\\sin x}\\)</li>
<li>Memory hook: <b>se</b>c pairs with <b>co</b>sine and <b>cose</b>c with <b>si</b>ne — the third letter tells you which.</li>
</ol></div>`
    },

    /* ============================================================ */
    {
      title: "Graphs: amplitude and period (10.2, 10.3)",
      html: `
<div class="method"><div class="m-title">Reading \\(y = a\\sin bx + c\\)</div>
<ol>
<li><b>\\(a\\) = amplitude</b> — how far the curve swings from its centre line. The \\(+c\\) does NOT change it.</li>
<li><b>\\(b\\) sets the period:</b> \\(\\dfrac{360°}{b}\\) (or \\(\\dfrac{2\\pi}{b}\\) in radians). Bigger \\(b\\) = more waves squeezed in; a fractional \\(b\\) stretches the graph out.</li>
<li><b>\\(c\\) shifts vertically</b>: the range becomes \\(c-a\\) to \\(c+a\\).</li>
<li><b>tan is different:</b> no amplitude (it is unbounded), and its period is \\(\\dfrac{180°}{b}\\) (or \\(\\dfrac{\\pi}{b}\\)) — half of the sine/cosine one. For \\(y=a\\tan bx+c\\) the syllabus requires the <b>asymptotes to be labelled</b>.</li>
</ol></div>
<div class="widget" data-widget="trig"></div>
<div class="example"><div class="e-title">Worked example — May/June 2026 P2</div>
<p>\\(y = 4\\cos\\left(\\tfrac{x}{8}\\right)+2\\): amplitude 4 (not 6!), period \\(360\\div\\tfrac18 = 2880°\\).
Solving \\(=0\\) gives \\(\\cos\\tfrac x8 = -\\tfrac12\\), so \\(\\tfrac x8 = \\pm120°\\), i.e. \\(x = \\pm960°\\) —
and the huge period is why only two solutions fit in \\(\\pm1080°\\).</p></div>
<p class="minilinks">▶ Practise now: group <b>“Amplitude, period & graphs”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "The identities (10.4)",
      html: `
<p>Three identities, all given on the paper — but you must recognise <i>when</i> to reach for them.</p>
<p>\\[ \\sin^2A+\\cos^2A = 1, \\qquad \\sec^2A = 1+\\tan^2A, \\qquad \\operatorname{cosec}^2A = 1+\\cot^2A \\]</p>
<div class="method"><div class="m-title">Rearrangements worth knowing by sight</div>
<ol>
<li>\\(1-\\sin^2A = \\cos^2A\\) and \\(1-\\cos^2A = \\sin^2A\\)</li>
<li>\\(\\sec^2A - 1 = \\tan^2A\\) &nbsp;→ appears whenever you meet \\((\\sec A-1)(\\sec A+1)\\)</li>
<li>\\(\\cot^2A - \\operatorname{cosec}^2A = -1\\) &nbsp;→ the s26-p11 question is built entirely on this one</li>
</ol></div>
<div class="callout good"><b>Spotting the trigger:</b> a <b>difference of two squares</b> in sec/tan or cosec/cot is
almost always an invitation to use identity 2 or 3. \\((2\\tan\\theta+\\sec\\theta)(2\\tan\\theta-\\sec\\theta)
= 4\\tan^2\\theta-\\sec^2\\theta = 3\\tan^2\\theta-1\\).</div>`
    },

    /* ============================================================ */
    {
      title: "Proving relationships (10.6)",
      html: `
<div class="method"><div class="m-title">The proof playbook — try these in order</div>
<ol>
<li><b>Convert everything to \\(\\sin\\) and \\(\\cos\\).</b> This alone cracks most proofs. \\(\\operatorname{cosec}x-\\sin x = \\dfrac{1-\\sin^2x}{\\sin x} = \\dfrac{\\cos^2x}{\\sin x}\\).</li>
<li><b>Combine fractions</b> over a common denominator before simplifying — especially for \\(\\dfrac{1}{A-1}+\\dfrac{1}{A+1}\\) shapes, where the denominator becomes \\(A^2-1\\).</li>
<li><b>Look for \\(\\sin^2+\\cos^2 = 1\\)</b> hiding in a numerator or denominator, ready to collapse to 1.</li>
<li><b>Expand and cancel</b> when brackets are paired \\(+\\) and \\(-\\): the cross terms always vanish.</li>
<li><b>Work down ONE side only</b> until it becomes the other. Never rearrange both sides towards the middle — mark schemes call that "using the target to simplify" and refuse the marks.</li>
</ol></div>
<div class="example"><div class="e-title">A three-step proof — Oct/Nov 2025 P1</div>
<p>\\(\\dfrac{1}{\\sec x-1}+\\dfrac{1}{\\sec x+1} = \\dfrac{2\\sec x}{\\sec^2x-1} = \\dfrac{2\\sec x}{\\tan^2x}
= \\dfrac{2\\cos x}{\\sin^2 x} = 2\\operatorname{cosec}x\\cot x\\).</p></div>
<div class="callout warn"><b>Keep the angle visible.</b> Writing \\(\\sin^2\\) instead of \\(\\sin^2\\theta\\)
throughout costs the final mark ("withhold for persistent omission of θ").</div>
<h3>Exact values from triangles (10.1)</h3>
<p>Exam questions sometimes build the exact values from scratch. From an equilateral triangle of side \\(a\\)
split in half: \\(\\sin30° = \\tfrac12\\), \\(\\cos30° = \\tfrac{\\sqrt3}{2}\\), so \\(\\sec30° = \\tfrac{2}{\\sqrt3} = \\tfrac{2\\sqrt3}{3}\\).
From a right isosceles triangle: \\(\\sin45° = \\cos45° = \\tfrac{1}{\\sqrt2}\\), \\(\\tan45° = 1\\).</p>
<p class="minilinks">▶ Practise now: group <b>“Proving identities”</b> — 4 questions, 19 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Solving equations in a domain (10.5)",
      html: `
<div class="method"><div class="m-title">The solving routine</div>
<ol>
<li><b>Reduce to one trig function</b> — use an identity if two different ones appear.</li>
<li><b>FACTORISE, never divide.</b> \\(\\cos^2x\\tan x - \\tfrac12\\tan x = 0\\) factorises to \\(\\tan x(\\cos^2x-\\tfrac12)=0\\). Dividing by \\(\\tan x\\) deletes the \\(\\tan x=0\\) solutions and scores M0.</li>
<li><b>Transform the domain</b> when the angle is a multiple: for \\(\\sin4x\\) with \\(0\\leqslant x\\leqslant\\tfrac{\\pi}{4}\\), solve over \\(0\\leqslant 4x\\leqslant\\pi\\); for \\(3\\theta\\) with \\(0°\\leqslant\\theta\\leqslant180°\\), work across \\(0°\\) to \\(540°\\). Then divide every answer back.</li>
<li><b>Find every solution</b> in the transformed range, using the symmetry rules below, before dividing back.</li>
<li>Check the count against the domain — and give answers in the form asked (degrees, radians, or "in terms of π").</li>
</ol></div>
<div class="method"><div class="m-title">Getting all the solutions</div>
<ol>
<li>\\(\\sin\\): second solution is \\(180° - \\theta\\) (or \\(\\pi - \\theta\\)), then add \\(360°\\) (\\(2\\pi\\)) repeatedly.</li>
<li>\\(\\cos\\): second solution is \\(-\\theta\\) or \\(360° - \\theta\\), then add \\(360°\\).</li>
<li>\\(\\tan\\): solutions repeat every \\(180°\\) (\\(\\pi\\)) — just keep adding.</li>
<li>A <b>squared</b> equation (\\(\\tan^2\\theta = \\tfrac23\\)) gives \\(\\pm\\) roots — the negative one produces a whole extra family.</li>
</ol></div>
<div class="callout warn"><b>Negative domains are real.</b> \\(-\\pi<x<\\pi\\) includes negative answers:
\\(\\cos^2x = \\tfrac12\\) there gives all four of \\(\\pm\\tfrac{\\pi}{4}, \\pm\\tfrac{3\\pi}{4}\\). Sketch the interval
if you are unsure, and note whether the inequality is strict (excluding the endpoints).</div>
<p class="minilinks">▶ Practise now: group <b>“Solving equations in a domain”</b> — 3 questions, 22 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Where trigonometry meets calculus",
      html: `
<p>Trig questions often finish with an integral or a derivative — and the identity is what makes it doable.</p>
<div class="method"><div class="m-title">The crossover facts</div>
<ol>
<li>\\(\\dfrac{d}{dx}\\sin x = \\cos x\\), \\(\\dfrac{d}{dx}\\cos x = -\\sin x\\), \\(\\dfrac{d}{dx}\\tan x = \\sec^2x\\) &nbsp;→ so \\(\\displaystyle\\int\\sec^2x\\,dx = \\tan x + c\\).</li>
<li>\\(\\displaystyle\\int\\sin(ax+b)dx = -\\dfrac{\\cos(ax+b)}{a}+c\\); \\(\\displaystyle\\int\\cos(ax+b)dx = \\dfrac{\\sin(ax+b)}{a}+c\\).</li>
<li><b>Always simplify the integrand with an identity FIRST.</b> \\(\\dfrac{1+\\cot^2\\theta}{\\cot^2\\theta}\\) looks impossible until you see it is \\(\\sec^2\\theta\\); \\((\\sin\\theta+\\cos\\theta)^2+(\\sin\\theta-\\cos\\theta)^2\\) is just the constant 2.</li>
<li>Calculus is always in <b>radians</b>.</li>
</ol></div>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2024 P2 (area under a trig curve)</div>
<p>\\(\\sin4x = \\tfrac12\\) on \\(0\\leqslant x\\leqslant\\tfrac{\\pi}{4}\\) gives \\(x = \\tfrac{\\pi}{24},\\tfrac{5\\pi}{24}\\) —
those are the limits. Then area \\(= \\displaystyle\\int_{\\pi/24}^{5\\pi/24}\\left(\\sin4x-\\tfrac12\\right)dx
= \\dfrac{\\sqrt3}{4}-\\dfrac{\\pi}{12}\\).</p></div>
<p class="minilinks">▶ Practise now: group <b>“Trigonometry with calculus”</b> — 3 questions, 18 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Exam checklist",
      html: `
<div class="method"><div class="m-title">Before you leave any Chapter 10 question</div>
<ol>
<li>Amplitude is \\(|a|\\) alone; period is \\(\\tfrac{360°}{b}\\) (\\(\\tfrac{180°}{b}\\) for tan). Asymptotes labelled on tan graphs.</li>
<li>Proof: converted to sin/cos? Worked down ONE side? Angle written every time?</li>
<li>Equation: factorised rather than divided? Domain transformed for the multiple angle and converted back?</li>
<li>All solutions found — including the negative root of a squared equation and any negative angles in the domain.</li>
<li>Answer in the right units and form: degrees to 1 d.p., radians, or "in terms of π" as asked.</li>
<li>Calculator in the mode the question uses; calculus is always radians.</li>
<li>Simplify a trig integrand with an identity before integrating.</li>
<li>"Exact value" → keep \\(\\sqrt3\\), \\(\\pi\\) and fractions.</li>
</ol></div>
<p class="minilinks">Now clear the <a href="#/ch/10">Practice list</a> — 11 real exam questions, 66 marks.</p>`
    }
  ]
});
