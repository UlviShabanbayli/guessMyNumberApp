'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
  }

  // when player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }

  // when guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 too high!' : '📉 too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// reset the game
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = '';
  document.querySelector('.guess').value = '';
});
