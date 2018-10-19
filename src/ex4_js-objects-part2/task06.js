function upperCase(str){
    var arr = str.split(" ").map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    });
    var newStr = arr.join(" ");
    return console.log(newStr);
}

var newString = "Кит на море романтик";
upperCase(newString);