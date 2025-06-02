import games from './data/games.js';

const renderGames = () => {
  const gameContainer = document.querySelector('[data-game_container]');
  gameContainer.innerHTML = games
    .map(
      game =>
        `<section class="${game.class}" id='${game.id}'>
           <div class="container">
            <div class="game ${game.class}">
            </div>
           </div>
          </section>`
    )
    .join('');

  games.forEach(game => {
    if (game.init) {
      game.init();
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  renderGames(games);
});
