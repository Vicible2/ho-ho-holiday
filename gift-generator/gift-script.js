let nameLists=[];
let inputNames=document.getElementById("names");


document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();

    nameLists.push(inputNames.value);
    console.log(nameLists);

   

});

document.getElementById("result").addEventListener("click", () => {

 document.getElementById("inputpeople").style.display="none";
 let=output=document.getElementById("outputText");
 output.innerHTML="Here is your dearest people :"+ nameLists;
 




    function drawList(){
     output.innerHTML = '<option value="">Who are you?</option>';
     for (var i = nameLists.length - 1; i >= 0; i--) {
         var option = document.createElement('option');
         option.value = i;
         option.innerHTML = nameLists[i];
         output.appendChild(option);
         console.log(option);
     }


    
    }
    
     
 
 
 


    let pair = function (myPeople) {
    
    
    let emptyArray = [];//empty array to put paired names
    let recipients = myPeople.slice(); // variable to divide all the names one by one 

    // var winner = letsPairUp[Math.floor(Math.random()*letsPairUp.length)];
    // console.log(winner);

    for (let i = 0; i < myPeople.length; i++) { //loop through the names that are sliced

        let sender = myPeople[i];		// var to get the index of people
        let randomNumber = Math.floor(Math.random() * recipients.length -1); //var to randomly get the number of divided people's 

    while (recipients[randomNumber] === sender) { // divided people's random number is equal to sender!! Can't send gift to myself

        randomNumber = Math.floor(Math.random() * recipients.length); // not sure why its repeated as line 34
    }

        let recipient = recipients.splice(randomNumber, 1)[0];
        emptyArray.push({sender: sender,receiver: recipient});

        let result=document.getElementById("yourpair");
        result.innerHTML= sender +" "+ "Prepare your surprise for " + " "  + recipient;

    }
    
    return emptyArray;

     };
     //try for dropdown select value 
    


console.log(pair(nameLists));

    emptyArray=pair(nameLists);
    emptyArray.forEach(person => {
        let take=person.receiver;
        let sent=person.sender;
        console.log(sent);
        console.log(take);
            //     result.innerText=option.options[option.selectedIndex].text;



 });

 drawList();

});











