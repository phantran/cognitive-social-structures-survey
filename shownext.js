
// showNext(): Prepares for next slide in survey. Hides previous slide and shows currSlide,
// performing whatever operations needed for preparing slide.
// A bit like the main() function
// ---------------------------------------------------------------------------------------
//collected_data = {scio_question:{q_name:"", age: "", gender:"", native_language:"", major:"", experience:"", research_field:"", position:""}, 
//                  use_of_space:{day_in:"", time_slot:"", have_lunch:"", switch_desk:""}, area_usage:{zone1:"", zone2:"", zone3:"", zone4:""},
//                  relationships:{contacted_with:[]}};
function showNext() {
  if (currSlide === 1) {
    document.getElementById("slide0").style.display = "none";
    document.getElementById("slide1").style.display = "block";


    currSlide += 1;
  }else if (currSlide === 2){
    document.getElementById("slide1").style.display = "none";
    var ex2 = document.getElementById("personalInformation");
    ex2.style.left = string_l + "px";
    ex2.style.top = string_t;
    ex2.style.display = "block";

    let offset = $('#personalInformation').offset();
    let height = $('#personalInformation').height();
    let top = offset.top + height + 10 +  "px";
    $('#Next').css({
      'top': top
    });

    $('#Back').css({
      'top': top
    });


    currSlide += 1;
  }else if (currSlide === 3) {
      // If user has not selected an option, alert with popup
      if ((($('#input_name').val() === '') || ($('#input_age').val() === '') || 
            (($('#gender_male').checked == false) && ($('#gender_female').checked == false) && ($('#other').checked == false)) || 
            ($('#input_major').val() === '') || ($('#input_experience').val() === '') || ($('#input_research_field').val() === '') || 
            ($('#input_position').val() === '')) && (checked === false) ){
          promptNonresponse();
          checked = true;
      }else {
        checked = false;

         // Collect data before going on
        collected_data.socio_question.name = document.getElementById("input_name").value;
        collected_data.socio_question.age = document.getElementById("input_age").value;
        if(document.getElementById("gender_male").checked){
          collected_data.socio_question.gender = "male";
        }
        else if(document.getElementById("gender_female").checked){
          collected_data.socio_question.gender = "female";
        }
        else if(document.getElementById("other").checked){
          collected_data.socio_question.gender = "other";
        }
        else{
        }
        
        collected_data.socio_question.native_language = document.getElementById("select_language").value;
        collected_data.socio_question.major = document.getElementById("input_major").value;
        collected_data.socio_question.year_experience = document.getElementById("input_experience").value;
        collected_data.socio_question.research_field = document.getElementById("input_research_field").value;
        collected_data.socio_question.current_position = document.getElementById("input_position").value;

        //Display the new slide
        document.getElementById("personalInformation").style.display = "none";
        var ex3 = document.getElementById("UseOfSpace");
        ex3.style.left = string_l + "px";
        ex3.style.top = string_t;
        ex3.style.display = "block";

        let offset = $('#UseOfSpace').offset();
        let height = $('#UseOfSpace').height();
        let top = offset.top + height + 10 +  "px";
        $('#Next').css({
          'top': top
        });

        $('#Back').css({
          'top': top
        });
        currSlide += 1;
      }
  }
  else if (currSlide === 4) {
      // If user has not selected an option, alert with popup
      
      if (((($('#in_date1').checked == false) && ($('#in_date2').checked == false) && ($('#in_date3').checked == false) && ($('#in_date4').checked == false) && ($('#in_date5').checked == false) && ($('#in_date6').checked == false) && ($('#in_date7').checked == false)) || 
            ($('#input_time_slot_from').val() === '00:00') || ($('#input_time_slot_to').val() === '00:00') || 
            (($('#never_lunch').checked == false) && ($('#sometimes_lunch').checked == false) && ($('#often_lunch').checked == false) && ($('#always_lunch').checked == false)) ||
            (($('#yes_switch').checked == false) && ($('#no_switch').checked == false))) && (checked === false) ) {
          promptNonresponse();
          checked = true;
      } else {
        checked = false;
        // Collect data before going on
        let in_dates = [];
        if(document.getElementById("in_date1").checked){
          in_dates.push("Monday");
        }

        if(document.getElementById("in_date2").checked){
          in_dates.push("Tuesday");
        }

        if(document.getElementById("in_date3").checked){
          in_dates.push("Wednesday");
        }

        if(document.getElementById("in_date4").checked){
          in_dates.push("Thursday");
        }

        if(document.getElementById("in_date5").checked){
          in_dates.push("Friday");
        }

        if(document.getElementById("in_date6").checked){
          in_dates.push("Saturday");
        }

        if(document.getElementById("in_date7").checked){
          in_dates.push("Sunday");
        }

        collected_data.use_of_space.days_in = in_dates;

        collected_data.use_of_space.time_slot = document.getElementById("input_time_slot_from").value + " to " + document.getElementById("input_time_slot_to").value;
        if(document.getElementById("never_lunch").checked){
          collected_data.use_of_space.have_lunch = "Never";
        }
        else if(document.getElementById("sometimes_lunch").checked){
          collected_data.use_of_space.have_lunch = "Sometimes";
        }
        else if(document.getElementById("often_lunch").checked){
          collected_data.use_of_space.have_lunch = "Often";
        }
        else if(document.getElementById("always_lunch").checked){
          collected_data.use_of_space.have_lunch = "Always";
        }
        else{}
        

        if(document.getElementById("yes_switch").checked){
          collected_data.use_of_space.switch_desk = "Yes";
        }
        else if(document.getElementById("no_switch").checked){
          collected_data.use_of_space.switch_desk = "No";
        }


        //Display the new slide
        document.getElementById("UseOfSpace").style.display = "none";
        var ex4 = document.getElementById("UseOfSpace2");
        //ex4.style.left = string_l + "px";
        ex4.style.top = string_t;
        ex4.style.display = "block";

        $('.map1').maphilight({
          stroke: true,
          strokeColor: 'ff0000',
          strokeOpacity: 1,
          strokeWidth: 1,
        });

        $('map').imageMapResize();

        if(FloorA1Offset == 0 && FloorA1height == 0){
          FloorA1Offset = $('#A1Floor').offset();
          FloorA1height = $('#A1Floor').height();
        }
        let top = FloorA1Offset.top + FloorA1height + 20 +  "px";
        $('#Next').css({

          'top': top 
        });

        $('#Back').css({
          'top': top
        });


        currSlide += 1;
      }
  }
  else if (currSlide === 5) {

    checked = false;
    //Collect data before going on
    //Floor rdc
    collected_data.area_usage.floor_rdc.meeting_room_castex      =     $('#meeting_room_castex').attr('data-frequency');
    collected_data.area_usage.floor_rdc.meeting_room_gay_lussac =      $('#meeting_room_gay_lussac').attr('data-frequency');
    collected_data.area_usage.floor_rdc.meeting_room_tour_maubourg =   $('#meeting_room_tour_maubourg').attr('data-frequency');
    collected_data.area_usage.floor_rdc.coffee_zone =      $('#coffee_zone').attr('data-frequency');
    collected_data.area_usage.floor_rdc.cafeteria =  $('#cafeteria').attr('data-frequency');
    collected_data.area_usage.floor_rdc.main_courtyard =   $('#main_courtyard').attr('data-frequency');
    collected_data.area_usage.floor_rdc.agoranov_open_office =   $('#agoranov_open_office').attr('data-frequency');
    collected_data.area_usage.floor_rdc.agoranov_office_1 =      $('#agoranov_office_1').attr('data-frequency');
    collected_data.area_usage.floor_rdc.agoranov_office_2 =      $('#agoranov_office_2').attr('data-frequency');
    collected_data.area_usage.floor_rdc.second_courtyard =       $('#second_courtyard').attr('data-frequency');
    collected_data.area_usage.floor_rdc.agoranov_office_3 =      $('#agoranov_office_3').attr('data-frequency');
    collected_data.area_usage.floor_rdc.playing_room =     $('#playing_room').attr('data-frequency');
    collected_data.area_usage.floor_rdc.lounge_toudic =    $('#lounge_toudic').attr('data-frequency');
    collected_data.area_usage.floor_rdc.lounge_kennedy =   $('#lounge_kennedy').attr('data-frequency');
    collected_data.area_usage.floor_rdc.lounge_scott =     $('#lounge_scott').attr('data-frequency');
    collected_data.area_usage.floor_rdc.box_1 =      $('#box_1').attr('data-frequency');
    collected_data.area_usage.floor_rdc.box_2 =      $('#box_2').attr('data-frequency');
    collected_data.area_usage.floor_rdc.box_3 =      $('#box_3').attr('data-frequency');
    collected_data.area_usage.floor_rdc.talking_zone_1 =   $('#talking_zone_1').attr('data-frequency');
    collected_data.area_usage.floor_rdc.box_4 =      $('#box_4').attr('data-frequency');
    collected_data.area_usage.floor_rdc.box_5 =      $('#box_5').attr('data-frequency');
    collected_data.area_usage.floor_rdc.box_6 =      $('#box_6').attr('data-frequency');
    collected_data.area_usage.floor_rdc.box_7 =      $('#box_7').attr('data-frequency');
    collected_data.area_usage.floor_rdc.box_8 =      $('#box_8').attr('data-frequency');
    collected_data.area_usage.floor_rdc.box_9 =      $('#box_9').attr('data-frequency');
    collected_data.area_usage.floor_rdc.talking_zone_2 =   $('#talking_zone_2').attr('data-frequency');
    collected_data.area_usage.floor_rdc.box_10 =     $('#box_10').attr('data-frequency');
    collected_data.area_usage.floor_rdc.extra_space  =     $('#extra_space').attr('data-frequency');
    collected_data.area_usage.floor_rdc.agoranov_office_4    = $('#agoranov_office_4').attr('data-frequency');

    //Floor r1
    collected_data.area_usage.floor_r1.office_1_1  = $("#office_1_1").attr('data-frequency');
    collected_data.area_usage.floor_r1.office_1_2   = $("#office_1_2").attr('data-frequency');
    collected_data.area_usage.floor_r1.office_1_3   = $("#office_1_3").attr('data-frequency');
    collected_data.area_usage.floor_r1.office_1_4   = $("#office_1_4").attr('data-frequency');
    collected_data.area_usage.floor_r1.office_1_5   = $("#office_1_5").attr('data-frequency');
    collected_data.area_usage.floor_r1.lab1_1   = $("#lab1_1").attr('data-frequency');
    collected_data.area_usage.floor_r1.library   = $("#library").attr('data-frequency');
    collected_data.area_usage.floor_r1.office_agoranov_5  = $("#office_agoranov_5").attr('data-frequency');
    collected_data.area_usage.floor_r1.resting_room  =   $("#resting_room").attr('data-frequency');
    collected_data.area_usage.floor_r1.lab1_2  =  $("#lab1_2").attr('data-frequency');
    collected_data.area_usage.floor_r1.office_1_6  =  $("#office_1_6").attr('data-frequency');
    collected_data.area_usage.floor_r1.office_1_7  =  $("#office_1_7").attr('data-frequency');
    collected_data.area_usage.floor_r1.office_1_8  =  $("#office_1_8").attr('data-frequency');
    collected_data.area_usage.floor_r1.office_1_9  =  $("#office_1_9").attr('data-frequency');
    collected_data.area_usage.floor_r1.office_1_10  =  $("#office_1_10").attr('data-frequency');
    collected_data.area_usage.floor_r1.office_1_11 =   $("#office_1_11").attr('data-frequency');


    //Floor r2
    collected_data.area_usage.floor_r2.extra_space_2  =  $('#extra_space_2').attr('data-frequency');
    collected_data.area_usage.floor_r2.office_2_1  = $('#office_2_1').attr('data-frequency');
    collected_data.area_usage.floor_r2.office_2_2  = $('#office_2_2').attr('data-frequency');
    collected_data.area_usage.floor_r2.office_2_3  = $('#office_2_3').attr('data-frequency');
    collected_data.area_usage.floor_r2.office_2_4  = $('#office_2_4').attr('data-frequency');
    collected_data.area_usage.floor_r2.office_2_5  = $('#office_2_5').attr('data-frequency');
    collected_data.area_usage.floor_r2.office_2_6  = $('#office_2_6').attr('data-frequency');
    collected_data.area_usage.floor_r2.open_office_2  = $('#open_office_2').attr('data-frequency');
    collected_data.area_usage.floor_r2.lab_2_1  = $('#lab_2_1').attr('data-frequency');
    collected_data.area_usage.floor_r2.lab_2_2  = $('#lab_2_2').attr('data-frequency');
    collected_data.area_usage.floor_r2.lab_2_3  = $('#lab_2_3').attr('data-frequency');
    collected_data.area_usage.floor_r2.lab_2_4  = $('#lab_2_4').attr('data-frequency');
    collected_data.area_usage.floor_r2.lab_2_5  = $('#lab_2_5').attr('data-frequency');
    collected_data.area_usage.floor_r2.extra_space_3 = $('#extra_space_3').attr('data-frequency');


    //Displaying the new slide
    document.getElementById("UseOfSpace2").style.display = "none";
    var ex5 = document.getElementById("relationships");
    ex5.style.left = string_l + "px";
    ex5.style.top = string_t;
    ex5.style.display = "block";


    let offset = $('#relationships').offset();
    let height = $('#relationships').height();
    let top = offset.top + height + 10 +  "px";

    $('#Next').css({
      'top': top
    });

    $('#Back').css({
      'top': top
    });
    currSlide += 1;


  }
  else if (currSlide === 6) {
      // If user has not selected an option, alert with popup
    slide6_is_reached = true;
    if (($('#input_contact0').val() === "") && (checked === false) ) {
      promptNonresponse();
      checked = true;
    } else {
      checked = false;

      //Collect data before going on
      collected_data.relationships.contacted_with = [];
      let number_of_text_box = $('.InputPeopleName').length;
      for(i = 0; i < number_of_text_box; i++){
        let text_box_id = "#input_contact" + i;
        let text_box_content = $(text_box_id).val();
        if(text_box_content !== ""){
          collected_data.relationships.contacted_with.push(text_box_content);
        }
      }

      //Displaying the new slide 
      // Clean the table before adding new rows
      let count = document.getElementById("relationship_table1").rows.length;
  
      while(count > 1){
        let r = count;
        console.log(r - 1);
        document.getElementById("relationship_table1").deleteRow(r-1);
        document.getElementById("relationship_table2").deleteRow(r-1);
        count = count - 1;
      }

      // Adding new rows corresponding to people names
      let name_array = [];
      let number_of_names = $("#addRelationships input").length;
      //console.log(number_of_names);
      for(i = 0; i < number_of_names; i++){
        let name_input_id = 'input_contact' + i.toString();
        name_array.push(document.getElementById(name_input_id).value);
      }
      document.getElementById("relationships").style.display = "none";

      
      for(i = 0; i < name_array.length; i++){
        if(name_array[i] !== ""){
          let table = document.getElementById("relationship_table1");
          let row = table.insertRow();
          let cell0 = row.insertCell(0);
          let cell1 = row.insertCell(1);
          let cell2 = row.insertCell(2);
          let cell3 = row.insertCell(3);
          let cell4 = row.insertCell(4);
          let temp = "howOften1" + i;
          let name = "name=" + temp;
 
        
          cell0.innerHTML = name_array[i];
          cell1.innerHTML = '<input class="radio_relationship" type="radio"'+ name + ' value="never">';
          cell2.innerHTML = '<input class="radio_relationship" type="radio"' + name + ' value="rarely">';
          cell3.innerHTML = '<input class="radio_relationship" type="radio"' + name + ' value="sometimes">';
          cell4.innerHTML = '<input class="radio_relationship" type="radio"' + name + ' value="often">';
        }
      }
    
      for(i = 0; i < name_array.length; i++){
        if(name_array[i] !== ""){
          let table1 = document.getElementById("relationship_table2");
          let row1 = table1.insertRow();
          let cell10 = row1.insertCell(0);
          let cell11 = row1.insertCell(1);
          let cell12 = row1.insertCell(2);
          let cell13 = row1.insertCell(3);
          let cell14 = row1.insertCell(4);
          let name = "name=" + "howOften2" + i;
          cell10.innerHTML = name_array[i];
          cell11.innerHTML = '<input class="radio_relationship" type="checkbox"' + name + ' value="work">';
          cell12.innerHTML = '<input class="radio_relationship" type="checkbox"' + name + ' value="social_network">';
          cell13.innerHTML = '<input class="radio_relationship" type="checkbox"' + name + ' value="c">';
          cell14.innerHTML = '<input class="radio_relationship" type="checkbox"' + name + ' value="d">';
        }
      }
    
      let ex6 = document.getElementById("relationships2");
      ex6.style.left = string_l + "px";
      ex6.style.top = string_t;
      ex6.style.display = "block";
      currSlide += 1;
      
      let offset = $('#relationships2').offset();
      let height = $('#relationships2').height();
      let top = offset.top + height + 10 +  "px";
      $('#Next').css({
        'top': top
      });
  
      $('#Back').css({
        'top': top
      });
    }
  } 
  else if (currSlide === 7) {
    // If user has not selected an option, alert with popups
    let radio_button_object = $(".radio_relationship");
    let number_of_group_radio = 1;
    for(i = 0; i < radio_button_object.length - 1; i++){
      if(radio_button_object[i].name != radio_button_object[i+1].name){
        number_of_group_radio = number_of_group_radio + 1;
      }
    }
    let number_of_checked_radio = $(".radio_relationship:checked").length;

    if((number_of_checked_radio < number_of_group_radio) && (checked === false) ) {
      promptNonresponse();
      checked = true;
    } else {
      checked = false;
      //Collect data before going on 
      collected_data.relationships.in_context = {};
      collected_data.relationships.often_talk_with = {};
      let talk_frequency_list = {};
      let table_1 = document.getElementById("relationship_table1");
      let number_of_rows = document.getElementById("relationship_table1").rows.length;
      for(i = 1; i < number_of_rows; i++){
        let key = table_1.rows[i].cells[0].innerHTML;

        for(j = 1; j < 5; j++){
          if(table_1.rows[i].cells[j].getElementsByTagName("input")[0].checked === true){
            if(j === 1){
              talk_frequency_list[key] = "Never";
            }
            else if(j === 2){
              talk_frequency_list[key] = "Rarely";
            }
            else if(j === 3){
              talk_frequency_list[key] = "Sometimes";
            }
            else if(j === 4){
              talk_frequency_list[key] = "Often";
            }else{

            }
          }
        }
      }


      collected_data.relationships.often_talk_with = talk_frequency_list;

      let talk_context_list = {};
      let table_2 = document.getElementById("relationship_table2");
      number_of_rows = document.getElementById("relationship_table2").rows.length;
      for(i = 1; i < number_of_rows; i++){
        let key = table_2.rows[i].cells[0].innerHTML;
        if(!(key in talk_context_list)){
          talk_context_list[key] = [];
        }
        for(j = 1; j < 5; j++){
          if(table_2.rows[i].cells[j].getElementsByTagName("input")[0].checked === true){
            if(j === 1){
              talk_context_list[key].push("Work");
            }
            else if(j === 2){
              talk_context_list[key].push("Social Network");
            }
            else if(j === 3){
              talk_context_list[key].push("C");
            }
            else if(j === 4){
              talk_context_list[key].push("D");
            }else{

            }
          }
        }
      }
      collected_data.relationships.in_context = talk_context_list;



      document.getElementById("relationships").style.display = "none";
      document.getElementById("relationships2").style.display = "none";
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
      
      currSlide += 1;
    }
  }
  else if (currSlide === 8) {

    //Collected data before going on
    let connection_list = {};
    collected_data.network_data = connection_list
    let links_list = $('.link');
    let number_of_links = $('.link').length;
    let nodes_list = $('.nodelabel');
    let number_of_nodes = $('.nodelabel').length;

    for(i = 0; i < number_of_nodes; i++){
      let x_node = Number(nodes_list[i].getAttribute('x'));
      let y_node = Number(nodes_list[i].getAttribute('y'));
      let node_name = nodes_list[i].textContent;
      console.log(node_name)
      connection_list[node_name] = [];
      let x_upperbound = x_node + 0.1;
      let x_lowerbound = x_node - 0.1;
      let y_upperbound = y_node + 0.1;
      let y_lowerbound = y_node - 0.1;

      for(j = 0; j < number_of_links; j++){
        let x1 = Number(links_list[j].getAttribute('x1'));
        let y1 = Number(links_list[j].getAttribute('y1'));
        let x2 = Number(links_list[j].getAttribute('x2'));
        let y2 = Number(links_list[j].getAttribute('y2'));
        if( (x_lowerbound <= x1) && (x1 <= x_upperbound ) && (y_lowerbound <= y1) && (y1 <= y_upperbound) ) {
          for(k = 0; k < number_of_nodes; k ++){
            let x2_node = Number(nodes_list[k].getAttribute('x'));
            let y2_node = Number(nodes_list[k].getAttribute('y'));
            let x2_upperbound = x2_node + 0.1;
            let x2_lowerbound = x2_node - 0.1;
            let y2_upperbound = y2_node + 0.1;
            let y2_lowerbound = y2_node - 0.1;
            if( (x2_lowerbound <= x2) && (x2  <= x2_upperbound ) && (y2_lowerbound <= y2) && (y2 <= y2_upperbound) ) {
              let connected_node_name = nodes_list[k].textContent;
              if(!connection_list[node_name].includes(connected_node_name) && (node_name != connected_node_name)){

                connection_list[node_name].push(connected_node_name);
              }
            }
          }
        }
        else if((x_lowerbound <= x2) && (x2 <= x_upperbound ) && (y_lowerbound <= y2) && (y2 <= y_upperbound)){
          for(k = 0; k < number_of_nodes; k ++){

            let x1_node = Number(nodes_list[k].getAttribute('x'));
            let y1_node = Number(nodes_list[k].getAttribute('y'));
            let x1_upperbound = x1_node + 0.1;
            let x1_lowerbound = x1_node - 0.1;
            let y1_upperbound = y1_node + 0.1;
            let y1_lowerbound = y1_node - 0.1;
            if( (x1_lowerbound <= x1) && (x1 <= x1_upperbound ) && (y1_lowerbound <= y1) && (y1 <= y1_upperbound) ){
              let connected_node_name = nodes_list[k].textContent;
              if(!connection_list[node_name].includes(connected_node_name) && node_name != connected_node_name){

                connection_list[node_name].push(connected_node_name);
              }
            }
          }
        }
      }
    }

    collected_data.network_data = connection_list;


    document.getElementById("network").style.display = "none";
    document.getElementById("slide8").style.display = "block";
    let offset = $('#slide8').offset();
    let height = $('#slide8').height();
    let top = offset.top + height + 10 +  "px";
    $('#Next').css({
      'display': "none" 
    });
    
    $('#Back').css({
      'top': top
    });
    document.getElementById("finalSubmitButton").style.display = "block";
    $('#finalSubmitButton').css({
      'top': top,
      'left': "80%"
    });
      
      currSlide += 1;
  }
  else if (currSlide === 9) {
      // If user has not selected an option, alert with popup

    checked = false;
    document.getElementById("slide8").style.display = "none";
    document.getElementById("slide9").style.display = "block";
    $('#Next').css({
      'display': "none"
    });
    
    $('#Back').css({
      'display': "none"
    });

    $('#finalSubmitButton').css({
      'display': "none"
    });
      
    currSlide += 1;
  }
  else{

  }
  $('#Next').blur();
  clicked_back = false;
}



