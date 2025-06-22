export const threeNumbersInit = () => {
  const gameContainer = document.querySelector('.biggest-number');
  const gameHtml = `    <section class="biggestnumber">
      <div class="container biggestnumber-container">
        <h2 class="biggestnumber-title">Введіть 3 числа</h2>
        <form class="biggestnumber-numbers"><input
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
        /></form>
        <p class="biggestnumber-text">
          Найбільше число, яке ви ввели - <span id="biggestnumber-result"></span>
        </p>
      </div>
    </section>
 `;
  gameContainer.innerHTML = gameHtml;
  const form = document.querySelector('.biggestnumber-numbers');
  const inputs = document.querySelectorAll('.biggestnumber-num');
  const result = document.querySelector('#biggestnumber-result');

  const findMaxNumber = () => {
    const numbers = Array.from(inputs).map(input => Number(input.value));

    if (numbers.every(num => !isNaN(num))) {
      const max = Math.max(...numbers);
      result.textContent = `${max}`;
    }
  };

  form.addEventListener('input', findMaxNumber);
};
