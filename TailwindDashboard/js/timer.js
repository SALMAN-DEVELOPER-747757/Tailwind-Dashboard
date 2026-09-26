let timerInterval = null;
let totalSeconds = 25 * 60;
let isRunning = false;

function setTimerMode(mode) {
  clearInterval(timerInterval);
  isRunning = false;
  const startBtn = document.getElementById('timer-start-btn');
  if (startBtn) startBtn.innerText = 'Start Session';

  const btnP = document.getElementById('mode-pomodoro');
  const btnS = document.getElementById('mode-short');
  const btnL = document.getElementById('mode-long');

  [btnP, btnS, btnL].forEach(b => {
    if (b) b.className = 'text-xs px-4 py-2 rounded-xl font-bold bg-slate-800 text-slate-400 hover:text-white';
  });

  if (mode === 'pomodoro') {
    totalSeconds = 25 * 60;
    if (btnP) btnP.className = 'text-xs px-4 py-2 rounded-xl font-bold bg-brand-600 text-white shadow-lg shadow-brand-600/30';
  } else if (mode === 'short') {
    totalSeconds = 5 * 60;
    if (btnS) btnS.className = 'text-xs px-4 py-2 rounded-xl font-bold bg-brand-600 text-white shadow-lg shadow-brand-600/30';
  } else if (mode === 'long') {
    totalSeconds = 15 * 60;
    if (btnL) btnL.className = 'text-xs px-4 py-2 rounded-xl font-bold bg-brand-600 text-white shadow-lg shadow-brand-600/30';
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = (totalSeconds % 60).toString().padStart(2, '0');
  const display = document.getElementById('timer-display');
  if (display) display.innerText = `${m}:${s}`;
}

function toggleTimer() {
  const btn = document.getElementById('timer-start-btn');
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    if (btn) btn.innerText = 'Resume';
  } else {
    isRunning = true;
    if (btn) btn.innerText = 'Pause';
    timerInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        isRunning = false;
        if (btn) btn.innerText = 'Start Session';
        alert('Focus session completed!');
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  const btn = document.getElementById('timer-start-btn');
  if (btn) btn.innerText = 'Start Session';
  totalSeconds = 25 * 60;
  updateTimerDisplay();
}