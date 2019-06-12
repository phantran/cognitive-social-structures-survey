function setPositionOfNextBackButton(){
  if(currSlide === 3){
    let height_to_top = $("#personalInformation").height() + $("#personalInformation").position().top;
    let element_left =  $("#personalInformation").position().left;
    let element_right =  $("#personalInformation").position().right;
    let next_div_width = $("#nextDiv").width() + 10;

    $("#nextDiv").css("top", height_to_top + 80);
    $("#nextDiv").css("right", element_right);
    $("#previousDiv").css("top", height_to_top + 80);
    $("#previousDiv").css("left", element_left - next_div_width);
  }
  else if(currSlide === 4){
    let height_to_top = $("#UseOfSpace").height() + $("#UseOfSpace").position().top;
    let element_left = $("#UseOfSpace").width() + $("#UseOfSpace").position().left;
    let element_right = $("#UseOfSpace").width() + $("#UseOfSpace").position().right;
    let next_div_width = $("#nextDiv").width() + 10;

    $("#nextDiv").css("top", height_to_top + 80);
    $("#nextDiv").css("right", element_right);
    $("#previousDiv").css("top", height_to_top + 80);
    $("#previousDiv").css("right", element_left);
  }
  else if(currSlide === 5){
    let height_to_top = $("#UseOfSpace2").height() + $("#UseOfSpace2").position().top;
    let element_left = $("#UseOfSpace2").width() + $("#UseOfSpace2").position().left;
    let element_right = $("#UseOfSpace2").width() + $("#UseOfSpace2").position().right;
    let next_div_width = $("#nextDiv").width() + 10;

    $("#nextDiv").css("top", height_to_top - 450);
    $("#nextDiv").css("right", element_right);
    $("#previousDiv").css("top", height_to_top - 450);
    $("#previousDiv").css("right", element_left);
  }
  else if(currSlide === 6){
    let height_to_top = $("#relationships").height() + $("#relationships").position().top;
    let element_left = $("#relationships").width() + $("#relationships").position().left;
    let element_right = $("#relationships").width() + $("#relationships").position().right;

    $("#nextDiv").css("top", height_to_top + 150);
    $("#nextDiv").css("right", element_right);
    $("#previousDiv").css("top", height_to_top + 150);
    $("#previousDiv").css("right", element_left);
  }
  else if(currSlide === 7){
    let height_to_top = $("#relationships2").height() + $("#relationships2").position().top;
    let element_left = $("#relationships2").width() + $("#relationships2").position().left;
    let element_right = $("#relationships2").width() + $("#relationships2").position().right;

    $("#nextDiv").css("top", height_to_top + 180);
    $("#nextDiv").css("right", element_right);
    $("#previousDiv").css("top", height_to_top + 180);
    $("#previousDiv").css("right", element_left);
  }
  else if(currSlide === 8){
    let height_to_top = $("#UseOfSpace3").height() + $("#UseOfSpace3").position().top;
    let element_left = $("#UseOfSpace3").width() + $("#UseOfSpace3").position().left;
    let element_right = $("#UseOfSpace3").width() + $("#UseOfSpace3").position().right;

    $("#nextDiv").css("top", height_to_top - 450);
    $("#nextDiv").css("right", element_right);
    $("#previousDiv").css("top", height_to_top - 450);
    $("#previousDiv").css("right", element_left);
  }
  else if(currSlide === 9){
    let height_to_top = $("#network").height() + $("#network").position().top;
    let element_left = $("#network").width() + $("#network").position().left;
    let element_right = $("#network").width() + $("#network").position().right;

    $("#nextDiv").css("top", height_to_top + 80);
    $("#nextDiv").css("right", element_right);
    $("#previousDiv").css("top", height_to_top + 80);
    $("#previousDiv").css("right", element_left);
  }
  else if(currSlide === 10){
    let height_to_top = $("#relationships3").height() + $("#relationships3").position().top;
    let element_left = $("#relationships3").width() + $("#relationships3").position().left;
    let element_right = $("#relationships3").width() + $("#relationships3").position().right;

    $("#nextDiv").css("top", height_to_top + 150);
    $("#nextDiv").css("right", element_right);
    $("#previousDiv").css("top", height_to_top + 150);
    $("#previousDiv").css("right", element_left);
  }
  else if(currSlide === 11){
    let height_to_top = $("#relationships4").height() + $("#relationships4").position().top;
    let element_left = $("#relationships4").width() + $("#relationships4").position().left;
    let element_right = $("#relationships4").width() + $("#relationships4").position().right;

    $("#nextDiv").css("top", height_to_top + 180);
    $("#nextDiv").css("right", element_right);
    $("#previousDiv").css("top", height_to_top + 180);
    $("#previousDiv").css("right", element_left);
  }
  else if(currSlide === 12){
    let height_to_top = $("#WLW_Space").height() + $("#WLW_Space").position().top;
    let element_left = $("#WLW_Space").width() + $("#WLW_Space").position().left;
    let element_right = $("#WLW_Space").width() + $("#WLW_Space").position().right;

    $("#nextDiv").css("top", height_to_top - 450);
    $("#nextDiv").css("right", element_right);
    $("#previousDiv").css("top", height_to_top - 450);
    $("#previousDiv").css("right", element_left);
  }
  else if(currSlide === 13){
    let height_to_top = $("#network").height() + $("#network").position().top;
    let element_left = $("#network").width() + $("#network").position().left;
    let element_right = $("#network").width() + $("#network").position().right;

    $("#nextDiv").css("top", height_to_top + 80);
    $("#nextDiv").css("right", element_right);
    $("#previousDiv").css("top", height_to_top + 80);
    $("#previousDiv").css("right", element_left);
  }
  else if(currSlide === 14){
    let height_to_top = $("#slide8").height() + $("#slide8").position().top;

    $("#finalSubmitButton").css("top", height_to_top );
    $("#finalSubmitButton").css("right", 200);
    $("#previousDiv").css("top", height_to_top );
    $("#previousDiv").css("left", 200);
  }
  else{}
}