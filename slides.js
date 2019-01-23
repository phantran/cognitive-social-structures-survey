
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
    .text("Completing the questionnaire takes about 15 minutes. You must complete this " +
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



