import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Pages from "./Pages.json";

function Home() {
    return (
        <div>
            <Navbar pages={ Pages } />
            <h1>this is the home page</h1>
        </div>
    );
}

export default Home;