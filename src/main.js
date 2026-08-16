import './styles/main.scss';

import { initModal } from './components/modal';
import { initBlink } from './components/blink';
import { initBurger } from './components/burger';
import { initContactForm } from './components/contactForm';

import { initHome } from './pages/home';
import { initReview } from './pages/review';
import { initService } from './pages/service';
import { initIndex } from './pages/index';

function initGlobal() {
  initModal();
  initBlink();
  initBurger();
  initContactForm();
}

function initPage() {
  const path = window.location.pathname;

  if (path.includes('home')) return initHome();
  if (path.includes('review')) return initReview();
  if (path.includes('service')) return initService();

  if (
    path === '/' ||
    path.includes('index') ||
    path.includes('video-production')
  ) {
    return initIndex();
  }
}

function startApp() {
  initGlobal();
  initPage();

  const body = document.body;
  body.classList.add('is-loaded');

  body.style.opacity = '1';
  body.style.transition = 'opacity 0.4s ease-in-out';
}

startApp();
