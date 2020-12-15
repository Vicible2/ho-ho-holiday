//TODO: to annouce winner


let pickCardBtn = document.querySelector("#get-card-btn");
let cardLocation = document.querySelector("#computer-card-image");


let cards = [1,2,3,4,5,6,7,8,9,10,11,12];


getCard = () => {


    let randomCard = Math.floor(Math.random() * Math.floor(cards.length));;
    // console.log(randomCard);
    // console.log("type of random card: "+typeof randomCard);

    cardLocation.src = "./img/snowflake.png";
    //to show the computer card
    setTimeout(() => {
        cardLocation.src= "./img/" + cards[randomCard] + ".png";
    }, 850);
    

    //console.log(cards[randomCard]);

   matchingCard(randomCard);
   compare(randomCard);


  
};

let bingoArray = []; 

function compare(randomCard){

    bingoArray.push(randomCard);

    console.log("bingoArray: " + bingoArray);

    //TODO: put sound when one row is done
    //TODO: annouce the winning

    if(bingoArray.includes(0) && bingoArray.includes(1) && bingoArray.includes(2) && bingoArray.includes(3)){
        console.log("first row");
    } else if(bingoArray.includes(4) && bingoArray.includes(5) && bingoArray.includes(6) && bingoArray.includes(7)){
        console.log("second row");
    } else if(bingoArray.includes(8) && bingoArray.includes(9) && bingoArray.includes(10) && bingoArray.includes(11)){
        console.log("third row");
    }
    

    
   

};

 //to make the cards disappear
function matchingCard(randomCard){
    
     if(randomCard == 0){
        
        setTimeout(() => {       
            document.querySelector("#pc1").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc1").src = "";
        }, 3000);

    }  else if(randomCard == 1){

        setTimeout(() => {       
            document.querySelector("#pc2").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc2").src = "";
        }, 3000);

    }  else if(randomCard == 2){

        setTimeout(() => {       
            document.querySelector("#pc3").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc3").src = "";
        }, 3000);

    }  else if(randomCard == 3){


        setTimeout(() => {       
            document.querySelector("#pc4").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc4").src = "";
        }, 3000);
    
    }  else if(randomCard == 4){
        
        
        setTimeout(() => {       
            document.querySelector("#pc5").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc5").src = "";
        }, 3000);

    }  else if(randomCard == 5){

        
        setTimeout(() => {       
            document.querySelector("#pc6").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc6").src = "";
        }, 3000);

    }  else if(randomCard == 6){

        
        setTimeout(() => {       
            document.querySelector("#pc7").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc7").src = "";
        }, 3000);

    }   else if(randomCard == 7){

        
        setTimeout(() => {       
            document.querySelector("#pc8").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc8").src = "";
        }, 3000);

    } else if(randomCard == 8){

        
        setTimeout(() => {       
            document.querySelector("#pc9").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc9").src = "";
        }, 3000);

    } else if(randomCard == 9){

        setTimeout(() => {       
            document.querySelector("#pc10").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc10").src = "";
        }, 3000);

    } else if(randomCard == 10){

        
        setTimeout(() => {       
            document.querySelector("#pc11").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc11").src = "";
        }, 3000);

    } else if(randomCard == 11){
        
        setTimeout(() => {       
            document.querySelector("#pc12").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc12").src = "";
        }, 3000);
    }
}

function result(){

}
pickCardBtn.addEventListener("click", getCard);


 
"use strict";

//To allow reactivate the css by adding a class
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









    











