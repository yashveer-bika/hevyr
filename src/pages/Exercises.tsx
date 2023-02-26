// import React from 'react';
import ExercisePageContainer from '../components/Exercises/ExercisePageContainer';
// import ExerciseTable from '../components/Exercises/ExerciseTable';
// import FilterableExerciseTable from '../components/Exercises/FilterableExerciseTable';
import Navbar from '../components/NavBar/NavBar';
import Pages from "./Pages.json";

// TODO: send real image paths

function Exercises() {
    return (
        // <div>
        //     <h1>this is the exercises page</h1>
        //     {/* <ExerciseTable></ExerciseTable> */}
        //     <ExerciseTable lifts={LIFTS}></ExerciseTable>
        // </div>
        // <FilterableExerciseTable lifts={LIFTS}> </FilterableExerciseTable>
        <div>
            <Navbar pages={ Pages } />
            <ExercisePageContainer></ExercisePageContainer>
        </div>
    );
}

export default Exercises;