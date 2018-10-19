function cutStr(str, num) {
    if (str.length > num) {
        var newStr = str.slice(0,num-3) + "...";
        return console.log(newStr);
    }
    else {
        return console.log(str);
    }
}

var newString = "The quick brown fox jumps over the lazy dog";
cutStr(newString, 13);