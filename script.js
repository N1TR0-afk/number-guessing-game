'use strict';
let random,
  score,
  highscore = 0;
const scoreCounter = document.getElementsByClassName('score')[0];
const highscoreCounter = document.getElementsByClassName('highscore')[0];
const message = document.getElementsByClassName('message')[0];
const inputNum = document.getElementsByClassName('guess')[0];
const showNum = document.getElementsByClassName('number')[0];
const ButtonS = document.getElementsByClassName('check')[0];
const RestS = document.getElementsByClassName('again')[0];

function initGame(params) {
  random = Math.floor(Math.random() * 20 + 1);
  score = 20;
  console.log(random);
}
initGame();

function scoreMinus(params) {
  scoreCounter.textContent = --score;
}

ButtonS.addEventListener('click', () => {
  let guess = Number(inputNum.value);
  if (!guess) {
    message.textContent = '⛔ Not Number!';
  } else if (guess == random) {
    message.textContent = '🎉 Correct Guess! 🎊';
    document.querySelectorAll('body')[0].style.backgroundColor = '#60b347';
    showNum.textContent = random;
    ButtonS.disabled = true;
    RestS.disabled = false;
    if (highscore < score) {
      highscore = score;
      highscoreCounter.textContent = highscore;
    }
  } else if (guess < random) {
    message.textContent = '📉 Too Low!';
    scoreMinus();
  } else if (guess > random) {
    message.textContent = '📈 Too High!';
    scoreMinus();
  }
});

RestS.addEventListener('click', () => {
  initGame();
  scoreCounter.textContent = score;
  message.textContent = 'Start guessing...';
  showNum.textContent = '?';
  ButtonS.disabled = false;
  inputNum.value = null;
  document.querySelectorAll('body')[0].style.backgroundColor = '#222';
  RestS.disabled = true;
});
