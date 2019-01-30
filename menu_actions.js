$(document).ready(function(){
  // If the document is clicked somewhere
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
            data.stroke = true;
            data.strokeOpacity = 1;
            data.strokeWidth = 1;
            data.strokeColor = '00fdf0';
            data.fillColor = '082128'; // Sample color
            data.fillOpacity = 0.65;
            $(clicked_area_id).data('maphilight', data).trigger('alwaysOn.maphilight'); 
            $(clicked_area_id).attr("data-frequency", "Always");
            break;
          case "second":
            event.preventDefault();
            var data = {};
            data.alwaysOn = true;
            data.stroke = true;
            data.strokeOpacity = 1;
            data.strokeWidth = 1;
            data.strokeColor = '00fdf0';
            data.fillColor = '0a4755'; // Sample color
            data.fillOpacity = 0.65;
            $(clicked_area_id).data('maphilight', data).trigger('alwaysOn.maphilight'); 
            $(clicked_area_id).attr("data-frequency", "Often");
            break;
          case "third":
            event.preventDefault();
            var data = {};
            data.alwaysOn = true;
            data.stroke = true;
            data.strokeOpacity = 1;
            data.strokeWidth = 1;
            data.strokeColor = '00fdf0';
            data.fillColor = '0b748c'; // Sample color
            data.fillOpacity = 0.65;
            $(clicked_area_id).data('maphilight', data).trigger('alwaysOn.maphilight'); 
            $(clicked_area_id).attr("data-frequency", "Sometimes");
            break;
          case "fourth":
            event.preventDefault();
            var data = {};
            data.alwaysOn = true;
            data.stroke = true;
            data.strokeOpacity = 1;
            data.strokeWidth = 1;
            data.strokeColor = '00fdf0';
            data.fillColor = '07a3c5'; // Sample color
            data.fillOpacity = 0.65;
            $(clicked_area_id).data('maphilight', data).trigger('alwaysOn.maphilight'); 
            $(clicked_area_id).attr("data-frequency", "Rarely");
            break;
          case "fifth":
            event.preventDefault();
            var data = {};
            data.alwaysOn = true;
            data.stroke = true;
            data.strokeOpacity = 1;
            data.strokeWidth = 1;
            data.strokeColor = '00fdf0';
            data.fillColor = '00d5ff'; // Sample color
            data.fillOpacity = 0.65;
            $(clicked_area_id).data('maphilight', data).trigger('alwaysOn.maphilight'); 
            $(clicked_area_id).attr("data-frequency", "Never");
            break;
      }
  
      // Hide it AFTER the action was triggered
      $(".custom-menu").hide(100);
  });
});