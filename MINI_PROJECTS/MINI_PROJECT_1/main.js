let istatus = document.querySelector("h4");
let likeBtn = document.querySelector("#likeDislike");
let flag = true;


// toggling the button and changing the text
likeBtn.addEventListener("click", function () {
  if (flag === false) {
    istatus.textContent = "Do You Love Serenity";
    flag = true;
    likeBtn.textContent = "Like";
    likeBtn.style.backgroundColor = "black";
    likeBtn.style.color = "white";
    istatus.style.color = "red";
  } else {
    istatus.textContent = "Yes! I Love Serenity";
    flag = false;
    likeBtn.textContent = "Disike";
    likeBtn.style.backgroundColor = "darkgray";
    likeBtn.style.color = "black";
    istatus.style.color = "green";
  }
});
