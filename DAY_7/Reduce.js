//reduce funtion
// reduce(reduFnc,initial value)
// reduFnc(accumulator, currEle, index, array);
// accumulator: hold the result, initially holds the intial value if not hold the currEle with index 0
// Optional parameter: index, array, initial value

const inputs = [1, 2, 3, 4, 5];

const result = inputs.reduce((total, currEle) => {
  return (total += currEle);
}, 0);
console.log(result);
