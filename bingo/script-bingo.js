


let pickCardBtn = document.querySelector("#get-card-btn");
let replayBtn = document.getElementById("replay");

let replayDivLocation = document.querySelector(".replay-btn-div");

let cardLocation = document.querySelector("#computer-card-image");
let drawCounterLocation = document.querySelector("#remaining-draw");



let cards = [1,2,3,4,5,6,7,8,9,10,11,12];

let bingoArray = []; 

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


function compare(randomCard){

    bingoArray.push(randomCard);

    console.log("bingoArray: " + bingoArray);

    
    //TODO: annouce the winning

    let winSound = document.getElementById("winning-audio");

    if(bingoArray.includes(0) && bingoArray.includes(1) && bingoArray.includes(2) && bingoArray.includes(3)){
        console.log("first row");
        winSound.play();

        setTimeout(() => {
            // document.querySelector(".card-div1").style.backgroundColor = "#001B3D";

            // document.querySelector(".card-div2").style.backgroundColor = "#001B3D";
            // document.querySelector(".card-div3").style.backgroundColor = "#001B3D";
            // document.querySelector(".card-div4").style.backgroundColor = "#001B3D";

            winSound.play();


        }, 3500);

        // document.querySelector("#pc1").classList.add("run-pumping");
        // document.querySelector("#pc2").classList.add("run-pumping");
        // document.querySelector("#pc3").classList.add("run-pumping");
        // document.querySelector("#pc4").classList.add("run-pumping");

        winGame();

    } else if(bingoArray.includes(4) && bingoArray.includes(5) && bingoArray.includes(6) && bingoArray.includes(7)){
        console.log("second row");

        setTimeout(() => {
            // document.querySelector(".card-div5").style.backgroundColor = "#001B3D";
            // document.querySelector(".card-div6").style.backgroundColor = "#001B3D";
            // document.querySelector(".card-div7").style.backgroundColor = "#001B3D";
            // document.querySelector(".card-div8").style.backgroundColor = "#001B3D";

            winSound.play();


        }, 3500);

        // document.querySelector("#pc5").classList.add("run-pumping");
        // document.querySelector("#pc6").classList.add("run-pumping");
        // document.querySelector("#pc7").classList.add("run-pumping");
        // document.querySelector("#pc8").classList.add("run-pumping");

        winGame();
        

    } else if(bingoArray.includes(8) && bingoArray.includes(9) && bingoArray.includes(10) && bingoArray.includes(11)){
        console.log("third row");
        

        setTimeout(() => {
            // document.querySelector(".card-div-9").style.backgroundColor = "#001B3D";
            // document.querySelector(".card-div-10").style.backgroundColor = "#001B3D";
            // document.querySelector(".card-div-11").style.backgroundColor = "#001B3D";
            // document.querySelector(".card-div-12").style.backgroundColor = "#001B3D";

            winSound.play();
        }, 3500);
        // document.querySelector("#pc9").classList.add("run-pumping");
        // document.querySelector("#pc10").classList.add("run-pumping");
        // document.querySelector("#pc11").classList.add("run-pumping");
        // document.querySelector("#pc12").classList.add("run-pumping");

        winGame();
        
    }


    
    loseGame();
   

};

function winGame(){

    pickCardBtn.style.display = "none";

   

    //TODO: play again button come much faster than the sound
        setTimeout(() => {  replayDivLocation.style.display = "block"; }, 2000);
        
}

function loseGame(){
   
    let remaining = 20 - bingoArray.length ;

    
    drawCounterLocation.innerHTML = remaining;
 
    //TODO:change back to 10times after test
    if (bingoArray.length == 50){

        console.log("20times");
        
        pickCardBtn.style.display = "none";

  

        setTimeout(() => {
            
            let loseSound = document.getElementById("losing-audio");
            loseSound.play();
            
        }, 3000);

        setTimeout(() => {
            replayDivLocation.style.display = "block";
        }, 4000);
        
    
    }

}

 //to make the cards disappear
