# nikunj-agrawal.com

Personal site for Nikunj Agrawal. Next.js App Router, statically exported and
served by GitHub Pages at [nikunj-agrawal.com](https://nikunj-agrawal.com).

## Design

Editorial neo-brutalism: a warm cream ground under a 45-degree hatch, charcoal
text, and terracotta reserved for exactly two jobs, accent dots and the active
nav underline. Three typefaces, each with one role: Cormorant Garamond for
display, Inter for prose and UI, JetBrains Mono for all metadata, which is
always uppercase and widely tracked. Sections are separated by single 1px rules
rather than shadows or rounded cards, so the page reads as a wireframe.

The Tailwind palette is replaced rather than extended, so a stray `slate-500`
fails the build instead of quietly shipping.

## Structure

Every section exists twice: stacked on `/` as one scrolling page, and again at
its own route. Both render the identical component, and the nav resolves its
active state from the scroll position on `/` and from the pathname elsewhere.

```
app/
  layout.tsx          fonts, nav, footer, metadata
  page.tsx            the index: all sections stacked
  <section>/page.tsx  the same section, standalone
components/
  sections/           Hero, About, Education, Skills, Experience, Portfolio, Contact
  Nav, Reveal, Pill, Glyph, SectionShell, PageHeader, Footer
lib/content.ts        every word on the site, in one typed module
```

To change copy, edit `lib/content.ts`. Nothing else hardcodes text.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run typecheck
npm run lint
npm run build        # static export to out/
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: typecheck, lint, build,
then a check that every route, the CNAME, and `.nojekyll` are present in `out/`
before publishing to Pages.

The repository's Pages source must be set to **GitHub Actions**
(Settings, then Pages, then Build and deployment) rather than "Deploy from a
branch". `public/CNAME` keeps the custom domain attached through each deploy,
and `public/.nojekyll` stops Pages from discarding the `_next/` directory.

## Licence

MIT. See [LICENSE](LICENSE).
