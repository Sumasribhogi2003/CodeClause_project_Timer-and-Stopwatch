let startTime;
let interval;
let elapsed = 0;

function startStopwatch() {
  startTime = Date.now() - elapsed;
  interval = setInterval(updateStopwatch, 10);
}

function stopStopwatch() {
  clearInterval(interval);
  elapsed = Date.now() - startTime;
}

function resetStopwatch() {
  clearInterval(interval);
  elapsed = 0;
  displayStopwatch();
}

function updateStopwatch() {
  elapsed = Date.now() - startTime;
  displayStopwatch();
}

function displayStopwatch() {
  let hours = Math.floor(elapsed / 3600000);
  let minutes = Math.floor((elapsed - (hours * 3600000)) / 60000);
  let seconds = Math.floor((elapsed - (hours * 3600000) - (minutes * 60000)) / 1000);
  let milliseconds = elapsed % 1000;

  document.querySelector('.display').innerHTML = 
    ('0' + hours).slice(-2) + ':' +
    ('0' + minutes).slice(-2) + ':' +
    ('0' + seconds).slice(-2) + '.' +
    ('00' + milliseconds).slice(-3);
}
