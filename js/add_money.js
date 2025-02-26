const addMoneyBtn = document.getElementById('card-1').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display= 'block';
});

// add money event
const addMoney = document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseInt(amount);
    const accountPin = document.getElementById('account-pin').value;
    const convertedPin = parseInt(accountPin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseInt(mainBalance);
    
    if(convertedPin === 1234){
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;
    }
    else{

    }

})