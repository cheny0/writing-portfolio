# writing-portfolio

Technical writing portfolio, built with [Docusaurus](https://docusaurus.io/).
Published at <https://cheny0.github.io/writing-portfolio/>.

## Run it locally

```bash
npm install
npm start
```

The dev server hot-reloads on save at <http://localhost:3000/writing-portfolio/>.

```bash
npm run build   # production build into build/
npm run serve   # serve the production build locally
npx tsc --noEmit  # typecheck the TSX pages and config
```

## Two indexes

Samples are indexed twice from one source of truth:

- **By product**: the sidebar, generated from the folder structure.
- **By content type**: tag pages Docusaurus generates from frontmatter, at
  `/docs/tags/type/*` and `/docs/tags/product/*`.
