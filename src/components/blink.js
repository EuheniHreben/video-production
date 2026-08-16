export function initBlink(root = document) {
  const elements = root.querySelectorAll('[data-blink]');

  elements.forEach((el) => {
    function setRandomAnimationDuration() {
      el.style.setProperty(
        '--animation-time',
        Math.floor(Math.random() * 1.5 + 2.5) + 's',
      );
    }

    el.addEventListener('animationiteration', setRandomAnimationDuration);

    setRandomAnimationDuration();
  });
}
