var myName = document.getElementById("name");
var myFile = document.getElementById("file");
var divs = document.getElementById("divs");

function addDiv(){
    if(!myName.value) return;
    if(!myFile.files[0]) return;

    var myDiv = document.createElement("div");
    myDiv.id = "card";
    myDiv.innerHTML = `<h4> ${myName.value} </h4> <img height = 300 src=${URL.createObjectURL(myFile.files[0])} />`;

    divs.appendChild(myDiv);

    console.log("Added div" + myName.value + " " + URL.createObjectURL(myFile.files[0]));
}