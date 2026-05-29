# Kokboken — Sebbe's Favorite Foods

A personal recipe collection spanning four cuisines: Swedish husmanskost, Korean royal court cuisine, Chinese home cooking, and Japanese everyday classics. Scroll-driven single page with recipe cards grouped by cuisine, click-through modals with full bilingual (English/Swedish) ingredients and method.

Built with **React + Vite**, deployed as a static site on **Render**.

---

## Quick start

```bash
cd frontend && npm install && npm run dev
# Hot reload at http://localhost:3000
```

---

## Deploy to Render

1. Push this repo to GitHub.
2. In the [Render dashboard](https://dashboard.render.com), click **New → Blueprint**.
3. Connect your GitHub repo — Render will detect `render.yml` automatically.
4. Click **Apply**. One service is created:
   - `kokboken-frontend` — static site at `https://kokboken-frontend.onrender.com`

---

## Project structure

```
Kokboken/
├── frontend/               React + Vite SPA
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx          Sticky nav + EN/SV language toggle
│   │   │   ├── Hero.jsx            Full-width landing section with stats
│   │   │   ├── RecipeSection.jsx   Cuisine section + card grid
│   │   │   ├── RecipeCard.jsx      Clickable recipe card
│   │   │   └── RecipeModal.jsx     Full recipe detail overlay
│   │   ├── context/
│   │   │   └── LanguageContext.jsx EN/SV state + loc() helper
│   │   ├── data/
│   │   │   └── recipes.js          45 bilingual recipes + CATEGORIES export
│   │   ├── translations.js         UI strings in EN and SV
│   │   └── index.css               Design system + component styles
│   └── Dockerfile                  Multi-stage: Vite build → nginx:alpine
│
├── api/                    Node.js + Express REST API (optional, not used by frontend)
│   ├── src/
│   │   ├── index.js            Express server, port 3001
│   │   ├── routes/recipes.js   GET /recipes, /:id, /category/:slug
│   │   └── data/recipes.js     Canonical recipe metadata (English only)
│   └── Dockerfile
│
├── k8s/                    Kubernetes manifests (optional)
├── render.yaml             Render Blueprint (frontend static site only)
├── docker-compose.yml      Local full-stack development
└── docs/architecture.md
```

---

## Language support

The site supports **English** and **Swedish** via the EN/SV toggle in the header. All recipe descriptions, ingredients, method steps, notes, and UI strings are translated.

Native script names are preserved in both languages:
- Korean recipes show Hangul (e.g. 불고기)
- Chinese recipes show Hanzi (e.g. 麻婆豆腐)
- Japanese recipes show Kanji/Kana (e.g. 親子丼)

The language state lives in `LanguageContext`. The `loc(field, lang)` helper resolves bilingual fields (`{ en: '...', sv: '...' }`) or a plain string.

---

## Recipes

45 recipes across 4 cuisines.

| Cuisine | Count | Highlights |
|---------|-------|------------|
| Swedish | 20 | Köttbullar, Kanelbullar, Semlor, Kåldolmar, Fish 'n' Chips, Korv med Makaroner |
| Korean  | 15 | Bulgogi, Bibimbap, Baechu Kimchi, Galbi-jjim, Japchae |
| Chinese |  5 | Mapo Tofu, Kung Pao Chicken, Dan Dan Noodles |
| Japanese|  5 | Gyoza, Katsudon, Teriyaki Chicken, Oyakodon |

---

## Adding recipes

Add a recipe object to both `frontend/src/data/recipes.js` and `api/src/data/recipes.js`. Translatable fields use `{ en: '...', sv: '...' }` shape. Steps use `{ en: [...], sv: [...] }`. See `docs/architecture.md` for the full schema.
