let nameLists=[];
let inputNames=document.getElementById("names");


document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();

    nameLists.push(inputNames.value);
    console.log(nameLists);

   

});

document.getElementById("result").addEventListener("click", () => {

 document.getElementById("inputpeople").style.display="none";
 document.getElementById("outputText").innerHTML="Here is your dearest people :"+ nameLists;


    let pair = function (letsPairUp) {
    
    
    let pairs = [];//empty array to put paired names
    let recipients = letsPairUp.slice(); // variable to divide all the names one by one 

    // var winner = letsPairUp[Math.floor(Math.random()*letsPairUp.length)];
    // console.log(winner);

    for (let i = 0; i < letsPairUp.length; i++) { //loop through the names that are sliced

        let sender = letsPairUp[i];		// var to get the index of people
        let recipientIndex = Math.floor(Math.random() * recipients.length); //var to randomly get the number of divided people's 

    while (recipients[recipientIndex] === sender) { // divided people's random number is equal to sender!! Can't send gift to myself

        recipientIndex = Math.floor(Math.random() * recipients.length); // not sure why its repeated as line 34
    }

        let recipient = recipients.splice(recipientIndex, 1)[0];
        pairs.push({sender: sender,receiver: recipient});

        document.getElementById("yourpair").innerHTML= sender +" "+ "Prepare your surprise for " + " "  + recipient;

    }
    
    return pairs;
    };

console.log(pair(nameLists));


});







