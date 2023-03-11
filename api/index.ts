import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { exerciseRouter,  } from './routes/';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// // Basic homepage
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server is running');
// });

app.use('/exercises', exerciseRouter);

// TODO: add all my routes here

// Listen command is required
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;