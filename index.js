let trackPosition;
let trackScore;
function startGame() {
  document.getElementById('start-box-id').style.display = 'none';
  document.getElementById('playing-area-id').style.display = 'block';
  trackPosition = setInterval(upadatePosition, 100);
  trackScore = setInterval(updateScore, 100);
}

let score = 0;
let currentScore = 0;
function stopGame() {
  document.getElementById('playing-area-id').style.display = 'none';
  document.getElementById('restart-box-id').style.display = 'flex';

  clearInterval(trackPosition);
  currentScore = 'Current Score : ' + score;
  document.getElementById('current-score-id').textContent = currentScore;
  clearInterval(trackScore);
  score = 0;
}

function updateScore() {
  score += 1;
  document.getElementById('score-id').textContent = score;
}

//declaring all variables to track position of elements
let characterTop;
let characterRight;
let characterBottom;
let characterLeft;

let obstacleHorizontal1Top;
let obstacleHorizontal1Right;
let obstacleHorizontal1Bottom;
let obstacleHorizontal1Left;

let obstacleHorizontal2Top;
let obstacleHorizontal2Right;
let obstacleHorizontal2Bottom;
let obstacleHorizontal2Left;

let obstacleHorizontal3Top;
let obstacleHorizontal3Right;
let obstacleHorizontal3Bottom;
let obstacleHorizontal3Left;

let obstacleVertical1Top;
let obstacleVertical1Right;
let obstacleVertical1Bottom;
let obstacleVertical1Left;

let obstacleVertical2Top;
let obstacleVertical2Right;
let obstacleVertical2Bottom;
let obstacleVertical2Left;

let obstacleVertical3Top;
let obstacleVertical3Right;
let obstacleVertical3Bottom;
let obstacleVertical3Left;

let obstacleVertical4Top;
let obstacleVertical4Right;
let obstacleVertical4Bottom;
let obstacleVertical4Left;

