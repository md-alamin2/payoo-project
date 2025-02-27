// add money event
const addMoney = document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const selectedBank = document.getElementById("select-bank").value;
    const accountNum = document.getElementById('account-num').value;
    const amount = getInputById("amount");
    const accountPin = getInputById("account-pin");
    const mainBalance = getInnerTextById("main-balance");

    if(amount < 0){
        alert("Invalid amount");
        return;
    }


    if(selectedBank === "Bkash" || selectedBank === "Nagad" || selectedBank === "Rocket"){
        if(accountNum.length === 11){
            if(accountPin === 1234){
                const sum = mainBalance + amount;
                setInnerTextByIdAndValue("main-balance", sum);

                const historySection = document.getElementById('transaction-history-section');

                const div = document.createElement("div");
                div.classList.add("bg-red-200", "mt-5", "px-4", "py-2", "border-1", "border-gray-500", "rounded")
                div.innerHTML = `
                <h4 class="text-lg font-bold">Add Money</h4>
                <p>added money form ${selectedBank}: ${accountNum}.</p>
                <p>added amount: +${amount}</p>
                `;
                historySection.appendChild(div);
            }
            else{
                alert('Invalid PIN')
            }
        }
        else{
            alert("Invalid Number")
        }
    }
    else{
        alert("You don't have select the Bank")
    }

})