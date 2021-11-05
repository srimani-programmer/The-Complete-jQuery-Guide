$(function () {
  $(".header-content h1").on("mouseenter", function () {
    if ($(this).hasClass("title")) {
      $(this).css({ color: "green", "text-align": "left" });
      $(this).removeClass("title");
    } else {
      $(this).addClass("title");
      $(this).css({ "text-align": "center", color: "red" });
    }
  });
});
