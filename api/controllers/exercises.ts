import { Request, Response } from 'express';
import { Exercise } from "../types/Data"
import { exerciseModel } from '../../models/Exercise';
// READ
export function getExercises(req: Request, res: Response) {
  // // hard-coded example
  // const exercises : Exercise[] = [
  //   {
  //     "name": "Bench Press - Close Grip (Barbell)",
  //     "equipment": "Barbell",
  //     "primary": "Triceps",
  //     "img": "default", // TODO: figure out a good type for img
  //     "style": "Weight Reps",
  //     "secondary": ["Chest", 'Shoulders']
  //   },
  //   {
  //     "name": "Chin Up (Assisted)",
  //     "equipment": "Machine",
  //     "primary": "Lats",
  //     "img": "default", // TODO: figure out a good type for img
  //     "style": "Weight Reps",
  //     "secondary": ["Upper Back", 'Biceps']
  //   },
  //   {
  //     "name": "Chest Dip (Assisted)",
  //     "equipment": "Machine",
  //     "primary": "Chest",
  //     "img": "default", // TODO: figure out a good type for img
  //     "style": "Weight Reps",
  //     "secondary": ["Triceps", 'Shoulders']
  //   }
  // ];

  // var id = 0;

  // res.send(
  //   exercises.map((e : Exercise) => [id++, e])
  // );

  // TODO: get exercises from database


  let exerciseTable;
  const exerciseRow = exerciseModel.findOne();
  // TODO: set up error handling (empty table, etc.)

  res.send(exerciseRow);
  // res.send(exerciseTable);



}

// write a single exercise
export function postExercise(req : Request, res : Response) {
  const data : Exercise = req.body;



  // console.log(data.name);
  // console.log(data.equipment);


  // TODO: make sure data follows my desired type

  // TODO: check if exercise already exists
  
  // res.send('Data Received: ' + JSON.stringify(data));

  res.json(data);
  // res.send('POST request to post page');
}