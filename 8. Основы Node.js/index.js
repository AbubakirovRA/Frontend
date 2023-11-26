const http = require('http');

// Счетчики просмотров для каждой страницы
let homePageViews = 0;
let aboutPageViews = 0;

// Создание HTTP-сервера
const server = http.createServer((req, res) => {
  // Получение пути запроса
  const path = req.url;

  // Обработка запроса в зависимости от пути
  switch (path) {
    // Обработка домашней страницы
    case '/':
      homePageViews++; // Увеличение счетчика просмотров
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write('<html><body>');
      res.write(`<h1>Добро пожаловать!</h1>`);
      res.write(`<p>Просмотров: ${homePageViews}</p>`);
      res.write('<a href="/about">О проекте</a>');
      res.write('</body></html>');
      res.end();
      break;

    // Обработка страницы "О нас"
    case '/about':
      aboutPageViews++; // Увеличение счетчика просмотров
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write('<html><body>');
      res.write(`<h1>"О проекте"</h1>`);
      res.write(`<p>Просмотров: ${aboutPageViews}</p>`);
      res.write('<a href="/">На домашнюю страницу</a>');
      res.write('</body></html>');
      res.end();
      break;

    // Обработка несуществующих роутов (404)
    default:
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write('<html><body>');
      res.write('<h1>404 Not Found</h1>');
      res.write('<p>Запрошенная страница не найдена</p>');
      res.write('</body></html>');
      res.end();
  }
});

const PORT = 3000;
// Запуск сервера
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});