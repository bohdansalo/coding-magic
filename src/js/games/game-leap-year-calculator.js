export const leapYearCalculatorInit = () => {
  const gameContainer = document.querySelector('.leap-year-calculator');
  const gameHtml = `
  <h2 class="year-calculator-title">Перевір в який рік ти народився</h2>
          <form class="year-calculator-content">
            <input
              class="year-calculator-input"
              type="number"
              placeholder="Введіть рік народження"
            />
            <button class="year-calculator-button"></button>
            </form>
            <span class="year-calculator-result"></span>
          
`;
  gameContainer.innerHTML = gameHtml;
};
