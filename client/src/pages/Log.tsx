import React from 'react';
import ScreenContainer from '../components/Log/ScreenContainer';
import Navbar from '../components/NavBar/NavBar';
import Pages from "./Pages.json";

export default function Log() {
    return (
        <div>
            <Navbar pages={ Pages } />
            <ScreenContainer></ScreenContainer>
        </div>
    );
}