export function initBurger(root = document) {
  const burger = document.querySelector('.burger');
  const overlay = document.querySelector('.mobile-menu');
  const body = document.body;

  if (!burger || !overlay) return;

  function closeMenu() {
    burger.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('locked');
  }

  function toggleMenu() {
    burger.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('locked');
  }

  root.addEventListener('click', (e) => {
    const burgerClick = e.target.closest('.burger');
    const link = e.target.closest('.mobile-menu a');

    if (burgerClick) {
      toggleMenu();
    }

    if (e.target === overlay || link) {
      closeMenu();
    }
  });
}
