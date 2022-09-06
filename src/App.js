import Home from './components/Home';
import About from './components/About';
import Booking from './components/Booking';
import Cars from './components/Cars';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
     
        <Router>
    
      <NavBar />
      <Routes>
      <Route exact path='/' element={<Home />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/cars' element={<Cars />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
