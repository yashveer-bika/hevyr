import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Pages from "./Pages.json";


export interface IRoutineDisplayProps {
    routineId : string
}

function RoutineDisplay({routineId} : IRoutineDisplayProps) {

    // TODO: render based on the routine id given
    return (
        <div>
            <Navbar pages={ Pages } />
            <h1>This is routine display page for {routineId} </h1>

        </div>
    );
}

export default RoutineDisplay;