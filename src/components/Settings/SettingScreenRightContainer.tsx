import { useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import "../../styles/Settings.css"
import TestImage from '../../assets/test.jpg'
import axios from "axios";


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

    const pages = [
            (
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
            ), 
            (
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
            ), 
            (
                <div className="setting-screen-right-container">
                    TODO: set up Stripe API stuff to set up payment
                </div>
            ), 
            (
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
            ), 
            (
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
            ), 
            (
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
    ]

    // const idx : number = activeIndex;

    // TODO: make the right side dynamically switch
    return (
        pages[activeIndex]
    );
}