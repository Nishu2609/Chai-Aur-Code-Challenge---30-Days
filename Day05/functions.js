// Activity 01
// Task 01 Write a function for checking a number is even or odd.

function checkEvenOdd(number) {
  if (number % 2 == 0) {
    return number + " is Even";
  } else {
    return number + " is Odd";
  }
}
console.log(checkEvenOdd(30));

// Task 02 Write a function to calculate the square of a number.

function calculateSquare(number) {
  return number * number;
}

console.log("The square is " + calculateSquare(5));

// Activity 02 - Function Expression
// Task 01 Write a function expression to find maximum number between two numbers.

var max = function (number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
};
console.log(" The maximum number is " + max(10, 20));

// Task 02 Write a function expression to concatenate two strings.

var concatenate = function (string1, string2) {
  return string1 + string2;
};
console.log("The concatenated string is " + concatenate("Hello ", "World"));

// Activity 03 - Arrow Function
// Task 01 Write a arrow function to sum all numbers in an array.

var sum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log("The sum of the array is " + sum([1, 2, 3, 4, 5]));

// Task 02 Write a arrow function to check specific character in the string.returns true if found else returns false.

var checkCharacter = (string, character) => {
  if (string.includes(character)) {
    return true;
  } else {
    return false;
  }
};
console.log(
  "The character is present in the string is " + checkCharacter("Hello", "l")
);

// Activity 04 - Function Parameters and default values.
// Task 01 Write a function that takes two parameters and returns their product. provide adefault value for second parameter.

function product(number1, number2 = 2) {
  return number1 * number2;
}
console.log("The product is " + product(10));

//  Task 02 Write a function that takes name and age is default parameters. return greeting message

function greeting(name, age = 20) {
  return "Hello " + name + " you are " + age + " years old";
}
console.log(greeting("Nishant", 44));

//Activity 05 - Higher Order Functions
// Task 01 Write a function that takes a funcion and the number, and the number of times to call that function.

function callFunction(number, func) {
  return func(number);
}
console.log("The square is " + callFunction(4, (number) => number * number));  

// Task 02 Write a Higher order function that takes two functions and a value.
// Applies the first function to the value and then applies the second function to the result.

function applyFunction(value, func1, func2) {
  return func2(func1(value));
}
console.log(
  "The square is " + applyFunction(4, (number) => number * number, Math.sqrt)
);

