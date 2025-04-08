import React from "react";
import "./AboutStyle.css";
import "./Homestyle.css";
export default function AboutContent() {
  
  return (
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
      <div className="about-container">
        <h2 className="about-title"><span>A</span>bout Our Project</h2>
        
        <p className="about-description">
          <strong>Query Bridge</strong> is an intelligent platform that converts natural language into accurate SQL queries, enabling users to interact with databases effortlessly. This project leverages cutting-edge technologies such as <strong>Natural Language Processing (NLP)</strong>, <strong>Machine Learning</strong>, and <strong>LangChain</strong> to bridge the gap between human language and database syntax.
        </p>
        
        <p className="about-description">
          Built for developers, analysts, and business users alike, the system eliminates the need to memorize SQL syntax—just type your question in plain English and get meaningful, structured data as output.
        </p>

        <div className="about-features">
          <div className="feature-card">
            <h3>🤖 AI-Driven Conversion</h3>
            <p>Translates natural language queries into accurate SQL using advanced NLP models and fine-tuned machine learning techniques.</p>
          </div>

          <div className="feature-card">
            <h3>🌐 Multi-Language Support</h3>
            <p>Allows users to query databases in different languages, promoting inclusivity and global usability.</p>
          </div>

          <div className="feature-card">
            <h3>📈 Visual Data Representation</h3>
            <p>Offers interactive result charts and dashboards using integrated visualization tools, enhancing data comprehension.</p>
          </div>
          <div className="feature-card">
            <h3>💡 Intuitive Interface</h3>
            <p>Streamlit-based frontend for seamless user experience, quick query input, and clear output results.</p>
          </div>
        </div>

        <button className="about-btn">Learn More</button>
      </div>
    </div>
  );
}
