// Library Managment System challenge
const library = {
    name: "City Library",
    books: [],
    addBook(title, author, isbn) {
        const book = {
            title,
            author,
            isbn,
        };
            this.books.push(book);
    },

    findBookByTitle(title) {
    // Search for book by title
    const book = this.books.find(b => b.title === title);
        return book || null;
    },

    listAllBooks() {
        console.log('Books in', this.name + ':');
        this.books.forEach(book => console.log(book.title));
    }
};

// University library inherits from library
const universityLibrary = Object.create(library);
universityLibrary.courses = [];

universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
  // Add course 
  this.courses.push(courseName);

  // Add the book
  this.addBook(title, author, isbn);
};

// --- Testing ---
// Add regular books
universityLibrary.addBook('JavaScript: The Good Parts', 'Douglas Crockford', '978-0596517748');
universityLibrary.addBook('Eloquent JavaScript', 'Marijn Haverbeke', '978-1593279509');


//bonus
universityLibrary.findBooksByAuthor = (authorName) => {
  // 'this' does NOT work in arrow functions with Object.create()
  // So we need to reference universityLibrary directly
  return universityLibrary.books.filter(book => book.author === authorName);
};
