import React, {useState} from "react";
import "../../styles/Exercises.css";
import { createPortal } from 'react-dom';
import CreateExerciseWindow from "./CreateExerciseWindow";

function CreateExerciseButton() {
  // state = {
  //   seen: false
  // };

  const [seen, setSeen] = useState(false);

  function togglePop() {
    setSeen(!seen);
  }

  // togglePop = () => {
  //   this.setState({
  //     seen: !this.state.seen
  //   });
  // };

  // render() {
  return (
    <div>
      <div className="btn" onClick={togglePop}>
        <button>+Create Exercise</button>
      </div>
      {seen ? <CreateExerciseWindow toggle={togglePop} /> : null}
    </div>
  );
  // }
}

export default CreateExerciseButton;