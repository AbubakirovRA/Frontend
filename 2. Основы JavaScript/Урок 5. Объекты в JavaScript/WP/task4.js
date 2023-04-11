/*Создайте объект riddles 
Добавьте свойства question, answer
создайте метод askQuestion который задает вопрос question и сравнивает ответ с answer
Если ответил неверно, то в консоль выводится текст: “вы проиграли”
* По желанию, создать 2 подсказки, если пользователь ответил неверно*/

const riddles = {
    question: "Два кольца - один конец, что это?",
    answer: "Парашют",
    hint1: "Большой зонтик",
    hint2: "тормоз для истребителя",

    askQuestion() {
        const userAnswer = prompt(this.question);
        let counter = 0;
        if (userAnswer === this.answer) {
            alert("Ты выиграл!");
        } else {
            while (counter < 2) {
                if (counter === 0) {
                    counter++;
                    console.log("Подсказка №1", this.hint1);
                } else if (counter === 1){
                    counter++;
                    console.log("Подсказка №2",this.hint2);
                } else {
                    console.log("Проиграл!");
                }
            }
        }
    }
}

riddles.askQuestion(); 