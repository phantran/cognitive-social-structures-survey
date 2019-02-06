
var svg = d3.select("body").append("svg")
  .attr("width", bodyWidth)
  .attr("height", bodyHeight)
  .on("contextmenu", function() {d3.event.preventDefault()});
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
    .text("Completing the questionnaire takes about 15-20 minutes. You must complete this " +
        "questionnaire in one go. Therefore, you can not continue with the questionnaire at a different time. You can  " +
        "go back to previous pages to correct your answer.")
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
  .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide1 .slideText tspan').length + $('#slide1 .slideText').length))
  .text("As already mentioned, you can return to previous pages by clicking on the Back button. This means that you can correct your answers at anytime without losing the entered data in the current page." + 
    " However, after clicking on the Submit button at the end of this survey, you cannot change your answers anymore.")
  .call(wrap, textWidth);
slide1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide1 .slideText tspan').length + $('#slide1 .slideText').length))
  .text("Please click the Continue button and the survey will start.")
  .call(wrap, textWidth);
slide1.style("display", "none");



// Slide 7
var names_list = {};
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



