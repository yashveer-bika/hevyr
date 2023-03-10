import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import ScreenContainer from '../components/Routines/ScreenContainer';
import Pages from "./Pages.json";

function Routines() {
    return (
        <div>
            <Navbar pages={ Pages } />
            <ScreenContainer></ScreenContainer>            
        </div>
    );
}

export default Routines;