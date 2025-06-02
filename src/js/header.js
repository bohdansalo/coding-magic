const themeToggle = document.querySelector('[data-theme]');
const darkMain = document.querySelector('[data-dark]');

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', themeToggle.checked);
});
