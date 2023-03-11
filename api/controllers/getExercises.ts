import { Request, Response } from 'express';
import { Exercise } from "../../client/src/types/Data"

export function getExercises(req: Request, res: Response) {
  const exercises : Exercise[] = [
    {
      "name": "Bench Press - Close Grip (Barbell)",
      "equipment": "Barbell",
      "primary": "Triceps",
      "img": "", // TODO: figure out a good type for img
      "style": "Weight Reps",
      "secondary": ["Chest", 'Shoulders']
    },
    {
      "name": "Chin Up (Assisted)",
      "equipment": "Machine",
      "primary": "Lats",
      "img": "", // TODO: figure out a good type for img
      "style": "Weight Reps",
      "secondary": ["Upper Back", 'Biceps']
    },
    {
      "name": "Chest Dip (Assisted)",
      "equipment": "Machine",
      "primary": "Chest",
      "img": "", // TODO: figure out a good type for img
      "style": "Weight Reps",
      "secondary": ["Triceps", 'Shoulders']
    }
  ];

  var id = 0;

  res.send(
    exercises.map((e : Exercise) => [id++, e])
  );


  // res.send({
  //       name: "Bench Press - Close Grip (Barbell",
  //       equipment: "Barbell",
  //       primary: "Triceps",
  //       img: "",
  //       style: "Weight Reps",
  //       secondary: ["Chest", 'Shoulders']
  // });

  // res.send({
  //   users:[
  //   {id: 1, name: 'How to train your dragon' },
  //   {id: 2, name: 'Queen of Katwe'},
  //   ]
  // });

}