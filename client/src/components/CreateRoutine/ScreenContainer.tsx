import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
// import { Button } from "react-bootstrap";
import FilterableExerciseTable from "../Exercises/FilterableExerciseTable";
import LeftSideContainer from "./LeftSideContainer";


export default function ScreenContainer() {
    const [selectedExercises, setSelectedExercises] = useState<string[]>([]);
    // const [reducerValue, forceUpdate] = useReducer(x => x+1, 0);

    useEffect(() => {

    }, [])

    // TODO: define exercise type in external file
    function addExerciseToRoutine(lift : string) {
        // let newSelectedExercises : string[] = selectedExercises;
        // newSelectedExercises.push(lift);
        setSelectedExercises(selectedExercises => [...selectedExercises, lift]);
        console.log(selectedExercises);
        // forceUpdate();
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