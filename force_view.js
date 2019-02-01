var width = window.innerWidth,
    height = window.innerHeight * 0.75,
    fill = d3.scale.category20();

// mouse event vars
var selected_node = null,
    selected_link = null,
    mousedown_link = null,
    mousedown_node = null,
    mouseup_node = null,
    mouseover_node = null,
    displaying_node_id =  null;

// init svg
var outer = d3.select("#chart")
  .append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .attr("pointer-events", "all");


var vis = outer
  .append('svg:g')
    .call(d3.behavior.zoom().on("zoom", rescale))
    .on("dblclick.zoom", null)
  .append('svg:g')
    .on("mousemove", mousemove)
    .on("mousedown", mousedown)
    .on("mouseup", mouseup)
    .on("mouseover", mouseover);

vis.append('svg:rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'white');

var nodes = [{id:"MJ", label:"Micheal", x:100, y:50, fixed:true},
            {id:"LB", label:"Lebron", x:150, y:100, fixed:true},
            {id:"KB", label:"Kobe", x:200, y:50, fixed:true},
            {id:"CP", label:"Chris", x:250, y:100, fixed:true},
            {id:"KI", label:"Kyrie", x:300, y:50, fixed:true}];

// init force layout
var force = d3.layout.force()
    .size([width, height])
    .nodes(nodes)
    .linkDistance(80)
    .charge(-200)
    .on("tick", tick).start();


var nodelabels = vis.selectAll(".nodelabel") 
   .data(nodes)
   .enter()
   .append("text")
   .attr({"x":function(d){return (d.x);},
          "y":function(d){return (d.y);},
          "class":"nodelabel",
          "stroke":"black"})
   .attr('id', function(d){return (d.id);})
   .text(function(d){return d.label;})
   .style("fill", "#1d00c4")
   .style("font-family", "Arial")
   .style("font-size", 20)
   .style('display', "none");


// line displayed when dragging new nodes
var drag_line = vis.append("line")
    .attr("class", "drag_line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", 0);

// get layout properties
var nodes = force.nodes(),
    links = force.links(),
    node = vis.selectAll(".node"),
    link = vis.selectAll(".link");




// add keyboard callback
d3.select(window)
    .on("keydown", keydown);

redraw();


function mouseover() {
  if(mouseover_node){
    
    displaying_node_id = mouseover_node.id;
    document.getElementById(displaying_node_id).style.display="block";
    setTimeout('hide()', 4000);
  }
}

function hide() {
    nodelabels.style('display', "none");
}


function mousedown() {

  
  if (!mousedown_node && !mousedown_link) {
    // allow panning if nothing is selected
    vis.call(d3.behavior.zoom().on("zoom"), rescale);
    return;
  }
}

function mousemove() {
  if (!mousedown_node) return;

  // update drag line

  drag_line
      .attr("x1", mousedown_node.x)
      .attr("y1", mousedown_node.y)
      .attr("x2", d3.svg.mouse(this)[0])
      .attr("y2", d3.svg.mouse(this)[1]);

}

function mouseup() {
  
  if (mousedown_node) {
    // hide drag line
    drag_line
      .attr("class", "drag_line_hidden");

    //if (!mouseup_node) {
    //  // add node
    //  var point = d3.mouse(this),
    //    node = {x: point[0], y: point[1]},
    //    n = nodes.push(node);
//
    //  // select new node
    //  selected_node = node;
    //  selected_link = null;
    //  
    //  // add link to mousedown node
    //  links.push({source: mousedown_node, target: node});
    //}
    mousedown_node.fixed = false;
    mouseup_node.fixed = false;
    redraw();
  }
  // clear mouse event vars
  resetMouseVars();
}

function resetMouseVars() {
  mousedown_node = null;
  mouseup_node = null;
  mousedown_link = null;
  mouseover_node = null;
}

function tick() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });

  nodelabels.attr("x", function(d) { return d.x; }) 
                  .attr("y", function(d) { return d.y; });
}

// rescale g
function rescale() {
  trans=d3.event.translate;
  scale=d3.event.scale;

  vis.attr("transform",
      "translate(" + trans + ")" + " scale(" + scale + ")");
}

// redraw force layout
function redraw() {

  link = link.data(links);

  link.enter().insert("line", ".node")
      .attr("class", "link")
      .on("mousedown", 
        function(d) { 
          mousedown_link = d; 
          if (mousedown_link == selected_link) selected_link = null;
          else selected_link = mousedown_link; 
          selected_node = null; 
          redraw(); 
        });

  link.exit().remove();

  link
    .classed("link_selected", function(d) { return d === selected_link; });

  node = node.data(nodes);

  node.enter().insert("circle")
      .attr("class", "node")
      .attr("r", 5)
      .on("mousedown", 
        function(d) { 
          // disable zoom
          vis.call(d3.behavior.zoom().on("zoom"), null);

          mousedown_node = d;
          if (mousedown_node == selected_node) selected_node = null;
          else selected_node = mousedown_node; 
          selected_link = null; 

          // reposition drag line
          drag_line
              .attr("class", "link")
              .attr("x1", mousedown_node.x)
              .attr("y1", mousedown_node.y)
              .attr("x2", mousedown_node.x)
              .attr("y2", mousedown_node.y);

          redraw(); 
        })
      .on("mousedrag",
        function(d) {
          // redraw();
        })
      .on("mouseup", 
        function(d) { 
          if (mousedown_node) {
            mouseup_node = d; 
            if (mouseup_node == mousedown_node) { resetMouseVars(); return; }

            // add link
            var link = {source: mousedown_node, target: mouseup_node};
            links.push(link);

            // select new link
            selected_link = link;
            selected_node = null;

            // enable zoom
            vis.call(d3.behavior.zoom().on("zoom"), rescale);
            redraw();
          } 
        })
      .on("mouseover",
        function(d) {
          mouseover_node = d;

        })
    .transition()
      .duration(750)
      .ease("elastic")
      .attr("r", 10);

  node.exit().transition()
      .attr("r", 0)
    .remove();

  node
    .classed("node_selected", function(d) { return d === selected_node; });

  

  if (d3.event) {
    // prevent browser's default behavior
    d3.event.preventDefault();
  }

  force.start();

}

function spliceLinksForNode(node) {
  toSplice = links.filter(
    function(l) { 
      return (l.source === node) || (l.target === node); });
  toSplice.map(
    function(l) {
      links.splice(links.indexOf(l), 1); });
}

function keydown() {
  if (!selected_link) return;
  switch (d3.event.keyCode) {
    case 8: // backspace
    case 46: { // delete
      links.splice(links.indexOf(selected_link), 1);
      selected_link = null;
      redraw();
      break;
    }
  }
}

