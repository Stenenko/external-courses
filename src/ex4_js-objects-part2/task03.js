function trimSpaces(str) {
    if (str[0] === " ") {
        str = str.slice(1);
    }
    var lastSymbol = str.charAt(str.length - 1);
    if (lastSymbol === " ") {
        str = str.slice(0, -1);
    }
    return console.log(str);
}

oldString = "  12345 56   ";
trimSpaces(oldString);