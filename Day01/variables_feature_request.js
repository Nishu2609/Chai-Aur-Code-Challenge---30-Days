// Request 1 Variable Declaration
let age = 45;
console.log(age + " has the data type " + typeof age);
// Request 2 Variable Declaration and Initialization with Data Types
let firstName = "Nishant";
console.log( firstName + " has the data type " + typeof firstName);

let isMarried = true;
console.log(  isMarried + " has the data type " + typeof isMarried);

// array data type
let arrayData = [1,2,3,4,5,6,7,8,9,10];
console.log( arrayData + " has the data type " + typeof arrayData); 

function getType(value) {
    if (Array.isArray(value)) {
      return "array";
    }
    return typeof value;
  }

let fruits = ["Apple", "Orange", "Plum"];
console.log( fruits + " has the data type " + getType(fruits));