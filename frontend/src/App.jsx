import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecipeSection from './components/RecipeSection';
import RecipeModal from './components/RecipeModal';
import recipes, { CATEGORIES } from './data/recipes';
import { useLang } from './context/LanguageContext';
import { UI } from './translations';

const TYPE_FILTERS = [
  { key: 'all',   en: 'All',    sv: 'Alla' },
  { key: 'dish',  en: 'Dishes', sv: 'Rätter' },
  { key: 'sweet', en: 'Sweets', sv: 'Sötsaker' },
  { key: 'drink', en: 'Drinks', sv: 'Drycker' },
];

const SWEET_TAGS = new Set(['cake', 'cookies', 'dessert', 'baking', 'rice-cakes']);
const DRINK_TAGS = new Set(['drink', 'digestif']);

function getRecipeType(recipe) {
  const tags = recipe.tags || [];
  if (tags.some(t => DRINK_TAGS.has(t))) return 'drink';
  if (tags.some(t => SWEET_TAGS.has(t))) return 'sweet';
  return 'dish';
}

export default function App() {
  const [selected, setSelected] = useState(null);
  const [typeFilter, setTypeFilter] = useState('all');
  const { lang } = useLang();
  const t = UI[lang];

  const visibleRecipes = typeFilter === 'all'
    ? recipes
    : recipes.filter(r => getRecipeType(r) === typeFilter);

  return (
    <>
      <Header />
      <main>
        <Hero />

        <div className="filter-bar">
          <div className="filter-bar__inner">
            {TYPE_FILTERS.map(f => (
              <button
                key={f.key}
                className={`filter-bar__btn${typeFilter === f.key ? ' filter-bar__btn--active' : ''}`}
                onClick={() => setTypeFilter(f.key)}
              >
                {f[lang]}
              </button>
            ))}
          </div>
        </div>

        <div className="content">
          {CATEGORIES.map(category => {
            const categoryRecipes = visibleRecipes.filter(r => r.categorySlug === category.slug);
            if (categoryRecipes.length === 0) return null;
            return (
              <RecipeSection
                key={category.slug}
                category={category}
                recipes={categoryRecipes}
                onRecipeClick={setSelected}
              />
            );
          })}
        </div>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__brand">Kokboken</p>
          <p className="footer__copy">{t.footer.copy}</p>
        </div>
      </footer>

      {selected && <RecipeModal recipe={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
