import React from "react";
import "./skills.scss";
const Skills = () => {
  return (
    <div className="Skills-container" id="Skills">
      <div className="top">
        <h2>Skills</h2>
        <p>My technical skills</p>
      </div>
      <div className="bottom">
        <div className="front-ent">
          <h3>Front-end</h3>
          <div className="persantage">
            <span>HTML</span>
            <span>95%</span>
          </div>
          <div className="skill-container">
            <div className="skills html"></div>
          </div>
          <div className="persantage">
            <span>CSS</span>
            <span>90%</span>
          </div>
          <div className="skill-container">
            <div className="skills css"></div>
          </div>
          <div className="persantage">
            <span>ReactJs</span>
            <span>70%</span>
          </div>
          <div className="skill-container">
            <div className=" skills reactjs"></div>
          </div>
          <div className="persantage">
            <span>JavaScript</span>
            <span>60%</span>
          </div>
          <div className="skill-container">
            <div className=" skills javascript"></div>
          </div>
          <div className="persantage">
            <span>WordPress</span>
            <span>65%</span>
          </div>
          <div className="skill-container">
            <div className="skills wordpress"></div>
          </div>
        </div>
        <div className="back-ent">
          <h3>Back-end</h3>
          <div className="persantage">
            <span>PHP</span>
            <span>50%</span>
          </div>
          <div className="skill-container">
            <div className="skills nodejs"></div>
          </div>
          <div className="persantage">
            <span>NodeJS</span>
            <span>60%</span>
          </div>
          <div className="skill-container">
            <div className="skills mongoDb"></div>
          </div>
          <div className="persantage">
            <span>MongoDB</span>
            <span>50%</span>
          </div>
          <div className="skill-container">
            <div className="skills Mysql"></div>
          </div>
          <div className="persantage">
            <span>MYSQL</span>
            <span>50%</span>
          </div>
          <div className="skill-container">
            <div className="skills javascript"></div>
          </div>
          <div className="persantage">
            <span>SQL</span>
            <span>60%</span>
          </div>
          <div className="skill-container">
            <div className="skills wordpress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
