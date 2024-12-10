/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!

// Ensures we start at 1
/* let userInput = document.getElementById("starSlider");

console.log(userInput.value); */

function createStar(number) {
  let targetDiv = document.getElementById("stars");

  targetDiv.innerHTML = "";

  for (let i = 0; i < number; i++) {
    let newStar = document.createElement("span");
    newStar.classList.add("star-icon");
    newStar.textContent = "★";
    targetDiv.appendChild(newStar);
  }
}

addEventListener("change", (e) => {
  let slider = e.target.value;
  createStar(slider);
});
