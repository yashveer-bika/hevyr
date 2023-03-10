import React from "react";
// import {BrowserRouter} from "react-router-dom";
// import {Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
// import {LinkProps} from "react-router-dom";

// import "../../styles/Navbar.css";

import { NavButtonPair } from "./types";

function Button( {pageName, displayName} : NavButtonPair) {
  return (
    <div className="navButton">
        <NavLink to={pageName} >{displayName}</NavLink>
    </div>
  );
}

export default Button;