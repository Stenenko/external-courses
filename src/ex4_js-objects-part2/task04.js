function upperCase(str) {
    var firstSymbol = str.slice(0, 1).toUpperCase();
    slicedString = str.slice(1);
    return console.log(firstSymbol + slicedString);
}

var newString = "hello, world!";
upperCase(newString);