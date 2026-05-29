import { useEffect } from 'react';
import { useLang, loc } from '../context/LanguageContext';
import { UI } from '../translations';

const DIFFICULTY_COLOR = { Easy: '#22c55e', Medium: '#f59e0b', Hard: '#ef4444' };

export default function RecipeModal({ recipe, onClose }) {
  const { lang } = useLang();
  const t = UI[lang];
  const steps = recipe.steps[lang] ?? recipe.steps.en;
  const notes = loc(recipe.notes, lang);
  const difficulty = t.difficulty[recipe.difficulty];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={recipe.name}>
        <div className="modal__hero" style={{ background: recipe.gradient }}>
          <button className="modal__close" onClick={onClose} aria-label={t.modal.close}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <span className="modal__emoji" aria-hidden="true">{recipe.emoji}</span>
          <div className="modal__hero-text">
            <div className="modal__name-row">
              <h2 className="modal__name">{recipe.name}</h2>
              {(recipe.nameKo || recipe.nameCn || recipe.nameJa) && (
                <span className="modal__name-ko">{recipe.nameKo || recipe.nameCn || recipe.nameJa}</span>
              )}
            </div>
            <p className="modal__subtitle">{loc(recipe.subtitle, lang)}</p>
            <div className="modal__badges">
              <span className="modal__badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {recipe.time}
              </span>
              <span className="modal__badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                </svg>
                {t.card.serves} {recipe.servings}
              </span>
              <span className="modal__badge" style={{ '--dot': DIFFICULTY_COLOR[recipe.difficulty] }}>
                <span className="modal__badge-dot" />
                {difficulty}
              </span>
            </div>
          </div>
        </div>

        <div className="modal__body">
          <p className="modal__description">{loc(recipe.description, lang)}</p>

          <div className="modal__columns">
            <div className="modal__ingredients">
              <h3 className="modal__section-title">{t.modal.ingredients}</h3>
              <ul className="ingredients-list">
                {recipe.ingredients.map((ing, i) => {
                  const itemLabel = loc(ing.item, lang);
                  const isDivider = ing.amount === '' && itemLabel.startsWith('—');
                  if (isDivider) {
                    return <li key={i} className="ingredients-list__divider">{itemLabel}</li>;
                  }
                  return (
                    <li key={i} className="ingredients-list__item">
                      {ing.amount && <span className="ingredients-list__amount">{ing.amount}</span>}
                      <span className="ingredients-list__item-name">{itemLabel}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="modal__steps">
              <h3 className="modal__section-title">{t.modal.method}</h3>
              <ol className="steps-list">
                {steps.map((step, i) => (
                  <li key={i} className="steps-list__item">
                    <span className="steps-list__number">{i + 1}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {notes && (
            <div className="modal__notes">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p>{notes}</p>
            </div>
          )}

          {recipe.tags?.length > 0 && (
            <div className="modal__tags">
              {recipe.tags.map(tag => (
                <span key={tag} className="modal__tag">#{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
