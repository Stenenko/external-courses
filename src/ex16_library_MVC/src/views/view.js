var LibView = (function(LibController) {

    var addButton = document.getElementsByClassName('add__btn')[0];
    addButton.addEventListener('click', LibController.bookAdd);

    //books filter
    var filter = document.querySelector(".filter");
    filter.addEventListener('click', LibController.filter);

    //book search
    var bookSearch = document.querySelector(".filter-search");
    bookSearch.addEventListener('input', LibController.searchBook);
    
    return {
        createBook: function createBook(a){
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
                        rate.addEventListener('click', rateClick);
                        rate.addEventListener('mouseover', rateMouseOver);
                        rate.addEventListener('mouseout', rateMouseOut);

                        function rateClick(e) {
                            var target = e.target;
                            LibView.removeClass(rateStar, 'book__star--current');
                            target.classList.add('book__star--active', 'book__star--current');

                            //rating update
                            if(target.dataset.rate >= 3 && a.rating < 5) {
                                a.rating += 0.1;
                            } 
                            if(target.dataset.rate < 3 && a.rating > 0) {
                                a.rating -= 0.1;
                            }
                        }

                        function rateMouseOver(e) {
                            var target = e.target;
                            LibView.removeClass(rateStar, 'book__star--active');
                            target.classList.add('book__star--active');
                            LibView.mouseOverActive(rateStar);
                        }

                        function rateMouseOut() {
                            LibView.addClass(rateStar, 'book__star--active');
                            LibView.mouseOutActive(rateStar);
                        }

                        return book;
                    },

        showBooks: function showBooks(arr) {
                        var library = document.querySelector('.library');
                        library.innerHTML = '';

                        arr.forEach(function(a){
                        var book = LibView.createBook(a);
                        library.appendChild(book);
                        });
                    },
        
        removeClass: function removeClass(arr) {
                        for(var i = 0; i < arr.length; i++) {
                            for(var j = 1; j < arguments.length; j++) {
                                arr[i].classList.remove(arguments[j]);
                            }
                        }
                    },
        
        addClass: function addClass(arr) {
                    for(var i = 0; i < arr.length; i++) {
                        for(var j = 1; j < arguments.length; j++) {
                            arr[i].classList.add(arguments[j]);
                        }
                    }
                },
        
        mouseOverActive: function mouseOverActive(arr) {
                            for(var i = 0; i < arr.length; i++) {
                                if(arr[i].classList.contains('book__star--active')) {
                                    break;
                                } else {
                                    arr[i].classList.add('book__star--active');
                                }
                            }
                        },
        
        mouseOutActive: function mouseOutActive(arr) {
                            for(var i = arr.length-1; i >= 0; i--) {
                                if(arr[i].classList.contains('book__star--current')) {
                                    break;
                                } else {
                                    arr[i].classList.remove('book__star--active');
                                }
                            }
                        }
    }
})(LibController);