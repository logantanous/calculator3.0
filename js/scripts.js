$(document).ready(function() {
  var age = prompt("Enter your current age");
  if (age > 20) {
    $(".under21").hide();
    $(".over21").show();
  }
});
