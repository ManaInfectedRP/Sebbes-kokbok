import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecipeSection from './components/RecipeSection';
import RecipeModal from './components/RecipeModal';
import recipes, { CATEGORIES } from './data/recipes';
import { useLang } from './context/LanguageContext';
import { UI } from './translations';

export default function App() {
  const [selected, setSelected] = useState(null);
  const { lang } = useLang();
  const t = UI[lang];

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="content">
          {CATEGORIES.map(category => {
            const categoryRecipes = recipes.filter(r => r.categorySlug === category.slug);
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
