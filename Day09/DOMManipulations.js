// Need to work on this more ..
// Activity 01 - DOM Manipulations
// Task 01

document.addEventListener("DOMContentLoaded", function() {
  let heading = document.getElementById("heading");
  if (heading) {
    heading.innerHTML = "Chai Daur Code 30 Days Nishant's Challenge.";
  } else {
    console.error("Element with id 'heading' not found.");
  }
  let bg_color = document.getElementsByClassName("bg_color");
  // alert(bg_color[0]);
  bg_color[0].style.backgroundColor = "red";

  // Activity 02 - creating and appending elements.
// Task 01

let output = document.getElementById("output");
// alert(output);
if (output) {
  output.innerHTML = "Chai Daur Code 30 Days Nishant's Challenge.";
} else {
  console.error("Element with id 'output' not found.");
} 

// task 02 Creating li and appending it to ul.
let ul = document.getElementById("list");
let li = document.createElement("li");
li.innerHTML = "Chai Daur Code 30 Days Nishant's Challenge.";
ul.appendChild(li);

// Activity 03 - Removing elements
// Task 01
// let list = document.getElementById("list");
// if (list) {
//   list.remove();
// } else {
//   console.error("Element with id 'list' not found.");

// }
 
// Task 02
// let output2 = document.getElementById("output");
// if (output2) {
//   output2.remove();
// } else {
//   console.error("Element with id 'output2' not found.");
// }

// Task 03 Modifying attributes and classes
if(document.getElementById("output2")){
let num1 = document.getElementById("num1");
if (num1) {
  num1.setAttribute("placeholder", "Enter a number1 e.g 5");
} else {
  console.error("Element with id 'num1' not found.");
}
let num2 = document.getElementById("num2");
if (num2) {
  num2.setAttribute("placeholder", "Enter a number2 e.g 10");
} else {
  console.error("Element with id 'num2' not found.");
}   
}
else {
    console.error("Element with id 'output2' not found.");
}
// Task 04 Modifying styles
let output2 = document.getElementById("output2");
if (output2) {
  output2.style.backgroundColor = "yellow";
} else {
  console.error("Element with id 'output2' not found.");
}

// Task 05 Event handling click on btn then chage text of paragraph.

let button = document.getElementById("btn");
if (button) {
  button.addEventListener("click", function() {
    document.getElementById("para").innerHTML = "Day-09 of Chai Daur Code 30 Days Nishant's Challenge.";
  });
}
else {
    console.error("Element with id 'btn' not found.");
}

// on mouseover change the border color of para
let para = document.getElementById("para");
if (para) {
  para.addEventListener("mouseover", function() {
    para.style.borderColor = "blue";
  });
}
else {
    console.error("Element with id 'para' not found.");
}


}); 
 