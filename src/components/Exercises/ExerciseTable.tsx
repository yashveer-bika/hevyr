import React from "react";
import "../../styles/Exercises.css";
import ExerciseRow from "./ExerciseRow";

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

function ExerciseTable( {lifts} : any) {
  const rows : any = [];

  lifts.forEach( (lift : any) => {
    rows.push(
      <ExerciseRow props={lift} />
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