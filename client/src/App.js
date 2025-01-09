import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import CycleTracker from './components/CycleTracking/CycleTracker'; 
import Routines from './components/Routines/Routines'; 
import Profile from './components/Profile/Profile'; 
import Home from './components/Home'; 
import Navigation from './components/Navigation'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <Router>
      <Navigation /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cycle-tracker" element={<CycleTracker />} />
        <Route path="/routines" element={<Routines />} /> 
        <Route path="/profile" element={<Profile />} /> 
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;