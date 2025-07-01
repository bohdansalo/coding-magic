export const leapYearCalculatorInit = () => {
  const gameContainer = document.querySelector('.leap-year-calculator');
  const gameHtml = `
    <div class="leap-year">
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
          <span class="year-calculator-result"></span>
        </div>
      </div>    
`;
  gameContainer.innerHTML = gameHtml;

  const form = gameContainer.querySelector('.year-calculator-content');
  const input = gameContainer.querySelector('.year-calculator-input');
  const result = gameContainer.querySelector('.year-calculator-result');
  const handleSubmit = e => {
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
  };
  form.addEventListener('submit', handleSubmit);
};
