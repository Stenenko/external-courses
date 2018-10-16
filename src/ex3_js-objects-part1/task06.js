var user = {name: "Alex", age: 26, parents: {father: "John", mother: "Ann"}, children: {son: {name: "Mike", age: 6}, daughter: {name: "Mary", age: 2}}};

function objCopy(obj) { 
    var copy = {};
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            copy[key] = objCopy(obj[key]);
            }
        else {
            copy[key] = obj[key];
        }
    }
    return copy;
}

var clone = objCopy(user);
clone.children.son.name = "Max";
console.log(clone);