// Perform basic arithmetic operations on two numbers.

function myFunction() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

    let a = parseInt(num1.value);
    let b = parseInt(num2.value);

    switch (document.getElementById("operator").value) {
        case "+":
            document.getElementById("output").innerHTML = "The sum of " + a + " and " + b + " is " + (a + b);
            break;
        case "-":
            document.getElementById("output").innerHTML = "The difference of " + a + " and " + b + " is " + (a - b);
            break;
        case "*":
            document.getElementById("output").innerHTML = "The product of " + a + " and " + b + " is " + a * b;
            break;
        case "/":
            document.getElementById("output").innerHTML = "The quotient of " + a + " and " + b + " is " + a / b;
            break;
        case "%":
            document.getElementById("output").innerHTML = "The remainder of " + a + " and " + b + " is " + (a % b);
            break;  
        default:
            document.getElementById("output").innerHTML = "Invalid operator";
    }
   }
