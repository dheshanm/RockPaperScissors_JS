let winner = 'User';

// Chooses Random weapon for AI
function computerTurn() {
  const weapons = ['rock', 'paper', 'scissors'];
  const choice = Math.floor((Math.random() * 3));

  return weapons[choice];
}

// Game Logic
function playRound(playerSelection, computerSelection) {
  let output = '';

  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'rock':
        output = 'Draw';
        winner = 'Draw';
        break;
      case 'paper':
        output = 'You Lose! Paper beats Rock';
        winner = 'Computer';
        break;
      case 'scissors':
        output = 'You Win! Rock beats Scissors';
        winner = 'User';
        break;
      default:
        break;
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        output = 'You Win! Paper beats Rock';
        winner = 'User';
        break;
      case 'paper':
        output = 'Draw';
        winner = 'Draw';
        break;
      case 'scissors':
        output = 'You Lose! Scissors beat Paper';
        winner = 'Computer';
        break;
      default:
        break;
    }
  } else if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'rock':
        output = 'You Lose! Rock beats Scissors';
        winner = 'Computer';
        break;
      case 'paper':
        output = 'You Win! Scissors beat Paper';
        winner = 'User';
        break;
      case 'scissors':
        output = 'Draw';
        winner = 'Draw';
        break;
      default:
        break;
    }
  }

  return output;
}

let aiScore = 0;
let userScore = 0;

const user = document.querySelectorAll('.user > *');
const score = document.querySelector('#score');
const comment = document.querySelector('#comment');
const btns = document.querySelectorAll('.center > *');

user.forEach(btn => btn.addEventListener('click', (e) => {
  const aiBtn = document.querySelector(`.ai > .${computerTurn()}`);

  const decision = playRound(e.target.className, aiBtn.className);

  switch (winner) {
    case 'User':
      userScore += 1;
      break;
    case 'Computer':
      aiScore += 1;
      break;
    default:
      break;
  }

  comment.innerHTML = decision;
  score.innerHTML = `${userScore} : ${aiScore}`;

  e.target.classList.add('selected-user');
  aiBtn.classList.add('selected-ai');
}));

btns.forEach(btn => btn.addEventListener('transitionend', (e) => {
  e.target.classList.remove('selected-user');
  e.target.classList.remove('selected-ai');
}));

function reset() {
  userScore = 0;
  aiScore = 0;

  // score.innerHTML = `${userScore} : ${aiScore}`;
  score.innerHTML = 'RESET';
  comment.innerHTML = '';
  comment.innerHTML = 'Right-click resets the Scorecard.';
  setTimeout(() => {
    score.innerHTML = `${userScore} : ${aiScore}`;
    // comment.innerHTML = '';
  }, 500);
}

// Disable Context menu and redirect it to reset
const mainContainer = document.querySelector('#container');
mainContainer.addEventListener('contextmenu', reset);

document.oncontextmenu = function disableContextMenu() {
  return false;
};
