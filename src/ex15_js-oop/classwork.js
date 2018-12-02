function Shape(type){
    this._type = type;
}
Shape.prototype.getType = function() {
    return console.log("Shape type: " + this._type);
}
Shape.prototype.getPerimeter = function() {
    return console.log("Perimeter is redefined below");
}
Shape.prototype.draw = function() {
    console.log(this._type + " is drawn");
}

function Triangle(a,b,c) {
    Shape.call(this, "Triangle");
    this._a = a;
    this._b = b;
    this._c = c;
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function() {
    console.log("Perimeter of this triangle is " + (this._a + this._b + this._c));
}

function Tetragon(a,b,c,d) {
    Shape.call(this, "Tetragon");
    this._a = a;
    this._b = b;
    this._c = c;
    this._d = d;
}
Tetragon.prototype =  Object.create(Shape.prototype);
Tetragon.prototype.constructor = Tetragon;
Tetragon.prototype.getPerimeter = function() {
    console.log("Perimeter of this tetragon is " + (this._a + this._b + this._c + this._d));
}

function Square(a) {
    Shape.call(this, "Square");
    this._a = a;
}
Square.prototype =  Object.create(Tetragon.prototype);
Square.prototype.constructor = Square;
Square.prototype.getPerimeter = function() {
    console.log("Perimeter of this square is " + (this._a*4));
}
Square.prototype.getArea = function() {
    console.log("Area of this square is " + (this._a*2));
}

var triangle = new Triangle(2,10,6);
var tetragon = new Tetragon(4,2,5,9);
var square = new Square(3);

triangle.getType();
triangle.getPerimeter();
triangle.draw();
tetragon.getType();
tetragon.getPerimeter();
tetragon.draw();
square.getType();
square.getPerimeter();
square.getArea();
square.draw();