//this function updates position of each elements and check for collision of character
function upadatePosition() {
  let obstacleHorizontal1 = document
    .getElementById('obstacle-horizontal-1-id')
    .getBoundingClientRect();
  obstacleHorizontal1Top = obstacleHorizontal1.top;
  obstacleHorizontal1Right = obstacleHorizontal1.right;
  obstacleHorizontal1Bottom = obstacleHorizontal1.bottom;
  obstacleHorizontal1Left = obstacleHorizontal1.left;

  let obstacleHorizontal2 = document
    .getElementById('obstacle-horizontal-2-id')
    .getBoundingClientRect();
  obstacleHorizontal2Top = obstacleHorizontal2.top;
  obstacleHorizontal2Right = obstacleHorizontal2.right;
  obstacleHorizontal2Bottom = obstacleHorizontal2.bottom;
  obstacleHorizontal2Left = obstacleHorizontal2.left;

  let obstacleHorizontal3 = document
    .getElementById('obstacle-horizontal-3-id')
    .getBoundingClientRect();
  obstacleHorizontal3Top = obstacleHorizontal3.top;
  obstacleHorizontal3Right = obstacleHorizontal3.right;
  obstacleHorizontal3Bottom = obstacleHorizontal3.bottom;
  obstacleHorizontal3Left = obstacleHorizontal3.left;

  let obstacleVertical1 = document
    .getElementById('obstacle-vertical-1-id')
    .getBoundingClientRect();
  obstacleVertical1Top = obstacleVertical1.top;
  obstacleVertical1Right = obstacleVertical1.right;
  obstacleVertical1Bottom = obstacleVertical1.bottom;
  obstacleVertical1Left = obstacleVertical1.left;

  let obstacleVertical2 = document
    .getElementById('obstacle-vertical-2-id')
    .getBoundingClientRect();
  obstacleVertical2Top = obstacleVertical2.top;
  obstacleVertical2Right = obstacleVertical2.right;
  obstacleVertical2Bottom = obstacleVertical2.bottom;
  obstacleVertical2Left = obstacleVertical2.left;

  let obstacleVertical3 = document
    .getElementById('obstacle-vertical-3-id')
    .getBoundingClientRect();
  obstacleVertical3Top = obstacleVertical3.top;
  obstacleVertical3Right = obstacleVertical3.right;
  obstacleVertical3Bottom = obstacleVertical3.bottom;
  obstacleVertical3Left = obstacleVertical3.left;

  let obstacleVertical4 = document
    .getElementById('obstacle-vertical-4-id')
    .getBoundingClientRect();
  obstacleVertical4Top = obstacleVertical4.top;
  obstacleVertical4Right = obstacleVertical4.right;
  obstacleVertical4Bottom = obstacleVertical4.bottom;
  obstacleVertical4Left = obstacleVertical4.left;

  let character = document
    .getElementById('character-id')
    .getBoundingClientRect();
  characterTop = character.top;
  characterRight = character.right;
  characterBottom = character.bottom;
  characterLeft = character.left;

  //collision check
  if (
    !(
      characterRight < obstacleHorizontal1Right ||
      characterLeft > obstacleHorizontal1Left ||
      characterBottom < obstacleHorizontal1Bottom ||
      characterTop > obstacleHorizontal1Top
    )
  ) {
    stopGame();
  } else if (
    !(
      characterRight < obstacleHorizontal2Right ||
      characterLeft > obstacleHorizontal2Left ||
      characterBottom < obstacleHorizontal2Bottom ||
      characterTop > obstacleHorizontal2Top
    )
  ) {
    stopGame();
  } else if (
    !(
      characterRight < obstacleHorizontal3Right ||
      characterLeft > obstacleHorizontal3Left ||
      characterBottom < obstacleHorizontal3Bottom ||
      characterTop > obstacleHorizontal3Top
    )
  ) {
    stopGame();
  } else if (
    !(
      characterRight < obstacleVertical1Right ||
      characterLeft > obstacleVertical1Left ||
      characterBottom < obstacleVertical1Bottom ||
      characterTop > obstacleVertical1Top
    )
  ) {
    stopGame();
  } else if (
    !(
      characterRight < obstacleVertical2Right ||
      characterLeft > obstacleVertical2Left ||
      characterBottom < obstacleVertical2Bottom ||
      characterTop > obstacleVertical2Top
    )
  ) {
    stopGame();
  } else if (
    !(
      characterRight < obstacleVertical3Right ||
      characterLeft > obstacleVertical3Left ||
      characterBottom < obstacleVertical3Bottom ||
      characterTop > obstacleVertical3Top
    )
  ) {
    stopGame();
  } else if (
    !(
      characterRight < obstacleVertical4Right ||
      characterLeft > obstacleVertical4Left ||
      characterBottom < obstacleVertical4Bottom ||
      characterTop > obstacleVertical4Top
    )
  ) {
    stopGame();
  }
  //game over when touching border
  // else if (
  //   characterLeft <= 5 ||
  //   characterRight >= 1500 ||
  //   characterBottom >= 1200 ||
  //   characterTop <= 5
  // ) {
  //   document.getElementById('character-id').style.left = '700px';
  //   document.getElementById('character-id').style.top = '700px';
  //   stopGame();
  // }
}

//this makes the character move when the button is clicked
let displacement = 0;
let jumpingHeight = 0;

function moveRight() {
  displacement += 50;
  document.getElementById(
    'character-id'
  ).style.transform = `translateX(${displacement}px) translateY(${jumpingHeight}px`;
  document.getElementById('character-id').style.transition = ' .1s';
}

function moveLeft() {
  displacement -= 50;
  document.getElementById(
    'character-id'
  ).style.transform = `translateX(${displacement}px) translateY(${jumpingHeight}px`;
  document.getElementById('character-id').style.transition = ' .1s';
}

function moveUp() {
  jumpingHeight -= 50;
  document.getElementById(
    'character-id'
  ).style.transform = `translateY(${jumpingHeight}px) translateX(${displacement}px)`;
  document.getElementById('character-id').style.transition = ' .1s';
}

function moveDown() {
  jumpingHeight += 50;
  document.getElementById(
    'character-id'
  ).style.transform = `translateY(${jumpingHeight}px) translateX(${displacement}px)`;
  document.getElementById('character-id').style.transition = ' .1s';
}

//integrated the in-screen button with keyboard buttons
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    moveRight();
  } else if (event.key === 'ArrowLeft') {
    moveLeft();
  } else if (event.key === 'ArrowUp') {
    moveUp();
  } else if (event.key === 'ArrowDown') {
    moveDown();
  }
});
document.getElementById('right-button').addEventListener('click', function () {
  moveRight();
});
document.getElementById('left-button').addEventListener('click', function () {
  moveLeft();
});
document.getElementById('up-button').addEventListener('click', function () {
  moveUp();
});
document.getElementById('down-button').addEventListener('click', function () {
  moveDown();
});
