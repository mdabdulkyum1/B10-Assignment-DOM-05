// select all elements
const donationBtn = document.getElementById('donation-btn')
const historyBtn = document.getElementById('history-btn')
const historySection = document.getElementById('history-section');
const donationCards = document.getElementById('donation-cards');


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


