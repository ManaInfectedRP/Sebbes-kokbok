import { useLang, loc } from '../context/LanguageContext';
import { UI } from '../translations';

const DIFFICULTY_COLOR = { Easy: '#22c55e', Medium: '#f59e0b', Hard: '#ef4444' };

export default function RecipeCard({ recipe, onClick }) {
  const { lang } = useLang();
  const t = UI[lang];
  const difficulty = t.difficulty[recipe.difficulty];

  return (
    <article
      className="card"
      onClick={() => onClick(recipe)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(recipe)}
    >
      <div className="card__hero" style={{ background: recipe.gradient }}>
        <span className="card__emoji" aria-hidden="true">{recipe.emoji}</span>
        <span className="card__difficulty" style={{ '--dot': DIFFICULTY_COLOR[recipe.difficulty] }}>
          {difficulty}
        </span>
      </div>

      <div className="card__body">
        <div className="card__name-row">
          <h3 className="card__name">{recipe.name}</h3>
          {(recipe.nameKo || recipe.nameCn || recipe.nameJa) && (
            <span className="card__name-ko">{recipe.nameKo || recipe.nameCn || recipe.nameJa}</span>
          )}
        </div>
        <p className="card__subtitle">{loc(recipe.subtitle, lang)}</p>
        <p className="card__desc">{loc(recipe.description, lang)}</p>

        <div className="card__meta">
          <span className="card__meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            {recipe.time}
          </span>
          <span className="card__meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            </svg>
            {t.card.serves} {recipe.servings}
          </span>
        </div>

        <button className="card__cta" tabIndex={-1}>
          {t.card.viewRecipe}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </article>
  );
}
