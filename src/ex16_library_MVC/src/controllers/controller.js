var LibController = (function(LibModel) {

    var View;

    return {
        init: function init(view) {
                View = view;
            },

        showLib: function showLib(){
                    LibModel.load(LibView.showBooks);
                },

        searchBook: function searchBook(e){
                        LibModel.search(e, View.showBooks);
                    },

        filter: function filter(e) {
                    LibModel.bookFilter(e, View.showBooks);
                },

    //adding a new book
        bookAdd: function bookAdd() {
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
                    imgInput.setAttribute('type', 'url');
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

                    form.addEventListener('submit', pushBook);

                    function pushBook() {
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
                        LibModel.pushBooks(book, View.showBooks);

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
                }
    }
})(LibModel);