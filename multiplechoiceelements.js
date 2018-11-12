// Boxes indicating frequency into which nodes are dragged (4, 5 or 6 categories)

var fourBar = d3.select("svg").append("g")
  .attr("id", "fourBar")
  .style("display", "none");

fourBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "several")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y)
  .attr("width", bar4_target_width)
  .attr("height", bar_target_height);

fourBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "daily")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar4_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y)
  .attr("width", bar4_target_width)
  .attr("height", bar_target_height);

fourBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "multiple")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar4_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y)
  .attr("width", bar4_target_width)
  .attr("height", bar_target_height);

fourBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "weekly")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar4_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y)
  .attr("width", bar4_target_width)
  .attr("height", bar_target_height);

var fiveBar = d3.select("svg").append("g")
  .attr("id", "fiveBar")
  .style("display", "none");

fiveBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "one")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y)
  .attr("width", bar_target_width)
  .attr("height", bar_target_height);

fiveBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "one_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar_target_width)
  .attr("height", bar_label_height);

fiveBar.append("text")
  .attr("class", "bar_text")
  .text("")
  .attr("x", boxbar_offset_x + (bar_target_width / 2) - 28)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

fiveBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "two")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y)
  .attr("width", bar_target_width)
  .attr("height", bar_target_height);

fiveBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "two_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar_target_width)
  .attr("height", bar_label_height); 

fiveBar.append("text")
  .attr("class", "bar_text")
  .text("")
  .attr("x", boxbar_offset_x + bar_target_width + boxbar_margin + (bar_target_width / 2) - 25)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

fiveBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "three")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y)
  .attr("width", bar_target_width)
  .attr("height", bar_target_height);

fiveBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "three_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar_target_width)
  .attr("height", bar_label_height);

fiveBar.append("text")
  .attr("class", "bar_text")
  .text("")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 2 + (bar_target_width / 2) - 23)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

fiveBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "four")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y)
  .attr("width", bar_target_width)
  .attr("height", bar_target_height);

fiveBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "four_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar_target_width)
  .attr("height", bar_label_height);

fiveBar.append("text")
  .attr("class", "bar_text")
  .text("")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 3 + (bar_target_width / 2) - 20)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

fiveBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "five")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 4)
  .attr("y", boxbar_offset_y)
  .attr("width", bar_target_width)
  .attr("height", bar_target_height);

fiveBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "five_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 4)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar_target_width)
  .attr("height", bar_label_height);

fiveBar.append("text")
  .attr("class", "bar_text")
  .text("") 
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 4 + (bar_target_width / 2) - 15)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

var sixBar = d3.select("svg").append("g")
  .attr("id", "sixBar")
  .style("display", "none");

sixBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "one")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y)
  .attr("width", bar6_target_width)
  .attr("height", bar_target_height);

sixBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "one_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar6_target_width)
  .attr("height", bar_label_height);

sixBar.append("text")
  .attr("class", "bar_text")
  .text("Family member")
  .attr("x", boxbar_offset_x + (bar6_target_width / 2) - 42)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

sixBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "two")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar6_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y)
  .attr("width", bar6_target_width)
  .attr("height", bar_target_height);

sixBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "two_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar6_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar6_target_width)
  .attr("height", bar_label_height); 

sixBar.append("text")
  .attr("class", "bar_text")
  .text("Friend")
  .attr("x", boxbar_offset_x + bar6_target_width + boxbar_margin + (bar6_target_width / 2) - 20)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

sixBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "three")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y)
  .attr("width", bar6_target_width)
  .attr("height", bar_target_height);

sixBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "three_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar6_target_width)
  .attr("height", bar_label_height);

sixBar.append("text")
  .attr("class", "bar_text")
  .text("Co-worker")
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 2 + (bar6_target_width / 2) - 33)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

sixBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "four")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y)
  .attr("width", bar6_target_width)
  .attr("height", bar_target_height);

sixBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "four_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar6_target_width)
  .attr("height", bar_label_height);

