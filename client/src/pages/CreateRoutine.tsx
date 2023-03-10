import { Button } from "react-bootstrap";
import FilterableExerciseTable from "../components/Exercises/FilterableExerciseTable";
import Navbar from "../components/NavBar/NavBar";
import Pages from "./Pages.json";


import ScreenContainer from "../components/CreateRoutine/ScreenContainer";
import "../styles/CreateRoutine.css";

function CreateRoutine() {

    // TODO: have active cells in the parent component


    return (
        <div>
            <Navbar pages={ Pages } />
           <ScreenContainer></ScreenContainer>
        </div>
    );
}

export default CreateRoutine;