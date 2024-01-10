const fruits = [
    "Apples",
    "bananas",
    "mangoes",
    "lichi",
    "chiku"
]

// array destructing
let [a,b] = fruits;
console.log(a,b)

// by skipping some of the values
let [a1,,,l] = fruits
console.log(l)

// destruct only 2 and rest of them in the array
let [a2,b1,...fruit] = fruits;
console.log(fruits)

// in array destruct only few of them
let[...[,,ma,,ch]] = fruits;
console.log(ma , ch)