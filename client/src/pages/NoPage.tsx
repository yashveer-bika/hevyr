import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Pages from "./Pages.json";

function NoPage() {
    return (
        <div>
            <Navbar pages={ Pages } />
            <h1>404 error</h1>
        </div>
    );
}

export default NoPage;