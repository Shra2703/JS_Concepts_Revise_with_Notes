const emojiDetails = [
  { description: "sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];

let currentEmojiIndex = 0;
let score = 0;
let timerDuration = 30;
let timeCount = 0;
let flag = true;

const guessInput = document.getElementById("guess-input");
const timerEle = document.getElementById("timer");
const result = document.getElementById("result");
const scoreEle = document.getElementById("score");
const restartBtn = document.getElementById("restart-button");
const stopBtn = document.getElementById("stop-button");

function displayEmoji() {
  let descriptionEle = document.getElementById("description");

  descriptionEle.textContent = emojiDetails[currentEmojiIndex].emoji;
  timerEle.textContent = `Timer: ${timerDuration} sec`;
}

// function to check whether the input value is correct or not
function checkGuess() {
  let guess = guessInput.value.trim().toLowerCase();
  let correctAns = emojiDetails[currentEmojiIndex].description
    .trim()
    .toLowerCase();

  if (guess === correctAns) {
    result.textContent = "Correct!!!";
    result.style.color = "green";
    score++;
  } else {
    result.textContent = "Wrong!!!";
    result.style.color = "red";
  }

  scoreEle.textContent = `Score: ${score}`;
  guessInput.focus();
  setTimeout(() => {
    guessInput.value = "";
    nextEmoji();
  }, 1000);
}

// function for the next emoji
function nextEmoji() {
  setInterval(() => {
    result.textContent = "";
  }, 1000);
  currentEmojiIndex++;
  if (currentEmojiIndex === emojiDetails.length) currentEmojiIndex = 0;
  displayEmoji();
}

// adding event listerner for when the enter key is pressed then the answer will be shown
guessInput.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "Enter") checkGuess();
});

// we can directly add the event listener
document.addEventListener("DOMContentLoaded", () => {
  displayEmoji();
  startTimer(30);
});

// Starting the timer
function startTimer(timerDuration1) {
  timerDuration = timerDuration1;
  timerInterval = setInterval(() => {
    timerDuration--;
    timerEle.textContent = `Timer: ${timerDuration} sec`;
    if (timerDuration <= 0) {
      endGame();
    }
  }, 1000);
}

// Starting the timer
function endGame() {
  clearInterval(timerInterval);
  guessInput.disabled = true;
  // document.removeChild("guessInput")
  let descriptionEle = document.getElementById("description");
  descriptionEle.textContent = "Game Over!!!!";
  scoreEle.textContent = `Score: ${score}`;
}

// REstart button event listerner
restartBtn.addEventListener("click", () => {
  timerDuration = 30;
  currentEmojiIndex = 0;
  score = 0;
  scoreEle.textContent = `Score: ${score}`;
  displayEmoji();
});

// Stop button event listerner
stopBtn.addEventListener("click", () => {
  if (flag) {
    clearInterval(timerInterval);
    stopBtn.textContent = "Start Timer";
    console.log(flag);
    flag = false;
  } else {
    startTimer(timerDuration);
    timerEle.textContent = `Timer: ${timerDuration} sec`;
    stopBtn.textContent = "Stop Timer";
    console.log(flag);
    flag = true;
  }
});
