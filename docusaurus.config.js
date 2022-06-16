// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jackie Liao',
  tagline: 'A Full-stack Developer, Ph.D. in Computer Science',
  url: 'https://liaocy.net',
  baseUrl: '/liaocy-net/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  onDuplicateRoutes: 'ignore',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'liaocy', // Usually your GitHub org/user name.
  projectName: 'liaocy.net', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  githubHost: 'github.com',
  githubPort: '22',
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"), //検索、https://github.com/easyops-cn/docusaurus-search-local yarn add @easyops-cn/docusaurus-search-local
    {
      hashed: true,
      language: ["en"],
    },],
    'plugin-image-zoom',
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [
            require('mdx-mermaid')
          ],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/liaocyintl/liaocy-net/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/liaocyintl/liaocy-net/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        additionalLanguages: ['bash', 'yaml', 'json'],
      },
      navbar: {
        title: 'Jackie Liao',
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'DOCS',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/liaocyintl/liaocy-net',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Repo',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/liaocy/',
              },
              {
                label: 'Github',
                href: 'https://github.com/liaocyintl',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} liaocy.net. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
