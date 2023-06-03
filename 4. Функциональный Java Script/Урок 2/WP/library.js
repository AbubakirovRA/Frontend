/*
Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title(название) - строка, название книги.
Свойство author(автор) - строка, имя автора книги.
Свойство pages(количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге(название, автор и количество страниц).
*/

class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo(){
        console.log(`Название ${this.title}, автор ${this.author}, в книге ${this.pages} страниц`);
    }
}

const myBook = new Book("Война и мир", "Лев Толстой", 1300);
myBook.displayInfo();

