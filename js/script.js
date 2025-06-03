/**
 * =============================================================================
 * ARQUIVO: js/script.js
 * FINALIDADE:
 *  - Controle do tema claro/escuro via toggle switch
 *  - Persistência no localStorage
 * =============================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
  const themeCheckbox = document.getElementById('theme-checkbox');
  const body = document.body;

  // 1) Verifica se já existe preferência salva no localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'theme-light') {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    themeCheckbox.checked = true;
  } else {
    // padrão: tema-escuro
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    themeCheckbox.checked = false;
  }

  // 2) Ao alternar o checkbox, troca classes e salva no localStorage
  themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
      // tema claro
      body.classList.remove('theme-dark');
      body.classList.add('theme-light');
      localStorage.setItem('theme', 'theme-light');
    } else {
      // tema escuro
      body.classList.remove('theme-light');
      body.classList.add('theme-dark');
      localStorage.setItem('theme', 'theme-dark');
    }
  });
});

// Active menu highlighting based on current page
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
  const navLink = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');
});
