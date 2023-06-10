function getUsers(url) {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log();('Ошибка при выполнении запроса:', response.status);
            }
        });
}

function printUsersList(users) {
    const userListEl = document.querySelector('.userList');
    userListEl.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        userListEl.appendChild(li);
    });
}

function sortUsersByName() {
    const userListEl = document.querySelector('.userList');
    const users = Array.from(userListEl.children);
    const sortedList = users.sort((a, b) => a.textContent.localeCompare(b.textContent));

    userListEl.innerHTML = '';
    sortedList.forEach(user => {
        userListEl.appendChild(user);
    });
}

const url = 'https://jsonplaceholder.typicode.com/users';
getUsers(url)
    .then(users => {
        printUsersList(users);
    });

const sortButton = document.querySelector('.sortButton');
sortButton.addEventListener('click', sortUsersByName);