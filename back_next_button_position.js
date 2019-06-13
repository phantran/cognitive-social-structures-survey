function setPositionOfNextBackButton(){
  if(currSlide === 3){
    let height_to_top = $("#personalInformation").height() + $("#personalInformation").position().top;
    $("#nextDiv").css("top", height_to_top + 80);
    $("#nextDiv").css("right", 100);
    $("#previousDiv").css("top", height_to_top + 80);
    $("#previousDiv").css("left", 100);
  }
  else if(currSlide === 4){
    let height_to_top = $("#UseOfSpace").height() + $("#UseOfSpace").position().top;
    $("#nextDiv").css("top", height_to_top + 80);
    $("#nextDiv").css("right", 100);
    $("#previousDiv").css("top", height_to_top + 80);
    $("#previousDiv").css("left", 100);
  }
  else if(currSlide === 5){
	let current_display_floor_id = "";
	if($('#floorA1').css("display") === "block"){
		current_display_floor_id = '#floorA1';
	}
	else if($('#floorR1').css("display") === "block"){
		current_display_floor_id = '#floorR1';
	}
	else if($('#floorR2').css("display") === "block"){
		current_display_floor_id = '#floorR2';
	}
	else{}
	
    let height_to_top = $(current_display_floor_id).height() + $(current_display_floor_id).position().top;
    $("#nextDiv").css("top", height_to_top + 200);
    $("#nextDiv").css("right", 100);
    $("#previousDiv").css("top", height_to_top + 200);
    $("#previousDiv").css("left", 100);
  }
  else if(currSlide === 6){
    let height_to_top = $("#relationships").height() + $("#relationships").position().top;
    $("#nextDiv").css("top", height_to_top + 150);
    $("#nextDiv").css("right", 100);
    $("#previousDiv").css("top", height_to_top + 150);
    $("#previousDiv").css("left", 100);
  }
  else if(currSlide === 7){
    let height_to_top = $("#relationships2").height() + $("#relationships2").position().top;
    $("#nextDiv").css("top", height_to_top + 180);
    $("#nextDiv").css("right", 100);
    $("#previousDiv").css("top", height_to_top + 180);
    $("#previousDiv").css("left", 100);
  }
  else if(currSlide === 8){
	let current_display_floor_id = "";
	if($('#UOP3_floorA1').css("display") === "block"){
		current_display_floor_id = '#UOP3_floorA1';
	}
	else if($('#UOP3_floorR1').css("display") === "block"){
		current_display_floor_id = '#UOP3_floorR1';
	}
	else if($('#UOP3_floorR2').css("display") === "block"){
		current_display_floor_id = '#UOP3_floorR2';
	}
	else{}
	
    let height_to_top = $(current_display_floor_id).height() + $(current_display_floor_id).position().top;
    $("#nextDiv").css("top", height_to_top + 200);
    $("#nextDiv").css("right", 100);
    $("#previousDiv").css("top", height_to_top + 200);
    $("#previousDiv").css("left", 100);
  }
  else if(currSlide === 9){
    let height_to_top = $("#network_layout")[0].getBoundingClientRect().height;
    $("#nextDiv").css("top", height_to_top + 400);
    $("#nextDiv").css("right", 100);
    $("#previousDiv").css("top", height_to_top + 400);
    $("#previousDiv").css("left", 100);
  }
  else if(currSlide === 10){
    let height_to_top = $("#relationships3").height() + $("#relationships3").position().top;
    $("#nextDiv").css("top", height_to_top + 150);
    $("#nextDiv").css("right", 100);
    $("#previousDiv").css("top", height_to_top + 150);
    $("#previousDiv").css("left", 100);
  }
  else if(currSlide === 11){
    let height_to_top = $("#relationships4").height() + $("#relationships4").position().top;

    $("#nextDiv").css("top", height_to_top + 180);
    $("#nextDiv").css("right", 100);
    $("#previousDiv").css("top", height_to_top + 180);
    $("#previousDiv").css("left", 100);
  }
  else if(currSlide === 12){
	let current_display_floor_id = "";
	if($('#WLW_floorA1').css("display") === "block"){
		current_display_floor_id = '#WLW_floorA1';
	}
	else if($('#WLW_floorR1').css("display") === "block"){
		current_display_floor_id = '#WLW_floorR1';
	}
	else if($('#WLW_floorR2').css("display") === "block"){
		current_display_floor_id = '#WLW_floorR2';
	}
	else{}
	
    let height_to_top = $(current_display_floor_id).height() + $(current_display_floor_id).position().top;
    $("#nextDiv").css("top", height_to_top +200);
    $("#nextDiv").css("right", 100);
    $("#previousDiv").css("top", height_to_top + 200);
    $("#previousDiv").css("left", 100);
  }
  else if(currSlide === 13){
    let height_to_top = $("#network_layout")[0].getBoundingClientRect().height;


    $("#nextDiv").css("top", height_to_top + 400);
    $("#nextDiv").css("right", 100);
    $("#previousDiv").css("top", height_to_top + 400);
    $("#previousDiv").css("left", 100);
  }
  else if(currSlide === 14){
    let height_to_top = $("#slide8").height() + $("#slide8").position().top;

    $("#finalSubmitButton").css("top", height_to_top );
    $("#finalSubmitButton").css("right", 100);
    $("#previousDiv").css("top", height_to_top );
    $("#previousDiv").css("left", 100);
  }
  else{}
}