// Tab Switching System with Animated Transitions
function switchTab(tabId) {
  // Hide all sections
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  
  // Show target section
  const target = document.getElementById(`tab-${tabId}`);
  if (target) {
    target.classList.remove('hidden');
    
    // Trigger Chart Bar Animations if opening analytics
    if (tabId === 'analytics') {
      animateChartBars();
    }
  }

  // Reset Nav Styles
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.className = 'nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200';
  });

  // Highlight Active Button
  const activeBtn = document.getElementById(`nav-${tabId}`);
  if (activeBtn) {
    activeBtn.className = 'nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 bg-gradient-to-r from-brand-600/30 via-brand-500/10 to-transparent text-brand-600 dark:text-brand-400 border border-brand-500/30 shadow-md shadow-brand-500/10';
  }

  // Dynamic Header Text
  const titles = {
    dashboard: ['Dashboard Overview', 'Welcome back, Salman. Real-time engineering metrics and active sprint status.'],
    habits: ['Habits & Routines', 'Build unbreakable consistency with active daily streak tracking.'],
    planner: ['Sprint Task Planner', 'Organize daily work items, track deadlines, and conquer priorities.'],
    timer: ['Deep Focus Timer', 'Boost deep work sessions with the Pomodoro technique.'],
    analytics: ['Dev Insights & Analytics', 'Analyze weekly focus hours, habit completion rates, and performance trends.'],
    settings: ['Workspace Settings', 'Customize your workspace theme, system preferences, and profiles.']
  };

  const titleEl = document.getElementById('page-title');
  const subEl = document.getElementById('page-subtitle');
  if (titleEl && titles[tabId]) {
    titleEl.innerText = titles[tabId][0];
    if (subEl) subEl.innerText = titles[tabId][1];
  }
}

// Theme Switcher
function toggleDarkMode() {
  const html = document.documentElement;
  const icon = document.getElementById('theme-icon');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    if (icon) icon.innerText = '🌙';
  } else {
    html.classList.add('dark');
    if (icon) icon.innerText = '☀️';
  }
}

// ANIMATION 1: Animated Number Counters
function animateCounters() {
  document.querySelectorAll('.counter').forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const isDecimal = counter.getAttribute('data-decimal') === 'true';
    let count = 0;
    const speed = target / 40;

    const updateCount = () => {
      count += speed;
      if (count < target) {
        counter.innerText = (isDecimal ? count.toFixed(1) : Math.ceil(count)) + suffix;
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = (isDecimal ? target.toFixed(1) : target) + suffix;
      }
    };
    updateCount();
  });
}

// ANIMATION 2: Interactive Chart Bar Grow
function animateChartBars() {
  document.querySelectorAll('.chart-bar').forEach((bar, index) => {
    bar.style.height = '0%';
    setTimeout(() => {
      const targetHeight = bar.getAttribute('data-height');
      bar.style.height = targetHeight;
    }, index * 100);
  });
}

// ANIMATION 3: 3D Mouse Tilt Effect for Cards
function init3DTilt() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(1000px) rotateX(${-y / 25}deg) rotateY(${x / 25}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// ANIMATION 4: Ambient Floating Particle Background Canvas
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = canvas.parentElement.clientWidth;
  let height = canvas.height = canvas.parentElement.clientHeight;

  window.addEventListener('resize', () => {
    if (canvas.parentElement) {
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    }
  });

  const particles = Array.from({ length: 25 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.2
  }));

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// Initialize all animations when page loads
document.addEventListener('DOMContentLoaded', () => {
  animateCounters();
  init3DTilt();
  initParticleCanvas();
});