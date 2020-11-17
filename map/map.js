const locationName = document.querySelectorAll(".name");
console.log(locationName);

for (let i = 0; i < locationName.length; i++) {
  locationName[i].addEventListener("click", function (e) {
    for (let i = 0; i < locationName.length; i++) {
      locationName[i].classList.remove("select");
    }
    locationName[i].classList.add("select");
  });
}
