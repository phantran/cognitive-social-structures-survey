//This source code contains functions that support going back and forth between floor 
//in the Use Of Space part


function goToFloorR1() {

  checked = false;
  document.getElementById("floorA1").style.display = "none";
  let ex4 = document.getElementById("floorR1");
  ex4.style.display = "block";

  $('.map2').maphilight({
    stroke: true,
    strokeColor: 'ff0000',
    strokeOpacity: 1,
    strokeWidth: 1,
  });

  $('map').imageMapResize();


  if(clicked_area_id_R1 !== ""){
    //This piece of code is used to display the colors of clicked areas
    if(never_was_clicked_R1 === true){
      let temp_data = {};
      temp_data.strokeColor = "C1C240";
      temp_data.strokeWidth = 5;
      temp_data.fillColor = "FFE97F";
      temp_data.fillOpacity = "0.4";
      temp_data.alwaysOn = false;
      $(clicked_area_id_R1).data('maphilight', temp_data).trigger('alwaysOn.maphilight'); 
    }
    else{
      var data = {};
      data.alwaysOn = true;
      data.stroke = true;
      data.strokeOpacity = 1;
      data.strokeWidth = 1;
      data.strokeColor = '00fdf0';
      data.fillColor = chosenColorR1; 
      data.fillOpacity = 0.65;
      $(clicked_area_id_R1).data('maphilight', data).trigger('alwaysOn.maphilight'); 
    }
  }
  setPositionOfNextBackButton();
}

function goToFloorR2() {

  checked = false;
  document.getElementById("floorR1").style.display = "none";
  let ex4 = document.getElementById("floorR2");
  ex4.style.display = "block";

  $('.map3').maphilight({
    stroke: true,
    strokeColor: 'ff0000',
    strokeOpacity: 1,
    strokeWidth: 1,
  });

  $('map').imageMapResize();

  if(clicked_area_id_R2 !== ""){
    //This piece of code is used to display the colors of clicked areas
    if(never_was_clicked_R2 === true){
      let temp_data = {};
      temp_data.strokeColor = "C1C240";
      temp_data.strokeWidth = 5;
      temp_data.fillColor = "FFE97F";
      temp_data.fillOpacity = "0.4";
      temp_data.alwaysOn = false;
      $(clicked_area_id_R2).data('maphilight', temp_data).trigger('alwaysOn.maphilight'); 
    }
    else{
      var data = {};
      data.alwaysOn = true;
      data.stroke = true;
      data.strokeOpacity = 1;
      data.strokeWidth = 1;
      data.strokeColor = '00fdf0';
      data.fillColor = chosenColorR2; 
      data.fillOpacity = 0.65;
      $(clicked_area_id_R2).data('maphilight', data).trigger('alwaysOn.maphilight'); 
    }
  }

  setPositionOfNextBackButton();

}


function goToFloorA1() {

  checked = false;
  document.getElementById("floorR2").style.display = "none";
  let ex4 = document.getElementById("floorA1");
  ex4.style.display = "block";

  $('.map1').maphilight({
      stroke: true,
      strokeColor: 'ff0000',
      strokeOpacity: 1,
      strokeWidth: 1,
  });

  $('map').imageMapResize();

  if(clicked_area_id_A1 !== ""){
    //This piece of code is used to display the colors of clicked areas
    if(never_was_clicked_A1 === true){
      let temp_data = {};
      temp_data.strokeColor = "C1C240";
      temp_data.strokeWidth = 5;
      temp_data.fillColor = "FFE97F";
      temp_data.fillOpacity = "0.4";
      temp_data.alwaysOn = false;
      $(clicked_area_id_A1).data('maphilight', temp_data).trigger('alwaysOn.maphilight'); 
    }
    else{
      var data = {};
      data.alwaysOn = true;
      data.stroke = true;
      data.strokeOpacity = 1;
      data.strokeWidth = 1;
      data.strokeColor = '00fdf0';
      data.fillColor = chosenColorA1; 
      data.fillOpacity = 0.65;
      $(clicked_area_id_A1).data('maphilight', data).trigger('alwaysOn.maphilight'); 
    }
  }
  setPositionOfNextBackButton();
}



function UOP3_goToFloorR1() {

  checked = false;
  document.getElementById("UOP3_floorA1").style.display = "none";
  let ex4 = document.getElementById("UOP3_floorR1");
  ex4.style.display = "block";

  $('.UOP3_map2').maphilight({
    stroke: true,
    strokeColor: 'ff0000',
    strokeOpacity: 1,
    strokeWidth: 1,
  });

  $('map').imageMapResize();

  if(Object.keys(collected_data.meet_places.floor_r1).length !== 0){
    if(UOP3_clicked_area_id_R1 !== ""){

      //This piece of code is used to display the colors of clicked areas
      let data = {};
      data.strokeColor = '00fdf0';
      data.alwaysOn = true;
      data.stroke = true;
      data.strokeOpacity = 1;
      data.strokeWidth = 1;
      data.fillOpacity = 0.65;
      data.fillColor = '56e5ff';  
      $(UOP3_clicked_area_id_R1).data('maphilight', data).trigger('alwaysOn.maphilight'); 
    }
  }
  setPositionOfNextBackButton();
}

