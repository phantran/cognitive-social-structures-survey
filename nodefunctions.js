//---------------------------------------------
// Declaration of functions for nodes and links
//---------------------------------------------

// Graph iteration
function tick(e) {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  var k = e.alpha;

  // Push nodes toward their designated focus.
  nodes.forEach(function(o, i) {
    if(!o.fixed) {
      o.y += (foci[o.id].y - o.y) * k;
      o.x += (foci[o.id].x - o.x) * k;
    }
  });

  node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("name", function(d) { return d.name; })
      .attr("id", function(d) { return d.id; })
      .attr("race", function(d) { return d.race; })
      .attr("edu", function(d) { return d.edu; })
      .attr("freq", function(d) { return d.freq; })
      .attr("gender", function(d) { return d.gender; })
      .attr("transform", function(d){return "translate("+d.x+","+d.y+")"});

  if (currSlide >= 24 && currSlide <= 28) {
    d3.selectAll(".node").style("fill", function(d) { 
      if (d.x > boxbar_offset_x
       && d.x < boxbar_offset_x + bar5_target_width
       && d.y > boxbar_offset_y
       && d.y < boxbar_offset_y + bar_target_height) {
        return answerColor;
      } else if (d.x > boxbar_offset_x + bar5_target_width + boxbar_margin
              && d.x < boxbar_offset_x + bar5_target_width * 2 + boxbar_margin
              && d.y > boxbar_offset_y
              && d.y < boxbar_offset_y + bar_target_height) {
        return answerColor;
      } else if (d.x > boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2
              && d.x < boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2 + bar5_target_width
              && d.y > boxbar_offset_y
              && d.y < boxbar_offset_y + bar_target_height) {
        return answerColor;
      } else if (d.x > boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3
              && d.x < boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3 + bar5_target_width
              && d.y > boxbar_offset_y
              && d.y < boxbar_offset_y + bar_target_height) {
        return answerColor;
      } else if (d.x > boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4
              && d.x < boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4 + bar5_target_width
              && d.y > boxbar_offset_y
              && d.y < boxbar_offset_y + bar_target_height) {
        return answerColor;
      } else {
        return nodeColor;
      }
    });
  }
}

function altersInBoxes() {
  var hit = 0;
  nodes.forEach(function(d) { 
    if (d.x > boxbar_offset_x
     && d.x < boxbar_offset_x + bar5_target_width
     && d.y > boxbar_offset_y
     && d.y < boxbar_offset_y + bar_target_height) {
      hit++;
    } else if (d.x > boxbar_offset_x + bar5_target_width + boxbar_margin
            && d.x < boxbar_offset_x + bar5_target_width * 2 + boxbar_margin
            && d.y > boxbar_offset_y
            && d.y < boxbar_offset_y + bar_target_height) {
      hit++;
    } else if (d.x > boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2
            && d.x < boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2 + bar5_target_width
            && d.y > boxbar_offset_y
            && d.y < boxbar_offset_y + bar_target_height) {
      hit++;
    } else if (d.x > boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3
            && d.x < boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3 + bar5_target_width
            && d.y > boxbar_offset_y
            && d.y < boxbar_offset_y + bar_target_height) {
      hit++;
    } else if (d.x > boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4
            && d.x < boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4 + bar5_target_width
            && d.y > boxbar_offset_y
            && d.y < boxbar_offset_y + bar_target_height) {
      hit++;
    }
  });
  return (hit == numAlters);
}

