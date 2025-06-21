'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.querySelector('.backdrop');
  const closeBtn = document.querySelector('.login-form-clos');
  const form = document.querySelector('.login-form');
  closeBtn.addEventListener('click', () => {
    backdrop.classList.add('hidden');
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    backdrop.classList.add('hidden');
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      backdrop.classList.add('hidden');
    }
  });
});
const closeBtn = document.querySelector('.login-form-clos');
closeBtn.addEventListener('click', () => {
  backdrop.classList.add('hidden');
});