function UOP3_goToFloorR2() {

  checked = false;
  document.getElementById("UOP3_floorR1").style.display = "none";
  let ex4 = document.getElementById("UOP3_floorR2");
  ex4.style.display = "block";

  $('.UOP3_map3').maphilight({
    stroke: true,
    strokeColor: 'ff0000',
    strokeOpacity: 1,
    strokeWidth: 1,
  });

  $('map').imageMapResize();

  if(Object.keys(collected_data.meet_places.floor_r2).length !== 0){
    if(UOP3_clicked_area_id_R2 !== ""){
      //This piece of code is used to display the colors of clicked areas
      let data = {};
      data.strokeColor = '00fdf0';
      data.alwaysOn = true;
      data.stroke = true;
      data.strokeOpacity = 1;
      data.strokeWidth = 1;
      data.fillOpacity = 0.65;
      data.fillColor = '56e5ff';  
      $(UOP3_clicked_area_id_R2).data('maphilight', data).trigger('alwaysOn.maphilight'); 
    }
  }

  setPositionOfNextBackButton();

}


function UOP3_goToFloorA1() {
  checked = false;
  document.getElementById("UOP3_floorR2").style.display = "none";
  let ex4 = document.getElementById("UOP3_floorA1");
  ex4.style.display = "block";

  $('.UOP3_map1').maphilight({
      stroke: true,
      strokeColor: 'ff0000',
      strokeOpacity: 1,
      strokeWidth: 1,
  });

  $('map').imageMapResize();

  if(Object.keys(collected_data.meet_places.floor_rdc).length !== 0){
    if(UOP3_clicked_area_id_A1 !== ""){
      //This piece of code is used to display the colors of clicked areas
      let data = {};
      data.strokeColor = '00fdf0';
      data.alwaysOn = true;
      data.stroke = true;
      data.strokeOpacity = 1;
      data.strokeWidth = 1;
      data.fillOpacity = 0.65;
      data.fillColor = '56e5ff';  
      $(UOP3_clicked_area_id_A1).data('maphilight', data).trigger('alwaysOn.maphilight'); 
    }
  }

  setPositionOfNextBackButton();
}




function WLW_goToFloorR1() {

  checked = false;
  document.getElementById("WLW_floorA1").style.display = "none";
  let ex4 = document.getElementById("WLW_floorR1");
  ex4.style.display = "block";

  $('.WLW_map2').maphilight({
    stroke: true,
    strokeColor: 'ff0000',
    strokeOpacity: 1,
    strokeWidth: 1,
  });

  $('map').imageMapResize();

  if(Object.keys(collected_data.meet_places_2.floor_r1).length !== 0){
    if(WLW_clicked_area_id_R1 !== ""){

      //This piece of code is used to display the colors of clicked areas
      let data = {};
      data.strokeColor = '00fdf0';
      data.alwaysOn = true;
      data.stroke = true;
      data.strokeOpacity = 1;
      data.strokeWidth = 1;
      data.fillOpacity = 0.65;
      data.fillColor = '56e5ff';  
      $(WLW_clicked_area_id_R1).data('maphilight', data).trigger('alwaysOn.maphilight'); 
    }
  }

  setPositionOfNextBackButton();

}

function WLW_goToFloorR2() {

  checked = false;
  document.getElementById("WLW_floorR1").style.display = "none";
  let ex4 = document.getElementById("WLW_floorR2");
  ex4.style.display = "block";

  $('.WLW_map3').maphilight({
    stroke: true,
    strokeColor: 'ff0000',
    strokeOpacity: 1,
    strokeWidth: 1,
  });

  $('map').imageMapResize();

  if(Object.keys(collected_data.meet_places_2.floor_r2).length !== 0){
    if(WLW_clicked_area_id_R2 !== ""){
      //This piece of code is used to display the colors of clicked areas
      let data = {};
      data.strokeColor = '00fdf0';
      data.alwaysOn = true;
      data.stroke = true;
      data.strokeOpacity = 1;
      data.strokeWidth = 1;
      data.fillOpacity = 0.65;
      data.fillColor = '56e5ff';  
      $(WLW_clicked_area_id_R2).data('maphilight', data).trigger('alwaysOn.maphilight'); 
    }
  }

  setPositionOfNextBackButton();
}


function WLW_goToFloorA1() {
  checked = false;
  document.getElementById("WLW_floorR2").style.display = "none";
  let ex4 = document.getElementById("WLW_floorA1");
  ex4.style.display = "block";

  $('.WLW_map1').maphilight({
      stroke: true,
      strokeColor: 'ff0000',
      strokeOpacity: 1,
      strokeWidth: 1,
  });

  $('map').imageMapResize();

  if(Object.keys(collected_data.meet_places_2.floor_rdc).length !== 0){
    if(WLW_clicked_area_id_A1 !== ""){
      //This piece of code is used to display the colors of clicked areas
      let data = {};
      data.strokeColor = '00fdf0';
      data.alwaysOn = true;
      data.stroke = true;
      data.strokeOpacity = 1;
      data.strokeWidth = 1;
      data.fillOpacity = 0.65;
      data.fillColor = '56e5ff';  
      $(WLW_clicked_area_id_A1).data('maphilight', data).trigger('alwaysOn.maphilight'); 
    }
  }
  setPositionOfNextBackButton();
}