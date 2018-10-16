var user = {name: "Alex", age: 26, isUser: true};

function objCopy(obj) {
    var copy = {};
    for (var key in obj) {
        copy[key] = obj[key];
    }
    return copy;
}

var clone = objCopy(user);
clone.name = "Max";
console.log(clone);