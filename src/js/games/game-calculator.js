export const calculatorGame = () => {
  const gameContainer = document.querySelector('.calculator');

  const gameHTML = `
    <section class="calculator">
      <div class="container">
        <h2 class="calculator__titel">Калькулятор</h2>
        <div class="calculator__container">
          <input
            class="claculator__input"
            type="text"
            placeholder="Введіть число"
          />
          <div class="calculator__buttons">
            <button class="calculator__button">+</button>
            <button class="calculator__button">*</button>
            <button class="calculator__button">-</button>
            <button class="calculator__button">/</button>
          </div>
          <input
            class="claculator__input"
            type="text"
            placeholder="Введіть число"
          />
          <button class="result__button">=</button>
          <input class="result__input" type="text" placeholder="Результат" />
        </div>
      </div>
    </section>
  `;
  gameContainer.innerHTML = gameHTML;

  const inputs = document.querySelectorAll('.claculator__input');
  const buttons = document.querySelectorAll('.calculator__button');
  const resultInput = document.querySelector('.result__input');
  const equalButton = document.querySelector('.result__button');

  let operator = '+';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      operator = button.textContent;

      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
  equalButton.addEventListener('click', () => {
    const num1 = parseFloat(inputs[0].value);
    const num2 = parseFloat(inputs[1].value);
    let result = '';

    if (isNaN(num1) || isNaN(num2)) {
      result = 'Помилка';
    } else {
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num2 !== 0 ? num1 / num2 : 'Ділення на 0!';
          break;
        default:
          result = 'Невідома операція';
      }
    }

    resultInput.value = result;
  });
};
