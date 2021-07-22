module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['babel', 'react-hooks', 'jsx-a11y'],
    rules: {
        //
        // general
        //

        // enforces a minimum identifier length convention
        'id-length': [
            'error',
            {
                min: 3,
                exceptions: ['Id', 'id', 'of', 'Of'],
            },
        ],
        // disallows the renaming of import, export and destructured assignments to the same name
        'no-useless-rename': 'error',
        'max-len': 'off',
        'linebreak-style': 'off',
        'import/extensions': [2, 'never'],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.test.ts',
                    '**/*.test.tsx',
                    '**/tests/*.js',
                    '**/*.dev.js',
                    '**/*.dev.ts',
                ],
            },
        ],
        'import/no-unresolved': [
            2,
            {
                ignore: ['\\.(png|jpg|svg)\\?(lqip)$'],
            },
        ],
        'import/prefer-default-export': 'off',
        radix: 'off',
        'no-plusplus': 'off',

        //
        // functions
        //

        'arrow-parens': ['error', 'as-needed'],
        // requires all immediately-invoked function expressions to be wrapped in parenthesis
        'wrap-iife': ['error', 'inside'],

        //
        // spacings
        //

        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    minProperties: 1,
                },
                ImportDeclaration: 'never',
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 3,
                },
            },
        ],
        'object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: false,
            },
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        // spacing before and after semicolons
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        // spacing before and after colons in switch statements
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false,
            },
        ],
        'rest-spread-spacing': ['error'],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],

        //
        // comments
        //

        'capitalized-comments': [
            'error',
            'never',
            {
                ignorePattern: 'TODO:',
            },
        ],
        'line-comment-position': [
            'error',
            {
                position: 'above',
            },
        ],
        'multiline-comment-style': ['warn', 'separate-lines'],

        //
        // react
        //

        'react/jsx-no-bind': [
            2,
            {
                allowArrowFunctions: true,
            },
        ],
        // since we already use typescript , this just does not give any warning if prop-types are not even declared
        'react/prop-types': [
            2,
            {
                skipUndeclared: true,
            },
        ],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.tsx', '.ts'],
            },
        ],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-first-prop-new-line': [1, 'multiline-multiprop'],
        'react/jsx-sort-props': [
            1,
            {
                callbacksLast: true,
                shorthandFirst: true,
                reservedFirst: true,
            },
        ],
        'react/jsx-props-no-spreading': 'error',
        'react/jsx-curly-spacing': [
            2,
            {
                when: 'never',
                children: true,
            },
        ],

        //
        // a11y
        //
        'jsx-a11y/label-has-associated-control': 'off',

        //
        // prettier config
        //
        'prettier/prettier': [
            'error',
            {
                printWidth: 100,
                singleQuote: true,
                trailingComma: 'es5',
                tabWidth: 4,
                semi: true,
                jsxSingleQuote: false,
                jsxBracketSameLine: false,
                arrowParens: 'avoid',
                endOfLine: 'auto',
            },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    overrides: [
        {
            // specific rules for TypeScript files
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
            },
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:import/typescript',
            ],
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/no-explicit-any': 'error',
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'interface',
                        format: ['PascalCase'],
                        custom: {
                            regex: '^I[A-Z,a-z]',
                            match: false,
                        },
                    },
                ],
                '@typescript-eslint/explicit-function-return-type': 'error',
                '@typescript-eslint/no-var-requires': 'error',
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': ['error'],
                'no-shadow': 'off',
                '@typescript-eslint/no-shadow': ['error'],
                '@typescript-eslint/indent': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/ban-ts-ignore': 'off',
            },
        },
        {
            // specific rules for test files
            files: ['*test.js', '*test.ts', '*test.tsx'],
            rules: {
                'react/jsx-props-no-spreading': 'off',
            },
        },
    ],
};
