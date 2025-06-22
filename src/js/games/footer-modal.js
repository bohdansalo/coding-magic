const subscribeForm = document.querySelector('.subscribe__container');
const modal = document.getElementById('thankYouModal');
const closeModal = document.getElementById('closeModal');

subscribeForm.addEventListener('submit', function (e) {
  e.preventDefault();
  modal.classList.remove('footer__hidden');
});

closeModal.addEventListener('click', function () {
  modal.classList.add('footer__hidden');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('.footer__hidden')) {
    modal.classList.add('footer__hidden');
  }
});
