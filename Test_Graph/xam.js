var width = 960,
    height = 500,
    padding = 6

var x = d3.scale.ordinal()
    .domain([0,300])
    .rangePoints([0, width]);

var y = d3.scale.ordinal()
    .domain([0,300])
    .rangePoints([0, height]);

var nodes = [
	{'radius':12,'cx':100,'cy':100},
	{'radius':15,'cx':101,'cy':100},
	{'radius':20,'cx':102,'cy':100},
	{'radius':12,'cx':200,'cy':200},
	{'radius':15,'cx':201,'cy':200},
	{'radius':20,'cx':202,'cy':200}
];

nodes.forEach(function(d) { d.x = d.cx; d.y = d.cy; });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var circle = svg.selectAll("circle")
    .data(nodes)
  .enter().append("circle")
    .attr("r", function(d) { return d.radius; })
	.attr("cx", function(d) { return d.cx; })
    .attr("cy", function(d) { return d.cy; });

var force = d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .gravity(0)
    .charge(0)
    .on("tick", tick)
    .start();

function tick(e) {
  circle
      .each(gravity(.2 * e.alpha))
      .each(collide(.5))
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

// Move nodes toward cluster focus.
function gravity(alpha) {
  return function(d) {
    d.y += (d.cy - d.y) * alpha;
    d.x += (d.cx - d.x) * alpha;
  };
}

// Resolve collisions between nodes.
function collide(alpha) {
  var quadtree = d3.geom.quadtree(nodes);
  return function(d) {
    var r = d.radius,
        nx1 = d.x - r,
        nx2 = d.x + r,
        ny1 = d.y - r,
        ny2 = d.y + r;
    quadtree.visit(function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d)) {
        var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = d.radius + quad.point.radius;
        if (l < r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
}