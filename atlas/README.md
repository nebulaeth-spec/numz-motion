# Brand Atlas by elo

[Open the atlas](https://nebulaeth-spec.github.io/numz-motion/atlas/)

A personal collection of 23 brands and 29 findings in English and Russian, revised on 23 October 2026. The interface stays in English. Light and dark themes share the palette and embedded Inter fonts of Landing Motion.

## Editorial Contract

The atlas collects concrete decisions about brand systems: how they are built, varied, extended, produced and maintained. A finding needs a traceable source and a complete useful thought. Relevance to any one internal product is not required. A studio's explanation establishes its approach, not measured recognition, trust or business performance.

Each finding combines the case and its interpretation in localized paragraphs, followed by right-aligned source links. A rule separates independent findings. There are no separate internal application instructions, mandatory concluding sentences or compulsory image slots.

Images and schematics earn their place by explaining the exact passage. A schematic can introduce a principle and an original can demonstrate a detail later. Captions add information beyond the image and neighbouring prose. Quantity and placement vary by case. Originals retain their palette. Larger delivery exports open the full source on demand; encoding records distinguish lossless copies from resized delivery versions.

## Extend the Collection

Add a typed record to `src/brands.ts`: stable ID, name, characteristics, searchable contributors, complete RU/EN index lines and titles, and one or more sourced findings. Contributors name people and studios credited for the project; article writers are attributed through source links. A–Z, search, filters and count update automatically.

Dates are optional on cases and findings. Their kind distinguishes publication, launch, announcement, event, award and source metadata. Preserve supported precision; an event year is not a publication date. A later finding can carry its own date.

Use `mediaGroups` to position originals after a selected paragraph boundary, or `images` for an end group. Captions are optional. `originalSrc` supplies a full-size image for the enlargement dialog. An optional canvas preserves transparent source artwork in either theme. `crop` defines a native-pixel detail viewport without editing the source; the dialog retains the complete original. `maxWidth` caps inline display and prevents small originals from being enlarged.

Each current brand has a schematic introducing its mechanism. Extend `src/Figure.tsx` for new cases where a meaningful visual explanation is possible. Labels remain HTML so the SVG does not shrink necessary text. Unknown figures render nothing. Text-only exceptions omit diagram data and set `hideDiagram`.

Before publication, inspect every changed case from heading through sources, including each media group. Review both languages, light and dark themes, and narrow screens. Check the relation between schematic, prose and original, the spacing around each, image quality and enlargement behaviour. A few representative screenshots do not establish collection-wide visual completion.

The October review reassessed all nine previous cases. Eight remain with edited or expanded accounts. Linear's glass experiment is retained in research as product craft; the current public collection focuses on brand-system decisions. Fifteen additional brands broaden the collection.

## Build

With Node 24 or later, install the pinned dependencies in `package.json`, then run `npm run build`. GitHub Pages serves this directory without a server. Query parameters preserve language, case and filters. Theme and language preferences stay in the reader's browser. There are no analytics or external runtime requests.

Approved component implementations are retained under `src/vendor`. Third-party notices accompany the release. This page and its source are public; search-engine indexing is discouraged.
