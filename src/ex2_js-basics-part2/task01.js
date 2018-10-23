function argType(a) {
    if (typeof a == "string") {
        console.log("Это строка");
    }
    else if (typeof a == "number") {
        console.log("Это число");
    }
    else {
        console.log("Введены неверные данные");
    }
}
argType(5);
argType("hello");
argType({});