//Method overriding
// Base shape object
const shape = {
  calculateArea() {
    return 0;
  }
};

// Rectangle inherits from shape
const rectangle = Object.create(shape);
rectangle.width = 5;
rectangle.height = 4;

// Override calculateArea for rectangle
rectangle.calculateArea = function() {
  return this.width * this.height;
};

// Circle inherits from shape
const circle = Object.create(shape);
circle.radius = 5;

// Override calculateArea for circle
circle.calculateArea = function() {
  return Math.PI * this.radius * this.radius;
};

// Test the objects
console.log('Rectangle area:', rectangle.calculateArea()); // 20
console.log('Circle area:', circle.calculateArea().toFixed(2)); // 78.54
