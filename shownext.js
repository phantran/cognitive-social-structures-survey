// ---------------------------------------------------------------------------------------
// showNext(): Prepares for next slide in survey. Hides previous slide and shows currSlide,
// performing whatever operations needed for preparing slide.
// A bit like the main() function
// ---------------------------------------------------------------------------------------

function showNext() {


  if (currSlide === 1) {
    var d = new Date();
    startTime = d.getTime();

    // respondent ID
    answers.nomem = $('input[name=nomem]').val();
    
    document.getElementById("Next").style.position="absolute";
    document.getElementById("slide0").style.display = "none";
    document.getElementById("slide2").style.display = "block";


    currSlide += 0.5;

  } else if (currSlide == 1.5) {
    document.getElementById("slide2").style.display = "none";

    // Q1: About how many of your friends are black?

    var ex = document.getElementById("heeftPartner");
    ex.style.left = string_l + "px";
    ex.style.top = string_t;
    ex.style.display = "block";

    currSlide += 0.5;
  } else if (currSlide == 2) {
    // If user has not selected an option, alert with popup
    if ($('input[name=hP]:checked').length == 0 && checked == false) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      answers.q01 = $('input[name=hP]:checked').val();
      var d = new Date();
      answers.q01timeStamp = (d - startTime) / 1000;

      checked = false;

      document.getElementById("heeftPartner").style.display = "none";
      var ex = document.getElementById("geslachtPartner");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;

      if (answers.q01 != "ja") {
        skipped = true;
        showNext();
      }
    }
  } else if (currSlide == 3) {
    // If user has not selected an option, alert with popup
    if ($('input[name=gP]:checked').length == 0 && checked == false && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if (!skipped) {
        answers.q02 = $('input[name=gP]:checked').val();
        var d = new Date();
        answers.q02timeStamp = (d - startTime) / 1000;
      } else {
        answers.q02 = "skipped";
        var d = new Date();
        answers.q02timeStamp = (d - startTime) / 1000;              
      }

      checked = false;

      document.getElementById("geslachtPartner").style.display = "none";
      var ex = document.getElementById("geboortejaarPartner");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;
      if (skipped) {
        showNext();
      }
    }
  } else if (currSlide == 4) {
    // If user has not selected an option, alert with popup
    if ($('input[name=gjP]').val().length == 0 && checked == false && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if (!skipped) {
        answers.q03 = $('input[name=gjP]').val();
        var d = new Date();
        answers.q03timeStamp = (d - startTime) / 1000;
      } else {
        answers.q03 = "skipped";
        var d = new Date();
        answers.q03timeStamp = (d - startTime) / 1000;              
      }

      checked = false;

      document.getElementById("geboortejaarPartner").style.display = "none";
      var ex = document.getElementById("hoelangRelatie");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;
      if (skipped) {
        showNext();
      }
    }
  } else if (currSlide == 5) {
    // If user has not selected an option, alert with popup
    if ($('input[name=hlR]:checked').length == 0 && checked == false && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if (!skipped) {
        answers.q04 = $('input[name=hlR]:checked').val();
        var d = new Date();
        answers.q04timeStamp = (d - startTime) / 1000;
      } else {
        answers.q04 = "skipped";
        var d = new Date();
        answers.q04timeStamp = (d - startTime) / 1000;              
      }

      checked = false;

      document.getElementById("hoelangRelatie").style.display = "none";
      var ex = document.getElementById("wonenPartner");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;
      if (skipped) {
        showNext();
      }
    }
  } else if (currSlide == 6) {
    // If user has not selected an option, alert with popup
    if ($('input[name=wP]:checked').length == 0 && checked == false && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if (!skipped) {
        answers.q05 = $('input[name=wP]:checked').val();
        var d = new Date();
        answers.q05timeStamp = (d - startTime) / 1000;
      } else {
        answers.q05 = "skipped";
        var d = new Date();
        answers.q05timeStamp = (d - startTime) / 1000;              
      }

      checked = false;

      document.getElementById("wonenPartner").style.display = "none";
      var ex = document.getElementById("samenLeving");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;
      if (skipped) {
        showNext();
      }
    }
  } else if (currSlide == 7) {
    // If user has not selected an option, alert with popup
    if ($('input[name=sL]:checked').length == 0 && checked == false && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if (!skipped) {
        answers.q06 = $('input[name=sL]:checked').val();
        var d = new Date();
        answers.q06timeStamp = (d - startTime) / 1000;
      } else {
        answers.q06 = "skipped";
        var d = new Date();
        answers.q06timeStamp = (d - startTime) / 1000;              
      }

      checked = false;
      skipped = false;

      document.getElementById("samenLeving").style.display = "none";
      var ex = document.getElementById("heeftKinderen");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;
      if (skipped) {
        showNext();
      }
    }
  } else if (currSlide == 8) {
    // If user has not selected an option, alert with popup
    if ($('input[name=hK]:checked').length == 0 && checked == false) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      answers.q07 = $('input[name=hK]:checked').val();
      var d = new Date();
      answers.q07timeStamp = (d - startTime) / 1000;

      if (answers.q07 == "ja") {
        $('#wilKndrn span.slideText').addClass("hiddenText");
        $('#wilHvlKndrn span.slideText').addClass("hiddenText");
        $('#hoesnelKndrn span.slideText').addClass("hiddenText");
        $('#zekerHvlKndrn span.slideTextAlt1').addClass("hiddenText");
        $('#zekerHsnlKndrn span.slideTextAlt1').addClass("hiddenText");
        $('span#geen').addClass("hiddenText");
      } else {
        $('#wilKndrn span.slideTextAlt').addClass("hiddenText");
        $('#wilHvlKndrn span.slideTextAlt1').addClass("hiddenText");
        $('#wilHvlKndrn span.slideTextAlt2s').addClass("hiddenText");
        $('#hoesnelKndrn span.slideTextAlt').addClass("hiddenText");
        $('#zekerHvlKndrn span.slideTextAlt2').addClass("hiddenText");
        $('#zekerHsnlKndrn span.slideTextAlt2').addClass("hiddenText");
        $('span#nietmeer').addClass("hiddenText");
        $('span#meer').addClass("hiddenText");
      }

      checked = false;

      document.getElementById("heeftKinderen").style.display = "none";
      var ex = document.getElementById("hoeveelKinderen");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;

      if (answers.q07 != "ja") {
        skipped = true;
        showNext();
      }
    }
  } else if (currSlide == 9) {
    // If user has not selected an option, alert with popup
    if ($('input[name=hvK]').val().length == 0 && checked == false && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if (!skipped) {
        answers.q08 = $('input[name=hvK]:checked').val();
        var d = new Date();
        answers.q08timeStamp = (d - startTime) / 1000;
      } else {
        answers.q08 = "skipped";
        var d = new Date();
        answers.q08timeStamp = (d - startTime) / 1000;              
      }

      $('.hvkAnswer').text(answers.q08);

      if (answers.q08 == "1") {
        $('#wilHvlKndrn span.slideTextAlt1').addClass("hiddenText");
      } else {
        $('#wilHvlKndrn span.slideTextAlt2').addClass("hiddenText");
      }

      checked = false;

      document.getElementById("hoeveelKinderen").style.display = "none";
      var ex = document.getElementById("bioOuder");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;
      if (skipped) {
        showNext();
      }
      
      

      for (var i = 11; i > parseInt(answers.q08); i--) {
        $("input#bO" + i).attr('disabled', true);
      }
    }
  } else if (currSlide == 10) {
    // If user has not selected an option, alert with popup
    if ($('input[name=bO]:checked').length == 0 && checked == false && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if (!skipped) {
        answers.q09 = $('input[name=bO]:checked').val();
        var d = new Date();
        answers.q09timeStamp = (d - startTime) / 1000;
      } else {
        answers.q09 = "skipped";
        var d = new Date();
        answers.q09timeStamp = (d - startTime) / 1000;              
      }

      checked = false;
      if (answers.q01 != "ja") {
        skipped = true;
      } else {
        skipped = false;
      }

      document.getElementById("bioOuder").style.display = "none";
      var ex = document.getElementById("stiefKinderen");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;

      if (skipped) {
        showNext();
      }
    }
  } else if (currSlide == 11) {
    // If user has not selected an option, alert with popup
    if ($('input[name=sK]:checked').length == 0 && checked == false && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if (!skipped) {
        answers.q10 = $('input[name=sK]:checked').val();
        var d = new Date();
        answers.q10timeStamp = (d - startTime) / 1000;
      } else {
        answers.q10 = "skipped";
        var d = new Date();
        answers.q10timeStamp = (d - startTime) / 1000;
      }

      checked = false;
      skipped = false;

      document.getElementById("stiefKinderen").style.display = "none";
      var ex = document.getElementById("wilKinderen");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;
    }
  } else if (currSlide == 12) {
    // If user has not selected an option, alert with popup
    if ($('input[name=wK]:checked').length == 0 && checked == false) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      answers.q11 = $('input[name=wK]:checked').val();
      var d = new Date();
      answers.q11timeStamp = (d - startTime) / 1000;

      checked = false;
      skipped = false;

      document.getElementById("wilKinderen").style.display = "none";
      currSlide += 1;

      var ex = document.getElementById("wilHoeveelKinderen");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      for (var i = 0; i < parseInt(answers.q08); i++) {
        $("input#whvK" + i).attr('disabled', true);
      }
    }
  } else if (currSlide == 13) {
    // If user has not selected an option, alert with popup
    if ($('input[name=whvK]:checked').length == 0 && checked == false) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      answers.q12 = $('input[name=whvK]:checked').val();
      var d = new Date();
      answers.q12timeStamp = (d - startTime) / 1000;

      $('.whvkAnswer').text(answers.q12);
      $('.whvmkAnswer').text(answers.q12 - answers.q08);

      checked = false;

      document.getElementById("wilHoeveelKinderen").style.display = "none";
      var ex = document.getElementById("zekerHoeveelKinderen");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;

      if (answers.q12 == "weetikniet") {
        skipped = true;
        showNext();
      }
    }
  } else if (currSlide == 14) {
    // If user has not selected an option, alert with popup
    if ($('input[name=zhvK]:checked').length == 0 && checked == false && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if (!skipped) {
        answers.q13 = $('input[name=zhvK]:checked').val();
        var d = new Date();
        answers.q13timeStamp = (d - startTime) / 1000;
      } else {
        answers.q13 = "skipped";
        var d = new Date();
        answers.q13timeStamp = (d - startTime) / 1000;              
      }

      checked = false;

      document.getElementById("zekerHoeveelKinderen").style.display = "none";
      var ex = document.getElementById("hoesnelKinderen");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;
      
      if ((answers.q07 == "nee" && answers.q12 == "0") || (answers.q07 == "ja" && (answers.q12 - answers.q08 <= 0 || answers.q08 == "skipped"))) {
        skipped = true;
      }
      if (skipped) {
        showNext();
      }
    }
  } else if (currSlide == 15) {
    // If user has not selected an option, alert with popup
    if ($('input[name=hsK]:checked').length == 0 && checked == false && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if (!skipped) {
        answers.q14 = $('input[name=hsK]:checked').val();
        var d = new Date();
        answers.q14timeStamp = (d - startTime) / 1000;
      } else {
        answers.q14 = "skipped";
        var d = new Date();
        answers.q14timeStamp = (d - startTime) / 1000;              
      }

      checked = false;
      
      document.getElementById("hoesnelKinderen").style.display = "none";
      var ex = document.getElementById("gesprekPartner");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;
      
      if (answers.q01 != "ja") {
        skipped = true;
        showNext();
      } else {
        skipped = false;
      }
    }
  } else if (currSlide == 16) {
    // If user has not selected an option, alert with popup
    if ($('input[name=gkP]:checked').length == 0 && checked == false && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q15 = $('input[name=gkP]:checked').val();
        var d = new Date();
        answers.q15timeStamp = (d - startTime) / 1000;
      } else {
        answers.q15 = "skipped";
        var d = new Date();
        answers.q15timeStamp = (d - startTime) / 1000;
      }

      checked = false;
      
      document.getElementById("gesprekPartner").style.display = "none";
      var ex = document.getElementById("verschilPartner");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;

      if(answers.q15 != "ja") {
        skipped = true;
        showNext();
      }
    }
  } else if (currSlide == 17) {
    // If user has not selected an option, alert with popup
    if ($('input[name=vP]:checked').length == 0 && checked == false && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if (!skipped) {
        answers.q16 = $('input[name=vP]:checked').val();
        var d = new Date();
        answers.q16timeStamp = (d - startTime) / 1000;
      } else {
        answers.q16 = "skipped";
        var d = new Date();
        answers.q16timeStamp = (d - startTime) / 1000;
      }

      checked = false;
      skipped = false;

      document.getElementById("verschilPartner").style.display = "none";
      var ex = document.getElementById("geschiktAantalKinderen");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      currSlide += 1;
    }
  } else if (currSlide == 18) {
    // If user has not selected an option, alert with popup
    if ($('input[name=gaK]:checked').length == 0 && checked == false) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      answers.q17 = $('input[name=gaK]:checked').val();
      var d = new Date();
      answers.q17timeStamp = (d - startTime) / 1000;

      checked = false;
      document.getElementById("geschiktAantalKinderen").style.display = "none";
      var ex = document.getElementById("kinderenLevensgeluk");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";            
      currSlide += 1;
    }
  } else if (currSlide == 19) {
    // If user has not selected an option, alert with popup
    if ($('input[name=kL]:checked').length == 0 && checked == false && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      answers.q18 = $('input[name=kL]:checked').val();
      var d = new Date();
      answers.q18timeStamp = (d - startTime) / 1000;

      checked = false;
      skipped = false;

      document.getElementById("kinderenLevensgeluk").style.display = "none";
      currSlide += 1;
      showNext();
    }
  } else if (currSlide == 20) {
    d3.selectAll(".node").attr("display", "block");
    d3.selectAll(".node").on('mousedown.drag', null);
    // Q3: The following questions are about people with whom you discuss important matters 

    document.getElementById("slide3").style.display = "block";
    document.getElementById("name_input").style.display = "inline-flex";
    document.getElementById("name_input").style.left = string_l + "px";

    for(i = 1;i <= 25;i++) {
      var d = new Date();
      var node = {name: i, 
                  id: i, 
                  timeStamp:(d - startTime) / 1000,
                  gender:"female", 
                  kids:"nee",
                  friends:"nee",
                  kinderwens:"nee",
                  kinderloos:"nee",
                  kinderhulp:"nee",
                  kinderpraat:"nee",
                  xx:(bodyWidth/25)+(bodyWidth/26*(i-1)),
                  yy:((bodyWidth/25)+(bodyWidth/26)<125)?nodeLine+(i % 3)*40:nodeLine+(i % 2)*40,
                  x:(bodyWidth/25)+(bodyWidth/26*(i-1)),
                  y:((bodyWidth/25)+(bodyWidth/26)<125)?nodeLine+(i % 3)*40:nodeLine+(i % 2)*40};
      var focus = {id: i,
                   x:i*(bodyWidth/25)-(bodyWidth/25)/2,
                   y:((bodyWidth/25)+(bodyWidth/26)<125)?nodeLine+(i % 3)*40:nodeLine+(i % 2)*40};
      n = nodes.push(node);
      f = foci.push(focus);
    }

    setTimeout(function() {
      if(currSlide == 20) {
        alterPromptReminder();
      }
    },900000);

    restart();
    d3.selectAll(".node").attr("opacity", "0.4");

    currSlide++;
  } else if (currSlide == 21) {
    if (numAlters < 25 && checked == false) {
      checked = numAlters < 1 ? false : true;
      alterPromptNonresponse();
    } else {
      checked = false;

      //nodes.splice(numAlters+1,nodes.length-numAlters);
      nodes.forEach(function(d) {
        if (d.id > numAlters) {
          d.name = undefined;
          d.gender = undefined;
          d.kids = undefined;
          d.friends = undefined;
          d.kinderwens = undefined;
          d.kinderloos = undefined;
          d.kinderhulp = undefined;
          d.kinderpraat = undefined;
          answers["q19_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.name;
          var qd = new Date();
          answers["q19_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2}) + "timeStamp"] = (qd - startTime) / 1000;
        }
      });
      resetFoci();

      document.getElementById("slide3").style.display = "none";
      document.getElementById("slide4").style.display = "block";

      document.getElementById("name_input").style.display = "none";
      currSlide++;
    }
  } else if (currSlide == 22) {
    if (!altered && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > 0) {
          answers["q20_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.gender;
        }
      });

      var d = new Date();
      answers["q20timeStamp"] = (d - startTime) / 1000;

      checked = false; 
      altered = false;          

      resetFoci();        
      currSlide += 0.5;
      setTimeout(function() {
        showNext();
      },1000);
    }
  } else if (currSlide == 22.5) {
    if (askedAbout > 0 && $('input[name=lA]:checked').length == 0 && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      clearColors();

      if (askedAbout > 0) {
        // Collect data before going on
        answers["q21_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=lA]:checked').val();

        document.getElementById("question1_" + askedAbout + "_window").style.display = "none";
        document.getElementById("backdrop1_" + askedAbout).style.display = "none";
        document.getElementById("question1_" + askedAbout).style.display = "none";
      } else {
        document.getElementById("slide4").style.display = "none";
        document.getElementById("leeftijdAlter").style.display = "block";
      }

      if (askedAbout == numAlters) {
        // Collect data before going on
        nodes.forEach(function(d) {
          if (d.id > numAlters) {
            answers["q21_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          }
        });
        var d = new Date();
        answers["q21timeStamp"] = (d - startTime) / 1000;

        askedAbout = 0;
        currSlide += 0.5;
        //skipped = true;
        showNext();
      } else {
        askedAbout++;

        checked = false;
        refreshRadio();

        d3.selectAll(".node").attr("opacity", function(d) { return d.index == askedAbout ? 1 : .4 });

        currNode = nodes[askedAbout];

        d3.select("svg").append("rect")
          .attr("class", "q_window")
          .attr("id", "question1_" + askedAbout + "_window")
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("width", q_window_width)
          .attr("height", q_window_height)
          .attr("x", currNode.x - q_window_width / 2)
          .attr("y", currNode.y - q_window_height / 2);

        d3.select("svg").append("rect")
          .attr("class", "backdrop")
          .attr("id", "backdrop1_" + askedAbout)
          .attr("x", (currNode.x - 142 + 500 > bodyWidth) ? bodyWidth - 500 : Math.max(currNode.x - q_window_width / 2 - 110,0))
          .attr("y", currNode.y - 360)
          .attr("width", backdrop_width)
          .attr("height", 310);

        d3.select("svg").append("text")
          .attr("class", "slideText")
          .attr("id", "question1_" + askedAbout)
          .attr("x", (currNode.x - 142 + 500 > bodyWidth) ? bodyWidth - 490 : Math.max(currNode.x - q_window_width / 2 - 100,10))
          .attr("dy", currNode.y - 340)
          .text("Wat is de leeftijd van " + nodes[askedAbout].name.toUpperCase() + "? Het is geen probleem als u het niet precies weet--geef alstublieft uw beste schatting.")
          .call(wrap, backdrop_width - 20);

        drawBox(currNode);
      }
    }
  } else if (currSlide == 23) {
    if (askedAbout > 0 && ($('input[name=rA]:checked').length == 0 || ($('input[name=rA]:checked').val() == 14 && $('input#rAtextInput').val() == "")) && !checked) {
      promptNonresponse();
      checked = true;
    } else {

      if (askedAbout == 0) {
        document.getElementById("question1_" + numAlters + "_window").style.display = "none";
        document.getElementById("backdrop1_" + numAlters).style.display = "none";
        document.getElementById("question1_" + numAlters).style.display = "none";            

        document.getElementById("leeftijdAlter").style.display = "none";
        document.getElementById("relatieAlter").style.display = "block";
      } else {
        // Collect data before going on
        answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;

        for(i = 0;i < $('input[name=rA]:checked').length; i++) {
          if (answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] == undefined) {
            answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=rA]:checked')[i].value;
          } else {
            answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] += ", " + $('input[name=rA]:checked')[i].value;
          }
          if ($('input[name=rA]:checked')[i].value == 14) answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] += ":" + $('input#rAtextInput').val();
        }

        document.getElementById("question2_" + askedAbout + "_window").style.display = "none";
        document.getElementById("backdrop2_" + askedAbout).style.display = "none";
        document.getElementById("question2_" + askedAbout).style.display = "none";
      }

      if (askedAbout == numAlters) {
        // Collect data before going on
        nodes.forEach(function(d) {
          if (d.id > numAlters) {
            answers["q22_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          }
        });
        var d = new Date();
        answers["q22timeStamp"] = (d - startTime) / 1000;

        askedAbout = 0;
        currSlide += 1;
        //skipped = true;
        checked = false;
        showNext();
      } else {
        askedAbout++;

        checked = false;
        refreshRadio();

        d3.selectAll(".node").attr("opacity", function(d) { return d.index == askedAbout ? 1 : .4 });

        currNode = nodes[askedAbout];

        d3.select("svg").append("rect")
          .attr("class", "q_window")
          .attr("id", "question2_" + askedAbout + "_window")
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("width", q_window_width)
          .attr("height", q_window_height)
          .attr("x", currNode.x - q_window_width / 2)
          .attr("y", currNode.y - q_window_height / 2);

        d3.select("svg").append("rect")
          .attr("class", "backdrop")
          .attr("id", "backdrop2_" + askedAbout)
          .attr("x", (currNode.x < center) ? currNode.x + 50 : currNode.x - 550)
          .attr("y", currNode.y - 350)
          .attr("width", backdrop_width)
          .attr("height", 480);

        d3.select("svg").append("text")
          .attr("class", "slideText")
          .attr("id", "question2_" + askedAbout)
          .attr("x", (currNode.x < center) ? currNode.x + 60 : currNode.x - 540)
          .attr("dy", currNode.y - 330)
          .text("Wat is uw relatie tot " + nodes[askedAbout].name.toUpperCase() + " of hoe kent u hem/haar? Meerdere antwoorden invullen is mogelijk!")
          .call(wrap, backdrop_width - 20);

        drawBox(currNode);
      }
    }
  } else if (currSlide == 24) {
    document.getElementById("relatieAlter").style.display = "none";
    document.getElementById("Next").style.left = "";
    document.getElementById("Next").style.top = "";

    document.getElementById("slide5").style.display = "block";
    document.getElementById("fiveBar").style.display = "block";
    document.getElementById("labelBar1").style.display = "block";

    d3.selectAll(".node").attr("opacity", function(d) { return d.index == 0 ? .4 : 1 });
    clearColors();
    restart();

    d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
    setTimeout(function() {
      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = true});
    },1000);

    currSlide++;
  } else if (currSlide == 25) {
    // If user has not selected an option, alert with popup
    if (!altersInBoxes() && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      saveAltersInBoxes(23);
      var d = new Date();
      answers.q23timeStamp = (d - startTime) / 1000;

      checked = false;

      document.getElementById("slide5").style.display = "none";
      document.getElementById("labelBar1").style.display = "none";

      // Q4: How close is your relationship with each person?

      document.getElementById("slide6").style.display = "block";
      document.getElementById("labelBar2").style.display = "block";

      restart();

      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
      setTimeout(function() {
        d3.selectAll(".node").classed("fixed", function(d) { d.fixed = true});
      },1000);

      currSlide++;
    }
  } else if (currSlide == 26) {
    // If user has not selected an option, alert with popup
    if (!altersInBoxes() && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      saveAltersInBoxes(24);
      var d = new Date();
      answers.q24timeStamp = (d - startTime) / 1000;

      checked = false;

      document.getElementById("slide6").style.display = "none";
      document.getElementById("labelBar2").style.display = "none";

      // Q4: How close is your relationship with each person?

      document.getElementById("slide7").style.display = "block";
      document.getElementById("labelBar3").style.display = "block";

      restart();

      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
      setTimeout(function() {
        d3.selectAll(".node").classed("fixed", function(d) { d.fixed = true});
        d3.selectAll(".link").attr("display", "none");  
        d3.selectAll(".node").attr("opacity", function(d) { return d.index == 0 ? .4 : 1 });
      },1000);

      currSlide++;
    }
  } else if (currSlide == 27) {
    // If user has not selected an option, alert with popup
    if (!altersInBoxes() && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      saveAltersInBoxes(25);
      var d = new Date();
      answers.q25timeStamp = (d - startTime) / 1000;

      checked = false;

      document.getElementById("slide7").style.display = "none";

      // Q4: How close is your relationship with each person?

      document.getElementById("slide8").style.display = "block";

      clearColors();
      restart();

      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
      setTimeout(function() {
        d3.selectAll(".node").classed("fixed", function(d) { d.fixed = true});
        d3.selectAll(".link").attr("display", "none");  
        d3.selectAll(".node").attr("opacity", function(d) { return d.index == 0 ? .4 : 1 });
      },1000);

      currSlide++;
    }
  } else if (currSlide == 28) {
    // If user has not selected an option, alert with popup
    if (!altersInBoxes() && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      saveAltersInBoxes(26);
      var d = new Date();
      answers.q26timeStamp = (d - startTime) / 1000;

      checked = false;

      document.getElementById("slide8").style.display = "none";
      document.getElementById("fiveBar").style.display = "none";
      document.getElementById("labelBar3").style.display = "none";

      // Q4: How close is your relationship with each person?

      document.getElementById("slide15").style.display = "block";
      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});

      clearColors();

      currSlide+=0.2;
    }
  } else if (currSlide == 28.2) {
    if (!altered && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > 0) answers["q27_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.friends;
      });
      var d = new Date();
      answers.q27timeStamp = (d - startTime) / 1000;

      checked = false; 
      altered = false;         

      document.getElementById("slide15").style.display = "none";
      document.getElementById("slide9").style.display = "block";

      resetFoci();
      clearColors();

      currSlide+=0.3;

      /*setTimeout(function() {
        showNext();
      },1000);*/
    }
  } else if (currSlide == 28.5) {
    if (!altered && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > 0) answers["q28_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.kids;
      });
      var d = new Date();
      answers.q28timeStamp = (d - startTime) / 1000;

      checked = false; 
      altered = false;         

      document.getElementById("slide9").style.display = "none";
      document.getElementById("kinderenAlter").style.display = "block";
      document.getElementById("leeftijdKindAlter").style.display = "block";

      resetFoci();

      currSlide+=0.5;

      setTimeout(function() {
        showNext();
      },1000);
    }
  } else if (currSlide == 29) {
    if (askedAbout > 0 && lastAskedAbout > 0 && askedAbout-1 <= numAlters && ($('input[name=kA]:checked').length == 0 || $('input[name=lkA]:checked').length == 0) && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      if (lastAskedAbout > 0) {
        document.getElementById("question3_" + lastAskedAbout + "_window").style.display = "none";
        document.getElementById("backdrop3_" + lastAskedAbout).style.display = "none";
        document.getElementById("question3_" + lastAskedAbout).style.display = "none";
        document.getElementById("question4_" + lastAskedAbout).style.display = "none";
      }

      if (askedAbout > 0) {
        if(nodes[askedAbout].kids == "ja") {
          // Collect data before going on
          answers["q29_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=kA]:checked').val();
          answers["q30_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=lkA]:checked').val();
        } else {
          answers["q29_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          answers["q30_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
        }
      }

      if (askedAbout == numAlters) {
        // Collect data before going on
        nodes.forEach(function(d) {
          if (d.id > numAlters) {
            answers["q29_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
            answers["q30_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          }
        });

        var d = new Date();
        answers["q29_30timeStamp"] = (d - startTime) / 1000;              

        document.getElementById("kinderenAlter").style.display = "none";
        document.getElementById("leeftijdKindAlter").style.display = "none";

        document.getElementById("levensplezierAlter").style.display = "block";

        askedAbout = 0;
        lastAskedAbout = 0;
        currSlide += 1;
        //skipped = true;
        checked = false;
        showNext();
      } else {
        askedAbout++;

        if (nodes[askedAbout].kids != "ja") {
          answers["q29_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          answers["q30_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;

          showNext();
        } else {
          checked = false;
          refreshRadio();

          d3.selectAll(".node").attr("opacity", function(d) { return d.index == askedAbout ? 1 : .4 });

          lastAskedAbout = askedAbout;

          currNode = nodes[askedAbout];

          d3.select("svg").append("rect")
            .attr("class", "q_window")
            .attr("id", "question3_" + askedAbout + "_window")
            .attr("rx", 2)
            .attr("ry", 2)
            .attr("width", q_window_width)
            .attr("height", q_window_height)
            .attr("x", currNode.x - q_window_width / 2)
            .attr("y", currNode.y - q_window_height / 2);

          d3.select("svg").append("rect")
            .attr("class", "backdrop")
            .attr("id", "backdrop3_" + askedAbout)
            .attr("x", (currNode.x < center) ? currNode.x + 50 : currNode.x - 580)
            .attr("y", currNode.y - 350)
            .attr("width", backdrop_width + 30)
            .attr("height", 560);

          d3.select("svg").append("text")
            .attr("class", "slideText")
            .attr("id", "question3_" + askedAbout)
            .attr("x", (currNode.x < center) ? currNode.x + 60 : currNode.x - 570)
            .attr("dy", currNode.y - 330)
            .text("Hoeveel kinderen heeft " + currNode.name.toUpperCase() + "? Het is geen probleem als u het niet precies weet--geef alstublieft uw beste schatting.")
            .call(wrap, backdrop_width + 10);

          d3.select("svg").append("text")
            .attr("class", "slideText")
            .attr("id", "question4_" + askedAbout)
            .attr("x", (currNode.x < center) ? currNode.x + 60 : currNode.x - 570)
            .attr("dy", currNode.y - 70)
            .text("Hoe oud is het jongste kind van " + currNode.name.toUpperCase() + "? Het is geen probleem als u het niet precies weet--geef alstublieft uw beste schatting.")
            .call(wrap, backdrop_width + 10);

          drawBox(currNode);
        }
      }
    }
  } else if (currSlide == 30) {
    if (askedAbout > 0 && lastAskedAbout > 0 && askedAbout-1 <= numAlters && $('input[name=lpA]:checked').length == 0 && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      if (lastAskedAbout > 0) {
        document.getElementById("question5_" + lastAskedAbout + "_window").style.display = "none";
        document.getElementById("backdrop5_" + lastAskedAbout).style.display = "none";
        document.getElementById("question5_" + lastAskedAbout).style.display = "none";
      }

      if (askedAbout > 0) {
        if(nodes[askedAbout].kids == "ja") {
          // Collect data before going on
          answers["q31_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=lpA]:checked').val();
        } else {
          answers["q31_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
        }
      }

      if (askedAbout == numAlters) {
        // Collect data before going on
        nodes.forEach(function(d) {
          if (d.id > numAlters) {
            answers["q31_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          }
        });

        var d = new Date();
        answers["q31timeStamp"] = (d - startTime) / 1000;              

        document.getElementById("levensplezierAlter").style.display = "none";

        askedAbout = 0;
        currSlide += 1;
        //skipped = true;
        checked = false;
        showNext();
      } else {
        askedAbout++;

        if (nodes[askedAbout].kids != "ja") {
          answers["q31_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;

          showNext();
        } else {
          checked = false;
          refreshRadio();

          d3.selectAll(".node").attr("opacity", function(d) { return d.index == askedAbout ? 1 : .4 });

          lastAskedAbout = askedAbout;

          currNode = nodes[askedAbout];

          $(".naamAlter").text(currNode.name.toUpperCase());

          d3.select("svg").append("rect")
            .attr("class", "q_window")
            .attr("id", "question5_" + askedAbout + "_window")
            .attr("rx", 2)
            .attr("ry", 2)
            .attr("width", q_window_width)
            .attr("height", q_window_height)
            .attr("x", currNode.x - q_window_width / 2)
            .attr("y", currNode.y - q_window_height / 2);

          d3.select("svg").append("rect")
            .attr("class", "backdrop")
            .attr("id", "backdrop5_" + askedAbout)
            .attr("x", (currNode.x < center) ? currNode.x + 50 : currNode.x - 690)
            .attr("y", currNode.y - 150)
            .attr("width", backdrop_width + 140)
            .attr("height", 220);

          d3.select("svg").append("text")
            .attr("class", "slideText")
            .attr("id", "question5_" + askedAbout)
            .attr("x", (currNode.x < center) ? currNode.x + 60 : currNode.x - 680)
            .attr("dy", currNode.y - 130)
            .text("Hoe denkt u dat het levensplezier van  " + currNode.name.toUpperCase() + " is veranderd na de geboorte van het kind/de kinderen?")
            .call(wrap, backdrop_width + 10);

          drawBox(currNode);
        }
      }
    }
  } else if (currSlide == 31) {
    document.getElementById("Next").style.left = "";
    document.getElementById("Next").style.top = "";

    // Q4: How close is your relationship with each person?

    document.getElementById("slide10").style.display = "block";

    d3.selectAll(".node").attr("opacity", function(d) { return d.kids == "ja" ? .3 : 1 });

    currSlide++;
  } else if (currSlide == 32) {
    if (!altered && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > 0) answers["q32_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.kinderwens;
      });
      var d = new Date();
      answers.q32timeStamp = (d - startTime) / 1000;

      checked = false; 
      altered = false;         

      document.getElementById("slide10").style.display = "none";
      document.getElementById("slide11").style.display = "block";

      resetFoci();
      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
      d3.selectAll(".node").attr("opacity", function(d) { return (d.kids == "ja" || d.kinderwens == "ja") ? .3 : 1 });

      //clearColors();

      currSlide++;

      /*setTimeout(function() {
        showNext();
      },1000);*/
    }
  } else if (currSlide == 33) {
    if (!altered && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > 0) answers["q33_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.kinderloos;
      });
      var d = new Date();
      answers.q33timeStamp = (d - startTime) / 1000;

      checked = false; 
      altered = false;         

      document.getElementById("slide11").style.display = "none";
      document.getElementById("slide12").style.display = "block";

      resetFoci();
      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
      d3.selectAll(".node").attr("opacity", function(d) { return d.index > 0 ? 1 : 0 });

      clearColors();

      currSlide++;

      /*setTimeout(function() {
        showNext();
      },1000);*/
    }
  } else if (currSlide == 34) {
    if (!altered && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > 0) answers["q34_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.kinderhulp;
      });
      var d = new Date();
      answers.q34timeStamp = (d - startTime) / 1000;

      checked = false; 
      altered = false;         

      document.getElementById("slide12").style.display = "none";
      document.getElementById("slide13").style.display = "block";

      resetFoci();
      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
      clearColors();

      currSlide++;

      /*setTimeout(function() {
        showNext();
      },1000);*/
    }
  } else if (currSlide == 35) {
    if (!altered && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > 0) answers["q35_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.kinderpraat;
      });
      var d = new Date();
      answers.q35timeStamp = (d - startTime) / 1000;

      checked = false; 
      altered = false;          

      document.getElementById("slide13").style.display = "none";

      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});

      var n = numAlters,      // number of child nodes
          r = 235      // radius

      for (var i=1; i<=numAlters; i++) {
        var theta = (i / numAlters * Math.PI * 2) - 2;
        foci[i].ox = foci[i].x;
        if(numAlters < 18) {
          foci[i].x = center + r*Math.cos(theta);
        } else {
          foci[i].x = center + ((i % 2)?1.15*r:r)*Math.cos(theta);
        }
        foci[i].oy = foci[i].y;
        if(numAlters < 18) {
          foci[i].y = 500 + r*Math.sin(theta);
        } else {
          foci[i].y = 500 + ((i % 2)?1.15*r:r)*Math.sin(theta);
        }
      }

        /*foci[i].x = center + ((numAlters<20)?r:((i % 2)*0.8)*r)*Math.cos(theta);
        foci[i].oy = foci[i].y;
        foci[i].y = 500 + ((numAlters<20)?r:((i % 2)*0.8)*r)*Math.sin(theta);*/

      restart();
      clearColors();

      document.getElementById("slide14").style.display = "block";

      currSlide++;
      setTimeout(function() {
        showNext();
      },1000);
    }
  } else if (currSlide == 36) {
    // Q: Lijnen trekken

    if (askedAbout > 0) {
      answers["q36_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
      for (i = 1; i <= numAlters; i++) {
        if(nodes[askedAbout][i] == 1) {
          if(answers["q36_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] == undefined) {
            answers["q36_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = i;
          } else {
            answers["q36_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] += ", " + i;
          }
        }
      }

      foci[askedAbout].x = foci[askedAbout].px
      foci[askedAbout].y = foci[askedAbout].py

      links.splice(0,links.length);
      d3.selectAll(".node").attr("opacity", function(d) { return d.index <= askedAbout ? 0 : 1 });
    }

    if (askedAbout+1 == numAlters) {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > numAlters-1) {
          answers["q36_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
        }
      });

      var d = new Date();
      answers["q36timeStamp"] = (d - startTime) / 1000;

      /*for (var i=1; i<=numAlters; i++) {
        foci[i].x = foci[i].ox;
        foci[i].y = foci[i].oy;
      }*/
      d3.selectAll(".node").attr("display", "none");  
      d3.selectAll(".link").attr("display", "none");  

      document.getElementById("slide14").style.display = "none";
      var ex = document.getElementById("stellingenMeerKids");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      
      askedAbout = 0;
      currSlide += 1;
      checked = false;
      
      /*if (answers.q07 != "ja") {
        skipped = true;
        showNext();
      }*/
    } else {
      askedAbout++;

      currNode = nodes[askedAbout];

      $("#contactMet1").text("ALS HET GAAT OM " + currNode.name.toUpperCase());
      $("#contactMet2").text("Met wie heeft " + currNode.name.toUpperCase() + " contact? Met contact bedoelen we alle vormen van contact, zoals persoonlijk contact, contact via (mobiele) telefoon, post, email, sms, en andere manieren van online en offline communicatie.");
      d3.selectAll("#contactMet2").call(wrap, textWidth);
      $("#contactMet3").attr("y", text_offset_top + lineHeight * ($('#slide14 .slideText tspan').length + $('#slide14 .slideText').length-1))

      foci[askedAbout].px = foci[askedAbout].x
      foci[askedAbout].py = foci[askedAbout].y

      foci[askedAbout].x = center;
      foci[askedAbout].y = 500;

      restart();
    }
  } else if (currSlide == 37) {
    if (($('input[name=sV]:checked').length == 0 || $('input[name=sO]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q37a = $('input[name=sV]:checked').val();
        answers.q37b = $('input[name=sO]:checked').val();
        var d = new Date();
        answers.q37timeStamp = (d - startTime) / 1000;
      } else {
        answers.q37a = "skipped";
        answers.q37b = "skipped";
        var d = new Date();
        answers.q37timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on

      
      document.getElementById("stellingenMeerKids").style.display = "none";
      var ex = document.getElementById("kinderenMakenGeluk");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";
      
      checked = false;

      currSlide++;
    }
  } else if (currSlide == 38) {
    if ($('input[name=kMG]:checked').length == 0 && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      answers.q38 = $('input[name=kMG]:checked').val();
      var d = new Date();
      answers.q38timeStamp = (d - startTime) / 1000;
      
      document.getElementById("kinderenMakenGeluk").style.display = "none";
      var ex = document.getElementById("bronnen");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      currSlide++;
    }
  } else if (currSlide == 39) {
    if (($('input[name=br]:checked').val() == 5 && $('input#brtextInput').val() == "") || ($('input[name=br]:checked').length == 0) && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      answers.q39 = $('input[name=br]:checked').val();
      if ($('input[name=br]:checked').val() == 5) answers.q39 += ":" + $('input#brtextInput').val();
      var d = new Date();
      answers.q39timeStamp = (d - startTime) / 1000;

      document.getElementById("bronnen").style.display = "none";
      var ex = document.getElementById("opmerkingen");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
      showNext();
    }
  } else if (currSlide == 40) {
    answers.q40 = $('input#opmtextArea').val();
    document.getElementById("opmerkingen").style.display = "none";
    var ex = document.getElementById("afsluiting");
    ex.style.left = string_l + "px";
    ex.style.top = string_t;
    ex.style.display = "block";

    document.getElementById("NextDiv").style.display = "none";
    document.getElementById("submitForm").style.display = "block";

    currSlide++;
    showNext();
  } else if (currSlide == 41) {
    // Single array containing all answers
    var answer = [];
    for (var i in answers) {
      if (answers[i] == undefined) answers[i] = "nonresponse";
      answer.push(answers[i]);
    }

    console.log(answers);
    console.log(answer)

    //Post collected data to handler for recording server-side
    $.post("save_results.php", { a: answer });

    //Download CSV file client-side
    /*var csvString = answer.join(",");
    var a         = document.createElement('a');
    a.href        = 'data:attachment/csv;charset=utf-8;base64,' + window.btoa(csvString + "\n");
    a.target      = '_blank';
    a.download    = 'data.csv';

    document.body.appendChild(a);
    a.click();*/

    // Release window close-prevention
    unhook();
  }

  $('#Next').blur();
}