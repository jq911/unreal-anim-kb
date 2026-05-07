import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '虚幻动画知识库',
  tagline: 'Unreal Engine Animation Blueprint Knowledge Base',
  favicon: 'img/favicon.ico',

  future: {
    v4: false,
  },

  url: 'https://jq911.github.io',
  baseUrl: '/unreal-anim-kb/',

  organizationName: 'jq911',
  projectName: 'unreal-anim-kb',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs', // 文档在 /docs 路径下
          sidebarPath: './sidebars.ts',
        },
        blog: false, // 不需要博客
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['zh', 'en'],
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '虚幻动画知识库',
      logo: {
        alt: '虚幻动画知识库 Logo',
        src: 'img/docusaurus.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
          docsPluginId: 'default',
        },
        {
          href: 'https://docs.unrealengine.com/5.7/en-US/animation-blueprints-in-unreal-engine/',
          label: 'UE 官方文档',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Unreal Animation Knowledge Base. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['cpp', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
