import React, {useState} from "react";
import "../../styles/Exercises.css";
import { createPortal } from 'react-dom';
// import CreateExerciseWindow from "./CreateExerciseWindow";
import Popup from "../Util/PopUp";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Dropdown, DropdownButton } from "react-bootstrap";
import { defaultDropDownName } from "../Util/Dropdown";
import MuscleGroups from "./MuscleGroups.json";
import ExerciseTypes from "./ExerciseTypes.json";
import Equipment from "./Equipment.json";


function CreateExerciseButton() {
  const [show, setShow] = useState(false);
  const [exerciseType, setExerciseType] = useState(defaultDropDownName);
  const [equipment, setEquipment] = useState(defaultDropDownName);
  const [primaryMuscleGroup, setPrimaryMuscleGroup] = useState(defaultDropDownName);

  function resetCreateExerciseWindow() {
    setExerciseType(defaultDropDownName);
    setEquipment(defaultDropDownName);
    setPrimaryMuscleGroup(defaultDropDownName);
  }

  function handleClose() {
    setShow(false);
    resetCreateExerciseWindow();
    // TODO: write out the exerciseType, equipment and primaryMuscleGroup into the exercise database for the given user
  }
  const handleShow = () => setShow(true);
  const handleExerciseType = (exerciseType:string) => setExerciseType(exerciseType);
  const handleEquipment = (equipment:string) => setEquipment(equipment);
  const handlePrimaryMuscleGroup = (muscle:string) => setPrimaryMuscleGroup(muscle);



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Create Exercise
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Exercise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Circle spot to show image</p>
            <p>Add Image button</p>
            
            <div>
              <form className="form" id="addExerciseNameForm">
                <input type="text" className="input" id="addInput" placeholder="Exercise Name..." />
              </form>
            </div>

            <hr></hr>

            <div>
              Exercise Type
              <Dropdown className="d-inline mx-2">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    {exerciseType}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {
                      ExerciseTypes.map(
                        (e : any) => 
                        <Dropdown.Item onClick={(() => handleExerciseType(e.type))}>
                        {/* <Dropdown.Item> */}
                          {e.type}
                        </Dropdown.Item>
                      )
                    }
                  </Dropdown.Menu>
                </Dropdown>
            </div>


            <div>
              Equipment
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
            <hr></hr>

            <div>
              Primary muscle group
              <Dropdown className="d-inline mx-2">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    {primaryMuscleGroup}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {
                      MuscleGroups.map(
                        (e : any) => 
                        <Dropdown.Item onClick={(() => handlePrimaryMuscleGroup(e.muscle))}>
                        {/* <Dropdown.Item> */}
                          {e.muscle}
                        </Dropdown.Item>
                      )
                    }
                  </Dropdown.Menu>
                </Dropdown>
            </div>
            
            <hr></hr>

            <div>
              Other muscles
              <Dropdown className="d-inline mx-2" autoClose="outside">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    Select...
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </div>
          
          
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );






}

export default CreateExerciseButton;