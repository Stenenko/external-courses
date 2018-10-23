function diff(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[0] !== arr[i]) {
            return console.log("false");
        }
}
return console.log("true");
}

var array = ["vbn1", "vbn1", "vbn1"];
diff(array);