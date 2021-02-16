---
title: puppeteer 报错 Request content was evicted from inspector cache
date: 2021-02-16
tags: 
  - JavaScript
  - Node 
author: xb18

---

# 使用response.buffer()时buffer超过默认大小

```javascript
const img = await imgPage.goto(url)
const buffer = await img.buffer()
fs.writeFileSync(path.join(filePath, flieName), buffer)
```

解决方法：

```javascript
await page._client.send('Network.enable', {
  maxResourceBufferSize: 1024 * 1204 * 100,  //单个资源大小100M
  maxTotalBufferSize: 1024 * 1204 * 1000,  //所有资源大小 1000M
})
```

