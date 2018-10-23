//функция считает все повторяющиеся символы регистрозависимо
function countChar(str) {
    var arr = str.split("");
    var result = {};
    for (var i = 0; i < arr.length; ++i) {
        var a = arr[i];
        if (result[a] != undefined)
            ++result[a];
        else
            result[a] = 1;
    }
    for (var key in result){
        console.log('Символ ' + '"' + key + '"' + ' встречается ' + result[key] + ' раз(а) ');
    }
}

var newString = "Конструктор Object создаёт объект-обёртку для переданного значения";
countChar(newString);