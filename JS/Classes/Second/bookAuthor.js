class Author {
    #name;
    #email;
    #gender;

    constructor(name, email, gender) {
        this.#name = name;
        this.#email = email;
        this.#gender = gender;
    }

    get name() {
        if (typeof this.#name !== "string") {
            console.error("Name should be a string!!!");
        } else {
            return this.#name;
        }
    }

    get email() {
        return this.#email;
    }

    get gender() {
        return this.#gender.toLowerCase();
    }

    toString() {
        if (this.#gender === "male") {
            return `Mr. ${this.#name}`;
        } else {
            return `Mrs. ${this.#name}`;
        }
    }
}

class Book {
    #title;
    #author;
    #price;
    #quantity;

    constructor(title, author, price, quantity) {
        this.#title = title;
        this.#author = author;
        this.#price = price;
        this.#quantity = quantity;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author; 
    }

    get price() {
        return this.#price;
    }

    get quantity() {
        return this.#quantity;
    }

    get authorName() {
        return this.#author.name; 
    }

    set title(newTitle) {
        this.#title = newTitle;
    }

    set author(newAuthor) {
        this.#author = newAuthor; 
    }

    set price(newPrice) {
        this.#price = newPrice;
    }

    set quantity(newQuantity) {
        this.#quantity = newQuantity;
    }

    getProfit(){
        return this.#price * this.#quantity
    }

    toString(){
        return `${this.#title}'s price written by ${this.#author} is ${this.#price}, and has ${this.#quantity} copies`
    }
}

let author1 = new Author("Arthur", "aaa@gmail.com", "male");

console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling


let book1 = new Book("Harry Potter", "IDK", 5000, 100000);


console.log(book1.getProfit());
