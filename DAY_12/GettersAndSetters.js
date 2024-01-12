class Circle{
    constructor(radius){
        this.radius = radius;
    }

    // this is the function which we can't use like the property but if we want to use function as a property then we use it as a getter
    getDiameter(){
        console.log(this.radius * 2);
    }

    // to get the diameter 
    get diameter(){
        return this.radius * 2;
    }

    // to set the diameter
    set diameter(newDiameter){
        this.radius = newDiameter / 2;
    }
}

const circle = new Circle(23);
console.log(circle.diameter);
// to set the value of the diameter
circle.diameter = 50;
console.log(circle.diameter);

