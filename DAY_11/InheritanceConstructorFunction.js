// Inheritance in constructor function
function Vehicle(name, color, wheels){
        this.name = name;
        this.color = color;
        this.wheels = wheels;

}

Vehicle.prototype.getDetails = function(){
    console.log(`
        The name of the vehicle is ${this.name} which is ${this.color} in color and have ${this.wheels}.
        `);
}

function Car(color, brand, purpose){
    Vehicle.call(this, "car",color,4)
    this.brand = brand;
    this.purpose = purpose;
}

Car.prototype.getDetails = function(){
    console.log(`
        The name of the vehicle is ${this.name} which is ${this.color} in color and have ${this.wheels}. The brand name of this vehicle is ${this.brand} and the purpose of this vehicle is ${this.purpose}
        `);
}

const car = new Car("blue", "audi1", "family car");
car.getDetails();