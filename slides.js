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
    .text("Completing the questionnaire takes about xx minutes. You must complete this " +
        "questionnaire in one go. Therefore, you can not continue with the questionnaire at a different time, and you can not " +
        "go back to your previous answers.")
    .call(wrap, textWidth);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide0 .slideText tspan').length + $('#slide0 .slideText').length))
    .text("Please click the continue button to go to the next page.")
    .call(wrap, textWidth);
}

// Slide 2

var slide2 = d3.select("svg").append("g")
  .attr("id", "slide2");
slide2.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide2.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + title_offset_top + lineHeight)
  .text("Before answering the questions, it may be helpful to know that you can also use the ENTER key \u23CE  to go " +
      "to the next question. Of course you can also simply click on the Continue button.")
  .call(wrap, textWidth);
slide2.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide2 .slideText tspan').length + $('#slide2 .slideText').length))
  .text("As already mentioned, you can NOT return to your previous answers, so check your answers well before" + 
    " you go to the next question. If you have filled in an incorrect answer, you may be able to write this on a piece of paper" + 
    ". At the end of the questionnaire you will be given the opportunity to report what you have entered incorrectly by mistake.")
  .call(wrap, textWidth);
slide2.style("display", "none");

// Slide 3       

var slide3 = d3.select("svg").append("g")
  .attr("id", "slide3");
slide3.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide3.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Noem alstublieft 25 namen van personen die 18 jaar of ouder zijn en met wie u in het afgelopen jaar contact hebt gehad. Dit contact kan bestaan uit persoonlijk contact, maar ook uit contact via de telefoon, internet of e-mail. U kent deze personen en deze personen kennen u ook van naam of gezicht (denk aan vrienden, familie, kennissen, et cetera). U zou contact op kunnen nemen met deze personen wanneer dat zou moeten. Noem in ieder geval de naam van uw partner als u die hebt.")
  .call(wrap, textWidth);
slide3.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide3 .slideText tspan').length + $('#slide3 .slideText').length-1))
  .text("De namen hoeven niet precies te kloppen; u mag ook bijnamen noemen. Het is belangrijk dat u de naam herkent als u deze naam in een volgende vragenlijst in het LISS panel tegenkomt.")
  .call(wrap, textWidth);
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "one_at_a_time")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide3 .slideText tspan').length + $('#slide3 .slideText').length-1))
  .text("Voor het onderzoek is het van belang dat u daadwerkelijk 25 personen noemt!")
  .call(wrap, textWidth);
var textheight = $('#slide3 .slideText tspan').length + $('#slide3 .slideText').length;
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "first_friend_text")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * textheight)
  .text("Als u veel moeite heeft om de lijst met 25 namen vol te maken, dan kunt u er voor kiezen om de contacten-lijst van uw (mobiele) telefoon, email, of Facebook te bekijken.")
  .call(wrap, textWidth)
  .attr("display", "none");
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "second_friend_text")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * textheight)
  .style("stroke", "none")
  .style("fill", "red")
  .text("Is there another person with whom you discuss important matters? Please enter his or her name or initials.")
  .call(wrap, textWidth)
  .attr("display", "none");
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "final_friend_text")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * textheight)
  .style("stroke", "none")
  .style("fill", "red")
  .text("Bedankt voor het invullen van deze namen. Klik op \"Ga door\".")
  .call(wrap, textWidth)
  .attr("display", "none");
slide3.style("display", "none");

// Slide 4

var slide4 = d3.select("svg").append("g")
  .attr("id", "slide4");
slide4.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide4.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Wie van deze personen zijn mannen?")
  .call(wrap, textWidth);
slide4.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide4 .slideText tspan').length + $('#slide4 .slideText').length-1))
  .text("Klik op de naam van de persoon als deze een man is – het bolletje zal van kleur veranderen. Als u per ongeluk een verkeerde persoon heeft aangeklikt kunt u deze keuze herstellen door nog een keer op deze persoon te klikken.")
  .call(wrap, textWidth);
slide4.style("display", "none");

// Slide 5

var slide5 = d3.select("svg").append("g")
  .attr("id", "slide5");
slide5.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide5.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Hoe hecht is uw band met deze personen?")
  .call(wrap, textWidth);
slide5.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide5 .slideText tspan').length + $('#slide5 .slideText').length-1))
  .text("Sleep de bolletjes met uw muis naar de verschillende antwoordmogelijkheden onder aan het scherm. De bolletjes zullen van kleur veranderen wanneer deze in een vakje terecht komen.")
  .call(wrap, textWidth);
slide5.style("display", "none");

// Slide 6

var slide6 = d3.select("svg").append("g")
  .attr("id", "slide6");
slide6.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide6.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Wat is de hoogste opleiding die deze personen hebben afgerond met een diploma?") 
  .call(wrap, textWidth);
slide6.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide6 .slideText tspan').length + $('#slide6 .slideText').length-1))
  .text("Het is geen probleem als u het niet precies weet--geef alstublieft uw beste schatting. Als u het van sommige personen echt niet weet, hoeft u die persoon niet naar een vakje te slepen. De bolletjes zullen van kleur veranderen wanneer deze in een vakje terecht komen.")
  .call(wrap, textWidth);
slide6.style("display", "none");

// Slide 7

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
  .text("Hoe vaak hebt u persoonlijk contact met deze personen?")
  .call(wrap, textWidth);
