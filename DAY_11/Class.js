// class is the syntactic sugar of constructor

class Vehicle {
  //the delaration of the variable is optional
  // public members we can access it outside the class
  name;
  color;
  wheels;
  //private members
  #regNum;

  //   we generally do not put function in the constructor because its copy will present with all the objects thats why we make it outside the constructore just like we are making when we making object constructor in the previous lecture.
  constructor(name, color, wheels, number) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
    //private member
    this.#regNum = number;
  }

  //   public member
  getDetails() {
    console.log(`
        The name of the vehicle is ${this.name} which is ${this.color} in color and have ${this.wheels}.
        `);
    console.log(`
        The registration number of the vehicle is ${this.#getNumber(
          this.#regNum
        )}.
        `);
  }

  //   private member
  #getNumber(number) {
    return number;
  }
}

// making the object of the class
const bus = new Vehicle("bus", "blue", 5, 900);
console.log(bus);
bus.getDetails();

// getdetails is not the property of vehicle but we can access it due to prototypel inheritance
console.log(bus.hasOwnProperty("getDetails"));
console.log(bus.hasOwnProperty("name"));
console.log(Vehicle);
