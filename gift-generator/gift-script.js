let nameLists=["selin","bert","luisa","mike"];
let inputNames=document.getElementById("names");

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();

    nameLists.push(inputNames.value);
    



});

document.getElementById("result").addEventListener("click", () => {

 document.getElementById("inputpeople").style.display="none";


});



    
