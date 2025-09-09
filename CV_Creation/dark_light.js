
// 1. Dark/Light Mode Toggle
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

const saved = localStorage.getItem('cv-dark-mode') === '1';
setModeUI(saved);

btn.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark-mode');
  setModeUI(isDark);
  localStorage.setItem('cv-dark-mode', isDark ? '1' : '0');
});


// 2. Saludo dinámico según la hora

function mostrarSaludo() {
  const saludoEl = document.createElement("h2");
  saludoEl.id = "saludo-dinamico";
  saludoEl.style.textAlign = "center";
  saludoEl.style.marginBottom = "15px";

  const hora = new Date().getHours();
  let saludo = "¡Hola!";
  if (hora >= 6 && hora < 12) saludo = "🌅 Buenos días";
  else if (hora >= 12 && hora < 18) saludo = "☀️ Buenas tardes";
  else saludo = "🌙 Buenas noches";

  saludoEl.textContent = saludo + ", bienvenido a mi CV";
  document.body.prepend(saludoEl);
}
mostrarSaludo();


// 3. Botón mostrar/ocultar experiencia

const expSection = document.querySelector("section.mb-4"); 
if (expSection) {
  const toggleExpBtn = document.createElement("button");
  toggleExpBtn.textContent = "Show/Hide";
  toggleExpBtn.className = "btn btn-secondary mb-3";
  expSection.prepend(toggleExpBtn);

  toggleExpBtn.addEventListener("click", () => {
    expSection.querySelector(".accordion").classList.toggle("d-none");
  });
}