function matchingCard(randomCard){
    
     if(randomCard == 0){
        
        setTimeout(() => {       
            document.querySelector("#pc1").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {

            document.querySelector("#pc1").remove();
            document.querySelector(".card-div1").classList.add("card-background");

        }, 3000);

    }  else if(randomCard == 1){

        setTimeout(() => {       
            document.querySelector("#pc2").classList.add("run-pumping");

        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc2").remove();
            document.querySelector(".card-div2").classList.add("card-background");

        }, 3000);

    }  else if(randomCard == 2){

        setTimeout(() => {       
            document.querySelector("#pc3").classList.add("run-pumping");

        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc3").remove();
            document.querySelector(".card-div3").classList.add("card-background");

        }, 3000);

    }  else if(randomCard == 3){


        setTimeout(() => {       
            document.querySelector("#pc4").classList.add("run-pumping");
            
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc4").remove();
            document.querySelector(".card-div4").classList.add("card-background");

        }, 3000);
    
    }  else if(randomCard == 4){
        
        
        setTimeout(() => {       
            document.querySelector("#pc5").classList.add("run-pumping");
            
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc5").remove();
            document.querySelector(".card-div5").classList.add("card-background");

        }, 3000);

    }  else if(randomCard == 5){

        
        setTimeout(() => {       
            document.querySelector("#pc6").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc6").remove();
            document.querySelector(".card-div6").classList.add("card-background");

        }, 3000);

    }  else if(randomCard == 6){

        
        setTimeout(() => {       
            document.querySelector("#pc7").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc7").remove();
            document.querySelector(".card-div7").classList.add("card-background");

        }, 3000);

    }   else if(randomCard == 7){

        
        setTimeout(() => {       
            document.querySelector("#pc8").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc8").remove();
            document.querySelector(".card-div8").classList.add("card-background");

        }, 3000);

    } else if(randomCard == 8){

        
        setTimeout(() => {       
            document.querySelector("#pc9").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc9").remove();
            document.querySelector(".card-div9").classList.add("card-background");

        }, 3000);

    } else if(randomCard == 9){

        setTimeout(() => {       
            document.querySelector("#pc10").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc10").remove();
            document.querySelector(".card-div10").classList.add("card-background");

        }, 3000);

    } else if(randomCard == 10){

        
        setTimeout(() => {       
            document.querySelector("#pc11").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc11").remove();
            document.querySelector(".card-div11").classList.add("card-background");

        }, 3000);

    } else if(randomCard == 11){
        
        setTimeout(() => {       
            document.querySelector("#pc12").classList.add("run-pumping");
        }, 1000);

        setTimeout(() => {
            document.querySelector("#pc12").remove();
            document.querySelector(".card-div12").classList.add("card-background");

        }, 3000);
    }
}


pickCardBtn.addEventListener("click", getCard);


function restartGame(){
    

    setTimeout(() =>{ replayDivLocation.style.opacity = "0.6";}, 200);
    setTimeout(() =>{ replayDivLocation.style.opacity = "0.4";}, 300);
    setTimeout(() =>{ replayDivLocation.style.opacity = "0.2";}, 400);
    setTimeout(() =>{ replayDivLocation.style.opacity = "0";}, 500);
    setTimeout(() =>{ replayDivLocation.remove();

        drawCounterLocation.innerHTML = "10";
        bingoArray = []; 

        document.querySelector("#pc1").src = "./img/1.png";
        document.querySelector("#pc2").src = "./img/2.png";
        document.querySelector("#pc3").src = "./img/3.png";
        document.querySelector("#pc4").src = "./img/4.png";
        document.querySelector("#pc5").src = "./img/5.png";
        document.querySelector("#pc6").src = "./img/6.png";
        document.querySelector("#pc7").src = "./img/7.png";
        document.querySelector("#pc8").src = "./img/8.png";
        document.querySelector("#pc9").src = "./img/9.png";
        document.querySelector("#pc10").src = "./img/10.png";
        document.querySelector("#pc11").src = "./img/11.png";
        document.querySelector("#pc12").src = "./img/12.png";

        pickCardBtn.style.display = "block";

        //console.log("restart");
    }, 600);
}

replayBtn.addEventListener("click", restartGame);

 
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


//credit : Sound from Zapsplat.com








    











