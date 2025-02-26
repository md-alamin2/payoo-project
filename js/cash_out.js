const cashOut = document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutPin = document.getElementById('cash-out-pin').value;
    const convertedPin = parseInt(cashOutPin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseInt(mainBalance);

    const cashOutAmount = document.getElementById('cash-out-amount').value;
    const convertedAmount = parseInt(cashOutAmount);

    const agent = document.getElementById('agent-num').value;
    if(agent.length === 11){
        if(convertedPin === 1234){
            const sub = convertedMainBalance - cashOutAmount;
            document.getElementById('main-balance').innerText = sub;
        }
        else{
            alert('Invalid PIN');
        }
    }
    else{
        alert('Invalid number')
    }
})