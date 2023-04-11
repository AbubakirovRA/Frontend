// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

// Для вывода значений из объекта в консоль можно использовать следующие способы:

// 1. Использовать обычный доступ к свойствам объекта через оператор точки(.) или квадратные скобки([]):
console.log(post.author); // "John"
console.log(post.comments[0].rating.dislikes); // 2
console.log(post.comments[1].userId); // 5
console.log(post.comments[1].text); // "lorem ipsum 2"

// 2. Использовать деструктуризацию объекта для извлечения значений:
const { author, comments } = post;
console.log(author); // "John"
console.log(comments[0].rating.dislikes); // 2
console.log(comments[1].userId); // 5
console.log(comments[1].text); // "lorem ipsum 2"

// 3. Использовать методы объекта для извлечения значений, например, метод Object.values():
console.log(Object.values(post)[0]); // "John"
console.log(Object.values(post.comments[0].rating)[1]); // 2
console.log(Object.values(post.comments[1])[0]); // 5
console.log(Object.values(post.comments[1])[1]); // "lorem ipsum 2"

// 4. Использовать метод JSON.stringify() для преобразования объекта в строку 
// и последующего поиска значений в этой строке с помощью регулярных выражений:
const postStr = JSON.stringify(post);
const authorMatch = postStr.match(/"author":\s*"(.+?)"/);
const dislikesMatch = postStr.match(/"dislikes":\s*(\d+)/);
const userIdMatch = postStr.match(/"userId":\s*(\d+)/);
const textMatch = postStr.match(/"text":\s*"(.+?)"/);

console.log(authorMatch[1]); // "John"
console.log(dislikesMatch[1]); // 2
console.log(userIdMatch[1]); // 5
console.log(textMatch[1]); // "lorem ipsum 2"

