export function initModal(root) {
  root = root || document;

  if (root.__modalInitialized) return;
  root.__modalInitialized = true;

  function closeModal(modal) {
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';

    setTimeout(() => {
      modal.classList.remove('ui-modal--success');

      const form = modal.querySelector('.ui-modal__form');
      if (form) form.reset();

      const button = modal.querySelector('button[type="submit"]');
      if (button) {
        button.disabled = false;
        button.classList.remove('is-loading');
        button.textContent = 'Обсудить проект';
      }
    }, 300);
  }

  root.addEventListener('click', (e) => {
    const openBtn = e.target.closest('[data-modal-open]');
    const closeBtn = e.target.closest('.ui-modal__close');
    const overlay = e.target.closest('.ui-modal__overlay');

    // открыть
    if (openBtn) {
      const id = openBtn.dataset.modalOpen;
      const modal = document.getElementById(id);

      // закрываем все
      document.querySelectorAll('.ui-modal.active').forEach((m) => {
        closeModal(m);
      });

      if (modal) modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    // закрыть
    if (closeBtn || overlay) {
      const modal = e.target.closest('.ui-modal');
      closeModal(modal);
    }
  });

  // ESC
  if (!document.__modalEscInitialized) {
    document.__modalEscInitialized = true;

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.ui-modal.active').forEach((m) => {
          closeModal(m);
        });
      }
    });
  }
}
