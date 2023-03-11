import { Router } from 'express';
import { getExercises } from '../controllers/getExercises';

export const exerciseRouter = Router();
exerciseRouter.get('/', getExercises);
