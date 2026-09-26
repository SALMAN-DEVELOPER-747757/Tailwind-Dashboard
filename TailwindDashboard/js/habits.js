function toggleHabit(btn) {
  if (btn.innerText.includes('Completed')) {
    btn.innerText = 'Mark Complete';
    btn.className = 'habit-btn px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition';
  } else {
    btn.innerText = '✓ Completed Today';
    btn.className = 'habit-btn px-3.5 py-2 rounded-xl text-xs font-bold bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/30 transition hover:bg-accent-emerald/20';
  }
}

function addHabitPrompt() {
  const habitName = prompt('Enter habit name (e.g., Read System Design Chapter):');
  if (!habitName) return;

  const container = document.getElementById('habits-list');
  const newHabit = document.createElement('div');
  newHabit.className = 'bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl flex justify-between items-center transition shadow-md';
  
  newHabit.innerHTML = `
    <div>
      <div class="flex items-center gap-2">
        <h3 class="font-semibold text-white text-sm">${habitName}</h3>
        <span class="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-md font-mono border border-amber-500/20">🔥 1 Day Streak</span>
      </div>
      <p class="text-xs text-slate-400 mt-1">Daily Routine • CS Discipline</p>
    </div>
    <button onclick="toggleHabit(this)" class="habit-btn px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">
      Mark Complete
    </button>
  `;

  container.prepend(newHabit);
}