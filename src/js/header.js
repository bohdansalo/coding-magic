// const themeToggle = document.querySelector('[data-theme]');
// const darkMain = document.querySelector('[data-dark]');

// themeToggle.addEventListener('change', () => {
//   document.body.classList.toggle('dark', themeToggle.checked);
// });

const themeSwiper = document.querySelector('[data-theme]');

const handleTheme = event => {
  if (event.target.checked) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
};

themeSwiper.addEventListener('change', handleTheme);
