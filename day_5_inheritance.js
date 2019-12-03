class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () { return this.w * this.h; }

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(w) {
    super(); // Now 'this' is initialized by calling the parent constructor.
    this.w = w;
    this.h = w;
  }
}
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
