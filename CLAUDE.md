# APEX GYM Website

## Overview

Single-page gym landing website with a premium dark theme and red accent colors. Built with vanilla HTML, CSS, and JavaScript — no frameworks or build tools.

## Tech Stack

- **HTML5** — Semantic markup with BEM class naming
- **CSS3** — Custom properties, CSS Grid, Flexbox, transitions, media queries
- **JavaScript (ES6+)** — IntersectionObserver, scroll events, DOM manipulation
- **Google Fonts** — Oswald (headings) + Inter (body text)

## File Structure

```
gym-website/
├── index.html          # Main HTML document (single page)
├── css/
│   └── style.css       # All styles (~500 lines)
├── js/
│   └── main.js         # All interactivity (~120 lines)
└── CLAUDE.md           # This file
```

## How to Run

Open `index.html` in any modern browser. No server or build step required.

## Naming Conventions

- **BEM methodology** — `block__element--modifier` (e.g., `pricing-card__price`, `btn--primary`)
- **CSS custom properties** — Prefixed by category (`--bg-`, `--text-`, `--accent`, `--font-`)
- **JS IDs** — camelCase for form elements, lowercase for structural (`navbar`, `hamburger`, `navMenu`)

## Section Map

| Section       | ID              | Description                              |
|---------------|-----------------|------------------------------------------|
| Navigation    | `#navbar`       | Fixed top navbar with hamburger toggle   |
| Hero          | `#home`         | Full-viewport intro with CTA buttons     |
| About         | `#about`        | Company info + stats grid                |
| Classes       | `#classes`      | 6-card grid of class offerings           |
| Trainers      | `#trainers`     | 4-card grid of trainer profiles          |
| Pricing       | `#pricing`      | 3-tier pricing cards (Pro = featured)    |
| Testimonials  | `#testimonials` | 3-card member testimonials               |
| Contact       | `#contact`      | Contact form + location/hours info       |
| Footer        | —               | Brand, quick links, social links         |

## Design Tokens

Key CSS custom properties defined in `:root`:

- **Backgrounds:** `--bg-primary` (#0a0a0a), `--bg-secondary` (#111), `--bg-card` (#1a1a1a)
- **Accent:** `--accent` (#e53e3e), `--accent-hover` (#c53030)
- **Typography:** `--font-heading` (Oswald), `--font-body` (Inter)
- **Layout:** `--container-width` (1200px), `--section-padding` (6rem 0)

## Responsive Breakpoints

- **1024px** — Trainers 2-col, smaller hero text
- **768px** — Single column layouts, mobile nav overlay, reduced padding
