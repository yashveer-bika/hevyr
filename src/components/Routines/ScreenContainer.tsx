import { useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import RoutineRow from "./RoutineRow";
import "../../styles/Routines.css"

export default function ScreenContainer() {
    let navigate = useNavigate();
    const [showNewFolderModal, setShowNewFolderModal] = useState(false);
    

    // TODO: set up backend so I fetch this data
    const routineCount : number = 1;

    function closeModal() {
        setShowNewFolderModal(false);
    }

    const newFolderButton = 
            <div>
                <Button onClick={() => setShowNewFolderModal(true)} >
                    New Folder
                </Button>

                <Modal show={showNewFolderModal} onHide={closeModal} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>Create New Folder</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Cancel
                        </Button>

                        <Button variant="primary" onClick={closeModal}>
                            Create Folder
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>

    return (
        <div className="screen-container">
            <div className="left-container">
                <div> My Routines </div>

                <div> 
                    <Button onClick={() => navigate("/create-routine")} >
                        New Routine
                    </Button>
                </div>

                { (routineCount === 0) ? <div> </div> : newFolderButton }
            </div>

            <div className="routines-container">
                <div>
                    <div> My Routines ({routineCount}) </div>

                    <RoutineRow routineId={"sample-exercise-1"}></RoutineRow>
                    
                </div>

            </div>
            

        </div>
    );
}