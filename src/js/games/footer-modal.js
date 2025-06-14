const inputCheck = document.querySelector('.subscribe__input');
const subscribeBtn = document.querySelector('.subscribe__button');
const modal = document.getElementById('thankYouModal');
const closeModal = document.getElementById('closeModal');

subscribeBtn.addEventListener('click', function () {
  const email = inputCheck.value.trim();

  if (email.endsWith('@gmail.com') && email.length >= 15) {
    modal.classList.remove('footer__hidden');
  } else {
  }
});

closeModal.addEventListener('click', function () {
  modal.classList.add('footer__hidden');
});

modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.classList.add('footer__hidden');
  }
});
