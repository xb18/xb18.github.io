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
  ],
  head: [ ['script', {}, `
  var _hmt = _hmt || []; 
  (function() { 
    var hm = document.createElement("script"); 
    hm.src = "https://unpkg.com/github-corners/dist/embed.min.js"; 
    hm.setAttribute('data-href','https://github.com/xb18');
    hm.setAttribute('data-target','_blank');
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s); 
  })(); 
`]]

}
