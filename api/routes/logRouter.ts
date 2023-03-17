import { Router } from 'express';
import bodyParser from "body-parser";
import { basePage, deleteLog, getLog, postLog } from '../controllers/log';

// TODO: set up log API

export const logRouter = Router();

logRouter.use(bodyParser.json())
logRouter.use(bodyParser.urlencoded({ extended: false }))

logRouter.get('/', basePage);

  /**
  * @method GET
  * @access public
  * @endpoint /log/get
  **/
  logRouter.get('/get', getLog);


/**
 * @method POST
 * @access public
 * @endpoint /log/post
 **/
 logRouter.post('/post', postLog);

  
  // /**
  // * @method PUT
  // * @access public
  // * @endpoint /log/put/32323
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
* @endpoint /log/delete
**/
logRouter.delete('/delete', deleteLog);

