# 代码管理规范工具 code-config
code-config 是一套团队代码管理规范工具和配置文件，用于统一规范前端团队代码。

其中包括 编辑器配置、代码格式化配置、静态代码检查等。

---

## 文件目录
```
/demo（测试示例文件）
/editor-config（编辑器配置文件）
    - vsc.json（适用于 visual studio code）
    - sublime.json（适用于 sublime text）
- .jsbeautifyrc.json（js-beautify 配置文件）
- .eslintrc.json（eslint 配置文件）
- package.json
```

---

## 使用方法
- 克隆项目到本地目录。
- 编辑器配置：复制 **/editor-config** 中的文件内容到编辑器配置。
- js-beautify 代码格式化配置：修改相应的 jsbeautify 插件配置文件路径，指向该项目中的 **.jsbeautifyrc.json** 文件。
- ESLint 代码规范检测配置：修改相应的 ESLint 插件配置文件路径，指向该项目中的 **.eslintrc.json** 文件。

---

## 相关文档
- js-beautify node 包官方文档：https://www.npmjs.com/package/js-beautify
- ESLint 官方文档：http://eslint.cn/docs/user-guide/command-line-interface

---
