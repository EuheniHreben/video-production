import { newsData } from './newsData';

export function initNewsModal(root = document) {
  const cards = root.querySelectorAll('[data-news-id]');
  const modal = root.querySelector('#news-modal');

  if (!cards.length || !modal) return;

  const image = modal.querySelector('.news-modal__img');
  const title = modal.querySelector('.news-modal__title');
  const text = modal.querySelector('.news-modal__text');
  const date = modal.querySelector('.news-modal__date');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.dataset.newsId;

      const news = newsData[id];
      if (!news) return;

      image.src = news.image;
      image.alt = news.title;

      title.textContent = news.title;
      text.textContent = news.text;
      date.textContent = news.date;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}
