// .eslintrc.js

module.exports = {
  env: {
      browser: true,
      es2021: true,
  },
  extends: [
      'eslint:recommended',
      'plugin:prettier/recommended', // Включаем Prettier
  ],
  parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
  },
  rules: {
      // Ваши правила ESLint
      'prettier/prettier': 'error', // Ошибка, если код не соответствует правилам Prettier
  },
};
