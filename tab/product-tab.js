// $(document).ready(function() {
//   $('#tabProductContent a').click(function (e) {
//     var oTarget = $(this).attr('href');
//     console.log("otarget:" + oTarget)
//     $(this).parent('li').addClass('selected').siblings().removeClass('selected');

//     $('#tabProductContent li').each(function () {
//       var oSiblings = $(this).find('a').attr('href');
//       console.log("oSibling:"+oSiblings)
//       if (oTarget != oSiblings) {
//         $(oSiblings).hide();
//       } else {
//         $(oTarget).show();
//       }
//     });
//     e.preventDefault();
//   });
// });

const tabProductContent = document.getElementById("tabProductContent");
const a = tabProductContent.querySelectorAll("a");
const li = tabProductContent.querySelectorAll("li");

for (let i = 0; i < a.length; i++) {
  let oTarget = a[i].getAttribute("href");
  console.log("oTarget: " + oTarget);

  a[i].addEventListener("click", function (e) {
    for (let i = 0; i < a.length; i++) {
      li[i].classList.remove("selected");
    }
    li[i].classList.add("selected");
    console.log(li);

    // for (let i = 0; i < a.length; i++) {
    //   //   let oSiblings = a[i].getAttribute("href");
    //   let thisLIst = li[i];
    //   console.log(thisLIst);
    //   if (!thisLIst.classList.contains("selected")) {
    //     console.log("heheh");
    //     // oSiblings.style.display = "none";

    //     //   oSiblings.style.display = "block";
    //   } else {
    //     //   oSiblings.style.display = "none";
    //   }
    // }

    e.preventDefault();
  });
}
