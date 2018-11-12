//--------------------------------
// Declaration of graph properties
//--------------------------------

var svg = d3.select("body").append("svg")
  .attr("width", bodyWidth)
  .attr("height", bodyHeight)
  .on("contextmenu", function() {d3.event.preventDefault()});

var force = d3.layout.force()
  .size([bodyWidth, bodyHeight])
  .nodes([{x:-100, 
            y:-100, 
            fixed: true, 
            name:"You", 
            id:"0"}]) // initialize with a single node
  .linkDistance(100)
  .linkStrength(0)
  .charge(-1)
  .on("tick", tick);

var nodes = force.nodes(),
    links = force.links(),
    node = svg.selectAll(".node"),
    link = svg.selectAll(".link"),
    foci = [{x: -100, y: -100}];