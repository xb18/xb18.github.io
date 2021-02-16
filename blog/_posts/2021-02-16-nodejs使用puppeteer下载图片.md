---
title: nodejs使用puppeteer下载图片
date: 2021-02-16
tags: 
  - JavaScript
author: xb18
---



``` javascript
//图片页面
const img = await page.goto(url)
const buffer =await img.buffer()
fs.writeFileSync(path,buffer)
```

