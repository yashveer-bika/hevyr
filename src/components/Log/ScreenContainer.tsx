import { useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";

export default function ScreenContainer() {

    const [showClocks, setShowClocks] = useState(false);

    function openClocksModal() {
        
    }

    function startTimer() {

    }

    const clockModal = 
                <Modal show={showClocks} onHide={() => setShowClocks(false)} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>
                        
                        <Dropdown className="d-inline mx-2">
                            <Dropdown.Toggle id="dropdown-autoclose-true">
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            {
                                <Dropdown.Item>
                                
                                </Dropdown.Item>
                            }
                            </Dropdown.Menu>

                        </Dropdown>

                        Clock
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    
                    </Modal.Body>

                    <Modal.Footer>

                        <Button variant="primary" onClick={startTimer}>
                            Start
                        </Button>

                    </Modal.Footer>
                </Modal>

    return (

        <div>
            <div className="log-bar">
                <div>
                    Log Workout
                </div>
                <div className="clock-container" onClick={() => setShowClocks(true)}>
                    <img className="clock-img" src="icons8-alarm-clock-ios-16-glyph/icons8-alarm-clock-90.png" alt="TODO: why isn't showing up"/>
                </div>

                {clockModal}



                <Button> Finish </Button>
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

        </div>
        
    );
}