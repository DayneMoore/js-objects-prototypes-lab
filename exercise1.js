//fucntion Declarations
function calculateArea(length, width) {
    const area = length * width;
    return area;
}

console.log(calculateArea(5,10));
console.log(calculateArea(7,3));
console.log(calculateArea(4,4));

//Function Expression
 const calculatePerimeter = function(length, width) {
    const perimeter = 2 * length + 2 * width;
    return perimeter;
 }

console.log(calculatePerimeter(5, 10)); // Expected: 30
console.log(calculatePerimeter(7, 3)); // Expected: 20
console.log(calculatePerimeter(4, 4)); // Expected: 16