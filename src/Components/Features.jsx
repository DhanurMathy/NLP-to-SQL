import React from 'react'
import "./Featurestyle.css"

export default function Features() {
  return (
    <div>
     <div className="features">
      <h2 className="text-center"><span>F</span>eatures</h2>
      <p className="about-description">
      Enable users to query databases in natural language, translating queries into 
         SQL for execution, making data access more accessible for non-technical users and
         streamlining data analysis
        </p>
      <div className="container">
      <div className="row text-center">
        <div className="col-md-4 card-1">
          <img src="https://miro.medium.com/v2/resize:fit:1400/0*G9Dtj0vmq3H8paAE." alt="" />
          <h4>Context Awareness</h4>
          <p>The ability of an LLM to understand and retain information from previous interactions</p>
        </div>
        <div className="col-md-4 card-2">
          <img src="https://creiden.com/wp-content/uploads/2023/04/Frame_3-1.png" alt="" />
          <h4>Error Handling</h4>
          <p>The process of how a system or application responds to unexpected situations</p>
        </div>
        <div className="col-md-4 card-3">
          <img src="https://resources.nicepage.com/449/88449/multi-language-websites.jpg" alt="" />
          <h4>Multilanguage Support</h4>
          <p>Leverage techniques like multilingual LLMs, translation nodes, and database schema extraction to understand </p>
        </div>
      </div>
     </div>
     <div className="wrapper text-center">
     <button className="about-btn">Learn More</button>
     </div>
     </div>
    </div>
  )
}