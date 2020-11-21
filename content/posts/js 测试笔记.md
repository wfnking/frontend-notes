---
title: js 测试
date: 2020-08-07 11:54:42
---

## jest 入门

### 2.4 jest 的简单配置

- 初始化 jest

```bash
npx jest --init
```

- 覆盖率说明

```bash
npx jest --coverage
```

- 安装 babel

```bash
npm install @babel/core @babel/preset-env -D
```

- jest, babel 运行流程

npm run jest --> babel core --> 读取 .babelrc 配置 --> 转换代码 --> 运行转换后的代码

### 2.5 jest 中的匹配器

- watch 模式

```bash
npx jest --watchAll
```

- 对象  
  expect(object).toEqual(object) //测试对象内容是否相等

- null, undefiend

  .toBeNull()
  .toBeUndefined()
  .toBeDefined() //是否被定义过

- 真假

  .toBeTruthy() //是否为真
  .toBeFalsy()
  .not.toBeFalsy()

- 数字

  .toBeGreatThan() //大于
  .toBeGreatThanOrEqual()
  .toBeCloseTo() //近似于 (0.1 + 0.1).toBeCloseTo(0.2)

- 字符串

  .toMatch(字符串｜正则)

- array, set

  .toContain(元素)

- 异常

  .toThrow(不填|异常的内容|正则|)
