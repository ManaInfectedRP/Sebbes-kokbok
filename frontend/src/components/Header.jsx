import { useState, useEffect } from 'react';
import { CATEGORIES } from '../data/recipes';
import { useLang } from '../context/LanguageContext';
import { UI } from '../translations';

export default function Header() {
  const { lang, setLang } = useLang();
  const t = UI[lang];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = CATEGORIES.map(c => document.getElementById(c.slug)).filter(Boolean);
      const current = sections.findLast(el => el.getBoundingClientRect().top <= 120);
      setActiveSlug(current?.id ?? '');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (slug) => {
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <button
          className="header__brand"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="header__logo">Kokboken</span>
          <span className="header__tagline">{t.header.tagline}</span>
        </button>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.slug}
              className={`header__nav-link${activeSlug === cat.slug ? ' header__nav-link--active' : ''}`}
              onClick={() => scrollTo(cat.slug)}
            >
              {cat[lang]}
            </button>
          ))}
        </nav>

        <div className="header__lang-toggle">
          <button
            className={`header__lang-btn${lang === 'en' ? ' header__lang-btn--active' : ''}`}
            onClick={() => setLang('en')}
          >EN</button>
          <button
            className={`header__lang-btn${lang === 'sv' ? ' header__lang-btn--active' : ''}`}
            onClick={() => setLang('sv')}
          >SV</button>
        </div>

        <button
          className={`header__hamburger${menuOpen ? ' header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="header__mobile-nav">
          {CATEGORIES.map(cat => (
            <button key={cat.slug} className="header__mobile-link" onClick={() => scrollTo(cat.slug)}>
              {cat[lang]}
            </button>
          ))}
          <div className="header__mobile-lang">
            <button
              className={`header__lang-btn${lang === 'en' ? ' header__lang-btn--active' : ''}`}
              onClick={() => setLang('en')}
            >EN</button>
            <button
              className={`header__lang-btn${lang === 'sv' ? ' header__lang-btn--active' : ''}`}
              onClick={() => setLang('sv')}
            >SV</button>
          </div>
        </div>
      )}
    </header>
  );
}
