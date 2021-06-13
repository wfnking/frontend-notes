---
title: uniapp笔记
date: 2020-12-03
---

### 2-1 app 的 onShow 和 onHide 是整个应用，和页面的有区别 2-2

<view wx:for="{{person}}" wx:for-item="p" wx:for-index="ids">{{p.name}}--{{ids}}</view>

### 2-3 uni-app 规范

1. 页面文件 Vue 单文件组件 (SFC) 规范: 模板块，脚本块，样式块
2. 组件标签靠近小程序规范
3. 接口能力（JS API）靠近微信小程序规范
4. 数据绑定及事件处理同 Vue.js 规范
5. 为兼容多端运行，建议使用 flex 布局进行开发

uni-app 特色

1. 条件编译
2. App 端的 NVue 开发
3. HTML5+

### 2-10 配置样式时，由于 uni-app 没有 body，可以用 page 去代替 body

### 2-11 生命周期概述

- 应用生命周期
  - onLaunch: 应用初始化完成触发一次，全局只触发一次
  - onShow: 启动应用的时候，或者从后台进去前台会触发
  - onHide: 引用从前台进入后台触发
- 页面生命周期
  - onLoad: 页面开始加载
  - onReady: 如果页面渲染速度很快，有可能在页面动画完成前触发
  - onShow: 监听页面显示
  - onHide: 监听页面隐藏
  - onUnload: 监听页面卸载 （使用 uni.redirectTo 可以触发当前页面的 onUnload 事
    件）
- 组件生命周期
  - beforeCreated: 在实例初始化之后，数据观测 (data observer) 和 event/watcher
    事件配置之前被调用。
  - created: 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观
    测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还
    没开始，$el 属性目前不可见。
  - mounted: el 被新创建的
    vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el
    也在文档内。
  - destroyed: Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所
    有的事件监听器会被移除，所有的子实例也会被销毁。
