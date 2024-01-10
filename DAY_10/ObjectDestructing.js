// Unpack all the variable inside the object
// destructing in arrays

const obj = {
    a: 1,
    b: 2,
    c: [1,2,3,4],
    d : {"a":1}
}

// binding pattern #1
const {a,c} = obj; // names should be exactly same ex. const a = obj.a
console.log(a)
console.log(c)

// #2
// where we are renaming the variable
const {d : d1} = obj;
console.log(d1)

// assignment patter #2
let b;
({b:b} = obj);
console.log(b)
