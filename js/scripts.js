$( function() {
   $( ".draggable" ).draggable({handle:'.header'});
 } );

$(document).ready(function() {
  $( ".container .row+.row+.row .col" ).first().click(function() {
    alert("test");
  });
  var elements = $(".container .row");

  //var elements2 = $(".container .row:nth-child(1) .col");


//so we can do per row now we just need to acces the specific row

  var k = 1;

  for (var i = 0; i < elements.length; i++) {
    console.log("i"+i);
    //add classes to the rows so we can target them
    $(".container .row:nth-child("+k+")").addClass("row"+i);

    var itemsInside = $(".row"+i).text();
    console.log(itemsInside);

    //I have to figure out a way to create the second array - perhaps based 
    
    k++;
  }

});


/*
  For each row
    for each column in row

*/
