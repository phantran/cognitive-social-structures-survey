$(document).keypress(
  function(event){
    if (event.which == '13') {
      event.preventDefault();
    }
});


$(document).keypress(function(ev){
  //console.log($(".popop_box:visible"));
  //If user pressed Enter Key then trigger Next click
  if(ev.keyCode==13 && (currSlide == 0 || currSlide == 1 || currSlide == 2)){
    if(document.getElementById("Next").disabled != true) {
      $('#Next').click();
    }
  }
});



