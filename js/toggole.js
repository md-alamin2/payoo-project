// add money
const addMoneyBtn = document.getElementById('card-1').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display= 'block';
    document.getElementById('cash-out-section').style.display= 'none';
});

// cash out

const addCashOutBtn = document.getElementById('card-2').addEventListener('click', function(){
    document.getElementById('cash-out-section').style.display= 'block';
    document.getElementById('add-money-section').style.display= 'none';
});