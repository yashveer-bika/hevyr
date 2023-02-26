import React from "react";
import "../../styles/Exercises.css";
// import Dropdown from "../Util/Dropdown";
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from "react";
import Muscles from "./MuscleGroups.json"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function MuscleFilter() {

  const [muscle, setMuscle] = useState("All Muscles");

  const handleMuscle = (muscle:string) => setMuscle(muscle);

  // use react-bootstrap (needs styling)
  return (
    <div className="muscle-filter">
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          {muscle}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {

            Muscles.map(
              (e : any) => 
              <Dropdown.Item onClick={(() => handleMuscle(e.muscle))}>
              {/* <Dropdown.Item> */}
                {e.muscle}
              </Dropdown.Item>
            )      
          }
        </Dropdown.Menu>
      </Dropdown>
    </div>
    
  );

  
  
  // return (
  //     <div className="equipmentFilter">
  //     </div>
  // );
}

