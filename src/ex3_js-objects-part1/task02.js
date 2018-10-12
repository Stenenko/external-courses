var user = {name: "Alex", age: 26, isUser: true};

function viewObj(obj) {
    for (var key in obj) {
        console.log(key + ": " + obj[key]);
    }
}

viewObj(user);