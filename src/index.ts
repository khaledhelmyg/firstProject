import express from 'express';
import router from './routes';
import File from './file';
const app: express.Application = express();
const PORT = 5000;

app.use(router);

app.get('/', (req, res) => {
  res.send('helow world');
});

app.listen(PORT, async (): Promise<void> => {
  await File.createThumbPath();

  const url: string = `\x1b[2mhttp://localhost:${PORT}\x1b[0m`;
  console.log(`Please open ${url} to review the project ...`);
  console.log(`srever is runung at http://localhost:${PORT}`);
});
export default app;
