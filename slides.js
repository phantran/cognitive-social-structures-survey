

//--------------------------------
// Declaration of slides and boxes
//--------------------------------

// Slide 0

// Catch Internet Explorer users; incompatible browser
if (isIE()) {
  var slide0 = d3.select("svg").append("g")
    .attr("id", "slide0");
  slide0.append("rect")
    .style("fill", "white")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", bodyWidth)
    .attr("height", bodyHeight);
  slide0.append("text")
    .attr("class", "lead")
    .text("Your browser is not supported.")
    .attr("x", center - 170)
    .attr("y", title_offset_top);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight)
    .text("Please us a different browser for this survey.")
    .call(wrap, textWidth);
  document.getElementById("Next").style.display="none";
} else {
  var slide0 = d3.select("svg").append("g")
    .attr("id", "slide0");
  slide0.append("rect")
    .style("fill", "white")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", bodyWidth)
    .attr("height", bodyHeight);
  slide0.append("text")
    .attr("class", "lead")
    .text("")
    .attr("x", center - 170)
    .attr("y", title_offset_top);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight)
    .text("Welcome to this questionnaire! Thank you very much for your willingness to cooperate with this research.")
    .call(wrap, textWidth);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide0 .slideText tspan').length + $('#slide0 .slideText').length))
    .text("Participation is entirely voluntary and you can withdraw from the survey at any time." +
        " Your data will of course be anonymized and treated confidentially.")
    .call(wrap, textWidth);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide0 .slideText tspan').length + $('#slide0 .slideText').length))
    .text("Completing the questionnaire takes about xx minutes. You must complete this " +
        "questionnaire in one go. Therefore, you can not continue with the questionnaire at a different time. You can  " +
        "go back to your previous answers to correct your answer.")
    .call(wrap, textWidth);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide0 .slideText tspan').length + $('#slide0 .slideText').length))
    .text("Please click the continue button to go to the next page.")
    .call(wrap, textWidth);
}

// Slide 1

var slide1 = d3.select("svg").append("g")
  .attr("id", "slide1");
slide1.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide1.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + title_offset_top + lineHeight)
  .text("Before answering the questions, it may be helpful to know that you can also use the ENTER key \u23CE  to go " +
      "to the next question. Of course you can also simply click on the Continue button.")
  .call(wrap, textWidth);
slide1.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide1 .slideText tspan').length + $('#slide1 .slideText').length))
  .text("As already mentioned, you can NOT return to your previous answers, so check your answers well before" + 
    " you go to the next question. If you have filled in an incorrect answer, you may be able to write this on a piece of paper" + 
    ". At the end of the questionnaire you will be given the opportunity to report what you have entered incorrectly by mistake.")
  .call(wrap, textWidth);
slide1.style("display", "none");



// Slide 4
var slide4 = d3.select("body").append("svg")
    .attr("id", "slide4")
    .attr("width", 200)
    .attr("height", 200);

slide4.append("rect")
     .attr("x", 10)
     .attr("y", 10)
     .attr("width", 50)
     .attr("height", 100)
     .on("contextmenu", function(event) {
        // Avoid the real one
        d3.event.preventDefault();
        // Show contextmenu
        $(".custom-menu").finish().toggle(100).
        // In the right position (the mouse)
        css({
            top: d3.event.pageY + "px",
            left: d3.event.pageX + "px"
        });
    });

slide4.append("rect")
    .attr("x", 70)
    .attr("y", 10)
    .attr("width", 50)
    .attr("height", 100)
    .on("contextmenu", function(event) {
        // Avoid the real one
        d3.event.preventDefault();
        // Show contextmenu
        $(".custom-menu").finish().toggle(100).
        // In the right position (the mouse)
        css({
            top: d3.event.pageY + "px",
            left: d3.event.pageX + "px"
        });
    });



slide4.style("display", "none");

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
            alert("first");
            break;
        case "second":
            alert("second");
            break;
        case "third":
            alert("third");
            break;
    }

    // Hide it AFTER the action was triggered
    $(".custom-menu").hide(100);
});



// Slide 7
var names_list = new Object();
$.getJSON("names_list.json", function(json) {
  names_list = json; // show the JSON file content into console
  number_of_names = Object.keys(names_list).length;
});

var slide7 = d3.select("svg").append("g")
  .attr("id", "slide7")
slide7.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide7.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Other Relationships")
  .call(wrap, textWidth);
slide7.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide7 .slideText tspan').length + $('#slide7 .slideText').length-1))
  .text("There are all the people who use the space, who do think work together?")
  .call(wrap, textWidth);
slide7.style("display", "none");



