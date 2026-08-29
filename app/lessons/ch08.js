/* Chapter 8 — Coordinate geometry of the circle. Full lesson. */
window.A.registerLesson(8, {
  sections: [

    /* ============================================================ */
    {
      title: "Start here",
      html: `
<p class="lead">This topic is <b>new to the 2025–2027 syllabus</b>, so examiners are still showing you its whole
repertoire: read a circle equation, test where a line meets a circle, build tangents with the
perpendicular-radius fact, and (the newest twist) reason about two circles. It is coordinate geometry —
every problem yields to <i>centre, radius, distance, gradient</i>.</p>
<div class="callout"><b>Where it appears:</b> one question most papers, 4–8 marks, any position from Q2 to the
final question. The List of formulas gives you \\((x-a)^2+(y-b)^2=r^2\\) and the general form — what it
does NOT give you is how to convert between them at speed.</div>
<div class="method"><div class="m-title">The skills (syllabus 8.1–8.4)</div>
<ol>
<li><b>8.1</b> Circle equation in both forms; extract centre and radius from either</li>
<li><b>8.2</b> Line meets circle: substitute → quadratic → discriminant decides tangent / chord / miss</li>
<li><b>8.3</b> Tangents — via the perpendicular radius (<b>no calculus</b> allowed here)</li>
<li><b>8.4</b> Two circles: intersection points, common chord, touch or miss</li>
</ol></div>`
    },

    /* ============================================================ */
    {
      title: "The circle equation (8.1)",
      html: `
<p>A circle is just a distance statement: every point \\((x,y)\\) at distance \\(r\\) from the centre \\((a,b)\\):</p>
<p>\\[ (x-a)^2 + (y-b)^2 = r^2 \\]</p>
<div class="method"><div class="m-title">Reading each form</div>
<ol>
<li><b>Completed form</b> \\((x-3)^2+(y+4)^2=20\\): centre \\((3,-4)\\) — <b>flip the signs</b> — and \\(r=\\sqrt{20}=2\\sqrt5\\) — simplify the surd.</li>
<li><b>General form</b> \\(x^2+y^2+2gx+2fy+c=0\\): centre \\((-g,-f)\\) — halve the \\(x\\)- and \\(y\\)-coefficients and flip — and \\(r^2 = g^2+f^2-c\\).<br>
Example: \\(x^2+y^2-10x-4y+24=0\\) → centre \\((5,2)\\), \\(r^2=25+4-24=5\\).</li>
<li>To convert: complete the square in \\(x\\) and \\(y\\) separately.</li>
</ol></div>
<div class="callout good"><b>Three instant facts</b> worth 1–2 marks each, again and again:<br>
• point ON the circle ⟺ substituting it gives exactly \\(r^2\\) (s25-p11-q3a);<br>
• the centre is the <b>midpoint of any diameter</b>: \\(B = 2C - A\\) (asked twice: s25-p11, s26-p11);<br>
• distance point→centre vs \\(r\\) tells you inside / on / outside.</div>
<p class="minilinks">▶ Practise now: group <b>“Centre, radius & the circle equation”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Line meets circle: the discriminant (8.2)",
      html: `
<div class="method"><div class="m-title">The master move</div>
<ol>
<li>Substitute the line \\(y = mx+c\\) into the circle equation.</li>
<li>Expand to a quadratic in \\(x\\): \\(Ax^2+Bx+C=0\\). (Expect \\(A = 1+m^2\\).)</li>
<li>Discriminant \\(B^2-4AC\\):&ensp;\\(>0\\) chord (2 points) ·&ensp;\\(=0\\) <b>tangent</b> ·&ensp;\\(<0\\) no intersection.</li>
<li>Points of intersection = the roots (then \\(y\\) from the line). A tangent’s contact point is the repeated root \\(x = -\\tfrac{B}{2A}\\).</li>
</ol></div>
<div class="widget" data-widget="circle-line"></div>
<p>The equivalent geometric test (great for checking): perpendicular distance from the centre to the line
vs the radius — less than \\(r\\) chord, equal tangent, greater miss. The widget shows both agree.</p>
<div class="example"><div class="e-title">Worked example — May/June 2025 P2 (show tangent + contact point)</div>
<p>Circle \\(x^2+y^2-10x-4y+24=0\\), line \\(y=2x-3\\): substituting gives \\(5x^2-30x+45=0\\), i.e.
\\(x^2-6x+9=(x-3)^2=0\\). Discriminant \\(=0\\) → tangent ✓, touching where \\(x=3\\): \\(P(3,3)\\).</p></div>
<div class="callout warn">In a “show that … is a tangent” question, compute the discriminant AND write the
conclusion (“= 0, so repeated root, so tangent”). The conclusion carries the A mark.</div>
<p class="minilinks">▶ Practise now: group <b>“Circle meets line”</b> — and the “show that” in w25-p13-q11(b).</p>`
    },

    /* ============================================================ */
    {
      title: "Tangents without calculus (8.3)",
      html: `
<div class="method"><div class="m-title">Tangent at a point A on the circle</div>
<ol>
<li>Gradient of the <b>radius</b> \\(CA\\) (centre to point).</li>
<li>Tangent gradient = negative reciprocal (tangent ⊥ radius — always).</li>
<li>Line through \\(A\\) with that gradient: \\(y - y_A = m(x - x_A)\\).</li>
</ol></div>
<div class="example"><div class="e-title">Worked example — May/June 2025 P1</div>
<p>Circle \\((x-4)^2+(y+3)^2=5\\), point \\(A(3,-1)\\). Radius gradient \\(\\frac{-1+3}{3-4} = -2\\) →
tangent gradient \\(\\frac12\\) → tangent \\(y+1=\\frac12(x-3)\\). Three marks, no calculus.</p></div>
<div class="callout"><b>Why no calculus?</b> The syllabus says tangents to circles are done by geometry.
Differentiating an implicit circle is slower and outside the syllabus — the perpendicular radius IS the method.</div>
<p>Tangent questions can also run backwards: given the tangent line family \\(y=2x+a\\), force the
discriminant to zero and solve for \\(a\\) (w25-p13-q11 — answers \\(-3\\pm2\\sqrt5\\)). And a circle “boxed in”
by four tangent lines \\(x=0, x=4, y=3, y=-1\\) has its centre midway between each opposite pair.</p>
<p class="minilinks">▶ Practise now: s25-p11-q3(c), w25-p13-q11 in <b>“Constructing circles”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Building circles from conditions (8.1 applied)",
      html: `
<p>Exams rarely hand you the circle — you assemble it. Each condition translates to centre/radius facts:</p>
<div class="method"><div class="m-title">Translation table</div>
<ol>
<li>“Passes through P with centre C” → \\(r^2 = CP^2\\) (keep it squared; never round).</li>
<li>“AB is a diameter” → centre = midpoint, \\(r\\) = half the distance.</li>
<li>“Through three points A, B, C” → <b>check the gradients first</b>: if two are perpendicular, the angle in a
semicircle theorem says the hypotenuse is a diameter (w25-p12-q7 — that is the whole trick). Otherwise
intersect two perpendicular bisectors of chords.</li>
<li>“Tangent to \\(x=k\\) / \\(y=k\\)” → the distance from the centre to that line equals \\(r\\).</li>
</ol></div>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2025 P1 (the diameter spot)</div>
<p>\\(A(-2,4), B(6,10), C(12,2)\\): \\(m_{AB}=\\tfrac34\\), \\(m_{BC}=-\\tfrac43\\) → product \\(-1\\) → right angle at B →
AC is a diameter → centre \\((5,3)\\), \\(r^2=50\\): \\((x-5)^2+(y-3)^2=50\\). Six marks, no simultaneous equations.</p></div>
<p class="minilinks">▶ Practise now: group <b>“Constructing circles from conditions”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Two circles (8.4)",
      html: `
<p>The newest — and least practised — corner of the topic. Almost every two-circle fact reduces to the
<b>line joining the centres</b> and the <b>common chord</b>:</p>
<div class="method"><div class="m-title">Two-circle toolkit</div>
<ol>
<li>The line of centres is <b>perpendicular</b> to the common chord and bisects it.</li>
<li>Half-chord \\(h\\), radius \\(r\\) → distance from a centre to the chord \\(=\\sqrt{r^2-h^2}\\) (right triangle!).</li>
<li>Circles touch ⟺ distance between centres \\(= r_1+r_2\\) (external) or \\(|r_1-r_2|\\) (internal); miss ⟺ further/closer than that.</li>
<li>Common chord equation: subtract one circle equation from the other (the \\(x^2, y^2\\) terms cancel).</li>
</ol></div>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2025 P2 (5 marks)</div>
<p>\\(x^2+y^2=25\\); second circle same radius, both centre coordinates positive; common chord AB has length 6,
parallel to \\(y=-x\\).</p>
<p>Distance O→chord \\(=\\sqrt{25-9}=4\\); equal radii → centres \\(8\\) apart along \\(y=x\\) (⊥ to AB) →
centre \\((4\\sqrt2, 4\\sqrt2)\\) → \\(x^2+y^2-8\\sqrt2x-8\\sqrt2y+39=0\\). Draw the diagram first — it is
pure right-triangle work.</p></div>
<p class="minilinks">▶ Practise now: group <b>“Two circles”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Exam checklist",
      html: `
<div class="method"><div class="m-title">Before you leave any Chapter 8 question</div>
<ol>
<li>Centre signs flipped correctly from the equation? Radius as a <b>simplified surd</b> (and \\(r^2\\), not \\(r\\), inside the equation)?</li>
<li>General form: centre \\((-g,-f)\\), \\(r^2=g^2+f^2-c\\) — halve before flipping.</li>
<li>“Show tangent” → discriminant \\(=0\\) shown AND stated conclusion.</li>
<li>Tangent line → perpendicular radius method, never calculus.</li>
<li>Building a circle → work with \\(r^2\\) throughout; final answer in the form the question demands (expand if it asks for \\(x^2+y^2+ax+by+c=0\\)).</li>
<li>Three points → try the perpendicular-gradients / diameter spot before heavy algebra.</li>
<li>Two circles → draw the centres-and-chord right triangle first.</li>
<li>Exact means exact: \\(2\\sqrt5\\), \\(4\\sqrt2\\), \\(-3\\pm2\\sqrt5\\) — no decimals.</li>
</ol></div>
<p class="minilinks">Now clear the <a href="#/ch/8">Practice list</a> — 6 real exam questions, 36 marks,
covering every outcome 8.1–8.4.</p>`
    }
  ]
});
