import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  description: 'Blog included. Built on top of VitePress and UnoCSS.',
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    footer: {
      message: 'Barfi Boateng Agyenim',
      copyright: 'Copyright © 2025',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lacasera' },
      { icon: 'linkedin', link: 'https://github.com/lacasera' },
      {
        icon: 'twitter',
        link: 'https://www.linkedin.com/in/agyenim-boateng-barfi-88985577/',
      },
      { icon: 'twitch', link: 'https://www.twitch.tv/php_artisans' },
    ],
    nav: nav(),
    blog: {
      title: 'My Blog',
      description: 'Some articles for sample Blog',
    },
  },
  title: 'Barfi Boateng Agyenim',
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
  },
})

function nav() {
  return [
    { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
    {
      text: 'Resume',
      link: '/resume.pdf',
      attrs: {
        download: '',
        target: '_blank',
      },
    },
  ]
}
