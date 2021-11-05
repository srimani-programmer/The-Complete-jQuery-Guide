$(function () {
  $("#age-form").on("submit", function () {
    const personName = $("#person-name").val();
    $.ajax({
      url: "https://api.agify.io",
      data: {
        name: personName,
      },
      method: "GET",
      success: function (data) {
        let jsonData = JSON.stringify(data);
        jsonData = JSON.parse(jsonData);
        if (jsonData.age === null) {
          $(".age-output").html(
            `<p>Unable to Predict Age for the person named ${jsonData.name} </p>`
          );
        } else if (typeof jsonData.age === "number") {
          $(".age-output").html(
            `<p>Predicted Age for the person named ${jsonData.name} is ${jsonData.age}</p>`
          );
        }
      },
    });
    $("#person-name").val("");
    return false;
  });
});
