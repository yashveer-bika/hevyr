import React from "react";
// import {BrowserRouter} from "react-router-dom";
// import {Route} from "react-router-dom";
import {Link} from "react-router-dom";
// import {LinkProps} from "react-router-dom";

// import "../../styles/Navbar.css";

import { NavButtonPair } from "./types";

function Button( props : NavButtonPair) {
  return (
    <div className="navButton">
        <Link to={props.pageName} >{props.displayName}</Link>
    </div>
  );
}

export default Button;