"use strict";
import { gameHtml } from "./constants";
import initGame from "./constants";
const startBtnHtml = `<button class="startBtn">Start game</button>`;
const startBtn = document.querySelector(".startBtn");

// Selectors
const {
  gameOptions,
  app,
  playerScore,
  computerScore,
  modal,
  overlay,
  startNewBtn,
  winner,
} = initGame();
const maxScore = 3;

let playerResult = 0;
let computerResult = 0;

let gameFinished = false;

function game(e) {
  if (!gameFinished) {
    const playerChoice = e.target;
    playerChoice.style.backgroundColor = "lightblue";
    const randomChoice = Math.floor(Math.random() * gameOptions.length);
    const computerChoice = gameOptions[randomChoice];
    setTimeout(() => {
      computerChoice.style.backgroundColor = "salmon";
      if (playerChoice === rock && computerChoice === paper) {
        computerWins();
      } else if (playerChoice === rock && computerChoice === rock) {
        return;
      } else if (playerChoice === rock && computerChoice === scissors) {
        playerWins();
      } else if (playerChoice === paper && computerChoice === paper) {
        return;
      } else if (playerChoice === paper && computerChoice === rock) {
        playerWins();
      } else if (playerChoice === paper && computerChoice === scissors) {
        computerWins();
      } else if (playerChoice === scissors && computerChoice === rock) {
        computerWins();
      } else if (playerChoice === scissors && computerChoice === scissors) {
        return;
      } else if (playerChoice === scissors && computerChoice === paper) {
        playerWins();
      }
      if (playerResult === maxScore) {
        declareWinner(`Player`);
      } else if (computerResult === maxScore) {
        declareWinner(`Computer`);
      }
    }, 1000);
    setTimeout(() => {
      playerChoice.style.backgroundColor = "transparent";
      computerChoice.style.backgroundColor = "transparent";
    }, 2000);
  }

  function computerWins() {
    computerResult++;
    computerScore.textContent = computerResult;
  }

  function playerWins() {
    playerResult++;
    playerScore.textContent = playerResult;
  }
  function declareWinner(win) {
    setTimeout(() => {
      winner.textContent = `${win} won !`;
      modal.textContent = `${win} won !`;
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      gameFinished = true;
    }, 2000);
  }
  startNewBtn.addEventListener("click", startGame);
}

gameOptions.forEach((option) =>
  option.addEventListener("click", function () {
    console.log("1mfhafh;");
  })
);
// startBtn.addEventListener("click", startGame);
function counter() {
  let count = 0;
  return function () {
    count += 1;
    console.log(count);
  };
}
const count1 = counter()
count1()
count1()
count1()
count1()
const count2 = counter()
count2()