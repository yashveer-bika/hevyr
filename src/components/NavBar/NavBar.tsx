import React from "react";
// import {BrowserRouter} from "react-router-dom";
// import {Route} from "react-router-dom";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        <li>
          <Link to="/routines">Routines</Link>
        </li>

        <li>
          <Link to="/exercises">Exercises</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>

        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;