class Account {
    static #lastId = 0;
    #id;
    #name;
    #balance;
    
    constructor(name, balance) {
        this.#name = name;
        this.#balance = balance;
        this.#id = Account.#lastId++; 
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get balance() {
        return this.#balance;
    }

    set name(newName) {
        this.#name = newName;
    }

    set balance(newBalance) {
        this.#balance = newBalance;
    }

    credit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    debit(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
        } else {
            return "Amount exceeded balance.";
        }
    }

    transferTo(anotherAccount, amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
            anotherAccount.#balance += amount;
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
        return `${this.#name}'s account balance is $${this.#balance}`;
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