import React from "react";
import { motion } from "framer-motion";
import cv from "../../assets/AocholCvAltV1.pdf";
import images from "../../constants/images.js";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
import "./about.scss";

const About = () => {
  return (
    <div className="about__container" id="About">
      <div className="about-items">
        <div className="left-side">
          <div className="left-info">
            <h2>About Me</h2>
            <p>
              I am curious and passionate about Information Technology.
              <br /> I started to study and learning computers from a very young
              age.
              <br /> On my arrival in France, I continued to study and invest in
              <br />
              self-learning in Web development.
              <br />
              I am exited to continue growing as web developer, and to
              contribute my <br />
              skills and knowledge to new projects and teams. <br />
            </p>
          </div>
          <div className="left-img">
            <img src={images.person2} alt="about" />
          </div>
        </div>
        <div className="right-side">
          <div className="icons">
            <div className="icons-items">
              <a href="https://github.com/shawilayoul">
                <FaGithub />
              </a>
            </div>
            <div className="icons-items">
              <a href="https://www.linkedin.com/in/aochol-ayoul-mojowok-654a7121a/">
                <FaLinkedin />
              </a>
            </div>
            <div className="icons-items">
              <a href="https://twitter.com/">
                <FaTwitter />
              </a>
            </div>
            <div className="icons-items">
              <a href="https://www.instagram.com/">
                <FaInstagramSquare />
              </a>
            </div>
            <div className="icons-items">
              <a href="https://www.youtube.com/">
                {" "}
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <a download="" href={cv}>
          <motion.div
            className="cv"
            whileHover={{
              scale: 1.1,
              originX: 0,
              color: "#ff7d00",
              duration: 1,
              delay: 1.5,
            }}
          >
            <button> Download CV</button>
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default About;
