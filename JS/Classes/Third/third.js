class Shape {
    constructor(name, sides = [], sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter(){
        let initialValue = 0;
        for (const side of this.sides) {
            initialValue += side;
        }

        return initialValue;
    }

}

class Square extends Shape {
    #name
    #sideLength
    constructor([a, b]){
        super("rectangle", [a, b, a, b], 4);
        this.a = a;
        this.b = b;
    }

    calcArea(){
        let initialValue = 0;
        for (const side in this.sides) {
            initialValue = this.a * this.b;
        }

        return initialValue
    }

}

const square = new Square([4, 6]);

console.log(square.calcPerimeter());
