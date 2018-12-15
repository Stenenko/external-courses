var allBooks =[];

function load() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://rsu-library-api.herokuapp.com/books", true);
    request.send();
    request.onload = function() {    
          try {
            allBooks = JSON.parse(request.responseText);
          } catch(e) {
            alert( "При загрузке произошла ошибка " + e.message );
          }
          showBooks();
      }
}

document.addEventListener("DOMContentLoaded", load);

function createBook(a){

    var book = document.createElement('div');
    book.className = 'book';
    book.id = a.id;

    var image = document.createElement('img');
    var link = a.image_url;
    image.className = 'book__img';
    image.setAttribute('src', link);
    book.appendChild(image);

	var name = document.createElement('div');
	name.className = 'book__name';
    name.innerHTML = a.title;
    book.appendChild(name);

	var by = document.createElement('div');
	by.className = 'book__author';
    by.innerHTML = 'by ' + a.author.firstName + ' ' + a.author.lastName;
    book.appendChild(by);

    var rate = document.createElement('div');
    rate.className = 'book__rate';
    book.appendChild(rate);

    //book rating
    for (var i = 0; i < 5; i++) {
		var star = document.createElement('div');
        star.className = 'book__star';
        star.classList.add('s' + a.id);
        star.setAttribute('data-rate', i+1);
        rate.appendChild(star);
        //current rating
		if (i + 1 <= a.rating){
			star.classList.add('book__star--active', 'book__star--current');
		}
    };

    //user rating
    var rateStar = document.getElementsByClassName('s' + a.id);
    
    rate.addEventListener('click', function(e) {
        var target = e.target;
        if(target.classList.contains('book__star')) {
            removeClass(rateStar, 'book__star--current');
            target.classList.add('book__star--active', 'book__star--current');
        }
        //rating update
        if(target.dataset.rate >= 3 && a.rating < 5) {
            a.rating += 0.1;
        } 
        if(target.dataset.rate < 3 && a.rating > 0) {
           a.rating -= 0.1;
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

return book;
}

function showBooks() {

    var library = document.querySelector('.library');
    library.innerHTML = '';

    allBooks.forEach(function(a){
        var book = createBook(a);
        library.appendChild(book);
    });
}

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
	bookImg.innerHTML = 'Book cover (URL): ';
	form.appendChild(bookImg);

	var imgInput = document.createElement('input');
	imgInput.setAttribute('type', 'text');
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
        var book = { 
            title: titleInput.value, 
            author: {
                firstName: authorInput.value.split(' ')[0] || '',
                lastName: authorInput.value.split(' ')[1] || ''
            },
            createdAt: new Date().getTime(),
            image_url: imgInput.value || "https://rsu-library-api.herokuapp.com/static/images/nocover.jpg",
            rating: rateInput.value,   
            cost: priceInput.value
        }
        allBooks.push(book);
        showBooks();

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
        }
    );
}

//books filter
var filter = document.querySelector(".filter");

filter.addEventListener('click', function(e){
    var target = e.target;
    var filterLibrary = document.querySelector('.library');
    var filterItem = document.querySelectorAll('.filter__item');
    filterLibrary.innerHTML = '';
    
    //setting active class
    for (var i = 0; i < 4; i++) {
        if (filterItem[i] === target) {
            filterItem[i].classList.add('filter__item--active');
        } else {
        filterItem[i].classList.remove('filter__item--active');
        }
    }
    
    //book filtering
    if(target === filterItem[0]){
        showBooks();
    }

    if(target === filterItem[1]){
        var recent = allBooks.map(function(item){
            return item;
        });
        recent.sort(function(a, b){
            if(a.createdAt < b.createdAt){
                return 1;
            }
            return -1;
        });

        recent.forEach(function(item){
            var recentBooks = createBook(item);
            filterLibrary.appendChild(recentBooks);
        });
    }

    if(target === filterItem[2]){
        var popular = allBooks.map(function(item){
            return item;
        });
        popular.sort(function(a, b){
            if(a.rating < b.rating){
                return 1;
            }
            return -1;
        });
    
        popular.forEach(function(item){
            var popularBooks = createBook(item);
            filterLibrary.appendChild(popularBooks);
        });
    }

    if(target === filterItem[3]){
        var free = allBooks.filter(function(item){
            return item.cost == 0
        });
    
        free.forEach(function(item){
            var freeBooks = createBook(item);
            filterLibrary.appendChild(freeBooks);
        });
    }
});

//book search
var bookSearch = document.querySelector(".filter-search");
bookSearch.addEventListener('input', function(e) {

    var library = document.querySelector('.library');
    var value = e.target.value.toLowerCase();
    var foundBooks = allBooks.filter(function(item){
        if(item.title.toLowerCase().indexOf(value) !== -1){
            return item;
        }
    });

    library.innerHTML = '';

    foundBooks.forEach(function(item){
        var book = createBook(item);
        library.appendChild(book);
    });
});