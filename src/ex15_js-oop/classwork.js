function Shape(type){
    this._type = type;
    this._sides = [];
}
Shape.prototype.getType = function() {
    return this._type;
}
Shape.prototype.getPerimeter = function() {
    return this._sides.reduce((acc, val) => acc + val, 0);
}
Shape.prototype.draw = function() {
    console.log(this._type + " is drawn");
}

function Triangle(a,b,c) {
    Shape.call(this, "Triangle");
    this._sides = [a,b,c];
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

function Tetragon(a,b,c,d) {
    Shape.call(this, "Tetragon");
    this._sides = [a,b,c,d];
}
Tetragon.prototype =  Object.create(Shape.prototype);
Tetragon.prototype.constructor = Tetragon;

function Square(a) {
    Shape.call(this, "Square");
    this._a = a;
    this._sides = [a,a,a,a];
}
Square.prototype =  Object.create(Tetragon.prototype);
Square.prototype.constructor = Square;
Square.prototype.getArea = function() {
    return (this._a*2);
}

var triangle = new Triangle(4,10,6);
var tetragon = new Tetragon(4,6,2,7);
var square = new Square(5);

console.log(triangle.getType());
console.log(triangle.getPerimeter());
triangle.draw();
console.log(tetragon.getType());
console.log(tetragon.getPerimeter());
tetragon.draw();
console.log(square.getType());
console.log(square.getPerimeter());
console.log(square.getArea());
square.draw();