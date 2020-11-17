"use strict";

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  thisColor() {
    console.log(`this color is ${this.color}`);
  }

  getTotal() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  getTotal() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
const triangle = new Triangle(20, 20, "red");

rectangle.thisColor();
console.log(rectangle.getTotal());

console.log(triangle.getTotal());
