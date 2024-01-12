// a complete deep copy of the function is not possible but we can do this with the help of JSON
// But in JSON funcions and expressions are not allowed so that's why if we add functions and expressions then JSON will ignore it

let obj = {
    "username": "shraddha",
    "age": 23,
    subjects : [23,45,56]
}

let obj1 = JSON.parse((JSON.stringify(obj)));

obj1.subjects[0] = 89;
console.log(obj1);
console.log(obj);
