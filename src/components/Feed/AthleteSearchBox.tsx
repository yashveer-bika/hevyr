import "../../styles/Feed.css"
import { useState } from "react";
import TextField from "@mui/material/TextField";
import ProfileCell from "./ProfileCell";
import TestImg from "../../assets/test.jpg"


export default function AthleteSearchBox() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e : any) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    // const [inSearch, setInSearch] = useState(false);
    // function showSearched() {
    //     setInSearch(true);
    // }

    return (
        <div className="athlete-search-box">
            <div className="search">
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
            </div>

            {
                (inputText === "") ? 
                <div className="suggested-athletes"> 
                    <div className="subtitle">
                        Suggested Athletes
                    </div>
                    <div>
                        <ProfileCell userName="test name" trueName="first last" profilePicPath={TestImg} ></ProfileCell>
                    </div>
                    <div>
                        <ProfileCell userName="test name" trueName="first last" profilePicPath={TestImg} ></ProfileCell>
                    </div>
                </div>
                :
                <div className="searched-athletes"> 
                    <div>
                        <ProfileCell userName="test name" trueName="first last" profilePicPath={TestImg} ></ProfileCell>
                    </div>
                    <div>
                        <ProfileCell userName="test name" trueName="first last" profilePicPath={TestImg} ></ProfileCell>
                    </div>
                    <div>
                        <ProfileCell userName="test name" trueName="first last" profilePicPath={TestImg} ></ProfileCell>
                    </div>
                </div>
            }

    
            
        </div>
    );
}

