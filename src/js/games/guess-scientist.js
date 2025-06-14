import scientists from '../data/scientists';

const actions = [
  {
    text: 'Які вчені народилися в 19 ст.',
    data: 'bornNT',
  },
  {
    text: 'Знайти рік народження Albert Einshtein',
    data: 'bornAE',
  },
  {
    text: 'Відсортувати вчених за алфавітом',
    data: 'sortBA',
  },
  {
    text: 'Знайти вчених, прізвища яких починаються на на літеру “С” ',
    data: 'findFLC',
  },
  {
    text: 'Відсортувати вчених за кількістю прожитих років',
    data: 'sortL',
  },
  {
    text: 'Видалити всіх вчених, ім’я яких починається на “А”',
    data: 'delFLA',
  },
  {
    text: 'Знайти вченого, який народився найпізніше',
    data: 'findY',
  },
  {
    text: 'Знайти вченого, який прожив найдовше і вченого, який прожив найменше',
    data: 'findSL',
  },
  {
    text: 'Знайти вчених, в яких співпадають перші літери імені і прізвища',
    data: 'findFL',
  },
];

export const guessScientistsInit = () => {
  const gameContainer = document.querySelector('.scientist');

  const gameHTML = `
  <h2 class="scientist__title">Обери вченого/их</h2>
  <ul class="scientist__list">
  </ul>
    <ul class="scientist__actions">
   ${actions
     .map(
       action => `
    <li class="scientist__action"><button class="action__btn" data-action="${action.data}">${action.text}</button></li>
    `
     )
     .join('')}
    </ul>
  `;
  gameContainer.innerHTML = gameHTML;
  const listOfScientists = document.querySelector('.scientist__list');

  const renderScientist = scientists =>
    scientists
      .map(
        scientist => `
        <li class="scientist__item" style="background-image: url(${scientist.photo});">
            <h3 class="scientist__name">${scientist.name} ${scientist.surname}</h3>
            <p class="scientist__life">${scientist.born} - ${scientist.dead}</p>
        </li>
       `
      )
      .join('');
  listOfScientists.innerHTML = renderScientist(scientists);

  const listOfActions = {
    bornNT: () =>
      scientists.filter(
        scientist => scientist.born > 1800 && scientist.born < 1900
      ),

    bornAE: () => {
      const AEScientist = scientists.find(
        scientist =>
          scientist.name === 'Albert' || scientist.surname === 'Einstein'
      );
      return [AEScientist];
    },

    sortBA: () => scientists.sort((a, b) => a.name.localeCompare(b.name)),

    findFLC: () =>
      scientists.filter(scientist => scientist.surname.charAt(0) === 'C'),

    sortL: () => scientists.sort((a, b) => b.dead - b.born - (a.dead - a.born)),

    delFLA: () =>
      scientists.filter(scientist => scientist.name.charAt(0) !== 'A'),

    findY: () => {
      const findScietist = scientists.reduce(
        (acc, scientist) => (acc.born > scientist.born ? acc : scientist),
        scientists[0]
      );
      console.log(findScietist);
      return [findScietist];
    },

    findSL: () => {
      const lifeDuring = scientists.sort(
        (a, b) => b.dead - b.born - (a.dead - a.born)
      );
      const yAndOScientist = [lifeDuring[0], lifeDuring[lifeDuring.length - 1]];
      return yAndOScientist;
    },
    findFL: () =>
      scientists.filter(
        scientist => scientist.name.charAt(0) === scientist.surname.charAt(0)
      ),
  };

  const allActions = document.querySelectorAll('.action__btn');

  const handleAction = e => {
    const action = e.target.dataset.action;
    if (listOfActions[action]) {
      const filteredScientist = listOfActions[action]();
      console.log(filteredScientist);
      listOfScientists.innerHTML = renderScientist(filteredScientist);
    }
  };

  allActions.forEach(action => {
    action.addEventListener('click', handleAction);
  });
};
