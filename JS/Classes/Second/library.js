class Library {
    #books;
    #readers;

    constructor() {
        this.#books = [];
        this.#readers = [];
    }

    get books() {
        return this.#books;
    }

    get readers() {
        return this.#readers;
    }

    doHaveBook(requestedBook) {
        return this.#books.some(book => book.isTheSameBook(requestedBook));
    }

    addBook(newBook) {
        const existingBook = this.#books.find(book => book.isTheSameBook(newBook));
        if (existingBook) {
            existingBook.increaseQuantityBy(1);
        } else {
            this.#books.push(new LibraryBook(newBook.title, newBook.author, newBook.bookId, 1));
        }
        return this.#books;
    }

    addBooks(newBooks) {
        newBooks.forEach(book => this.addBook(book));
        return this.#books;
    }

    checkReaderId(readerId) {
        return this.#readers.some(reader => reader.readerId === readerId);
    }

    lendBook(book, readerId) {
        const libraryBook = this.#books.find(b => b.isTheSameBook(book) && b.quantity > 0);
        if (libraryBook && this.checkReaderId(readerId)) {
            libraryBook.decreaseQuantityBy(1);
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 14);
            const readerBook = new ReaderBook(book.title, book.author, book.bookId, expirationDate.toDateString(), false);
            return readerBook;
        }
        return null;
    }

    addReader(reader) {
        this.#readers.push(reader);
    }
}

class Book {
    #title;
    #author;

    constructor(title = "", author = "") {
        this.#title = title;
        this.#author = author;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    toString() {
        return `${this.#title} written by ${this.#author}`;
    }

    isTheSameBook(book) {
        return this.#author === book.#author && this.#title === book.#title;
    }
}

class LibraryBookBase extends Book {
    #bookId;

    constructor(title = "", author = "", bookId = 0) {
        super(title, author);
        this.#bookId = bookId;
    }

    get bookId() {
        return this.#bookId;
    }

    toString() {
        return `${super.toString()}, ID: ${this.#bookId}`;
    }
}

class LibraryBook extends LibraryBookBase {
    #quantity;

    constructor(title = "", author = "", bookId = 0, quantity = 1) {
        super(title, author, bookId);
        this.#quantity = quantity;
    }

    get quantity() {
        return this.#quantity;
    }

    increaseQuantityBy(amount) {
        this.#quantity += amount;
    }

    decreaseQuantityBy(amount) {
        this.#quantity -= amount;
    }

    toString() {
        return `${super.toString()}, Quantity: ${this.#quantity}`;
    }
}

class ReaderBook extends LibraryBookBase {
    #expirationDate;
    #isReturned;

    constructor(title = "", author = "", bookId = 0, expirationDate = "", isReturned = false) {
        super(title, author, bookId);
        this.#expirationDate = expirationDate;
        this.#isReturned = isReturned;
    }

    get expirationDate() {
        return this.#expirationDate;
    }

    get isReturned() {
        return this.#isReturned;
    }

    setExpirationDate(expirationDate) {
        this.#expirationDate = expirationDate;
    }

    setIsReturned(isReturned) {
        this.#isReturned = isReturned;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.#expirationDate}, Returned: ${this.#isReturned}`;
    }
}

class Reader {
    #firstName;
    #lastName;
    #readerId;
    #books;

    constructor(firstName = "", lastName = "", readerId = 0) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#readerId = readerId;
        this.#books = [];
    }

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get readerId() {
        return this.#readerId;
    }

    get books() {
        return this.#books;
    }

    borrowBook(book, library) {
        if (book instanceof ReaderBook) {
            this.#books.push(book);
        } else {
            console.log("The book is not a type of ReaderBook.");
        }
    }

    toString() {
        return `${this.#firstName} ${this.#lastName}, ID: ${this.#readerId}`;
    }
}

