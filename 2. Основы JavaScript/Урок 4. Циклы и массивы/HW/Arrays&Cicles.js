//Задание 1
//Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
//0 – это ноль
//1 – нечетное число
//2 – четное число
//3 – нечетное число
//…
//10 – четное число

console.log("0 - это ноль");
for (let i = 1; i <= 10; i++) {
  console.log(i % 2 === 0 ? i + " - четное число" : i + " - нечетное число");
}

//Задание 2
//Дан массив [1, 2, 3, 4, 5, 6, 7]
//Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);

console.log(arr);

//Задание 3
//Используя Math.random() вам необходимо генерировать цифры от 0 до 9, 
//и создать массив состоящий из 5 таких элементов
//1. Рассчитать сумму элементов этого массива
//2. Найти минимальное число
//3. Найти есть ли в этом массиве число 3

const randomArray = Array(5);
let sumArrayNumbers = 0;
let minArrayNumber = Infinity;
let amountThreeDigits = 0;

for (let i = 0; i < 5; i++){
	randomArray[i] = Math.floor(Math.random() * 10);
	sumArrayNumbers += randomArray[i];
	minArrayNumber = randomArray[i] < minArrayNumber ? minArrayNumber = randomArray[i] : minArrayNumber;
	amountThreeDigits += randomArray[i] === 3 ? 1 : 0;
}

console.log(randomArray);
console.log("Сумма элементов этого массива " + sumArrayNumbers);
console.log("Минимальное число " + minArrayNumber);
console.log("В массиве " + amountThreeDigits + "троек");

//С помощью методов массива, reduce и стрелочных функций:

const randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
const sumArrayNumbers = randomArray.reduce((sum, num) => sum + num, 0);
const minArrayNumber = Math.min(...randomArray); //нахождение минимального значения в массиве randomArray с помощью спред-оператора `...` 
						 //который распаковывает элементы массива и передает их как аргументы методу Math.min()
const amountThreeDigits = randomArray.filter(num => num === 3).length;

console.log(randomArray);
console.log(`Сумма элементов этого массива: ${sumArrayNumbers}`);
console.log(`Минимальное число: ${minArrayNumber}`);
console.log(`В массиве ${amountThreeDigits} троек`);

//Задание 4
//Необходимо вывести горку в консоль (используя цикл for), 
//как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5
//x
//xx
//xxx
//xxxx
//xxxxx

for (let i = 1; i <= 20; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "x";
  }
 
  console.log(row);
}

//с помощью String.prototype.repeat():

for (let i = 0; i <= 20; i++){
	console.log("x".repeat(i));
}
