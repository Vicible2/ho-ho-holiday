let nameLists=["selin","bert","luisa","mike","harry"];
let inputNames=document.getElementById("names");


document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();

    nameLists.push(inputNames.value);
    console.log(nameLists);

    //here need to pair names randomly 





});

document.getElementById("result").addEventListener("click", () => {

 document.getElementById("inputpeople").style.display="none";
 document.getElementById("outputText").innerHTML=nameLists;
 

let pair = function(letsPairUp) {
    
    let pairs = [];
    let recipients = letsPairUp.slice();

    for (let i = 0; i < letsPairUp.length; i++) {
        let sender = letsPairUp[i];		
        let recipientIndex = Math.floor(Math.random() * recipients.length);

    while (recipients[recipientIndex] === sender) {
     // Can't send gift to myself
    recipientIndex = Math.floor(Math.random() * recipients.length);
    }

    let recipient = recipients.splice(recipientIndex, 1)[0];
    pairs.push({sender: sender,receiver: recipient});
    }

    return pairs;
    };

// 
console.log(pair(nameLists));


});
//TODO: pairing all the names -->random method






