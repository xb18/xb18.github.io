module.exports = {
  title: 'xb18’ blog',
  theme: '@vuepress/blog',
  themeConfig: {
    // 请参考文档来查看所有可用的选项。
    smoothScroll: true,
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      'vuepress-plugin-zooming', //主页进入不能缩放  bug 刷新后才能缩放
      {
        selector: '.my-wrapper .my-img',
        delay: 1000,
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      },
    ],
    '@vuepress/nprogress'
  ],
  head: [
    ['script', {},
      `
  var _hmt = _hmt || []; 
  (function() { 
    var hm = document.createElement("script"); 
    hm.src = "https://unpkg.com/github-corners/dist/embed.min.js"; 
    hm.setAttribute('data-href','https://github.com/xb18');
    hm.setAttribute('data-target','_blank');
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s); 
  })(); 
`
    ]
  ]

}
