// 04-background.js

const body = document.body;
const input = document.querySelector('input');
const startButton = document.getElementById('button');

function getRandomColor() {
  const colors = [
    '#FF5733',
    '#33FF57',
    '#5733FF',
    '#FF33A6',
    '#33A6FF',
    '#FFA633',
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

startButton.addEventListener('click', () => {
  const intervalInSeconds = Number(input.value);

  if (Number.isNaN(intervalInSeconds) || intervalInSeconds <= 0) {
    window.alert('Please enter a valid number of seconds.');
    return;
  }

  setInterval(() => {
    body.style.backgroundColor = getRandomColor();
  }, intervalInSeconds * 1000);
});
