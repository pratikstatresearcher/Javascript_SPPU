//Banking Application- Static Application//
let yesterday_balance = 30;
let current_balance = ++yesterday_balance;

console.log("Current Balance of Account Holder: ", current_balance);
--yesterday_balance;

console.log("Yesterday's Account Balance: ", yesterday_balance);
console.log("Recieved Money on last transaction = ", current_balance-yesterday_balance);