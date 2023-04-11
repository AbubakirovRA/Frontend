//Задание 1
//Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

//const numbers = {
//keyin1: 1,
//keyin2: 2,
//keyin3: 3,
//keyin4: 4,
//keyin5: 5,
//keyin6: 6,
//keyin7: 7,
//}


const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7
}

// Решение 1
for (const key in numbers) {
  if (numbers[key] >= 3) {
    console.log(`${key}: ${numbers[key]}`);
  }
}

// Решение 2
Object.keys(numbers).forEach((key) => {
  if (numbers[key] >= 3) {
    console.log(`${key}: ${numbers[key]}`);
  }
});

// Решение 3
const keys = Object.keys(numbers);
const values = Object.values(numbers);

for (let i = 0; i < keys.length; i++) {
  if (values[i] >= 3) {
    console.log(`${keys[i]}: ${values[i]}`);
  }
}

// Решение 4 - здесь применена, специально введенная для применения с оператором деструктуризации, 
// конструкция for...of (почему в лекции ее нет?)
for (const [key, value] of Object.entries(numbers)) {
  if (value >= 3) {
    console.log(`Ключ: ${key}, Значение: ${value}`);
  }
}