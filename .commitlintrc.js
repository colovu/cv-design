module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "build",    // 主要目的是修改项目构建系统
                "ci",   // 主要目的是修改项目继续集成流程
                "docs", // 文档更新
                "feat", // 新增功能（feature）
                "fix",  // bug 修复，可针对 bug id 进行对应
                "perf", // 性能优化
                "refactor", // 重构代码(既没有新增功能，也没有修复 bug)
                "revert",   // 回滚某个更早之前的提交
                "style",    // 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
                "test", // 新增测试用例或是更新现有测试
                "chore",    // 不属于以上类型的其他类型(日常事务)
            ],
        ],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0],
        'subject-case': [0, 'never'],
        'header-max-length': [0, 'always', 72]
    }
};
