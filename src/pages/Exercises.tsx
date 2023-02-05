import React from 'react';
import ExerciseTable from '../components/Exercises/ExerciseTable';
import FilterableExerciseTable from '../components/Exercises/FilterableExerciseTable';

const LIFTS = [
    {lift: "21s Bicep Curls", muscle: "Biceps", imgPath: "../img/test.jpeg"},
    {lift: "Ab Scissors", muscle: "Abdominals", imgPath: "../img/test.jpeg"},
    {lift: "Ab Wheel", muscle: "Abdominals", imgPath: "../img/test.jpeg"},
    {lift: "Aerobics", muscle: "Cardio", imgPath: "../img/test.jpeg"},
    {lift: "Arnold Press (Dumbbell)", muscle: "Shoulders", imgPath: "../img/test.jpeg"},
    {lift: "Around the World", muscle: "Chest", imgPath: "../img/test.jpeg"},
    {lift: "Assisted Pistol Squat", muscle: "Quadriceps", imgPath: "../img/test.jpeg"},
    {lift: "Back Extension (GHD)", muscle: "Lower Back", imgPath: "../img/test.jpeg"},
  ];

// TODO: send real image paths

function Exercises() {
    return (
        // <div>
        //     <h1>this is the exercises page</h1>
        //     {/* <ExerciseTable></ExerciseTable> */}
        //     <ExerciseTable lifts={LIFTS}></ExerciseTable>
        // </div>
        <FilterableExerciseTable lifts={LIFTS}> </FilterableExerciseTable>
    );
}

export default Exercises;