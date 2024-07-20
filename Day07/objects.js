// Activity 01
// Task 01 create an object for book having properties name , author and  year of publication.

let book = {
  name: "Harry Potter",
  author: "J.K Rowling",
  year: 1997,
};
console.log(book);

// Task 02 Access the properties of an object
// console.log( book.name);
console.log(book.author);
// console.log( book.year);

// Activity 02 Objects Methods
// Task 01 Add a method to the book object that return the name and author name in a string

book.getDetails = function () {
  return this.name + " by " + this.author;
};
console.log(book.getDetails());

// Task 02 Add a method to the book object that takes the year of publication in a string and update year proerty and return the name and author name in a string
// returns updated year.

book.updateYear = function (year) {
  this.year = year;
  return this.name + " by " + this.author + " in " + this.year;
};
console.log(book.updateYear(2020));

// Activity 03 Nested Objects
// Task 01 create an nested object representing a library with properties (like name and books(array of book objects)).
// log the library object.

let library = {
  name: "My Library",
  books: [
    {
      name: "Harry Potter",
      author: "J.K Rowling",
    },
    {
      name: "The Alchemist",
      author: "Paulo Coelho",
    },
  ],
};
console.log(library);

// Task 02 Access the nested object
console.log(
  library.name + " has " + library.books.length + " books as below:- "
);
// Name of all books

for (let i = 0; i < library.books.length; i++) {
  console.log(library.books[i].name);
}

// Task 03 Add a new book to the library
let newBook = {
  name: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
};
library.books.push(newBook);
console.log(library);

// Task 04 Add a method that uses the this keyword to return the name and author name in a string

book.getDetails = function () {
  return this.name + " by " + this.author;
};
console.log(book.getDetails());

// Task 05 use a for ...in loop to print all the properties of the book object and
// log each key and its value.
// create an array of the object named books.

let books = [
  {
    name: "Harry Potter",
    author: "J.K Rowling",
  },
  {
    name: "The Alchemist",
    author: "Paulo Coelho",
  },
];

library.books.push(newBook);

for (let key in books) {
  console.log(books[key].name + " by " + books[key].author);
}
