import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Pages from "./Pages.json"

function Feed() {
    return (
        <div>
            <Navbar pages={ Pages } />
            <h1>this is the feed page</h1>
        </div>
    );
}

export default Feed;