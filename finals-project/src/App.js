import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'; 
import Services from './Components/Services'; 
import About from './Components/About'; 
import Contact from './Components/Contact Us';
import Reviews from './Components/Reviews'; 
import Login from './Components/Login';
import SignUp from './Components/Sign Up';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact us" component={Contact} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/login" component={Login} />
        <Route path="/sign up" component={SignUp} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
