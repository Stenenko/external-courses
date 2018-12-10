var id = 1;

//library constructor
function Book(img, title, author, year, rating, price) {
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
    book.setAttribute('data-id', this.id);
    library.appendChild(book);

    var image = document.createElement('img');
    var link = 'img/' + img;
    image.className = 'book__img';
    image.setAttribute('src', link);
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

    //book rating
    for (var i = 0; i < 5; i++) {
		var star = document.createElement('div');
        star.className = 'book__star';
        star.classList.add('s' + this.id);
        star.setAttribute('data-rate', i+1);
        rate.appendChild(star);
        //current rating
		if (i + 1 <= rating){
			star.classList.add('book__star--active', 'book__star--current');
		}
    };

//user rating
    var rateStar = document.querySelectorAll('.book__star.s' + this.id);

    rate.addEventListener('click', function(e) {
        var target = e.target;
        if(target.classList.contains('book__star')) {
            removeClass(rateStar, 'book__star--current');
            target.classList.add('book__star--active', 'book__star--current');
        }
        //rating update
        if(target.dataset.rate >= 3) {
            rating += 0.1;
        } else {
            rating -= 0.1;
        }
    });

    rate.addEventListener('mouseover', function(e) {
        var target = e.target;
        if(target.classList.contains('book__star')) {
            removeClass(rateStar, 'book__star--active');
            target.classList.add('book__star--active');
            mouseOverActive(rateStar);
        }
    });

    rate.addEventListener('mouseout', function() {
        addClass(rateStar, 'book__star--active');
        mouseOutActive(rateStar);
    });

    function removeClass(arr) {
        for(var i = 0; i < arr.length; i++) {
            for(var j = 1; j < arguments.length; j++) {
                rateStar[i].classList.remove(arguments[j]);
            }
        }
    };

    function addClass(arr) {
        for(var i = 0; i < arr.length; i++) {
            for(var j = 1; j < arguments.length; j++) {
                rateStar[i].classList.add(arguments[j]);
            }
        }
    };

    function mouseOverActive(arr) {
        for(var i = 0; i < arr.length; i++) {
            if(arr[i].classList.contains('book__star--active')) {
                break;
            } else {
                arr[i].classList.add('book__star--active');
            }
        }
    };

    function mouseOutActive(arr) {
        for(var i = arr.length-1; i >= 0; i--) {
            if(arr[i].classList.contains('book__star--current')) {
                break;
            } else {
                arr[i].classList.remove('book__star--active');
            }
        }
    };
};

//adding books to the library
var allBooks = [new Book('book01.png', 'Jewels of Nizam', 'Geeta Devi', 2017, 3.5, 150),
                new Book('book02.png', 'Cakes & Bakes', 'Sanjeev Kapoor', 2001, 4.1, 99),
                new Book('book03.png', 'Jamies Kitchen', 'Jamie Oliver', 2010, 2.3, 70),
                new Book('book04.png', 'Inexpensive Family Meals', 'Simon Holst', 2005, 2, 0),
                new Book('book05.png', 'Paleo Slow Cooking', 'Chrissy Gower', 2018, 1, 20),
                new Book('book06.png', 'Cook Like an Italian', 'Tobie Puttock', 2007, 4.2, 40),
                new Book('book07.png', 'Indian Cooking', 'Geeta Devi', 2012, 5, 0),
                new Book('book08.png', 'Jamie Does', 'Jamie Oliver', 2014, 3.2, 30),
                new Book('book09.png', 'Jamies italy', 'Jamie Oliver', 2016, 4.2, 0),
                new Book('book10.png', 'Vegetables Cookbook', 'Matthew Biggs', 2009, 5, 50)];

//adding a new book
var addButton = document.getElementsByClassName('add__btn')[0];
addButton.addEventListener('click', bookAdd);

