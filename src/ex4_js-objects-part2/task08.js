function camelCase(str){
    var arr = str.split(" ").map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    });
    arr.splice(0, 1, arr[0].toLowerCase());
    var newStr = arr.join("");
    return console.log(newStr);
}

var newString = "Lorem ipsum dolor sit amet";
camelCase(newString);