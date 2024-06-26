import { motion } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import cv from "../../assets/Aochol-Ayoul-Mojowok-CV.pdf";
import { useState } from "react";
import "./Navbar.scss";

const NavBar = () => {
  const [toggle, setToggole] = useState(false);
  const hovarVariant = {
    hover: {
      scale: 1.1,
      originX: 0,
      color: "#c6ac8f",
      duration: 1.5,
      delay: 2,
    },
  };
  return (
    <>
      <div className="App__NavBar">
        <div className="App__NavBar-logo">
          <motion.div variants={hovarVariant} whileHover="hover">
          <a href="https://shawilayoul.github.io/aocholprofile/#Home">A</a>
          </motion.div>
          <motion.h2 variants={hovarVariant} whileHover="hover">
             <a href="https://shawilayoul.github.io/aocholprofile/#Home">AOCHOL</a>
          </motion.h2>
        </div>
        <div className="App__navBar-links">
          <ul>
            {[
              "Home",
              "About",
              "Skills",
              "Resume",
              "Projects",
              "Contact",
            ].map((item) => (
              <motion.li key={item}>
                <motion.a
                  href={`#${item}`}
                  variants={hovarVariant}
                  whileHover="hover"
                >
                  {item}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="App__NavBar-menu">
          <div className="open-button">
            <HiMenuAlt4 onClick={() => setToggole(!toggle)} />
          </div>
          {toggle && (
            <motion.div
              className="menu__mobel-link"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5 }}
            >
               <RxCross2  className="closeX" onClick={() => setToggole(!toggle)} />
              <ul>
                {[
                  "Home",
                  "About",
                  "Resume",
                  "Skills",
                  "Projects",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <motion.a
                      href={`#${item}`}
                      onClick={() => setToggole(false)}
                      variants={hovarVariant}
                      whileHover="hover"
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
                 <a download="" href={cv} id="cv">
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
                <button> MY CV</button>
              </motion.div>
            </a>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
