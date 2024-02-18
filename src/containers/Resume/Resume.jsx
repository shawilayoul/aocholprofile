import React from "react";
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
      <div className="top">
        <h2>My Resume</h2>
        <h3>Education</h3>
      </div>
      <div className="bottom">
        <div className="blogA">
          <motion.div
            className="blog1"
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
              Acquire knowledge in UX design, Swift language, application
              interface design mobile
            </p>
          </motion.div>
          <motion.div
            className="blog1"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h3>Content management system (WordPress)</h3>
            <span>Simplon, Lyon 05/2023 - 07/2023</span>
            <p>
              Acquire programming logic in HTML, CSS and use of a CMS
              (WordPress)
            </p>
          </motion.div>
        </div>
        <div className="blogB">
          <motion.div
            className="blog1"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h3>Courses on Udemy in a self-taught way</h3>
            <span>Udemy, 2022-2023</span>
            <p>
              Acquire the basics of the programming language JavaScript, React
              framework and Taiwind CSS
            </p>
          </motion.div>
          <motion.div
            className="blog1"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h3>Bachelor in Computer Science</h3>
            <span>Comboni college, Khartoum, Sudan 2018 - 2020</span>
            <p>
              Acquire the basics of the programming language JavaScript,
              PHP and SQL
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
