import { guessNumberInit } from '../games/guess-number.js';
import { guessScientistsInit } from '../games/guess-scientist.js';
import { ourTeamInit } from '../games/our-team.js';
import { rockScissorsPaperInit } from '../games/rock-paper-scissors.js';
import { dinosaurGameInit } from '../games/dinosaur';
import { calculatorGameInit } from '../games/game-calculator.js';
import { footballGameInit } from '../games/football.js';
import { calculatorTimeInit } from '../games/game-calculator-time.js';
import { threeNumbersInit } from '../games/game-biggest-number.js';
import { leapYearCalculatorInit } from '../games/game-leap-year-calculator.js';

const games = [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',
    class: 'leap-year-calculator',
    init: leapYearCalculatorInit,
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
    init: rockScissorsPaperInit,
  },
  {
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
    class: 'calculator',
    init: calculatorGameInit,
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
    class: 'calculator-time',
    init: calculatorTimeInit,
  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
    class: 'google-din',
    init: dinosaurGameInit,
  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',
    class: 'soccer',
    init: footballGameInit,
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
    init: ourTeamInit,
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
    class: 'scientist',
    init: guessScientistsInit,
  },
];

export default games;
