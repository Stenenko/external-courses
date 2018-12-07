var id = 1;

//library constructor
function Book (img, title, author, year, rating, price) {
	this.img = img;
	this.title = title;
    this.author = author;
    this.year = year;
	this.rating = rating;
	this.price = price;
	this.id = id;
	id++;
    
    var library = document.getElementsByClassName('library')[0];
    var book = document.createElement('div');
    book.className = 'book';
    book.id = 'book' + this.id;
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

    var rate = document.createElement('div');
    rate.className = 'book__rate';
    book.appendChild(rate);

    for (var i = 0; i < 5; i++) {
		var star = document.createElement('div');
		star.className = 'book__star';
		/*star.classList.add('b' + books.length);*/
		rate.appendChild(star);
		/*star.addEventListener('click', 
			function (event) {
				var target = event.target;
				Book.prototype.rateRefresh(that, target, starsWrapper);
			}
		);*/
		if (i + 1 <= rating) {
			star.classList.add('book__star--active');
		}
    }
    var rateStar = document.querySelectorAll('.book__star');
    
    rate.addEventListener('click', function(e){
        var target = e.target;
        if(target.classList.contains('book__star')){
            removeClass(rateStar, 'book__star--current');
            target.classList.add('book__star--active', 'book__star--current');
        }
    });
    rate.addEventListener('mouseover', function(e){
        var target = e.target;
        if(target.classList.contains('book__star')){
            removeClass(rateStar, 'book__star--active');
            target.classList.add('book__star--active');
            mouseOverActive(rateStar);
        }
    });
    rate.addEventListener('mouseout', function(){
        addClass(rateStar, 'book__star--active');
        mouseOutActive(rateStar);
    });
    function removeClass(arr) {
        for(var i = 0; i < arr.length; i++) {
            for(var j = 1; j < arguments.length; j++){
                rateStar[i].classList.remove(arguments[j]);
            }
        }
    }
    function addClass(arr) {
        for(var i = 0; i < arr.length; i++) {
            for(var j = 1; j < arguments.length; j++){
                rateStar[i].classList.add(arguments[j]);
            }
        }
    }
    function mouseOverActive(arr){
        for(var i = 0; i < arr.length; i++){
            if(arr[i].classList.contains('book__star--active')){
                break;
            }else{
                arr[i].classList.add('book__star--active');
            }
        }
    }
    function mouseOutActive(arr){
        for(var i = arr.length-1; i >= 0; i--){
            if(arr[i].classList.contains('book__star--current')){
                break;
            }else{
                arr[i].classList.remove('book__star--active');
            }
        }
    }

};

//adding books
var allBooks = [new Book('book01.png', 'Jewels of Nizam', 'Geeta Devi', 2017, 3, 150),
                new Book('book02.png', 'Cakes & Bakes', 'Sanjeev Kapoor', 2001, 4, 99),
                new Book('book03.png', 'Jamies Kitchen', 'Jamie Oliver', 2010, 2, 70),
                new Book('book04.png', 'Inexpensive Family Meals', 'Simon Holst', 2005, 2, 0),
                new Book('book05.png', 'Paleo Slow Cooking', 'Chrissy Gower', 2018, 1, 20),
                new Book('book06.png', 'Cook Like an Italian', 'Tobie Puttock', 2007, 4, 40),
                new Book('book07.png', 'Indian Cooking', 'Geeta Devi', 2012, 5, 0),
                new Book('book08.png', 'Jamie Does', 'Jamie Oliver', 2014, 3, 30),
                new Book('book09.png', 'Jamies italy', 'Jamie Oliver', 2016, 4, 0),
                new Book('book10.png', 'Vegetables Cookbook', 'Matthew Biggs', 2009, 5, 50)];

//adding a new book
var addButton = document.getElementsByClassName('add__btn')[0];
addButton.addEventListener('click', bookAdd);

function bookAdd() {
    var formBg = document.createElement('div');
    formBg.className = 'form-bg';
    document.body.appendChild(formBg);

	var formWrapper = document.createElement('div');
    formWrapper.className = 'form-wrapper';
    document.body.appendChild(formWrapper);
	
	var form = document.createElement('form');
	form.id = 'book-add';
    form.setAttribute('action', '#');
    formWrapper.appendChild(form);

	var bookImg = document.createElement('div');
	bookImg.innerHTML = 'Book cover: ';
	form.appendChild(bookImg);

	var imgInput = document.createElement('input');
	imgInput.setAttribute('type', 'text');
	imgInput.setAttribute('required', '');
    form.appendChild(imgInput);

	var bookTitle = document.createElement('div');
	bookTitle.innerHTML = 'Title: ';
	form.appendChild(bookTitle);

	var titleInput = document.createElement('input');
	titleInput.setAttribute('type', 'text');
	titleInput.setAttribute('required', '');
    form.appendChild(titleInput);

	var bookAuthor = document.createElement('div');
	bookAuthor.innerHTML = 'Author: ';
	form.appendChild(bookAuthor);

	var authorInput = document.createElement('input');
	authorInput.setAttribute('type', 'text');
	authorInput.setAttribute('required', '');
    form.appendChild(authorInput);

    var bookYear = document.createElement('div');
	bookYear.innerHTML = 'Year: ';
	form.appendChild(bookYear);	

	var yearInput = document.createElement('input');
	yearInput.setAttribute('type', 'number');
	yearInput.setAttribute('required', '');
    form.appendChild(yearInput);

	var bookRate = document.createElement('div');
	bookRate.innerHTML = 'Rate: ';
	form.appendChild(bookRate);

	var rateInput = document.createElement('input');
	rateInput.setAttribute('type', 'number');
    rateInput.setAttribute('min', '1');
    rateInput.setAttribute('max', '5');
    rateInput.setAttribute('required', '');
    form.appendChild(rateInput);

	var bookPrice = document.createElement('div');
	bookPrice.innerHTML = 'Price: ';
	form.appendChild(bookPrice);	

	var priceInput = document.createElement('input');
	priceInput.setAttribute('type', 'number');
	priceInput.setAttribute('required', '');
    form.appendChild(priceInput);

	var submit = document.createElement('input');
	submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Add Book');
    form.appendChild(submit);

	formBg.addEventListener('click', function (){
		document.body.removeChild(formBg);
		document.body.removeChild(formWrapper);
	});

	form.addEventListener('submit', 
		function(){
			allBooks.push(
				new Book(imgInput.value, 
					titleInput.value, 
                    authorInput.value,
                    yearInput.value,
					rateInput.value,   
                    priceInput.value)
            );
            document.body.removeChild(formBg);
			document.body.removeChild(formWrapper);
        });
}