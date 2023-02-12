import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Pages from "./Pages.json";

export default function Log() {
    return (
        <div>
            <Navbar pages={ Pages } />
            <h1>this is the log page. It doesn't exist on the Web App</h1>
        </div>
    );
}