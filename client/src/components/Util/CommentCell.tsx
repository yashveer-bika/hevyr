import React from "react";
import "../../styles/Profile.css";
import TestImage from '../../assets/test.jpg'
import { DropdownButton } from "react-bootstrap";


// TODO: dynamically load images 
export default function CommentCell({props} : any) {

  function showDeleteCommentButton() {

  }

  // TODO: calculate time since posting

  // TODO: write delete comment popup and logic
  return (
      <div className="comment-cell">
        {/* <img src={props.imgPath} alt="TODO: HOW TO NAME?" width="10px" height="10px"></img> */}

        {/* <img src='../../assets/test.jpg' alt="TODO: HOW TO NAME?" width="10px" height="10px"></img> */}

        <div className="commenter-profile-photo-container">
          <img src={TestImage} alt="TODO: HOW TO NAME?" className="commenter-profile-photo"></img>
        </div>

        <div>
          <div className="comment-username">
            {props.userName}
          </div>

          <div className="comment-text">
            {props.text}
          </div>
        </div>
        
        <div className="comment-right-side">
          <div className="comment-post-time">
            time
          </div>

          <div className="comment-delete-button">
            <DropdownButton 
              variant="light" 
              onClick={showDeleteCommentButton} 
              title={`...`}
              drop="start"
              bsPrefix="dropdown-button"
            >

            </DropdownButton>
          </div>
        </div>
        
        
      </div>
  );
}