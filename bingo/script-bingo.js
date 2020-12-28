let pickCardBtn = document.querySelector("#get-card-btn");
let replayBtn = document.getElementById("replay");
let replayBtnWin = document.getElementById("replay-win");

let winDivLocation = document.querySelector(".replay-btn-div-win");
let loseDivLocation = document.querySelector(".replay-btn-div-lose");
let cardLocation = document.querySelector("#computer-card-image");
let drawCounterLocation = document.querySelector("#remaining-draw");

let icon1 = document.querySelector("#pc1");
let icon2 = document.querySelector("#pc2");
let icon3 = document.querySelector("#pc3");
let icon4 = document.querySelector("#pc4");
let icon5 = document.querySelector("#pc5");
let icon6 = document.querySelector("#pc6");
let icon7 = document.querySelector("#pc7");
let icon8 = document.querySelector("#pc8");
let icon9 = document.querySelector("#pc9");
let icon10 = document.querySelector("#pc10");
let icon11 = document.querySelector("#pc11");
let icon12 = document.querySelector("#pc12");

let cards = [1,2,3,4,5,6,7,8,9,10,11,12];
let bingoArray = []; 

//Functions
getCard = () => {
    let randomCard = Math.floor(Math.random() * Math.floor(cards.length));;

    cardLocation.src = "./img/snowflake.png";
   
    setTimeout(() => { 
        cardLocation.src= "./img/" + cards[randomCard] + ".png";
    }, 850);

   matchingCard(randomCard);
   compare(randomCard);  
};

compare = (randomCard) => {
    bingoArray.push(randomCard);

    console.log("bingoArray: " + bingoArray);

    let winSound = document.getElementById("winning-audio");

    if(bingoArray.includes(0) && bingoArray.includes(1) && bingoArray.includes(2) && bingoArray.includes(3)){
        
        //console.log("first row");

        winSound.play();

        setTimeout(() => { winSound.play();}, 3000);

        winGame();

    } else if(bingoArray.includes(4) && bingoArray.includes(5) && bingoArray.includes(6) && bingoArray.includes(7)){
       
        //console.log("second row");

        setTimeout(() => { winSound.play();}, 3000);

        winGame();
        
    } else if(bingoArray.includes(8) && bingoArray.includes(9) && bingoArray.includes(10) && bingoArray.includes(11)){
        
        //console.log("third row");
        
        setTimeout(() => { winSound.play(); }, 3000);

        winGame(); 
    }

    loseGame();

};

winGame = ()=>{

    pickCardBtn.style.display = "none";

    setTimeout(() => {  
      
        winDivLocation.style.display = "block";
        winDivLocation.style.opacity = ".9";
       
    }
    , 4000);
        
};



loseGame = () => {

    let remaining = 20 - bingoArray.length ;

    drawCounterLocation.innerHTML = remaining;
 
    if (bingoArray.length == 2){
        
        pickCardBtn.style.display = "none";

        setTimeout(() => {
            
            let loseSound = document.getElementById("losing-audio");
            loseSound.play();
            
        }, 2500);

        setTimeout(() => {

            loseDivLocation.style.display = "block";
            loseDivLocation.style.opacity = ".9";

        }, 3500);
        
    }

};

matchingCard = (randomCard) => {
    
     if(randomCard == 0){
        
        setTimeout(() => {       
            icon1.classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            icon1.src = "./img/oval.png";
        }, 3000);

    }  else if(randomCard == 1){

        setTimeout(() => {       
            icon2.classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            icon2.src = "./img/oval.png";
        }, 3000);

    }  else if(randomCard == 2){

        setTimeout(() => {       
            icon3.classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            icon3.src = "./img/oval.png";
        }, 3000);

    }  else if(randomCard == 3){

        setTimeout(() => {       
            icon4.classList.add("run-pumping"); 
        }, 1000);

        setTimeout(() => {
           icon4.src = "./img/oval.png";
        }, 3000);
    
    }  else if(randomCard == 4){
        
        setTimeout(() => {       
            icon5.classList.add("run-pumping"); 
        }, 1000);

        setTimeout(() => {
            icon5.src = "./img/oval.png";
        }, 3000);

    }  else if(randomCard == 5){
        
        setTimeout(() => {       
            icon6.classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            icon6.src = "./img/oval.png";
        }, 3000);

    }  else if(randomCard == 6){

        setTimeout(() => {       
            icon7.classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            icon7.src = "./img/oval.png";
        }, 3000);

    }   else if(randomCard == 7){

        setTimeout(() => {       
            icon8.classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            icon8.src = "./img/oval.png";
        }, 3000);

    } else if(randomCard == 8){

        setTimeout(() => {       
            icon9.classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            icon9.src = "./img/oval.png";
        }, 3000);

    } else if(randomCard == 9){

        setTimeout(() => {       
            icon10.classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
           icon10.src = "./img/oval.png";
        }, 3000);

    } else if(randomCard == 10){

        
        setTimeout(() => {       
            icon11.classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            icon11.src = "./img/oval.png";
        }, 3000);

    } else if(randomCard == 11){
        
        setTimeout(() => {       
            icon12.classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            icon12.src = "./img/oval.png";
        }, 3000);
    }
};

restartGame = () => {
    
    setTimeout(() =>{ 
        loseDivLocation.style.opacity = "0.6";            
        winDivLocation.style.opacity = "0.6";  
    }, 200);
    setTimeout(() =>{ 
        loseDivLocation.style.opacity = "0.4";
        winDivLocation.style.opacity = "0.4";
    }, 300);
    setTimeout(() =>{ 
        loseDivLocation.style.opacity = "0.2";
        winDivLocation.style.opacity = "0.2";
    }, 400);
    setTimeout(() =>{ 
        loseDivLocation.style.opacity = "0";
        winDivLocation.style.opacity = "0";
    }, 500);
    setTimeout(() =>{ 
        loseDivLocation.style.display = "none";
        winDivLocation.style.display = "none";

        drawCounterLocation.innerHTML = "20";
        bingoArray = []; 

        icon1.src = "./img/1.png";
        icon2.src = "./img/2.png";
        icon3.src = "./img/3.png";
        icon4.src = "./img/4.png";
        icon5.src = "./img/5.png";
        icon6.src = "./img/6.png";
        icon7.src = "./img/7.png";
        icon8.src = "./img/8.png";
        icon9.src = "./img/9.png";
        icon10.src = "./img/10.png";
        icon11.src = "./img/11.png";
        icon12.src = "./img/12.png";

        pickCardBtn.style.display = "block";

        //console.log("restart");
    }, 600);
};

//Call the function with the click events
pickCardBtn.addEventListener("click", getCard);
replayBtn.addEventListener("click", restartGame);
replayBtnWin.addEventListener("click", restartGame);

 

//To allow reactivate the css by adding a class
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




//credit : Sound from Zapsplat.com








    











