module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'react-refresh'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-explicity-any': 0,
    '@typescript-eslint/prefer-as-const': 2,
    '@typescript-eslint/no-empty-interface': 2,
    '@typescript-eslint/no-useless-escape': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
  },
  ignorePatterns: ['node_modules', 'build', 'playwright-report', 'dist'],
}
