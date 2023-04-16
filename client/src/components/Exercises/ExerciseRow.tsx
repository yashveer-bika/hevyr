// import React from "react";
import "../../styles/Exercises.css";
import TestImage from '../../assets/test.jpg'
import { Button } from "@mui/material";
// import { Button } from "react-bootstrap";

export interface exerciseRowProperties { 
  lift: string;
  muscle: string;
  addable: boolean;
  imgPath: string;
  id: number;
  addToScreen(lift: string) : void;
}


// TODO: dynamically load images 
function ExerciseRow(props : exerciseRowProperties) {

  return (
      <div className="exercise-row">
        {/* <img src={props.imgPath} alt="TODO: HOW TO NAME?" width="10px" height="10px"></img> */}

        {/* <img src='../../assets/test.jpg' alt="TODO: HOW TO NAME?" width="10px" height="10px"></img> */}


        { props.addable ? 
          <div className="add-exercise-button">
            <Button onClick={()=> props.addToScreen(props.lift)}>+</Button>
          </div>
        :
          <div>

          </div>
        }

        <div className="exercise-photo-container">
          <img src={TestImage} className="exercise-photo" alt="TODO: HOW TO NAME?"></img>
        </div>

        

        <div className="list"> 
          <div className="lift-text">
            {props.lift}
          </div>          
          <div className="muscle-text">
            {props.muscle}
          </div>
        </div>
      </div>
  );
}

export default ExerciseRow;