$(function () {
  let counter = 0;

  $("body").css({
    "background-color": "#9424F0",
    color: "white",
    "text-align": "center",
  });

  $(".increment").css({
    margin: "5px",
    padding: "5px",
    "font-size": "15px",
  });

  $(".decrement").css({
    margin: "5px",
    padding: "5px",
    "font-size": "15px",
  });

  $(".reset").css({
    margin: "5px",
    padding: "5px",
    "font-size": "15px",
  });

  $(".increment").on("click", function () {
    counter += 1;
    $(".counter h1.counter-result span").text(counter);
  });

  $(".decrement").on("click", function () {
    counter -= 1;
    $(".counter h1.counter-result span").text(counter);
  });

  $(".reset").on("click", function () {
    counter = 0;
    $(".counter h1.counter-result span").text(counter);
  });
});
