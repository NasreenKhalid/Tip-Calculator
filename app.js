document.getElementById('tip-input').addEventListener('submit', function (e) {

    setTimeout(calculatetip, 1000);

    e.preventDefault();
});

function calculatetip() {


    const amount = document.getElementById('bill-amount');
    const people = document.getElementById('no-people');
    const e = document.getElementById('servicequality');
    const result = e.options[e.selectedIndex].value;
    console.log(people.value);

    const tip = document.getElementById('tip-amount');
    console.log(tip.value);

    if (amount.value === "" || people.value === "") {

        showError('Please enter the bill amount');

    }
    else {
        tip.value = (((amount.value) * result) / (people.value));

        document.getElementById('results').style.dislay = 'block';
        console.log(tip.value);
    }

}

function showError(error) {
    document.getElementById('results').style.display = 'none';

    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.card-body');

    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 4000);

}

function clearError() {
    document.querySelector('.alert').remove();
}

