"use strict";

const root = document.querySelector(".root");
const startBtnHtml = `<button class="startBtn">Start game</button>`;
root.innerHTML = startBtnHtml;
const startBtn = document.querySelector(".startBtn");
let winner = "";
const gameHtml = `<div class="app">
  <header class="header">Rock, Paper, Scissors ?</header>
  <p class="rules">First to 3 wins !!!</p>
  <div class="players">
  <div class="playerDiv">
  <div class="playerInfo">
  <h1>Player</h1>
  <h1>Score - <span id="playerScore">0</span></h1>
  </div>
  </div>
  <div class="computerDiv">
  <div class="computerInfo">
  <h1><span id="computerScore">0</span> - Score</h1>
  <h1>Computer</h1>
  </div>
  </div>
  </div>
  <div class="modal hidden">
    <h1>${winner}</h1>
  </div>
  <div class="overlay hidden">
    <button class="startNewBtn">Start new game</button>
  </div>
  <div class="options">
  <img src="/rock.png" alt="rock" id="rock" />
  <img src="/paper.png" alt="paper" id="paper" />
  <img src="/scissors.png" alt="scissors" id="scissors" />
  </div>
  </div>`;

function startGame() {
  root.innerHTML = gameHtml;
  const app = document.querySelector(".app");
  const playerScore = document.querySelector("#playerScore");
  const computerScore = document.querySelector("#computerScore");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");
  const startNewBtn = document.querySelector(".startNewBtn");
  const gameOptions = [rock, paper, scissors];
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
  }

  gameOptions.forEach((option) => option.addEventListener("click", game));

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
      modal.textContent = `${win} won !`;
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      gameFinished = true;
    }, 2000);
  }
  startNewBtn.addEventListener("click", startGame);
}
startBtn.addEventListener("click", startGame);

