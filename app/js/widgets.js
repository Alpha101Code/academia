/* Interactive Learn widgets. Mounted into <div class="widget" data-widget="name"> */
window.A.widgets = (function () {
  "use strict";
  const A = window.A;

  /* ---------- small helpers ---------- */
  function el(html) { const d = document.createElement("div"); d.innerHTML = html; return d.firstElementChild; }
  function fmt(v) { const r = Math.round(v * 100) / 100; return (Object.is(r, -0) ? 0 : r).toString().replace("-", "−"); }
  function slider(name, min, max, step, val, label) {
    return `<label>${label} <span class="val" data-val="${name}">${fmt(val)}</span>
      <input type="range" data-k="${name}" min="${min}" max="${max}" step="${step}" value="${val}"></label>`;
  }
  function lin(a, b) { // "ax+b" pretty
    let s = "";
    if (a === 1) s = "x"; else if (a === -1) s = "−x"; else s = fmt(a) + "x";
    if (b > 0) s += " + " + fmt(b); else if (b < 0) s += " − " + fmt(-b);
    return s;
  }

  /* distinct sorted roots -> solution intervals of  g(x) REL 0  by midpoint sampling */
  function solveIneq(g, roots, rel) {
    const rs = roots.slice().sort((a, b) => a - b).filter((v, i, a) => !i || v - a[i - 1] > 1e-9);
    const strict = rel === ">" || rel === "<";
    const want = (rel === ">" || rel === ">=") ? 1 : -1;
    const pts = [-1e6, ...rs, 1e6];
    const segs = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const m = (Math.max(pts[i], -50) + Math.min(pts[i + 1], 50)) / 2;
      const v = g(m);
      if (Math.sign(v) === want) segs.push([pts[i], pts[i + 1]]);
    }
    /* merge across a root when not strict (root satisfies ⩾/⩽) */
    const merged = [];
    for (const s of segs) {
      const last = merged[merged.length - 1];
      if (last && !strict && Math.abs(last[1] - s[0]) < 1e-9) last[1] = s[1];
      else merged.push(s.slice());
    }
    /* to display text */
    const lo = x => x <= -1e5, hi = x => x >= 1e5;
    const [lt, gt, le, ge] = ["&lt;", "&gt;", "⩽", "⩾"];
    const sL = strict ? lt : le, sG = strict ? gt : ge;
    const parts = merged.map(sg => {
      if (lo(sg[0]) && hi(sg[1])) return "all real x" + (strict && rs.length ? " except the roots" : "");
      if (lo(sg[0])) return `x ${sL} ${fmt(sg[1])}`;
      if (hi(sg[1])) return `x ${sG} ${fmt(sg[0])}`;
      return `${fmt(sg[0])} ${sL} x ${sL} ${fmt(sg[1])}`;
    });
    return { segs: merged, text: parts.length ? parts.join("&ensp;or&ensp;") : "no solutions" };
  }

  /* =============== widget: y = |ax + b| =============== */
  function modLinear(host) {
    const st = { a: 2, b: -6 };
    host.innerHTML = `
      <div class="w-title">Explore: the graph of \\(y = |ax+b|\\)</div>
      <div class="w-sub">Drag the sliders. The dashed line is \\(y = ax+b\\) before folding; the solid V is after.</div>
      <div class="w-controls">${slider("a", -5, 5, 0.5, st.a, "a =")}${slider("b", -8, 8, 0.5, st.b, "b =")}</div>
      <div class="w-flex"><div class="plotbox" data-plot></div>
        <div class="sidebox"><div class="w-readout" data-read></div></div></div>`;
    wireSliders(host, st, draw);
    function draw() {
      if (st.a === 0) st.a = 0.5;
      const vx = -st.b / st.a;
      host.querySelector("[data-plot]").innerHTML = A.plot({
        x: [-8, 8], y: [-8, 10], xTicks: 2, yTicks: 2,
        curves: [{ poly: [st.a, st.b], dashed: true }, { poly: [st.a, st.b], abs: true }],
        points: [[vx, 0, "vertex"], [0, Math.abs(st.b), fmt(Math.abs(st.b))]]
      }, { height: 300 });
      host.querySelector("[data-read]").innerHTML =
        `<b>y = |${lin(st.a, st.b)}|</b><br>
         Vertex where ${lin(st.a, st.b)} = 0: <b>x = ${fmt(vx)}</b><br>
         y-intercept: |${fmt(st.b)}| = <b>${fmt(Math.abs(st.b))}</b><br>
         <span class="hint">The fold reflects everything below the x-axis upward — nothing is ever negative.</span>`;
    }
    draw();
  }

  /* =============== widget: solve |ax+b| = cx+d =============== */
  function modEq(host) {
    const st = { a: 4, b: -6, c: 2, d: 0 };
    host.innerHTML = `
      <div class="w-title">Explore: solving \\(|ax+b| = cx+d\\)</div>
      <div class="w-sub">Solutions are the intersections of the V-graph with the straight line. Watch solutions appear and disappear as you move the line.</div>
      <div class="w-controls">
        ${slider("a", -5, 5, 0.5, st.a, "a =")}${slider("b", -8, 8, 0.5, st.b, "b =")}
        ${slider("c", -5, 5, 0.5, st.c, "c =")}${slider("d", -8, 8, 0.5, st.d, "d =")}
      </div>
      <div class="w-flex"><div class="plotbox" data-plot></div>
        <div class="sidebox"><div class="w-readout" data-read></div></div></div>`;
    wireSliders(host, st, draw);
    function draw() {
      if (st.a === 0) st.a = 0.5;
      const sols = [];
      const lines = [];
      if (Math.abs(st.a - st.c) > 1e-9) {
        const x1 = (st.d - st.b) / (st.a - st.c);
        lines.push(`Case 1: ${lin(st.a, st.b)} = ${lin(st.c, st.d)} → x = ${fmt(x1)}`);
        if (Math.abs(Math.abs(st.a * x1 + st.b) - (st.c * x1 + st.d)) < 1e-6) sols.push(x1);
        else lines[lines.length - 1] += " ✗ (line is below the V here — reject)";
      }
      if (Math.abs(st.a + st.c) > 1e-9) {
        const x2 = (-st.d - st.b) / (st.a + st.c);
        lines.push(`Case 2: ${lin(st.a, st.b)} = −(${lin(st.c, st.d)}) → x = ${fmt(x2)}`);
        if (Math.abs(Math.abs(st.a * x2 + st.b) - (st.c * x2 + st.d)) < 1e-6) sols.push(x2);
        else lines[lines.length - 1] += " ✗ (reject)";
      }
      host.querySelector("[data-plot]").innerHTML = A.plot({
        x: [-8, 8], y: [-6, 12], xTicks: 2, yTicks: 2,
        curves: [{ poly: [st.a, st.b], abs: true }, { poly: [st.c, st.d], cls: "c1" }],
        points: sols.map(x => [x, st.c * x + st.d, "x=" + fmt(x)])
      }, { height: 300 });
      host.querySelector("[data-read]").innerHTML =
        `<b>|${lin(st.a, st.b)}| = ${lin(st.c, st.d)}</b><br>${lines.join("<br>")}<br>
        <b>${sols.length} valid solution${sols.length === 1 ? "" : "s"}</b>
        <div class="hint" style="margin-top:6px">A “solution” of a case only counts if the right-hand side is ⩾ 0 there —
        always check candidates in the original equation.</div>`;
    }
    draw();
  }

  /* =============== widget: |quadratic| = d  =============== */
  function modQuad(host) {
    const st = { b: -1, c: -6, d: 4 };
    host.innerHTML = `
      <div class="w-title">Explore: how many solutions does \\(|x^2+bx+c| = d\\) have?</div>
      <div class="w-sub">The fold creates a hump; the horizontal line \\(y=d\\) can cross the graph 0–4 times. This is exactly the reasoning exams ask for.</div>
      <div class="w-controls">
        ${slider("b", -6, 6, 1, st.b, "b =")}${slider("c", -9, 9, 1, st.c, "c =")}${slider("d", 0, 16, 0.5, st.d, "d =")}
      </div>
      <div class="w-flex"><div class="plotbox" data-plot></div>
        <div class="sidebox"><div class="w-readout" data-read></div></div></div>`;
    wireSliders(host, st, draw);
    function draw() {
      const roots = new Set();
      for (const dd of [st.d, -st.d]) {
        const disc = st.b * st.b - 4 * (st.c - dd);
        if (disc >= 0) {
          roots.add(+((-st.b + Math.sqrt(disc)) / 2).toFixed(6));
          roots.add(+((-st.b - Math.sqrt(disc)) / 2).toFixed(6));
        }
      }
      const sols = [...roots].filter(x => Math.abs(Math.abs(x * x + st.b * x + st.c) - st.d) < 1e-4);
      const minVal = st.c - st.b * st.b / 4;
      const hump = minVal < 0 ? -minVal : 0;
      host.querySelector("[data-plot]").innerHTML = A.plot({
        x: [-9, 9], y: [-2, 18], xTicks: 2, yTicks: 2,
        curves: [{ poly: [1, st.b, st.c], dashed: true }, { poly: [1, st.b, st.c], abs: true }],
        hlines: [st.d],
        points: sols.map(x => [x, st.d, ""])
      }, { height: 300 });
      let note;
      if (hump > 0) {
        note = `Folded hump height: <b>${fmt(hump)}</b> (=|min of the parabola|).<br>
          d &gt; ${fmt(hump)} → 2 solutions · d = ${fmt(hump)} → 3 · 0 &lt; d &lt; ${fmt(hump)} → 4 · d = 0 → 2`;
      } else {
        note = `This parabola never goes below the axis (min = ${fmt(minVal)}), so no fold:
          d &lt; ${fmt(minVal)} → 0 solutions, then 1 (tangent), then 2.`;
      }
      host.querySelector("[data-read]").innerHTML =
        `<b>|x² ${st.b < 0 ? "− " + fmt(-st.b) : "+ " + fmt(st.b)}x ${st.c < 0 ? "− " + fmt(-st.c) : "+ " + fmt(st.c)}| = ${fmt(st.d)}</b><br>
         Number of solutions now: <b>${sols.length}</b><br>${note}`;
    }
    draw();
  }

  /* =============== widget: cubic sketcher + inequality =============== */
  function cubicW(host) {
    const st = { p: -2, q: 0.5, r: -5, k: -0.5, abs: 0, rel: "none" };
    host.innerHTML = `
      <div class="w-title">Explore: \\(y = k(x-p)(x-q)(x-r)\\) — sketching and inequalities</div>
      <div class="w-sub">Move the roots and the stretch factor. Toggle the modulus fold, then pick an inequality to see its solution set shaded on the x-axis.</div>
      <div class="w-controls">
        ${slider("p", -6, 6, 0.5, st.p, "root p =")}
        ${slider("q", -6, 6, 0.5, st.q, "root q =")}
        ${slider("r", -6, 6, 0.5, st.r, "root r =")}
        ${slider("k", -2, 2, 0.25, st.k, "k =")}
        <label>modulus |y| <input type="checkbox" data-k="abs"></label>
        <label>inequality
          <select data-k="rel">
            <option value="none">— none —</option>
            <option value=">">y &gt; 0</option><option value=">=">y ⩾ 0</option>
            <option value="<">y &lt; 0</option><option value="<=">y ⩽ 0</option>
          </select></label>
      </div>
      <div class="w-flex"><div class="plotbox" data-plot></div>
        <div class="sidebox"><div class="w-readout" data-read></div></div></div>`;
    wireSliders(host, st, draw);
    function draw() {
      if (st.k === 0) st.k = 0.25;
      const { p, q, r, k } = st;
      /* expand k(x-p)(x-q)(x-r) */
      const s1 = p + q + r, s2 = p * q + p * r + q * r, s3 = p * q * r;
      const poly = [k, -k * s1, k * s2, -k * s3];
      const yint = -k * s3;
      const g = x => {
        let v = k * (x - p) * (x - q) * (x - r);
        return st.abs ? Math.abs(v) : v;
      };
      let shade = null, readIneq = "";
      if (st.rel !== "none") {
        const sol = solveIneq(g, [p, q, r], st.rel);
        shade = sol.segs;
        const relTxt = { ">": "&gt; 0", ">=": "⩾ 0", "<": "&lt; 0", "<=": "⩽ 0" }[st.rel];
        readIneq = `<br>Solve ${st.abs ? "|y|" : "y"} ${relTxt}: <b>${sol.text}</b>`;
      }
      host.querySelector("[data-plot]").innerHTML = A.plot({
        x: [-7, 7], y: [-14, 14], xTicks: 1, yTicks: 4,
        curves: [{ poly, abs: !!st.abs }],
        shadeX: shade || undefined,
        points: [[p, 0, ""], [q, 0, ""], [r, 0, ""], [0, st.abs ? Math.abs(yint) : yint, fmt(st.abs ? Math.abs(yint) : yint)]]
      }, { height: 320 });
      const dir = (st.abs) ? "both ends rise (modulus)" : (k > 0 ? "rises to the right (positive cubic)" : "falls to the right (negative cubic)");
      host.querySelector("[data-read]").innerHTML =
        `<b>y = ${fmt(k)}(x ${p < 0 ? "+ " + fmt(-p) : "− " + fmt(p)})(x ${q < 0 ? "+ " + fmt(-q) : "− " + fmt(q)})(x ${r < 0 ? "+ " + fmt(-r) : "− " + fmt(r)})</b><br>
         Roots: ${[p, q, r].slice().sort((a, b) => a - b).map(fmt).join(", ")} · y-intercept: ${fmt(st.abs ? Math.abs(yint) : yint)}<br>
         Shape: ${dir}${readIneq}
         <div class="hint" style="margin-top:6px">Sketch routine: roots from the factors → y-intercept from x=0 → end behaviour from the sign of k.</div>`;
    }
    draw();
  }

  /* =============== widget: graphs of k·e^(nx)+a and k·ln(ax+b) =============== */
  function logExpGraph(host) {
    const st = { fam: "log", k: 5, a: 4, b: 3, n: 1, c: -2 };
    host.innerHTML = `
      <div class="w-title">Explore: the exam graphs \\(y = k\\ln(ax+b)\\) and \\(y = k\\mathrm{e}^{nx}+a\\)</div>
      <div class="w-sub">These are exactly the two families the syllabus names (6.1). Watch the asymptote and both intercepts update — those three facts are the marks.</div>
      <div class="w-controls">
        <label>family
          <select data-k="fam">
            <option value="log">y = k ln(ax+b)</option>
            <option value="exp">y = k e^(nx) + a</option>
          </select></label>
        ${slider("k", -5, 5, 1, st.k, "k =")}
        <span data-show="log">${slider("a", 1, 6, 1, st.a, "a =")}${slider("b", -6, 6, 1, st.b, "b =")}</span>
        <span data-show="exp" hidden>${slider("n", -3, 3, 0.5, st.n, "n =")}${slider("c", -6, 6, 1, st.c, "shift a =")}</span>
      </div>
      <div class="w-flex"><div class="plotbox" data-plot></div>
        <div class="sidebox"><div class="w-readout" data-read></div></div></div>`;
    wireSliders(host, st, draw);
    function draw() {
      if (st.k === 0) st.k = 1;
      host.querySelectorAll("[data-show]").forEach(el => { el.hidden = el.dataset.show !== st.fam; });
      let curves, vlines = [], hlines = [], pts = [], read;
      if (st.fam === "log") {
        if (st.a === 0) st.a = 1;
        const asym = -st.b / st.a;
        const xi = (1 - st.b) / st.a;                 // ln(inside)=0
        curves = [{ fn: { type: "log", k: st.k, a: st.a, b: st.b } }];
        vlines = [{ x: asym, label: "x = " + fmt(asym) }];
        pts = [[xi, 0, "(" + fmt(xi) + ", 0)"]];
        let yi = null;
        if (st.b > 0) { yi = st.k * Math.log(st.b); pts.push([0, yi, "(0, " + fmt(yi) + ")"]); }
        read = `<b>y = ${fmt(st.k)} ln(${fmt(st.a)}x ${st.b < 0 ? "− " + fmt(-st.b) : "+ " + fmt(st.b)})</b><br>
          Vertical asymptote: <b>x = ${fmt(asym)}</b> (inside = 0)<br>
          x-intercept: inside = 1 → <b>x = ${fmt(xi)}</b><br>
          y-intercept: ${st.b > 0 ? "<b>y = " + fmt(st.k) + " ln " + fmt(st.b) + " ≈ " + fmt(st.k * Math.log(st.b)) + "</b>" : "none (x = 0 is outside the domain)"}<br>
          <span class="hint">${st.k > 0 ? "k > 0: increasing" : "k < 0: decreasing"} · domain: inside > 0</span>`;
      } else {
        const asym = st.c;
        curves = [{ fn: { type: "exp", k: st.k, n: st.n || 0.5, a: st.c } }];
        hlines = [asym];
        const yi = st.k + st.c;
        pts = [[0, yi, "(0, " + fmt(yi) + ")"]];
        let xi = null;
        if (st.k !== 0 && -st.c / st.k > 0) {
          xi = Math.log(-st.c / st.k) / (st.n || 0.5);
          pts.push([xi, 0, "(" + fmt(xi) + ", 0)"]);
        }
        read = `<b>y = ${fmt(st.k)} e<sup>${fmt(st.n)}x</sup> ${st.c < 0 ? "− " + fmt(-st.c) : "+ " + fmt(st.c)}</b><br>
          Horizontal asymptote: <b>y = ${fmt(st.c)}</b> (the shift)<br>
          y-intercept: k + a = <b>${fmt(yi)}</b><br>
          x-intercept: ${xi === null ? "none (curve never reaches 0)" : "<b>x = " + fmt(xi) + "</b>"}<br>
          <span class="hint">sign of k → above/below the asymptote · sign of n → growth/decay</span>`;
      }
      host.querySelector("[data-plot]").innerHTML = A.plot({
        x: [-6, 6], y: [-10, 12], xTicks: 1, yTicks: 2,
        curves, vlines, hlines, points: pts
      }, { height: 300 });
      host.querySelector("[data-read]").innerHTML = read;
    }
    draw();
  }

  /* =============== widget: e^x and ln x are mirror images =============== */
  function inverseMirror(host) {
    const st = { t: 1 };
    host.innerHTML = `
      <div class="w-title">Explore: \\(\\mathrm{e}^x\\) and \\(\\ln x\\) are inverses</div>
      <div class="w-sub">Each is the reflection of the other in the line \\(y = x\\). Slide the point along \\(y=\\mathrm{e}^x\\) and watch its mirror image on \\(y=\\ln x\\): the coordinates swap.</div>
      <div class="w-controls">${slider("t", -2, 2, 0.1, st.t, "point at x =")}</div>
      <div class="w-flex"><div class="plotbox" data-plot></div>
        <div class="sidebox"><div class="w-readout" data-read></div></div></div>`;
    wireSliders(host, st, draw);
    function draw() {
      const t = st.t, ex = Math.exp(t);
      host.querySelector("[data-plot]").innerHTML = A.plot({
        x: [-4, 8], y: [-4, 8], xTicks: 2, yTicks: 2,
        curves: [
          { fn: { type: "exp", k: 1, n: 1, a: 0 } },
          { fn: { type: "log", k: 1, a: 1, b: 0 }, cls: "c2" },
          { poly: [1, 0], dashed: true }
        ],
        points: [[t, ex, "(" + fmt(t) + ", " + fmt(ex) + ")"], [ex, t, "(" + fmt(ex) + ", " + fmt(t) + ")"]]
      }, { height: 320 });
      host.querySelector("[data-read]").innerHTML =
        `On \\(y=e^x\\): (${fmt(t)}, ${fmt(ex)}).&ensp;Mirrored on \\(y=\\ln x\\): (${fmt(ex)}, ${fmt(t)}).<br>
         <b>ln undoes e</b>: \\(\\ln(e^{${fmt(t)}}) = ${fmt(t)}\\) — that is why solving \\(e^{u}=c\\) means \\(u=\\ln c\\),
         and solving \\(\\ln u = c\\) means \\(u = e^{c}\\).<br>
         <span class="hint">Domains mirror too: e^x outputs only positives ⇒ ln x accepts only positives.</span>`;
      A.typeset(host.querySelector("[data-read]"));
    }
    draw();
  }

  /* ---------- plumbing ---------- */
  function wireSliders(host, st, draw) {
    host.querySelectorAll("input[type=range]").forEach(inp => {
      inp.addEventListener("input", () => {
        st[inp.dataset.k] = Number(inp.value);
        const v = host.querySelector(`[data-val="${inp.dataset.k}"]`);
        if (v) v.textContent = String(inp.value).replace("-", "−");
        draw();
      });
    });
    host.querySelectorAll("input[type=checkbox][data-k]").forEach(inp =>
      inp.addEventListener("change", () => { st[inp.dataset.k] = inp.checked ? 1 : 0; draw(); }));
    host.querySelectorAll("select[data-k]").forEach(sel =>
      sel.addEventListener("change", () => { st[sel.dataset.k] = sel.value; draw(); }));
  }

  const REG = { "mod-linear": modLinear, "mod-eq": modEq, "mod-quad": modQuad, "cubic": cubicW,
    "log-exp-graph": logExpGraph, "inverse-mirror": inverseMirror };

  function mountAll(root) {
    root.querySelectorAll(".widget[data-widget]").forEach(host => {
      const fn = REG[host.dataset.widget];
      if (fn) { fn(host); A.typeset(host); }
    });
  }

  return { mountAll };
})();
