import React from "react";
import "./project.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import images from "../../constants/images";
import { DiCss3 } from "react-icons/di";
import { FaGithub, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiRedux, SiMongodb } from "react-icons/si";
import { BsBoxArrowInUpRight } from "react-icons/bs";
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="service-container" id="Projects">
        <div className="top">
          <h2>Projects</h2>
        </div>
        <div className="bottom">
          <div className="box">
            <div className="box-icon">
              <div className="left-icon">
                {/* <a href="https://github.com/shawilayoul/MyDay">
                  <FaGithub />
               </a>*/}
              </div>
              <div className="left-icon">
                <a href="https://wordpress.simplon-ara.fr/lyon/objnum23/wordpress11/">
                  <BsBoxArrowInUpRight />
                </a>
              </div>
            </div>
            <h3>Silver Spoon</h3>
            <p>
              Silver spoon is a resaurant website where customers can order food
              online or reserve a table without going to the place physically
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
                <a href="https://github.com/shawilayoul/cakeart">
                  <FaGithub />
                </a>
              </div>
              <div className="left-icon">
                <a href="https://cakeart.vercel.app/">
                  <BsBoxArrowInUpRight />
                </a>
              </div>
            </div>
            <h3>Cake Art</h3>
            <p>
              the main objective for creating this website is to display the
              variety of cakes and baked goods available, including detailed
              descriptions, ingredients, and high-quality images to attract
              potential customers.
            </p>
            <div className="box-slider">
              <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={images.cake1} className="sliderimg" alt="slide" />
                <img src={images.cake2} className="sliderimg" alt="slide" />
                <img src={images.cake3} className="sliderimg" alt="slide" />
                <img src={images.cake4} className="sliderimg" alt="slide" />
              </AliceCarousel>
            </div>
            <div className="box-footer">
              <div className="box-footer-items">
                <FaReact />
                <span>React</span>
              </div>
              <div className="box-footer-items">
                <SiRedux />
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
                <a href="https://github.com/shawilayoul/NikeAire">
                  <FaGithub />
                </a>
              </div>
              <div className="left-icon">
                <a href="https://shawilayoul.github.io/NikeAire/">
                  <BsBoxArrowInUpRight />
                </a>
              </div>
            </div>
            <h3>Nike Air</h3>
            <p>
              Nike is a simple shopping website, where customers can order and
              buy shoes online and they can also add it to theirs favorite list
            </p>
            <div className="box-slider">
              <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={images.nike1} className="sliderimg" alt="slide" />
                <img src={images.nike2} className="sliderimg" alt="slide" />
                <img src={images.nike3} className="sliderimg" alt="slide" />
                <img src={images.nike5} className="sliderimg" alt="slide" />
              </AliceCarousel>
            </div>
            <div className="box-footer">
              <div className="box-footer-items">
                <span>JavaScript</span>
              </div>
              <div className="box-footer-items">
                <span>HTML</span>
              </div>
              <div className="box-footer-items">
                <DiCss3 />
                <span>Css</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
