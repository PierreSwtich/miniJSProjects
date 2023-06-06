const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const countBtn = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = () => {
    if (price.value == '' || people.value == '' || tip.value == "starter") {
        error.textContent = 'Please fill all the inputs!';
        costInfo.style.display = 'none';
    } else {
        error.textContent = '';
        countBill();
    }
};

const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);

    const sum = (newPrice + ( newPrice * newTip )) / newPeople

    costInfo.style.display = 'block';

    cost.textContent = sum.toFixed(2)


};

const handleInput = () => {
    if (price.value == '' || people.value == '' || tip.value == "starter") {
        costInfo.style.display = 'none';
    }
};

price.addEventListener('input', handleInput);
people.addEventListener('input', handleInput);
tip.addEventListener('input', handleInput);
countBtn.addEventListener('click', showBill)