import recipes, { CATEGORIES } from '../data/recipes';
import { useLang } from '../context/LanguageContext';
import { UI } from '../translations';

export default function Hero() {
  const { lang } = useLang();
  const t = UI[lang].hero;

  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">{t.eyebrow}</p>
        <h1 className="hero__title">
          Sebbe's<br />Favorite Foods
        </h1>
        <p className="hero__subtitle">{t.subtitle}</p>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">{recipes.length}</span>
            <span className="hero__stat-label">{t.recipesLabel}</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">{CATEGORIES.length}</span>
            <span className="hero__stat-label">{t.categoriesLabel}</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">∞</span>
            <span className="hero__stat-label">{t.occasionsLabel}</span>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>{t.scrollHint}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="hero__decoration" aria-hidden="true">
        <div className="hero__deco-ring hero__deco-ring--1" />
        <div className="hero__deco-ring hero__deco-ring--2" />
        <div className="hero__deco-ring hero__deco-ring--3" />
      </div>
    </section>
  );
}
