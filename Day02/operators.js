// Activity 1 Arithmetic Operators
// Task 01
let a = 10;
let b = 5;
let c = a + b;
console.log("The sum of " + a + " and " + b + " is " + c);

// Task 02
let d = a - b;
console.log("The difference of " + a + " and " + b + " is " + d);

// Task 03
let e = a * b;
console.log("The product of " + a + " and " + b + " is " + e);

// Task 04
let f = a / b;
console.log("The quotient of " + a + " and " + b + " is " + f);

// Task 05
let g = a % b;
console.log("The remainder of " + a + " and " + b + " is " + g);

// activity 2 Relational Operators
// Task 01
let h = a < b;
console.log("Is " + a + " less than " + b + "? " + h);

// Task 02
let i = a > b;
console.log("Is " + a + " greater than " + b + "? " + i);

// Task 03
let j = a <= b;
console.log("Is " + a + " less than or equal to " + b + "? " + j);

// Task 04
let k = a >= b;
console.log("Is " + a + " greater than or equal to " + b + "? " + k);

// Task 05
let l = a == b;
console.log("Is " + a + " equal to " + b + "? " + l);

// Task 06
let m = a != b;
console.log("Is " + a + " not equal to " + b + "? " + m);

// Task 07
let n = a === b;
console.log("Is " + a + " strictly equal to " + b + "? " + n);

// Task 08
let o = a !== b;
console.log("Is " + a + " not strictly equal to " + b + "? " + o);

// activity 3 Logical Operators
// Task 01
let p = a > b && a < b;
console.log(
  "Is " + a + " greater than " + b + " and " + a + " less than " + b + "? " + p
);

// Task 02
let q = a > b || a < b;
console.log(
  "Is " + a + " greater than " + b + " or " + a + " less than " + b + "? " + q
);

// Task 03
let r = !(a > b);
console.log("Is " + a + " not greater than " + b + "? " + r);

// Task 04
let s = !(a < b);
console.log("Is " + a + " not less than " + b + "? " + s);

// activity 4 Ternary Operator
// Task 01
let t = a > b ? "Yes" : "No";
console.log("Is " + a + " greater than " + b + "? " + t);

// Task 02
let u = a < b ? "Yes" : "No";
console.log("Is " + a + " less than " + b + "? " + u);

// Task 03
let v = a == b ? "Yes" : "No";
console.log("Is " + a + " equal to " + b + "? " + v);

// Task 04
let w = a != b ? "Yes" : "No";
console.log("Is " + a + " not equal to " + b + "? " + w);

// activity 5 Operator Precedence
// Task 01
let x = a + b * c;
console.log("The value of " + a + " + " + b + " * " + c + " is " + x);

// Task 02
let y = (a + b) * c;
console.log("The value of (" + a + " + " + b + ") * " + c + " is " + y);

// Task 03
let z = (a + b) * (c + d);
console.log(
  "The value of (" + a + " + " + b + ") * (" + c + " + " + d + ") is " + z
);

// activity 6 Assignment Operators
// Task 01
let aa = 10;
aa = aa + 5;
console.log("The value of aa is " + aa);

// Task 02
let bb = 10;
bb -= 5;
console.log("The value of bb is " + bb);

// Task 03
let cc = 10;
cc *= 5;
console.log("The value of cc is " + cc);

// Task 04
let dd = 10;
dd /= 5;
console.log("The value of dd is " + dd);    

// Task 05
let ee = 10;
ee %= 5;
console.log("The value of ee is " + ee);
