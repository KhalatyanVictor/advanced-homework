let currentTime = document.getElementById("currentTime");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let timer;
let seconds = 0;

startBtn.addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      currentTime.textContent = seconds;
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  seconds = 0;
  currentTime.textContent = seconds;
});
