const express = require('express');
const recipes = require('../data/recipes');

const router = express.Router();

router.get('/', (_req, res) => res.json(recipes));

router.get('/categories', (_req, res) => {
  const seen = new Set();
  const categories = recipes
    .filter(r => {
      if (seen.has(r.categorySlug)) return false;
      seen.add(r.categorySlug);
      return true;
    })
    .map(r => ({ slug: r.categorySlug, label: r.category }));
  res.json(categories);
});

router.get('/category/:slug', (req, res) => {
  const filtered = recipes.filter(r => r.categorySlug === req.params.slug);
  if (filtered.length === 0) return res.status(404).json({ error: 'Category not found' });
  res.json(filtered);
});

router.get('/:id', (req, res) => {
  const recipe = recipes.find(r => r.id === req.params.id);
  if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
  res.json(recipe);
});

module.exports = router;
