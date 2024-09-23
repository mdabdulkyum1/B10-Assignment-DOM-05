// select all elements
const donationBtn = document.getElementById('donation-btn')
const historyBtn = document.getElementById('history-btn')
const historySection = document.getElementById('history-section');
const donationCards = document.getElementById('donation-cards');
const donateBtnN = document.getElementById('donate-btn-n');
const donateBtnF = document.getElementById('donate-btn-f');
const donateBtnQ = document.getElementById('donate-btn-q')
const donateHistory = document.getElementById('donate-history');
/*
* Toggle the active status of the "Donation" and "History" buttons: 
* data and display
*/ 
donationBtn.addEventListener('click', function(){
    historyBtn.classList.remove('bg-primary')
    donationBtn.classList.add('bg-primary')
    // switch donation Data
    donationCards.classList.remove('hidden')
    historySection.classList.add('hidden')
})
historyBtn.addEventListener('click', function(){
    donationBtn.classList.remove('bg-primary')
    historyBtn.classList.add('bg-primary')
    // switch History Data
    donationCards.classList.add('hidden')
    historySection.classList.remove('hidden')
})
/* Donation Functionality for Each Card
* 
*/
donateBtnN.addEventListener('click', function(){
    // call functions and get value
    const accountBalance = getElementTextById('account-balance'); // main balance
    const donatedAmount =  getElementTextById('donated-amount-n');
    const donateAmount =   getInputFiledValueById('donate-input-amount-n');
    const totalDonate = donatedAmount + donateAmount; 
    const newBalance = accountBalance - donateAmount;
    // Input Validation
    if(isNaN(donateAmount) || donateAmount <= 0 || donateAmount > accountBalance){
        alert(" invalid Donation amount")
    }else{
        getElById('donated-amount-n').innerText = totalDonate;
        getElById('account-balance').innerText = newBalance;
        getElById('modal').classList.remove('hidden');

        // get data 
        const infoN = getElById('info-n').innerText;
        donateHistory.innerHTML += `
        <div class="border border-gray-200 rounded-lg p-8">
            <h3 class="text-2xl font-extrabold my-3">${donateAmount} Taka is ${infoN}</h3>
                    <p>${nowTime()}</p>
                </div>
    `;
    }

   
    getElById('donate-input-amount-n').value = "";
});
// function for card 2
donateBtnF.addEventListener('click', function(){
    // call functions and get value
    const accountBalance = getElementTextById('account-balance'); // main balance
    const donatedAmount =  getElementTextById('donated-amount-f');
    const donateAmount =   getInputFiledValueById('donate-input-f');
    const totalDonate = donatedAmount + donateAmount; 
    const newBalance = accountBalance - donateAmount;
    // Input Validation
    if(isNaN(donateAmount) || donateAmount <= 0 || donateAmount > accountBalance){
        alert(" invalid Donation amount")
    }else{
        getElById('donated-amount-f').innerText = totalDonate;
        getElById('account-balance').innerText = newBalance;
        getElById('modal').classList.remove('hidden');

        // get data 
        const infoF = getElById('info-f').innerText;
        donateHistory.innerHTML += `
        <div class="border border-gray-200 rounded-lg p-8">
            <h3 class="text-2xl font-extrabold my-3">${donateAmount} Taka is ${infoF}</h3>
                    <p>${nowTime()}</p>
                </div>
    `;
    }

   
    getElById('donate-input-f').value = "";
});
// function for card 3
donateBtnQ.addEventListener('click', function(){
    // call functions and get value
    const accountBalance = getElementTextById('account-balance'); // main balance
    const donatedAmount =  getElementTextById('donate-amount-q');
    const donateAmount =   getInputFiledValueById('donate-input-q');
    const totalDonate = donatedAmount + donateAmount; 
    const newBalance = accountBalance - donateAmount;
    // Input Validation
    if(isNaN(donateAmount) || donateAmount <= 0 || donateAmount > accountBalance){
        alert(" invalid Donation amount")
    }else{
        getElById('donate-amount-q').innerText = totalDonate;
        getElById('account-balance').innerText = newBalance;
        getElById('modal').classList.remove('hidden');

        // get data 
        const infoQ = getElById('info-q').innerText;
        donateHistory.innerHTML += `
        <div class="border border-gray-200 rounded-lg p-8">
            <h3 class="text-2xl font-extrabold my-3">${donateAmount} Taka is ${infoQ}</h3>
                    <p>${nowTime()}</p>
                </div>
    `;
    }

    getElById('donate-input-q').value = "";
});

// close modal
getElById('close-modal').addEventListener('click', function(){
    getElById('modal').classList.add('hidden');
});



// toggle nav menu
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const dropMenu = document.getElementById('drop-menu');
menuOpen.addEventListener('click', function(){
    menuOpen.classList.add('hidden');
    menuClose.classList.remove('hidden');
    dropMenu.classList.remove('hidden');
})
menuClose.addEventListener('click', function(){
    menuClose.classList.add('hidden');
    menuOpen.classList.remove('hidden');
    dropMenu.classList.add('hidden');
})

// call read more and show
showLessHandler('read-more', 'less', 'show-content');
showLessHandler('read-more-f', 'less-f', 'show-content-f');
showLessHandler('read-more-q', 'less-q', 'quota-content');
