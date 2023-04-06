module.exports = {
    root: true,
    extends: ['prettier'],
    plugins: ['import', 'prettier'],
    settings: {
        react: {
            pragma: 'React', // Pragma to use, default to "React"
            version: 'detect', // React version. "detect" automatically picks the version you have installed.
        },
    },
    overrides: [
        {
            files: ['**/*.jsx', '**/*.tsx'],

            plugins: ['react'],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            rules: {
                'react/no-deprecated': 'error',
                'react/no-string-refs': 'error',
                'react/no-unsafe': 'error',
                'react/display-name': 'error',
                'react/jsx-key': 'error',
                'react/jsx-no-comment-textnodes': 'error',
                'react/jsx-no-duplicate-props': 'error',
                'react/jsx-no-target-blank': 'error',
                'react/jsx-no-undef': 'error',
                'react/jsx-uses-vars': 'error',
                'react/no-children-prop': 'error',
                'react/no-danger-with-children': 'error',
                'react/no-direct-mutation-state': 'error',
                'react/no-is-mounted': 'error',
                'react/no-unescaped-entities': 'error',
                'react/no-unknown-property': 'error',
                'react/require-render-return': 'error',
            },
        },
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 6,
                sourceType: "module",
                ecmaFeatures: {
                    modules: true
                },
                warnOnUnsupportedTypeScriptVersion: true
            },
            plugins: [
                "@typescript-eslint"
            ],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:import/errors",
                "plugin:import/warnings",
                "plugin:import/typescript",
                "plugin:promise/recommended",
                "plugin:react/recommended",
                "plugin:react-hooks/recommended"
            ],

            rules: {
                "@typescript-eslint/no-explicit-any": [
                    "off"
                ],
                "@typescript-eslint/member-delimiter-style": [
                    "off"
                ],
                "import/no-named-as-default": "off",
                "class-methods-use-this": "off",
                "prefer-rest-params": "off",
                "react/jsx-filename-extension": [
                    2,
                    {
                        "extensions": [
                            ".js",
                            ".jsx",
                            ".ts",
                            ".tsx"
                        ]
                    }
                ],
                "no-unused-vars": [
                    "error",
                    {
                        "varsIgnorePattern": "React"
                    }
                ],
                "no-console": [
                    "error",
                    {
                        "allow": [
                            "warn",
                            "error"
                        ]
                    }
                ],
                "camelcase": [
                    "error",
                    {
                        "allow": [
                            "^UNSAFE_"
                        ]
                    }
                ]
            }
        }
    ]
};
