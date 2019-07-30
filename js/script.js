let winner = 'User';
let turnNumber = 1;

function computerTurn() {
  const weapons = ['Rock', 'Paper', 'Scissors'];
  const choice = Math.floor((Math.random() * 3));

  return weapons[choice];
}

function playRound(playerSelection, computerSelection) {
  let output = '';

  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'Rock':
        output = 'Draw';
        winner = 'Draw';
        break;
      case 'Paper':
        output = 'You Lose! Paper beats Rock';
        winner = 'Computer';
        break;
      case 'Scissors':
        output = 'You Win! Rock beats Scissors';
        winner = 'User';
        break;
      default:
        break;
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'Rock':
        output = 'You Win! Paper beats Rock';
        winner = 'User';
        break;
      case 'Paper':
        output = 'Draw';
        winner = 'Draw';
        break;
      case 'Scissors':
        output = 'You Lose! Scissors beat Paper';
        winner = 'Computer';
        break;
      default:
        break;
    }
  } else if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'Rock':
        output = 'You Lose! Rock beats Scissors';
        winner = 'Computer';
        break;
      case 'Paper':
        output = 'You Win! Scissors beat Paper';
        winner = 'User';
        break;
      case 'Scissors':
        output = 'Draw';
        winner = 'Draw';
        break;
      default:
        break;
    }
  }

  return output;
}

function playerTurn() {
  const choice = document.getElementById('userChoice').value;
  return choice;
}

function game() {
  const playerChoice = playerTurn();
  const computerChoice = computerTurn();

  const data = {};
  data.turnNumber = turnNumber;
  data.user_choice = playerChoice;
  data.computer_choice = computerChoice;
  data.winner = winner;

  console.groupCollapsed(`Turn #${turnNumber}`);
  console.table(data);
  console.groupEnd();

  const result = playRound(playerChoice, computerChoice);
  document.getElementById('result').innerHTML = result;
  turnNumber += 1;
}
