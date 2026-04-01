class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
    this.speed = 0;
  }

  drive() {
    this.speed = 50;
    return `The ${this.name} moves forward at ${this.speed} mph.`;
  }

  stop() {
    this.speed = 0;
    return `The ${this.name} stops.`;
  }
}

class Car extends Vehicle {
  constructor(name) {
    super(name, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(name) {
    super(name, 2);
  }

  wheelie() {
    return `The ${this.name} performs a wheelie!`;
  }
}

// -----------------------------------------
// DO NOT EDIT BELOW THIS LINE
// -----------------------------------------

console.log('');
console.log('ES6 CLASSES');
console.log('');

let mazda = new Car('Mazda 3');
console.log('Car');
console.log('mazda.name', mazda.name );
console.log('mazda.drive()', mazda.drive() );
console.log('mazda.stop()', mazda.stop() );
console.log(mazda);

console.log('-------------------------------');

let harley = new Motorcycle('Fatboy');
console.log('Motorcycle');
console.log('harley.name', harley.name );
console.log('harley.drive()', harley.drive() );
console.log('harley.wheelie()', harley.wheelie() );
console.log('harley.stop()', harley.stop() );
