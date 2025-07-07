import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  description: 'Barfi Boateng Agyenim | My Portfolio',
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
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/agyenim-boateng-barfi-88985577/',
      },
      {
        icon: 'twitter',
        link: 'https://x.com/barfiagyenim',
      },
      { icon: 'twitch', link: 'https://www.twitch.tv/php_artisans' },
    ],
    nav: nav(),
    blog: {
      title: 'My Blog',
      description: '',
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
    // { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
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
