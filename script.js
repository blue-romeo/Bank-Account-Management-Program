class BankAccount{
  constructor(){
    this.balance = 0;
    this.transactions = [];
  }
  deposit(amount){
    if(amount <= 0){
      return "Deposit amount must be greater than zero.";
    }else{
      this.transactions.push(
{
  type: "deposit",
  amount: amount
}
      )

      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
  }
 withdraw(amount){
if(amount <=0 || amount> this.balance){
  return "Insufficient balance or invalid amount."
}else{
  this.transactions.push(
    {type: "withdraw",
    amount: amount}
  )
  this.balance -= amount;
  return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
}
 }
 checkBalance(){
  return `Current balance: $${this.balance}`
 }
 

 listAllDeposits(){
  const deposits = this.transactions.filter(transaction => transaction.type === "deposit").map(transaction => transaction.amount).join(",")
  return `Deposits: ${deposits}`
 }
 listAllWithdrawals(){
   const withdrawals = this.transactions.filter(transaction => transaction.type === "withdraw").map(transaction => transaction.amount).join(",")
  return `Withdrawals: ${withdrawals}`
 }
}

const myAccount = new BankAccount();
console.log(myAccount.deposit(100))
console.log(myAccount.deposit(510))
console.log(myAccount.deposit(150))
console.log(myAccount.deposit(600))
console.log(myAccount.deposit(50))
console.log(myAccount.withdraw(70))
console.log(myAccount.withdraw(100))
console.log(myAccount.listAllDeposits(200))