// password-generator.js

const crypto = require('crypto');

// Функция для генерации случайного числа в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для создания пароля
function generatePassword(length, options = { letters: true, numbers: true, symbols: true }) {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let characters = '';

    // Добавляем символы в зависимости от настроек
    if (options.letters) {
        characters += lowercaseLetters + uppercaseLetters;
    }
    if (options.numbers) {
        characters += numbers;
    }
    if (options.symbols) {
        characters += symbols;
    }

    if (characters.length === 0) {
        throw new Error('Необходимо выбрать хотя бы один тип символов.');
    }

    // Генерируем пароль
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = getRandomInt(0, characters.length - 1);
        password += characters.charAt(randomIndex);
    }

    return password;
}

module.exports = generatePassword;