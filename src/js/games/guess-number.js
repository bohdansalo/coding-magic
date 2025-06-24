export const guessNumberInit = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const gameContainer = document.querySelector('.guess-number');

  const gameHTML = `
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
  resultMessage.className = 'guess-num__result';

  const handleGuess = e => {
    e.preventDefault();
    guessInput.disabled = true;
    guessForm.querySelector('[data-guess_btn]').disabled = true;

    const userGuess = parseInt(guessInput.value);

    if (userGuess === randomNumber) {
      guessForm.insertAdjacentElement('afterend', resultMessage);
      resultMessage.textContent = 'Вітаємо! Ви вгадали число!';
      resultMessage.style.color = 'green';
    } else {
      guessForm.insertAdjacentElement('afterend', resultMessage);
      resultMessage.textContent = `Ви не вгадали. Загадане число: ${randomNumber}`;
      resultMessage.style.color = 'red';
    }

    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Спробувати ще раз';
    restartBtn.type = 'button';
    restartBtn.className = 'guess-num__restart button';
    resultMessage.insertAdjacentElement('afterend', restartBtn);

    restartBtn.addEventListener('click', () => {
      guessNumberInit();
    });
  };

  guessForm.addEventListener('submit', handleGuess);
};
