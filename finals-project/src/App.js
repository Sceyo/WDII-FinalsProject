import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'; 
import Services from './Pages/Services'; 
import About from './Pages/About'; 
import Contact from './Pages/Contact Us';
import Reviews from './Pages/Reviews'; 
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Home />
      
      {/*<Login />*/}
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact us" component={Contact} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Routes>
      {/*<Footer /> */}
    </Router>
    </>
  );
};

export default App;