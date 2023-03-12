import { Request, Response } from 'express';
import { Exercise } from "../types/Data"
import { exerciseModel } from '../../models/Exercise';

// READ
// req.body corresponds to the mongoose Model.find() command
/*

// find all documents
await MyModel.find({}); ---> {}

// find all documents named john
await MyModel.find({ name: 'john').exec(); --> { name: 'john' }

// find all documents named john and at least 18
await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec(); --> { name: 'john', age: { $gte: 18 } }

*/
export async function getExercises(req: Request, res: Response) {
  // // hard-coded example
  // const exercises : Exercise[] = [
  //   {
      // "name": "Bench Press - Close Grip (Barbell)",
      // "equipment": "Barbell",
      // "primary": "Triceps",
      // "img": "default", // TODO: figure out a good type for img
      // "style": "Weight Reps",
      // "secondary": ["Chest", 'Shoulders']
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

  // TODO: set up some error checking on GET request (req.body)
  //    empty table case works

  const data = req.body
  // {} corresponds to full table
  // otherwise send an exercise name

  let exerciseTable;
  // const exerciseRow = exerciseModel.find({});
  try {
    exerciseTable = await exerciseModel.find(data).exec();
    res.send(exerciseTable);

  } catch (err : any) {
      // TODO: set up error handling
  }
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