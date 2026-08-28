import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Chen Yang',
  tagline: 'Technical writer',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://cheny0.github.io',
  baseUrl: '/writing-portfolio/',

  organizationName: 'cheny0',
  projectName: 'writing-portfolio',

  onBrokenLinks: 'throw',

  // Inter for body and headings, JetBrains Mono for code.
  // preconnect first so the font files aren't blocked behind the CSS request.
  stylesheets: [
    {href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap', rel: 'stylesheet'},
  ],
  headTags: [
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'}},
  ],

  // `.md` files are parsed as CommonMark, `.mdx` as MDX. This lets you drop a
  // plain Markdown draft into `docs/` without escaping `<placeholders>` or `{braces}`.
  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/cheny0/writing-portfolio/tree/main/',
          // The sidebar indexes samples by product; tags index them by content
          // type, at /docs/tags/type/* and /docs/tags/product/*. A tag that isn't
          // declared in docs/tags.yml fails the build rather than quietly
          // creating a one-item category.
          onInlineTags: 'throw',
          // `sample` is the provenance note on each imported document. It is
          // rendered by src/theme/Admonition/Types.tsx, deliberately unlike the
          // articles' own callouts.
          admonitions: {keywords: ['sample'], extendDefaults: true},
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Chen Yang',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'samplesSidebar',
          position: 'left',
          label: 'Writing samples',
        },
        {to: '/about', label: 'About', position: 'left'},
        {
          href: 'https://github.com/cheny0',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'cpp', 'c', 'cmake', 'json', 'yaml', 'toml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
