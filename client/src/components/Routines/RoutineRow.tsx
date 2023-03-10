import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../../styles/Routines.css"

export interface IRoutineRowProps {
    routineId : string
}

export default function RoutineRow({routineId} : IRoutineRowProps ) {
    let navigate = useNavigate();


    return (
        <div className="routine-row">
            <div onClick={() => navigate(`${routineId}`) }> 
                Full Body A
            </div>

            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        ...
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => navigate(`/edit-routine/${routineId}`)}>Edit Routine</Dropdown.Item>
                        <Dropdown.Item onClick={()=>null} > Duplicate Routine</Dropdown.Item>
                        <Dropdown.Item onClick={()=>null} > Delete Routine</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}