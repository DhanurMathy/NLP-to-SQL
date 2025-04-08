import React from "react";
import "./AboutStyle.css";

export default function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <h2 className="about-title"><span>A</span>bout Our Project</h2>
        <p className="about-description">
          Our NLP to SQL Query Execution system empowers users to seamlessly
          convert natural language queries into SQL commands using advanced
          machine learning techniques. Whether you're a developer, data
          analyst, or business professional, our platform simplifies database
          interactions.
        </p>

        <div className="about-features">
          <div className="feature-card">
            <h3>🌟 AI-Powered</h3>
            <p>Leverages NLP and Machine Learning to generate precise SQL queries.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ User-Friendly</h3>
            <p>Intuitive interface with easy-to-use query input and result visualization.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Data Insights</h3>
            <p>Supports multi-language queries and provides data-driven insights.</p>
          </div>
        </div>

        <button className="about-btn">Learn More</button>
      </div>
    </div>
  );
}

