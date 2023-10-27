// rest operator
// makes the array of the element, used with the last parameter in the array
// part of ES6

arr = [34, 5, 6, 78, 89];
function addEle(arr, ...newele) {
  for (let ele of newele) arr.push(ele);
  return arr;
}

console.log("rest", addEle(arr, 2, 3, 4, 5));

// spread operator
// #1 used to make the shallow copy of the element so when we make the changes in the one the changes will not reflect in the another one
// part of ES6

arr1 = [1, 2, 3, 4];
copyed = [...arr1];
arr1.push(6, 9);
console.log("Spread operator", arr1);
console.log("Spread operator coped", copyed);

// #2 used to conctenate the 2 array
arr2 = [1, 2, 3];
arr3 = [5, 6, 7];
arr4 = [7,8]
merged = [...arr2, ...arr3, ...arr4];
console.log("Concatenate array",merged)

