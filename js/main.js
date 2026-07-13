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

  // For fields authored with intentional inline HTML (e.g. &amp;, <strong>).
  function raw(s) {
    return s == null ? "" : String(s);
  }

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function externalLink(href, label, cls) {
    return `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(
      label
    )} <span class="arrow" aria-hidden="true">↗</span></a>`;
  }

  function sectionHead(num, kicker, subhead) {
    return `<header class="sect__head reveal">
      <span class="sect__num">${esc(pad2(num))}</span>
      <h2 class="sect__title">${raw(kicker)}</h2>
      ${subhead ? `<p class="sect__sub">${raw(subhead)}</p>` : ""}
    </header>`;
  }

  function renderMeta() {
    if (!cfg.meta) return;
    document.title = cfg.meta.title;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", cfg.meta.description);
  }

  function renderBrand() {
    const logo = document.getElementById("site-logo");
    if (logo && cfg.brand) logo.textContent = cfg.brand.logoText || cfg.brand.initials || "";
  }

  function renderNav() {
    const ul = document.getElementById("nav-list");
    if (!ul) return;
    const items = [{ href: "#top", label: "index" }];
    if (cfg.about) items.push({ href: "#about", label: "about" });
    if (cfg.education) items.push({ href: "#education", label: "education" });
    if (cfg.skills) items.push({ href: "#skills", label: "skills" });
    if (cfg.experience) items.push({ href: "#experience", label: "experience" });
    if (cfg.projects) items.push({ href: "#work", label: "portfolio" });
    if (cfg.certifications) items.push({ href: "#certifications", label: "certifications" });
    if (cfg.contact) items.push({ href: "#contact", label: "contact" });
    ul.innerHTML = items
      .map((it) => `<li><a href="${esc(it.href)}">${esc(it.label)}</a></li>`)
      .join("");
  }

  function heroSection() {
    const h = cfg.hero || {};
    const portrait = h.portrait || {};
    return `<section class="hero" id="top" aria-labelledby="hero-heading">
      <div class="hero__grid">
        <div class="hero__text">
          ${
            h.availability
              ? `<p class="hero__badge"><span class="hero__dot" aria-hidden="true"></span>${esc(
                  h.availability
                )}</p>`
              : ""
          }
          <h1 id="hero-heading" class="hero__name">
            <span>${esc(h.firstName || "")}</span>
            <span>${esc(h.lastName || "")}</span>
          </h1>
          <p class="hero__lead">${esc(h.tagline || "")}</p>
          ${h.location ? `<p class="hero__loc">${esc(h.location)}</p>` : ""}
        </div>
        <div class="hero__portrait">
          <figure class="portrait" id="portrait-root">
            <img class="portrait__img" src="${esc(portrait.src || "")}" alt="${esc(
      portrait.alt || ""
    )}" width="360" height="440" loading="eager" decoding="async" />
            <figcaption class="visually-hidden">${esc(portrait.alt || "")}</figcaption>
            <div class="portrait__fallback" id="portrait-fallback" aria-hidden="true">${esc(
              portrait.fallbackInitials || cfg.brand?.initials || ""
            )}</div>
          </figure>
        </div>
      </div>
      <div class="hero__foot">
        <span>${esc(cfg.footerName || "")}</span>
        ${h.version ? `<span class="hero__ver">${esc(h.version)}</span>` : ""}
        <a class="hero__scroll" href="#about">SCROLL <span aria-hidden="true">↓</span></a>
      </div>
    </section>`;
  }

  function aboutSection(num) {
    const a = cfg.about;
    if (!a) return "";
    const paras = (a.paragraphs || []).map((p) => `<p class="reveal">${raw(p)}</p>`).join("");
    const cta = a.resume
      ? `<a class="link-cta reveal" href="${esc(a.resume.href)}" download="${esc(
          a.resume.filename || ""
        )}">${esc(a.resume.label)} <span class="arrow" aria-hidden="true">↗</span></a>`
      : "";
    return `<section class="sect" id="about" aria-labelledby="about-heading">
      <div class="sect__inner">
        ${sectionHead(num, a.kicker, a.subhead)}
        <div class="about">
          ${a.statement ? `<p class="about__statement reveal">${raw(a.statement)}</p>` : ""}
          <div class="about__body">${paras}${cta}</div>
        </div>
      </div>
    </section>`;
  }

  function educationSection(num) {
    const e = cfg.education;
    if (!e || !e.items || !e.items.length) return "";
    const cards = e.items
      .map((ed, i) => {
        const stats = (ed.stats || [])
          .map(
            (s) =>
              `<div class="edu__stat"><span class="edu__stat-label">${raw(
                s.label
              )}</span><span class="edu__stat-value">${raw(s.value)}</span></div>`
          )
          .join("");
        return `<article class="edu reveal">
          <span class="edu__index">${esc(pad2(i + 1))} / ${esc(pad2(e.items.length))}</span>
          <h3 class="edu__school">${raw(ed.school)}</h3>
          <p class="edu__degree">${raw(ed.degree)}</p>
          <div class="edu__stats">${stats}</div>
          ${ed.note ? `<p class="edu__note">${raw(ed.note)}</p>` : ""}
        </article>`;
      })
      .join("");
    return `<section class="sect sect--alt" id="education" aria-labelledby="education-heading">
      <div class="sect__inner">
        ${sectionHead(num, e.kicker, e.subhead)}
        <div class="edu-grid">${cards}</div>
      </div>
    </section>`;
  }

  function skillsSection(num) {
    const s = cfg.skills;
    if (!s || !s.items || !s.items.length) return "";
    const sub = `${s.items.length} ${raw(s.subhead || "")}`.trim();
    const tags = s.items.map((t) => `<li>${esc(t)}</li>`).join("");
    return `<section class="sect" id="skills" aria-labelledby="skills-heading">
      <div class="sect__inner">
        ${sectionHead(num, s.kicker, sub)}
        <ul class="tech reveal">${tags}</ul>
      </div>
    </section>`;
  }

  function experienceSection(num) {
    const e = cfg.experience;
    if (!e || !e.items || !e.items.length) return "";
    const rows = e.items
      .map(
        (job) => `<article class="job reveal">
          <div class="job__main">
            <h3 class="job__title">${raw(job.title)}</h3>
            <p class="job__org">${raw(job.org)}${
          job.location ? ` · <span class="job__loc">${raw(job.location)}</span>` : ""
        }</p>
            <p class="job__desc">${raw(job.description)}</p>
          </div>
          <div class="job__date">${raw(job.date || "")}</div>
        </article>`
      )
      .join("");
    return `<section class="sect sect--alt" id="experience" aria-labelledby="experience-heading">
      <div class="sect__inner">
        ${sectionHead(num, e.kicker, e.subhead)}
        <div class="job-list">${rows}</div>
      </div>
    </section>`;
  }

  function projectsSection(num) {
    const p = cfg.projects;
    if (!p || !p.items || !p.items.length) return "";
    const cards = p.items
      .map((proj) => {
        const tags = (proj.tags || []).map((t) => `<li>${esc(t)}</li>`).join("");
        const link = proj.link
          ? externalLink(proj.link.href, proj.link.label, "work__link")
          : `<span class="work__link work__link--none">PRIVATE REPOSITORY</span>`;
        return `<article class="work reveal">
          <div class="work__top">
            <h3 class="work__title">${raw(proj.title)}</h3>
            ${proj.date ? `<span class="work__date">${raw(proj.date)}</span>` : ""}
          </div>
          <p class="work__desc">${raw(proj.description)}</p>
          <ul class="work__tags">${tags}</ul>
          <div class="work__foot">${link}</div>
        </article>`;
      })
      .join("");
    return `<section class="sect" id="work" aria-labelledby="work-heading">
      <div class="sect__inner">
        ${sectionHead(num, p.kicker, p.subhead)}
        <div class="work-grid">${cards}</div>
      </div>
    </section>`;
  }

  function certificationsSection(num) {
    const c = cfg.certifications;
    if (!c) return "";
    let body;
    if (c.items && c.items.length) {
      body = `<div class="cert-grid">${c.items
        .map(
          (cert) => `<article class="cert reveal">
            <h3 class="cert__title">${raw(cert.title)}</h3>
            ${cert.issuer ? `<p class="cert__issuer">${raw(cert.issuer)}</p>` : ""}
            ${cert.date ? `<span class="cert__date">${raw(cert.date)}</span>` : ""}
          </article>`
        )
        .join("")}</div>`;
    } else {
      body = `<p class="sect__placeholder reveal">${raw(c.placeholder || "Coming soon.")}</p>`;
    }
    return `<section class="sect sect--alt" id="certifications" aria-labelledby="certifications-heading">
      <div class="sect__inner">
        ${sectionHead(num, c.kicker, c.subhead)}
        ${body}
      </div>
    </section>`;
  }

  function contactSection(num) {
    const c = cfg.contact;
    if (!c) return "";
    const links = (c.links || [])
      .map(
        (l) =>
          `<li><a href="${esc(l.href)}">${esc(l.label)} <span class="arrow" aria-hidden="true">↗</span></a></li>`
      )
      .join("");
    return `<section class="sect sect--contact" id="contact" aria-labelledby="contact-heading">
      <div class="sect__inner">
        ${sectionHead(num, c.kicker, c.subhead)}
        <div class="contact reveal">
          ${c.lead ? `<p class="contact__lead">${raw(c.lead)}</p>` : ""}
          ${c.location ? `<p class="contact__loc">${esc(c.location)}</p>` : ""}
          <ul class="contact__links">${links}</ul>
        </div>
      </div>
    </section>`;
  }

  function renderMain() {
    const main = document.getElementById("main");
    if (!main || !cfg.hero) return;

    const sections = [];
    let n = 2; // hero is implicitly 01
    if (cfg.about) sections.push(aboutSection(n++));
    if (cfg.education) sections.push(educationSection(n++));
    if (cfg.skills) sections.push(skillsSection(n++));
    if (cfg.experience) sections.push(experienceSection(n++));
    if (cfg.projects) sections.push(projectsSection(n++));
    if (cfg.certifications) sections.push(certificationsSection(n++));
    if (cfg.contact) sections.push(contactSection(n++));

    main.innerHTML = heroSection() + sections.join("");
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
    if (toggle) toggle.setAttribute("aria-pressed", String(theme === "dark"));
  }

  function initTheme() {
    applyTheme(resolvedTheme());
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (!getStoredTheme()) applyTheme(systemTheme());
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

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    items.forEach((el) => observer.observe(el));
  }

  if (!cfg) {
    console.error("Missing window.PORTFOLIO — load js/portfolio.config.js before main.js");
    initTheme();
    initYear();
    return;
  }

  renderMeta();
  renderBrand();
  renderNav();
  renderMain();
  renderFooter();
  initTheme();
  initPortrait();
  initYear();
  initReveal();
})();
