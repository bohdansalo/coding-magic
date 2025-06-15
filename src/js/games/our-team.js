import { ourTeam } from '../data/our-team';

export const ourTeamInit = () => {
  const gameContaiener = document.querySelector('.our-team');

  const gameHTML = `
  <h2 class="our-team__title">Наша команда</h2>
  <div class="our-team__slider">
  <button class="our-team__btn" data-slider__action="back"></button>
    <ul class="our-team__list" data-slider>
    ${ourTeam
      .map(
        teammate => `
        <li class="our-team__item" id="${teammate.id}"> 
            <div class="our-team__photo">
                <img src="${teammate.photo}" alt="${teammate.name}" loading="lazy" class="our-team__photo-img">
            </div>
            <h3 class="our-team__name">${teammate.name}</h3>
            <p class="our-team__description">${teammate.description}</p>
        </li>
        `
      )
      .join('')}
    </ul>
        <button class="our-team__btn our-team__btn--next" data-slider__action="next"></button>
    </div>

    <ul class="our-team__pagination">
      ${ourTeam
        .map(
          ({ id }) => `
          <li class="our-team__pagination-item">
            <button class="our-team__pagination-btn" data-slider__action="pagination" data-index="${id}"></button>
          </li>
        `
        )
        .join('')}
    `;

  gameContaiener.innerHTML = gameHTML;

  const sliderBtns = document.querySelectorAll('[data-slider__action]');
  const sliderList = document.querySelector('[data-slider]');
  const paginationBtns = document.querySelectorAll('.our-team__pagination-btn');
  let currentIndex = document.querySelector('.our-team__item').id;

  const handlePagination = e => {
    if (e.target.dataset.slider__action === 'pagination') {
      const index = parseInt(e.target.dataset.index, 10);
      currentIndex = index;
      sliderList.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  const handleNext = e => {
    if (e.target.dataset.slider__action === 'next') {
      currentIndex = (currentIndex + 1) % ourTeam.length;
      sliderList.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  const handlePrev = e => {
    if (e.target.dataset.slider__action === 'back') {
      currentIndex = (currentIndex - 1 + ourTeam.length) % ourTeam.length;
      sliderList.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  sliderBtns.forEach(btn => {
    btn.addEventListener('click', handleNext);
    btn.addEventListener('click', handlePrev);
  });

  paginationBtns.forEach(btn => {
    btn.addEventListener('click', handlePagination);
  });
};