slide7.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide7 .slideText tspan').length + $('#slide7 .slideText').length-1))
  .text("Met persoonlijk contact bedoelen we contact in het echt, dus in levende lijve. We bedoelen hier NIET contact via bijvoorbeeld de telefoon of sociale media.")
  .call(wrap, textWidth);
slide7.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide7 .slideText tspan').length + $('#slide7 .slideText').length-1))
  .text("Sleep de bolletjes met uw muis naar de verschillende antwoordmogelijkheden onder aan het scherm. De bolletjes zullen van kleur veranderen wanneer deze in een vakje terecht komen.")
  .call(wrap, textWidth);
slide7.style("display", "none");

// Slide 8

var slide8 = d3.select("svg").append("g")
  .attr("id", "slide8")
slide8.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide8.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Hoe vaak hebt u contact met deze personen op andere manieren dan persoonlijk, bijvoorbeeld via (mobiele) telefoon, post, email, chat, sms, en andere manieren van online en offline communicatie.")
  .call(wrap, textWidth);
slide8.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide8 .slideText tspan').length + $('#slide8 .slideText').length-1))
  .text("Sleep de bolletjes met uw muis naar de verschillende antwoordmogelijkheden onder aan het scherm. De bolletjes zullen van kleur veranderen wanneer deze in een vakje terecht komen.")
  .call(wrap, textWidth);
slide8.style("display", "none");

// Slide 9

var slide9 = d3.select("svg").append("g")
  .attr("id", "slide9")
slide9.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide9.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Wie van deze personen hebben kinderen of zijn momenteel in verwachting van een kind?")
  .call(wrap, textWidth);
slide9.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide9 .slideText tspan').length + $('#slide9 .slideText').length-1))
  .text("Klik op de naam van de persoon als deze één of meer kinderen heeft of als deze (of zijn partner) in verwachting is – het bolletje zal van kleur veranderen. Als u per ongeluk een verkeerde persoon heeft aangeklikt kunt u deze keuze herstellen door nog een keer op de naam van deze persoon te klikken.")
  .call(wrap, textWidth);
slide9.style("display", "none");

// Slide 10

var slide10 = d3.select("svg").append("g")
  .attr("id", "slide10")
slide10.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide10.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Van wie van deze personen weet u dat ze graag kinderen willen krijgen?")
  .call(wrap, textWidth);
slide10.style("display", "none");

// Slide 11

var slide11 = d3.select("svg").append("g")
  .attr("id", "slide11")
slide11.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide11.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Van wie van deze personen weet u dat ze graag kinderloos willen blijven?")
  .call(wrap, textWidth);
slide11.style("display", "none");

// Slide 12

var slide12 = d3.select("svg").append("g")
  .attr("id", "slide12")
slide12.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide12.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Als u een kind hebt of een kind zou krijgen in de toekomst, bij wie van deze personen zou u om hulp kunnen vragen bij de zorg voor het kind (bijvoorbeeld door op te passen)?")
  .call(wrap, textWidth);
slide12.style("display", "none");

// Slide 13

var slide13 = d3.select("svg").append("g")
  .attr("id", "slide13")
slide13.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide13.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Met wie van deze personen hebt u het over het krijgen van kinderen?")
  .call(wrap, textWidth);
slide13.style("display", "none");

// Slide 14

var slide14 = d3.select("svg").append("g")
  .attr("id", "slide14")
slide14.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide14.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Nu vragen we u naar het onderlinge contact van de personen die u net genoemd hebt. Het zijn aardig wat vragen, maar u zult zien dat u er snel door heen gaat. U bent bijna aan het einde van de vragenlijst.")
  .call(wrap, textWidth);
slide14.append("text")
  .attr("class", "slideText")
  .attr("id", "contactMet1")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide14 .slideText tspan').length + $('#slide14 .slideText').length-1))
  .text("ALS HET GAAT OM ")
  .call(wrap, textWidth);
slide14.append("text")
  .attr("class", "slideText")
  .attr("id", "contactMet2")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide14 .slideText tspan').length + $('#slide14 .slideText').length-1))
  .text("Met wie heeft   contact? Met contact bedoelen we alle vormen van contact, zoals persoonlijk contact, contact via (mobiele) telefoon, post, email, sms, en andere manieren van online en offline communicatie.")
  .call(wrap, textWidth);
slide14.append("text")
  .attr("class", "slideText")
  .attr("id", "contactMet3")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide14 .slideText tspan').length + $('#slide14 .slideText').length-1))
  .text("Selecteer de personen die contact met elkaar hebben door met de muis op het bolletje te klikken. Er zal een lijn ontstaan die aangeeft dat de personen contact met elkaar hebben. Druk nog een keer op het bolletje om de lijn weer te laten verdwijnen, als de personen geen contact met elkaar hebben.")
  .call(wrap, textWidth);
slide14.style("display", "none");

// Slide 15

var slide15 = d3.select("svg").append("g")
  .attr("id", "slide15")
slide15.append("rect") 
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide15.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Wie van deze personen beschouwt u als vriend(in)?")
  .call(wrap, textWidth);
slide15.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide15 .slideText tspan').length + $('#slide15 .slideText').length-1))
  .text("Klik op de naam van de persoon als u deze als vriend(in) beschouwt – het bolletje zal van kleur veranderen. Als u per ongeluk een verkeerde persoon heeft aangeklikt kunt u deze keuze herstellen door nog een keer op de naam van deze persoon te klikken.")
  .call(wrap, textWidth);
slide15.style("display", "none");