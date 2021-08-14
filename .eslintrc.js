module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.svelte'],
    },
    extends: [
        'eslint:recommended',
    ],
    env: {
        es6: true,
        browser: true
    },
    plugins: [
        'svelte3',
        '@typescript-eslint'
    ],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    settings: {
       'svelte3/typescript': () => require('typescript'),
    },
};