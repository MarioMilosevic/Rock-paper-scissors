// function addColor(){
//     this.style.backgroundColor = 'red'
// }
// gameOptions.forEach(option => option.addEventListener('click', addColor))

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

  function computerWins() {
    computerResult++;
    computerScore.textContent = computerResult;
  }
  
  function playerWins() {
    playerResult++;
    playerScore.textContent = playerResult;
  }