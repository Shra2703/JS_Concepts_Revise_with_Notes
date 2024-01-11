// Inheritance in class

class Vehicle {
  name;
  color;
  wheels;

  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  getDetails() {
    console.log(`
        The name of the vehicle is ${this.name} which is ${this.color} in color and have ${this.wheels}.
        `);
  }

  //   static methods can only access static variable and methods only
  static getDetails2() {
    console.log("hello moto.");
  }
}

class Car extends Vehicle {
  brand;
  purpose;

  constructor(color, brand, purpose) {
    super("Car", color, 4);
    this.brand = brand;
    this.purpose = purpose;
  }
}

const c = new Car("blue", "tata", "Family car");
console.log(c);

const v = new Vehicle("Car", "black", 4);
Vehicle.getDetails2(); //static methods can only be access with the help of class only
