# Colovu Design 工程说明

本仓库为基于 pnpm workspace 构建的工程。

本工程技术实现使用了以下技术栈：

- Node.js
- React：详细使用说明可参照[官方文档](https://react.dev)
- TailwindCSS
- Typescript

本工程开发环境使用了以下工具：

- pnpm：支持 monorepo 的新一代的包管理工具，号称是**最先进的包管理器**
- changesets：软件包版本管理
- commitlint：格式化 `git commit` 命令中的提交信息
- husky：Husky 可以将 git 内置的钩子暴露出来，很方便地进行钩子命令注入

> 注意：工程中未安装相应的部分工具包，需要手动安装，如：
>     pnpm add -g rimraf tsbb tsx
> 或使用工程提供的脚本命令安装：
>     pnpm pre

## 工程文件说明

本工程中，相应文件路径及文件用途说明：

```text

```


## License

本工程基于 MIT 协议许可使用。
