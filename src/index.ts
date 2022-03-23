import express from 'express';

const app: express.Application = express();
const PORT = 300;

app.get('/', (req, res) => {
  res.send('helow world');
});

app.listen(PORT, () => {
  console.log(`srever is runung at http://localhost:${PORT}`);
});
