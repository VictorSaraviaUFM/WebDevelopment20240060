const btn = document.getElementById('dark-mode-toggle');

function setModeUI(isDark) {
  if (isDark) {
    document.body.classList.add('dark-mode');
    btn.textContent = '☀️ Light Mode';
    btn.classList.remove('btn-outline-dark');
    btn.classList.add('btn-light');
  } else {
    document.body.classList.remove('dark-mode');
    btn.textContent = '🌙 Dark Mode';
    btn.classList.remove('btn-light');
    btn.classList.add('btn-outline-dark');
  }
}

// Inicializar desde localStorage (opcional)
const saved = localStorage.getItem('cv-dark-mode') === '1';
setModeUI(saved);

btn.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark-mode');
  setModeUI(isDark);
  localStorage.setItem('cv-dark-mode', isDark ? '1' : '0');
});
