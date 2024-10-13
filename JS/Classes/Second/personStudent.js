class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(newName) {
        this._firstName = newName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(newName) {
        this._lastName = newName;
    }

    get gender() {
        return this._gender;
    }

    set gender(newGender) {
        this._gender = newGender;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }

    toString() {
        return `${this._firstName} ${this._lastName}, ${this._age} years old`;
    }
}

class Student extends Person {

    constructor(firstName, lastName, gender, age, year, fee, programName, grade) {
        super(firstName, lastName, gender, age); 
        this._year = year;
        this._fee = fee;
        this._program = [{ programName: programName, grade: grade }];
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        this._year = newYear;
    }

    get program() {
        return this._program;
    }

    set program(newProgram) {
        this._program = newProgram;
    }

    get fee() {
        return this._fee;
    }

    set fee(newFee) {
        this._fee = newFee;
    }

    passExam() {
        return this._program.every(program => program.grade >= 50);
    }

    isAllPassed() {
        return this.passExam();  
    }
}


let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString());// Name Surname, 23 years old.

let user2 = new Student("Alice", "Smith", "female", 20, 2020, 2000, "Mathematics", 10);

console.log(user2.isAllPassed())

