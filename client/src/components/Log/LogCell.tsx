import { Table, TextField } from "@mui/material";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from '@mui/material';
import "../../styles/Log.css"
import TestImage from '../../assets/test.jpg'
import SetRow from "./SetRow";
import { EditableTable } from "../Sandbox/EditableTable";


/*
    TODO:
    - add previous weight/reps based on historical data
    - fix set update
    - fix set delete ordering
*/




// TODO: see if I can remove this forced state update
//create your forceUpdate hook
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // A function that increment 👆🏻 the previous state like here 
    // is better than directly setting `setValue(value + 1)`
}

export interface ILogCellProps {
    deleteLogCell(genId: number): void,
    deleteSet : any,  
    lift : string, 
    id : number,
}

export interface ILogCellData {
    setNumber : number,
    weight : number,
    reps : number
}

// TODO: set up deleteSet correctly
export default function LogCell({deleteLogCell, deleteSet, lift, id} : any) {

    const forceUpdate = useForceUpdate();

    const [activeGenIds, setActiveGenIds] = useState<number[]>([]);
    const [exerciseSetRows, setExerciseSetRows] = useState<JSX.Element[]>([]);
    const [genId, setGenId] = useState(0);

    function deleteRowEventHandler(id : number) {
        let idx = activeGenIds.indexOf(id);
        
        let newGenIds = activeGenIds;
        newGenIds.splice(idx, 1);
        setActiveGenIds(newGenIds);

        let newActiveSets = exerciseSetRows;
        newActiveSets.splice(idx, 1);
        setExerciseSetRows(newActiveSets);

        forceUpdate();
    }

    function addSetEventHandler() {

        // const idx = exerciseSetRows.length;

        // make an empty row
        // const emptyRow = (
        //     <tr> 
        //         <td> {} </td>
        //         <td> 95lbs x 3 </td>
        //         <td> 95 </td>
        //         <td> 3 </td>
        //         <td> <Button onClick={() => null} >Check</Button> </td>
        //         <td> <Button onClick={() => deleteRowEventHandler(genId)}>DELETE</Button></td>
        //     </tr>
        // );


        const emptyRow = (
            // TODO: change 0 parameter
            <SetRow deleteRowEventHandler={() => deleteRowEventHandler(genId)}></SetRow>
        );

        // update active sets
        let temp = exerciseSetRows;
        temp.push(emptyRow);
        setExerciseSetRows(temp);
        // update active gen ids
        let temp2 = activeGenIds;
        temp2.push(genId);
        setActiveGenIds(temp2);
        
        setGenId(genId+1); // update genId

        forceUpdate();

    }

    const [showOptionsModal, setShowOptionsModal] = useState(false);

    const optionsModal = (
        <Modal show={showOptionsModal} onHide={() => setShowOptionsModal(false) } animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Button>Reorder Exercises</Button>
                <Button>Replace Exercises</Button>
                <Button>Add to Superset </Button>
                <Button onClick={() => deleteLogCell(id) }>Remove Exercise</Button>

            
            </Modal.Body>

        </Modal>
    );

    return (
        <div className="log-cell-container">
            <div className="log-cell-header">
                <div>
                    <img className="exercise-img" src={TestImage} alt="TODO: load exercise"></img>
                    
                </div>
                <div>
                    {lift}
                </div>
                <div>

                    <Button onClick={() => setShowOptionsModal(true)}> options button  </Button>

                    {optionsModal}

                    {/* (reorder, replace, add to superset, remove exercise) */}
                </div>
            </div>

            <div>
               
                <TextField id="outlined-basic" label=" Add notes here..." variant="outlined" />

            </div>

            <div>
                Rest timer: OFF
            </div>

            {/* <div>
                <Table>
                    <thead>
                        <tr>
                            <th>SET</th>
                            <th>LBS</th>
                            <th>REPS</th>
                            <th>DONE?</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {exerciseSetRows}
                    </tbody>
                </Table>
            </div> */}

            <EditableTable></EditableTable>

            {/* <div>
                <Button onClick={addSetEventHandler}>+ Add Set</Button>
            </div> */}

        </div>
        
    );
}