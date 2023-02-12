import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Pages from "./Pages.json";

function Settings() {
    return (
        <div>
            <Navbar pages={ Pages } />
            <h1>this is the Settings page</h1>
        </div>
    );
}

export default Settings;