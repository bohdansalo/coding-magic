import ballImage from '../../images/main/game/football.svg';

export const footballGameInit = () => {
  const gameContainer = document.querySelector('.soccer');

  const gameHTML = `
   <div class="soccer">
  <h2 class="football_titel">Футбол</h2>
  <div class="field">
     <div class="ball"><img class="football_img" src="${ballImage}" alt="ball" /></div>
  </div>
</div>

  `;
  gameContainer.innerHTML = gameHTML;

  const field = document.querySelector('.field');
  const ball = document.querySelector('.ball');

  field.addEventListener('click', event => {
    const fieldRect = field.getBoundingClientRect();
    const x = event.clientX - fieldRect.left;
    const y = event.clientY - fieldRect.top;
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
  });
};
