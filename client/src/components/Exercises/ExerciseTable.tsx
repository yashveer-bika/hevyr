import React from "react";
import "../../styles/Exercises.css";
import ExerciseRow from "./ExerciseRow";
import LIFTS from "./ListData.json";

// function ExerciseTable() {
//   return (
//       <div className="exerciseTable">
//         <ul>
//             <li> Front Squat </li>
//             <li> Squat </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//             <li> Clean </li>
//         </ul>
//       </div>
    
//   );
// }

function ExerciseTable() {
  const rows : any = [];

  LIFTS.forEach( (lift : { lift: string; muscle: string; imgPath: string; id: number; }) => {
    rows.push(
      <ExerciseRow muscle={lift.muscle} id={lift.id} lift={lift.lift} imgPath={lift.imgPath} addable={false} addToScreen={()=>null}/>
    );
    rows.push(
      <hr></hr>
    );
  });

  return (
    <nav className="exerciseTable">
       
          {rows}
        
    </nav>
  );
}

export default ExerciseTable;