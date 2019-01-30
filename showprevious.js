
function showPrevious() {

  clicked_back = true;

  if (currSlide === 2) {
    document.getElementById("slide0").style.display = "block";
    $('#Next').css({
      'top': "60%",
      'left': "80%"
    });

    $('#Back').css({
      'top': "60%",
      'right': "80%"
    });

    document.getElementById("slide1").style.display = "none";
    currSlide = currSlide - 1;

  }else if (currSlide === 3){
    document.getElementById("slide1").style.display = "block";
    $('#Next').css({
      'top': "60%",
      'left': "80%"
    });

    $('#Back').css({
      'top': "60%",
      'right': "80%"
    });

    var ex2 = document.getElementById("personalInformation");
    ex2.style.display = "none";
    currSlide -= 1;
  }else if (currSlide === 4) {
      // If user has not selected an option, alert with popup        
    document.getElementById("personalInformation").style.display = "block";
    let offset = $('#personalInformation').offset();
    let height = $('#personalInformation').height();
    let top = offset.top + height + 10 +  "px";
    $('#Next').css({
      'top': top
    });

    $('#Back').css({
      'top': top
    });
    var ex3 = document.getElementById("UseOfSpace");
    ex3.style.display = "none";
    currSlide -= 1;
      
  }
  else if (currSlide === 5) {
    document.getElementById("UseOfSpace").style.display = "block";
    let offset = $('#UseOfSpace').offset();
    let height = $('#UseOfSpace').height();
    let top = offset.top + height + 10 +  "px";
    $('#Next').css({
      'top': top
    });

    $('#Back').css({
      'top': top
    });

    var ex4 = document.getElementById("UseOfSpace2");
    ex4.style.display = "none";
    currSlide -= 1;
  }
  else if (currSlide === 6) {
      // If user has not selected an option, alert with popup
    document.getElementById("UseOfSpace2").style.display = "block";
    let top = FloorA1Offset.top + FloorA1height + 10 +  "px";
    $('#Next').css({
      'top': top
    });

    $('#Back').css({
      'top': top
    });

    var ex5 = document.getElementById("relationships");
    ex5.style.display = "none";
    currSlide -= 1;
  }
  else if (currSlide === 7) {
      // If user has not selected an option, alert with popup
    document.getElementById("relationships").style.display = "block";
    let offset = $('#relationships').offset();
    let height = $('#relationships').height();
    let top = offset.top + height + 10 +  "px";
    $('#Next').css({
      'top': top
    });

    $('#Back').css({
      'top': top
    });

    var ex6 = document.getElementById("relationships2");
    ex6.style.display = "none";
    currSlide -= 1;
  }
  else if (currSlide === 8) {
      // If user has not selected an option, alert with popup
    document.getElementById("relationships2").style.display = "block";
    let offset = $('#relationships2').offset();
    let height = $('#relationships2').height();
    let top = offset.top + height + 10 +  "px";
    $('#Next').css({
      'top': top
    });

    $('#Back').css({
      'top': top
    });

    var ex7 = document.getElementById("network");
    ex7.style.display = "none";
    currSlide -= 1;
  }
  else if (currSlide === 9) {
      // If user has not selected an option, alert with popup
    document.getElementById("network").style.display = "block";
    let offset = $('#chart').offset();
    let height = $('#chart').height();
    let top = offset.top + height + 10 +  "px";
    $('#Next').css({
      'display':"block",
      'top': top
    });

    $('#Back').css({
      'top': top
    });
    $('#finalSubmitButton').css({
      'display': "none"
    });

    var ex7 = document.getElementById("slide8");
    ex7.style.display = "none";
    currSlide -= 1;
  }
  else{

  }
  $('#Previous').blur();
  clicked_back = true;
}



