import { useState } from "react";
// import { Button } from "react-bootstrap";
import FilterableExerciseTable from "../Exercises/FilterableExerciseTable";
import LeftSideContainer from "./LeftSideContainer";


export default function ScreenContainer() {
    const [selectedExercises, setSelectedExercises] = useState<string[]>([]);

    // TODO: define exercise type in external file
    function addExerciseToRoutine(lift : string) {
        let newSelectedExercises : string[] = selectedExercises;
        newSelectedExercises.push(lift);
        setSelectedExercises(newSelectedExercises);
        console.log(selectedExercises);
    }
    

    return (
        <div className="screen-container">
                
            <LeftSideContainer selectedExercises={selectedExercises}/>
            

            {/* TODO: reconfigure the exercise cells since they are used on this page and the /exercises page */}
            <div className="right-side-container">
                <FilterableExerciseTable addable={true} addToScreen={addExerciseToRoutine} ></FilterableExerciseTable>
            </div>

        </div>
    );
}