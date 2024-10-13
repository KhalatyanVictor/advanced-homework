class Account {
    static #lastId = 0;
    #id;
    
    constructor(name, balance) {
        this._name = name;
        this._balance = balance;
        this.#id = Account.#lastId++; 
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this._name;
    }

    get balance() {
        return this._balance;
    }

    set name(newName) {
        this._name = newName;
    }

    set balance(newBalance) {
        this._balance = newBalance;
    }

    credit(amount) {
        this._balance += amount;
        return this._balance;
    }

    debit(amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
        } else {
            return "Amount exceeded balance.";
        }
    }

    transferTo(anotherAccount, amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
            anotherAccount._balance += amount;
        } else {
            return "Amount exceeded balance.";
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst.id === accountSecond.id) {
            throw new Error("Error: Accounts' id is the same");
        } else {
            return "Everything is OK!";
        }
    }

    toString() {
        return `${this._name}'s account balance is $${this._balance}`;
    }
}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account', _balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance: 1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); // "Amount exceeded balance."
console.log(savingAcc.transferTo(cardAcc, 1000)); // undefined
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000


console.log(savingAcc.toString()); // Saving account's account balance is $1400.