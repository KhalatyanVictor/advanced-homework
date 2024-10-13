class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get name() {
        if (typeof this._name !== "string") {
            console.error("Name should be a string!!!");
        } else {
            return this._name;
        }
    }

    get email() {
        return this._email;
    }

    get gender() {
        return this._gender.toLowerCase();
    }

    toString() {
        if (this._gender === "male") {
            return `Mr. ${this._name}`;
        } else {
            return `Mrs. ${this._name}`;
        }
    }
}

class Book {
    _title;
    _author;
    _price;
    #quantity;

    constructor(title, author, price, quantity) {
        this._title = title;
        this._author = author;
        this._price = price;
        this.#quantity = quantity;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author; 
    }

    get price() {
        return this._price;
    }

    get quantity() {
        return this.#quantity;
    }

    get authorName() {
        return this._author.name; 
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    set author(newAuthor) {
        this._author = newAuthor; 
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    set quantity(newQuantity) {
        this.#quantity = newQuantity;
    }

    getProfit(){
        return this._price * this.#quantity
    }

    toString(){
        return `${this._title}'s price written by ${this._author} is ${this._price}, and has ${this.#quantity} copies`
    }
}

let author1 = new Author("Arthur", "aaa@gmail.com", "male");

console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling


let book1 = new Book("Harry Potter", "IDK", 5000, 100000);


console.log(book1.getProfit());
