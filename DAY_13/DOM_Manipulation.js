console.log(document);
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.children);
console.log(document.body.nextElementSibling);

// Selectors
console.log(document.querySelector("h1"));  //selects the first h1 tag
console.log(document.querySelectorAll("h1"));  //selects all h1 tag
console.log(document.querySelector(".first")); //can select with the help of class
console.log(document.querySelector("#para")); //can select with the help of ids


// Specific query selector
console.log(document.getElementById("para"))
document.getElementById("para").style.color = "gray"

console.log(document.getElementsByClassName("first"))

// setattribute method
// set attribute is used to add new attributes in the element or can used to modify the vlaues of the element
let image11 = document.getElementById("image1")
image11.setAttribute("alt", "network issue")
image11.setAttribute("style", "color:'red'")
console.log(image11)




