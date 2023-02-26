import "../../styles/Exercises.css";
import TestImage from '../../assets/test.jpg'
import { Dropdown, DropdownButton } from "react-bootstrap";

// TODO: set up structure so I get 
// https://www.hevy.com/exercise/B4F2FF72 when I start on 
// https://www.hevy.com/exercise/

export default function ExerciseScreenRightContainer() {

    const statsHeader = 
        <div className="statistics-header">
            <div className="stats-title">
                Statistics
            </div>
            
            {/* TODO: set up pop up for HevyR Pro when clicking Year or All Time */}
            <div>
                <DropdownButton id="dropdown-basic-button" title="Last 12 weeks">
                    <Dropdown.Item>Last 12 weeks</Dropdown.Item>
                    <Dropdown.Item>Year</Dropdown.Item>
                    <Dropdown.Item>All Time</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>

    

    // // (weight reps, weighted bodyweight, weight+distance) style
    // const exerciseStatsContainerWeightReps = 
    //         <div className="exercise-statistics-container">
    //             {statsHeader}
    //             <div>
    //                 Heaviest weight
    //             </div>
    //             <div>
    //                 0 lbs
    //             </div>
    //             <div className="stats-plot">
    //                 No data in selected time frame
    //             </div>
    //             <div>
    //                 One Rep Max
    //             </div> 
    //             <div>
    //                 0 lbs
    //             </div>
    //             <div className="stats-plot">
    //                 No data in selected time frame
    //             </div>

    //             <div>
    //                 Best Set Volume
    //             </div> 
    //             <div>
    //                 0 lbs
    //             </div>
    //             <div className="stats-plot">
    //                 No data in selected time frame
    //             </div>

    //         </div>

    // // reps only style
    // const exerciseStatsContainerRepsOnly = 
    //         <div className="exercise-statistics-container">

    //             <div className="statistics-header">
    //                 <div className="stats-title">
    //                     Statistics
    //                 </div>
                    
    //                 {/* TODO: set up pop up for HevyR Pro when clicking Year or All Time */}
    //                 <div>
    //                     <DropdownButton id="dropdown-basic-button" title="Last 12 weeks">
    //                         <Dropdown.Item>Last 12 weeks</Dropdown.Item>
    //                         <Dropdown.Item>Year</Dropdown.Item>
    //                         <Dropdown.Item>All Time</Dropdown.Item>
    //                     </DropdownButton>
    //                 </div>
    //             </div>

    //             <div>
    //                 Most reps
    //             </div>

    //             <div>
    //                 0 reps
    //             </div>

    //             <div className="stats-plot">
    //                 No data in selected time frame
    //             </div>

    //         </div>

    
    // // duration distance style
    // const exerciseStatsContainerDurationDistance = 
    //         <div className="exercise-statistics-container">

    //            {statsHeader}

    //             <div>
    //                 <div>
    //                     Best Pace
    //                 </div>

    //                 <div>
    //                     9min 36s/mi
    //                 </div>

    //                 <div className="stats-plot">
    //                     No data in selected time frame
    //                 </div>
    //             </div>
    //         </div>



    return (
        <div className="exercise-screen-right-container">
            <div>
                Exercise title
            </div>
            
            <div className="img-info-container">
                <div className="exercise-animation-container">
                    <img src={TestImage} alt="TODO: set to correct img" className="exercise-animation" ></img>
                </div>
                
                <div className="exercise-info-container">
                    <div>
                        Info
                    </div>
                    <div>
                        Equipment: ???
                    </div>
                    <div>
                        Primary: ???
                    </div>
                </div>
            </div>

            {/* TODO: configure the bottom based on the selected exercise */}

            {/* {exerciseStatsContainerWeightReps} */}
            {/* {exerciseStatsContainerRepsOnly} */}
            {/* {exerciseStatsContainerDuration} */}
            {/* {exerciseStatsContainerDurationDistance} */}
            {/* {exerciseStatsContainerWeightDistance} */}

            
            
            
        </div>
    );
}