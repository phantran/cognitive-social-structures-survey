// ---------------------------------------------------------------------------------------
// showNext(): Prepares for next slide in survey. Hides previous slide and shows currSlide,
// performing whatever operations needed for preparing slide.
// A bit like the main() function
// ---------------------------------------------------------------------------------------

function showNext() {


  if (currSlide === 1) {
    document.getElementById("slide0").style.display = "none";
    document.getElementById("slide1").style.display = "block";
    //var ex = document.getElementById("slide4");
    //ex.style.left = string_l + "px";
    //ex.style.top = string_t;
    //ex.style.display = "block";

    currSlide += 1;
  }else if (currSlide === 2){
    document.getElementById("slide1").style.display = "none";
    var ex = document.getElementById("personalInformation");
    ex.style.left = string_l + "px";
    ex.style.top = string_t;
    ex.style.display = "block";
    currSlide += 1;
  }else if (currSlide === 3) {
      // If user has not selected an option, alert with popup
      if (($('#input_name').val() === '') && (checked === false)){
          promptNonresponse();
          checked = true;
      } else {
          // Collect data before going on
          answers.q01 = $('input[name=hP]:checked').val();
          var d = new Date();
          answers.q01timeStamp = (d - startTime) / 1000;

          checked = false;

          document.getElementById("personalInformation").style.display = "none";
          var ex = document.getElementById("UseOfSpace");
          ex.style.left = string_l + "px";
          ex.style.top = string_t;
          ex.style.display = "block";
          currSlide += 1;
      }
  }
  else if (currSlide === 4) {
      // If user has not selected an option, alert with popup
      if ($('input[name=in_date]:checked').length === 0 && (checked === false)) {
          promptNonresponse();
          checked = true;
      } else {
          // Collect data before going on
          document.getElementById("UseOfSpace").style.display = "none";
          var ex = document.getElementById("slide4");
          ex.style.left = string_l + "px";
          ex.style.top = string_t;
          ex.style.display = "block";
          currSlide += 1;
      }
  }
  else{

  }
  $('#Next').blur();
}

