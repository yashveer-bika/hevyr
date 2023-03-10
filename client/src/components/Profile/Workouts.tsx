import "../../styles/Profile.css";
import TestImg from "../../assets/test.jpg"
import TestWorkout from "./TestWorkout.json"
import Comments from "./Comments.json"
import WorkoutCell from "./WorkoutCell";
import { JSXElementConstructor, ReactElement, ReactFragment, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import CommentCell from "./CommentCell";
import { TextField } from "@mui/material";

export default function Workouts() {
  // TODO: get the WorkoutCells
  const rows : any = [];

  // TODO: State, likes, comments 
  const [likeCount, setLikeCount] = useState(0);
  const [likeOn, setLikeOn] = useState(false);

  function handleLikeButton() {
    if (!likeOn) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setLikeOn(!likeOn);
  }

  function handleCommentButton() {
    // TODO: make comment button redirect to the type-in 
    //       "Write a comment..." bar below
  }

  function handleShareButton() {
    // TODO: copy link of the associated workout to clipboard
    //       make pop-up that says "Copied to Clipboard"

    // TODO: get link to workout
    const workoutLink = "test workout link";
     // Copy the text inside the text field
    navigator.clipboard.writeText(workoutLink);

    // TODO: write popup
  }

  TestWorkout.forEach( (exercise : any) => {
    rows.push(
      <WorkoutCell props={exercise} />
    );
    // rows.push(
    //   <hr></hr>
    // );
  });

  const comments: any = [];
  // TODO: build up all the comments
  Comments.forEach( (comment:any) => {
    comments.push(
      <CommentCell props={comment}/>
    );
  });

  // const [writeCommentText, setWriteCommentText] = useState("");
  // let inputHandler = (e : any) => {
  //   //convert input text to lower case
  //   var lowerCase = e.target.value.toLowerCase();
  //   setWriteCommentText(lowerCase);
  // };



  // TODO: put add comment functionality after I set up the database

  return (
    <div className="workouts"> 
      <div className="div-container-row-7">

        <div className="title"> Workouts </div>

        <div className="workouts-container">
          
          <div className="div-container-row-7">
            
            <div className="post-header">
              <div> 
                <img src={TestImg} alt="test-img" className="post-profile-photo" width={200}/>
              </div>

              <div className="div-container-row">
                <div> Username </div>
                <div className="sub-text"> time since post </div>
              </div>
            </div>

            <div className="title"> Workout title </div>

            <div className="div-container-col">
              <div className="div-container-row">
                <div className="sub-text">
                  Duration &nbsp;
                </div>
                1min &nbsp;
              </div>
              <div className="div-container-row">
                <div className="sub-text">
                  Volume &nbsp;
                </div>
                {/* TODO: calculate volume from the data */}
                5,925 lbs &nbsp;
              </div>
            
            </div>

            <hr></hr>

            <div className="div-container-row-7">
              <div className="sub-text">
                Workout
              </div>


              {/* <div>
                components for each lift (i.e. squat) &nbsp;
              </div>
              <div>
                components for each lift (i.e. squat) &nbsp;
              </div>
              <div>
                components for each lift (i.e. squat) &nbsp;
              </div> */}

              {rows}

              <div className="div-container-col">
                <div className="sub-text">
                  {likeCount} likes
                </div>
                <div className="sub-text">
                  3 comments
                </div>
              </div>

              <hr></hr>

              <div className="div-container-col-3">
                <div>
                  <Button onClick={handleLikeButton}> LIKE BUTTON </Button>
                </div>
                <div>
                  <Button onClick={handleCommentButton}> COMMENT BUTTON </Button>
                </div>
                <div>
                  <Button onClick={handleShareButton}> SHARE BUTTON </Button>
                </div>
              </div>

              <hr></hr>

              <div className="comments">
                <div className="div-container-row-7">
                  {/* <div> COMMENT: (profile photo, username, comment, time since comment, delete comment button) </div>
                  <div> COMMENT: (profile photo, username, comment, time since comment, delete comment button) </div>
                  <div> COMMENT: (profile photo, username, comment, time since comment, delete comment button) </div> */}

                  <div className="comment-container">
                    {comments}
                  </div>
                  


                </div>

                <div className="add-comment-bar"> 

                  <div>
                    <img src={TestImg} alt="test-img" className="comment-profile-photo" />
                  </div>

                  <div className="write-comment-box">
                    {/* <TextField
                      id="outlined-basic"
                      onChange={inputHandler}
                      variant="outlined"
                      fullWidth
                      label="Search"
                    /> */}
                    <form onSubmit={() => console.log("waa")}>
                      
                      <label className="commentText" htmlFor={'commentText'}>
                        
                        <div className={"commentText"}>
                          <input type="text" id="commentText" name="commentText" placeholder={"Write a comment..."} />
                        </div>
                        
                      </label>

                    </form>

                  </div>

                </div>
              </div>
            
            </div>

          </div>

        </div>

        


        



      </div>

    </div>
  );
}