// import React from 'react';
// import AthleteSearchBox from '../components/Feed/AthleteSearchBox';
// import FeedContainer from '../components/Feed/FeedContainer';
import FeedScreenContainer from '../components/Feed/FeedScreenContainer';
import Navbar from '../components/NavBar/NavBar';
import Pages from "./Pages.json"

function Feed() {
    return (
        <div>
            <Navbar pages={ Pages } />
            <div>
                <FeedScreenContainer/>
            </div>
            
        </div>
    );
}

export default Feed;