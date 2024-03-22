module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'airbnb'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  overrides: [
    {
      files: ['vite.config.ts'],
      // Other specific configurations for this file
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.ts', 'tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'react/prop-types': 'off',
    'max-classes-per-file': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'global-require': 'off',
    'no-param-reassign': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    '@typescript-eslint/no-explicit-any': 2,
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'no-alert': 'error',
    'eol-last': 'error',
    semi: 'error',
    'no-console': 'error',
  },
};
