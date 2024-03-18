const pbtm = document.querySelector("#pbtm");
const timer = document.querySelector("#timer");
const hit = document.querySelector("#hit");

let i = 60;
let hitNum = 60;

// The function to make the bubble
function makeBubble() {
  let bubbleAdd = "";

  for (let i = 1; i <= 120; i++) {
    let num = Math.floor(Math.random() * 10);
    bubbleAdd += `<div class="bubble">${num}</div>`;
  }

  pbtm.innerHTML = bubbleAdd;
}

function runTimer() {
  if (i < 0) return;
  setInterval(() => {
    timer.textContent = i;
    i--;
  }, 1000);
}

function hitFun() {
  if (hitNum < 0) return;
  setInterval(() => {
    let num = Math.floor(Math.random() * 10);
    hit.textContent = num;
    hit.textContent = num;
    hitNum--;
  }, 1000);
}

makeBubble();
runTimer();
hitFun();
