import ExerciseScreenRightContainer from "./ExerciseScreenRightContainer";
import FilterableExerciseTable from "./FilterableExerciseTable";
import "../../styles/Exercises.css";
// import { useState } from "react";

export default function ExercisePageContainer() {
    // const [activeExercise, setActiveExercise] = useState("");

    return (
        <div className="exercise-page-container">
            <FilterableExerciseTable addable={false} addToScreen={()=>null}></FilterableExerciseTable>
            <ExerciseScreenRightContainer></ExerciseScreenRightContainer>
        </div>
    );
}