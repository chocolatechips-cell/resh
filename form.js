function upDate(rose){
    document.getElementById('image').style.backgroundImage="url("+ rose.src +")";
    document.getElementById('image').innerHTML=rose.alt;
}

function unDo(){
    document.getElementById('image').innerHTML="Hover over an image below.";
    document.getElementById('image').style.backgroundImage="url(' ')";
}