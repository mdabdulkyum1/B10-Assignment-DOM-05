// select all elements
const donationBtn = document.getElementById('donation-btn')
const historyBtn = document.getElementById('history-btn')
const historySection = document.getElementById('history-section');
const donationCards = document.getElementById('donation-cards');
const donateBtnN = document.getElementById('donate-btn-n');
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

// close modal
getElById('close-modal').addEventListener('click', function(){
    getElById('modal').classList.add('hidden');
});