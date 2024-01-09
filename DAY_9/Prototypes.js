const car = {
    name: "BMW"
};

console.log(car.__proto__ === Object.getPrototypeOf(car)); //both are true
console.log(car.__proto__);


// constructor
function Car(name, price){
    this.name = name;
    this.price = price;


    // both of these 2 methods will get copied with all the objects will make 
    this.getDetails = function(){
        console.log(`Title: ${this.name}`)
    }
}


// All the objects we make will have this method but this method will store in the object and not copied for all the objects and will inherited only
Car.prototype.getDetailsPrice = function(){
    console.log(`Price: ${this.price}`)

}

let bmw = new Car("BMW","1cr");
console.log(bmw)
console.log(bmw.__proto__)
console.log(bmw.getDetailsPrice);


// Array Prototype
const Inputs = [1,2,3,3,4,5];
// arrays are prototype
console.log(Inputs.__proto__.__proto__)


// linking the object with another prototyoe.
const bicycle = {
    getDetails(name){
        console.log(`Your car is ${name}`);
    }
}

const bicycle1 = Object.create(bicycle);
console.log(bicycle1)
// only linking the prototype
console.log( bicycle1.__proto__)
bicycle1.getDetails("Audi");