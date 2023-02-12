import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Pages from "./Pages.json";

function Routines() {
    return (
        <div>
            <Navbar pages={ Pages } />
            <h1>this is the routines page</h1>
        </div>
    );
}

export default Routines;