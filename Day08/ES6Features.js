// Actvity 01 - ES6 Features
// Task 01 - Template Literals to create a string with name and age in it.

let name = "Nishant";
let age = 42;
console.log(`Hello ${name} you are ${age} years old`);

// Task 02 - Create  a multiline string using template literals
let name1 = "Nishant";
let age1 =44;
console.log(`Hello ${name1}
You are ${age1} years old`);  

// Task 03 - Create a multiline string using backticks
let name2 = "Nishant";
let age2 = 34;
console.log(`Hello ${name2} \n You are ${age2} years old`);

// Activity 02 - Destructuring
// Task 01 - Array Destructuring to extract first and second elements from the number array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [first, second] = numbers;
console.log(first, second);

// Task 02 - Object Destructuring to extract author name and book name elements from the book 
// object.

let book = {
  book_name: "Harry Potter",
  author: "J.K Rowling",
  year: 1997,
};
let { book_name, author } = book;
console.log(book_name, author);

// Activity 03 - Spread and Rest Parameters
// Task 01 - use the spread operator to create a new array.
// that contains all the elements of the numbers array and 25 in it.

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers2 = [...numbers1, 25];
console.log(numbers2);

// Task 02 - use the rest operator to accept the arbitary number of arguments and sum them and log it.

function sum(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
} 
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Activity 04 - Default Parameters
// Task 01 - Write a function that takes name and age is default parameters. return greeting message.

function greeting(name, age = 20) { 
  return "Hello " + name + " you are " + age + " years old";
}

console.log(greeting("Nishant", 44));

// Activity 05 - enhanced Object Literals
// Task 01 - use enhanced object literals to create an object with name and age properties.

let name3 = "Nishant";
let age3 = 44;
let user = {
  name3,
  age3,
};
console.log(user);

// Task 02 - use enhanced object literals to create an object with name, age and gender properties.
// Create an object with computed property names based on variables name, age and gender.

let name4 = "Nishant";
let age4 = 44;
let gender = "Male";
let user1 = {
  name4,
  age4,
  [gender + "Gender"]: true,
};
console.log(user1);




