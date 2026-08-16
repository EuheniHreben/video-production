function createReviewHTML({ name, title, text, date }) {
  return `
    <li class="reviews__item review">
      <div class="review__contact">
        <div class="review__img-box">
          <img src="./img/cameraman.jpg" class="review__img" />
        </div>
        <div class="review__info">
          <a class="review__name">${name}</a>
        </div>
      </div>
      <div class="review__desc">
        <div class="review__title">${title}</div>
        <div class="review__text">
          <p>${text}</p>
        </div>
        <div class="review__date">${date}</div>
      </div>
    </li>
  `;
}

function normalizeText(str) {
  if (!str) return '';

  const trimmed = str.trim();

  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

export function initReviewForm(root = document) {
  const form = root.querySelector('.form__form');
  const list = root.querySelector('.reviews__list');

  if (!form || !list) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = form.querySelector('#nameValue');
    const titleInput = form.querySelector('#titleValue');
    const descInput = form.querySelector('#descValue');

    const name = normalizeText(nameInput.value) || 'Аноним';
    const title =
      normalizeText(titleInput.value) || 'Лучше, чем борщ от бабушки';
    const text =
      normalizeText(descInput.value) ||
      'Заказал видео, а получил мини-фильм! Даже кошка смотрела 👀';

    const date = new Date().toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const html = createReviewHTML({ name, title, text, date });

    list.insertAdjacentHTML('beforeend', html);

    form.reset();

    list.lastElementChild.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  });
}
