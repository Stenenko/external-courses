function Calc() {
    this._result = 0;
}
Calc.prototype.add = function(a) {
    this._result += a;
    return this;
}
Calc.prototype.subtract = function(a) {
    this._result -= a;
    return this;
}
Calc.prototype.multiply = function(a) {
    this._result *= a;
    return this;
}
Calc.prototype.divide = function(a) {
    this._result /= a;
    return this;
}
Calc.prototype.reset = function() {
    this._result = 0;
    return this;
}
Calc.prototype.getResult = function() {
    return this._result;
}
Calc.prototype.setState = function(a) {
    this._result = a;
    return this;
}

function SimpleCalc() {
    Calc.apply(this);
}
SimpleCalc.prototype = Object.create(Calc.prototype);
SimpleCalc.prototype.constructor = SimpleCalc;
SimpleCalc.prototype.sqrt = function() {
    this._result = Math.sqrt(this._result);
    return this;
}
SimpleCalc.prototype.percent = function(a) {
    this._result = a/100*this._result;
    return this;
}

function EngineerCalc() {
    SimpleCalc.apply(this);
}
EngineerCalc.prototype = Object.create(SimpleCalc.prototype);
EngineerCalc.prototype.constructor = EngineerCalc;
EngineerCalc.prototype.pow = function(a) {
    this._result = Math.pow(this._result, a);
    return this;
}
EngineerCalc.prototype.sin = function() {
    this._result = Math.sin(this._result);
    return this;
}

var calc = new Calc();
var simpleCalc = new SimpleCalc();
var engineerCalc = new EngineerCalc();

console.log(calc.add(6).subtract(2).multiply(20).divide(2).getResult());
console.log(simpleCalc.add(6).subtract(2).multiply(20).divide(3).sqrt().percent(48).getResult());
console.log(engineerCalc.add(6).subtract(2).multiply(20).divide(3).sqrt().percent(48).pow(2).sin().getResult());