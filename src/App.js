import React from 'react';
import {NavBar} from './Components/NavBar';
import './App.css';
import { Profile } from './Components/Profile';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
       <Profile />
       <AboutUs />
       <Contact />
    </div> 
  );
}

export default App;
