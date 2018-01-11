$( function() {
   $( ".draggable" ).draggable({handle:'.header'});
 } );

$(document).ready(function() {
  $( ".container .row+.row .column" ).first().click(function() {
    alert("test");
  });
}
