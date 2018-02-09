// define a constructor in ES5
function Car(brand, color, horsepowers) {
  this.brand = brand;
  this.color = color;
  this.horsepowers = horsepowers;
}

// Defining class in ES6
/*
class Car {
  constructor(brand, color, horsepowers)
}
*/

// add function to all instances of Car
Car.prototype.getColor = function() {
  return this.color
}

// create a new single instance
var car1 = new Car("audi", "blue", 300);

// return color of single instance
car1.getColor();
