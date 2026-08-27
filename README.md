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
   `docs/dev-docs/` or `docs/user-docs/<client>/`.
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

## Two indexes

Samples are indexed twice from one source of truth:

- **By product** — the sidebar, generated from the folder structure.
- **By content type** — tag pages Docusaurus generates from frontmatter, at
  `/docs/tags/type/*` and `/docs/tags/product/*`.

Every sample carries `tags: [<type>, <product>]`. The vocabulary is declared in
`docs/tags.yml`, and `onInlineTags: 'throw'` means a tag missing from that file
fails the build rather than quietly creating a one-item category. Adding a
sample means adding one frontmatter line — there's no second index to edit.

Add a new type by declaring it in `docs/tags.yml` first, then tagging docs
with it.

## Imported help articles

Two sets of help-centre articles are reproduced under
`docs/user-docs/`, one folder per client, with the rest linked to
their live pages:

| Client | Source | Licence | Reproduced |
| --- | --- | --- | --- |
| Status | [status-im/status-web](https://github.com/status-im/status-web) | MPL-2.0 | 3 articles |
| Keycard | [keycard-tech/keycard-website](https://github.com/keycard-tech/keycard-website) | none declared | 3 of 12, rest linked |

Keycard declares no licence, so only a few articles are reproduced and
`keycard/more-keycard-writing.md` links out to the remaining nine. Keep that
split unless Keycard confirms otherwise. Keycard images are copied into
`static/img/keycard/` because they are repo assets upstream, not hosted URLs.

### The Status component shim

The Status articles render against Status's own component library, which isn't
available here, so `src/components/StatusDocs/` shims it and
`src/theme/MDXComponents.tsx` registers the shims globally. The Keycard
articles use `<Admonition>` and the `<Table>` family too, so the same shim
covers them:

| Status component | Rendered as |
| --- | --- |
| `<Admonition type>` | the matching Docusaurus admonition |
| `<Tabs>` / `<TabsList>` / `<TabsTrigger>` / `<TabsContent>` | Docusaurus `<Tabs>` / `<TabItem>` |
| `<Table>` family | a plain HTML table |
| `<ContextTag>` | an inline chip (the icon is dropped) |
| `*Icon` (139 of them) | nothing |

Three consequences worth knowing. Icons that appear beside UI labels on
status.app are missing here, so a step reads "tap **Wallet**" without its icon.
A `<TabsTrigger disabled>` — a platform Status hasn't shipped — is dropped
rather than rendered as an empty tab. And an icon used as *content* rather than
decoration has to be given a glyph explicitly: the permissions matrix marks an
allowed action with `<CheckCircleIcon />` and leaves the cell empty otherwise,
so rendering it as nothing would have blanked the whole table. When importing
another article, check for icons that appear outside a ContextTag
`icon={...}` prop.

All 139 icon names are registered, not just the ones currently used, so
importing another article won't fail the build on an unknown component. These
files must stay `.mdx`: `.md` is parsed as CommonMark and would print the JSX
as literal text.

## Deployment

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
It needs **Settings → Pages → Build and deployment → Source: GitHub Actions**
set once on the repo.
