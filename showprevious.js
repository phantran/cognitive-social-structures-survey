
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
    $(".progress-bar")[0].setAttribute("aria-valuenow","0");
    $(".progress-bar")[0].setAttribute('style',"width:0%");
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


    $(".progress-bar")[0].setAttribute("aria-valuenow","9");
    $(".progress-bar")[0].setAttribute('style',"width:9%");
  }
  else if (currSlide === 6) {
      // If user has not selected an option, alert with popup
    document.getElementById("UseOfSpace2").style.display = "block";
        $('.map1').maphilight({
          stroke: true,
          strokeColor: 'ff0000',
          strokeOpacity: 1,
          strokeWidth: 1,
        });

        $('map').imageMapResize();
    if(clicked_area_id !== ""){
      //This piece of code is used to display the colors of clicked areas
      if(never_was_clicked === true){
        let temp_data = {};
        temp_data.strokeColor = "C1C240";
        temp_data.strokeWidth = 5;
        temp_data.fillColor = "FFE97F";
        temp_data.fillOpacity = "0.4";
        temp_data.alwaysOn = false;
        $(clicked_area_id).data('maphilight', temp_data).trigger('alwaysOn.maphilight'); 
      }
      else{
        var data = {};
        data.alwaysOn = true;
        data.stroke = true;
        data.strokeOpacity = 1;
        data.strokeWidth = 1;
        data.strokeColor = '00fdf0';
        data.fillColor = chosen_color; 
        data.fillOpacity = 0.65;
        $(clicked_area_id).data('maphilight', data).trigger('alwaysOn.maphilight'); 
      }
    }

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

    $(".progress-bar")[0].setAttribute("aria-valuenow","18");
    $(".progress-bar")[0].setAttribute('style',"width:18%");
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

    $(".progress-bar")[0].setAttribute("aria-valuenow","27");
    $(".progress-bar")[0].setAttribute('style',"width:27%");
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

    var ex7 = document.getElementById("UseOfSpace3");
    ex7.style.display = "none";
    currSlide -= 1;
    $(".progress-bar")[0].setAttribute("aria-valuenow","36");
    $(".progress-bar")[0].setAttribute('style',"width:36%");
  }
  else if (currSlide === 9) {
      // If user has not selected an option, alert with popup
    document.getElementById("UseOfSpace3").style.display = "block";
    let top = FloorA1Offset.top + FloorA1height + 30 +  "px";
    $('#Next').css({
      'top': top
    });

    $('#Back').css({
      'top': top
    });


      $('.UOP3_map1').maphilight({
        stroke: true,
        strokeColor: 'ff0000',
        strokeOpacity: 1,
        strokeWidth: 1,
      });
 
      $('map').imageMapResize();

    var ex7 = document.getElementById("network");
    ex7.style.display = "none";
    currSlide -= 1;
    $(".progress-bar")[0].setAttribute("aria-valuenow","45");
    $(".progress-bar")[0].setAttribute('style',"width:45%");
  }
  else if (currSlide === 10) {
      // If user has not selected an option, alert with popup
    document.getElementById("network").style.display = "block";
    let offset = $('#chart').offset();
    let height = $('#chart').height();
    let top = offset.top + height + 10 +  "px";
    $('#Next').css({
      'top': top
    });

    $('#Back').css({
      'top': top
    });


    var ex7 = document.getElementById("relationships3");
    ex7.style.display = "none";
    currSlide -= 1;

    $(".progress-bar")[0].setAttribute("aria-valuenow","54");
    $(".progress-bar")[0].setAttribute('style',"width:54%");
  }
  else if (currSlide === 11) {
      // If user has not selected an option, alert with popup
    document.getElementById("relationships3").style.display = "block";
    let offset = $('#relationships3').offset();
    let height = $('#relationships3').height();
    let top = offset.top + height + 10 +  "px";
    $('#Next').css({
      'top': top
    });

    $('#Back').css({
      'top': top
    });


    var ex7 = document.getElementById("relationships4");
    ex7.style.display = "none";
    currSlide -= 1;

    $(".progress-bar")[0].setAttribute("aria-valuenow","63");
    $(".progress-bar")[0].setAttribute('style',"width:63%");
  }
  else if (currSlide === 12) {
      // If user has not selected an option, alert with popup
    document.getElementById("relationships4").style.display = "block";
    let offset = $('#relationships4').offset();
    let height = $('#relationships4').height();
    let top = offset.top + height + 10 +  "px";
    $('#Next').css({
      'top': top
    });

    $('#Back').css({
      'top': top
    });


    var ex7 = document.getElementById("WLW_Space");
    ex7.style.display = "none";
    currSlide -= 1;

    $(".progress-bar")[0].setAttribute("aria-valuenow","72");
    $(".progress-bar")[0].setAttribute('style',"width:72%");
  }
  else if (currSlide === 13) {
      // If user has not selected an option, alert with popup
    document.getElementById("WLW_Space").style.display = "block";
    let top = FloorA1Offset.top + FloorA1height + 30 +  "px";
    $('#Next').css({
      'top': top
    });

    $('#Back').css({
      'top': top
    });

    var ex7 = document.getElementById("network");
    ex7.style.display = "none";
    currSlide -= 1;

    $(".progress-bar")[0].setAttribute("aria-valuenow","81");
    $(".progress-bar")[0].setAttribute('style',"width:81%");
  }
  else if (currSlide === 14) {
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
    $(".progress-bar")[0].setAttribute("aria-valuenow","90");
    $(".progress-bar")[0].setAttribute('style',"width:90%");
  }
  else{

  }
  $('#Previous').blur();
  clicked_back = true;
}



