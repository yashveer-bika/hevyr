import React, { Component } from "react";





export default function CreateExerciseWindow(props : any) {
  
  function handleClick() {
    props.toggle();
  };


    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={handleClick}>
            &times;
          </span>
          <form>
            <h3>Create Exercise</h3>
    
            <label>
              Exercise Name:
              <input type="text" name="name" />
            </label>

            <hr></hr>

            <div> </div>


            <br />
          </form>
        </div>
      </div>
    );
}

