"use strict";
const root = document.querySelector(".root");
const startBtn = `<button class="startBtn">Start the game</button>`;
const gameHtml = `<div class="app">
 <header class="header">Rock, Paper, Scissors ?</header>
<p class="rules">First to 5 wins !!!</p>
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
<div class="options">
  <img src="img/rock.png" alt="rock" id="rock" />
  <img src="img/paper.png" alt="paper" id="paper" />
  <img src="img/scissors.png" alt="scissors" id="scissors" />
</div>
</div>`;
root.innerHTML = gameHtml;
const app = document.querySelector(".app");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const gameOptions = [rock, paper, scissors];

let playerResult = 0;
let computerResult = 0;

// rock.addEventListener("click", function () {
//   rock.style.backgroundColor = "lightblue";
// });

// paper.addEventListener("click", function () {
//   paper.style.backgroundColor = "lightsalmon";
// });

function game(e) {
  const playerChoice = e.target;
  playerChoice.style.backgroundColor = "lightblue";
  const randomChoice = Math.floor(Math.random() * gameOptions.length);
  const computerChoice = gameOptions[randomChoice];
  setTimeout(() => {
    console.log(computerChoice);
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
    console.log(playerResult);
    console.log(computerResult);
  }, 1000);
  setTimeout(() => {
    playerChoice.style.backgroundColor = "transparent";
    computerChoice.style.backgroundColor = "transparent";
  }, 2500);
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
