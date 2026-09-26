function addTask() {
  const input = document.getElementById('new-task-input');
  const categorySelect = document.getElementById('task-category');
  const text = input ? input.value.trim() : '';
  const category = categorySelect ? categorySelect.value : 'Backend';

  if (!text) return;

  const container = document.getElementById('task-list');
  const newTask = document.createElement('div');
  newTask.className = 'bg-slate-900 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between transition hover:border-slate-700';
  
  newTask.innerHTML = `
    <div class="flex items-center gap-3">
      <input type="checkbox" onchange="toggleTask(this)" class="h-4 w-4 rounded border-slate-700 text-brand-600 focus:ring-brand-500 bg-slate-950" />
      <div>
        <span class="text-xs font-medium text-slate-200">${text}</span>
        <p class="text-[10px] font-mono text-slate-500">Due Today</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-[10px] bg-brand-500/10 text-brand-400 border border-brand-500/20 px-2 py-0.5 rounded font-mono">${category}</span>
      <span class="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded font-mono">MEDIUM</span>
    </div>
  `;
  
  container.prepend(newTask);
  input.value = '';
}

function toggleTask(checkbox) {
  const label = checkbox.nextElementSibling.querySelector('span');
  if (checkbox.checked) {
    label.classList.add('line-through', 'opacity-50');
  } else {
    label.classList.remove('line-through', 'opacity-50');
  }
}