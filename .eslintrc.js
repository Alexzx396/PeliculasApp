module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescrip-eslint/parser',
  plugin: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-shadow ': 'off',
      },
    },
  ],
};
