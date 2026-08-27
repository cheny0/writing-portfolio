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

## Add a writing sample

1. Drop the Markdown file into a category folder under `docs/` — for example
   `docs/procedures/`.
2. Give it frontmatter:

   ```yaml
   ---
   title: Your document title
   sidebar_position: 3
   description: >-
     One sentence on the audience and what the document covers.
   ---
   ```

3. Add a row to the table in `docs/index.md`, and — if it belongs on the landing
   page — an entry to the `samples` array in `src/pages/index.tsx`.

`.md` files are parsed as CommonMark (`markdown.format: 'detect'` in
`docusaurus.config.ts`), so a plain Markdown draft renders as-is without
escaping `<placeholders>` or `{braces}`. Use `.mdx` only when you want JSX in a
page.

### Add a category

Create a folder under `docs/` with a `_category_.json`:

```json
{
  "label": "Tutorials",
  "position": 2,
  "link": {"type": "generated-index"}
}
```

The sidebar is generated from the folder structure, so no `sidebars.ts` edit is
needed. A category folder with no documents in it fails the build — add the
folder and its first document together.

## Imported Status help articles

`docs/procedures/user-docs/` holds articles imported near-verbatim from
[status-im/status-web](https://github.com/status-im/status-web) (MPL-2.0).
They render against Status's own component library, which isn't available here,
so `src/components/StatusDocs/` shims it and `src/theme/MDXComponents.tsx`
registers the shims globally:

| Status component | Rendered as |
| --- | --- |
| `<Admonition type>` | the matching Docusaurus admonition |
| `<Tabs>` / `<TabsList>` / `<TabsTrigger>` / `<TabsContent>` | Docusaurus `<Tabs>` / `<TabItem>` |
| `<Table>` family | a plain HTML table |
| `<ContextTag>` | an inline chip (the icon is dropped) |
| `*Icon` (139 of them) | nothing |

Two consequences worth knowing. Icons that appear beside UI labels on
status.app are missing here, so a step reads "tap **Wallet**" without its icon.
And a `<TabsTrigger disabled>` — a platform Status hasn't shipped — is dropped
rather than rendered as an empty tab.

All 139 icon names are registered, not just the ones currently used, so
importing another article won't fail the build on an unknown component. These
files must stay `.mdx`: `.md` is parsed as CommonMark and would print the JSX
as literal text.

## Deployment

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
It needs **Settings → Pages → Build and deployment → Source: GitHub Actions**
set once on the repo.
