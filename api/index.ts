import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import movieRouter from "./routes/getMovies"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server is running');
});

app.use('/movies', movieRouter)

// TODO: add all my routes here

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;