import React from "react";
import "../../styles/Exercises.css";
import Dropdown from "../Util/Dropdown";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';


function EquipmentFilter() {

  const handleMenuOne = () => {
    console.log('clicked one');
  };

  const handleMenuTwo = () => {
    console.log('clicked two');
  };

  // use my utility Dropdown
  return (
    <Dropdown 
      className="equipmentFilter"
      trigger={<button>All Equipment</button>}
      menu={[
        <button onClick={handleMenuOne}>Menu 1</button>,
        <button onClick={handleMenuTwo}>Menu 2</button>,
      ]}
    />
  );


  // // use react-bootstrap (needs styling)
  // return (
  //   <Dropdown className="d-inline mx-2">
  //       <Dropdown.Toggle id="dropdown-autoclose-true">
  //         Default Dropdown
  //       </Dropdown.Toggle>

  //       <Dropdown.Menu>
  //         <Dropdown.Item href="#">Menu Item</Dropdown.Item>
  //         <Dropdown.Item href="#">Menu Item</Dropdown.Item>
  //         <Dropdown.Item href="#">Menu Item</Dropdown.Item>
  //       </Dropdown.Menu>
  //     </Dropdown>
  // );

  
  
  // return (
  //     <div className="equipmentFilter">
  //     </div>
  // );
}

export default EquipmentFilter;