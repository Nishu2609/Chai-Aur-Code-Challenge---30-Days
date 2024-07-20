// Activity 01 - Array Creation and Access
// Task 01
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log( array);

// Task 02 - Access the first and last elements of an array
console.log( array[0]);
console.log( array[array.length - 1]);  

// Activity 02 - Array Methods (Basics)
// Task 01 - Find the length of an array
console.log( array.length);

// Task 02 - Add an element at the end of an array - push method  
array.push(11);
console.log( array);

// Task 03 - Add an element at the beginning of an array - unshift method
array.unshift(0);
console.log( array);

// Task 04 - Remove an element from the end of an array - pop method
array.pop();
console.log( array);

// Task 05 - Remove an element from the beginning of an array - shift method
array.shift();
console.log( array);

// Activity 03 - Array Methods (intermediate)

// Task 01 - use the map method to create a new array where each element is double of the previous element.
let array2 = array.map((value) => value * 2);
console.log( array2); 

// Task 02 - use the filter method to create a new array with only the even elements
let array3 = array.filter((value) => value % 2 == 0);
console.log( array3);

// Task 03 - use the reduce method to compute the sum of all the elements in an array
let array4 = array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log( " Sum of array elements is " + array4);

// Activity 04 - Array Methods (advanced)
// Task 01 - use the forEach method to print all the elements in the array
array.forEach((value) => console.log(value)); 

// Task 02 - use the find method to find the first element that is greater than 5
let array5 = array.find((value) => value > 5);
console.log( array5);

// Task 03 - use the findIndex method to find the index of the first element that is greater than 5 
let array6 = array.findIndex((value) => value > 5);
console.log( array6);

//Activity 05 - Two dimensional arrays

// Task 01 - Create a two dimensional array and log all the elements

let array7 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log( array7);

// Task 02 - Create a two dimensional array and log all the elements
let array8 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log( array8[2][0]);


 