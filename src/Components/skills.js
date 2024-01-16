import React, { useRef, useEffect } from "react";
import "../Styling/skills.css";

const Skills = () => {
  return (
    <div className="skills-sec">
      <h1>What I Know</h1>
      <div id="skills" className="skills">
        <div className="category">
          <h2>Business Intelligence</h2>
          <div className="skills-list">
            <div className="skill-item">SQL </div>
            <div className="skill-item">SQL Server </div>
            <div className="skill-item">Azure Data Factory </div>
            <div className="skill-item">PowerBI </div>
            <div className="skill-item">Power Automate </div>
          </div>
        </div>
        <div className="category">
          <h2>Web Development</h2>
          <div className="skills-list">
            <div className="skill-item">HTML </div>
            <div className="skill-item">CSS </div>
            <div className="skill-item">Javascript </div>
            <div className="skill-item">React JS </div>
            <div className="skill-item">Node JS </div>
            <div className="skill-item">Express </div>
          </div>
        </div>
        <div className="category">
          <h2>Data</h2>
          <div className="skills-list">
            <div className="skill-item">Python </div>
            <div className="skill-item">Pandas </div>
            <div className="skill-item">Matplotlib </div>
            <div className="skill-item">Machine Learning Algorithms</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
