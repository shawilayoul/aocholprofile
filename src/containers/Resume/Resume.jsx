import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./resume.scss";
const Resume = () => {
  /* const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView,mainControlls]);*/

  return (
    <div className="resum-container" id="Resume">
      <div className="vertical">
        <div className="cap1">
          <FaGraduationCap />
        </div>
        <div className="cap2 ">
          <FaGraduationCap />
        </div>
        <div className="cap3">
          <FaGraduationCap />
        </div>
      </div>
      <div className="top">
        <h2>My Resume</h2>
        <h3>EDUCATION</h3>
      </div>
      <div className="bottom">
        <motion.div
          className="blog1 blogA"
          variants={{
            hidden: { x: "-100vw" },
            visible: { x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h3>Apple Foundation Program, iOS Mobile Development</h3>
          <span>Simplon, Lyon 11/2023 - 12/2023</span>
          <p>
            Acquire knowledge in UX design, the basics of the language of Swift,
            application interface design mobile
          </p>
        </motion.div>
        <motion.div
          className="blog1 blogB"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h3>Content management system (WordPress)</h3>
          <span>Simplon, Lyon 05/2023 - 07/2023</span>
          <p>
            Acquire programming logic and language initiation HTML, CSS, use of
            a CMS (WordPress)
          </p>
        </motion.div>
        <motion.div
          className="blog1 blogC"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h3>Bachelor in Computer Science</h3>
          <span>Comboni college, Khartoum, Sudan 2018 - 2020</span>
          <p>
            Acquérir les bases du langage de programmation JavaScript, C++ et
            SQL
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
