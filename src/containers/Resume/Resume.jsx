import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import "./resume.scss";
const Resume = () => {
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
        <div className="blog1 blogA">
          <h3>
            Apple Foundation Program, iOS Mobile Development
          </h3>
          <span>Simplon, Lyon 11/2023 - 12/2023</span>
          <p>
            Acquire knowledge in UX design, the basics of the language of Swift,
            application interface design mobile
          </p>
        </div>
        <div className="blog1 blogB">
          <h3>Content management system (WordPress)</h3>
          <span>Simplon, Lyon 05/2023 - 07/2023</span>
          <p>
            Acquire programming logic and language initiation HTML, CSS, use of
            a CMS (WordPress)
          </p>
        </div>
        <div className="blog1 blogC">
          <h3>Bachelor in Computer Science</h3>
          <span>Comboni college, Khartoum, Sudan 2018 - 2020</span>
          <p>
            Acquérir les bases du langage de programmation JavaScript, C++ et
            SQL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
