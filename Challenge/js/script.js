$(function () {
  const colorValues = {
    vitamin: "green",
    proteinbar: "blue",
    mineralwater: "grey",
  };
  $("ul.product-list li.product-item h2.product-name").each(function (
    index,
    element
  ) {
    console.log($(element));
    const productType = $(element).attr("data-type");
    $(element).css({ background: colorValues[productType] });
  });
});
