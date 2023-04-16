// import { stringify } from "querystring";
// import { Button } from "react-bootstrap";

import { Button } from "@mui/material";

// TODO: replace string with ExerciseType that I need to define
export interface ILeftSideContainer {
    selectedExercises : string[]
}

export default function LeftSideContainer({selectedExercises} : ILeftSideContainer) {

    const routineBox : any = []
    
    selectedExercises.forEach( (lift : string) => {
        routineBox.push(
          <div> {lift} </div>
        );
      });
    
    return (
            <div className="left-side-container">
                
                <div className="create-routine-header">
                    <div>
                        Create routine page
                    </div>
                    <div>
                        <Button>Save Routine</Button>
                    </div>
                </div>

                <div className="routine-container">
                    <div> ROUTINE TITLE textbox </div>
                    <hr></hr>

                    {routineBox}
                    {/* <>
                    {
                        selectedExercises.map( (lift : string) => {
                              return <div> {lift} </div>
                          })
                    }
                    </> */}

                </div>

            </div>
    );
}