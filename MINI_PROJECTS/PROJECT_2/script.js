let con = document.querySelector("#container");
let love = document.querySelector("i");
con.addEventListener("dblclick", () => {
  love.style.transform = "translate(-19px, -72px) scale(2)";
  love.style.opacity = 0.8;
  setTimeout(() => {
    love.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    love.style.transform = "translate(-19px, -72px) scale(0)";
  }, 2000);
});
