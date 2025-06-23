export const calculatorTimeInit = () => {
  const gameContainer = document.querySelector('.calculator-time');
  const gameHtml = `
     <section class="calculator-time">
      <div class="container time-container">
        <h2 class="time-titel">Калькулятор часу</h2>
        <div class="content">
          <input class="time-input" type="number" placeholder="Введіть число" />
          <button class="time-button"></button>
          <p class="time-text">................................</p>
          <span class="time-result"></span>
        </div>
      </div>
    </section>`;
  gameContainer.innerHTML = gameHtml;

  const timeInput = document.querySelector('.time-input');
  const timeButton = document.querySelector('.time-button');
  const timeResult = document.querySelector('.time-result');

  timeButton.addEventListener('click', () => {
    const value = parseInt(timeInput.value);
    const totalHours = Math.floor(value / 60);
    const minutes = value % 60;
    const days = Math.floor(totalHours / 24);
    const hours = totalHours % 24;

    const fullDays = String(days).padStart(2, '0');
    const fullHours = String(hours).padStart(2, '0');
    const fullMinutes = String(minutes).padStart(2, '0');

    timeResult.textContent = `${fullDays} дн. ${fullHours} год. ${fullMinutes} хв.`;
  });
};
