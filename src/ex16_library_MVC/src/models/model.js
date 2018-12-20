var LibModel = (function() {
    var allBooks;
    return {
        load: function load(callback) {
                var request = new XMLHttpRequest();
                request.open("GET", "https://rsu-library-api.herokuapp.com/books", true);
                request.send();
                request.onload = function() {    
                    try {
                        allBooks = JSON.parse(request.responseText);
                        callback(allBooks);
                    } catch(e) {
                        alert( "При загрузке произошла ошибка " + e.message );
                    }
                }
            },

        pushBooks: function pushBooks(a, callback){
            allBooks.push(a);
            callback(allBooks);
        },

        bookFilter: function bookFilter(e, callback) {
                        var target = e.target;
                        
                        //setting active class
                        var filterItem = document.querySelectorAll('.filter__item');
                        for (var i = 0; i < 4; i++) {
                            if (filterItem[i] === target) {
                                filterItem[i].classList.add('filter__item--active');
                            } else {
                                filterItem[i].classList.remove('filter__item--active');
                            }
                        }
                        
                        //book filtering
                        var filteredBooks;
                        switch(target) {
                            case filterItem[0]:
                                filteredBooks = allBooks.slice();
                                break;

                            case filterItem[1]:
                                filteredBooks = allBooks.slice().sort(function(a, b){
                                    if(a.createdAt < b.createdAt){
                                    return 1;
                                }
                                    return -1;
                                });
                                break;

                            case filterItem[2]:
                                filteredBooks = allBooks.slice().sort(function(a, b){
                                    if(a.rating < b.rating){
                                    return 1;
                                }
                                    return -1;
                                });
                                break;

                            case filterItem[3]:
                                filteredBooks = allBooks.filter(function(item){
                                    return item.cost == 0
                                });
                        }
                        callback(filteredBooks);
                    },

        search: function search(e, callback) {
                    var value = e.target.value.toLowerCase();
                    var foundBooks = allBooks.filter(function(item){ 
                        return item.title.toLowerCase().indexOf(value) !== -1;
                    });
                    callback(foundBooks);
                },
        }
})();