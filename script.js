var myName = document.getElementById("name");
var myFile = document.getElementById("file");
var divs = document.getElementById("divs");

var id = 0;

function createDiv(divName, url){
    var myDiv = document.createElement("div");
    myDiv.id = id++;
    myDiv.classList.add("card");

    myDiv.innerHTML = `
    <div class = cardHeader >
        <h4> ${divName} </h4> 
        <button class = deleteButton onclick="deleteDiv(${myDiv.id})">-</button>
    </div>
    <img height = 300 src=${url} />`;

    return myDiv;
}
function addDiv(){
    if(!myName.value) return;
    if(!myFile.files[0]) return;
    
    divs.appendChild(createDiv(myName.value, URL.createObjectURL(myFile.files[0])));
}

function deleteDiv(id){
    var myDiv = document.getElementById(id);
    divs.removeChild(myDiv);
}