---
title: imooc笔记
date: 2020-07-29T23:06:55+08:00
summary: '慕课网的笔记'
draft: false
---

## imooc 高仿 AntDesign

5-1 测试的好处

- 高质量的代码
- 更早地发现 bug，减少成本
- 让重构和升级变得更加容易和可靠
- 让开发更加敏捷

7-1 图标 icon 的解决方案

- 上古时期：雪碧图
- 近代：Font Icon
- 现在和未来： SVG

SVG 完全可控，即取即用， Font Icon 要下载全部字体，还有很多奇怪的 bug

7-7 animate.css

9-5 mvp（ minimum viable product） 最小化可行产品

9-12 如果想让更多的人用你的产品，文档甚至比代码更重要

10-1 软件设计思想，一开始避免过度设计

10-2 fetch 缺点：

1. 只对网络请求报错，对 400，500 都当作成功都请求
2. 默认不会带 cookie
3. 不支持 abort，不支持超时控制
4. 没有办法原生检测请求的进度

10-3 JSONPlaceholder

10-5 上传文件时设置 Content-Type: multipart/form-data 请求头，能够更快地上传

11-1 什么是模块？

- 一组可重用的代码
- 可维护性
- 可重用性

## nextjs + koa2

3-6 getInitialProps：在进入页面之前提前获取数据放在 pages 下面的 getInitialProps
才会被调用服务端渲染和页面渲染都会被执行

3-8 document 只有在服务端渲染的时候才会被调用，用来修改服务端渲染都文档内容 3-11
moment 放在 getInitialProps 里面去加载

11-2 nodejs 项目部署： nginx 端口转发，pm2

# 大前端

## 第九周

- 1-1
- 鉴权常用三种方式：jwt，session/cookie，oAuth2.0，手机号+验证码
- 算法加密：base64，md5/sha1，des/aes，rsa/ecc （用算法加密数据，使明文不可读）
- https：ssl，http 数据劫持，数据篡改，防范中间人攻击 (s:secure)

### jwt （json web tokens）

- 特点：无状态，不用存储在服务器，有三部分组成 header，payload，signature
- 优点：防 csrf，适合移动端应用，无状态
- 有趣的在线网站：jwt.io

# 使用 typescript 编写爬虫工具

- 3-7 TypeScript 的编译运转过程的进一步理解这一个小节介绍 nodemon，tsc
  -v，concurrently 的使用
