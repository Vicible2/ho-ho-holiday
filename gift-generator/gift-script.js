let nameLists = [];
let inputNames = document.getElementById("names");


document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();

    nameLists.push(inputNames.value);
    // console.log(nameLists);



});

function getPairs(myPeople) {


    let emptyArray = []; //empty array to put paired names
    let recipients = myPeople.slice(); // variable to divide all the names one by one 



    for (let i = 0; i < myPeople.length; i++) { //loop through the names that are sliced

        let sendername = myPeople[i]; // var to get the index of people
        let randomNumber = Math.floor(Math.random() * recipients.length - 1); //var to randomly get the number of divided people's 

        while (recipients[randomNumber] === sendername) { // divided people's random number is equal to sender!! Can't send gift to myself

            randomNumber = Math.floor(Math.random() * recipients.length ); // not sure why its repeated as line 34
        }

        let recipient = recipients.splice(randomNumber, 1)[0];
        emptyArray.push({
            sender: sendername,
            receiver: recipient
        });

        document.getElementById("yourpair").innerHTML = sendername + " " + "Prepare your surprise for " + " " + recipient;

    }

    return emptyArray;

};

document.getElementById("result").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("inputpeople").style.display = "none";
    let output = document.getElementById("outputText");
    output.innerHTML = "Here is your dearest people :" + nameLists;

    drawList();

    function drawList() {
        output.innerHTML = '<option value="">Who are you?</option>';
        for (var i = nameLists.length - 1; i >= 0; i--) {
            var option = document.createElement('option');
            option.value = nameLists[i];
            option.innerHTML = nameLists[i];
            output.appendChild(option);
            console.log(option);
        }

    }

    let namesPairs=getPairs(nameLists);
    console.log(namesPairs);
    


    output.addEventListener("change", function (event) {

    let sender=event.target.value;
    console.log(sender);

    let taker;
    
    

    for (let i = namesPairs.length -1;i >= 0; i--){
        // let currentPair=Object.values(namesPairs[i].sender);
        // console.log(currentPair);
        if(namesPairs[i].sender===sender){
            console.log(namesPairs[i].sender)
            taker=(namesPairs[i].receiver)
            console.log(taker);
        }

     }       
     document.getElementById("yourpair").innerHTML = event.target.value +"," +" YOUR SECRET SANTA IS : " + taker ;





    })









});