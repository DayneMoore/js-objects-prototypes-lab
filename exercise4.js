//Dynamic Properties Access
const book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    isbn: "978-0596517748"
};

//function to display the properties
function displayProperty(obj, propertyName) {
    console.log(obj[propertyName]);
}

//function to update the properties
function updateProperty(obj, propertyName, newValue) {
  obj[propertyName] = newValue;
}

//test both functions with different properties
displayProperty(book, 'title');
updateProperty(book, 'year', 2024);
displayProperty(book, 'year');

