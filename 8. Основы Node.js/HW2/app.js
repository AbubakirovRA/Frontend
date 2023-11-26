// app.js

const generatePassword = require('./password-generator');

// Пример использования библиотеки
const password = generatePassword(12, { letters: true, numbers: true, symbols: true });
console.log('Сгенерированный пароль:', password);