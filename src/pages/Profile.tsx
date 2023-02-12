import React from 'react';
import Statistics from '../components/Profile/Statistics';
import TopBar from "../components/Profile/TopBar";
import Workouts from '../components/Profile/Workouts';
import "../styles/Profile.css"
import Dashboard from '../components/Profile/Dashboard';
import Navbar from '../components/NavBar/NavBar';
import Pages from "./Pages.json";

function Profile() {
    return (
        <div>
            <Navbar pages={ Pages } />
            
            <div className='page-container'>
            
            <div>
                <div className='div-container-row'> 

                    <TopBar/>
                    
                    <div className='div-container-col'> 
                        <Workouts></Workouts>
                        <div className='div-container-row'> 
                            <Statistics></Statistics>
                            <Dashboard></Dashboard>
                        </div>
                    </div>
            
                </div>
            </div>
            
        </div>        
        </div>
        
    );
}

export default Profile;