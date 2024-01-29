import React from "react";
import "./resume.scss";

const Resume = () => {
  return (
    <div className="resum-container" id="Resume">
      <div className="top">
        <h2>Resume</h2>
        <h3>Education</h3>
      </div>
      <div className="bottom">
        <div className="blog1">
          <h3>
            Apple Foundation Program, iOS Mobile Development, Simplon, Lyon
          </h3>
          <p>From 11/2023 to 12/2023.</p>
          <p>
            Acquire knowledge in UX design, the basics of the language of Swift
            programming, application interface design mobile.
          </p>
        </div>
        <div className="blog1">
          <h3>Content management system (WordPress). Simplon, Lyon</h3>
          <p>From 05/2023 to 07/2023</p>
          <p>
            Acquire programming logic and language initiation <br />
            HTML, CSS, use of a CMS (WordPress).
          </p>
        </div>
        <div className="blog1">
          <h3>Bachelor in Computer Science. Comboni, Khartoum, Sudan</h3>
          <p>From 2018 to 2020.</p>
          <p>
            Acquérir les bases du langage de programmation JavaScript, C++ et
            SQL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;