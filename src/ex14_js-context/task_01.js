function Calc() {
    this.result = 0;
    this.add = function(a){
        if (typeof a !== 'undefined') {
            this.result += a;
        }
        return this;
    }
    this.substract = function(a) {
        if (typeof a !== 'undefined') {
            this.result -= a;
        }
        return this;
    }
    this.divide = function(a) {
        if (typeof a !== 'undefined' && a !== 0) {
            this.result /= a;
        }
        return this;
    }
    this.multiply = function(a) {
        if (typeof a !== 'undefined') {
            this.result *= a;
        }
        return this;
    }
    this.getResult = function() {
        return this.result;
    }
    this.reset = function reset() {
        this.result = 0;
        return this;
    }
    this.setState = function(a) {
        this.result = a;
        return this;
    }
    this.fetchData = function(callback){
        setTimeout(()=> {this.setState(500); //I am using an arrow function here, so setTimeout won’t carry its this inside the body.
        callback()}, 5000) //setState will change in five seconds
    }
}

var Calculator = new Calc;

Calculator.fetchData();
console.log(Calculator.getResult());
const result = Calculator.add(100).multiply(2).divide(20).reset().substract(1).getResult();
console.log(result);