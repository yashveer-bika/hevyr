import React from "react";
import "../../styles/Exercises.css";
import EquipmentFilter from "./EquipmentFilter";
import ExerciseTable from "./ExerciseTable";
import MuscleFilter from "./MuscleFilter";
import CreateExerciseButton from "./CreateExerciseButton"
import SearchBar from "./SearchBar";
// import CreateExerciseWindow from "./CreateExerciseWindow";
import Table from "./Table";

function FilterableExerciseTable( {lifts} : any) {

  return (
    <div className="filterableExerciseTable">
        <h1>this is the exercises page</h1>
        <div>
          <a> Filters </a>
          <EquipmentFilter></EquipmentFilter>
          <MuscleFilter></MuscleFilter>
        </div>
        
        <div>
          <a> Library </a>
          <CreateExerciseButton></CreateExerciseButton>
        </div>
        
        <Table></Table>

        {/* <SearchBar></SearchBar> */}

        {/* <hr></hr> */}
        
        {/* <ExerciseTable></ExerciseTable> */}
        {/* <ExerciseTable lifts={lifts}></ExerciseTable> */}
    </div>
  );
}

export default FilterableExerciseTable;