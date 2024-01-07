// can able to tranform function from a(p1,p2) to this a(p1)(p2);
// A technique to convert a function of multiple arguments to a function with single argument


function power(a){
    return function(b){
        return b ** a;
    }
}

const square = power(2);
console.log(square(4));
console.log(square(41));
console.log(square(43));

const cube = power(3);
console.log(cube(3));

