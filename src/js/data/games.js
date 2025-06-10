import { guessNumberInit } from '../games/guess-number.js';
import { threeNumbersInit } from '../games/three-numbers.js';
import { calculatorGame } from '../games/game-calculator.js';
const games = [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',
    class: 'leap-year-calculator',
  },
  {
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',
    class: 'guess-number',
    init: guessNumberInit,
  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
    class: 'rock-paper-scissors',
  },
  {
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
    class: 'calculator',
    init: calculatorGame,
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
    class: 'calculator-time',
  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
    class: 'google-din',
  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',
    class: 'soccer',
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
    class: 'biggest-number',
    init: threeNumbersInit,
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
    class: 'our-team',
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
    class: 'scientist',
  },
];

export default games;
