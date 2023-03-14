import { Router } from 'express';
import { getExercises, postExercise, deleteExercise } from '../controllers/exercises';
import bodyParser from "body-parser";


export const exerciseRouter = Router();

exerciseRouter.use(bodyParser.json())
exerciseRouter.use(bodyParser.urlencoded({ extended: false }))

  /**
  * @method GET
  * @access public
  * @endpoint /exercises/get
  **/
exerciseRouter.get('/get', getExercises);


/**
 * @method POST
 * @access public
 * @endpoint /exercises/post
 **/
 exerciseRouter.post('/post', postExercise);

  
  // /**
  // * @method PUT
  // * @access public
  // * @endpoint /exercises/put/32323
  // **/
  //  exerciseRouter.put('/put/:id', (req, res) => {
  //   res.json({
  //       message: `PUT ${req.params.id} API for MERN Boilerplate`,
  //   });
  // });
  
// NOTE: the id will correspond to the exercise's id???
/**
* @method DELETE
* @access public
* @endpoint /exercises/delete
**/
exerciseRouter.delete('/delete', deleteExercise);

