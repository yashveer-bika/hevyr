import { Button, Input, TextField } from "@mui/material";
import { useState } from "react";

let i = 0;

export default function SetRow({deleteRowEventHandler}: any) {
    const [complete, setComplete] = useState(false);
    
    function toggleComplete() {
        setComplete(!complete);
    }
    
    i += 1;

    return (
        <tr className={complete ? "complete-set" : "incomplete-set" }> 
            <td> <Input name="set"></Input> </td>
            {/* <td> <TextField id="outlined-basic" label="" variant="outlined" /> </td> */}
            {/* <td> <TextField id="outlined-basic" label="" variant="outlined" /> </td> */}
            {/* <td> 95 lbs </td> */}
            {/* <td> {i} </td> */}
            <td> <Input name="weight"></Input> </td>
            <td> <Input name="reps"></Input> </td>
            <td> 
                <Button className="check-button" variant="contained" 
                    onClick={toggleComplete} 
                    color={complete ? "secondary" : "success"} 
                >
                    Check
                </Button> 
            </td>
            <td> <Button onClick={deleteRowEventHandler}>DELETE</Button></td>
        </tr>
    );
}