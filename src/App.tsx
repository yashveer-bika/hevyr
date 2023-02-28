import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Navbar } from 'react-bootstrap';
// import NavBar from './components/NavBar';

// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercises from "./pages/Exercises";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Routines from "./pages/Routines";
import Settings from "./pages/Settings";
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Log from './pages/Log';
import CreateRoutine from './pages/CreateRoutine';
import RoutineDisplay from './pages/RoutineDisplay';
// import 'bootstrap/dist/css/bootstrap.min.css';



// TODO: write a robust routing using routines' id, exercises' id, and workout id
function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Feed />} />
              <Route path="routines/" element={<Routines />}> </Route> 
              <Route path="routines/sample-exercise-1" element={<RoutineDisplay routineId='sample-exercise-1'/>} />
              <Route path="exercises" element={<Exercises />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="log" element={<Log />} />
              <Route path="create-routine" element={<CreateRoutine />} />
              <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
