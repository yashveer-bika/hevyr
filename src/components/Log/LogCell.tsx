import { Table } from "@mui/material";
import { useState } from "react";
import { Button } from "react-bootstrap";

/*
    TODO:
    - add previous weight/reps based on historical data
    - remove forced state update
*/




// TODO: see if I can remove this forced state update
//create your forceUpdate hook
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // A function that increment 👆🏻 the previous state like here 
    // is better than directly setting `setValue(value + 1)`
}

export default function LogCell() {

    const forceUpdate = useForceUpdate();


    const [exerciseSetRows, setExerciseSetRows] = useState<JSX.Element[]>([]);
    const [rowId, setRowId] = useState<number>(0);


    function deleteRowEventHandler(i : number) {
        // TODO: write out delete row logic
        let temp = exerciseSetRows;
        temp.splice(i, 1);
        setExerciseSetRows(temp);
        setRowId(rowId - 1);
        forceUpdate();
    }

    function addSetEventHandler() {

        // const idx = exerciseSetRows.length;

        // make an empty row
        const emptyRow = (
            <tr> 
                <td> {rowId} </td>
                <td> 95lbs x 3 </td>
                <td> 95 </td>
                <td> 3 </td>
                <td> <Button></Button> </td>
                <td> <Button onClick={() => deleteRowEventHandler(rowId)}>DELETE</Button></td>
            </tr>
        );


        let temp = exerciseSetRows;
        temp.push(emptyRow);
        setExerciseSetRows(temp);
        setRowId(rowId + 1);
        forceUpdate();
    }

    return (
        <div>
            <div>
                <div>
                    exercise img
                </div>
                <div>
                    exercise name (Front Squat)
                </div>
                <div>
                    options button 
                    {/* (reorder, replace, add to superset, remove exercise) */}
                </div>
            </div>

            <div>
                Add notes here...
            </div>

            <div>
                Rest timer: OFF
            </div>

            <div>
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
            </div>

            <div>
                <Button onClick={addSetEventHandler}>+ Add Set</Button>
            </div>
        </div>
        
    );
}