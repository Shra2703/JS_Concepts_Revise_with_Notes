// creating element

const btn = document.createElement("button");
btn.textContent = "Submit it";
btn.className = "btn";
console.log(btn)

const division = document.querySelector('div');
// console.log(division)
division.appendChild(btn);


const para = document.createElement("p");
para.textContent = "Shraddha you are good girl";
document.querySelector('div').appendChild(para)

const div = document.createElement("div");
div.className = "divison";

document.querySelector("body").appendChild(div)