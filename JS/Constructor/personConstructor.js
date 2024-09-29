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


console.log(person.eat("Tobleron, axi dzoxik"), person.poop());

