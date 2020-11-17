"use strict";

const instaSliderCursor = document.querySelector(".bg");

instaSliderCursor.addEventListener("mousedown", () => {
  console.log("works!");
  instaSliderCursor.classList.add("active");
  console.log(instaSliderCursor);
});
