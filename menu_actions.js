$(document).ready(function(){
  // If the document is clicked somewhere
  $(document).bind("mousedown", function(e) {
      // If the clicked element is not the menu
      if (($(e.target).parents(".custom-menu").length > 0) === false) {
          // Hide it
          $(".custom-menu").hide(100);
      }
  });
  
  $(document).bind("mousedown", function(e) {
      // If the clicked element is not the menu
      if (($(e.target).parents(".custom-menu1").length > 0) === false) {
          // Hide it
          $(".custom-menu1").hide(100);
      }
  });


  // If the menu element is clicked
  $(".custom-menu li").click(function(event) {
      // This is the triggered action name
      let data = {};
      data.strokeColor = '00fdf0';
      data.alwaysOn = true;
      data.stroke = true;
      data.strokeOpacity = 1;
      data.strokeWidth = 1;
      data.fillOpacity = 0.65;
      switch ($(this).attr("data-action")) {
  
        // A case for each action. Your actions here
        case "first":
          event.preventDefault();
          never_was_clicked = false;
          data.fillColor = '082128';       
          $(clicked_area_id).data('maphilight', data).trigger('alwaysOn.maphilight'); 
          $(clicked_area_id).attr("data-frequency", "Always");
          chosen_color = data.fillColor;
          break;

        case "second":
          event.preventDefault();
          never_was_clicked = false;
          data.fillColor = '0a4755'; 
          $(clicked_area_id).data('maphilight', data).trigger('alwaysOn.maphilight'); 
          $(clicked_area_id).attr("data-frequency", "Often");
          chosen_color = data.fillColor;
          break;

        case "third":
          event.preventDefault();
          never_was_clicked = false;
          data.fillColor = '0b748c'; 
          $(clicked_area_id).data('maphilight', data).trigger('alwaysOn.maphilight'); 
          $(clicked_area_id).attr("data-frequency", "Sometimes");
          chosen_color = data.fillColor;
          break;

        case "fourth":
          event.preventDefault();
          never_was_clicked = false;
          data.fillColor = '56e5ff'; 
          $(clicked_area_id).data('maphilight', data).trigger('alwaysOn.maphilight'); 
          $(clicked_area_id).attr("data-frequency", "Rarely");
          chosen_color = data.fillColor;
          break;

        case "fifth":
          event.preventDefault(); 
          never_was_clicked = true;
          let temp_data = {};
          temp_data.strokeColor = "C1C240";
          temp_data.strokeWidth = 5;
          temp_data.fillColor = "FFE97F";
          temp_data.fillOpacity = "0.4";
          temp_data.alwaysOn = false;
          $(clicked_area_id).data('maphilight', temp_data).trigger('alwaysOn.maphilight'); 
          $(clicked_area_id).removeAttr("data-frequency");
          chosen_color = temp_data.fillColor;
          break;
      }

      if($('#floorA1').css("display") === "block"){
        never_was_clicked_A1 = never_was_clicked;
      }

      else if($('#floorR1').css("display") === "block"){
        never_was_clicked_R1 = never_was_clicked;
      }

      else if($('#floorR2').css("display") === "block"){
        never_was_clicked_R2 = never_was_clicked;
      }

      else{}
      
        //Store information of the most recently clicked area.
      if($('#floorA1').css("display") === "block"){
        chosenColorA1 = chosen_color;
        clicked_area_id_A1 = clicked_area_id;
      }
      else if($('#floorR1').css("display") === "block"){
        chosenColorR1  = chosen_color;
        clicked_area_id_R1 = clicked_area_id;
      }     
      else if($('#floorR2').css("display") === "block"){
        chosenColorR2  = chosen_color;
        clicked_area_id_R2 = clicked_area_id;
      }
      else{}
  
      // Hide it AFTER the action was triggered
      $(".custom-menu").hide(100);
  });



  $("#save_button").click(function(event){ 
    let collected_result = $(".check_box_people_name");
    let number_of_checkboxes = $(".check_box_people_name").length;
    let temp_array = [];

    for(let i = 0; i < number_of_checkboxes; i++){
      if(collected_result[i].checked === true){
        temp_array.push(collected_result[i].value);
        collected_result[i].checked = false;
      }
    }

    if(temp_array.length === 0){
      
      let temp_data = {};
      temp_data.strokeColor = "C1C240";
      temp_data.strokeWidth = 5;
      temp_data.fillColor = "FFE97F";
      temp_data.fillOpacity = "0.4";
      temp_data.alwaysOn = false;
      if($('#UseOfSpace3').css("display") === "block"){
        $(UOP3_clicked_area_id).data('maphilight', temp_data).trigger('alwaysOn.maphilight');
      }
      else if($('#WLW_Space').css("display") === "block"){
        $(WLW_clicked_area_id).data('maphilight', temp_data).trigger('alwaysOn.maphilight');
      }

    }
    else{
      let data = {};
      data.strokeColor = '00fdf0';
      data.alwaysOn = true;
      data.stroke = true;
      data.strokeOpacity = 1;
      data.strokeWidth = 1;
      data.fillOpacity = 0.65;
      data.fillColor = '56e5ff';       
      if($('#UseOfSpace3').css("display") === "block"){
        $(UOP3_clicked_area_id).data('maphilight', data).trigger('alwaysOn.maphilight');
      }
      else if($('#WLW_Space').css("display") === "block"){
        $(WLW_clicked_area_id).data('maphilight', data).trigger('alwaysOn.maphilight');
      }
    }

    if($('#UseOfSpace3').css("display") === "block"){
      let area_name = $(UOP3_clicked_area_id).attr("title");
      console.log(area_name);
      
      //Store information of the most recently clicked area.
      if($('#UOP3_floorA1').css("display") === "block"){
        console.log(area_name);
        collected_data.meet_places.floor_rdc[area_name] = [];
        if(temp_array.length !== 0){
          collected_data.meet_places.floor_rdc[area_name] = temp_array;
        }
        else{
          //Search for the other area which has been filled with color
          collected_data.meet_places.floor_rdc[area_name] = [];
          if(Object.keys(collected_data.meet_places.floor_rdc).length !== 0){
            UOP3_clicked_area_id = "#UOP3_" + Object.keys(collected_data.meet_places.floor_rdc)[0];
          }
          delete collected_data.meet_places.floor_rdc[area_name];
        }
        UOP3_clicked_area_id_A1 = UOP3_clicked_area_id;
      }
      else if($('#UOP3_floorR1').css("display") === "block"){
        collected_data.meet_places.floor_r1[area_name] = [];
        if(temp_array.length !== 0){
          collected_data.meet_places.floor_r1[area_name] = temp_array;
        }
        else{
          if(Object.keys(collected_data.meet_places.floor_r1).length !== 0){
            UOP3_clicked_area_id = "#UOP3_" + Object.keys(collected_data.meet_places.floor_r1)[0];
          }        
          delete collected_data.meet_places.floor_r1[area_name];
        }
        UOP3_clicked_area_id_R1 = UOP3_clicked_area_id;
      }     
  
      else if($('#UOP3_floorR2').css("display") === "block"){
        collected_data.meet_places.floor_r2[area_name] = [];
        if(temp_array.length !== 0){
          collected_data.meet_places.floor_r2[area_name] = temp_array;
        }
        else{
          if(Object.keys(collected_data.meet_places.floor_r2).length !== 0){
            UOP3_clicked_area_id = "#UOP3_" + Object.keys(collected_data.meet_places.floor_r2)[0];
          }
          delete collected_data.meet_places.floor_r2[area_name];
        }
        UOP3_clicked_area_id_R2 = UOP3_clicked_area_id;
      }
      else{}
      $(".custom-menu1").hide(100);
    }
    else if($('#WLW_Space').css("display") === "block"){
      let area_name = $(WLW_clicked_area_id).attr("title");
      console.log(area_name);
      
      //Store information of the most recently clicked area.
      if($('#WLW_floorA1').css("display") === "block"){
        console.log(area_name);
        collected_data.meet_places_2.floor_rdc[area_name] = [];
        if(temp_array.length !== 0){
          collected_data.meet_places_2.floor_rdc[area_name] = temp_array;
        }
        else{
          //Search for the other area which has been filled with color
          collected_data.meet_places_2.floor_rdc[area_name] = [];
          if(Object.keys(collected_data.meet_places_2.floor_rdc).length !== 0){
            WLW_clicked_area_id = "#WLW_" + Object.keys(collected_data.meet_places_2.floor_rdc)[0];
          }
          delete collected_data.meet_places_2.floor_rdc[area_name];
        }
        WLW_clicked_area_id_A1 = WLW_clicked_area_id;
      }
  
      else if($('#WLW_floorR1').css("display") === "block"){
        collected_data.meet_places_2.floor_r1[area_name] = [];
        if(temp_array.length !== 0){
          collected_data.meet_places_2.floor_r1[area_name] = temp_array;
        }
        else{
          if(Object.keys(collected_data.meet_places_2.floor_r1).length !== 0){
            WLW_clicked_area_id = "#WLW_" + Object.keys(collected_data.meet_places_2.floor_r1)[0];
          }        
          delete collected_data.meet_places_2.floor_r1[area_name];
        }
        WLW_clicked_area_id_R1 = WLW_clicked_area_id;
      }     
  
      else if($('#WLW_floorR2').css("display") === "block"){
        collected_data.meet_places_2.floor_r2[area_name] = [];
        if(temp_array.length !== 0){
          collected_data.meet_places_2.floor_r2[area_name] = temp_array;
        }
        else{
          if(Object.keys(collected_data.meet_places_2.floor_r2).length !== 0){
            WLW_clicked_area_id = "#WLW_" + Object.keys(collected_data.meet_places_2.floor_r2)[0];
          }
          delete collected_data.meet_places_2.floor_r2[area_name];
        }
        WLW_clicked_area_id_R2 = WLW_clicked_area_id;
      }
      else{}
      $(".custom-menu1").hide(100);
    } 
    
  });



  $("#clear_button").click(function(event) {
    let list_checkboxes = $(".check_box_people_name");
    let number_of_checkboxes = $(".check_box_people_name").length;
    for(let i = 0; i < number_of_checkboxes; i++){
      if(list_checkboxes[i].checked === true){
        list_checkboxes[i].checked = false;
      }
    }
  });
});