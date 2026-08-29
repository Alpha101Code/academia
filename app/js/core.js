/* Academia core: data registry, progress store, router, helpers. */
window.A = (function () {
  "use strict";

  const data = { chapters: [], banks: {}, lessons: {} };

  /* ---------- data registration (called by data/lesson files) ---------- */
  function registerChapters(list) { data.chapters = list; }
  function registerBank(bank) { data.banks[bank.chapter] = bank; }
  function registerLesson(chapter, lesson) { data.lessons[chapter] = lesson; }

  /* ---------- progress store (localStorage) ---------- */
  const KEY = "academia.4037.v1";
  let store = { q: {}, theme: null };
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) store = Object.assign(store, JSON.parse(raw));
  } catch (e) { /* private mode etc. — keep in-memory */ }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
  }
  function getQ(id) { return store.q[id] || {}; }
  function setQ(id, patch) {
    store.q[id] = Object.assign({}, store.q[id], patch, { ts: Date.now() });
    if (store.q[id].state === null) delete store.q[id].state;
    save();
  }
  function exportProgress() {
    return JSON.stringify({ exported: new Date().toISOString(), key: KEY, data: store }, null, 2);
  }
  function importProgress(json) {
    const obj = JSON.parse(json);
    if (!obj || typeof obj !== "object" || !obj.data || typeof obj.data.q !== "object") {
      throw new Error("Not a valid progress file");
    }
    store = Object.assign({ q: {}, theme: null }, obj.data);
    save();
  }

  /* ---------- stats ---------- */
  function bankOf(ch) { return data.banks[ch] || null; }
  function chapterStats(ch) {
    const bank = bankOf(ch);
    if (!bank) return { available: false, total: 0, done: 0, marks: 0, marksDone: 0, minutes: 0, minutesLeft: 0 };
    let total = 0, done = 0, marks = 0, marksDone = 0, minutes = 0, minutesLeft = 0;
    for (const q of bank.questions) {
      total++; marks += q.marks; minutes += q.targetMinutes;
      if (getQ(q.id).state === "done") { done++; marksDone += q.marks; }
      else minutesLeft += q.targetMinutes;
    }
    return { available: true, total, done, marks, marksDone, minutes, minutesLeft };
  }
  function overallStats() {
    let total = 0, done = 0, marksDone = 0, minutesLeft = 0;
    for (const ch of Object.keys(data.banks)) {
      const s = chapterStats(Number(ch));
      total += s.total; done += s.done; marksDone += s.marksDone; minutesLeft += s.minutesLeft;
    }
    return { total, done, marksDone, minutesLeft };
  }

  /* ---------- router ---------- */
  function route() {
    const h = location.hash.replace(/^#\/?/, "");
    const parts = h.split("/").filter(Boolean);
    if (parts[0] === "ch" && parts[1]) {
      return { view: parts[2] === "learn" ? "learn" : "practice", ch: Number(parts[1]) };
    }
    return { view: "dashboard" };
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }
  function fmtClock(secs) {
    const m = Math.floor(secs / 60), s = secs % 60;
    return m + ":" + String(s).padStart(2, "0");
  }
  function typeset(root) {
    if (window.renderMathInElement) {
      renderMathInElement(root, {
        delimiters: [
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
          { left: "$$", right: "$$", display: true }
        ],
        throwOnError: false
      });
    }
  }

  /* ---------- theme ---------- */
  function applyTheme() {
    const t = store.theme; // null = follow system
    document.documentElement.dataset.theme = t || "";
  }
  function cycleTheme() {
    const seq = [null, "light", "dark"];
    store.theme = seq[(seq.indexOf(store.theme) + 1) % seq.length];
    save(); applyTheme();
    return store.theme;
  }

  return {
    data, registerChapters, registerBank, registerLesson,
    getQ, setQ, exportProgress, importProgress,
    bankOf, chapterStats, overallStats,
    route, esc, fmtClock, typeset,
    applyTheme, cycleTheme,
    get theme() { return store.theme; }
  };
})();
