const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];

let currentEmojiIndex = 0;
let score = 0;


const guessInput = document.getElementById("guess-input");
const result = document.getElementById("result");
const scoreEle = document.getElementById("score");


function displayEmoji() {
  let descriptionEle = document.getElementById("description");

  descriptionEle.textContent = emojiDetails[currentEmojiIndex].emoji;
}

// function to check whether the input value is correct or not
function checkGuess() {
  let guess = guessInput.value.trim().toLowerCase();
  let correctAns = emojiDetails[currentEmojiIndex].description
    .trim()
    .toLowerCase();

  if (guess === correctAns) {
    result.textContent = "Correct!!!";
    score++;
  } else {
    result.textContent = "Wrong!!!";
  }

  scoreEle.textContent = `Score: ${score}`;
  guessInput.value = "";
  guessInput.focus();
  nextEmoji();
}


// function for the next emoji
function nextEmoji() {
  currentEmojiIndex++;
  if (currentEmojiIndex === emojiDetails.length) currentEmojiIndex = 0;
  displayEmoji();
}

// adding event listerner for when the enter key is pressed then the answer will be shown
guessInput.addEventListener("keydown", (event) => {
    console.log(event.key)
  if (event.key === "Enter") checkGuess();
});


// we can directly add the event listener
document.addEventListener('DOMContentLoaded', () => {
    displayEmoji();
})
