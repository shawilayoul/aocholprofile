import "./footer.scss";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <div className="top">
        <div>
          <a href="https://shawilayoul.github.io/aocholprofile/#Home">
            <h2>Aochol</h2>
          </a>
        </div>
        <div className="about">
          <div>
            <a href="https://shawilayoul.github.io/aocholprofile/#About">
              <i>About</i>
            </a>
          </div>
          <div>
            <a href="https://shawilayoul.github.io/aocholprofile/#Projects">
              <i>Projects</i>
            </a>
          </div>
          <div>
            <a href="https://shawilayoul.github.io/aocholprofile/#Skills">
              <i>Skills</i>
            </a>
          </div>
        </div>
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
    </div>
  );
};

export default Footer;
