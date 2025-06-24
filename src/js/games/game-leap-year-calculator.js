export const leapYearCalculatorInit = () => {
  const gameContainer = document.querySelector('.leap-year-calculator');
  const gameHtml = ` 
<section class="year-calculator">
      <div class="container">
        <h2 class="year-calculator-title">
         Перевір в який рік ти народився
         </h2>
         <input
         class="year-calculator-input"
          type="number"
         placeholder="Введіть рік народження" />
        <button class="year-calculator-button"></button>
        <span class="year-calculator-result"></span>
         </div>
</section>`;
  gameContainer.innerHTML = gameHtml;
};
