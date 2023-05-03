module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 0,
    quotes: 0,
    'comma-dangle': 0,
    'no-multiple-empty-lines': 0,
    'no-unused-vars': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-duplicates': 0,
    'class-methods-use-this': 0,
    'no-console': 0,
    'react/no-this-in-sfc': 0,
    'react/no-unused-class-component-methods': 0,
  },
};
