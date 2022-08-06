// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'photo-cli',
  tagline: 'Open source & free CLI tool that runs on macOS, Windows, Linux that extracts when and where (reverse geocode) your photographs are taken, copy into a new organized folder (not modifying source folder) with various folder & file naming strategies or export all data into CSV files.',
  url: 'https://photocli.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'photo-cli', // Usually your GitHub org/user name.
  projectName: 'photo-cli', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/photo-cli/photo-cli.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-P3Z0ZNT1DK',
          anonymizeIP: true,
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'photo-cli',
        logo: {
          alt: 'photo-cli Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro-examples',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/photo-cli/photo-cli/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Open Source',
            items: [
              {
                label: 'photo-cli',
                href: 'https://github.com/photo-cli/photo-cli/',
              },
              {
                label: 'docs',
                href: 'https://github.com/photo-cli/photo-cli.github.io/',
              }
            ]
          }
        ],
        copyright: `${new Date().getFullYear()} photo-cli, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
