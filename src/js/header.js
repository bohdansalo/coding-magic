import logoDarkTheme from '../images/header/header-logo.svg';
import logoLightTheme from '../images/header/logo-dark-theme.svg';

const themeSwiper = document.querySelector('[data-theme-swiper]');

const logo = document.querySelector('.logo-img');

const handleTheme = event => {
  if (event.target.checked) {
    document.documentElement.dataset.theme = 'dark';
    logo.src = logoLightTheme;
  } else {
    document.documentElement.dataset.theme = 'light';
    logo.src = logoDarkTheme;
  }
};

themeSwiper.addEventListener('change', handleTheme);
