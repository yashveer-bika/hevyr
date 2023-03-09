import { useState } from "react";
import { Button, ButtonGroup, Dropdown, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useStopwatch } from "react-timer-hook";
import TestImage from '../../assets/test.jpg'
import "../../styles/Log.css"
import FilterableExerciseTable from "../Exercises/FilterableExerciseTable";
import LogCell from "./LogCell";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // A function that increment 👆🏻 the previous state like here 
    // is better than directly setting `setValue(value + 1)`
}

export default function ScreenContainer() {

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
      } = useStopwatch({ autoStart: false });

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
    const startTime = Date.now();

    function startEmptyWorkout() {
        // TODO: set up whatever other triggers are needed
        setShowCurrentWorkout(true);
        setShowStartEmptyWorkoutButton(false);

        // trigger the duration timer to start
        start();

    }

    function finishWorkoutEventHandler() {
        // TODO: set up whatever other triggers are needed

        // show popup
        setShowCurrentWorkout(false);
        setShowStartEmptyWorkoutButton(true);
    }

    const [showExerciseDatabaseModal, setShowExerciseDatabaseModal] = useState(false);

    // TODO: use a more complete custom type instead of string (JSX.Element)
    // TODO: make the switch over to full component with image, sets, lbs, reps, etc.
    const [activeExercises, setActiveExercises] = useState<string[]>([]);

    const [activeExerciseCells, setActiveExerciseCells] = useState<JSX.Element[]>([]);

    const [rowArray, setRowArray] = useState<number[]>([]);

    const forceUpdate = useForceUpdate();

    let runningId = 0;

    function deleteRowEventHandler(genId : number) {
        let temp = rowArray;
        var index = temp.indexOf(genId);
        console.log(`Delete index: ${index}`);
        let temp2 = activeExerciseCells;
        temp2.splice(index, 1);
        console.log(`Updated active: ${activeExerciseCells.map((x : JSX.Element) => x)}`);
        setActiveExerciseCells(temp2);
        forceUpdate();
        
    }

    // TODO: use a more complete custom type instead of string
    function addExerciseToPage(lift : string) {

        // let newActiveExercises : string[] = activeExercises;
        // newActiveExercises.push(lift);
        // setActiveExercises(newActiveExercises);
        // console.log(activeExercises);

        let newActiveExercises : JSX.Element[] = activeExerciseCells;
        // TODO: create deleteLift event trigger
        let newExercise = < LogCell lift={lift} id={runningId} deleteLogCell={deleteRowEventHandler} /> ;
        newActiveExercises.push( 
            newExercise
        );
        setActiveExerciseCells(newActiveExercises);

        let temp = rowArray;
        temp.push( runningId );
        setRowArray(temp);
        runningId += 1;

        // console.log(activeExercises);

        // update rowArray that stores the id of each row on display



        // close exerciseDatabaseModal
        setShowExerciseDatabaseModal(false);

    }

    const exerciseDatabaseModal = 
        <Modal show={showExerciseDatabaseModal} onHide={() => setShowExerciseDatabaseModal(false)} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>
                Select An Exercise
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <FilterableExerciseTable addable={true} addToScreen={addExerciseToPage}></FilterableExerciseTable>
            
            </Modal.Body>

        </Modal>

    function addExerciseEventHandler() {
        // TODO: trigger a modal view that allows me to find the exercise using search and filter on the exercise database
        setShowExerciseDatabaseModal(true);

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
                                    {`${hours}hrs ${minutes}min ${seconds}s`}
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

                            {
                                // (activeExercises.length == 0) 
                                (activeExerciseCells.length == 0) 
                                ? 
                                    (<div className="getting-starting-view">
                                        <div>
                                            Get Started
                                        </div>
                                        <div>
                                            Add an exercise to start your workout
                                        </div>

                                    </div>)
                                :
                                <></>
                            }
                                

                            <div className="active-exercise-table">
                                {/* {activeExercises} */}
                                {activeExerciseCells}
                            </div>



                            <div>
                                <Button onClick={addExerciseEventHandler}>+ Add Exercise</Button>
                            </div>

                            {exerciseDatabaseModal}
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