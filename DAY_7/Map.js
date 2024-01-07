// manipulate the array makes the copy of it
// index and array 

const index = [1,2,3,4,5];

const squareArray = index.map((currEle, index, arr) => currEle * currEle);
console.log(squareArray)

const cubeArray = index.map(function( currEle){
    return currEle * currEle;
})
console.log(cubeArray)