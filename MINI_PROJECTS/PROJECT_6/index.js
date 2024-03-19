const pbtm = document.querySelector("#pbtm");
const timer = document.querySelector("#timer");
const hit = document.querySelector("#hit");
const scoreValue = document.querySelector("#scoreValue");

let i = 60;
let score = 0;
let num;

// The function to make the bubble
function makeBubble() {
  let bubbleAdd = "";
  for (let i = 1; i <= 120; i++) {
    let num = Math.floor(Math.random() * 10);
    bubbleAdd += `<div class="bubble">${num}</div>`;
  }

  pbtm.innerHTML = bubbleAdd;
}

// Function to run the timer
function runTimer() {
  let timerInv = setInterval(() => {
    if (i >= 0) {
      timer.textContent = i;
      i--;
    } else {
      clearInterval(timerInv);
      pbtm.innerHTML = "<h1>Game Over</h1>";
    }
  }, 1000);
}


// function to change the value of hit funtion
function hitFun() {
  num = Math.floor(Math.random() * 10);
  hit.textContent = num;
}

// function to increase the score
function scoreIncrease() {
  score += 10;
  scoreValue.textContent = score;
}


// Function to calculate the results
function getResults() {
  pbtm.addEventListener("click", (e) => {
    let val = Number(e.target.textContent);
    console.log(val);
    if (num === val) {
      scoreIncrease();
      hitFun();
      makeBubble();
    } else {
      alert("OOPS!! Wrong Number clicked..");
      hitFun();
      makeBubble();
    }
  });
}


makeBubble();
runTimer();
hitFun();
getResults();
