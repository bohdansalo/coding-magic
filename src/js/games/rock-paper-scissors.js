export const rockScissorsPaperInit = () => {
  const container = document.querySelector('[data-game_container]');
  let gameContainer = container.querySelector('.guess-number');

  const gameHTML = `
  <div class="rsp-container">
    <h2 class="rsp__title">Камінь - ножиці - папір</h2>

    <div class="rsp__game-wrapper">
      <ul class="rsp__list">
        <li><button class="rsp__btn" data-rsp="rock">r</button></li>
        <li><button class="rsp__btn" data-rsp="scissors">s</button></li>
        <li><button class="rsp__btn" data-rsp="paper">p</button></li>
      </ul>

      <div class="rsp__score">
        <h3 class="rsp__score-title">Рахунок:</h3>
        <ul class="rsp__score-list">
          <li class="rsp__score-item">Комп'ютер - <span data-rsp-result="computer">0</span></li>
          <li class="rsp__score-item">Ви - <span data-rsp-result="user">0</span></li>
        </ul>
      </div>
    </div>
     <p class="win-lose" data-win-lose></p>
     <button class="rsp__btn-start button" data-rsp-start>Варіант комп'ютера</button>
  </div>

  `;
  gameContainer.innerHTML = gameHTML;

  const choices = ['rock', 'scissors', 'paper'];

  const rspButtons = document.querySelectorAll('[data-rsp]');
  const computerScore = document.querySelector('[data-rsp-result="computer"]');
  const userScore = document.querySelector('[data-rsp-result="user"]');
  const winerLoser = document.querySelector('[data-win-lose]');
  const variantsComputer = document.querySelector('[data-rsp-start]');

  rspButtons.forEach(button => {
    button.addEventListener('click', e => {
      const userSelection = e.target.dataset.rsp;

      const randomChoice = Math.floor(Math.random() * 3);
      const computerSelection = choices[randomChoice];
      alert(`Комп'ютер обрав: ${computerSelection}`);

      if (userSelection === computerSelection) {
        winerLoser.textContent = 'Нічия!';
        winerLoser.style.color = 'var(--color-background-switch)';

        return;
      }

      const userWins =
        (userSelection === 'rock' && computerSelection === 'scissors') ||
        (userSelection === 'scissors' && computerSelection === 'paper') ||
        (userSelection === 'paper' && computerSelection === 'rock');

      if (userWins) {
        userScore.textContent = parseInt(userScore.textContent || '0') + 1;
        winerLoser.textContent = 'Ви виграли!';
        winerLoser.style.color = 'var(--color-text-tretiary)';
      } else {
        computerScore.textContent =
          parseInt(computerScore.textContent || '0') + 1;
        winerLoser.textContent = 'Ви програли!';
        winerLoser.style.color = 'var(--color-text-wrong)';
      }
    });
  });
};
