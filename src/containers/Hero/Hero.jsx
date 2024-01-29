import React from "react";
import images from "../../constants/images";
import { motion } from "framer-motion";
import "./Hero.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="container" id="Home">
      <div className="left-side">
        <motion.h1
          className="title"
          whileHover={{
            scale: 1.1,
            originX: 0,
            duration: 1,
            delay: 1.1,
          }}
        >
          HI, I am <span>Aochol!</span> <br />
          Junior web developer
        </motion.h1>
        <div className="desc">
          <p>
            I'm a passionate junior web developer, with a mission to create
            user-friendly <br />
            and visually applealing websites.
            <br />
          </p>
        </div>
        {/*<a download="" href={cv}>
          {" "}
          <motion.button
            className="cv"
            variants={buttonVariant}
            whileHover="hover"
          >
            DownloadCV
          </motion.button>
        </a>*/}
      </div>
      <motion.div
        className="right-side"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <motion.div
          className="icons-items1"
          whileHover={{
            scale: 1.2,
            originX: 0,
            duration: 1,
            delay: 0.5,
          }}
        >
          <a href="https://www.linkedin.com/in/aochol-ayoul-mojowok-654a7121a/">
            <FaLinkedin />
          </a>
        </motion.div>
        <motion.div
          className="icons-items2"
          whileHover={{
            scale: 1.2,
            originX: 0,
            duration: 1,
            delay: 0.5,
          }}
        >
          <a href="https://github.com/shawilayoul">
            <FaGithub />
          </a>
        </motion.div>

        <motion.div className="img1">
          <img src={images.profil3} alt="profile" />
        </motion.div>
        <div className="img2">
          <img src={images.person2} alt="profile" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
