"use strict";

const el = document.getElementById("outside");

el.addEventListener(
  "click",
  () => {
    modifyText("four");
  },
  false
);

function modifyText(new_text) {
  console.log("it works");
  const t2 = document.getElementById("t2");

  if (t2.innerHTML === new_text) {
    t2.innerHTML = "two";
  } else {
    t2.innerHTML = new_text;
  }
  console.log(t2.innerHTML);
}
