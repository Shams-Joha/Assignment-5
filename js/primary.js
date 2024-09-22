
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
    calculateDonation('protest-d-input', 'my-balance', 'protest-d-amount', pDonationAmount);

})

//For Noakhali Card.
document.getElementById('n-donate-btn').addEventListener('click', function (e) {
    e.preventDefault();
    calculateDonation('noakhali-d-input', 'my-balance', 'noakhali-d-amount', nDonationAmount);

})

// For Feni Card.
document.getElementById('f-donate-btn').addEventListener('click', function (e) {
    e.preventDefault();
    calculateDonation('feni-d-input', 'my-balance', 'feni-d-amount', fDonationAmount);

})


// Common Function for all 3 locations.

function calculateDonation(inputValueId, mainBalanceID , areaDonationAmountID, areaDonationAmount ) {
    let donationAmount = getInputValueById(inputValueId);
    let mainBalanceAmount = parseFloat(document.getElementById('my-balance').innerText);

    if (!isNaN(donationAmount) && donationAmount > 0) {
        areaDonationAmount += donationAmount;
        document.getElementById(areaDonationAmountID).innerText = areaDonationAmount;
        mainBalanceAmount = mainBalanceAmount - donationAmount;
        document.getElementById(mainBalanceID).innerText = mainBalanceAmount;
        resetInput(inputValueId);
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
    return parseFloat(inputValue);

}

// Funciton to reset input field.
function resetInput(id) {
    document.getElementById(id).value = "";
}

