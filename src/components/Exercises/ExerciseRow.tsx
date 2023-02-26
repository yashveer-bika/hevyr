// import React from "react";
import "../../styles/Exercises.css";
import TestImage from '../../assets/test.jpg'

// TODO: dynamically load images 
function ExerciseRow({props} : any) {
  return (
      <div className="exercise-row">
        {/* <img src={props.imgPath} alt="TODO: HOW TO NAME?" width="10px" height="10px"></img> */}

        {/* <img src='../../assets/test.jpg' alt="TODO: HOW TO NAME?" width="10px" height="10px"></img> */}

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