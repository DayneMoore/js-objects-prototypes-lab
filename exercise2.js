//Arrow funcitons
//create an array of numbers
const numbers = [1, 2, 3, 4, 5];

//arrow function with map() to square each number
const squared = numbers.map(num => {
    return num *= num;
});
console.log(squared);

//arrow function with filter to get only even numbers
const evens = numbers.filter(num => {
    return num % 2 === 0;
});
console.log(evens);

//use the arrow function with the reduce() to sum all numbers
const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);
console.log(sum);