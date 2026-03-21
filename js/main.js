(function () {
  const STORAGE_KEY = "portfolio-theme";
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const portraitImg = document.querySelector(".portrait__img");
  const yearEl = document.getElementById("year");

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function setStoredTheme(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
  }

  function systemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function resolvedTheme() {
    const stored = getStoredTheme();
    return stored === "light" || stored === "dark" ? stored : systemTheme();
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
  }

  applyTheme(resolvedTheme());

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!getStoredTheme()) {
      applyTheme(systemTheme());
    }
  });

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      setStoredTheme(next);
      applyTheme(next);
    });
  }

  const portraitRoot = document.getElementById("portrait-root");
  if (portraitImg && portraitRoot) {
    portraitImg.addEventListener("error", () => {
      portraitRoot.classList.add("portrait--error");
    });
  }

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
