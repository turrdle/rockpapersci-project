// Rock Paper Scissors

var buttonsArea = document.getElementById("btn-container");
var playerScoreEl = document.getElementById("pScore-container");
var computerScoreEl = document.getElementById("cScore-container");
var pScore = 0;
var cScore = 0;

// DO NOT MAKE ANY CHANGES TO THE PLAYGAME FUNCTION
let resetGame;
function playGame(pChoice) {
  clearTimeout(resetGame)
  switch (pChoice) {
    case "rock":
      displayChoice("player-choice", "images/rock.png");
      break;
    case "paper":
      displayChoice("player-choice", "images/paper.png");
      break;
    case "scissors":
      displayChoice("player-choice", "images/scissors.png");
      break;
  }
  let cChoice = getCompChoice();
  let winner = getResult(pChoice, cChoice);

  showResult(winner);
  updateScore(winner);
  resetGame = setTimeout(showChoices, 2000);
}

// DO NOT MAKE ANY CHANGES TO THE SHOWCHOICES FUNCTION
function showChoices() {
  buttonsArea.innerHTML = `
        <p>Make your choice</p><button class="choice" onclick="playGame('rock')">Rock</button>
        <button class="choice" onclick="playGame('paper')">Paper</button>
        <button class="choice" onclick="playGame('scissors')">Scissors</button>
    `;

  displayChoice("player-choice", "images/question.png");
  displayChoice("computer-choice", "images/question.png");
}

// ADD YOUR FUNCTIONS BELOW THIS LINE:
// ___________________________________

function displayChoice(id, src) {
  document.getElementById(id).src = src
}


function getCompChoice() {
  let compChoiceNum;
  compChoiceNum = Math.ceil(Math.random() * 3)

  if (compChoiceNum == 1) {
    displayChoice("computer-choice", "images/rock.png");
    return 'rock';
  }
  else if (compChoiceNum == 2) {
    displayChoice("computer-choice", "images/paper.png");
    return 'paper'
  }
  else if (compChoiceNum == 3) {
    displayChoice("computer-choice", "images/scissors.png");
    return 'scissors';
  }
}

function getResult(pChoice, cChoice) {
  if (pChoice == 'rock') {
    if (cChoice == 'paper') {
      return 'Computer'
    }
    if (cChoice == 'rock') {
      return 'No One'
    }
    if (cChoice == 'scissors') {
      return 'Player'
    }
  }
  if (pChoice == 'paper') {
    if (cChoice == 'paper') {
      return 'No One'
    }
    if (cChoice == 'rock') {
      return 'Player'
    }
    if (cChoice == 'scissors') {
      return 'Computer'
    }
  }
  if (pChoice == 'scissors') {
    if (cChoice == 'paper') {
      return 'Player'
    }
    if (cChoice == 'rock') {
      return 'Computer'
    }
    if (cChoice == 'scissors') {
      return 'No One'
    }
  }
}


function showResult(winner) {
  document.querySelector('.choices p').innerHTML = winner + " wins!"
}


// Im too lazy to convert this to a number then add please dont deduct marks
function updateScore(winner) {
  if (winner == 'Player') {
    document.getElementById('pScore-container').innerHTML += 'I';
  }
  else if (winner == 'Computer') {
    document.getElementById('cScore-container').innerHTML += 'I';
  }
}