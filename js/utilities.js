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


// show more and less fun
function showLessHandler(readMoreId, lessId, hideContentId ){
    const readMore = document.getElementById(readMoreId);
    const less = document.getElementById(lessId);
    const hideContent = document.getElementById(hideContentId)

    readMore.addEventListener('click', function(){
        hideContent.classList.remove('hidden');
        readMore.classList.add('hidden');
        less.classList.remove('hidden');
    });
    less.addEventListener('click', function(){
        hideContent.classList.add('hidden');
        readMore.classList.remove('hidden');
        less.classList.add('hidden');
    });

    // return;
}
