import React from "react";
import "../../styles/Popup.css"
 
// TODO: define a proper type for props
function Popup(props : any) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;