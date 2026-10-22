# Brand Atlas by elo

[Open the atlas](https://nebulaeth-spec.github.io/numz-motion/atlas/)

Nine brand studies in English and Russian, revised on 22 October 2026. Each finding combines a documented case and its interpretation in continuous prose. The interface stays in English. Light and dark themes retain Landing Motion’s palette and embedded Inter fonts.

## Reading And Sources

Sources follow each finding, aligned right, one link per line. The first names the author or studio and the actual source. An optional second link leads to the relevant live work, explicitly labeled as a live site. A live page illustrates the result; it does not establish the historical reasoning or independently validate effects. Text fragments lead to the relevant passage when available and fall back to the source page.

A rule separates independent findings, never a case from its interpretation. Notion contains two findings. Known dates appear once in the header, with their precision and meaning retained. The Brex date is a launch month; other displayed dates are source publication dates. Unknown dates are omitted. A new finding from a different period needs its own date treatment before publication.

The text has no reader exercises or internal brief instructions. Authors’ accounts, interpretation and material limits remain distinguishable through the prose. No case establishes a universal rule or an unreported audience effect.

## Extend The Collection

Add a typed record to src/brands.ts with a stable ID, name, characteristics, searchable contributors, optional date, localized title and index line, two schematic labels, and findings. Each finding has a stable ID, complete Russian and English paragraphs, and a links array with label, URL and role. The index, filters, count and search derive from these records.

Add an analytical schematic in src/Figure.tsx. These are original explanatory drawings, not brand logos or reproductions. Captions identify this for assistive technology. Geometry stays in SVG and labels stay in HTML. Respect reduced motion.

## Build

With Node 24 or later, install the pinned dependencies in package.json, then run npm run build. GitHub Pages serves this directory without a server. Query parameters retain language, case and filters. Browser storage holds language and theme preferences. There are no analytics or external runtime requests.

Approved components remain under src/vendor. Licenses accompany the release. This page and its source are public; search-engine indexing is discouraged.
