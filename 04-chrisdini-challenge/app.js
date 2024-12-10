/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement mouse event listeners.
  3. Manipulate CSS properties through JavaScript.

Brief:
Chris is eager to perform a magic trick — to vanish before your eyes! By harnessing the power of CSS and JavaScript, make Chris disappear when the mouse hovers over his image. 

Expected Outcomes:
  1. When the user hovers over Chris's image, he should disappear.
  2. When the user moves the mouse away, Chris should reappear.

Hint: You can achieve this in multiple ways e.g. via the opacity or style property, etc. 
*/

// Place your plan and solution below!

let chrisImg = document.getElementById("chrisImage");

chrisImg.addEventListener("mouseover", (e) => {
  chrisImg.style.visibility = "hidden";
});

chrisImg.addEventListener("mouseout", (e) => {
  chrisImg.style.visibility = "visible";
});
