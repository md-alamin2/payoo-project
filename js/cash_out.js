const cashOut = document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutPin = getInputById("cash-out-pin");
    const cashOutAmount = getInputById('cash-out-amount');
    const mainBalance = getInnerTextById("main-balance");
    const agent = document.getElementById('agent-num').value;

    if(cashOutAmount > mainBalance || cashOutAmount < 0){
        alert("Invalid amount");
        return;
    }

    if(agent.length === 11){
        if(cashOutPin === 1234){
            const sub = mainBalance - cashOutAmount;
            setInnerTextByIdAndValue("main-balance", sub);

            const historySection = document.getElementById('transaction-history-section');

                const div = document.createElement("div");
                div.classList.add("bg-red-200", "mt-5", "px-4", "py-2", "border-1", "border-gray-500", "rounded")
                div.innerHTML = `
                <h4 class="text-lg font-bold">Cash Out</h4>
                <p>Cash out to : ${agent}.</p>
                <p>Cash out amount: -${cashOutAmount}</p>
                `;
                historySection.appendChild(div);
        }
        else{
            alert('Invalid PIN');
        }
    }
    else{
        alert('Invalid number')
    }
})