import stone from '../../images/main/game/stone.webp';
import paper from '../../images/main/game/paper.webp';
import scissors from '../../images/main/game/scissors.webp';

export const rockScissorsPaperInit = () => {
  const container = document.querySelector('[data-game_container]');
  let gameContainer = container.querySelector('.rock-paper-scissors');

  const gameHTML = `
  <div class="rsp-container">
    <h2 class="rsp__title">Камінь - ножиці - папір</h2>

    <div class="rsp__game-wrapper">
      <ul class="rsp__list" data-rps-action>
        <li><button class="rsp__btn" data-rsp="rock">
         <img src= "${stone}" alt="stone"></img>
        </button></li>
        <li><button class="rsp__btn" data-rsp="scissors">
         <img src= "${scissors}" alt="scissors"></img>
        </button></li>
        <li><button class="rsp__btn" data-rsp="paper">
         <img src= "${paper}" alt="paper"></img>
        </button></li>
      </ul>

      <div class="rsp__score">
        <h3 class="rsp__score-title">Рахунок:</h3>
        <ul class="rsp__score-list">
          <li class="rsp__score-item"><span data-rsp-result="computer">Комп'ютер - 0</span></li>
          <li class="rsp__score-item"><span data-rsp-result="user">Ви - 0</span></li>
        </ul>
      </div>
    </div>
     <p class="win-lose" data-win-lose></p>
     <button class="rsp__btn-start button" data-rsp-start>Варіант комп'ютера</button>
  </div>

  `;
  gameContainer.innerHTML = gameHTML;

  const choices = ['rock', 'scissors', 'paper'];

  const userChoiceButton = document.querySelector('[data-rps-action]');
  const computerScoreOutput = document.querySelector(
    '[data-rsp-result="computer"]'
  );
  const userScoreOutput = document.querySelector('[data-rsp-result="user"]');
  const winerLoser = document.querySelector('[data-win-lose]');
  const variantsComputer = document.querySelector('[data-rsp-start]');
  let userScore = 0;
  let computerScore = 0;
  let userChoice = null;

  userChoiceButton.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
      userChoice = event.target.dataset.rsp;
    }
  });

  variantsComputer.addEventListener('click', e => {
    const userSelection = userChoice;

    const randomChoice = Math.floor(Math.random() * 3);
    const computerSelection = choices[randomChoice];

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
      userScore += 1;
      userScoreOutput.textContent = `Ви - ${userScore}`;
      winerLoser.textContent = 'Ви виграли!';
      winerLoser.style.color = 'var(--color-text-tretiary)';
    } else {
      computerScore += 1;
      computerScoreOutput.textContent = `Комп'ютер - ${computerScore}`;
      winerLoser.textContent = 'Ви програли!';
      winerLoser.style.color = 'var(--color-text-wrong)';
    }
  });
};
