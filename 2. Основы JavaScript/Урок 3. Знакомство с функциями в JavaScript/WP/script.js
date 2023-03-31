const greet = (name, surname, age) => `Привет ${name} ${surname} с возрастом ${age}`;

function showGreeting() {
    const name = "Иван";
    const surname = "Петров";
    const age = 25;
    const greetingElement = document.getElementById("greeting");
    greetingElement.innerText = greet(name, surname, age);
}

function square(num) {
    return num ** 2;
}

function checkPositive(num) {
    if (num > 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}



const sum = (num1, num2, num3) => console.log(num1 + num2 + num3);

let param1 = 1;
let param2 = 2;
let param3 = 3;

console.log(sum(param1, param2, param3));


const sqrt = x => x ** 0.5;
const res = sqrt(3) + sqrt(4);
console.log(res);

const min = (num1, num2) => Number(num1) < Number(num2) ? Number(num1) : Number(num2);
const result = min(5, 3);
console.log(result);

// Функция для определения дня недели:
const getDayOfWeek = (num) => {
    const daysOfWeek = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
    ];

    if (num < 1 || num > 7) {
        return 'Некорректный день недели';
    }

    return daysOfWeek[num - 1];
}

console.log(getDayOfWeek(1)); // Воскресенье
console.log(getDayOfWeek(3)); // Вторник
console.log(getDayOfWeek(8)); // Некорректный день недели

//   Функция для определения приветствия в зависимости от времени суток:
const getGreeting = name => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting = '';

    if (currentHour < 6) {
        greeting = 'Доброй ночи';
    } else if (currentHour < 12) {
        greeting = 'Доброе утро';
    } else if (currentHour < 18) {
        greeting = 'Добрый день';
    } else {
        greeting = 'Добрый вечер';
    }

    return `${greeting}, ${name} !`;
}

console.log(getGreeting('Иван')); // Доброй ночи, Иван!