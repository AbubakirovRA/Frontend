// Задание 1
// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран
// каждый из этих элементов.

let arr1 = [1, 2, 3];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом
// массиве.
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.random());
}
console.log(arr.length);


// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
// первого элемента число 1, вместо второго - 2, вместо
// третьего - 3.

let arr3 = ['a', 'b', 'c'];
arr3[0] = 1;
arr3[1] = 2;
arr3[2] = 3;
console.log(arr3);

//Задание 2

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
// увеличьте каждый элемент массива на единицу.
let arr5 = [1, 2, 3];
for (let i = 0; i < arr5.length; i++) {
    arr5[i]++;
}
console.log(arr5);

// 2. Узнайте длину следующего массива:
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
const arr2 = [];
arr2[3] = 'a';
arr2[8] = 'b';
console.log(arr2.length);

// 3. Пусть дан такой массив:
// const arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.
const arr3 = [1, 2, 3];
arr3.push(4, 5);
console.log(arr3);



// 4. Создайте произвольный массив из 5 элементов, Удалите из него два
// элемента. Проверьте, какое станет значение свойства length после
// этого.
const arr4 = ['apple', 'banana', 'cherry', 'orange', 'grape'];
arr4.splice(1, 2);
console.log(arr4.length);


// 5* создать функцию которая создает массив с произвольными элементами, 
// в функцию передаем сколько должно быть элементов в массиве через Math.Random()

function createRandomArray(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.random());
    }
    return arr;
}

let randomArr = createRandomArray(10);
console.log(randomArr);


// Задание 3

// С помощью цикла for выведите в консоль числа от 11 до 33.

for (let i = 11; i < 33; i++) {
    console.log(i);

}

// С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
for (let i = 11; i < 99; i++) {
    if (!i % 2) {
        console.log(i);
    }
}


// С помощью цикла for выведите в консоль числа от 100 до 0.
for (let i = 100; i >= 0; i--) {
    console.log(i);

}

// Дано число num с неким начальным значением. 
// Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. 
// Какое число получится? Посчитайте количество итераций, необходимых для этого.

let num = 200;
let count = 0
while (num <= 1000) {
    num *= 3;
    count++;
}

console.log(count);




//Задание 4

// Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но
// меньше 10.
const arr = [2, 5, 9, 15, 1, 4];
const filteredArr = arr.reduce((acc, curr) => {
    if (curr > 3 && curr < 10) {
        acc.push(curr);
    }
    return acc;
}, []);
console.log(filteredArr);

// 2. Найдите сумму четных чисел от 2 до 100.
let sum = 0;
for (let i = 0; i <= 100; i += 2) {
    sum += i;
}

console.log(sum);

// 3. Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.
const arr2 = [2, 5, 9, 3, 1, 4];
const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);
console.log(sum2); // 24

// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str = (arr3.reduce((acc, num) => acc + '-' + num, '-') + '-').slice(1);

console.log(str);

// 5. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
// который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0.
// После этого цикл должен завершить свою работу.
const arr3 = [2, 5, 9, 0, 3, 1, 4];

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === 0) {
        break;
    }
    console.log(arr3[i]);
}

//вариант forEach
const arr12= [2, 5, 9, 0, 3, 1, 4];

arr12.forEach((item) => {
  if (item === 0) {
    return false; // эквивалентно break
  }
  
  console.log(item);
});



//Задание 5

// Пусть у нас дан массив состоящий из 10 элементов с
// произвольными числами. Давайте переберем его циклом и числа,
// которые делятся на 2, возведем в квадрат и выведем в консоль, а
// числа, которые делятся на 3, возведем в куб и выведем в консоль.

const arr22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr22.forEach((num) => {
  if (num % 2 === 0) {
    const square = num ** 2;
    console.log(`${num} в квадрате равно ${square}`);
  }
  if (num % 3 === 0) {
    const cube = num ** 3;
    console.log(`${num} в кубе равно ${cube}`);
  }
});

// 2.  С помощью двух вложенных циклов выведите на экран следующую строку:[
    // [1, 2, 3],
    // [4, 5, 6]    ]

const array = [];
let counter = 1;

for (let i = 0; i < 2; i++) {
  const subarray = [];
  for (let j = 0; j < 3; j++) {
    subarray.push(counter++);
  }
  array.push(subarray);
}

console.log(array);


// 3. Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.
const arr3 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count1 = 0;
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === 3) {
        count1++;
    }
}
console.log(count1);

//вариант forEach
const arr31 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count11 = 0;

arr31.forEach((num) => {
  if (num === 3) {
    count11++;
  }
});

console.log(count11);

// 1. Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]
const arr6 = [1, 2, 3, 4, 5];
arr6.splice(1, 2);
console.log(arr6);





















