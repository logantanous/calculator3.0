$( function() {
   $( ".draggable" ).draggable({handle:'.header'});
 } );

$(document).ready(function() {

  var elements = $(".container .row");


  var k = 1;

  for (var i = 0; i < elements.length; i++) {
    console.log("i"+i);
    $(".container .row:nth-child("+k+")").addClass("row"+i);
    var columnNumber = 0;

    $(".container .row"+i).children(".col").each(function () {
      $(this).attr('id', i+"-column"+columnNumber);
      columnNumber++;
    });
    k++;
  }

  var action = ["Saab", "Volvo", "BMW"];

  $(".container .row .col").click(function() {
    alert(event.target.id);
  });



});
