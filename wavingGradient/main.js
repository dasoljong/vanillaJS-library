$(function () {
  $(".intro-gradient .btn-intro").on("click", function () {
    $(this).fadeOut(300);
    $(this).parent().addClass("on");
    $(".fadeinobject").addClass("on");
  });
});
