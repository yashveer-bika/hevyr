import TestImg from "../../assets/test.jpg"
import "../../styles/Profile.css";

// TODO: dynamically load images 
function WorkoutCell({props} : any) {
    const sets = props.sets.length;

  return (
      <div className="workout-cell">
        <img src={TestImg} alt="test-img" className="exercise-photo" width={80}/>

        <a> {sets} sets {props.name} ({props.equipment}) </a>
      </div>
  );
}

export default WorkoutCell;