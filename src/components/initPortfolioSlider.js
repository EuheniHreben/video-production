import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { portfolioData } from './portfolioData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function initPortfolioSlider(root = document) {
  const slider = root.querySelector('.cards-slider');

  const wrapper = root.querySelector('.cards__list');

  if (!slider || !wrapper) return;

  renderSlides(wrapper);

  new Swiper('.cards-slider', {
    modules: [Navigation, Pagination],

    slidesPerView: 1,
    spaceBetween: 20,

    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });
}

function renderSlides(wrapper) {
  wrapper.innerHTML = portfolioData.map(renderSlide).join('');
}

function renderSlide(project) {
  return `
    <li
      class="swiper-slide cards__item card"
      data-case-id="${project.id}"
    >
      <img
        src="${project.poster}"
        alt="${project.title}"
        class="card__poster"
      />

      <div class="card__gradient"></div>

      <div class="card__content">

      <h4 class="card__title">
        ${project.title}
      </h4>

      </div>
    </li>
  `;
}
