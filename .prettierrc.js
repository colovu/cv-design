// 代码格式化工具
//
// package.json 不能存在 "type": "module" 定义；否则会报错：
// This file is being treated as an ES module because it has a '.js' file extension and '/Users/endial/Work/projects/react-antd-Default/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.

module.exports = {
    semi: true, // 末尾分号
    singleQuote: true, // 使用单引号
    useTabs: false, // 使用 Tab 还是 空格 缩进
    printWidth: 100, // 打印宽度字符个数
    trailingComma: 'all', // 尾逗号（Object 等最后一个元素增加逗号结尾）
    tabWidth: 2, // 缩进字符数
};
