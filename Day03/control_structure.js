// Activity 1 Conditional Statements
// Task 01
let a = 0;

if (a > 0) {
  console.log(a + " is positive number " );
} else if(a < 0) {
  console.log(a + " is negative number " );

} else{
  console.log(a + " is zero " );}

// Task 02
let age = 12;

if (age >= 18) {
  console.log("You are eligible to vote " );
} else {
  console.log("You are not eligible to vote " );
}

// Activity 2 Nested if-else
// Task 01 find largest number from 3 numbers
let num1 = 10;
let num2 = 20;
let num3 = 30;
if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is the largest number " );
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is the largest number " );
} else {
  console.log(num3 + " is the largest number " );
}
// Activity 3 Switch Case
// Task 01 Assign day using current day date function.
let dateObj = new Date();
let day = dateObj.getDay();
console.log("Day: " + day);
  
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Task 02 assign grade
let marks = 80;
switch (true) {
  case marks >= 80:
    console.log("Grade A");
    break;
  case marks >= 60:
    console.log("Grade B");
    break;
  case marks >= 50:
    console.log("Grade C");
    break;
  case marks >= 40:
    console.log("Grade D");
    break;
  default:
    console.log("Grade F");
}

// Activity 4 Ternary Operator
// Task 01 even or odd
let num = 5;
let result = num % 2 == 0 ? num+" is Even" : num+" is Odd";
console.log(result);

// let num = 10;
// let result = num > 0 ? "Positive" : "Negative";
// console.log(result);

// Task 02 check leap year on multiple conditions
// using current year form date function
let date = new Date();
let currentYear = date.getFullYear();
console.log(currentYear);

let year = currentYear;
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log(year + " is a leap year");
    } else {
      console.log(year + " is not a leap year");
    }
  } else {
    console.log(year + " is a leap year");
  }
} else {
  console.log(year + " is not a leap year");
}

