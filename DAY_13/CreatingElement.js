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

const first = document.getElementById("para");
console.log(first);
const element = first.innerHTML;
const element1 = first.textContent;
first.innerHTML = "<strong> Hello Moto </strong> <p> heeloo</p>" // the text will be overwitted
first.textContent = "Hii this is krishna" // the text is overwrited
console.log(element);
console.log(element1);


// using backtic
const ele = `
    <div>Element 1</div>
    <div>Element 2</div>
    <div>Element 3</div>
`
// console.log(document.getElementsById("second1"))
const id1 = document.getElementById("second1")
id1.innerHTML = ele;
// document.getElementsById("second1").innerHTML = ele;
