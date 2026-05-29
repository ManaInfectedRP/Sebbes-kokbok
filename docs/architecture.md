# Architecture — Kokboken

## Overview

Kokboken is a static React SPA deployed on Render. All recipe data is bundled at build time — no API round-trip is needed for the frontend.

```
Internet
    │
    ▼
┌─────────────────────────────────────┐
│  Render Static Site                 │
│  kokboken-frontend.onrender.com     │
│  Vite build → nginx:alpine          │
│  SPA fallback: /* → index.html      │
└─────────────────────────────────────┘
```

An optional Express API exists in `api/` for programmatic access to recipe metadata, but the frontend does not depend on it.

### Frontend
- React SPA built with Vite, served by nginx
- All routes fall through to `index.html` (SPA routing)
- Static assets served with `Cache-Control: immutable` (fingerprinted by Vite)
- All recipe data imported at build time from `src/data/recipes.js`

### API (optional)
- Express.js REST API, no database (data is in-process)
- Health check at `/health`
- Stateless: safe to scale horizontally
- Not wired to the frontend — exists for external/programmatic use

---

## Recipe data schema

### Frontend (`frontend/src/data/recipes.js`)

```typescript
interface BilingualString {
  en: string;
  sv: string;
}

interface Ingredient {
  amount: string;        // e.g. "300 g" or "" for section dividers
  item: BilingualString; // e.g. { en: "ground beef", sv: "nötfärs" }
}

interface Recipe {
  id: string;              // URL slug, e.g. "kaldolmar"
  name: string;            // Primary name
  nameKo?: string;         // Hangul name (Korean recipes)
  nameCn?: string;         // Hanzi name (Chinese recipes)
  nameJa?: string;         // Kanji/Kana name (Japanese recipes)
  subtitle: BilingualString;
  categorySlug: string;    // "swedish" | "korean" | "chinese" | "japanese"
  description: BilingualString;
  time: string;            // e.g. "30 min + 48h"
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  gradient: string;        // CSS gradient for card/modal hero
  emoji: string;           // Single emoji
  ingredients: Ingredient[];
  steps: { en: string[]; sv: string[] };
  notes?: BilingualString;
  tags: string[];          // Lowercase, hyphenated
}
```

### API (`api/src/data/recipes.js`)

Metadata-only, English fields, no bilingual steps/ingredients:

```typescript
interface RecipeMeta {
  id: string;
  name: string;
  nameKo?: string;
  nameCn?: string;
  nameJa?: string;
  categorySlug: string;
  category: string;        // Display name e.g. "Swedish"
  time: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  emoji: string;
  tags: string[];
}
```

### Categories

```typescript
// frontend/src/data/recipes.js
export const CATEGORIES = [
  { slug: 'swedish',  en: 'Swedish',  sv: 'Svenska' },
  { slug: 'korean',   en: 'Korean',   sv: 'Koreanska' },
  { slug: 'chinese',  en: 'Chinese',  sv: 'Kinesiska' },
  { slug: 'japanese', en: 'Japanese', sv: 'Japanska' },
];
```

---

## Local development

```
Browser :3000
    │  (Vite dev server)
    └─ /  ──────────────▶ React HMR
```

Vite dev server proxies `/api/*` → `:3001` if the API is also running locally.

```bash
# Frontend only (sufficient for all UI work)
cd frontend && npm run dev

# With API
cd api && npm run dev   # separate terminal
```

---

## ADRs

### ADR-001: Static data in JS modules
**Decision**: Recipe data lives in JS modules, not a database.
**Reason**: 45 recipes don't justify operational overhead of a database. Data is read-only at runtime.
**Consequence**: Adding a recipe requires a deploy. Accepted; extracting to Postgres is straightforward when needed.

### ADR-002: Frontend bundles its own copy of recipe data
**Decision**: `frontend/src/data/recipes.js` is the source of truth for the UI; `api/src/data/recipes.js` is a separate metadata-only copy.
**Reason**: The frontend is a static build. Bundling data at build time gives instant load with zero API dependency.
**Consequence**: Recipe data must be kept in sync between the two files manually. Accepted for current scale.

### ADR-003: Frontend-only Render deployment
**Decision**: `render.yml` deploys only the frontend static site.
**Reason**: The frontend has no runtime API dependency. Deploying a separate API service adds cost and complexity with no benefit for the current use case.
**Consequence**: The API in `api/` is not publicly deployed but remains available for local use or future deployment.

### ADR-004: Language-specific name fields
**Decision**: Korean, Chinese, and Japanese native-script names use separate fields (`nameKo`, `nameCn`, `nameJa`) rather than a generic `nameNative`.
**Reason**: Keeps the origin of each script explicit and allows cuisine-specific rendering logic if needed.
**Consequence**: A new cuisine requires a new field. Accepted; the pattern is consistent and readable.
