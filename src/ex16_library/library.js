var id = 1;

function Book (img, title, author, year, rating, price) {
	this.img = img;
	this.title = title;
    this.author = author;
    this.year = year;
	this.rating = rating;
	this.price = price;
	this.id = id;
	id += 1;
    
    var library = document.getElementsByClassName('library')[0];
    console.log(library);
    var book = document.createElement('div');
    book.className = 'book';
    book.id = this.id;
    library.appendChild(book);

    var image = document.createElement('img');
    var link = "img/" + img;
    image.className = 'book__img';
    image.setAttribute("src", link);
    book.appendChild(image);

	var name = document.createElement('div');
	name.className = 'book__name';
    name.innerHTML = title;
    book.appendChild(name);

	var by = document.createElement('div');
	by.className = 'book__author';
    by.innerHTML = 'by ' + author;
    book.appendChild(by);
};

var book01 = new Book('book01.png', 'Jewels of Nizam', 'Geeta Devi', 2017, 5, 150);
var book02 = new Book('book02.png', 'Cakes & Bakes', 'Sanjeev Kapoor', 2001, 4, 99);
var book03 = new Book('book03.png', 'Jamies Kitchen', 'Jamie Oliver', 2010, 5, 70);
var book04 = new Book('book04.png', 'Inexpensive Family Meals', 'Simon Holst', 2005, 2, 0);
var book05 = new Book('book05.png', 'Paleo Slow Cooking', 'Chrissy Gower', 2018, 1, 20);
var book06 = new Book('book06.png', 'Cook Like an Italian', 'Tobie Puttock', 2007, 4, 40);
var book07 = new Book('book07.png', 'Indian Cooking', 'Geeta Devi', 2012, 5, 0);
var book08 = new Book('book08.png', 'Jamie Does', 'Jamie Oliver', 2014, 3, 30);
var book09 = new Book('book09.png', 'Jamies italy', 'Jamie Oliver', 2016, 4, 0);
var book10 = new Book('book10.png', 'Vegetables Cookbook', 'Matthew Biggs', 2009, 5, 50);

    






function set_rate(event, el) {
    // Позиция клика относительно элемента
    event = event || window.event;
    if (event.clientX <= el.clientWidth) {
        var rate=Math.ceil(event.clientX/el.clientWidth*5);
    }
}