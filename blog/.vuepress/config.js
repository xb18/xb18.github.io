module.exports = {
  title: 'xb18’ blog',
  theme: '@vuepress/blog',
  themeConfig: {
    // 请参考文档来查看所有可用的选项。
    smoothScroll: true,
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
  },
  plugins: 
  [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress'
  ]
}
