import React from "react";
import "./project.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import images from "../../constants/images";
import { DiCss3 } from "react-icons/di";
import { FaGithub, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiRedux,SiMongodb } from "react-icons/si";
import { BsBoxArrowInUpRight } from "react-icons/bs";
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="service-container" id="Projects">
        <div className="project-icons"></div>
        <div className="top">
          <h2>Projects</h2>
        </div>
        <div className="bottom">
          <div className="box">
            <div className="box-icon">
              <div className="left-icon">
                <a href="https://github.com/shawilayoul/MyDay">
                  <FaGithub />
                </a>
              </div>
              <div className="left-icon">
                <BsBoxArrowInUpRight />
              </div>
            </div>
            <h2>My Day</h2>
            <p>
              MYday is a simple social media app where user can post things
              about their daily life with photos. <br />
              they can also delete or update thier post.
            </p>
            <div className="box-slider">
              <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={images.memory1} className="sliderimg" alt="slide" />
                <img src={images.memory2} className="sliderimg" alt="slide" />
                <img src={images.memory3} className="sliderimg" alt="slide" />
                <img src={images.memory1} className="sliderimg" alt="slide" />
              </AliceCarousel>
            </div>
            <div className="box-footer">
              <div className="box-footer-items">
                <FaReact />
                <span>React</span>
              </div>
              <div className="box-footer-items">
                <SiRedux/>
                <span>Redux</span>
              </div>
              <div className="box-footer-items">
                <SiMongodb />
                <span>Mongodb</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-icon">
              <div className="left-icon">
                <a href="https://github.com/shawilayoul/MyDay">
                  <FaGithub />
                </a>
              </div>
              <div className="left-icon">
                <a href="https://wordpress.simplon-ara.fr/lyon/objnum23/wordpress11/">
                  <BsBoxArrowInUpRight />
                </a>
              </div>
            </div>
            <h2>Silver Spoon</h2>
            <p>
              Silver spoon is a resaurant website where customers can order food
              online or reserve a table <br /> without going to the place physically
            </p>
            <div className="box-slider">
              <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={images.seliver1} className="sliderimg" alt="slide" />
                <img src={images.seliver2} className="sliderimg" alt="slide" />
                <img src={images.seliver3} className="sliderimg" alt="slide" />
                <img src={images.seliver5} className="sliderimg" alt="slide" />
              </AliceCarousel>
            </div>
            <div className="box-footer">
              <div className="box-footer-items">
                <FaWordpress />
                <span>WordPress</span>
              </div>
              <div className="box-footer-items">
                <FaFigma />
                <span>Figma</span>
              </div>
              <div className="box-footer-items">
                <DiCss3 />
                <span>Css</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-icon">
              <div className="left-icon">
                <a href="https://github.com/shawilayoul/MyDay">
                  <FaGithub />
                </a>
              </div>
              <div className="left-icon">
                <BsBoxArrowInUpRight />
              </div>
            </div>
            <h2>My Day</h2>
            <p>
              MYday is a simple social media app where user can post things
              about their daily life with photos. <br />
              they can also delete or update thier post.
            </p>
            <div className="box-slider">
              <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={images.memory2} className="sliderimg" alt="slide" />
                <img src={images.memory3} className="sliderimg" alt="slide" />
                <img src={images.memory1} className="sliderimg" alt="slide" />
                <img src={images.memory2} className="sliderimg" alt="slide" />
              </AliceCarousel>
            </div>
            <div className="box-footer">
              <div className="box-footer-items">
                <FaReact />
                <span>React</span>
              </div>
              <div className="box-footer-items">
                < SiRedux />
                <span>Redux</span>
              </div>
              <div className="box-footer-items">
                <SiMongodb />
                <span>Mongodb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
