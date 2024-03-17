let elements = document.querySelectorAll(".elem");

elements.forEach((ele, i) => {
  // let elemImg = document.querySelector(ele.childNodes[3]);
  console.log(ele.childNodes[3]);

  ele.addEventListener("mouseenter", () => {
    ele.childNodes[3].style.opacity = 0.9;
  });
  ele.addEventListener("mouseleave", () => {
    ele.childNodes[3].style.opacity = 0;
  });
  ele.addEventListener("mousemove", (e) => {
    ele.childNodes[3].style.left = `${e.x}px`;
    ele.childNodes[3].style.top = `${e.y}px`;
  });
});
