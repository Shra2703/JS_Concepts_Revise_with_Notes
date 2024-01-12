// Regular expression is used to search the pattern, validate and moify the text data
// ways to define the regular expression

// #1
let regex = new RegExp("is");

// #2
let regex2 = /software/g;

let text = "Finally, Shraddha you make proud of your parents and started working as a software engginer in google is is is";

console.log(regex.test(text)); //gives true or false whether the text is present or not

console.log(regex2.exec(text)); //gives the additional information about the text with the index;
console.log(text.search(regex)); //gives the index of the searched value

console.log(text.match(regex))

let modifiedText = text.replace(regex2, "frontend developer");

console.log(modifiedText);
