import React from "react";
import "../../styles/Exercises.css";
import TestImage from '../../assets/test.jpg'

// TODO: dynamically load images 
function ExerciseRow({props} : any) {
  return (
      <div className="exerciseRow">
        {/* <img src={props.imgPath} alt="TODO: HOW TO NAME?" width="10px" height="10px"></img> */}

        {/* <img src='../../assets/test.jpg' alt="TODO: HOW TO NAME?" width="10px" height="10px"></img> */}

        <img src={TestImage} alt="TODO: HOW TO NAME?" width="50px" height="50px"></img>

        <a> {props.lift} </a>
        <a> {props.muscle} </a>
      </div>
  );
}

export default ExerciseRow;