// Activity 1 Conditional Statements
// Task 01 print numbers from 1 to 10 using for  loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 02 print table of 5 using for  loop
for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

// Task 03 print to calculate sum of numbers from 1 to 10  using while loop
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(" Sum of numbers from 1 to 10 is " + sum);

// Task 04 print numbers from 10 to 1 using while loop
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

//  Task 05 print a numbers 1 to 5 using do while loop
let k = 1;
console.log("Using Do While Loop--");
do {
  console.log(k);
  k++;
} while (k <= 5);

//  Task 06 print factorial of a number using do while loop
let num = 5;
let fact = 1;
let n = 1;
do {
  fact *= n;
  n++;
} while (n <= num);
console.log("Factorial of " + num + " is " + fact);

// Task 07 print pattern using for loop
for (let i = 1; i <= 5; i++) {
  let str = " ";
  for (let j = 1; j <= i; j++) {
    str += " * ";
  }
  console.log(str);
}

// loop with continue and break
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// print diamond pattern
for (let i = 1; i <= 5; i++) {
  let str = " ";
  for (let j = 1; j <= 5 - i; j++) {
    str += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += " * ";
  }
  console.log(str);
}

// Print reverse diamond pattern using for loop

for (let i = 1; i <= 5; i++) {
  let str = " ";
  for (let j = 1; j <= i; j++) {
    str += " ";
  }
  for (let k = 1; k <= 10 - 2 * i; k++) {
    str += " * ";
  }
  console.log(str);
}
