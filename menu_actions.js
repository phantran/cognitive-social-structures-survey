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
              alert("Always");
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