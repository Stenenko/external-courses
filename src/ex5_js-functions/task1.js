var Calculator = {};
var result = 0;
Calculator.add = function(arg){
    return console.log(result += arg);
}
Calculator.subtract = function(arg){
    return console.log(result -= arg);
}
Calculator.divide = function(arg){
    return console.log(result /= arg);
}
Calculator.multiply = function(arg){
    return console.log(result *= arg);
}
Calculator.getResult = function(){
    return console.log(result);
}
Calculator.reset = function(){
    result = 0;
    return console.log(result);
}
console.log(Calculator.add(5));
console.log(Calculator.reset());