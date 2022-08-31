export default {
  description: 'Just playing around.',
  lang: 'zh-CN',

  themeConfig: {
    siteTitle: 'Xin Vitepress',
    nav: nav(),
    sidebar: sideBarnav(),
    /* sidebar: { */
    /*   '/guide/': sidebarGuide(), */
    /*   '/config/': sidebarConfig() */
    /* }, */
  }
}
// 顶部导航栏
function nav() {
  return [
    { text: 'Home sweet', link: '/'},
    { text: 'Getting Started', link: '/getting-started'}
  ]
}

// 侧边栏
function sideBarnav () {
  return [
    {
      text: 'Home',
      items: [
        { text: 'Home sweet home', link: '/'},
        { text: 'Getting Started', link: '/getting-started'},
        { text: 'State sharing', link: '/getting-started'},
        { text: 'Foo Index', link: '/foo/index'},
        { text: 'Foo 123', link: '/foo/123'},
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
      ]
    }
  ]
}
