import React from "react";
import "../../styles/Exercises.css";
// import Dropdown from "../Util/Dropdown";
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from "react";
import Equipment from "./Equipment.json"
import 'bootstrap/dist/css/bootstrap.min.css';


function EquipmentFilter() {

  const [equipment, setEquipment] = useState("All Equipment");

  const handleEquipment = (equipment:string) => setEquipment(equipment);


  // // use my utility Dropdown
  // return (
  //   <Dropdown 
  //     className="equipmentFilter"
  //     trigger={<button>All Equipment</button>}
  //     menu={[
  //       <button onClick={handleMenuOne}>Menu 1</button>,
  //       <button onClick={handleMenuTwo}>Menu 2</button>,
  //     ]}
  //   />
  // );


  // use react-bootstrap (needs styling)
  return (
    <div className="equipment-filter">
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          {equipment}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {

            Equipment.map(
              (e : any) => 
              <Dropdown.Item onClick={(() => handleEquipment(e.equipment))}>
              {/* <Dropdown.Item> */}
                {e.equipment}
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

export default EquipmentFilter;