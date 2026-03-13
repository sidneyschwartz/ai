# CLAUDE.md — AI Pulse

## Project Overview

AI Pulse is a static single-page AI news dashboard website. It curates AI industry news, infrastructure updates, tools, and trends. There is no backend, no build system, and no package manager — the site is pure HTML, CSS, and JavaScript served as static files.

## Repository Structure

```
/
├── index.html          # Main HTML page (all content and structure)
├── style.css           # All styles (CSS variables, animations, responsive design)
├── script.js           # Client-side interactivity (scroll animations, counters, nav)
├── CLAUDE.md           # This file
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages deployment (triggers on push to claude/ai-news-website-AoCN9)
```

Total: ~1,800 lines across 3 source files.

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — CSS Grid, Flexbox, custom properties, animations, responsive breakpoints (1024px, 768px, 480px)
- **Vanilla JavaScript (ES6+)** — no frameworks or libraries
- **Google Fonts** — Inter and Space Grotesk (loaded via CDN)

There are zero npm dependencies. No package.json exists.

## Development

### Running Locally

Open `index.html` directly in a browser, or use any static file server:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### No Build Step

There is no build, transpilation, or bundling. Edit the files directly and reload the browser.

### No Tests or Linting

There are no test frameworks, linters, or formatters configured. Validate changes by visual inspection in the browser.

## Deployment

GitHub Actions deploys to GitHub Pages on push to the `claude/ai-news-website-AoCN9` branch. The workflow (`.github/workflows/deploy.yml`) uploads the entire repo root as a static site artifact.

## Architecture & Key Patterns

### CSS (`style.css`)
- Dark theme with vibrant accent colors defined via CSS custom properties
- Responsive design with breakpoints at 1024px, 768px, and 480px
- Animated background blobs using CSS keyframes with blur and opacity
- Gradient text effects and glowing box-shadows
- Grid-based card layouts (3-column desktop, collapsing on smaller screens)

### JavaScript (`script.js`)
- **Intersection Observer** — triggers fade-in animations on scroll
- **Counter animation** — animates hero stats with eased-out cubic timing
- **Navbar scroll effect** — changes background on scroll
- **Smooth scrolling** — anchor link navigation
- **Dynamic date** — displays current date in the navbar
- **Ticker loop** — duplicates ticker content for seamless horizontal scroll

### HTML (`index.html`)
Major sections in order: navigation bar, hero with stats, breaking news ticker, featured story, infrastructure news grid, tools grid, trends with progress bars, CTA, footer.

## Conventions

- No frameworks or external JS libraries — keep it vanilla
- All styling in `style.css` (no inline styles except where structurally necessary)
- All interactivity in `script.js`
- Use semantic HTML elements
- Maintain responsive design across all breakpoints
- Preserve the dark theme aesthetic and accent color palette