function goToFloorR1() {

  checked = false;
  document.getElementById("floorA1").style.display = "none";
  let ex4 = document.getElementById("floorR1");
  ex4.style.top = string_t;
  ex4.style.display = "block";

  $('.map2').maphilight({
    stroke: true,
    strokeColor: 'ff0000',
    strokeOpacity: 1,
    strokeWidth: 1,
  });

  $('map').imageMapResize();


  let offset = $('#R1Floor').offset();
  let height = $('#R1Floor').height();
  let top = offset.top + height + 20 +  "px";

  $('#Next').css({
    'top': top
  });

  $('#Back').css({
    'top': top
  });

}

function goToFloorR2() {


  checked = false;
  document.getElementById("floorR1").style.display = "none";
  let ex4 = document.getElementById("floorR2");
  ex4.style.top = string_t;
  ex4.style.display = "block";

  $('.map3').maphilight({
    stroke: true,
    strokeColor: 'ff0000',
    strokeOpacity: 1,
    strokeWidth: 1,
  });

  $('map').imageMapResize();

  let offset = $('#R2Floor').offset();
  let height = $('#R2Floor').height();
  let top = offset.top + height + 20 +  "px";

  $('#Next').css({
    'top': top
  });

  $('#Back').css({
    'top': top
  });

}


function goToFloorA1() {


    checked = false;
    document.getElementById("floorR2").style.display = "none";
    let ex4 = document.getElementById("floorA1");
    ex4.style.top = string_t;
    ex4.style.display = "block";

    $('.map1').maphilight({
        stroke: true,
        strokeColor: 'ff0000',
        strokeOpacity: 1,
        strokeWidth: 1,
    });

    $('map').imageMapResize();

    let offset = $('#A1Floor').offset();
    let height = $('#A1Floor').height();
    let top = offset.top + height + 20 +  "px";

    $('#Next').css({
        'top': top
    });

    $('#Back').css({
        'top': top
    });

}

function dataSubmission() {
  $.ajax({
    type: 'POST',
    data: JSON.stringify(collected_data),
    contentType: 'application/json',
    url: 'http://localhost:3000/save',            
    success: function(data) {
      console.log('success');
      console.log(JSON.stringify(data));
    }
  });
  showNext();
}




