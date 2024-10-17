function Shape(name, sides = [], sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    
    this.calcPerimeter = function(){
        let initialValue = 0;
        for (const side of this.sides) {
            initialValue += side;
        }
        return initialValue;
    }
}

const triangle = new Shape("triangle", [2,4,5], 3);

console.log(triangle.calcPerimeter());
