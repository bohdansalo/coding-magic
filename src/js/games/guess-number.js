export const guessNumberInit = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const gameContainer = document.querySelector('.guess-number');

    <div class="game__guess-num">
        <h2 class="guess-num__title">Вгадай число, яке загадав комп’ютер</h2>
        <div class="guess-num__wrapper">
        <form class="guess-num__form" data-guess_form>
        <input type="number" class="guess-num__input" name="guess-num__input" id="guess__input" 
        placeholder="Введіть число" data-guess_input required />
      <button type="submit" class="guess-num__btn" data-guess_btn>
    </form>
    </div>
    </div>
    `;

  gameContainer.innerHTML = gameHTML;

  const guessInput = document.querySelector('[data-guess_input]');
  const guessForm = document.querySelector('[data-guess_form]');
  const resultMessage = document.createElement('p');

  const handleGuess = e => {
    e.preventDefault();
    const userGuess = parseInt(guessInput.value);

    if (userGuess < randomNumber) {
      guessForm.insertAdjacentElement('afterend', resultMessage);
      resultMessage.textContent = 'Ваше число менше за загаданe.';
      resultMessage.style.color = 'red';
    }
    if (userGuess > randomNumber) {
      guessForm.insertAdjacentElement('afterend', resultMessage);
      resultMessage.textContent = 'Ваше число більше за загаданe.';
      resultMessage.style.color = 'red';
    }
    if (userGuess === randomNumber) {
      guessForm.insertAdjacentElement('afterend', resultMessage);
      resultMessage.textContent = 'Вітаємо! Ви вгадали число!';
      resultMessage.style.color = 'green';
    }
  };

  guessForm.addEventListener('submit', handleGuess);
};
