class Person {
    #firstName;
    #lastName;
    #gender;
    #age;

    constructor(firstName, lastName, gender, age) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#gender = gender;
        this.#age = age;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(newName) {
        this.#firstName = newName;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(newName) {
        this.#lastName = newName;
    }

    get gender() {
        return this.#gender;
    }

    set gender(newGender) {
        this.#gender = newGender;
    }

    get age() {
        return this.#age;
    }

    set age(newAge) {
        this.#age = newAge;
    }

    toString() {
        return `${this.#firstName} ${this.#lastName}, ${this.#age} years old`;
    }
}

class Student extends Person {
    #year;
    #fee;
    #program;

    constructor(firstName, lastName, gender, age, year, fee, programName, grade) {
        super(firstName, lastName, gender, age); 
        this.#year = year;
        this.#fee = fee;
        this.#program = [{ programName: programName, grade: grade }];
    }

    get year() {
        return this.#year;
    }

    set year(newYear) {
        this.#year = newYear;
    }

    get program() {
        return this.#program;
    }

    set program(newProgram) {
        this.#program = newProgram;
    }

    get fee() {
        return this.#fee;
    }

    set fee(newFee) {
        this.#fee = newFee;
    }

    passExam() {
        return this.#program.every(program => program.grade >= 50);
    }

    isAllPassed() {
        return this.passExam();  
    }
}


let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString());// Name Surname, 23 years old.

let user2 = new Student("Alice", "Smith", "female", 20, 2020, 2000, "Mathematics", 10);

console.log(user2.isAllPassed())

