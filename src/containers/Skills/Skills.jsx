import React from "react";
import "./skills.scss";
import { motion } from "framer-motion";
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
            <motion.div className="skills html"
            animate={{width: `${95}%`}}
            transition={{duration:2}}
           / >
          </div>
          <div className="persantage">
            <span>CSS</span>
            <span>90%</span>
          </div>
          <div className="skill-container">
            <motion.div className="skills css" 
            animate={{width: `${90}%`}}
            transition={{duration:2}}/>
          </div>
          <div className="persantage">
            <span>ReactJs</span>
            <span>70%</span>
          </div>
          <div className="skill-container">
            <motion.div className=" skills reactjs" 
            animate={{width: `${70}%`}}
            transition={{duration:2}}
            />
          </div>
          <div className="persantage">
            <span>JavaScript</span>
            <span>75%</span>
          </div>
          <div className="skill-container">
            <motion.div className=" skills javascript" 
            animate={{width: `${75}%`}}
            transition={{duration:2}}
            />
          </div>
          <div className="persantage">
            <span>WordPress</span>
            <span>65%</span>
          </div>
          <div className="skill-container">
            <motion.div className="skills wordpress"
            animate={{width: `${65}%`}}
            transition={{duration:2}}
            />
          </div>
        </div>
        <div className="back-ent">
          <h3>Back-end</h3>
          <div className="persantage">
            <span>PHP</span>
            <span>65%</span>
          </div>
          <div className="skill-container">
            <motion.div className="skills nodejs"
            animate={{width: `${65}%`}}
            transition={{duration:2}}
            />
          </div>
          <div className="persantage">
            <span>NodeJS</span>
            <span>65%</span>
          </div>
          <div className="skill-container">
            <motion.div className="skills mongoDb" 
            animate={{width: `${65}%`}}
            transition={{duration:2}}
            />
          </div>
          <div className="persantage">
            <span>MongoDB</span>
            <span>65%</span>
          </div>
          <div className="skill-container">
            <motion.div className="skills Mysql"
            animate={{width: `${65}%`}}
            transition={{duration:2}}
            />
          </div>
          <div className="persantage">
            <span>MYSQL</span>
            <span>60%</span>
          </div>
          <div className="skill-container">
            <motion.div className="skills javascript" 
            animate={{width: `${60}%`}}
            transition={{duration:2}}
            />
          </div>
          <div className="persantage">
            <span>SQL</span>
            <span>70%</span>
          </div>
          <div className="skill-container">
            <motion.div className="skills wordpress"
            animate={{width: `${70}%`}}
            transition={{duration:2}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
