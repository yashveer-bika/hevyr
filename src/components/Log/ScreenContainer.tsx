import { useState } from "react";
import { Button, ButtonGroup, Dropdown, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TestImage from '../../assets/test.jpg'
import "../../styles/Log.css"
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";

export default function ScreenContainer() {

    let navigate = useNavigate();

    const [showClocks, setShowClocks] = useState(false);

    function openClocksModal() {
        
    }

    function startTimer() {

    }

    const [activeWatch, setActiveWatch] = useState(false);


    // time in milliseconds (ms)
    const defaultTimerStartTime : number = 60 * 1000;

    const clockModal = 
                <Modal show={showClocks} onHide={() => setShowClocks(false)} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="clock-modal-title-container">
                            <div onClick={() => navigate("/settings")}>
                                <img className="timer-setting-img" src={TestImage} alt="todo: find proper img"></img>
                            </div>
                            <div className="clock-modal-title">
                                Clock
                            </div>
                        </div>
                       
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div>
                            <div className="clock-names">
                                <div className={!activeWatch ?  "active-clock" : "nonactive-clock"}  onClick={() => setActiveWatch(false)}>
                                    Timer
                                </div>
                                <div className={activeWatch ?  "active-clock" : "nonactive-clock"} onClick={() => setActiveWatch(true)}>
                                    Stopwatch
                                </div>
                            </div>
                            
                            {
                                activeWatch ?
                                    <div>
                                        <Stopwatch></Stopwatch>
                                    </div>
                                :
                                    <div>
                                        <Timer defaultTimerStartTime={defaultTimerStartTime} ></Timer>
                                    </div>
                            }

                            <div>

                            </div>


                        </div>

                    
                    </Modal.Body>

                </Modal>



    const [showCurrentWorkout, setShowCurrentWorkout] = useState(false);
    const [showStartEmptyWorkoutButton, setShowStartEmptyWorkoutButton] = useState(true);

    function startEmptyWorkout() {
        // TODO: set up whatever other triggers are needed
        setShowCurrentWorkout(true);
        setShowStartEmptyWorkoutButton(false);
    }

    function finishWorkoutEventHandler() {
        // TODO: set up whatever other triggers are needed

        // show popup
        setShowCurrentWorkout(false);
        setShowStartEmptyWorkoutButton(true);
    }

    const currentWorkoutInfoContainer = 
                    (<div className="current-workout-info-container">
                        <div className="log-bar">
                            <div>
                                Log Workout
                            </div>
                            <div className="clock-container" onClick={() => setShowClocks(true)}>
                                <img className="clock-img" src="icons8-alarm-clock-ios-16-glyph/icons8-alarm-clock-90.png" alt="TODO: why isn't showing up"/>
                            </div>

                            {clockModal}



                            <Button onClick={finishWorkoutEventHandler}> Finish </Button>
                        </div>

                        <div className="workout-info-bar">
                            <div>
                                <div>
                                    Duration
                                </div>
                                <div>
                                    10min 4s (example time)
                                </div>
                            </div>

                            <div>
                                <div>
                                    Volume
                                </div>
                                <div>
                                    0 lbs (example volume)
                                </div>
                            </div>

                            <div>
                                <div>
                                    Sets
                                </div>
                                <div>
                                    0 (example # of sets)
                                </div>
                            </div>

                        </div>

                        <div className="exercise-table-container">

                            <div className="getting-starting-view">
                                <div>
                                    Get Started
                                </div>
                                <div>
                                    Add an exercise to start your workout
                                </div>
                                <div>
                                    <Button>+ Add Exercise</Button>
                                </div>
                            </div>

                        </div>

                        <div className="workout-bottom-bar">
                            <Button>Settings</Button>
                            <Button>Discard Workout</Button>
                        </div>
                    </div>)

    return (

        <div className="screen-container">

            {
                showStartEmptyWorkoutButton ? (
                    <div>
                        <div> Quick start </div>
                        <div> 
                            <button onClick={startEmptyWorkout}> Start empty workout </button>
                        </div>
                    </div>
                ) : <></>
            }
            

            {/* TODO: add the routines components "just like the routines page, with explore" */}

            {
                showCurrentWorkout ?
                    (currentWorkoutInfoContainer)
                :
                    (<div></div>)
            }

            
            

        </div>
        
    );
}