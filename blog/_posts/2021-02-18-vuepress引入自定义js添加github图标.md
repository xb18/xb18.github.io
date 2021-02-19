---
title: vuepress引入自定义js添加github图标
date: 2021-02-18
tags:
  - Vue
  - JavaScript
author: xb18

---

# 引入js

在.vuepress/config.js中添加

```js
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
```

# 设置css

在.vuepress/styles/index.styl中添加

```stylus
body > .github-corner > svg
    z-index: 2021
    position: fixed
.search-box
    margin-right: 80px
```



![image-20210218213636358](../img/image-20210218213636358.png)

