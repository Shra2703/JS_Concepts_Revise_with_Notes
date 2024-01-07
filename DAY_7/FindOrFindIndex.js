// find() function returns the first instance in the array, if not present return undefined
// findIndex() function return the first instance index of the array, if not present return -1

const inputs = [1,2,5,3,8,90,4,5,34]

const find1 = inputs.find((num) => num == 3) //output: 3 
const find2 = inputs.find((num) => num >= 3) //output: 5 
const find3 = inputs.find((num) => num >= 30) //output: undefined


const findIndex1 = inputs.findIndex((num) => num >= 30) //output: -1
const findIndex2 = inputs.findIndex((num) => num == 8) //output: 4