sixBar.append("text")
  .attr("class", "bar_text")
  .text("Neighbor")
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 3 + (bar6_target_width / 2) - 25)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

sixBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "five")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 4)
  .attr("y", boxbar_offset_y)
  .attr("width", bar6_target_width)
  .attr("height", bar_target_height);

sixBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "five_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 4)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar6_target_width)
  .attr("height", bar_label_height);

sixBar.append("text")
  .attr("class", "bar_text")
  .text("Member of the same social group/club") 
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 4 + (bar6_target_width / 2) - 118 )
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

sixBar.append("rect")
  .attr("class", "bar_target")
  .attr("id", "six")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 5)
  .attr("y", boxbar_offset_y)
  .attr("width", bar6_target_width)
  .attr("height", bar_target_height);

sixBar.append("rect")
  .attr("class", "bar_label")
  .attr("id", "six_lab")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 5)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar6_target_width)
  .attr("height", bar_label_height);

sixBar.append("text")
  .attr("class", "bar_text")
  .text("Multiple/Other") 
  .attr("x", boxbar_offset_x + (bar6_target_width + boxbar_margin) * 5 + (bar6_target_width / 2) - 35)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

// Boxes with labels

var labelBar1 = d3.select("svg").append("g")
  .style("display", "none")
  .attr("id", "labelBar1");

labelBar1.append("rect")
  .attr("class", "bar_label")
  .attr("id", "heel_hecht")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height);

labelBar1.append("text")
  .attr("class", "bar_text")
  .text("Heel hecht")
  .attr("x", boxbar_offset_x + (bar_target_width / 2) - 25)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

labelBar1.append("rect")
  .attr("class", "bar_label")
  .attr("id", "hecht")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar5_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height); 

labelBar1.append("text")
  .attr("class", "bar_text")
  .text("Hecht")
  .attr("x", boxbar_offset_x + bar_target_width + boxbar_margin + (bar_target_width / 2) - 20)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

labelBar1.append("rect")
  .attr("class", "bar_label")
  .attr("id", "een_beetje_hecht")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height);

labelBar1.append("text")
  .attr("class", "bar_text")
  .text("Een beetje hecht")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 2 + (bar_target_width / 2) - 55)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

labelBar1.append("rect")
  .attr("class", "bar_label")
  .attr("id", "niet_hecht")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height);

labelBar1.append("text")
  .attr("class", "bar_text")
  .text("Niet hecht")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 3 + (bar_target_width / 2) - 30)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

labelBar1.append("rect")
  .attr("class", "bar_label")
  .attr("id", "helemaal_niet_hecht")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height);

labelBar1.append("text")
  .attr("class", "bar_text")
  .text("Helemaal niet hecht")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 4 + (bar_target_width / 2) - 70)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);


var labelBar2 = d3.select("svg").append("g")
  .style("display", "none")
  .attr("id", "labelBar2");

labelBar2.append("rect")
  .attr("class", "bar_label")
  .attr("id", "basis_of_geen_onderwijs")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y - 1.7*bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", 1.7*bar_label_height);

labelBar2.append("text")
  .attr("class", "bar_text")
  .text("Basisonderwijs of (nog)")
  .attr("x", boxbar_offset_x + (bar_target_width / 2) - 75)
  .attr("y", boxbar_offset_y - boxbar_label_margin - bar_label_height)

labelBar2.append("text")
  .attr("class", "bar_text")
  .text("geen onderwijs afgerond")
  .attr("x", boxbar_offset_x + (bar_target_width / 2) - 80)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6)

labelBar2.append("rect")
  .attr("class", "bar_label")
  .attr("id", "middelbaar_onderwijs")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar5_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y - 1.7*bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", 1.7*bar_label_height); 

labelBar2.append("text")
  .attr("class", "bar_text")
  .text("Middelbare school diploma")
  .attr("x", boxbar_offset_x + bar_target_width + boxbar_margin + (bar_target_width / 2) - 85)
  .attr("y", boxbar_offset_y - boxbar_label_margin - bar_label_height);

