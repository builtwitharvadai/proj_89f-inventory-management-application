/** @type {import('eslint').Linter.LegacyConfig} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    es2022: true,
    node: true,
    browser: true,
  },
  ignorePatterns: ['dist/', '**/dist/', 'build/', 'node_modules/', 'coverage/'],
  rules: {
    'no-console': 'warn',
    // TypeScript handles unused variables more accurately than the base rule
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'after-used', argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
  },
};
