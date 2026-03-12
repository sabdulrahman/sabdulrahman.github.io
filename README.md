# Abdul Rahman Shaikh — Portfolio

Personal portfolio and research site. Built with vanilla HTML, CSS, and JavaScript. Dark/light theme, responsive, single-page.

**Live:** [sabdulrahman.github.io](https://sabdulrahman.github.io/)

## Quick Start

```bash
# Any local server works
python -m http.server 8000
npx serve
```

Open `http://localhost:8000`

## Structure

```
├── index.html                # Single-page site
├── css/
│   └── portfolio.css         # All styles (theme system, components, responsive, light/dark overrides)
├── js/
│   └── main.js               # Navigation, theme toggle, filters, scroll spy
├── assets/
│   ├── images/
│   │   ├── profile.png       # Hero photo
│   │   ├── favicon.png
│   │   └── og-image.png      # Social sharing image
│   ├── resume.pdf            # 1-2 page resume
│   └── cv.pdf                # Full academic CV
└── README.md
```

## Sections

1. **Hero** — Name, tagline (role + IEEE VIS Best Paper), description, CTAs
2. **About** — Bio, stats row, education, core skills (ML/DS, LLM/GenAI, Data/Infra, Languages)
3. **Experience** — 3-column card layout (date | content | metrics) for NIU, Amazon, TA roles
4. **Research** — Sticky sidebar with filter pills (Selected/Published/Preprints), 9 paper cards
5. **Projects** — 2-column text-only grid with colored accent borders per category
6. **Contact** — Email, Calendly booking, social links

## Features

- **Dark/Light theme** — Toggle in nav (persists via localStorage). Light theme has dot-grid + gradient background.
- **Resume/CV dropdown** — Nav button with two download options
- **Availability badge** — Green pulsing indicator in About section
- **Research filters** — Selected/Published/Preprint pills with smooth scroll to first result
- **Scroll spy** — Active nav link updates on scroll
- **Mobile menu** — Hamburger with backdrop, theme toggle, resume/CV links
- **Reduced motion** — Respects `prefers-reduced-motion`
- **SEO** — Open Graph, Twitter cards, JSON-LD structured data, semantic HTML

## Theme System

Colors are defined as CSS variables with two complete palettes:

```css
/* Dark (default) */
--color-bg: #050505;
--color-text: #f0f0f0;
--color-accent: #d4a54a;

/* Light */
--color-bg: #f8f7f4;
--color-text: #1a1a1a;
--color-accent: #b8892e;
```

Light theme overrides use `html[data-theme="light"]` selectors for specificity over Tailwind CDN utilities.

## Dependencies

External (CDN):
- [Tailwind CSS](https://tailwindcss.com/) — Utility classes
- [Lucide Icons](https://lucide.dev/) — Icon set
- [Google Fonts](https://fonts.google.com/) — Geist, Space Grotesk, Geist Mono
- [UnicornStudio](https://www.unicorn.studio/) — Animated background

No build step required.

## Deploy

Already configured for GitHub Pages:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Site auto-deploys from the main branch root.

## Author

**Abdul Rahman Shaikh**
- [sabdulrahman.github.io](https://sabdulrahman.github.io/)
- [GitHub](https://github.com/sabdulrahman)
- [LinkedIn](https://www.linkedin.com/in/iamsabdurahman/)
- [Google Scholar](https://scholar.google.com/citations?user=3nfm1N8AAAAJ&hl=en)
- iamsabdurahman@gmail.com