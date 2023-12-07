homework4

Команды API из PowerShell:
Просмотр всех пользователей - curl http://localhost:3000/users/;
Просмотр пользователя по номеру id - curl http://localhost:3000/users/id;
Добавление нового пользователя - Invoke-WebRequest -Uri http://localhost:3000/users -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"users": [{"name": "John Connor", "age": 29}]}';
Изменение данных пользователя - Invoke-WebRequest -Uri http://localhost:3000/users/id -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"name": "John Connor100", "age": 29}'
Удаление пользователя - Invoke-WebRequest -Uri http://localhost:3000/users/id -Method DELETE;
