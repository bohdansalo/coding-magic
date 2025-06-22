import logoDarkTheme from '../images/header/logo-dark-theme.svg';
import logoLightTheme from '../images/header/header-logo.svg';

const themeSwiper = document.querySelector('[data-theme]');

const logo = document.querySelector('.logo-img');
const footerLogo = document.querySelector('.footer__logo--img');

const handleTheme = event => {
  if (event.target.checked) {
    document.documentElement.dataset.theme = 'dark';
    logo.src = logoDarkTheme;
    footerLogo.src = logoDarkTheme;
  } else {
    document.documentElement.dataset.theme = 'light';
    logo.src = logoLightTheme;
    footerLogo.src = logoLightTheme;
  }
};

themeSwiper.addEventListener('change', handleTheme);
