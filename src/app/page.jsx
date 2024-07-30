import './globals.css';
import React from 'react';

import Home from '../app/components/Home'
import Navbar from '../app/components/Navbar'
import Posters from '../app/components/Posters';
import Footer from '../app/components/Footer';
//import Shopy from '../app/components/Shopy'
// import { BrowserRouter as Router, Route, Switch 
// } from 'react-router-dom';
// import SignIn from '../app/components/SignIn';


const Page = () => {
 
    return (
      
        <div className='bg-pink-50'>   
        <Navbar></Navbar>  
          <Home></Home>
          <Posters></Posters>

          <Footer></Footer>
        </div>
      
      
    );      
  }

  export default Page;