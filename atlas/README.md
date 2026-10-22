# Brand Atlas by elo

[Open the atlas](https://nebulaeth-spec.github.io/numz-motion/atlas/)

A personal collection by elo with nine brand studies in English and Russian, revised on 22 October 2026. The interface stays in English. Light and dark themes inherit the palette and embedded Inter fonts of Landing Motion.

## Extend the collection

Phantom pilots a narrative format: each `findings` entry combines the case and its interpretation in localized paragraphs, followed by a right-aligned source link. A rule appears only between separate findings. The rest of the collection retains the previous format while this pilot is reviewed.

The optional `date` field records its meaning and known precision. Source publication dates appear in the case header; the Brex AI launch is known to the month. Unknown dates are omitted. Dates are no longer repeated beneath the source.

Add a typed record to `src/brands.ts` with a stable ID, name, characteristics, documented period, searchable contributors, source attribution and date, a primary URL, a related case, and complete Russian and English text. Each language needs a short index line, title, observed decision, our question, proposed application, practical check, failure condition, evidence limit and two diagram labels. The A–Z index, search, filters and count update automatically.

Add a corresponding analytical schematic in `src/Figure.tsx`. These original schematics explain a comparison; they are not brand logos or reproductions of brand assets. Labels stay in HTML so their text does not shrink with the SVG geometry. Respect reduced motion.

Evidence and interpretation must remain distinguishable. The narrative pilot expresses their connection in the prose, without instructions to the reader or a separate application block. Other cases retain their existing application and practical check. Source publication dates and project dates have different meanings. A studio account alone does not establish recognition or business results.

The revision replaces general summaries with bounded accounts of Ambrook, Figma, Linear, Mercury, Notion and Phantom Cash, and adds Morph, Brex AI and Robinhood. A24 and teenage engineering are outside the current collection because their previous takeaways did not sufficiently address these brand-system questions.

## Build

With Node 24 or later, install the pinned dependencies in `package.json`, then run `npm run build`. GitHub Pages serves this directory without a server. Query parameters preserve language, selected case and filters. Theme and language preferences are stored only in the reader's browser. No analytics or external runtime requests are used.

The approved component implementations are retained under `src/vendor`. Third-party notices accompany the release in THIRD_PARTY_NOTICES.txt, LIBRARY_NOTICES.txt and SHADCN_LICENSE.txt. This page and its source are public; search-engine indexing is discouraged.
