// npm install express fs

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
    next();
  } catch (error) {
    // Если файл не существует, создаем его с пустым массивом
    await fs.writeFile(DATA_FILE, '[]');
    next();
  }
};

// Получение всех пользователей
app.get('/users', checkDataFile, async (req, res) => {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const users = JSON.parse(data);
    res.json(users);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Получение пользователя по ID
app.get('/users/:id', checkDataFile, async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const users = JSON.parse(data);
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
    const users = JSON.parse(data);
    const newUser = req.body;

    // Генерация уникального ID (просто для примера)
    newUser.id = users.length + 1;

    users.push(newUser);
    await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2));

    res.json(newUser);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Обновление пользователя
app.put('/users/:id', checkDataFile, async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const users = JSON.parse(data);
    const updatedUser = req.body;

    const index = users.findIndex((u) => u.id === userId);

    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2));
      res.json(users[index]);
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
    let users = JSON.parse(data);

    const index = users.findIndex((u) => u.id === userId);

    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
      await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2));
      res.json(deletedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});