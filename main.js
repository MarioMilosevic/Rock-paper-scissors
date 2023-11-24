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
console.log(gameOptions);

let playerResult = 0;
let computerResult = 0;

// rock.addEventListener("click", function () {
//   rock.style.backgroundColor = "lightblue";
// });

// paper.addEventListener("click", function () {
//   paper.style.backgroundColor = "lightsalmon";
// });

function game(choice) {
  const playerChoice = choice;
  const randomChoice = Math.floor(Math.random() * gameOptions.length);
  const computerChoice = gameOptions[randomChoice];

  if (choice === rock && computerChoice === paper) {
    playerWins();
  } else if (choice === rock && computerChoice === rock) {
    return;
  } else if (choice === rock && computerChoice === paper) {
    computerWins();
  } else if (choice === paper && computerChoice === paper) {
    return;
  } else if (choice === paper && computerChoice === rock) {
    playerWins();
  } else if (choice === paper && computerChoice === scissors) {
    computerWins();
  } else if (choice === scissors && computerChoice === rock) {
    computerWins();
  } else if (choice === scissors && computerChoice === scissors) {
    return;
  } else if (choice === scissors && computerChoice === paper) {
    playerWins();
  }
}
game();

function computerWins() {
  computerResult++;
  computerScore.textContent = computerChoice;
}

function playerWins() {
  playerResult++;
  playerScore.textContent = playerResult;
}
