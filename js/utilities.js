// date & time 
function nowTime(){
    const now = new Date();
    return now;
}

// get input Filed Value
function getInputFiledValueById(id){
    const filedValue = document.getElementById(id).value;
    const filedNumber = parseFloat(filedValue);
    return filedNumber;
}
function getElById(id){
    const element = document.getElementById(id);
    return element;
}
// get elements text 
function getElementTextById(id){
    const elText = document.getElementById(id).innerText;
    const elTextNumber = parseFloat(elText);
    return elTextNumber;
}