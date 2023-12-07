// npm install express fs - установка express

const express = require('express');
const fs = require('fs/promises');

const app = express();
const PORT = 3000;
const DATA_FILE = 'users.json';

app.use(express.json());

// Middleware для проверки существования файла с данными
const checkDataFile = async (req, res, next) => {
    try {
        await fs.access(DATA_FILE);
        const data = await fs.readFile(DATA_FILE, 'utf-8');

        if (!data.trim()) {
            await fs.writeFile(DATA_FILE, '{"users": []}');
        }

        next();
    } catch (error) {
        console.error('Error in checkDataFile:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Получение всех пользователей
app.get('/users', checkDataFile, async (req, res) => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        const jsonData = JSON.parse(data);

        if (!jsonData.hasOwnProperty('users') || !Array.isArray(jsonData.users)) {
            return res.status(500).send('Internal Server Error: Invalid data format');
        }

        const users = jsonData.users;
        res.json(users);
    } catch (error) {
        console.error('Error in GET /users:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Получение пользователя по ID
app.get('/users/:id', checkDataFile, async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        const jsonData = JSON.parse(data);
        const users = jsonData.users;
        const user = users.find((u) => u.id === userId);

        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// Создание нового пользователя
app.post('/users', checkDataFile, async (req, res) => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        const usersData = JSON.parse(data);

        // Проверка, что в теле запроса есть массив с ключом "users"
        if (!req.body.hasOwnProperty('users') || !Array.isArray(req.body.users)) {
            return res.status(400).send('Bad Request: Missing or invalid "users" field');
        }

        const newUsers = req.body.users;

        // Проверка обязательных полей в каждом пользователе
        const requiredFields = ['name', 'age'];

        for (const newUser of newUsers) {
            // Генерация уникального ID (просто для примера)
            newUser.id = usersData.users.length + 1;

            for (const field of requiredFields) {
                if (!newUser.hasOwnProperty(field)) {
                    return res.status(400).send(`Bad Request: Missing field "${field}"`);
                }
            }
        }

        // Добавление новых пользователей в существующий массив
        usersData.users.push(...newUsers);

        await fs.writeFile(DATA_FILE, JSON.stringify(usersData, null, 2));

        res.json({ users: newUsers });
    } catch (error) {
        console.error('Error in POST /users:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Обновление данных существующего пользователя
app.put('/users/:id', checkDataFile, async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
        // Чтение данных из файла
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        const jsonData = JSON.parse(data);

        // Поиск пользователя по ID
        const userIndex = jsonData.users.findIndex((u) => u.id === userId);

        if (userIndex !== -1) {
            // Проверка наличия корректных данных в теле запроса
            if (!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('age')) {
                return res.status(400).send('Bad Request: Missing name or age field');
            }

            // Обновляем только обязательные поля
            jsonData.users[userIndex].name = req.body.name;
            jsonData.users[userIndex].age = req.body.age;

            // Запись обновленных данных в файл
            await fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2));

            // Отправка обновленных данных в ответ
            res.json(jsonData.users[userIndex]);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// Удаление пользователя
app.delete('/users/:id', checkDataFile, async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        const jsonData = JSON.parse(data);
        let users = jsonData.users;

        const index = users.findIndex((u) => u.id === userId);

        if (index !== -1) {
            const deletedUser = users.splice(index, 1)[0];
            await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2));
            res.json(deletedUser);
        } else {
            console.log(`User with id ${userId} not found.`);
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error('Error in DELETE /users/:id:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
