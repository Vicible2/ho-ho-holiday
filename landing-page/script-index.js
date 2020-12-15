//TODO: change the js for typewriting function

// set up text to print, each item in array is new line
var aText = new Array(
    "Zoom calls and game", 
    );
    var iSpeed = 200; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.querySelector(".typing");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 3000);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }

    }
    
    
    typewriter();

    

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      (function letItSnow(){
        var snowflakes = document.querySelectorAll('.snow');
        for (var i = 0; i < snowflakes.length; i++) {
          var snowflake = snowflakes[i];
          snowflake.setAttribute('cx', getRandom(1,100) + '%');
          snowflake.setAttribute('cy', '-' + getRandom(1,100));
          snowflake.setAttribute('r', getRandom(1,3));
        }
      })();

appearText = () =>{

  let text = document.querySelector(".game-text");
  let text2 = document.querySelector(".game-text-two")

  let textLocation = text.getBoundingClientRect().top;
  let text2Location = text2.getBoundingClientRect().top;

  let screenPosition = window.innerHeight/1.3 ;

  if(textLocation < screenPosition){
    text.classList.add("game-text-appear");
  } 
  if (text2Location < screenPosition){
    text2.classList.add("game-text-two-appear");
  }


  
};
window.addEventListener("scroll", appearText);

