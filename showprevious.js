
function showPrevious() {

  clicked_back = true;

  if (currSlide === 2) {
    document.getElementById("slide0").style.display = "block";
    document.getElementById("slide1").style.display = "none";
    currSlide = currSlide - 1;
  }else if (currSlide === 3){
    document.getElementById("slide1").style.display = "block";
    var ex2 = document.getElementById("personalInformation");
    ex2.style.display = "none";
    currSlide -= 1;
  }else if (currSlide === 4) {
      // If user has not selected an option, alert with popup        
    document.getElementById("personalInformation").style.display = "block";
    var ex3 = document.getElementById("UseOfSpace");
    ex3.style.display = "none";
    currSlide -= 1;
      
  }
  else if (currSlide === 5) {
      // If user has not selected an option, alert with popup

    // Collect data before going on
    document.getElementById("UseOfSpace").style.display = "block";
    var ex4 = document.getElementById("slide4");
    ex4.style.display = "none";
    currSlide -= 1;
  }
  else if (currSlide === 6) {
      // If user has not selected an option, alert with popup
    document.getElementById("slide4").style.display = "block";
    var ex5 = document.getElementById("relationships");
    ex5.style.display = "none";
    currSlide -= 1;
  }
  else if (currSlide === 7) {
      // If user has not selected an option, alert with popup
    document.getElementById("relationships").style.display = "block";
    var ex6 = document.getElementById("relationships2");
    ex6.style.display = "none";
    currSlide -= 1;
  }
  else if (currSlide === 8) {
      // If user has not selected an option, alert with popup
    document.getElementById("relationships2").style.display = "block";
    var ex7 = document.getElementById("slide7");
    ex7.style.display = "none";
    currSlide -= 1;
  }
  else{

  }
  $('#Next').blur();
}



