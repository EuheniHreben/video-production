import { portfolioData } from './portfolioData';

export function initPortfolioModal(root = document) {
  const cards = root.querySelectorAll('[data-case-id]');
  const modal = root.querySelector('#portfolio-modal');

  if (!cards.length || !modal) return;

  const video = modal.querySelector('.portfolio-modal__video');
  const category = modal.querySelector('.portfolio-modal__category');
  const title = modal.querySelector('.portfolio-modal__title');
  const description = modal.querySelector('.portfolio-modal__description');
  const duration = modal.querySelector(
    '.portfolio-modal__duration .portfolio-modal__highlight',
  );
  const team = modal.querySelector(
    '.portfolio-modal__team .portfolio-modal__highlight',
  );
  const closeBtn = modal.querySelector('.ui-modal__close');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.dataset.caseId;

      const project = portfolioData.find((item) => item.id === id);

      if (!project) return;

      video.src = project.video;

      video.play();

      category.textContent = project.category;

      title.textContent = project.title;

      duration.textContent = `${project.durationDays}`;

      team.textContent = `${project.teamSize}`;

      description.textContent = project.description;

      modal.classList.add('active');

      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn?.addEventListener('click', () => {
    modal.classList.remove('active');

    video.pause();

    video.removeAttribute('src');

    video.load();

    video.currentTime = 0;

    document.body.style.overflow = '';
  });
}
