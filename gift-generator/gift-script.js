let nameLists=[];
let inputNames=document.getElementById("names");

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();

    nameLists.push(inputNames.value);
    
    console.log(nameLists);



});

    
