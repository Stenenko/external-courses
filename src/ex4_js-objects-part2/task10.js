//с использованием цикла
function reverseStr(str) {
    var reversedStr = "";
    for (var i = str.length-1; i >= 0; i--) {
        reversedStr += str.charAt(i);
    }
    return console.log(reversedStr);
}

var newString = "Лёша на полке клопа нашёл!";
reverseStr(newString);


//второй вариант через массив
function reverseStr(str) {
    var reversedStr = str.split("").reverse().join("");
    return console.log(reversedStr);
}

var newString = "Лёша на полке клопа нашёл!";
reverseStr(newString);