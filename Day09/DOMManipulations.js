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
let output2 = document.getElementById("output");
if (output2) {
  output2.remove();
} else {
  console.error("Element with id 'output2' not found.");
}
}); 
 