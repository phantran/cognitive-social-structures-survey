$(document).keypress(
  function(event){
    if (event.which == '13') {
      event.preventDefault();
    }
});


$(document).keypress(function(ev){
  //console.log($(".popop_box:visible"));
  //If user pressed Enter Key then trigger Submit click
  if(ev.keyCode==13 && currSlide != 21 && currSlide != 22 && (currSlide < 25 || currSlide >= 29) && currSlide != 32 && currSlide != 33 && $(".popop_box:visible").length == 0)
  {
    if(document.getElementById("Next").disabled != true) $('#Next').click();
  }
});



