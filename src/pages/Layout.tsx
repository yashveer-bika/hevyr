import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/NavBar/NavBar";
import { NavButtonPair } from "../components/NavBar/types";
import { useState } from "react";
import "../styles/Layout.css";
import Pages from "./Pages.json"

// const pages : NavButtonPair[] = [
//   {pageName: "/", displayName: "Home"},
//   {pageName: "/feed", displayName: "Feed"},
//   {pageName: "/routines", displayName: "Routines"},
//   {pageName: "/exercises", displayName: "Exercises"},
//   {pageName: "/profile", displayName: "Profile"},
//   {pageName: "/settings", displayName: "Settings"},
//   {pageName: "/log", displayName: "Log"}
// ];

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;