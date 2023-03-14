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
}

function exerciseTypeCheck(data : Exercise) {
  
  if (data.name === undefined || data.equipment == undefined || 
      data.primary === undefined || data.img === undefined || 
      data.style === undefined || data.secondary === undefined) {
        throw new Error("data doesn't satisfy Exercise type");
  }
  else {

  }
}

// Write a single exercise
export function postExercise(req : Request, res : Response) {
  const data : Exercise = req.body;

  exerciseTypeCheck(data);

  // TODO: make sure data follows my desired type
  // TODO: check if exercise already exists

  // Write `data` into the exerciseModel
  const document = exerciseModel.build(data);
  document.save(); // TODO: error handling??
  
  // res.send('Data Received: ' + JSON.stringify(data));

  res.json(data);
  // res.send('POST request to post page');
}

export async function deleteExercise(req : Request, res : Response) {

  // const id = req.params.id;

  // TODO: make sure ID in db
  // TODO: delete row/document in table/collection
  const deleteCount = await exerciseModel.deleteOne(req.body);
  

  // TODO: respond with ????


  // res.json({
  //     message: `DELETE ${req.params.id} API for MERN Boilerplate`,
  // });
  
}

