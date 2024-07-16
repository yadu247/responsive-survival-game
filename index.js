function startGame() {
  document.getElementById('playing-area-id').style.display = 'block';
}

function stopGame() {
  document.getElementById('playing-area-id').style.display = 'none';
  document.getElementById('start-box-id').style.display = 'flex';
}

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