function saveAltersInBoxes(q) {
  nodes.forEach(function(d) { 
    if (d.id > 0 && d.id <= numAlters) {
      if (d.x > boxbar_offset_x
       && d.x < boxbar_offset_x + bar5_target_width
       && d.y > boxbar_offset_y
       && d.y < boxbar_offset_y + bar_target_height) {
        answers['q'+ q + "_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = "1";
      } else if (d.x > boxbar_offset_x + bar5_target_width + boxbar_margin
              && d.x < boxbar_offset_x + bar5_target_width * 2 + boxbar_margin
              && d.y > boxbar_offset_y
              && d.y < boxbar_offset_y + bar_target_height) {
        answers['q'+ q + "_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = "2";
      } else if (d.x > boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2
              && d.x < boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2 + bar5_target_width
              && d.y > boxbar_offset_y
              && d.y < boxbar_offset_y + bar_target_height) {
        answers['q'+ q + "_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = "3";
      } else if (d.x > boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3
              && d.x < boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3 + bar5_target_width
              && d.y > boxbar_offset_y
              && d.y < boxbar_offset_y + bar_target_height) {
        answers['q'+ q + "_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = "4";
      } else if (d.x > boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4
              && d.x < boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4 + bar5_target_width
              && d.y > boxbar_offset_y
              && d.y < boxbar_offset_y + bar_target_height) {
        answers['q'+ q + "_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = "5";
      } else {
        answers['q'+ q + "_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;            
      }
    } else if (d.id > numAlters) {
      answers['q'+ q + "_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
    }
  });
}

// Add node to graph
function addAlter() {
  var alterName = document.getElementById("alterName");

  if (alterName.value.length > 20 || alterName.value == " ") {
    promptOnlyOne();

  } else if (alterName.value.length > 0) {

    if (numAlters == 0) {

      document.getElementById("first_friend_text").style.display = "none";
      //document.getElementById("second_friend_text").style.display = "block";
    }

    if (numAlters == 24) {
      //document.getElementById("second_friend_text").style.display = "none";
      document.getElementById("final_friend_text").style.display = "block";
      document.getElementById("one_at_a_time").style.display = "none";

      document.getElementById("name_input").style.display = "none";
    }

    numAlters++;

    var d = new Date();
    if (numAlters <= 25) {
      nodes[numAlters].name = alterName.value;
      answers["q19_" + numAlters.toLocaleString(undefined,{minimumIntegerDigits: 2})] = alterName.value;
      answers["q19_" + numAlters.toLocaleString(undefined,{minimumIntegerDigits: 2}) + "timeStamp"] = (d - startTime) / 1000;
      d3.selectAll(".node_text").text(function(d) { return d.name });
      d3.selectAll(".node").attr("opacity", function(d) { return d.index <= numAlters ? 1 : .4 });
    }

    document.getElementById("alterName").value = '';
  }
}

// Whenever nodes or links are added or changes are made to their properties, the graph needs to be restarted
function restart() {
  force.start();

  link = link.data(links);

  link.enter().insert("line", ".node")
      .attr("class", "link")
      .on("contextmenu", removeLink);

  link.exit().remove();

  node = node.data(nodes);

  var n = node.enter().append("svg:g")
    .attr("class", "node")
    .call(force.drag);

  n.append("svg:circle")
    .attr("class", "node")
    .attr("r", 25)
    .on("click", nodeSelect)
    .call(force.drag);

  n.append("svg:text")
    .attr("class", "node_text")
    .attr("text-anchor", "middle")  
    .attr("dy", ".3em")
    .attr("pointer-events", "none")
    .text(function(d) { return d.name });

  node.exit().remove();
}

// Reset foci to optimal positions
function resetFoci() {
  for(i = 1; i <= 25; i++) {
    if(i > numAlters) {
      foci[i].x += 5000;
    } else {
      foci[i].x = i*(bodyWidth/numAlters)-(bodyWidth/numAlters)/2;
      if ((bodyWidth/numAlters)+(bodyWidth/(numAlters)) > 250) {
        foci[i].y = nodeLine;
      } else if ((bodyWidth/numAlters)+(bodyWidth/(numAlters)) < 125) {
        foci[i].y = nodeLine+(i % 3)*40;
      } else {
        foci[i].y = nodeLine+(i % 2)*40;
      }
    }
  }
  restart();
}

// Remove link between two nodes
function removeLink(l) {
  // Slide 7: draw links between friends that know each other 
  if (currSlide == 36) {
    links.splice(links.indexOf(l), 1);
    restart();
  }
}

function removeNode(n) {
    nodes.splice(nodes.indexOf(n), 1);
    restart();
}

var selected = false;
var targetId;
var sourceId;

// Handles node selections depending on the current slide
function nodeSelect(d) {
  // Slide 15: select female alters
  if (currSlide == 22) {
    altered = true;
    if (d.name != "You") {
      if (d.gender == "male") {
        d3.select(this).style("fill", nodeColor)
        foci[d.id].y += 150;
        d.gender = "female";
      } else {
        d3.select(this).style("fill", maleColor)
        d.gender = "male";
        //foci[d.id].py = foci[d.id].y;
        foci[d.id].y -= 150;
      }
    }
    restart();
  }

  // Slide 22: select alters with kids
  if (currSlide == 28.2) {
    altered = true;
    if (d.name != "You") {
      if (d.friends == "ja") {
        d3.select(this).style("fill", nodeColor)
        foci[d.id].y += 150;
        d.friends = "nee";
      } else {
        d3.select(this).style("fill", friendsColor)
        foci[d.id].y -= 150;
        d.friends = "ja";
      }
    }
    restart();
  }

  // Slide 22: select alters with kids
  if (currSlide == 28.5) {
    altered = true;
    if (d.name != "You") {
      if (d.kids == "ja") {
        d3.select(this).style("fill", nodeColor)
        foci[d.id].y += 150;
        d.kids = "nee";
      } else {
        d3.select(this).style("fill", kidsColor)
        foci[d.id].y -= 150;
        d.kids = "ja";
      }
    }
    restart();
  }

  // Vraag 32
  if (currSlide == 32 && d.kids != "ja") {
    altered = true;
    if (d.name != "You") {
      if (d.kinderwens == "ja") {
        d3.select(this).style("fill", nodeColor)
        foci[d.id].y += 150;
        d.kinderwens = "nee";
      } else {
        d3.select(this).style("fill", kinderwensColor)
        foci[d.id].y -= 150;
        d.kinderwens = "ja";
      }
    }
    restart();
  }

  // Slide 24: select friends
  if (currSlide == 33 && (d.kids != "ja" && d.kinderwens != "ja")) {
    altered = true;
    if (d.name != "You") {
      if (d.kinderloos == "ja") {
        d3.select(this).style("fill", nodeColor)
        foci[d.id].y += 150;
        d.kinderloos = "nee";
      } else {
        d3.select(this).style("fill", kinderloosColor)
        foci[d.id].y -= 150;
        d.kinderloos = "ja";
      }
    }
    restart();
  }

  // Slide 24: select friends
  if (currSlide == 34) {
    altered = true;
    if (d.name != "You") {
      if (d.kinderhulp == "ja") {
        d3.select(this).style("fill", nodeColor)
        foci[d.id].y += 150;
        d.kinderhulp = "nee";
      } else {
        d3.select(this).style("fill", kinderhulpColor)
        foci[d.id].y -= 150;
        d.kinderhulp = "ja";
      }
    }
    restart();
  }

  // Slide 24: select friends
  if (currSlide == 35) {
    altered = true;
    if (d.name != "You") {
      if (d.kinderpraat == "ja") {
        d3.select(this).style("fill", nodeColor)
        foci[d.id].y += 150;
        d.kinderpraat = "nee";
      } else {
        d3.select(this).style("fill", kinderpraatColor)
        foci[d.id].y -= 150;
        d.kinderpraat = "ja";
      }
    }
    restart();
  }

  // Slide 7: draw links between friends that know each other 
  if (currSlide == 36) {
    var targetIndex = nodes[askedAbout].id;
    var sourceIndex = d.id;

    if(sourceIndex > targetIndex)

    if(!nodes[askedAbout][sourceIndex]){
      nodes[askedAbout][sourceIndex] = 1;
      //nodes[sourceIndex][askedAbout] = 1;
      links.push({source: sourceIndex, target: targetIndex});
    } else {
      nodes[askedAbout][sourceIndex] = 0;
      //nodes[sourceIndex][askedAbout] = 0;
      links.forEach(function(l) {
        if((l.source.id == sourceIndex || l.target.id == sourceIndex) && 
           (l.source.id == targetIndex || l.target.id == targetIndex))
        {
          removeLink(l);
        }
      });
    }

    /*if (selected == false) {
      targetId = d.id;
      console.log("targetId: " + targetId);
      selected = true;
    } else {
      sourceId = d.id;
      console.log("sourceid: " + sourceId);
      if (targetId != sourceId) {
        nodes.forEach(function(n) {
          if (n.id == targetId) {
            targetIndex = n.index;
            console.log("target: " + targetIndex);
          } else if (n.id == sourceId) {
            sourceIndex = n.index;
            console.log("source: " + sourceIndex);
          } 
        });
        nodes[sourceIndex].friendsWith += targetIndex.toString();
        nodes[targetIndex].friendsWith += sourceIndex.toString();
        links.push({source: sourceIndex, target: targetIndex});
      }
      selected = false;
    }*/
    restart();
  }
}

// Makes all nodes default color
function clearColors() {
  d3.selectAll(".node").style("fill", nodeColor)
}