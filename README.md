# The PAIL Web Style Guide

Web style guide for PAIL web apps and web pages.


## Directory structure and files

A PAIL web page or web app built from this guide uses the same layout and
files as the guide itself:

```
web-page-or-app/
├── index.html                         # Edit as required
├── style/
│   ├── bootstrapail.min.css           # Minified stylesheet, link in <head>
│   └── bootstrapail.min.css.map       # Source map
├── js/
│   ├── bootstrapail.bundle.min.js     # Bootstrap JS bundle
│   ├── bootstrapail.bundle.min.js.map # Source map
│   └── color-modes.js                 # Light/dark/auto theme toggle
└── images/
    └── sprites.svg                    # Icon sprites (Scalable Vector Graphics)
```


## Icons

The complete set of icons commonly used in PAIL web apps and web pages is bundled in `images/sprites.svg`.  Consult the [PAIL Icons Cheatsheet](https://getpail.github.io/web-style-guide/icons/) as a reference of all current icons.  Each icon is a Scalable Vector Graphic (SVG) which is easily embedded into HTML, either standalone or inline with text.  The sources of the icons are as follows:

| Source                                             | License                |
|:---------------------------------------------------|:-----------------------|
| PAIL                                               |                        |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | [MIT](https://github.com/twbs/icons?tab=MIT-1-ov-file) |
| [DTPR for AI](https://dtpr.ai/)                    | [Apache 2.0](https://github.com/helpful-places/dtpr?tab=Apache-2.0-1-ov-file) |


## HTML best practices

PAIL web pages and web apps should observe the following best practices for HTML code:
- use two spaces for indentation (no tabs, ever)
- use lowercase for all tags
- no more than one `<h1>` per page, observing heading hierarchy (h1, h2, h3 without skipping levels)
- use lowerCamelCase for ids
- use the aria-x tags to improve accessibility (see: [Accessible Rich Internet Applications](https://www.w3.org/WAI/standards-guidelines/aria/))
- use the `<main id="main">` tag to indicate the page specific content between the `<nav>` and `<footer>`
- prefix external links with the box-arrow-up-right icon from sprites.svg


## AI disclosure and tooling

This project is maintained by human developers assisted by the following Artificial Intelligence models and tools:
- [Gemma-4](https://deepmind.google/models/gemma/gemma-4/) (running on PAIL)
- [opencode](https://opencode.ai/)

All AI-generated code and documentation have been thoroughly reviewed, tested, and validated by a human developer.  However, as AI models are not infallible, users are encouraged to audit the codebase before deployment in production environments.


## For AI agents

AI agents working in this repository should read `AGENTS.md` first. Key rules
it covers: `npm run css` regenerates the committed `style/` files (never
hand-edit them), `npm run js` re-copies the Bootstrap bundle after a Bootstrap
bump, and there are no tests — verify visually by opening `index.html`.


License
-------

MIT License

Copyright (c) 2026 [PAIL Technologies inc.](https://www.getpail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.