function arrPrint(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] + "\n");
    }
    console.log("Число элементов: " + arr.length);
}

var array = [1, 2, undefined, 4, 5, 6, 7];
arrPrint(array);