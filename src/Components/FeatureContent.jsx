import React from 'react'
import "./Featurestyle.css"

export default function FeatureContent() {
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
          </div>
        </div>
        <div className="features">
      <h2 className="text-center"><span>F</span>eatures</h2>
      <p>Enable users to query databases in natural language, translating queries into 
         SQL for execution, making data access more accessible for non-technical users and
         streamlining data analysis</p>
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
      <div className="row text-center">
      <div className="col-md-6 card-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6NIV8fICIvxtfZV4CEj24ZiWPMCdeQR8jaQ&s" alt="" />
            <h4>Voice Recognition</h4>
            <p>The technology that allows users to interact with databases using natural language spoken commands, which are then translated into SQL queries for data manipulation. </p>
        </div>
        <div className="col-md-6 card-5">
            <img src="https://media.licdn.com/dms/image/v2/D4D12AQHm6rmTvD0vCg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1709478511776?e=2147483647&v=beta&t=DKZJvNp-prj6_HjoRlctU81Ler752A5CdbCN2FHiXbI" alt="" />
             <h4>Visualization</h4>
             <p>Natural Language Processing (NLP) to translate natural language queries into Structured Query Language (SQL) queries, and then visualizing the results of those SQL queries</p>
        </div>
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
