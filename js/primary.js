
// Noakhali
let nDonationAmount = parseFloat(document.getElementById('noakhali-d-amount').innerText);
const nTitle = document.getElementById('noakhali-title').innerText;
// Feni
let fDonationAmount = parseFloat(document.getElementById('feni-d-amount').innerText);
const fTitle = document.getElementById('feni-title').innerText;
// Protest
let pDonationAmount = parseFloat(document.getElementById('protest-d-amount').innerText);
const pTitle = document.getElementById('protest-title').innerText;



//For Protest Card.
document.getElementById('p-donate-btn').addEventListener('click', function (e) {
    e.preventDefault();
    calculateDonation('protest-d-input', 'my-balance', 'protest-d-amount', 'p-donate-btn', pDonationAmount, pTitle);

})

//For Noakhali Card.
document.getElementById('n-donate-btn').addEventListener('click', function (e) {
    e.preventDefault();
    calculateDonation('noakhali-d-input', 'my-balance', 'noakhali-d-amount', 'n-donate-btn', nDonationAmount, nTitle);

})

// For Feni Card.
document.getElementById('f-donate-btn').addEventListener('click', function (e) {
    e.preventDefault();
    calculateDonation('feni-d-input', 'my-balance', 'feni-d-amount', 'f-donate-btn', fDonationAmount, fTitle);

})


// Common Function for all 3 locations.

function calculateDonation(inputValueId, mainBalanceID, areaDonationAmountID, donateBtnId, areaDonationAmount, titleId) {
    let hold = getInputValueById(inputValueId);
    let mainBalanceAmount = parseFloat(document.getElementById('my-balance').innerText);

    if (!isNaN(hold) && hold > 0 && hold < mainBalanceAmount ) {
        let donationAmount = parseFloat(hold);
        areaDonationAmount += donationAmount;
        document.getElementById(areaDonationAmountID).innerText = areaDonationAmount;
        mainBalanceAmount = mainBalanceAmount - donationAmount;
        document.getElementById(mainBalanceID).innerText = mainBalanceAmount;
        document.getElementById(donateBtnId).onclick = my_modal_1.showModal();
        resetInput(inputValueId);

        const date = new Date();
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const timeZoneOffset = date.getTimezoneOffset();
        const hoursOffset = Math.abs(timeZoneOffset / 60);
        const sign = timeZoneOffset > 0 ? '-' : '+';
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();


        document.getElementById('history-container').innerHTML += `
        <div class= "p-10 rounded-2xl border-gray-300 border mt-5">
        <p class= "font-bold text-xl" >${donationAmount} Taka is Donated for ${titleId}</p>
        <p>Date: ${day}/${month}/${year} - Time: ${hours}:${minutes}:${seconds} UTC${sign}${String(hoursOffset).padStart(2, '0')}:00 ${timeZone}</p>
        </div>
        `

    }
    else {
        alert('Please Enter a Valid Donation Amount');
        resetInput(inputValueId);
        return;
    }
}



// Function to get input value by given Id.
function getInputValueById(id) {
    let inputValue = document.getElementById(id).value;
    return inputValue;

}

// Funciton to reset input field.
function resetInput(id) {
    document.getElementById(id).value = "";
}


// Toggle Container Function

document.getElementById('history-toggle').addEventListener('click', function () {
    toggleShow('history-container');
    toggleHide('donation-container');
    this.classList.add('bg-green-500', 'text-white');
    const donateBtn = document.getElementById('donation-toggle');
    donateBtn.classList.remove('bg-green-500', 'text-white');
    donateBtn.classList.add('bg-gray-200', 'text-black');



})

document.getElementById('donation-toggle').addEventListener('click', function () {
    toggleHide('history-container');
    toggleShow('donation-container');
    this.classList.add('bg-green-500', 'text-white');
    const hisBtn = document.getElementById('history-toggle');
    hisBtn.classList.remove('bg-green-500', 'text-white');



})
//  Show & Hide functions.
function toggleShow(id) {
    document.getElementById(id).classList.remove('hidden');

}
function toggleHide(id) {
    document.getElementById(id).classList.add('hidden');

}

//Blog Page Toggle.

document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href = './blog.html';
})

