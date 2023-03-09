// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      plugins: [
        'react',
        '@typescript-eslint',
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'airbnb',
      ],
      rules: {
        indent: [
          'error',
          2,
          {
            SwitchCase: 1,
          },
        ],
        quotes: [
          'error',
          'single',
        ],
        semi: [
          'error',
          'always',
        ],
        'react/function-component-definition': [
          'off',
        ],
        'react/jsx-filename-extension': [
          'off',
        ],
        'linebreak-style': [
          'off',
        ],
        'react/jsx-one-expression-per-line': [
          'off',
        ],
        'react/button-has-type': [
          'off',
        ],
        '@typescript-eslint/ban-types': [
          'off',
        ],
        'import/no-unresolved': [
          'off',
        ],
        'import/extensions': [
          'off',
        ],
        'import/prefer-default-export': [
          'off',
        ],
        'no-shadow': [
          'off',
        ],
        '@typescript-eslint/no-shadow': [
          'error',
        ],
        'no-unused-vars': [
          'off',
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
        ],
        'react/require-default-props': [
          'off',
        ],
        'func-style': [
          'error',
          'declaration',
          { "allowArrowFunctions": true },
        ],
        'func-names': [
          'error',
        ],
        'no-case-declarations': [
          'off',
        ],
        'no-plusplus': [
          'off',
        ],
        'no-continue': [
          'off',
        ],
        'react/jsx-props-no-spreading': [
          'off',
        ],
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
        '@typescript-eslint/no-inferrable-types': [
          'off',
        ],
        'no-array-constructor': [
          'off',
        ],
        yoda: [
          'off',
        ],
      },
    },
  ],
};
