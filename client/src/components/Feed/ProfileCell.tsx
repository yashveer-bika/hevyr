// import { Button } from "react-bootstrap";
import "../../styles/Feed.css"
// import TestImg from "../../assets/test.jpg"
import { Button } from "@mui/material";


export default function ProfileCell({userName, trueName, profilePicPath} : any) {

    return (
        <div className="profile-cell">
            <div className="profile-img">
                <img src={profilePicPath} alt="test-img" className="profile-photo"/>
            </div>

            <div>
                <div className="username">
                    {userName}
                </div>
                <div className="true-name">
                    {trueName}
                </div>
            </div>
            
            <div>
                <Button variant="text">Follow</Button>

            </div>
        </div>
    );
}