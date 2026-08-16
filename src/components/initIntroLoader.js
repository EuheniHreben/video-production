export async function initIntroLoader() {
  const isIntroPage = document.body.dataset.page === 'intro';

  if (!isIntroPage) return;

  const loader = document.querySelector('.index__loading');

  await wait(1500);

  loader?.classList.add('is-visible');

  await preloadCriticalAssets();

  await wait(800);

  document.body.classList.add('is-transitioning');

  setTimeout(() => {
    const base = window.location.pathname.replace('index.html', '');

    if (base.includes('video-production')) {
      window.location.href = '/video-production/home.html';
    } else {
      window.location.href = './home.html';
    }
  }, 500);
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = resolve;
  });
}

async function preloadCriticalAssets() {
  await Promise.all([
    preloadImage('img/hero.jpg'),
    preloadImage('img/posters/project-1.jpg'),
    preloadImage('img/posters/project-2.jpg'),
    preloadImage('img/posters/project-3.jpg'),
  ]);
}
