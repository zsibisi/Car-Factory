
// Define the Car constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Add the getDescription method to the Car prototype
Car.prototype.getDescription = function() {
  return `Car: ${this.make} ${this.model} (${this.year})`;
};

// Define the ElectricCar constructor function as a subclass of Car
function ElectricCar(make, model, year, range) {
  // Call the Car constructor using the "super" keyword
  Car.call(this, make, model, year);
  this.range = range;
}

// Set up the prototype chain for ElectricCar to inherit from Car
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

// Override the getDescription method for ElectricCar
ElectricCar.prototype.getDescription = function() {
  return `Electric Car: ${this.make} ${this.model} (${this.year}) - Range: ${this.range} miles`;
};

// Create an instance of ElectricCar
const myElectricCar = new ElectricCar("Tesla", "Model S", 2019, 300);

// Call the getDescription method on the ElectricCar instance
console.log(myElectricCar.getDescription());
