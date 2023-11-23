const root = document.querySelector('.root')
root.innerHTML = `<header class="header">Rock,Paper,Scissors?</header>
<p class="rules">First to 5 wins !!!</p>
<div class="players">
  <div class="playerDiv">
    <div class="playerInfo">
        <h1>Player</h1>
      <h1>Score - 0</h1>
    </div>
  </div>
  <div class="computerDiv">
    <div class="computerInfo">
        <h1>0 - Score</h1>
      <h1>Computer</h1>
    </div>
  </div>
</div>
<div class="options">
  <img src="img/rock.png" alt="rock" id="rock" />
  <img src="img/paper.png" alt="paper" id="paper" />
  <img src="img/scissors.png" alt="scissors" id="scissors" />
</div>`