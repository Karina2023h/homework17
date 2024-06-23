class BankAccount {
  constructor(Inbalance) {
    this.balance = Inbalance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(many) {
    if (many > 0) {
      this.balance += many;
    } else {
      console.log("Сума повинна бути позитивною.");
    }
  }

  withdraw(many) {
    if (many > 0 && many <= this.balance) {
      this.balance -= many;
    } else if (many > this.balance) {
      console.log("Недостатньо коштів");
    } else {
      console.log("Сума виведення коштів має бути позитивною.");
    }
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300
