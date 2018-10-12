var user = {name: "Alex", age: 26, isUser: true};
var copy = {};
function objCopy(obj) { 
    for (var key in obj) {
        copy[key] = obj[key];
    }
    return copy;
}

objCopy(user);
copy.name = "Max";
console.log(copy);