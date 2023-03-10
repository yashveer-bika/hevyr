import { useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import "../../styles/Settings.css"
import TestImage from '../../assets/test.jpg'
import axios from "axios";
import DropdownItem from "react-bootstrap/esm/DropdownItem";


export default function SettingScreenRightContainer({activeIndex}: any) {
    const [theme, setTheme] = useState("Light");
    const [weightUnit, setWeightUnit] = useState("lbs");
    const [distanceUnit, setDistanceUnit] = useState("miles");
    const [bodyMeasurementUnit, setBodyMeasurementUnit] = useState("inch");
    const [privateProfile, setPrivateProfile] = useState(false);

    const [file, setFile] : any = useState();

    function handleChange(event:any) {
        setFile(event.target.files[0])
    }
    
    function handleSubmit(event:any) {
        event.preventDefault()
        const url = 'http://localhost:3000/uploadFile';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
        };
        axios.post(url, formData, config).then((response) => {
        console.log(response.data);
        });

    }


    function triggerExportData() {

    }
    
    function handleTheme(newTheme : string) {
        // TODO: change the visual theme of the entire site based on the theme setting
        // TODO: update the user theme preference
        setTheme(newTheme)
    }

    function handleWeight(newUnit : string) {
        // TODO: change the ^^^ of the entire site based on the ^^^ setting
        // TODO: update the user preference
        setWeightUnit(newUnit)
    }

    function handleDistance(newUnit : string) {
        // TODO: change the ^^^ of the entire site based on the ^^^ setting
        // TODO: update the user preference
        setDistanceUnit(newUnit)
    }

    function handleBodyMeasurement(newUnit : string) {
        // TODO: change the ^^^ of the entire site based on the ^^^ setting
        // TODO: update the user preference
        setBodyMeasurementUnit(newUnit)
    }

    function handlePrivateProfile(privateStatus : boolean) {
        // TODO: change the ^^^ of the entire site based on the ^^^ setting
        // TODO: update the user preference
        setPrivateProfile(privateStatus)
    }

    function triggerPasswordUpdate() {
        // TODO: read current password
        // TODO: read new password
        /*
            if current_password == user.current_password
                user.current_password = new_password (update DB)
        */
    }

    const profileSettings = (
        <div className="setting-screen-right-container">
            <div className="profile-pic-container"> 
                <img src={TestImage} alt="WHERE IS THE IMG?" width={100}></img>

                <form onSubmit={handleSubmit}>
                    <h1>React File Upload</h1>
                    <input type="file" onChange={handleChange}/>
                    <button type="submit">Upload</button>
                </form>
            </div>

            <div>
                Name 
                <input name="firstName" />
            </div>
            <div>
                Bio
                <input name="firstName" />
            </div>

            <div>
                Save changes button
            </div>
        </div>
    )

    const accountSettings = (
                <div className="setting-screen-right-container">
                    <div className="unit-note">
                        <div>
                            Private Profile
                        </div>

                        <Dropdown className="unit-dropdown">
                            <Dropdown.Toggle id="dropdown-autoclose-true" className="unit-dropdown-button">
                                {privateProfile ? "On" : "Off"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                

                                <Dropdown.Item onClick={(() => handlePrivateProfile(true))}>
                                    {"On"}
                                </Dropdown.Item>
                                <Dropdown.Item onClick={(() => handlePrivateProfile(false))}>
                                    {"Off"}
                                </Dropdown.Item>
                                   
                            
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div className="sub-text">
                        Having a private profile means other users need to request to follow you. Only if you accept their follow request, will they be able to see your workouts.
                    </div>

                    <hr></hr>

                    <div> 
                    <Form>
                        
                        <Form.Group className="mb-3" controlId="formBasicCurrentPassword">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control type="password" placeholder="" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNewPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={triggerPasswordUpdate}>
                            Update Password
                        </Button>

                    </Form>
                    </div>
                </div>
    )

    const manageSubscription = (
        <div className="setting-screen-right-container">
            TODO: set up Stripe API stuff to set up payment
        </div>
    )

    const unitSettings = (
                <div className="setting-screen-right-container">
                    <div className="unit-note">
                        <div>
                            Weight Unit
                        </div>

                        <Dropdown className="unit-dropdown">
                            <Dropdown.Toggle id="dropdown-autoclose-true" className="unit-dropdown-button">
                                {weightUnit}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                

                                <Dropdown.Item onClick={(() => handleWeight("lbs"))}>
                                    {"lbs"}
                                </Dropdown.Item>
                                <Dropdown.Item onClick={(() => handleWeight("kg"))}>
                                    {"kg"}
                                </Dropdown.Item>
                                   
                            
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <hr></hr>

                    <div className="unit-note">
                        <div>
                            Distance Unit
                        </div>

                        <Dropdown className="unit-dropdown">
                            <Dropdown.Toggle id="dropdown-autoclose-true" className="unit-dropdown-button">
                                {distanceUnit}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                

                                <Dropdown.Item onClick={(() => handleDistance("miles"))}>
                                    {"miles"}
                                </Dropdown.Item>
                                <Dropdown.Item onClick={(() => handleDistance("km"))}>
                                    {"km"}
                                </Dropdown.Item>
                                   
                            
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <hr></hr>

                    <div className="unit-note">
                        <div>
                            Body Measurement Unit
                        </div>

                        <Dropdown className="unit-dropdown">
                            <Dropdown.Toggle id="dropdown-autoclose-true" className="unit-dropdown-button">
                                {bodyMeasurementUnit}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                

                                <Dropdown.Item onClick={(() => handleBodyMeasurement("inch"))}>
                                    {"inch"}
                                </Dropdown.Item>
                                <Dropdown.Item onClick={(() => handleBodyMeasurement("cm"))}>
                                    {"cm"}
                                </Dropdown.Item>
                                   
                            
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <hr></hr>


                </div>
    )

    const themeSettings = (
        <div className="setting-screen-right-container">
            <div className="theme-note">
                Current Theme

                <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                        {theme}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        

                        <Dropdown.Item onClick={(() => handleTheme("Light"))}>
                            {"Light"}
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(() => handleTheme("Dark"))}>
                            {"Dark"}
                        </Dropdown.Item>
                        
                    
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <hr></hr>


        </div>
    )

    const exportDataPage = (
                <div className="setting-screen-right-container">
                    <h3>
                    Export Workout Data
                    </h3>
                    
                    <div className="export-note">
                        Export your entire workout history to a CSV file. Exported workouts data can not be imported back into Hevy
                    </div>

                    <hr></hr>

                    <div className="data-button-container">
                        <Button onClick={triggerExportData}>Export Workout Data</Button>
                    </div>
                </div>
    )


    const timerSounds = ["Default", "Alarm", "Futuristic"];
    const timerVolumes = ["Off", "Low", "Normal", "High"];


    const [timerSound, setTimerSound] = useState(0);
    const [timerVolume, setTimerVolume] = useState(2);
    const [showSoundModal, setShowSoundModal] = useState(false);
    const [showVolumeModal, setShowVolumeModal] = useState(false);

    const soundMenuItems : JSX.Element[] = [];

    timerSounds.forEach( (sound, idx) => {
        soundMenuItems.push(
            <Dropdown.Item onClick={() => setTimerSound(idx)}> {sound} </Dropdown.Item>  
        );
    })

    const soundModal = (
        <div className="sound-modal">
            <Modal show={showSoundModal} onHide={() => setShowSoundModal(false)} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Select Timer Sound
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                            {timerSounds[timerSound]}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {soundMenuItems}
                        </Dropdown.Menu>

                    </Dropdown>

                
                </Modal.Body>


            </Modal>
        </div>
    );

    // volume modal stuff

    const volumeMenuItems : JSX.Element[] = [];

    timerVolumes.forEach( (volume, idx) => {
        volumeMenuItems.push(
            <Dropdown.Item onClick={() => setTimerVolume(idx)}> {volume} </Dropdown.Item>  
        );
    })

    const volumeModal = (
        <div className="volume-modal">
            <Modal show={showVolumeModal} onHide={() => setShowVolumeModal(false)} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Select Timer Volume
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                            {timerVolumes[timerVolume]}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {volumeMenuItems}
                        </Dropdown.Menu>

                    </Dropdown>

                
                </Modal.Body>


            </Modal>
        </div>
    );

    const timerSettings = (
        <div className="setting-screen-right-container">
            <div className="menu-display" onClick={() => setShowSoundModal(true)} >
                <div> Timer Sound </div>
                <div className="current-setting"> { timerSounds[timerSound] }</div>
            </div>

            {soundModal}

            <hr></hr>

            <div className="menu-display" onClick={() => setShowVolumeModal(true)} >
                <div> Timer Volume </div>
                <div className="current-setting"> { timerVolumes[timerVolume] }</div>
            </div>

            {volumeModal}

        </div>
    )

    const pages = [
        profileSettings,
        accountSettings, 
        manageSubscription,
        unitSettings,
        themeSettings, 
        exportDataPage,
        timerSettings
    ]

    // const idx : number = activeIndex;

    // TODO: make the right side dynamically switch
    return (
        pages[activeIndex]
    );
}