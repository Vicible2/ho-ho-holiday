//TODO: animation before matching card disappear 
//TODO: set time out for changing card of computer



let pickCardBtn = document.querySelector("#get-card-btn");
let cardLocation = document.querySelector("#computer-card-image");


randomCard = () => {

    let cards = [1,2,3,4,5,6,7,8,9,10,11,12];

    let randomCard = Math.floor(Math.random()*(12-1)+1);

    cardLocation.src = "./img/10.png";
    //to show the computer card
    setTimeout(() => {
        cardLocation.src= "./img/" + cards[randomCard] + ".png";
    }, 850);
    

    console.log(cards[randomCard]);
   
    //to make the cards disappear
    if(randomCard == 0){
        
        document.querySelector("#pc1").src = "";
    }  else if(randomCard == 1){
        document.querySelector("#pc2").src = "";
    }  else if(randomCard == 2){
        document.querySelector("#pc3").src = "";
    }  else if(randomCard == 3){
        document.querySelector("#pc4").src = "";
    }  else if(randomCard == 4){
        document.querySelector("#pc5").src = "";
    }  else if(randomCard == 5){
        document.querySelector("#pc6").src = "";
    }  else if(randomCard == 6){
        document.querySelector("#pc7").src = "";
    }   else if(randomCard == 7){
        document.querySelector("#pc8").src = "";
    } else if(randomCard == 8){
        document.querySelector("#pc9").src = "";
    } else if(randomCard == 9){
        document.querySelector("#pc10").src = "";
    } else if(randomCard == 10){
        document.querySelector("#pc11").src = "";
    } else if(randomCard == 11){
        document.querySelector("#pc12").src = "";
    }
 
 

  
};


pickCardBtn.addEventListener("click", randomCard);


 
"use strict";


pickCardBtn.addEventListener("click", (e)=>{
  e.preventDefault;
  
  // -> removing the class
  cardLocation.classList.remove("run-animation");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // This was, from the original tutorial, will no work in strict mode. Thanks Felis Phasma! The next uncommented line is the fix.
  // element.offsetWidth = element.offsetWidth;
  
  void cardLocation.offsetWidth;
  
  // -> and re-adding the class
  cardLocation.classList.add("run-animation");
}, false);









    











