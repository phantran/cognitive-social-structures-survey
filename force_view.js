width = window.innerWidth;
height = window.innerHeight * 0.75;
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

var vis = outer.append('svg:g')
               .on("mousemove", mousemove)
               .on("mousedown", mousedown)
               .on("mouseup", mouseup)
               .on("mouseover", mouseover)
               .attr("id", "network_layout");

vis.append('svg:rect')
   .attr('width', width)
   .attr('height', height)
   .attr('fill', 'white');

var force = d3.layout.force()
                     .size([width, height])
                     .nodes(initial_nodes)
                     .linkDistance(100)
                     .charge(-400);

var nodelabels;
var nodeInitials;
var is_first_time = true;


// get layout properties
var nodes = force.nodes(),
    links = force.links(),
    node = vis.selectAll(".node"),
    link = vis.selectAll(".link");

function initial_network(){
  // init force layout
    force.size([width, height])
         .nodes(initial_nodes)
         .linkDistance(100)
         .charge(-400)
         .on("tick", tick).start();

  
    nodelabels = vis.selectAll(".nodelabel") 
                    .data(initial_nodes)
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
                    .style("font-size", 15)
                    .style('display', "none");
    
    nodeInitials = vis.selectAll(".nodeInitials")  
                    .data(initial_nodes)
                    .enter()
                    .append("text")
                    .attr({"x":function(d){return (d.x);},
                           "y":function(d){return (d.y);},
                           "class":"nodeInitials",
                           "stroke":"black"})
                    .attr('id', function(d){return (d.id + "1");})
                    .text(function(d){return d.initials;})
                    .style("fill", "#1d00c4")
                    .style("font-family", "Arial")
                    .style("font-size", 15)
                    .style('display', "block");

  // get layout properties
    nodes = force.nodes();

    let source_node;
    for(let i = 0; i < nodes.length; i++){
      if(nodes[i].id === 0){
        source_node = nodes[i];
      }
    }
    
    for(let i = 0; i < nodes.length; i++){
      if(nodes[i].id !== 0){
        let link = {source: source_node, target: nodes[i]};
        links.push(link);
      }
    }

    
    links = force.links();
    node = vis.selectAll(".node");
    link = vis.selectAll(".link");
    
    redraw();
}


