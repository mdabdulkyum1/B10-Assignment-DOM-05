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


// main cards functions for multiple uses...
function cardsHandler(buttonId, donateAmountId, donatedAmountId, infoId) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const donateAmount = document.getElementById(donateAmountId);
        const donatedAmount = document.getElementById(donatedAmountId);
        const accountBalance = document.getElementById('account-balance');
        const donateHistory = document.getElementById('donate-history');

        const totalDonateAmount = parseFloat(donatedAmount.innerText) + parseFloat(donateAmount.value)
        const newAccountBalance = parseFloat(accountBalance.innerText) - parseFloat(donateAmount.value)

        // set conditions
        const checkValidInput = isNaN(parseFloat(donateAmount.value)) || donateAmount.value <= 0 || donateAmount.value > parseFloat(accountBalance.innerText);
        if (checkValidInput) {
            alert(" invalid Donation amount");
        } else {
            // update data 
            donatedAmount.innerText = totalDonateAmount;
            accountBalance.innerText = newAccountBalance;
            // get data 
            const info = document.getElementById(infoId).innerText;
            donateHistory.innerHTML += `
                <div class="border border-gray-200 rounded-lg p-8">
                    <h3 class="text-2xl font-extrabold my-3">${donateAmount.value} Taka is ${info}</h3>
                    <p>${nowTime()}</p>
                </div>
                `;
            // modal open 
            document.getElementById('modal').classList.remove('hidden');

        }
        donateAmount.value = "";
    })

}
