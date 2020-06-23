module.exports = {
    root: true,
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:jest/recommended',
    ],
    plugins: [
        'babel',
        '@typescript-eslint/eslint-plugin',
        'react-hooks',
        'jsx-a11y',
        'jest',
        'putout',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        ecmaVersion: 2019
    },
    rules: {
        //
        // General
        //

        // enforces a minimum identifier length convention
        'id-length': [
            'error',
            {
                min: 4,
                exceptions: [
                    'App',
                    'app',
                    'Row',
                    'row',
                    'Id',
                    'id',
                    'css',
                    'Css',
                    'env',
                    'Env',
                    'url',
                    'URL',
                    'top',
                    'Top',
                    'req',
                    'res',
                    'key',
                    'Key',
                    'all',
                    'All',
                    'of',
                    'Of',
                    'src',
                    'Src',
                    'alt',
                    'Alt',
                    'cta',
                    'Cta',
                    'add',
                    'Add',
                    'min',
                    'Min',
                    'max',
                    'Max',
                ]
            }
        ],
        // disallows the renaming of import, export and destructured assignments to the same name
        'no-useless-rename': 'error',
        'max-len': 'off',
        'linebreak-style': 'off',
        'import/extensions': [
            2,
            'never',
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                'devDependencies': [
                    '**/*.test.ts',
                    '**/*.test.tsx',
                    '**/tests/*.js',
                    '**/*.dev.js',
                    '**/*.dev.ts',
                ]
            }
        ],
        'import/no-unresolved': [
            2,
            {
                ignore: ['\\.(png|jpg|svg)\\?(lqip)$']
            }
        ],
        'import/prefer-default-export': 'off',
        radix: 'off',
        'no-plusplus': 'off',


        //
        // Functions
        //

        'arrow-parens': [
            'error',
            'as-needed'
        ],
        // requires all immediately-invoked function expressions to be wrapped in parenthesis
        'wrap-iife': [
            'error',
            'inside',
        ],
        'function-paren-newline': [
            'error',
            'never',
        ],

        //
        // Spacings
        //

        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    minProperties: 1
                },
                ImportDeclaration: 'never',
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 3,
                }
            }
        ],
        'object-property-newline': [
            'error',
            {
                'allowAllPropertiesOnSameLine': false
            }
        ],
        'putout/destructuring-as-function-argument': 'error',
        'putout/single-property-destructuring': 'error',
        'putout/multiple-properties-destructuring': [
            'error',
            {
                minProperties: 2,
            }
        ],
        indent: [
            'error',
            4,
            {
                'SwitchCase': 1
            },
        ],
        // spacing before and after semicolons
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        // spacing before and after colons in switch statements
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        'rest-spread-spacing': ['error'],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return'
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*'
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var']
            },
        ],


        //
        // Comments
        //

        'capitalized-comments': [
            'error',
            'never',
            {
                'ignorePattern': 'TODO:',
            }
        ],
        'line-comment-position': [
            'error',
            {
                position: 'above'
            }
        ],
        'multiline-comment-style': [
            'warn',
            'separate-lines'
        ],


        //
        // React
        //

        'react/jsx-no-bind': [
            2,
            {
                allowArrowFunctions: true,
            }
        ],
        // Since we already use typescript , this just does not give any warning if prop-types are not even declared
        'react/prop-types': [
            2,
            {
                skipUndeclared: true,
            }
        ],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: [
                    '.js',
                    '.jsx',
                    '.tsx',
                    '.ts',
                ]
            }
        ],
        'react/jsx-indent': [
            'error',
            4
        ],
        'react/jsx-indent-props': [
            'error',
            4
        ],
        'react/jsx-first-prop-new-line': [
            1,
            'multiline-multiprop',
        ],
        'react/jsx-sort-props': [
            1,
            {
                callbacksLast: true,
                shorthandFirst: true,
                reservedFirst: true,
            }
        ],
        'react/jsx-props-no-spreading': 'error',
        'react/jsx-curly-spacing': [
            2,
            {
                'when': 'never',
                'children': true
            }
        ],


        //
        // Typescript
        //
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',

        // check overrides below
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
    },
    overrides: [{
        // specific rules for TypeScript files
        files: [
            '*.ts',
            '*.tsx',
        ],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/no-var-requires': 'error',
        }
    }, {
        // specific rules for test files
        files: [
            '*test.js',
            '*test.ts',
            '*test.tsx',
        ],
        rules: {
            'react/jsx-props-no-spreading': 'off'
        }
    }],
};