labelBar2.append("text")
  .attr("class", "bar_text")
  .text("(of een soortgelijke opleiding)")
  .attr("x", boxbar_offset_x + bar_target_width + boxbar_margin + (bar_target_width / 2) - 92)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

labelBar2.append("rect")
  .attr("class", "bar_label")
  .attr("id", "mbo")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y - 1.7*bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", 1.7*bar_label_height);

labelBar2.append("text")
  .attr("class", "bar_text")
  .text("MBO")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 2 + (bar_target_width / 2) - 15)
  .attr("y", boxbar_offset_y - boxbar_label_margin - bar_label_height);

labelBar2.append("text")
  .attr("class", "bar_text")
  .text("(of een soortgelijke opleiding)")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 2 + (bar_target_width / 2) - 92)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

labelBar2.append("rect")
  .attr("class", "bar_label")
  .attr("id", "hbo")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y - 1.7*bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", 1.7*bar_label_height);

labelBar2.append("text")
  .attr("class", "bar_text")
  .text("HBO")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 3 + (bar_target_width / 2) - 15)
  .attr("y", boxbar_offset_y - boxbar_label_margin - bar_label_height);
labelBar2.append("text")
  .attr("class", "bar_text")
  .text("(of een soortgelijke opleiding)")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 3 + (bar_target_width / 2) - 92)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

labelBar2.append("rect")
  .attr("class", "bar_label")
  .attr("id", "uni+")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4)
  .attr("y", boxbar_offset_y - 1.7*bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", 1.7*bar_label_height);

labelBar2.append("text")
  .attr("class", "bar_text")
  .text("Universiteit of hoger")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 4 + (bar_target_width / 2) - 65)
  .attr("y", boxbar_offset_y - boxbar_label_margin - bar_label_height);

labelBar2.append("text")
  .attr("class", "bar_text")
  .text("(of een soortgelijke opleiding)")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 4 + (bar_target_width / 2) - 92)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);


var labelBar3 = d3.select("svg").append("g")
  .style("display", "none")
  .attr("id", "labelBar3");

labelBar3.append("rect")
  .attr("class", "bar_label")
  .attr("id", "dagelijks")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height);

labelBar3.append("text")
  .attr("class", "bar_text")
  .text("Dagelijks")
  .attr("x", boxbar_offset_x + (bar_target_width / 2) - 30)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

labelBar3.append("rect")
  .attr("class", "bar_label")
  .attr("id", "aantal_keer_week")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + bar5_target_width + boxbar_margin)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height); 

labelBar3.append("text")
  .attr("class", "bar_text")
  .text("Een aantal keer per week")
  .attr("x", boxbar_offset_x + bar_target_width + boxbar_margin + (bar_target_width / 2) - 86)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

labelBar3.append("rect")
  .attr("class", "bar_label")
  .attr("id", "aantal_keer_maand")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 2)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height);

labelBar3.append("text")
  .attr("class", "bar_text")
  .text("Een aantal keer per maand")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 2 + (bar_target_width / 2) - 90)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

labelBar3.append("rect")
  .attr("class", "bar_label")
  .attr("id", "een_keer_per_maand")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 3)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height);

labelBar3.append("text")
  .attr("class", "bar_text")
  .text("Ongeveer één keer per maand")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 3 + (bar_target_width / 2) - 106)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

labelBar3.append("rect")
  .attr("class", "bar_label")
  .attr("id", "paar_keer_per_jaar")     
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("x", boxbar_offset_x + (bar5_target_width + boxbar_margin) * 4)
  .attr("y", boxbar_offset_y - bar_label_height - boxbar_label_margin)
  .attr("width", bar5_target_width)
  .attr("height", bar_label_height);

labelBar3.append("text")
  .attr("class", "bar_text")
  .text("Een paar keer per jaar of minder")
  .attr("x", boxbar_offset_x + (bar_target_width + boxbar_margin) * 4 + (bar_target_width / 2) - 103)
  .attr("y", boxbar_offset_y - boxbar_label_margin - 6);

restart();