// onjects in js
// how to access them first

const obj = {
  name: "Shraddha",
  age: 23,
  100: "hundread",
  show: function () {
    console.log("Show me the function");
  },
};

// adding the elements
obj.access = 21

console.log(obj.name);
console.log(obj["name"]);
console.log(obj[100]);
obj.show();
console.log(obj.access);

