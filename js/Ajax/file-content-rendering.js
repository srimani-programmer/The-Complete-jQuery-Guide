$(function () {
  $(".get-content").on("click", function () {
    $.ajax({
      url: "./public/files/important-file-content.txt",
      type: "GET",
      success: function (data) {
        $(".content").text(data);
      },
    });

    $(".reset-content").on("click", function () {
      $(".content").empty();
    });
  });
});
