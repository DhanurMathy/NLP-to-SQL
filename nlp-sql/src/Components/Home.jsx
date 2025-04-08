import React, { useState } from "react";
import "./Homestyle.css";
import Features from "./Features";

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      <div className="home">
        <div className="home-image text-center">
          <div className="text text-center">
            <h1 className="title text-center">
              NLP <span>to</span> SQL <span>Query Execution</span>
            </h1>
            <p>
              Convert Natural Language queries into SQL effortlessly <br />
              using Machine Learning.
            </p>
            <button className="btn-home" onClick={() => {
            setShowContact(true);
            document.body.classList.add("modal-open"); // Disable scrolling
            }}>
           Contact Us
          </button>
          </div>
        </div>
      </div>

      <Features />

      {/* Contact Modal */}
      {showContact&&(
        <div className="contact">
          <div className="contact-page">
          <h2>Contact Us</h2>
          <p>Feel free to reach out for any queries.</p>
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email"/>
          <textarea placeholder="Message"></textarea>
          <button className="btn-submit">Submit</button>
          <button className="btn-close" onClick={() => {
          setShowContact(false);
          document.body.classList.remove("modal-open"); // Enable scrolling
          }}>
         Close
        </button>
          </div>
        </div>
      )}
    </div>
  );
}
