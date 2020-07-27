//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!.
//We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1'
//(the element is in index.html file)
// all right our new element needs style.
//For that, assign to the new element the className 'square'!.
//Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

//resolve // QUESTION 1 here
let q1 = document.querySelector("#a-1");
let newDiv = document.createElement("div");

q1.appendChild(newDiv);
newDiv.className = "square";
newDiv.innerHTML = "x";

newDiv.addEventListener("click", function () {
  if ((newDiv.innerHTML = "x")) {
    newDiv.innerHTML = "o";
  } else {
    newDiv.innerHTML = "x";
  }
});

//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array below,
//those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = ["red", "white", "black", "green", "orange"];

//resolve // QUESTION 2 here

const question2 = () => {
  let q2 = document.querySelector("#a-2");
  let innerHTML = '<select id="colors">';

  for (let i = 0; i < colors.length; i++) {
    innerHTML += `<option id="${colors[i]}">${colors[i]}</option>`;
  }
  innerHTML += "</select>";
  innerHTML += "<button onclick='removeItems()'>Remove</button>";
  console.log(q2);
  q2.innerHTML = innerHTML;
};

function removeItems() {
  let q2 = document.querySelector("#colors");
  let item = document.querySelector(`#${q2.value}`);
  console.log(item);
  item.remove();
}

question2();

//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming.
//In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

let radius = document.querySelector("#radius");
let volume = document.querySelector("#volume");
let area = document.querySelector("#area");

const calculate_sphere = (q3) => {
  q3.preventDefault();
  volume = (4 / 3) * Math.PI * Math.pow(radius.value, 3);
  area = 4 * Math.PI * Math.pow(radius.value, 2);
  document.querySelector("#volume").value = volume;
  document.querySelector("#area").value = area;
};

window.onload = document.getElementById("MyForm").onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked

//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons,
//each with a click action that will hide the respective question's answer above.
//So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise.
//If you click it again it will show the answer.

//resolve // QUESTION 4 here
let q4_1 = document.querySelector("#q4-1");
let q4_2 = document.querySelector("#q4-2");
let q4_3 = document.querySelector("#q4-3");
let hideQuestion1 = document.querySelector("#a-1");
let hideQuestion2 = document.querySelector("#a-2");
let hideQuestion3 = document.querySelector("#a-3");

q4_1.addEventListener("click", () => {
  if (hideQuestion1.style.display == "none") {
    q4_1.textContent = "Hide Answer for Question 1";
    hideQuestion1.style.display = "block";
  } else {
    q4_1.textContent = "Show Answer for Question 1";
    hideQuestion1.style.display = "none";
  }
});

q4_2.addEventListener("click", () => {
  if (hideQuestion2.style.display == "none") {
    q4_2.textContent = "Hide Answer for Question 2";
    hideQuestion2.style.display = "block";
  } else {
    q4_2.textContent = "Show Answer for Question 2";
    hideQuestion2.style.display = "none";
  }
});

q4_3.addEventListener("click", () => {
  if (hideQuestion3.style.display == "none") {
    q4_3.textContent = "Hide Answer for Question 3";
    hideQuestion3.style.display = "block";
  } else {
    q4_3.textContent = "Show Answer for Question 3";
    hideQuestion3.style.display = "none";
  }
});

// removeItemButton.addEventListener("click", () => {
//   let ul = document.getElementsByTagName("ul")[0];
//   let li = document.querySelector("li:last-child");
//   ul.removeChild(li);
// });
