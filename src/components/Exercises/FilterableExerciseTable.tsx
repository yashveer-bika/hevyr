import React from "react";
import "../../styles/Exercises.css";
import EquipmentFilter from "./EquipmentFilter";
import ExerciseTable from "./ExerciseTable";
import MuscleFilter from "./MuscleFilter";
import CreateExerciseButton from "./CreateExerciseButton"
import SearchBar from "./SearchBar";

function FilterableExerciseTable( {lifts} : any) {

  return (
      <div className="filterableExerciseTable">
          <h1>this is the exercises page</h1>
          <a> Filters </a>
          <EquipmentFilter></EquipmentFilter>
          <MuscleFilter></MuscleFilter>
          <a> Library </a>
          <CreateExerciseButton></CreateExerciseButton>
          <SearchBar></SearchBar>
          {/* <ExerciseTable></ExerciseTable> */}
          <ExerciseTable lifts={lifts}></ExerciseTable>
      </div>
  );
}

export default FilterableExerciseTable;