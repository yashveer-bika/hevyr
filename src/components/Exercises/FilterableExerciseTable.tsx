// import React from "react";
import "../../styles/Exercises.css";
import EquipmentFilter from "./EquipmentFilter";
// import ExerciseTable from "./ExerciseTable";
import MuscleFilter from "./MuscleFilter";
import CreateExerciseButton from "./CreateExerciseButton"
// import SearchBar from "./SearchBar";
// import CreateExerciseWindow from "./CreateExerciseWindow";
import Table from "./Table";

function FilterableExerciseTable() {

  return (
    <div className="filterableExerciseTable">

        <div className="filters-container">
          <div> Filters </div>
          <EquipmentFilter></EquipmentFilter>
          <MuscleFilter></MuscleFilter>
        </div>
        
        <div className="library-create-exercise-header">
          <div className="library-header">Library</div> 
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