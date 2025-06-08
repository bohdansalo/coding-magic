import renderGames from './render.js';
import games from './data/games.js';

const btn = document.querySelectorAll('[data-filter]');
const gameContainer = document.querySelector('[data-game_container]');

const handleFilter = e => {
  category = e.target.dataset.filter;
  renderGames(games, gameContainer, category);
};

btn.forEach(button => {
  button.addEventListener('click', handleFilter);
});
