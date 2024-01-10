const car = {
    name:"car",
    price:23000,
    getDetails(company, seats){
        console.log(`
            This is the ${this.name} of price ${this.price} of ${company} company having ${seats} seats.
        `)
    }
}

car.getDetails("Star",9);

const bus = {
    name:"Audi",
    price: 560000
}

// with the help of call and apply we can use the getdetails method and pointed to bus means that this og getdetails will point to the object which is mentioned.
car.getDetails.call(bus,"Gold",90);
// in apply() we give array and all the other things are same
car.getDetails.apply(bus,["Diamond",34])
// in bind we can assign to the variable and reuse it again and again
const vehicle = car.getDetails.bind(bus);
vehicle("Bronze",89);
