import "./Navbarstyle.css"
import React from 'react'
import { useState,useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
            <div className="col-md-2">
                <div className="left">
                <a href="QBridge"><h2>QBRIDGE</h2></a>
                </div>
            </div>
            <div className="col-md-4">
            <label className="switch">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <span className="slider"></span>
    </label>
            </div>
            <div className="col-md-6">
                <ul className="right">
                    <a href="/"><li>Home</li></a>
                    <a href="/"><li>Features</li></a>
                    <a href=""><li>QBridge</li></a>
                    <a href="/login"><li>Login</li></a>
                    <a href="/signup"><li>SignUp</li></a>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
