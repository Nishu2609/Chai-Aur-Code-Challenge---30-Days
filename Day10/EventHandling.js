// Activity 01

// Task 01 Add click event listener to a button that changes the text of a paragraph.
document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("btn");
  button.addEventListener("click", function () {
    document.getElementById("para").innerHTML =
      "Day-10 of Chai Daur Code 30 Days Nishant's Challenge.";
  });
  // add a double-click event listener to an image that toggles its visibility  .

  let img = document.getElementById("img");
  img.addEventListener("dblclick", function () {
    if (img.style.display === "none") {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
  // Activity 02 Mouse Events
  // Task 01 Add mouseover event listener to a button that changes the background color of a paragraph.

  let para = document.getElementById("para");
  para.addEventListener("mouseover", function () {
    document.getElementById("para").style.backgroundColor = "yellow";
  });

  // Task 02 Add mouseout event listener to a button that changes the background color of a paragraph.

  para.addEventListener("mouseout", function () {
    document.getElementById("para").style.backgroundColor = "white";
  });

  // Activity 03 Keyboard Events
  // Task 01 Add keyup event listener to an input field that displays the current value in a paragraph.

  let input = document.getElementById("input");
  input.addEventListener("keyup", function () {
    document.getElementById("para").innerHTML = input.value;
  });

  // Task 02 Add keydown event listener to an input field that logs the current value in the console.

  input.addEventListener("keydown", function () {
    console.log(input.value);
  });

  // Activity 4 Form Events
  // Task 01 Add submit event listener to a form that prevents the default action and logs the current value in the console.

  let form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    let txt = document.getElementById("txt");
    alert("Form Submitted " + txt.value);
    event.preventDefault();
    console.log(txt.value);
  });
// Event Delegation
// Task 01 Add an event listener to a parent element that listens for clicks on its child elements.
var parentElement = document.getElementById('parent');
var addButton = document.getElementById('addButton');

// Event delegation
parentElement.addEventListener('click', function(event) {
    if (event.target && event.target.matches('.child')) {
        alert('Child element clicked: ' + event.target.textContent);
    }
});

// Add new button dynamically
addButton.addEventListener('click', function() {
    var newButton = document.createElement('button');
    newButton.className = 'child';
    newButton.textContent = 'New Button';
    parentElement.appendChild(newButton);
});

});
