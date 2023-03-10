import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import SettingScreenContainer from '../components/Settings/SettingScreenContainer';
import Pages from "./Pages.json";

function Settings() {
    return (
        <div>
            <Navbar pages={ Pages } />
            <SettingScreenContainer/>
        </div>
    );
}

export default Settings;