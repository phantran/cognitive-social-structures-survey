//--------------------------------
// Declaration of graph properties
//--------------------------------

var svg = d3.select("body").append("svg")
  .attr("width", bodyWidth)
  .attr("height", bodyHeight)
  .on("contextmenu", function() {d3.event.preventDefault()});

