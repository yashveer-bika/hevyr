import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Navbar } from 'react-bootstrap';
// import NavBar from './components/NavBar';

// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercises from "./pages/Exercises";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Routines from "./pages/Routines";
import Settings from "./pages/Settings";
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="feed" element={<Feed />} />
            <Route path="routines" element={<Routines />} />
            <Route path="exercises" element={<Exercises />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
