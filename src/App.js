import React from 'react'
import Navbar from './Components/Navbar'
import Logincontent from './Components/Logincontent'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutpage from './Pages/Aboutpage';
import Signupcontent from "./Components/Signupcontent";
import Homepage from "./Pages/Homepage"
import FeatureContent from './Components/FeatureContent';
import Footer from './Components/Footer';


export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Homepage />}/>
        <Route path = "/about" element={<Aboutpage/>}/>
        <Route path = "/feature" element={<FeatureContent/>}/>
        <Route path = "/login" element={<Logincontent/>}/>
        <Route path = "/signup" element={<Signupcontent/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

