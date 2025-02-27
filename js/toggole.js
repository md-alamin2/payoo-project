// add money
const addMoneyBtn = document.getElementById('card-1').addEventListener('click', function(){
    handleToggle("add-money-section", "block");
    handleToggle("cash-out-section", "none");
    handleToggle("transaction-history-section", "none");
});

// cash out

const CashOutBtn = document.getElementById('card-2').addEventListener('click', function(){
    handleToggle("cash-out-section", "block");
    handleToggle("add-money-section", "none");
    handleToggle("transaction-history-section", "none");
});

// transaction history

const transactionHistoryBtn = document.getElementById('card-6').addEventListener('click', function(){
    handleToggle("transaction-history-section", "block");
    handleToggle("cash-out-section", "none");
    handleToggle("add-money-section", "none");
});