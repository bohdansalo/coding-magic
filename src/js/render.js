import games from './data/games.js';
import { filteredGames } from './helpers.js';

const gameContainer = document.querySelector('[data-game_container]');

const renderGames = (games, container, category = 'all') => {
  const filterGames = filteredGames(games, category);

  container.innerHTML = filterGames
    .map(
      game =>
        `<section class="section" id='${game.id}'>
           <div class="container">
            <div class="game ${game.class}">
            </div>
           </div>
          </section>`
    )
    .join('');

  filterGames.forEach(game => {
    if (game.init) {
      game.init();
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  renderGames(games, gameContainer);
});

export default renderGames;
