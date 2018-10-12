var user = {name: "Alex", age: 26, parents: {father: "John", mother: "Ann"}, children: {son: {name: "Mike", age: 6}, daughter: {name: "Mary", age: 2}}};
var clone = {};
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
    clone = copy;
    return copy;
}

objCopy(user);
clone.children.son.name = "Max";
console.log(clone);