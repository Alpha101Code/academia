/* SVG function plotter for exam-style figures and interactive widgets.
   Spec: { x:[min,max], y:[min,max], xTicks, yTicks, grid,
           curves:[{poly:[a_n..a_0], abs, dashed, cls}],
           hlines:[y | {y, cls}], points:[[x,y,label]], shadeX:[[a,b]] }   */
window.A.plot = (function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  let uid = 0;

  function evalPoly(coeffs, x) {
    let y = 0;
    for (const c of coeffs) y = y * x + c;
    return y;
  }

  /* evaluate one curve spec at x; returns NaN outside its domain */
  function evalCurve(c, x) {
    let y;
    if (c.fn) {
      const f = c.fn;
      if (f.type === "log") {            // k·ln(ax+b) + (c0 || 0)
        const inside = f.a * x + f.b;
        if (inside <= 0) return NaN;
        y = f.k * Math.log(inside) + (f.c0 || 0);
      } else if (f.type === "exp") {     // k·e^(nx) + a
        y = f.k * Math.exp(f.n * x) + (f.a || 0);
      } else return NaN;
    } else {
      y = evalPoly(c.poly, x);
    }
    if (c.abs) y = Math.abs(y);
    return y;
  }

  function make(spec, opts) {
    opts = opts || {};
    const W = opts.width || 460, H = opts.height || 320;
    const pad = { l: 34, r: 14, t: 12, b: 26 };
    const [x0, x1] = spec.x, [y0, y1] = spec.y;
    const sx = x => pad.l + (x - x0) / (x1 - x0) * (W - pad.l - pad.r);
    const sy = y => H - pad.b - (y - y0) / (y1 - y0) * (H - pad.t - pad.b);
    const id = "plt" + (++uid);

    let s = `<svg class="plot" viewBox="0 0 ${W} ${H}" role="img">`;
    s += `<defs><clipPath id="${id}"><rect x="${pad.l}" y="${pad.t}" width="${W - pad.l - pad.r}" height="${H - pad.t - pad.b}"/></clipPath></defs>`;

    /* fine grid (exam-paper style) */
    if (spec.grid) {
      const gx = (spec.xTicks || 1) / 2, gy = (spec.yTicks || 1) / 2;
      s += `<g class="grid">`;
      for (let x = Math.ceil(x0 / gx) * gx; x <= x1 + 1e-9; x += gx)
        s += `<line x1="${sx(x)}" y1="${sy(y0)}" x2="${sx(x)}" y2="${sy(y1)}"/>`;
      for (let y = Math.ceil(y0 / gy) * gy; y <= y1 + 1e-9; y += gy)
        s += `<line x1="${sx(x0)}" y1="${sy(y)}" x2="${sx(x1)}" y2="${sy(y)}"/>`;
      s += `</g>`;
    }

    /* x-axis shading intervals (inequality answers) */
    if (spec.shadeX) {
      for (const seg of spec.shadeX) {
        const a = Math.max(x0, seg[0]), b = Math.min(x1, seg[1]);
        if (b > a) s += `<rect class="shade" x="${sx(a)}" y="${pad.t}" width="${sx(b) - sx(a)}" height="${H - pad.t - pad.b}"/>`;
      }
    }

    /* axes with ticks */
    const axY = (y0 <= 0 && y1 >= 0) ? sy(0) : sy(y0);
    const axX = (x0 <= 0 && x1 >= 0) ? sx(0) : sx(x0);
    s += `<g class="axis">`;
    s += `<line x1="${pad.l}" y1="${axY}" x2="${W - pad.r + 6}" y2="${axY}"/>`;
    s += `<path d="M${W - pad.r + 6},${axY} l-7,-3.4 v6.8 z" class="arrow"/>`;
    s += `<line x1="${axX}" y1="${H - pad.b}" x2="${axX}" y2="${pad.t - 6}"/>`;
    s += `<path d="M${axX},${pad.t - 6} l-3.4,7 h6.8 z" class="arrow"/>`;
    const xt = spec.xTicks, yt = spec.yTicks;
    if (xt) for (let x = Math.ceil(x0 / xt) * xt; x <= x1 + 1e-9; x += xt) {
      if (Math.abs(x) < 1e-9) continue;
      s += `<line x1="${sx(x)}" y1="${axY - 3}" x2="${sx(x)}" y2="${axY + 3}"/>`;
      if (!spec.noXLabels) s += `<text x="${sx(x)}" y="${axY + 14}" class="tick">${fmtN(x)}</text>`;
    }
    if (yt) for (let y = Math.ceil(y0 / yt) * yt; y <= y1 + 1e-9; y += yt) {
      if (Math.abs(y) < 1e-9) continue;
      s += `<line x1="${axX - 3}" y1="${sy(y)}" x2="${axX + 3}" y2="${sy(y)}"/>`;
      if (!spec.noYLabels) s += `<text x="${axX - 6}" y="${sy(y) + 3.5}" class="tick ty">${fmtN(y)}</text>`;
    }
    s += `<text x="${W - pad.r - 2}" y="${axY - 6}" class="axlab">x</text>`;
    s += `<text x="${axX + 8}" y="${pad.t + 4}" class="axlab">y</text>`;
    s += `</g>`;

    /* horizontal reference lines */
    for (const hl of (spec.hlines || [])) {
      const y = typeof hl === "object" ? hl.y : hl;
      const cls = typeof hl === "object" && hl.cls ? hl.cls : "hline";
      s += `<line class="${cls}" x1="${pad.l}" y1="${sy(y)}" x2="${W - pad.r}" y2="${sy(y)}" clip-path="url(#${id})"/>`;
    }

    /* vertical reference lines (asymptotes) */
    for (const vl of (spec.vlines || [])) {
      const x = typeof vl === "object" ? vl.x : vl;
      s += `<line class="hline" x1="${sx(x)}" y1="${pad.t}" x2="${sx(x)}" y2="${H - pad.b}"/>`;
      if (typeof vl === "object" && vl.label) {
        s += `<text class="ptlab" x="${sx(x) + 5}" y="${pad.t + 14}">${vl.label}</text>`;
      }
    }

    /* curves */
    (spec.curves || []).forEach((c, i) => {
      const n = 420;
      let d = "", pen = false;
      for (let k = 0; k <= n; k++) {
        const x = x0 + (x1 - x0) * k / n;
        const y = evalCurve(c, x);
        if (!isFinite(y)) { pen = false; continue; }   // domain break
        d += (pen ? "L" : "M") + sx(x).toFixed(2) + "," + sy(y).toFixed(2);
        pen = true;
      }
      const cls = "curve c" + (i % 4) + (c.dashed ? " dashed" : "") + (c.cls ? " " + c.cls : "");
      s += `<path class="${cls}" d="${d}" clip-path="url(#${id})"/>`;
    });

    /* labelled points */
    for (const p of (spec.points || [])) {
      const px = sx(p[0]), py = sy(p[1]);
      s += `<circle class="pt" cx="${px}" cy="${py}" r="3.4"/>`;
      if (p[2] != null) {
        const dy = p[1] >= 0 ? -8 : 14;
        s += `<text class="ptlab" x="${px + 5}" y="${py + dy}">${p[2]}</text>`;
      }
    }

    s += `</svg>`;
    return s;
  }

  function fmtN(v) {
    const r = Math.round(v * 100) / 100;
    return (Object.is(r, -0) ? 0 : r).toString().replace("-", "−");
  }

  return make;
})();
