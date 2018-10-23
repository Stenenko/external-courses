function count(arr) {
    var even = 0;
    var odd = 0;
    var zero = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i] !== 0) {
            ++even;
        }
        else if (arr[i] == 0) {
            ++zero;
        }
        else {
            ++odd;
        }
    }
    if (zero !== 0) {
        console.log("Четных чисел: " + even + "; Нечетных чисел: " + odd + "; Нулей: " + zero);
    }
    else {
        console.log("Четных чисел: " + even + "; Нечетных чисел: " + odd);
    }
}

var array = [1, 2, 3, 4, 5, 6, 7];
var array0 = [1, 2, 3, 4, 5, 6, 7, 0, 0];
count(array);
count(array0);