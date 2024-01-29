import React, { useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPhone, FaFacebook } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import "./contact.scss";

const buttonVariant = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
const Contact = () => {
  const form = useRef();
const [btnSend, setBtnSend] = useState('send message')
  const handleClick = ()=>{
   setBtnSend(btnSend ==='send message'? <p style={styles.btn}>Thank you!</p>:'send message')
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iu5lrid",
        "template_p40u924",
        form.current,
        "cSDO2V1JQLyZ3Uj62"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  
  const styles = {
    btn: {
      color: 'white',
      cursor: 'pointer'
},}
  return (
    <div className="Contact-Container" id="Contact">
      <div className="top-container">
        <div className="top">
          <h2>Get in touch</h2>
        </div>
        <div className="bottom">
          <div className="talktome">
            <h3>Talk to me</h3>
            <div className="talksection">
              <div className="talkItems">
                <p>
                  <SiMinutemailer />
                </p>
                <a href='mailto:<nowiki>agentavery@sample.com?subject="HTML link"'>
                  aocholayoul9@gmail.com
                </a>
                <p>Email me</p>
              </div>
              <div className="talkItems">
                <FaFacebook />
                <a href="https://www.facebook.com/">facebook</a>
                <p>Write me</p>
              </div>
              <div className="talkItems">
                <p>
                  <FaPhone />
                </p>
                <a href="tel: 0782371177">+337 82 37 11 77</a>
                <p>Call me</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Write me a message</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="input">
                <input type="text" name="user_name" placeholder="Your Name"/>
              </div>
              <div className="input">
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="input">
                <input type="text" name="subject" placeholder="Subject"/>
              </div>
              <div className="input">
                <textarea
                  name="message"
                  id="area"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>
              <motion.button variants={buttonVariant} whileHover="hover" onClick={handleClick} >
                {btnSend}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
