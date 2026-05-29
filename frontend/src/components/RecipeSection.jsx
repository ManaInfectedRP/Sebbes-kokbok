import RecipeCard from './RecipeCard';
import { useLang } from '../context/LanguageContext';
import { UI } from '../translations';

export default function RecipeSection({ category, recipes, onRecipeClick }) {
  const { lang } = useLang();
  const t = UI[lang].section;
  const label = category[lang];

  return (
    <section id={category.slug} className="section">
      <div className="section__header">
        <div className="section__title-group">
          <h2 className="section__title">{label}</h2>
        </div>
        <span className="section__count">
          {recipes.length} {recipes.length === 1 ? t.recipe : t.recipes}
        </span>
      </div>
      <div className="section__grid">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} onClick={onRecipeClick} />
        ))}
      </div>
    </section>
  );
}
