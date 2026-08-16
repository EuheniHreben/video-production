export function initContactForm(root = document) {
  const forms = root.querySelectorAll('.ui-modal__form');

  if (!forms.length) return;

  forms.forEach((form) => {
    const button = form.querySelector('button[type="submit"]');

    if (!button) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(form);

      const name = data.get('name');
      const contact = data.get('contact');
      const message = data.get('message');

      console.log({ name, contact, message });

      button.disabled = true;
      button.classList.add('is-loading');

      setTimeout(() => {
        const modal = form.closest('.ui-modal');
        modal.classList.add('ui-modal--success');

        button.classList.remove('is-loading');
      }, 1500);
    });
  });
}
