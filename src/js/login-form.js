document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.querySelector('.backdrop');
  const closeBtn = document.querySelector('.login-form-clos');
  const form = document.querySelector('.login-form');
  backdrop.classList.remove('hidden');
  closeBtn.addEventListener('click', () => {
    backdrop.classList.add('hidden');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      backdrop.classList.add('hidden');
    }
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    backdrop.classList.add('hidden');
    const name = document.querySelector('#name').value;
    const nameDisplay = document.querySelector('.login-form-user');
    if (name && nameDisplay) {
      nameDisplay.textContent = name;
    }
  });
});
