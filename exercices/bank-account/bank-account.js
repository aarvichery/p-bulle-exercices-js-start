//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  balance;

  constructor() {}

  open() {
    this.balance = 0;
  }

  close() {
    if (this.balance != null) {
      this.balance = null;
    }
  }

  deposit(gived) {
    Balance += gived;
  }

  withdraw(taked) {
    Balance -= taked;
  }

  get balance() {
    return Balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
