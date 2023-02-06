import React, {useState} from "react";
import "../../styles/Exercises.css";
import { createPortal } from 'react-dom';
// import CreateExerciseWindow from "./CreateExerciseWindow";
import Popup from "../Util/PopUp";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Dropdown, DropdownButton } from "react-bootstrap";


function CreateExerciseButton() {
  const [isOpen, setIsOpen] = useState(false);

  function togglePop() {
    setIsOpen(!isOpen);
  }

  // old version
  // return (
  //   <div>
  //     <div className="btn" onClick={togglePop}>
  //       <button>+Create Exercise</button>
  //     </div>
  //     {seen ? <CreateExerciseWindow toggle={togglePop} /> : null}
  //   </div>
  // );

  // sample version from 
  // https://www.cluemediator.com/create-simple-popup-in-reactjs
  // return <div>
  //   <input
  //     type="button"
  //     value="Click to Open Popup"
  //     onClick={togglePop}
  //   />
  //   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  //   {isOpen && <Popup
  //     content={<>
  //       <b>Design your Popup</b>
  //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  //       <button>Test button</button>
  //     </>}
  //     handleClose={togglePop}
  //   />}
  // </div>


  
  // return (
  //   <div>
  //     <div className="btn" onClick={togglePop}>
  //       <button>+Create Exercise</button>
  //     </div>
  //     {isOpen && <Popup
  //       content={<>
  //         <CreateExerciseWindow toggle={togglePop}></CreateExerciseWindow>
  //       </>}
  //       handleClose={togglePop}
  //     />}

  //   </div>
  // );

  // using Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <label>
                Exercise Name:
                <input type="text" name="name" />
              </label>
            </div>

            <hr></hr>

            <div>
              Exercise Type
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

            <hr></hr>

            <div>
              Equipment
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

            <hr></hr>

            <div>
              Primary muscle group
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