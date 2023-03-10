import React from "react";
import TestImg from "../../assets/test.jpg"
import "../../styles/Profile.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

 

function TopBar() {
  return (
    <div className="top-bar-container">

      <div>
        <img src={TestImg} alt="test-img" className="profilePhoto" width={200}/>
      </div>
      
      <div className="div-container-row">

        <div className="title">
          username
        </div>

        <div className="social-data-block">
          <div>
            <div className="sub-text">
              Workouts
            </div>
            <div> 
              0
            </div>
          </div>

          <div>
            <div className="sub-text">
              Followers
            </div>
            <div> 
              0
            </div>
          </div>

          <div>
            <div className="sub-text">
              Following
            </div>
            <div> 
              0
            </div>
          </div>
          
          
        </div>

      </div>

    </div>
    
  );
}

// export default function TopBar({}: any) {

//     return (
//         <div className="topBar"> 
//             <img src={TestImg} alt="Logo" className="profilePhoto"/>

//             Username
//             Workouts 
//             Followers 
//             Following 
//         </div>
//     );

// }

export default TopBar;