import { Button } from "react-bootstrap";
import FilterableExerciseTable from "../components/Exercises/FilterableExerciseTable";
import Navbar from "../components/NavBar/NavBar";
import Pages from "./Pages.json";

function CreateRoutine() {
    return (
        <div>
            <Navbar pages={ Pages } />
            <div>
                <div>
                    Create routine page
                    <Button>Save Routine</Button>
                </div>
                <FilterableExerciseTable></FilterableExerciseTable>
            </div>
           
        </div>
    );
}

export default CreateRoutine;