function recreate_network(){
  vis = null;
  nodelabels = [];
  nodeInitials = [];
  links = [];
  vis = outer.append('svg:g')
             .on("mousemove", mousemove)
             .on("mousedown", mousedown)
             .on("mouseup", mouseup)
             .on("mouseover", mouseover)
             .attr("id", "network_layout");
  
  vis.append('svg:rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'white');

  drag_line = vis.append("line")
    .attr("class", "drag_line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", 0);

  force = d3.layout.force()
                     .size([width, height])
                     .nodes(initial_nodes)
                     .linkDistance(100)
                     .charge(-400);

  links = force.links();
  initial_network();
}


var node_is_added_or_deleted = false;
function update_network(input_name_to_net){
  
  let new_id = 0;
  if(nodes.length !== 0){
    new_id = nodes[nodes.length-1].id + 1;
  }
  
  let name_added_as_array = input_name_to_net.split(' ');
  let name_initials = "";

  node_is_added_or_deleted = true;
  name_added_as_array.forEach( function(element) {
      // statements
      name_initials += element.substring(0, 1).toUpperCase();
  });

  let node = {id:new_id, label: input_name_to_net, initials:name_initials};
  nodes.push(node);
  //nodes.push(node);

  force.nodes(nodes);
  // get layout properties
  nodes = force.nodes();
  links = force.links();
  node = vis.selectAll(".node");
  link = vis.selectAll(".link");
  redraw();
}

// line displayed when dragging new nodes
var drag_line = vis.append("line")
    .attr("class", "drag_line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", 0);

// add keyboard callback
d3.select(window)
    .on("keydown", keydown);


function mouseover() {
  if(mouseover_node){
    
    displaying_name_id = mouseover_node.id;
    displaying_initials_id = displaying_name_id + "1";
    document.getElementById(displaying_name_id).style.display="block";
    document.getElementById(displaying_initials_id).style.display="none";
    setTimeout('hide()', 4000);
    setTimeout('show()', 4000);
  }
}

function hide() {
    nodelabels.style('display', "none");
}

function show() {
    nodeInitials.style('display', "block");
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

    //mousedown_node.fixed = false;
    //if (mouseup_node != null){
    //    mouseup_node.fixed = false;
    //}
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


  
  nodeInitials.attr("x", function(d) { return d.x; }) 
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

  if(node_is_added_or_deleted === true){
    node_is_added_or_deleted = false;   
    force.nodes(nodes);
    // get layout properties
    nodes = force.nodes();
    links = force.links();
    node = vis.selectAll(".node");
    link = vis.selectAll(".link");
    nodelabels = nodelabels.data(nodes);

    nodelabels.enter()
              .insert("text")
              .attr({"x":function(d){return (d.x);},
                     "y":function(d){return (d.y);},
                     "class":"nodelabel",
                     "stroke":"black"})
              .attr('id', function(d){return (d.id);})
              .text(function(d){return d.label;})
              .style("fill", "#1d00c4")
              .style("font-family", "Arial")
              .style("font-size", 15)
              .style('display', "none");

    nodeInitials = nodeInitials.data(nodes);
    nodeInitials.enter()
                .insert("text")
                .attr({"x":function(d){return (d.x);},
                       "y":function(d){return (d.y);},
                       "class":"nodeInitials",
                       "stroke":"black"})
                .attr('id', function(d){return (d.id + "1");})
                .text(function(d){return d.initials;})
                .style("fill", "#1d00c4")
                .style("font-family", "Arial")
                .style("font-size", 15)
                .style('display', "block");

  }

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
      .attr("r", 10)
      .attr("label", function(d){return (d.label);})
      .on("mousedown", 
        function(d) { 
          // disable zoom
          vis.call(d3.behavior.zoom().on("zoom"), null);
          
          mousedown_node = d;
          console.log(mousedown_node);
          if (mousedown_node === selected_node){
            selected_node = null;
          } 
          else{
            selected_node = mousedown_node; 
          }
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

  node.classed("node_selected", function(d) { return d === selected_node; });

  if (d3.event) {
    // prevent browser's default behavior
    d3.event.preventDefault();
  }

  //if(nodes.length === 0){
  //  drag_line = vis.append("line")
  //               .attr("class", "drag_line")
  //               .attr("x1", 0)
  //               .attr("y1", 0)
  //               .attr("x2", 0)
  //               .attr("y2", 0);
  //}  
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
  if (!selected_link && !selected_node) return;
  switch (d3.event.keyCode) {
    case 8: // backspace
    case 46: { // delete
      if(selected_link){
        links.splice(links.indexOf(selected_link), 1);
        selected_link = null;                
        redraw();
      }
      else if(selected_node){
        //node_is_added_or_deleted = true;
        let index_tobe_removed = nodes.indexOf(selected_node);
        nodes.splice(index_tobe_removed, 1);
        let removed_label_id = "#" + nodelabels[0][index_tobe_removed].id;
        let removed_initial_id = removed_label_id + "1";
        nodelabels[0].splice(index_tobe_removed, 1);
        nodeInitials[0].splice(index_tobe_removed, 1);
        
        $(removed_label_id).remove();
        $(removed_initial_id).remove();

        //Remove links connected to the selected node 
        if(links.length !== 0){
          for(let i = 0; i < links.length; i++){
            if(links[i].source.label === selected_node.label){
              links.splice(i, 1);
              i = i - 1;
            }
          }
         
          for(let i = 0; i < links.length; i++){
            if(links[i].target.label === selected_node.label){
              links.splice(i, 1);
              i = i - 1;
            }
          }
        }

        
        
        drag_line.attr("class", "drag_line")
                     .attr("x1", 0)
                     .attr("y1", 0)
                     .attr("x2", 0)
                     .attr("y2", 0);
        

        selected_node = null;
        redraw();
      }
      break;
    }
  }
}

