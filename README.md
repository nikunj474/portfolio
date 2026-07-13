# Nikunj Agrawal — Portfolio

A personal portfolio website built with vanilla HTML, CSS, and JavaScript. Hosted on GitHub Pages.

🔗 **Live site:** [nikunj474.github.io/portfolio](https://nikunj474.github.io/portfolio/)

---

## About

This portfolio showcases my background as an MS in CS student at the University of Pennsylvania, with experience spanning AI/ML engineering, product management, and data analytics across enterprise SaaS, government consulting, and academic research.

---

## Features

- **Config-driven content** — all text (bio, experience, projects, education, skills) lives in `js/portfolio.config.js`, making updates simple without touching HTML
- **Pastel orange theme** — warm, professional color palette with light/dark mode toggle
- **Responsive design** — works across desktop, tablet, and mobile
- **Smooth animations** — scroll-triggered reveals, hover effects, and transitions
- **Sections:** Hero · About · Experience · Projects · Education · Skills · Contact

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, CSS variables) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | DM Sans · Fraunces (Google Fonts) |
| Hosting | GitHub Pages |

---

## Project Structure

```
portfolio/
├── index.html              # Main HTML shell
├── css/
│   └── styles.css          # All styles + theme tokens
├── js/
│   ├── portfolio.config.js # All content (edit this to update the site)
│   └── main.js             # Rendering logic
├── assets/
│   └── nikunj-agrawal-resume.pdf
└── images/
    └── Nikunj_Formal_photo.JPG
```

---

## Getting Started

No build tools or dependencies required.

```bash
# Clone the repo
git clone https://github.com/nikunj474/portfolio.git

# Open locally
cd portfolio
open index.html
```

Or simply serve with any static file server:

```bash
npx serve .
```

---

## Updating Content

All site content is managed in a single file:

```
js/portfolio.config.js
```

Edit the `window.PORTFOLIO` object to update:
- **Hero** — headline, bio, and action buttons
- **About** — bio paragraphs
- **Experience** — job titles, companies, dates, and bullet points
- **Projects** — titles, tags, descriptions, and GitHub links
- **Education** — degrees, institutions, and highlights
- **Skills** — grouped skill chips
- **Contact** — email, phone, and social links

---

## Contact

- **Email:** [nikunj@seas.upenn.edu](mailto:nikunj@seas.upenn.edu)
- **LinkedIn:** [linkedin.com/in/nikunj3](https://www.linkedin.com/in/nikunj3/)
- **GitHub:** [github.com/nikunj474](https://github.com/nikunj474)

---

*© 2026 Nikunj Agrawal*
