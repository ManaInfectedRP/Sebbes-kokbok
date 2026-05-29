const express = require('express');
const cors = require('cors');
const recipesRouter = require('./routes/recipes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/recipes', recipesRouter);

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Kokboken API running on port ${PORT}`);
});
