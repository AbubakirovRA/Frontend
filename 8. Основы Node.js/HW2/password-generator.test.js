// password-generator.test.js

const generatePassword = require('./password-generator');

describe('generatePassword function', () => {
    test('should generate a password of the specified length', () => {
        const password = generatePassword(8);
        expect(password.length).toBe(8);
    });

    test('should generate a password with letters when specified', () => {
        const password = generatePassword(12, { letters: true });
        expect(/[a-zA-Z]/.test(password)).toBe(true);
    });

    test('should generate a password with numbers when specified', () => {
        const password = generatePassword(12, { numbers: true });
        expect(/\d/.test(password)).toBe(true);
    });

    test('should generate a password with symbols when specified', () => {
        const password = generatePassword(12, { symbols: true });
        expect(/[!@#$%^&*()-_=+[\]{}|;:,.<>?]/.test(password)).toBe(true);
    });

    // Добавьте другие тесты по необходимости
});