/* Boot */
(function () {
  "use strict";
  const A = window.A;
  A.applyTheme();

  document.getElementById("btn-theme").addEventListener("click", function () {
    const t = A.cycleTheme();
    this.textContent = t === null ? "◐ Auto" : t === "light" ? "☀ Light" : "☾ Dark";
  });
  const t0 = A.theme;
  document.getElementById("btn-theme").textContent = t0 === null ? "◐ Auto" : t0 === "light" ? "☀ Light" : "☾ Dark";

  window.addEventListener("hashchange", () => A.views.render());
  A.views.render();
})();
