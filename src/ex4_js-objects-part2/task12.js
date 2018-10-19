function calc(a,b) {
    if (typeof a === "number" && typeof b === "number") {
        var c = +(a + b).toFixed(3);//приводим результат к числу
        return console.log(c);
    }
    else {
        return console.log("Error");//если аргументы не являются числами - ошибка
    }  
}

calc(3.7556, 18.995836238);
calc ("kj", 7.8765);