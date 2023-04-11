/*Задание 2 (тайминг 25 минут)
1. Даны два массива: первый с названиями дней недели, а второй - с
их порядковыми номерами:
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
С помощью цикла создайте объект, ключами которого будут
названия дней, а значениями - их номера.*/

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

const dayOfNumbers = {};

if (arr1.length === arr2.length){
    for (let i = 0; i < arr1.length; i++){
        dayOfNumbers[arr1[i]] = arr2[i];
    }
} else {
    console.log('Массивы разной длины');
}

console.log(dayOfNumbers);

/*2. const obj = {x: 1, y: 2, z: 3};
Переберите этот объект циклом и возведите каждый элемент
этого объекта в квадрат.*/

// const obj = {x: 1, y: 2, z: 3};

// for (let key in obj){
//     obj[key] = obj[key]**2;
// }

// console.log(obj);

const obj = {x: 1, y: 2, z: 3};

const keys = Object.keys(obj);

for (const key in obj) {
  const key = keys[i];
  obj[key] = obj[key]**2;
}

const keys1 = Object.keys(obj).forEach(key => {
    obj[key] = obj[key]**2;    
});

console.log(obj);


