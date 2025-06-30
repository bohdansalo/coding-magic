export const leapYearCalculatorInit = () => {
  const gameContainer = document.querySelector('.leap-year-calculator');
  const gameHtml = `
    <div class="leap-year-calculator">
        <h2 class="year-calculator-title">Перевір в який рік ти народився</h2>
        <div class="year-calculator-wrapper">
          <form class="year-calculator-content">
            <input
              class="year-calculator-input"
              type="number"
              placeholder="Введіть рік народження"
            />
            <button class="year-calculator-button"></button>
          </form>
          <span class="year-calculator-result">Ви народилися у високосний рік!</span>
        </div>
      </div>    
`;
  const form = gameContainer.querySelector('.year-calculator-content');
  const input = gameContainer.querySelector('.year-calculator-input');
  const result = gameContainer.querySelector('.year-calculator-result');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const year = parseInt(input.value.trim());

    if (!year || year < 0) {
      result.textContent = 'Введіть коректний рік!';
      result.style.color = 'orange';
      return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (isLeap) {
      result.textContent = 'Ви народилися у високосний рік!';
      result.style.color = 'green';
    } else {
      result.textContent = 'Ви народилися не у високосний рік!';
      result.style.color = 'red';
    }
  });
  gameContainer.innerHTML = gameHtml;
};
