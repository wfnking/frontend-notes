## eslint 自动格式化

```json
{
  //autoFixedOnSave 设置已废弃，采用如下新的设置
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.format.enable": true,
  //autoFix默认开启，只需输入字符串数组即可
  "eslint.validate": ["javascript", "vue", "html"],

  "editor.fontLigatures": true
}
```

## 插件

themes: cobalt2 好看的暗色主题
bracket pair colorizer 用颜色区分成对的括号
