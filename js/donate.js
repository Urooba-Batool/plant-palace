document.getElementById('donationType').addEventListener('change', function() {
    var donationType = this.value;
    var moneyDonation = document.getElementById('moneyDonation');
    var plantDonation = document.getElementById('plantDonation');
    
    if (donationType === 'money') {
        moneyDonation.classList.remove('donate-hidden');
        plantDonation.classList.add('donate-hidden');
    } else if (donationType === 'plant') {
        plantDonation.classList.remove('donate-hidden');
        moneyDonation.classList.add('donate-hidden');
    } else {
        moneyDonation.classList.add('donate-hidden');
        plantDonation.classList.add('donate-hidden');
    }
});

document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var donationType = document.getElementById('donationType').value;
    var amount = document.getElementById('amount').value;
    var plantType = document.getElementById('plantType').value;
    var message = document.getElementById('message');

    if (donationType === 'money' && (!amount || amount < 1)) {
        alert('Please enter a valid amount.');
        return;
    }

    if (donationType === 'plant' && plantType.trim() === '') {
        alert('Please enter the type of plant.');
        return;
    }

    message.innerHTML = `Thank you, ${name}, for your ${
        donationType === 'money' ? `donation of $${amount}` : `plant donation of a ${plantType}`
    }!`;
    message.classList.remove('donate-hidden');

    document.getElementById('donationForm').reset();
    document.getElementById('moneyDonation').classList.add('donate-hidden');
    document.getElementById('plantDonation').classList.add('donate-hidden');
});
