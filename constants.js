export const gameHtml = `<div class="app">
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
    <h1 class="winner"></h1>
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
const root = document.querySelector(".root");

function initGame() {
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
  const winner = document.querySelector(".winner");
  const gameOptions = [rock, paper, scissors];

  return {
    gameOptions,
    app,
    playerScore,
    computerScore,
    modal,
    overlay,
    startNewBtn,
    winner,
  };
}

export default initGame;
