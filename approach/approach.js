const getIn = document.querySelectorAll(".widget-content > ul > li");
const title = document.getElementsByClassName("title")[0];

console.log(title);

console.log(getIn);

for (let i = 0; i < getIn.length; i++) {
  getIn[i].addEventListener("click", function () {
    title.style.display = "none";
    console.log("clicked");
  });
}
