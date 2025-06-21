export const threeNumbersInit = () => {
  const gameContainer = document.querySelector('.calculator-time');
  const gameHtml = `<section class="calculator-time">
      <div class="container">
        <h2 class="time-titel">Калькулятор часу</h2>
          <input
            class="time-input"
            type="text"
            placeholder="Введіть число"
          />
        
       <span class="time-result"></span>
      </div>
    </section>`;
};
