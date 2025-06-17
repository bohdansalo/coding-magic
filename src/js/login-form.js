document.addEventListener('DOMContentLoaded', () => {
  const formContainer = document.querySelector('.container');
  const closeBtn = document.querySelector('.close-btn');
  const saveBtn = document.querySelector('.save-btn');
  const nameInput = document.getElementById('name');
  const userNameSpan = document.getElementById('user-name');

  formContainer.style.display = 'block';

  function closeForm() {
    formContainer.style.display = 'none';
  }

  saveBtn.addEventListener('click', () => {
    const enteredName = nameInput.value.trim();

    if (enteredName !== '') {
      userNameSpan.textContent = enteredName;
    }

    closeForm();
  });

  closeBtn.addEventListener('click', closeForm);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeForm();
    }
  });
});
