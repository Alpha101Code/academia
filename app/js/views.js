/* View rendering: dashboard, chapter practice, learn. */
window.A.views = (function () {
  "use strict";
  const A = window.A;
  const PRIORITY = [4, 6, 8, 9, 11, 12, 13];   // weakest chapters first
  let timers = {};                              // qid -> {start, secs, iv}

  /* ---------------- shared bits ---------------- */
  function ring(pct, size, label) {
    const r = (size - 8) / 2, c = 2 * Math.PI * r;
    const off = c * (1 - Math.max(0, Math.min(1, pct)));
    return `<div class="ring"><svg width="${size}" height="${size}">
      <circle class="bgc" cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke-width="6"/>
      <circle class="fgc" cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke-width="6"
        stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}"
        transform="rotate(-90 ${size / 2} ${size / 2})"/>
      <text x="50%" y="54%" text-anchor="middle">${label}</text></svg></div>`;
  }

  function diffDots(d) { return "●".repeat(d) + "○".repeat(3 - d); }

  /* ---------------- dashboard ---------------- */
  function dashboard(root) {
    const o = A.overallStats();
    const hrs = Math.floor(o.minutesLeft / 60), mins = o.minutesLeft % 60;
    let html = `<div class="hero">
      <div class="stat"><div class="v">${o.done} / ${o.total}</div><div class="k">questions completed</div></div>
      <div class="stat"><div class="v">${o.marksDone}</div><div class="k">marks earned in practice</div></div>
      <div class="stat"><div class="v">${hrs ? hrs + "h " : ""}${mins}m</div><div class="k">timed practice remaining</div></div>
      <div class="stat"><div class="v">1.5 <span style="font-size:14px">min/mark</span></div><div class="k">exam pace target (80 marks / 2h)</div></div>
    </div>`;

    const chapters = A.data.chapters.slice();
    const prio = chapters.filter(c => PRIORITY.includes(c.n))
      .sort((a, b) => PRIORITY.indexOf(a.n) - PRIORITY.indexOf(b.n));
    const rest = chapters.filter(c => !PRIORITY.includes(c.n));

    html += `<div class="section-title">Priority — weakest topics first</div>`;
    html += `<div class="grid">` + prio.map(card).join("") + `</div>`;
    html += `<div class="section-title">Remaining chapters</div>`;
    html += `<div class="grid">` + rest.map(card).join("") + `</div>`;

    html += `<div class="footer-tools">
      <button class="btn" id="btn-export">Export progress</button>
      <button class="btn" id="btn-import">Import progress</button>
      <input type="file" id="file-import" accept="application/json" style="display:none">
      <span>Progress is saved in this browser (localStorage). Export before switching devices.</span>
    </div>`;
    root.innerHTML = html;

    root.querySelectorAll(".chapcard[data-ch]").forEach(el =>
      el.addEventListener("click", () => { location.hash = "#/ch/" + el.dataset.ch; }));
    root.querySelector("#btn-export").onclick = () => {
      const blob = new Blob([A.exportProgress()], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "academia-progress.json";
      a.click(); URL.revokeObjectURL(a.href);
    };
    const fi = root.querySelector("#file-import");
    root.querySelector("#btn-import").onclick = () => fi.click();
    fi.onchange = () => {
      const f = fi.files[0]; if (!f) return;
      f.text().then(t => { A.importProgress(t); render(); })
        .catch(e => alert("Import failed: " + e.message));
    };

    function card(c) {
      const s = A.chapterStats(c.n);
      const isPrio = PRIORITY.includes(c.n);
      if (!s.available) {
        return `<div class="card chapcard locked"><div class="info">
          <div class="num">Chapter ${c.n} ${isPrio ? '<span class="badge priority">priority</span>' : ""}</div>
          <h3>${A.esc(c.title)}</h3>
          <div class="meta"><span class="badge soon">content coming soon</span></div></div></div>`;
      }
      const pct = s.total ? s.done / s.total : 0;
      return `<div class="card chapcard" data-ch="${c.n}">
        ${ring(pct, 62, s.done + "/" + s.total)}
        <div class="info">
          <div class="num">Chapter ${c.n} ${isPrio ? '<span class="badge priority">priority</span>' : ""}</div>
          <h3>${A.esc(c.title)}</h3>
          <div class="meta">${s.total} questions · ${s.marks} marks · ~${s.minutes} min</div>
        </div></div>`;
    }
  }

  /* ---------------- chapter (practice) ---------------- */
  let activeFilter = "all";

  function chapterHead(c, view) {
    return `<div class="crumb"><a href="#/">← All chapters</a></div>
    <div class="chap-head">
      <h1>Chapter ${c.n} — ${A.esc(c.title)}</h1>
      <div class="lead">${A.esc(c.blurb || "")}</div>
      <div class="tabs">
        <button class="tab ${view === "practice" ? "active" : ""}" onclick="location.hash='#/ch/${c.n}'">Practice — past-paper questions</button>
        <button class="tab ${view === "learn" ? "active" : ""}" onclick="location.hash='#/ch/${c.n}/learn'">Learn — full lesson</button>
      </div>
    </div>`;
  }

  function practice(root, ch) {
    const c = A.data.chapters.find(x => x.n === ch);
    const bank = A.bankOf(ch);
    if (!c || !bank) { root.innerHTML = `<div class="empty">Chapter not available yet.</div>`; return; }
    const s = A.chapterStats(ch);

    let html = chapterHead(c, "practice");
    html += `<div class="hero">
      <div class="stat"><div class="v">${s.done}/${s.total}</div><div class="k">done</div></div>
      <div class="stat"><div class="v">${s.marksDone}/${s.marks}</div><div class="k">marks</div></div>
      <div class="stat"><div class="v">~${s.minutesLeft}m</div><div class="k">remaining at exam pace</div></div>
    </div>
    <div class="filters">
      ${["all", "todo", "done", "redo"].map(f =>
        `<button class="chip ${activeFilter === f ? "active" : ""}" data-f="${f}">
          ${{ all: "All", todo: "To do", done: "Done", redo: "Redo later" }[f]}</button>`).join("")}
      <span class="hint" style="align-self:center">P1 = non-calculator · P2 = calculator · target = 1.5 min/mark</span>
    </div>`;

    for (const g of bank.groups) {
      const qs = bank.questions.filter(q => q.group === g.key && matches(q));
      if (!qs.length) continue;
      html += `<div class="group-head"><h2>${A.esc(g.label)}</h2>
        <span class="oc">syllabus ${g.outcomes.join(", ")}</span></div>`;
      html += qs.map(qCard).join("");
    }
    if (!bank.questions.some(matches)) html += `<div class="empty">Nothing matches this filter.</div>`;

    root.innerHTML = html;
    A.typeset(root);
    wire(root, bank);

    function matches(q) {
      const st = A.getQ(q.id).state;
      if (activeFilter === "todo") return st !== "done";
      if (activeFilter === "done") return st === "done";
      if (activeFilter === "redo") return st === "redo";
      return true;
    }
  }

  function qCard(q) {
    const st = A.getQ(q.id);
    const stateBadge = st.state === "done" ? `<span class="pill done">✓ done</span>`
      : st.state === "redo" ? `<span class="pill redo">↻ redo</span>` : "";
    const lastT = st.secs ? `<span class="pill">last: ${A.fmtClock(st.secs)}</span>` : "";
    return `<div class="card q" data-q="${q.id}">
      <div class="q-head">
        <span class="q-id">${labelOf(q)}</span>
        <span class="q-src">${A.esc(q.source.session)} · Paper ${q.source.paper.split("/")[1]} · Q${q.source.question}</span>
        <span class="q-badges">
          ${stateBadge} ${lastT}
          <span class="pill ${q.calc ? "p2" : "p1"}">${q.calc ? "P2 · calc" : "P1 · no calc"}</span>
          <span class="pill marks">${q.marks} marks</span>
          <span class="pill">⏱ ${q.targetMinutes} min</span>
          <span class="diff" title="difficulty">${diffDots(q.difficulty)}</span>
        </span>
      </div>
      <div class="q-body" hidden>
        <div class="q-statement">${q.statement}</div>
        ${q.figure ? `<div class="q-figure">${A.plot(q.figure)}</div>` : ""}
        <div class="q-actions">
          <button class="btn primary t-toggle">▶ Start timer</button>
          <span class="timer" data-target="${q.targetMinutes * 60}">0:00</span>
          <span class="t-meta">target ${q.targetMinutes}:00 (${q.marks} marks × 1.5)</span>
          <span style="flex:1"></span>
          <button class="btn b-done ${st.state === "done" ? "done-on" : ""}">${st.state === "done" ? "✓ Done" : "Mark as done"}</button>
          <button class="btn b-redo ${st.state === "redo" ? "redo-on" : ""}">↻ Redo later</button>
        </div>
        <details class="fold tips"><summary>Tips — what you need to solve this</summary>
          <div class="fold-body"><ul class="tips">${q.tips.map(t => `<li>${t}</li>`).join("")}</ul></div>
        </details>
        <details class="fold sol"><summary>Worked solution</summary>
          <div class="fold-body">
            ${q.solution.map(sStep).join("")}
            <div class="answerline"><b>Answer:</b> ${q.answer}</div>
          </div>
        </details>
        <details class="fold ms"><summary>Mark scheme (${q.marks} marks)</summary>
          <div class="fold-body">
            <ul class="ms-list">${q.markScheme.map(m => `<li>${m}</li>`).join("")}</ul>
            ${q.msMissing ? `<div class="msnote">⚠ official mark scheme PDF not yet in the bank for this paper.</div>` : ""}
          </div>
        </details>
      </div>
    </div>`;
  }

  function sStep(step) {
    if (typeof step === "string") return `<div class="sol-step">${step}</div>`;
    if (step.figure) return `<div class="q-figure">${A.plot(step.figure)}</div>`;
    return "";
  }

  function labelOf(q) {
    const t = { "mod-eq": "Modulus equation", "mod-ineq": "Modulus inequality", "mod-quad-graph": "Modulus of a quadratic", "subst": "Substitution", "cubic": "Cubic graphs", "graph-read": "Graph reading" }[q.group] || "Question";
    return t;
  }

  function wire(root, bank) {
    root.querySelectorAll(".chip[data-f]").forEach(chip =>
      chip.addEventListener("click", () => { activeFilter = chip.dataset.f; render(); }));

    root.querySelectorAll(".q").forEach(card => {
      const qid = card.dataset.q;
      const body = card.querySelector(".q-body");
      card.querySelector(".q-head").addEventListener("click", () => {
        body.hidden = !body.hidden;
      });

      /* timer */
      const tEl = card.querySelector(".timer");
      const tBtn = card.querySelector(".t-toggle");
      const target = Number(tEl.dataset.target);
      tBtn.addEventListener("click", () => {
        const t = timers[qid];
        if (t && t.iv) {               // stop
          clearInterval(t.iv); t.iv = null;
          A.setQ(qid, { secs: t.secs });
          tBtn.textContent = "▶ Resume timer";
        } else {                        // start / resume
          const tt = timers[qid] = timers[qid] || { secs: 0 };
          tt.iv = setInterval(() => {
            tt.secs++;
            tEl.textContent = A.fmtClock(tt.secs);
            tEl.className = "timer " + (tt.secs <= target ? "ok" : tt.secs <= target * 1.5 ? "warn" : "over");
          }, 1000);
          tBtn.textContent = "⏸ Pause";
        }
      });

      /* done / redo */
      card.querySelector(".b-done").addEventListener("click", () => {
        const cur = A.getQ(qid).state;
        const t = timers[qid];
        if (t && t.iv) { clearInterval(t.iv); t.iv = null; A.setQ(qid, { secs: t.secs }); }
        A.setQ(qid, { state: cur === "done" ? null : "done" });
        render();
      });
      card.querySelector(".b-redo").addEventListener("click", () => {
        const cur = A.getQ(qid).state;
        A.setQ(qid, { state: cur === "redo" ? null : "redo" });
        render();
      });
    });
  }

  /* ---------------- learn ---------------- */
  function learn(root, ch) {
    const c = A.data.chapters.find(x => x.n === ch);
    const lesson = A.data.lessons[ch];
    if (!c || !lesson) { root.innerHTML = `<div class="empty">Lesson not available yet.</div>`; return; }
    let html = chapterHead(c, "learn");
    html += `<div class="toc">` + lesson.sections.map((s, i) =>
      `<a class="chip" href="#sec-${i}">${A.esc(s.title)}</a>`).join("") + `</div>`;
    html += `<div class="learn">` + lesson.sections.map((s, i) =>
      `<h2 id="sec-${i}">${A.esc(s.title)}</h2>` + s.html).join("") + `</div>`;
    root.innerHTML = html;
    A.typeset(root);
    if (window.A.widgets) window.A.widgets.mountAll(root);
  }

  /* ---------------- root render ---------------- */
  function stopAllTimers() {
    for (const k of Object.keys(timers)) {
      if (timers[k].iv) { clearInterval(timers[k].iv); timers[k].iv = null; A.setQ(k, { secs: timers[k].secs }); }
    }
  }

  function render() {
    stopAllTimers();
    const root = document.getElementById("view");
    const r = A.route();
    if (r.view === "dashboard") dashboard(root);
    else if (r.view === "practice") practice(root, r.ch);
    else if (r.view === "learn") learn(root, r.ch);
    window.scrollTo(0, 0);
  }

  return { render };
})();
