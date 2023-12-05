import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home'; 
import Services from './Pages/Services'; 
import About from './Pages/About'; 
import Contact from './Pages/ContactUs'; // Update the import path accordingly
import Reviews from './Pages/Reviews'; 
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
  
//   {
//     path:'/services',
//     element: <Services/>
  
//   },

//   {
//     path: '/about',
//     element: <About/>

//   },
  
//   {
//     path:'/contactUs',
//     element: <Contact/>
  
//   },

//   {
//     path: '/reviews',
//     element: <Reviews/>

//   },

//   {
//     path: '/signUp',
//     element: <SignUp/>

//   },

//   {
//     path: '/reviews',
//     element: <Reviews/>

//   }
//   ]
//   )


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      <App />
   
  );
