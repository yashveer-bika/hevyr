import React from "react";
// import {BrowserRouter} from "react-router-dom";
// import {Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Button from "./Button";
import { NavButtonPair } from "./types";
import "../../styles/NavBar.css"

// TODO: if I have issues, it may be the `any` type
function Navbar( {pages} : any) {
  const buttons : any = [];
  pages.forEach( (pg : any) => {
    buttons.push(
      <Button pageName={pg.pageName} displayName={pg.displayName} />
    );
  });

  return (
    <nav className="navBar">
       
          {buttons}
        
    </nav>
  );
}

export default Navbar;