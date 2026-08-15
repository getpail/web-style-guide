# AGENTS.md

Static web style guide for PAIL web apps, built on Bootstrap 5.3.
No framework, no tests, no CI. Asset references are relative, so the site is
viewable by opening `index.html` in a browser. Default branch is `master`.

## Commands (Node >= 20 required)

- `npm run css` — compile `scss/bootstrapail.scss` -> `style/bootstrapail.css`
  (expanded, with source map), then minify -> `style/bootstrapail.min.css`.
  Individual steps: `npm run css-compile`, `npm run css-minify`.
- `npm run js` — copy Bootstrap's bundle from `node_modules` into
  `js/bootstrapail.bundle.min.js` (+ `.map`). Run after `npm install` bumps
  Bootstrap (`~5.3.8` pinned).

## Commit the generated files (important)

`style/*.css`, `style/*.css.map` and `js/bootstrapail.bundle.min.js(.map)`
are committed to git and linked directly from `index.html`. After any change
to `scss/`, run `npm run css` (and `npm run js` after a Bootstrap bump) and
commit the regenerated files. Never hand-edit anything under `style/` or
`js/bootstrapail.bundle.min.js` — they are overwritten. The sass step uses
`--no-error-css`, so on a compile error no file is written and the command
fails: check the exit status, don't trust a stale `style/` file.

## Architecture

- `index.html` — the guide's home page. `icons/index.html` — gallery of every
  icon in `images/sprites.svg`; keep its card list in sync when adding icons.
  `components/index.html` — demos of Bootstrap components using the guide's
  custom colours; add one component section at a time, following the Accordion
  section pattern (heading, docs reference link, demo). All three pages link
  `style/bootstrapail.min.css` in `<head>`, load `js/color-modes.js` as
  `type="module"`, and `js/bootstrapail.bundle.min.js` at end of `<body>`.
- Layout — all page content follows the centered reading column
  `col-sm-12 col-md-10 col-lg-8 col-xl-6` inside `container-fluid`; use the
  full page width only when explicitly requested.
- `scss/bootstrapail.scss` — the only style source. Follows Bootstrap 5.3
  "Option B": `@import` functions first, then override the `$primary`,
  `$secondary`, `$success`, `$info`, `$warning`, `$danger` variables, then
  import the rest. Custom CSS goes in the "additional custom code" section
  at the bottom.
- `js/color-modes.js` — hand-maintained light/dark/auto theme toggle
  (adapted from Bootstrap docs); persists choice in `localStorage.theme`.
- `images/sprites.svg` — icon sprite. Add icons here as `<symbol>` elements
  and reference them with `<use xlink:href="images/sprites.svg#icon-id">`.

## Verification

No tests or linters. Verify visually by opening `index.html` in a browser
(after `npm run css`).
