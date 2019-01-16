$(document).ready(function(){
  // If the document is clicked somewhere
  $('#A1Floor').maphilight({
        stroke: false,
        //Use the color you want
        fillColor: '000000'
    });

  $(document).bind("mousedown", function(e) {
  
      // If the clicked element is not the menu
      if (!$(e.target).parents(".custom-menu").length > 0) {
  
          // Hide it
          $(".custom-menu").hide(100);
      }
  });
  
  
  // If the menu element is clicked
  $(".custom-menu li").click(function() {
  
      // This is the triggered action name
      switch ($(this).attr("data-action")) {
  
          // A case for each action. Your actions here

          case "first":
            event.preventDefault();
            var data = {};
            data.alwaysOn = true;
            data.stroke = 'none';
            data.strokeWidth = 0.0000001;
            data.strokeColor = 'f9d600';
            data.fillColor = 'f9d600'; // Sample color
            data.fillOpacity = 0.5;
            $(clicked_area_id).data('maphilight', data).trigger('alwaysOn.maphilight'); 
            break;
          case "second":
              alert("Usually");
              break;
          case "third":
              alert("Often");
              break;
          case "fourth":
              alert("Sometimes");
              break;
          case "fifth":
              alert("Rarely");
              break;
          case "sixth":
              alert("Never");
              break;
      }
  
      // Hide it AFTER the action was triggered
      $(".custom-menu").hide(100);
  });
});