function maxNum(arr) {
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            num = arr[i];
        }
    }
    return num;
}

var array = [9, 3, 45];
maxNum(array);