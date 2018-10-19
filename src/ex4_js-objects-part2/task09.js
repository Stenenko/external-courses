function strConcat(str1, str2, num) {
    var arr = str1.split(" ");
    arr.splice(num, 0, str2);
    var newStr = arr.join(" ");
    return console.log(newStr);
}

var firstStr = "The five boxing wizards jump quickly";
var secondStr = "one two three";
strConcat(firstStr, secondStr, 3);