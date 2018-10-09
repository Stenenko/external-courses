function isPrime(num) {
    if(num < 2 || num > 1000) {
        return console.log("Неверные данные");
    }
    for (var i = 2; i < num; i++) {
        if(num % i == 0)
            return console.log("Число " + num + " - составное число");
    }
    return console.log("Число " + num + " - простое число");
}

isPrime(10);
isPrime(13);
isPrime(1001);