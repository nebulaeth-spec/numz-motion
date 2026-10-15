# numz: Brand Atlas

[Open the atlas](https://nebulaeth-spec.github.io/numz-motion/atlas/)

A first collection of eight brand studies in English and Russian. The interface stays in English. Light and dark themes inherit the palette and embedded Inter fonts of Landing Motion.

## Extend the collection

Add a record to `src/brands.ts` with a stable ID, brand name, characteristics, documented period, searchable contributors, both language versions, a primary source, and a related case. The A–Z index, search, filters and count update automatically. Add a corresponding analytical schematic in `src/Figure.tsx`. These original schematics explain a principle; they are not brand logos or reproductions of brand assets.

Keep an observed decision separate from the takeaway. Dates describe the period discussed, not a complete history. Do not infer business results from a studio case study.

## Build

Install the pinned dependencies in `package.json`, then run `npm run build`. GitHub Pages serves this directory without a server. Query parameters preserve language, selected case and filters. Theme and language preferences are stored only in the reader's browser. No analytics or external runtime requests are used.

The approved component implementations are retained under `src/vendor`. Third-party notices accompany the release in THIRD_PARTY_NOTICES.txt, LIBRARY_NOTICES.txt and SHADCN_LICENSE.txt. This page and its source are public; search-engine indexing is discouraged.
