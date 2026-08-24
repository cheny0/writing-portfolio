import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Chen Yang',
  tagline: 'Technical writer — developer documentation for distributed systems',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://cheny0.github.io',
  baseUrl: '/writing-portfolio/',

  organizationName: 'cheny0',
  projectName: 'writing-portfolio',

  onBrokenLinks: 'throw',

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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
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
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portfolio',
          items: [
            {label: 'Writing samples', to: '/docs/'},
            {label: 'About', to: '/about'},
          ],
        },
        {
          title: 'Elsewhere',
          items: [
            {label: 'GitHub', href: 'https://github.com/cheny0'},
            {label: 'Logos docs', href: 'https://github.com/logos-co/logos-docs'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chen Yang. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'cpp', 'c', 'cmake', 'json', 'yaml', 'toml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
