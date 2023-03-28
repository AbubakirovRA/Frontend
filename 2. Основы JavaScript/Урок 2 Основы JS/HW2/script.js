function task1() {
    // ввод значений пользователя
    let num1 = Number(prompt('Введите первое значение num1: '));
    let num2 = Number(prompt('Введите второе значение num2: '));

    //Проверка условий с помощью тернарного оператора
    alert(num1 <= 1 ? "Условие num1 <= 1 выполняется" : "Условие num1 <= 1 не выполняется ");
    alert(num2 >= 3 ? "Условие num2 >= 3 выполняется" : "Условие num2 >= 3 не выполняется ");
}

function task2() {
    // объявление и инициализация переменной test
    let test = true;

    //проверка условй при помощи тернарного оператора
    console.log(test === true ? '+++' : '---');
}

function task3() {
    let day = 0;

    //Ввод пользователя
    while (day < 1 || day > 31) {
        day = Number(prompt("Введите число месяца в диапазоне от 1 до 31: "));
    }

    //Проверка декады
    if ((day % 10) <= 1) {
        document.write("Дата входит в первую декаду");
    } else if (1 < (day % 10) <= 2) {
        document.write("Дата входит во вторую декаду");
    } else {
        document.write("Дата входит в третью декаду");
    }
}

function task4() {
    let userDigit = -1; //Ввод пользователя
    let countOfDigit = 0; //счетчик разрядов
    let remainder = 0; //остаток от деления на 10
    let str = "";
  
    //Ввод пользователя
    while (userDigit < 0 || userDigit % 1 !== 0) { //проверка ввода пользователя
      userDigit = Number(prompt("Введите целое положительное число: "));
    }
    
    let str1 = 'В числе ' + userDigit + ' количество ';

    //Нахождение сотен, десятков, единиц
    while (userDigit > 0) {
      remainder = userDigit % 10;
      switch (countOfDigit) {
        case 0:
          str = ', единиц: ' + remainder;
          break;
        case 1:
          str = ', десятков: ' + remainder + str;
          break;
        case 2:
          str = ' сотен: ' + remainder + str;
          break;
      }
      userDigit = Math.floor(userDigit / 10);
      countOfDigit++;
    }
  
    //Вывод строки
    document.write(str1 + str);
    
  }