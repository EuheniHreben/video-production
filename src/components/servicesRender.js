import { servicesData } from './servicesData';

const SERVICES_PER_PAGE = 5;

let currentPage = 1;

export function initServices(root = document) {
  const list = root.querySelector('.services__list');
  const pagination = root.querySelector('.pagination');

  if (!list || !pagination) return;

  renderPage(list, pagination);
}

function renderPage(list, pagination) {
  const start = (currentPage - 1) * SERVICES_PER_PAGE;

  const end = start + SERVICES_PER_PAGE;

  const currentServices = servicesData.slice(start, end);

  renderServices(list, currentServices);

  renderPagination(pagination, list);
}

function renderPagination(container, list) {
  const totalPages = Math.ceil(servicesData.length / SERVICES_PER_PAGE);

  let buttons = '';

  for (let i = 1; i <= totalPages; i++) {
    buttons += `
      <button
        class="pagination__btn ${currentPage === i ? 'active' : ''}"
        data-page="${i}"
      >
        ${i}
      </button>
    `;
  }

  container.innerHTML = `
    <button
      class="pagination__btn"
      data-prev
      ${currentPage === 1 ? 'disabled' : ''}
    >
      ←
    </button>

    ${buttons}

    <button
      class="pagination__btn"
      data-next
      ${currentPage === totalPages ? 'disabled' : ''}
    >
      →
    </button>
  `;

  initPaginationEvents(container, list);
}

function initPaginationEvents(container, list) {
  const pageButtons = container.querySelectorAll('[data-page]');

  const prevBtn = container.querySelector('[data-prev]');

  const nextBtn = container.querySelector('[data-next]');

  const scrollTarget = document.querySelector('[data-scroll-target]');

  pageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentPage = Number(button.dataset.page);

      updatePage(list, container, scrollTarget);
    });
  });

  prevBtn?.addEventListener('click', () => {
    if (currentPage <= 1) return;

    currentPage--;

    updatePage(list, container, scrollTarget);
  });

  nextBtn?.addEventListener('click', () => {
    const totalPages = Math.ceil(servicesData.length / SERVICES_PER_PAGE);

    if (currentPage >= totalPages) return;

    currentPage++;

    updatePage(list, container, scrollTarget);
  });
}

function updatePage(list, container, scrollTarget) {
  renderPage(list, container);

  scrollTarget?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

function renderServices(list, services) {
  list.innerHTML = services.map(renderServiceCard).join('');
}

function renderServiceCard(service) {
  return `
    <li class="services__item service ${
      service.id % 2 === 0 ? 'service--reverse' : ''
    }">
      <div class="service__img-box">
        <img src="${service.image}" alt="${service.title}" class="service__img" />
      </div>

      <div class="service__content">
        <h3 class="service__title">${service.title}</h3>

        <div class="service__info info">
          <div class="info__item">
            <span class="info__price"> ${service.teamSize} </span>

            специалистов
          </div>

          <div class="info__item">
            <span class="info__price"> ${service.durationDays} </span>

            дней production
          </div>
        </div>

        <p class="service__text">${service.description}</p>

        <div class="service__btn">
          <button data-modal-open="order-modal" class="btn btn_type_second">
            Обсудить проект
          </button>
        </div>
      </div>
    </li>
  `;
}
