
// Noakhali
let nDonationAmount = parseFloat(document.getElementById('noakhali-d-amount').innerText);
const nTitle = document.getElementById('noakhali-title').innerText;
// Feni
let fDonationAmount = parseFloat(document.getElementById('feni-d-amount').innerText);
const fTitle = document.getElementById('feni-title').innerText;
// Protest
let pDonationAmount = parseFloat(document.getElementById('protest-d-amount').innerText);
const pTitle = document.getElementById('protest-title').innerText;


// // nav ids:
// btn-blog  -- blog button
// my-balance -- balance span

// banner ids:
// donation-toggle
// history-toggle

// donation sec id: donation-container

// donation card ids:
// noakhali-d-amount
// noakhali-title
// noakhali-d-input
// donate-btn

// feni-d-amount
// feni-title
// feni-d-input


// protest-d-amount
// protest-title
// protest-d-input


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

function calculateDonation(inputValueId, mainBalanceID, areaDonationAmountID, areaDonationAmount) {
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


// Toggle Container Function

document.getElementById('history-toggle').addEventListener('click', function () {
    toggleShow('history-container');
    toggleHide('donation-container');
})

document.getElementById('donation-toggle').addEventListener('click', function () {
    toggleHide('history-container');
    toggleShow('donation-container');
})

function toggleShow(id) {
    document.getElementById(id).classList.remove('hidden');

}
function toggleHide(id) {
    document.getElementById(id).classList.add('hidden');

}
