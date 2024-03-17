// import arr from "./data"
import arr from "./data.js";

let clutter = "";
let storiyan = document.querySelector("#storiyan");
arr.forEach((ele, i) => {
  clutter += `<div class="story">
    <img id = ${i} src=${ele.img} alt="">
  </div> `;
});

storiyan.innerHTML = clutter;
console.log(storiyan);
storiyan.addEventListener("click", function (details) {
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[details.target.id].story
  })
`;

  setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});
