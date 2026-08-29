/* Chapter 6 — Logarithmic and exponential functions. Full lesson. */
window.A.registerLesson(6, {
  sections: [

    /* ============================================================ */
    {
      title: "Start here",
      html: `
<p class="lead">A logarithm is just an exponent wearing a different notation. Once you can translate
freely between \\(a^m = b\\) and \\(\\log_a b = m\\), the whole chapter is three laws, one
change-of-base rule, and two graph shapes.</p>
<div class="callout"><b>Where it appears:</b> log questions show up on almost every paper — typically one
"write as a single logarithm" [2–4] and one "solve the equation" [4–6], plus the occasional sketch.
That is 6–11 marks per paper from a small, learnable toolkit. This chapter also powers the exponential
equations you met in Chapter 4 (substitution) and the linearisation questions in Chapter 7.</div>
<div class="method"><div class="m-title">The skills (syllabus 6.1–6.3)</div>
<ol>
<li><b>6.1</b> Properties and graphs of \\(\\ln x\\), \\(\\mathrm{e}^x\\) and the families \\(y=k\\mathrm{e}^{nx}+a\\), \\(y=k\\ln(ax+b)\\) — with asymptotes</li>
<li><b>6.2</b> Laws of logarithms + change of base</li>
<li><b>6.3</b> Solve \\(a^x = b\\)</li>
</ol></div>`
    },

    /* ============================================================ */
    {
      title: "What a logarithm is",
      html: `
<p>\\(\\log_a b\\) asks one question: <b>“\\(a\\) to what power gives \\(b\\)?”</b></p>
<p>\\[ a^m = b \\iff \\log_a b = m \\]</p>
<p>Practise the translation until it is instant: \\(2^5=32 \\iff \\log_2 32 = 5\\); \\(10^{-2}=0.01 \\iff \\lg 0.01 = -2\\);
\\(\\mathrm{e}^0=1 \\iff \\ln 1 = 0\\).</p>
<div class="method"><div class="m-title">Values you must know cold</div>
<ol>
<li>\\(\\log_a 1 = 0\\) (because \\(a^0=1\\)) &ensp;·&ensp; \\(\\log_a a = 1\\) &ensp;·&ensp; \\(\\log_a a^n = n\\)</li>
<li>\\(\\lg\\) means \\(\\log_{10}\\); \\(\\ln\\) means \\(\\log_\\mathrm{e}\\) (\\(e \\approx 2.718\\))</li>
<li>\\(\\lg 10\\,000 = \\lg 10^4 = 4\\) — spot powers of the base instantly (asked verbatim in s26-p11!)</li>
<li>Logs only exist for <b>positive arguments</b>; a log base must be positive and \\(\\neq 1\\)</li>
</ol></div>
<div class="callout warn"><b>Existence:</b> \\(\\log_5(12x-4)\\) exists \\(\\iff 12x-4>0 \\iff x>\\tfrac13\\).
Exams ask this directly for 1 mark (s25-p11 Q8a) — and use it to kill invalid roots later. Check arguments
at the END of every log equation.</div>`
    },

    /* ============================================================ */
    {
      title: "The three laws + change of base",
      html: `
<div class="method"><div class="m-title">Laws of logarithms (same base throughout!)</div>
<ol>
<li><b>Add = multiply:</b> \\(\\log_a p + \\log_a q = \\log_a pq\\)</li>
<li><b>Subtract = divide:</b> \\(\\log_a p - \\log_a q = \\log_a \\dfrac{p}{q}\\)</li>
<li><b>Coefficient = power:</b> \\(n\\log_a p = \\log_a p^n\\)</li>
</ol></div>
<div class="method"><div class="m-title">Change of base — the two forms you actually use</div>
<ol>
<li>\\(\\log_b x = \\dfrac{\\log_a x}{\\log_a b}\\) — move everything to one friendly base</li>
<li><b>The reciprocal special case:</b> \\(\\log_b a = \\dfrac{1}{\\log_a b}\\) — swap base and argument, take the reciprocal</li>
</ol></div>
<p>The reciprocal form is an exam favourite: \\(\\log_x 10 = \\frac{1}{\\lg x}\\), \\(\\log_{(x+1)}5 = \\frac{1}{\\log_5(x+1)}\\),
\\(\\frac{1}{\\log_x e} = \\ln x\\). Whenever base and argument appear swapped in one equation, this is the move.</p>
<h3>“Write as a single logarithm”</h3>
<div class="method"><div class="m-title">Routine (2–4 marks, nearly every paper)</div>
<ol>
<li>Turn bare numbers into logs of the right base: \\(1 = \\lg 10\\), \\(3 = \\log_2 8\\), \\(-3 = -\\lg 1000\\), \\(\\tfrac12 = \\log_5\\sqrt5\\).</li>
<li>Turn coefficients into powers (law 3).</li>
<li>Combine left to right with laws 1–2 into one fraction.</li>
<li><b>Simplify</b>: factorise and cancel — “simplest form” is part of the answer.</li>
</ol></div>
<div class="example"><div class="e-title">Worked example — May/June 2024 P1 (4 marks)</div>
<p>\\(1+\\lg(x^2-1)-2\\lg(x-1) = \\lg10 + \\lg(x-1)(x+1) - \\lg(x-1)^2
= \\lg\\dfrac{10(x-1)(x+1)}{(x-1)^2} = \\lg\\dfrac{10(x+1)}{x-1}\\).</p>
<p>The factorising of \\(x^2-1\\) and the cancel is where the last mark lives.</p></div>
<p class="minilinks">▶ Practise now: group <b>“Log laws & single logarithms”</b> — 5 questions, 33 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Solving log equations",
      html: `
<div class="method"><div class="m-title">The master routine</div>
<ol>
<li><b>One base.</b> Change of base until every log has the same base (spot \\(16=2^4\\), \\(25=5^2\\), \\(125=5^3\\), \\(9=3^2\\)).</li>
<li><b>One log per side.</b> Use the three laws (numbers become logs too).</li>
<li><b>Drop the logs</b>: \\(\\log_a P = \\log_a Q \\Rightarrow P = Q\\) — or use the definition \\(\\log_a P = m \\Rightarrow P = a^m\\).</li>
<li><b>Solve</b> — very often a quadratic appears.</li>
<li><b>Check every root</b> in the ORIGINAL equation: all log arguments must be positive (and any log base positive, \\(\\neq1\\)). Reject failures <i>and say so</i>.</li>
</ol></div>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2025 P1 (5 marks) — with a rejection!</div>
<p>\\(\\log_5(5x-2) - \\log_{25}x = \\tfrac12\\). Since \\(\\log_{25}x = \\tfrac{\\log_5 x}{2}\\), double everything:</p>
<p>\\(2\\log_5(5x-2) - \\log_5 x = 1 \\Rightarrow \\log_5\\dfrac{(5x-2)^2}{x} = 1 \\Rightarrow (5x-2)^2 = 5x\\)</p>
<p>\\(25x^2 - 25x + 4 = 0 \\Rightarrow (5x-4)(5x-1)=0 \\Rightarrow x = \\tfrac45 \\text{ or } \\tfrac15\\).</p>
<p><b>Check:</b> \\(x=\\tfrac15\\) makes \\(5x-2 = -1 < 0\\) — log undefined. Reject. Answer: \\(x=\\tfrac45\\) <b>only</b>
(the “only” carries the A mark).</p></div>
<h3>The hidden quadratic in \\(\\log\\) itself</h3>
<p>When base and argument swap across the equation, the reciprocal rule creates \\(u = \\tfrac{k}{u}\\):</p>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2024 P1</div>
<p>\\(\\lg x = 4\\log_x 10 = \\dfrac{4}{\\lg x} \\Rightarrow (\\lg x)^2 = 4 \\Rightarrow \\lg x = \\pm 2 \\Rightarrow x = 100 \\text{ or } \\tfrac{1}{100}\\).</p>
<p>Both valid — and the ± is where half the marks go. Same pattern with surds: \\(4\\log_5(x+1)=9\\log_{(x+1)}5\\)
gives \\(\\log_5(x+1)=\\pm\\tfrac32\\), hence \\(x = -1+5\\sqrt5\\) or \\(x=-1+\\tfrac{1}{25}\\sqrt5\\) (s24-p11).</p></div>
<div class="callout warn"><b>Two rules of hygiene:</b> (1) \\(2\\log_5 2x = \\log_5(2x)^2 = \\log_5 4x^2\\) — square the whole argument.
(2) \\((\\lg x)^2\\) is NOT \\(\\lg x^2\\) — write the square around the whole log.</div>
<p class="minilinks">▶ Practise now: group <b>“Log & exponential equations”</b> — 4 questions, 30 marks.</p>`
    },

    /* ============================================================ */
    {
      title: "Exponential equations (6.3)",
      html: `
<p>To solve \\(a^x = b\\): take logs of both sides. \\(x = \\dfrac{\\lg b}{\\lg a}\\) (any base), or with base e:
\\(\\mathrm{e}^u = c \\Rightarrow u = \\ln c\\).</p>
<div class="method"><div class="m-title">Reading exponential equations</div>
<ol>
<li>Single exponential? Isolate it, then take logs: \\(5\\mathrm{e}^{2x}=40 \\Rightarrow \\mathrm{e}^{2x}=8 \\Rightarrow 2x=\\ln 8\\).</li>
<li>TWO exponentials whose exponents are negatives (\\(\\mathrm{e}^{3y-4}\\) and \\(\\mathrm{e}^{-(3y-4)}\\))? That is a
<b>hidden quadratic</b> — multiply through and substitute (the Chapter 4.3 skill).</li>
<li>An exponential can never be negative or zero — reject those roots, stating it.</li>
<li>“Exact form” answer → leave it in \\(\\ln\\): \\(x = \\tfrac{\\ln 5 - 1}{2}\\), never 0.3047…</li>
</ol></div>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2025 P1 (6 marks)</div>
<p>\\(\\mathrm{e}^{3y-7} + \\dfrac{4}{\\mathrm{e}^3} = \\dfrac{5}{\\mathrm{e}^{3y-1}}\\). Multiply by \\(\\mathrm{e}^{3y-1}\\):</p>
<p>\\(\\mathrm{e}^{6y-8} + 4\\mathrm{e}^{3y-4} - 5 = 0 \\Rightarrow (\\mathrm{e}^{3y-4}-1)(\\mathrm{e}^{3y-4}+5) = 0\\)</p>
<p>\\(\\mathrm{e}^{3y-4} = 1\\) (reject \\(-5\\)) \\(\\Rightarrow 3y-4 = \\ln 1 = 0 \\Rightarrow y = \\tfrac43\\).</p></div>
<p class="minilinks">▶ More of this species live in Chapter 4 → “Substitution → quadratic”
(10e^{2x−1}−11=6e^{1−2x} and friends). They are the same skill seen from the other side.</p>`
    },

    /* ============================================================ */
    {
      title: "Graphs: ln, e and their asymptotes (6.1)",
      html: `
<p>The syllabus limits sketches to two families — learn each as “shape + asymptote + two intercepts”.</p>
<div class="method"><div class="m-title">y = k ln(ax + b)</div>
<ol>
<li><b>Vertical asymptote</b> where the inside is 0: \\(x = -\\tfrac{b}{a}\\) (dashed line, labelled).</li>
<li><b>x-intercept</b> where the inside is 1: \\(ax+b = 1\\).</li>
<li><b>y-intercept</b> (if \\(x=0\\) is in the domain): \\(y = k\\ln b\\) — leave exact.</li>
<li>Increasing if \\(k>0\\), decreasing if \\(k<0\\); steep near the asymptote, flattening far away.</li>
</ol></div>
<div class="method"><div class="m-title">y = k e^{nx} + a</div>
<ol>
<li><b>Horizontal asymptote</b> \\(y = a\\) (the shift) — the curve never touches it.</li>
<li><b>y-intercept</b>: \\(y = k + a\\) (put \\(x=0\\)).</li>
<li><b>x-intercept</b> only if \\(k\\) and \\(a\\) have opposite signs: solve \\(k\\mathrm{e}^{nx} = -a\\).</li>
<li>\\(k\\) places the curve above/below the asymptote; \\(n\\) sets growth (\\(n>0\\)) or decay (\\(n<0\\)).</li>
</ol></div>
<div class="widget" data-widget="log-exp-graph"></div>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2025 P1 (4 marks)</div>
<p>Sketch \\(y = 5\\ln(4x+3)\\): asymptote \\(4x+3=0 \\Rightarrow x=-\\tfrac34\\); x-intercept \\(4x+3=1 \\Rightarrow x=-\\tfrac12\\);
y-intercept \\(5\\ln3\\). One mark each for shape, the two intercepts, and the stated asymptote.</p></div>
<p class="minilinks">▶ Practise now: group <b>“Graphs of ln and exp”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "e and ln undo each other",
      html: `
<p>\\(f(x) = \\mathrm{e}^x\\) and \\(g(x) = \\ln x\\) are inverse functions: \\(\\ln(\\mathrm{e}^t) = t\\) and
\\(\\mathrm{e}^{\\ln t} = t\\). Their graphs are reflections in \\(y = x\\).</p>
<div class="widget" data-widget="inverse-mirror"></div>
<p>This is why the domain/range swap: \\(\\mathrm{e}^x\\) has range \\(y>0\\), so \\(\\ln x\\) has domain \\(x>0\\).
And it is the whole engine of equation-solving: apply the inverse to both sides.</p>
<div class="example"><div class="e-title">Worked example — Oct/Nov 2025 P2 (functions crossover)</div>
<p>\\(f(x)=\\ln(2x+5)\\), \\(g(x)=x^2+1\\). Solve \\(fg(x)=4\\):</p>
<p>\\(\\ln(2x^2+7) = 4 \\Rightarrow 2x^2+7 = \\mathrm{e}^4 \\Rightarrow x = \\pm\\sqrt{\\dfrac{\\mathrm{e}^4-7}{2}}\\) (exact form, keep the ±).</p></div>
<p class="minilinks">▶ Practise now: group <b>“ln and e as inverse functions”</b>.</p>`
    },

    /* ============================================================ */
    {
      title: "Exam checklist",
      html: `
<div class="method"><div class="m-title">Before you leave any Chapter 6 question</div>
<ol>
<li>All logs in ONE base before combining? (\\(16=2^4, 25=5^2, 125=5^3\\))</li>
<li>Numbers converted to logs before combining (\\(1=\\log_a a\\), \\(3=\\log_2 8\\))?</li>
<li>Coefficients: \\(2\\log 2x = \\log(2x)^2 = \\log 4x^2\\) — whole argument squared?</li>
<li>Base–argument swap → reciprocal rule → expect \\((\\log x)^2 = k\\) and <b>±</b> both roots?</li>
<li>Every root CHECKED against positive-argument (and valid-base) conditions — rejections stated?</li>
<li>Exponentials: negative roots rejected with a reason; “exact form” kept in ln/e?</li>
<li>Sketches: shape + labelled intercepts + <b>stated asymptote equation</b>?</li>
<li>Pace: 1.5 min per mark — a [4] single-log deserves ≤ 6 minutes.</li>
</ol></div>
<p class="minilinks">Now clear the <a href="#/ch/6">Practice list</a> — 11 real exam questions, 72 marks.
First pass untimed for method; second pass timed on anything flagged “Redo later”.</p>`
    }
  ]
});