function bookAdd() {

	var formWrapper = document.createElement('div');
    formWrapper.className = 'form-wrapper';
    document.body.appendChild(formWrapper);

    var closeBtn = document.createElement('div');
    closeBtn.className = 'form-close';
    formWrapper.appendChild(closeBtn);
    
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
    imgInput.setAttribute('placeholder', 'Book cover from img/');
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
    yearInput.setAttribute('min', '0');
    yearInput.setAttribute('max', '2018');
	yearInput.setAttribute('required', '');
    form.appendChild(yearInput);

	var bookRate = document.createElement('div');
	bookRate.innerHTML = 'Rate: ';
	form.appendChild(bookRate);

	var rateInput = document.createElement('input');
	rateInput.setAttribute('type', 'number');
    rateInput.setAttribute('min', '0');
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

    closeBtn.addEventListener('click', function() {
		document.body.removeChild(formWrapper);
	});

	form.addEventListener('submit', function() {
        allBooks.push(
            new Book(imgInput.value, 
                titleInput.value, 
                authorInput.value,
                yearInput.value,
                rateInput.value,   
                priceInput.value)
        );

        //adding a new book to actions
        var actions = document.querySelector('.sidebar-actions');		
        var newAction = document.createElement('li');
        newAction.className = 'sidebar-actions__item';
        
        actions.insertBefore(newAction, actions.firstChild);

        newAction.insertAdjacentHTML('afterBegin', 'You added <span class="sidebar-actions__item--bright">' +
            titleInput.value + 
            '</span> by <span class="sidebar-actions__item--bright">' +
            authorInput.value + 
            '</span> to your <span class="sidebar-actions__item--bright"> Must Read Titles.</span><p class="sidebar-actions__time">1 minute ago</p>'
        );
        
        document.body.removeChild(formWrapper);
    });
}

//book filter
var filterLibrary = document.querySelector('.library');
var filterItem = document.querySelectorAll('.filter__item');
var filterBooks = document.querySelectorAll('.book');

for (i = 0; i < 4; i++) {
	filterItem[i].addEventListener('click', function(e) {
        target = e.target;
        for (j = 0; j < 4; j++) {
            if (filterItem[j] == target) {
                filterItem[j].classList.add('filter__item--active');
            } else {
            filterItem[j].classList.remove('filter__item--active');
            }
        }
        if (target == filterItem[0]) {
            fillLibrary();
        }
        if (target == filterItem[1]) {
            fillLibrary();
            clearLibrary();
            for (i = 0; i < allBooks.length; i++) {
                if(allBooks[i].year >= 2012) {
                    for (j = 0; j < filterBooks.length; j++){
                        if(filterBooks[j].dataset.id == allBooks[i].id) {
                            filterLibrary.appendChild(filterBooks[j]);
                        }
                    }
                }
            }
        }
        if (target == filterItem[2]) {
            fillLibrary();
            clearLibrary();
            for (i = 0; i < allBooks.length; i++) {
                if(allBooks[i].rating >= 4) {
                    for (j = 0; j < filterBooks.length; j++){
                        if(filterBooks[j].dataset.id == allBooks[i].id) {
                            filterLibrary.appendChild(filterBooks[j]);
                        }
                    }
                }
            }
        }
        if (target == filterItem[3]) {
            fillLibrary();
            clearLibrary();
            for (i = 0; i < allBooks.length; i++) {
                if(allBooks[i].price == 0){
                    for (j = 0; j < filterBooks.length; j++){
                        if(filterBooks[j].dataset.id == allBooks[i].id) {
                            filterLibrary.appendChild(filterBooks[j]);
                        }
                    }
                }
            }
        }
    });
}

function fillLibrary() {
	for (i = 0; i < filterBooks.length; i++) {
			filterLibrary.appendChild(filterBooks[i]);
	}
}

function clearLibrary() {
	for (i = 0; i < filterBooks.length; i++) {
		filterLibrary.removeChild(filterBooks[i]);
	}
}

//book search
var bookSearch = document.querySelector('.filter-search');

bookSearch.addEventListener('input', function() {
	var searchBooks = document.querySelectorAll('.book');
	var searchLibrary = document.querySelector('.library');	
	var booksArr = allBooks.slice();
	
	for (i = 0; i < bookSearch.value.length; i++) {
		for (j = 0; j < booksArr.length; j++) {
			if (booksArr[j] !== undefined && booksArr[j].title[i].toLowerCase() !== bookSearch.value[i].toLowerCase()) {
				delete booksArr[j];
			}
		}
    }
    
	for (i = 0; i < searchBooks.length; i++) {
        searchLibrary.removeChild(searchBooks[i]);
    }
    
	for (i = 0; i < booksArr.length; i++) {
		if (booksArr[i] !== undefined) {
			for (j = 0; j < searchBooks.length; j++) {
				if (searchBooks[j].dataset.id == booksArr[i].id) {
                    searchLibrary.appendChild(searchBooks[j]);
                }
            }
		}
	}
});