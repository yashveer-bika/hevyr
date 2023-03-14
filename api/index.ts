import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { exerciseRouter,  } from './routes/';
import {exerciseModel} from "../models/Exercise"
import { Exercise } from './types/Data';
import { connectToDB } from "./controllers/db"
import cors from "cors"


dotenv.config();

const app: Express = express();
const port = process.env.PORT;
console.log(`Port = ${port}`)

connectToDB();

// // Basic homepage
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server is running');
// });

app.use(cors());

app.use('/exercises', exerciseRouter);

// // a document instance
// exerciseModel.build(
//   {
//       "name": "Plank",
//       "equipment": "None",
//       "primary": "Abdominals",
//       "img": "default", // TODO: figure out a good type for img
//       "style": "Duration",
//       "secondary": []
//     }
// ).save();

// TODO: add all my routes here

// Listen command is required
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;