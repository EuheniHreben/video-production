import { initPortfolioSlider } from '../components/initPortfolioSlider';
import { initPortfolioModal } from '../components/initPortfolioModal';
import { initNewsModal } from '../components/newsRender';

export function initHome() {
  initPortfolioSlider();
  initPortfolioModal();
  initNewsModal();
}