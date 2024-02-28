import React from "react";
import { motion } from "framer-motion";
import cv from "../../assets/Aochol-Ayoul-Mojowok-Cv.pdf";
import images from "../../constants/images";
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
            <div className="infoText">
              <h2>About Me</h2>
              <p>
                I Am Aochol Ayoul, 28 years old, I currently live in Lyon,
                France. <br />
                Following a period of self-training(Udemy), followed by two
                training courses at Simplon, Lyon, I acquired essential skills
                in the domain of web development.
                <br />
                To start a work-study training course as a Full-Stack developer,
                I am looking for a company that will allow me to put into
                practice all the lessons that will be given to me.
                <br />
                My previous experiences and training have allowed me to develop
                essential qualities such as teamwork, a sense of rigour,
                patience and a strong taste for problem solving.
              </p>
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
          <div className="left-img">
            <div className="img1">
              <img src={images.css} alt="about" />
            </div>
            <div className="img2">
            <img src={images.sass} alt="about" />
            </div>
            <div className="img3">
            <img src={images.react} alt="about" />
            </div>
            <div className="img4">
            <img src={images.html} alt="about" />
            </div>
            <div className="img5">
            <img src={images.figma} alt="about" />
            </div>
            <div className="img6">
            <img src={images.node} alt="about" />
            </div>
            <div className="img7">
            <img src={images.git} alt="about" />
            </div>
            <div className="img8">
            <img src={images.redux} alt="about" />
            </div>
            <div className="img9">
            <img src={images.javascript} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
