function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    let tank = 0;
    let odometer = 0;

    this.fill = function(gallons) {
        tank += gallons;
        return `Tank is ${tank} liters`
    };

    this.drive = function(distance){
        const fuelNeeded = distance / this.milesPerGallon;

        if (tank >= fuelNeeded) {
            tank -= fuelNeeded;
            odometer += distance;
            return `I drove ${distance} miles! Odometer: ${odometer} miles.`;
        } else {
            const possibleDistance = tank * this.milesPerGallon;
            odometer += possibleDistance;
            tank = 0;
            return `I ran out of fuel at ${odometer} miles!`;
        }
    }
}

const car = new Car("Tesla Model X", 1);

console.log(car.fill(50));
console.log(car.drive(100));
