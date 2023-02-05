import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/NavBar/NavBar";
import { NavButtonPair } from "../components/NavBar/types";

const pages : NavButtonPair[] = [
  {pageName: "/", displayName: "Home"},
  {pageName: "/feed", displayName: "Feed"},
  {pageName: "/routines", displayName: "Routines"},
  {pageName: "/exercises", displayName: "Exercises"},
  {pageName: "/profile", displayName: "Profile"},
  {pageName: "/settings", displayName: "Settings"}
];

const Layout = () => {
  return (
    <>
      <Navbar pages={ pages } />
      <Outlet />
    </>
  );
};

export default Layout;