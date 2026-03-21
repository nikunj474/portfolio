(function () {
  const cfg = window.PORTFOLIO;
  const STORAGE_KEY = "portfolio-theme";
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function aboutParagraphHtml(p) {
    if (typeof p === "string") return `<p>${esc(p)}</p>`;
    if (p && typeof p.html === "string") return `<p>${p.html}</p>`;
    return "";
  }

  function actionHtml(a) {
    const label = esc(a.label);
    if (a.kind === "anchor") {
      return `<a class="btn btn--ghost" href="${esc(a.href)}">${label}</a>`;
    }
    if (a.kind === "download") {
      const fn = a.filename ? esc(a.filename) : "";
      return `<a class="btn btn--ghost" href="${esc(a.href)}" download="${fn}">${label}</a>`;
    }
    if (a.kind === "external") {
      return `<a class="btn btn--ghost" href="${esc(a.href)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    }
    return "";
  }

  function primaryActionHtml(a) {
    const label = esc(a.label);
    if (a.kind === "anchor") {
      return `<a class="btn btn--primary" href="${esc(a.href)}">${label}</a>`;
    }
    if (a.kind === "download") {
      const fn = a.filename ? esc(a.filename) : "";
      return `<a class="btn btn--primary" href="${esc(a.href)}" download="${fn}">${label}</a>`;
    }
    if (a.kind === "external") {
      return `<a class="btn btn--primary" href="${esc(a.href)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    }
    return "";
  }

  function renderMeta() {
    if (!cfg.meta) return;
    document.title = cfg.meta.title;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", cfg.meta.description);
  }

  function renderNav() {
    const ul = document.getElementById("nav-list");
    if (!ul) return;
    const items = [];
    if (cfg.aboutParagraphs && cfg.aboutParagraphs.length) items.push({ href: "#about", label: "About" });
    if (cfg.experience && cfg.experience.length) items.push({ href: "#experience", label: "Experience" });
    if (cfg.publications && cfg.publications.length) items.push({ href: "#publications", label: "Publications" });
    if (cfg.projects && cfg.projects.length) items.push({ href: "#projects", label: "Projects" });
    if (cfg.education && cfg.education.length) items.push({ href: "#education", label: "Education" });
    if (cfg.skills && Object.keys(cfg.skills).length) items.push({ href: "#skills", label: "Skills" });
    if (cfg.contact) items.push({ href: "#contact", label: "Contact" });
    ul.innerHTML = items
      .map((it) => `<li><a href="${esc(it.href)}">${esc(it.label)}</a></li>`)
      .join("");
  }

  function renderBrand() {
    const logo = document.getElementById("site-logo");
    if (logo && cfg.brand) logo.textContent = cfg.brand.initials || "";
  }

  function renderMain() {
    const main = document.getElementById("main");
    if (!main || !cfg.hero) return;

    const h = cfg.hero;
    const portrait = h.portrait || {};
    const primary = h.actions && h.actions.length ? h.actions[0] : null;
    const restActions = h.actions && h.actions.length > 1 ? h.actions.slice(1) : [];

    const aboutSection =
      cfg.aboutParagraphs && cfg.aboutParagraphs.length
        ? `<section class="section" id="about" aria-labelledby="about-heading">
        <div class="section__inner">
          <h2 id="about-heading" class="section__title">About</h2>
          <div class="prose">${cfg.aboutParagraphs.map(aboutParagraphHtml).join("")}</div>
        </div>
      </section>`
        : "";

    const experienceSection =
      cfg.experience && cfg.experience.length
        ? `<section class="section section--alt" id="experience" aria-labelledby="exp-heading">
        <div class="section__inner">
          <h2 id="exp-heading" class="section__title">Experience</h2>
          <ol class="timeline">
            ${cfg.experience
              .map(
                (job) => `<li class="timeline__item">
              <div class="timeline__meta">
                <h3 class="timeline__title">${esc(job.title)}</h3>
                <p class="timeline__place">${esc(job.place)}</p>
                <p class="timeline__date">${esc(job.date)}</p>
              </div>
              <ul class="timeline__bullets">
                ${(job.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("")}
              </ul>
            </li>`
              )
              .join("")}
          </ol>
        </div>
      </section>`
        : "";

    const publicationsSection =
      cfg.publications && cfg.publications.length
        ? `<section class="section" id="publications" aria-labelledby="pub-heading">
        <div class="section__inner">
          <h2 id="pub-heading" class="section__title">Publications</h2>
          ${cfg.publications
            .map((pub) => {
              const links = (pub.links || [])
                .map(
                  (l) =>
                    `<a class="text-link" href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a>`
                )
                .join("");
              return `<article class="card card--link">
            <h3 class="card__title">${esc(pub.title)}</h3>
            <p class="card__meta">${esc(pub.meta)}</p>
            <p class="card__text">${esc(pub.text)}</p>
            ${links ? `<p class="card__links">${links}</p>` : ""}
          </article>`;
            })
            .join("")}
        </div>
      </section>`
        : "";

    const projectsSection =
      cfg.projects && cfg.projects.length
        ? `<section class="section section--alt" id="projects" aria-labelledby="proj-heading">
        <div class="section__inner">
          <h2 id="proj-heading" class="section__title">Projects</h2>
          <div class="cards">
            ${cfg.projects
              .map((proj) => {
                const linkBlock =
                  proj.links && proj.links.length
                    ? `<p class="card__links">${proj.links
                        .map(
                          (l) =>
                            `<a class="text-link" href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a>`
                        )
                        .join("")}</p>`
                    : "";
                return `<article class="card">
              <h3 class="card__title">${esc(proj.title)}</h3>
              <p class="card__meta">${esc(proj.meta)}</p>
              <p class="card__text">${esc(proj.text)}</p>
              ${linkBlock}
            </article>`;
              })
              .join("")}
          </div>
        </div>
      </section>`
        : "";

    const educationSection =
      cfg.education && cfg.education.length
        ? `<section class="section" id="education" aria-labelledby="edu-heading">
        <div class="section__inner">
          <h2 id="edu-heading" class="section__title">Education</h2>
          <div class="cards cards--two">
            ${cfg.education
              .map((ed) => {
                const lines = (ed.lines || []).map((line) => `<p class="card__text">${line}</p>`).join("");
                const foot = ed.footnote
                  ? `<p class="card__text card__text--small">${esc(ed.footnote)}</p>`
                  : "";
                return `<article class="card">
              <h3 class="card__title">${esc(ed.title)}</h3>
              <p class="card__meta">${esc(ed.meta)}</p>
              ${lines}
              ${foot}
            </article>`;
              })
              .join("")}
          </div>
        </div>
      </section>`
        : "";

    const skillsSection =
      cfg.skills && Object.keys(cfg.skills).length
        ? `<section class="section section--alt" id="skills" aria-labelledby="skills-heading">
        <div class="section__inner">
          <h2 id="skills-heading" class="section__title">Technical skills</h2>
          <div class="skill-groups">
            ${Object.entries(cfg.skills)
              .map(
                ([label, tags]) => `<div class="skill-group">
              <h3 class="skill-group__label">${esc(label)}</h3>
              <ul class="tags">${(tags || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
            </div>`
              )
              .join("")}
          </div>
        </div>
      </section>`
        : "";

    const contactSection = cfg.contact
      ? `<section class="section" id="contact" aria-labelledby="contact-heading">
        <div class="section__inner section__inner--narrow">
          <h2 id="contact-heading" class="section__title">Contact</h2>
          <p class="contact__lead">${esc(cfg.contact.lead || "")}</p>
          ${
            cfg.contact.address
              ? `<address class="contact__address">${esc(cfg.contact.address)}</address>`
              : ""
          }
          <ul class="contact__links">
            ${(cfg.contact.links || [])
              .map((l) => `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`)
              .join("")}
          </ul>
        </div>
      </section>`
      : "";

    const primaryBtn = primary ? primaryActionHtml(primary) : "";

    main.innerHTML = `<section class="hero" aria-labelledby="hero-heading">
        <div class="hero__grid">
          <div class="hero__text">
            <p class="eyebrow">${esc(h.eyebrow)}</p>
            <h1 id="hero-heading">${esc(h.heading)}</h1>
            <p class="hero__lead">${esc(h.lead)}</p>
            <div class="hero__actions">
              ${primaryBtn}
              ${restActions.map(actionHtml).join("")}
            </div>
          </div>
          <div class="hero__portrait">
            <figure class="portrait" id="portrait-root">
              <img
                class="portrait__img"
                src="${esc(portrait.src || "")}"
                alt="${esc(portrait.alt || "")}"
                width="320"
                height="320"
                loading="eager"
                decoding="async"
              />
              <figcaption class="visually-hidden">${esc(portrait.alt || "")}</figcaption>
              <div class="portrait__fallback" id="portrait-fallback" aria-hidden="true">${esc(
                portrait.fallbackInitials || cfg.brand?.initials || ""
              )}</div>
            </figure>
          </div>
        </div>
      </section>
      ${aboutSection}
      ${experienceSection}
      ${publicationsSection}
      ${projectsSection}
      ${educationSection}
      ${skillsSection}
      ${contactSection}`;
  }

  function renderFooter() {
    const nameEl = document.getElementById("footer-name");
    if (nameEl && cfg.footerName) nameEl.textContent = cfg.footerName;
  }

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

  function initTheme() {
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
  }

  function initPortrait() {
    const portraitImg = document.querySelector(".portrait__img");
    const portraitRoot = document.getElementById("portrait-root");
    if (portraitImg && portraitRoot) {
      portraitImg.addEventListener("error", () => {
        portraitRoot.classList.add("portrait--error");
      });
    }
  }

  function initYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  if (!cfg) {
    console.error("Missing window.PORTFOLIO — load js/portfolio.config.js before main.js");
    initTheme();
    initYear();
    return;
  }

  renderMeta();
  renderNav();
  renderBrand();
  renderMain();
  renderFooter();
  initTheme();
  initPortrait();
  initYear();
})();
