// eslint.config.js

import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        files: ["**/*.js"], // Применяем к всем JavaScript файлам
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module", // Указываем, что используем ES модули
            globals: {
                module: "readonly",  // Указываем, что module является глобальной переменной
                __dirname: "readonly" // Указываем, что __dirname является глобальной переменной
            },
        },
        rules: {
            semi: ["error", "always"], // Требуем точки с запятой
            "no-unused-vars": "warn", // Предупреждаем о неиспользуемых переменных
        },
    },
];
