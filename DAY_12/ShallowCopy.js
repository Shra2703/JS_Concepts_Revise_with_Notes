// when we copy the Array and objects, only the refrence is copied if we make changes in the one then the changes will reflect in the copied one also.

// #array
// when we copied the array a to b changes will reflect in both of them
let a = [1,2,3,4];
let b = a;
console.log(a);
console.log(b);

a[0] = 23;
console.log(a);
console.log(b);

// shallow copy of array
let a1 = [1,2,3,4];
let b1 = [...a1];
console.log(a1);
console.log(b1);

a1[0] = 23;
console.log(a1);
console.log(b1);

//Object.assign
let c1 = Object.assign([], a1);
c1[0] = 209;
console.log(a1);
console.log(c1);

// #objects
let obj = {
    "username": "shraddha",
    "age": 23,
    subjects : [23,45,56]
}

// in shallow copy only the upper layer is copied
// inshallow copy object inside the object only refrences is passes not the shallow copy can happen

let obj1 = {...obj};
obj1.subjects[0] = 8900;

console.log(obj1);
console.log(obj);

// not happen in array too only refrence passes in the variable
hello =[1,2,3,4,[6,7]];
trio = [...hello];

hello[4][0] = 567;
console.log(hello);
console.log(trio);