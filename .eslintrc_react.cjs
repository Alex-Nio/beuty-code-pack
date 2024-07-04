module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['prettier', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // СТИЛЬ РАЗРЫВА СТРОК
    'linebreak-style': ['error', 'unix'], // Устанавливает стиль разрыва строки в формат Unix (LF).

    // ОТСУТСТВИЕ CONSOLE.LOG
    'no-console': 'off', // Разрешает использование console.log в коде.

    // ОТСУТСТВИЕ DEBUGGER
    'no-debugger': 'error', // Запрещает использование оператора debugger в коде.

    // СКОБКИ В СТРЕЛОЧНЫХ ФУНКЦИЯХ
    'arrow-parens': ['error', 'always', { requireForBlockBody: true }], // Требует использование скобок в стрелочных функциях всегда.

    // ОТКЛЮЧЕНИЕ УНАРНЫХ ОПЕРАТОРОВ ++ И --
    'no-plusplus': 'off', // Разрешает использование унарных операторов ++ и --.

    // ОТКЛЮЧЕНИЕ ОБЯЗАТЕЛЬНОГО ВЫЗОВА SUPER() В КОНСТРУКТОРАХ
    'constructor-super': 'off', // Отключает требование вызова super() в конструкторах производных классов.

    // ГРУППИРОВКА СЛОЖНЫХ ВЫРАЖЕНИЙ
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ], // Заключает сложные выражения в круглые скобки для ясности.

    // ОТКЛЮЧЕНИЕ ПРАВИЛА О РАСШИРЕНИИ ФАЙЛОВ В ПУТИ ИМПОРТА
    'import/extensions': 'off', // Отключает правило обязательного указания расширения файла в пути импорта.

    // ОТКЛЮЧЕНИЕ ПРАВИЛА О ПРЕДПОЧТЕНИИ ЭКСПОРТА ПО УМОЛЧАНИЮ
    'import/prefer-default-export': 'off', // Отключает предпочтение экспорта по умолчанию.

    // ОТСУТСТВИЕ НЕИСПОЛЬЗУЕМЫХ ВЫРАЖЕНИЙ
    'no-unused-expressions': 'error', // Запрещает неиспользуемые выражения.

    // ОТКЛЮЧЕНИЕ ЗАПРЕТА ПЕРЕНАЗНАЧЕНИЯ ПАРАМЕТРОВ
    'no-param-reassign': 'off', // Разрешает переназначение параметров функции.

    // ДЕСТРУКТУРИЗАЦИЯ
    'prefer-destructuring': [
      'error',
      {
        array: true, // Требует деструктуризацию массивов.
        object: true, // Требует деструктуризацию объектов.
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // ЗАПРЕТ ПОБИТОВЫХ ОПЕРАТОРОВ, КРОМЕ ~
    'no-bitwise': [
      'error',
      {
        allow: ['~'],
      },
    ],

    // ЗАПРЕТ НЕИСПОЛЬЗУЕМЫХ ПЕРЕМЕННЫХ
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_', // Игнорировать неиспользуемые переменные, начинающиеся с символа '_'.
      },
    ],

    // МАКСИМАЛЬНАЯ ДЛИНА СТРОКИ
    'max-len': [
      'error',
      {
        code: 120, // Устанавливает максимальную длину строки кода в 120 символов.
      },
    ],

    // РАЗРЫВ СТРОК ПОКАЗАНИЯ ФИГУРНЫХ СКОБОК
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          consistent: true,
        },
      },
    ], // Применяет согласованные разрывы строк после открытия и перед закрытием фигурных скобок.

    // ПУСТАЯ СТРОКА МЕЖДУ ЧЛЕНАМИ КЛАССА
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ], // Требует пустую строку между членами класса.

    // ЗАПЯТАЯ В КОНЦЕ ОБЪЕКТОВ И МАССИВОВ
    'comma-dangle': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
  },
};
