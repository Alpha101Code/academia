/* Chapter 9 — Circular measure. Full lesson. */
window.A.registerLesson(9, {
  sections: [

    /* ============================================================ */
    {
      title: "Start here",
      html: `
<p class="lead">One outcome, one idea: measure angles in <b>radians</b> and two formulas become beautifully
simple — arc length \\(s = r\\theta\\) and sector area \\(A = \\tfrac12 r^2\\theta\\). Everything else in this
chapter is drawing a good diagram and slicing compound shapes into sectors, triangles and segments.</p>
<div class="callout warn"><b>The formulas are NOT on the exam formula sheet.</b> The List of formulas gives you
the circle equation, cone/sphere formulas, sine/cosine rule and \\(\\Delta = \\tfrac12 ab\\sin C\\) — but
\\(s = r\\theta\\) and \\(A = \\tfrac12 r^2\\theta\\) must live in your head.</div>
<div class="callout"><b>Where it appears:</b> one diagram question on most papers, 7–12 marks, frequently a
“show that the angle is …” lead-in followed by perimeter and area parts that reuse it. The 2025–2027 spec
loves exact-value versions (answers in terms of π and surds) on Paper 1.</div>`
    },

    /* ============================================================ */
    {
      title: "Radians",
      html: `
<p>A radian is the angle whose arc equals the radius. Full turn: \\(2\\pi\\) rad \\(= 360°\\), so</p>
<p>\\[ \\pi \\text{ rad} = 180°. \\]</p>
<div class="method"><div class="m-title">Conversions & exact values you must know</div>
<ol>
<li>degrees → radians: multiply by \\(\\tfrac{\\pi}{180}\\); radians → degrees: multiply by \\(\\tfrac{180}{\\pi}\\).</li>
<li>\\(30° = \\tfrac{\\pi}{6},\\; 45° = \\tfrac{\\pi}{4},\\; 60° = \\tfrac{\\pi}{3},\\; 90° = \\tfrac{\\pi}{2},\\; 120° = \\tfrac{2\\pi}{3}\\).</li>
<li>Exact trig at those angles: \\(\\sin\\tfrac{\\pi}{3} = \\tfrac{\\sqrt3}{2}\\), \\(\\cos\\tfrac{2\\pi}{3} = -\\tfrac12\\), etc.</li>
<li><b>Calculator in RAD mode</b> for the whole chapter. Check the tiny R on screen before you start.</li>
</ol></div>
<p>Angles at a point still behave the same: on a straight line they sum to \\(\\pi\\); around a point to \\(2\\pi\\)
— exam questions constantly use “angle on the line \\(AOF\\)” = \\(\\pi - \\theta\\) splits (s25-p12-q10) and
“reflex angle” = \\(2\\pi - \\alpha\\) (s26-p12-q6).</p>`
    },

    /* ============================================================ */
    {
      title: "Arc, sector, segment",
      html: `
<div class="method"><div class="m-title">The toolkit (θ in radians, always)</div>
<ol>
<li><b>Arc length</b> \\(s = r\\theta\\).</li>
<li><b>Sector area</b> \\(A = \\tfrac12 r^2\\theta\\).</li>
<li><b>Sector perimeter</b> \\(= 2r + r\\theta\\) — the two radii are part of the boundary. Forgetting them is the №1 error.</li>
<li><b>Chord</b> \\(= 2r\\sin\\tfrac{\\theta}{2}\\) (isosceles triangle split in half) — or the cosine rule.</li>
<li><b>Triangle area</b> (two radii, included angle) \\(= \\tfrac12 r^2\\sin\\theta\\).</li>
<li><b>Segment area</b> = sector − triangle \\(= \\tfrac12 r^2(\\theta - \\sin\\theta)\\).</li>
</ol></div>
<div class="widget" data-widget="sector"></div>
<div class="example"><div class="e-title">Worked example — May/June 2026 P1 (exact, 8 marks)</div>
<p>Shaded sector, angle α: its perimeter equals the major arc. \\(2r + r\\alpha = r(2\\pi-\\alpha)\\) — the r's cancel —
\\(\\alpha = \\pi - 1\\). Then area \\(= 18(\\pi^2-1)\\): \\(\\tfrac12 r^2(\\pi-1) = 18(\\pi-1)(\\pi+1)\\) —
factorising the difference of squares cancels \\((\\pi-1)\\) — \\(r = 6\\sqrt{\\pi+1}\\). Exact from start to finish.</p></div>
<p class="minilinks">▶ Practise now: group <b>“Sectors: exact and reverse problems”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Compound shapes: the slicing method",
      html: `
<p>Every hard-looking diagram is a sum or difference of three primitives: <b>sectors, triangles, segments</b>.
The marks are for the plan as much as the arithmetic.</p>
<div class="method"><div class="m-title">Routine for any shaded region</div>
<ol>
<li><b>Walk the boundary</b> and name every piece (chord? arc? radius? straight edge?). The perimeter is exactly the pieces you walked.</li>
<li>For area, write a <b>plan in words first</b>: e.g. “2 sectors + 2 triangles”, “kite − sector”, “segment(big) − segment(small)”.</li>
<li>Find every angle before every length. Isosceles triangles from equal radii do most of the work: angle \\(= 2\\sin^{-1}\\!\\big(\\tfrac{\\text{half-chord}}{r}\\big)\\).</li>
<li>Keep 4+ decimals in intermediate angles; round only at the end (mark schemes give answer windows).</li>
</ol></div>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2025 P2 (the “stadium”, 8 marks)</div>
<p>Diagonals 12 bisecting at O → four radii of 6. Sides AD = BC = 4 → angle \\(AOD = 2\\sin^{-1}\\tfrac13 = 0.680\\),
so obtuse \\(AOB = \\pi - 0.680 = 2.46\\). Perimeter = two arcs \\(6\\times2.46\\) + two sides = 37.5.
Area = 2 sectors + 2 triangles \\(= 36(2.46) + 36\\sin(0.680)\\cdot\\tfrac{2}{2} = 111\\).</p></div>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2025 P2 (exact crescent, 6 marks)</div>
<p>Chord \\(2\\sqrt3\\) in a circle radius 2 → central angle \\(\\tfrac{2\\pi}{3}\\); inscribed angle at Q is half: \\(\\tfrac{\\pi}{3}\\)
(and triangle AQB comes out equilateral, radius \\(2\\sqrt3\\)). The crescent between the two arcs =
segment(O) − segment(Q) \\(= \\big(\\tfrac{4\\pi}{3}-\\sqrt3\\big) - \\big(2\\pi-3\\sqrt3\\big) = 2\\sqrt3 - \\tfrac{2\\pi}{3}\\).</p></div>
<p class="minilinks">▶ Practise now: groups <b>“Chords, segments & shaded regions”</b> and <b>“Compound shapes”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Circles meeting tangents and cones",
      html: `
<p>Two applied setups recur:</p>
<div class="method"><div class="m-title">Tangent setups (with Chapter 8 energy)</div>
<ol>
<li>Tangent ⟂ radius at the contact point → a right triangle appears. (w24-p12: 5-12-13 triangle; s26-p21: \\(\\cos\\theta = \\tfrac{r}{r+x}\\).)</li>
<li>“Show that the angle is …” to 2 or 3 dp → compute to MORE dp and show it before rounding.</li>
<li>Shaded “kite minus sector” regions: kite = 2 right triangles = \\(r_1 r_2\\).</li>
</ol></div>
<div class="method"><div class="m-title">Sector → cone (s25-p21, 12 marks)</div>
<ol>
<li>Slant height = sector radius. Curved surface area = sector area. Top circumference = arc length.</li>
<li>\\(2\\pi r_{top} = \\text{arc}\\) gives the top radius; Pythagoras gives the height.</li>
<li>Rates part (ch14 crossover): similar triangles give \\(r\\) in terms of \\(h\\), then \\(V(h) \\to \\tfrac{dV}{dh} \\to\\) chain rule.</li>
</ol></div>
<p class="minilinks">▶ Practise now: group <b>“Applications (tangents, cones)”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Exam checklist",
      html: `
<div class="method"><div class="m-title">Before you leave any Chapter 9 question</div>
<ol>
<li>Calculator in <b>radian mode</b>? (The single most expensive slip in this chapter.)</li>
<li>\\(s = r\\theta\\), \\(A = \\tfrac12 r^2\\theta\\) — recalled, not looked up (they are not given).</li>
<li>Sector perimeter includes <b>2r</b>; segment perimeter = arc + chord.</li>
<li>Walked the boundary before computing the perimeter? Written the area plan in words?</li>
<li>Angles kept to 4+ dp mid-working; “show that” values displayed unrounded first?</li>
<li>Exact questions stay exact: π, surds, factorised \\(\\pi^2-1 = (\\pi-1)(\\pi+1)\\) — no decimals.</li>
<li>Reflex angle available when needed: \\(2\\pi - \\theta\\); straight line: \\(\\pi - \\theta\\).</li>
</ol></div>
<p class="minilinks">Now clear the <a href="#/ch/9">Practice list</a> — 8 real exam questions, 68 marks.</p>`
    }
  ]
});
