/*Задание 3 (тайминг 15 минут)
const obj = {
key1: {
key1: 1,
key2: 2,
key3: 3,
},
key2: {
key1: 4,
key2: 5,
key3: 6,
},
key3: {
key1: 7,
key2: 8,
key3: 9,
},
}
Найдите сумму элементов приведенного объекта.*/

const obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

let sum = 0;

for (let key1 in obj) {
    for (let key2 in obj[key1]) {
        sum += obj[key1][key2];
    }
}

console.log(sum);

const sum1 = Object.values(obj).reduce((acc, cur) => {
    const values = Object.values(cur);
    const subSum = values.reduce((subAcc, subCur) => subAcc + subCur, 0);
    return acc + subSum;
}, 0);

console.log(sum1);

/*Создать объект треугольник
Который будет содержать 
2 стороны равнобедренного треугольника
Создать метод, который считает площадь треугольника.*/

// Формула площади - a/2 * sqrt(b**2 - (a**2/4)

const triangle = {
    a: 5,
    b: 5,

    getArea: function () {
        return 0.5 * triangle.a * Math.sqrt(triangle.b ** 2 - (triangle.a ** 2 / 4));
    }
};

console.log(triangle.getArea());