export default {
  description: 'Just playing around.',
  lang: 'zh-CN',

  themeConfig: {
    siteTitle: 'Xin Vitepress',
    nav: nav(),
    sidebar: sideBarnav()
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
        { text: 'Foo Index', link: '/foo/index'},
        { text: 'Foo 123', link: '/foo/123'},
      ]
    }
  ]
}
