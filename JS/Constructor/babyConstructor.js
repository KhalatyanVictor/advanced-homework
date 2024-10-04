function Person (name, age){
    this.name = name;
    this.age = age;
}

function Baby(name, age, favoriteToy) {
    Person.call(this, name, age);
    this.favoriteToy = favoriteToy;

    this.Play = function(){
        return `Playing with ${this.favoriteToy}`;
    }
}

const baby = new Baby('Victor', 16, "Car");

console.log(baby.Play());


