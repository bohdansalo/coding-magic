export const threeNumbersInit = () => {
  const gameContainer = document.querySelector('.biggest-number');
  const gameHtml = `    <section class="biggestnumber">
      <div class="container biggestnumber-container">
        <h2 class="biggestnumber-title">Введіть 3 числа</h2>
        <div class="biggestnumber-numbers"><input
          class="biggestnumber-num"
          type="number"
          placeholder="Введіть число"
        />
        <input
          class="biggestnumber-num"
          type="number"
          placeholder="Введіть число"
        />
        <input
          class="biggestnumber-num"
          type="number"
          placeholder="Введіть число"
        /></div>
        <p class="biggestnumber-text">
          Найбільше число, яке ви ввели - (число)
        </p>
      </div>
    </section>
 `;

  gameContainer.innerHTML = gameHtml;
};
