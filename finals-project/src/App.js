import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'; 
import Services from './Pages/Services'; 
import About from './Pages/About'; 
import Contact from './Pages/Contact Us';
import Reviews from './Pages/Reviews'; 
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;