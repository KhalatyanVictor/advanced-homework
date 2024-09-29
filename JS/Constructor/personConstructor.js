const p1 = new Person("Samuel", 24)
const p2 = new Person("Joel", 36)
const p3 = new Person("Lily", 24)

function Person(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
};

const person = new Person;

Person.prototype.eat = function(food){
    this.stomach.push(food);
    return `Stomach::: ${this.stomach}`
}

Person.prototype.poop = function(){
    this.stomach = [];
    return `Stomach::: ${this.stomach}`
}

Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`
}


console.log(person.eat("Tobleron, axi dzoxik"), person.poop());

console.log(p1.toString());
