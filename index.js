// Your code here
class Polygon {
  constructor(side) {
    this.side = side;
  }

  get countSides() {
    return this.side.length;
  }

  get perimeter() {
    return this.side.reduce((total, side) => {
      return total + side;
    }, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    let sorted = this.side.sort();
    let a = sorted[0] * sorted[0];
    let b = sorted[1] * sorted[1];
    let c = sorted[2] * sorted[2];
    console.log(a);
    console.log(b);
    console.log(c);
    return a + b > c;
  }
}

class Square extends Polygon {
  get area() {
    return this.side[0] * this.side[0];
  }

  get isValid() {
    for (let i = 1; i < this.side.length; i++) {
      return this.side[0] === this.side[i];
    }
  }
}

let square = new Square([5, 5, 5, 5]);
let triangle = new Triangle([5, 5, 5]);
let fakeTriangle = new Triangle([15, 10, 1]);

// console.log(square);
// console.log(square.countSides);
// console.log(square.perimeter);
console.log(square.getArea);
// console.log(square.isValid);

// console.log(triangle.isValid);
// console.log(fakeTriangle.isValid);
