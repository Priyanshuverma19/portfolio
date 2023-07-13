import React from "react";
import "../../pages/style.css";
import { Container,Row } from "react-bootstrap";
import {AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <Row>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I’m currently searching for opportunities for a front-end developer
          role. <br /> If there is any vacancy my inbox is always open. Whether
          <br /> you have any further questions or just want to say hi, <br />
          I’ll try my best to get back to you!
        </p>
        <h3 className="num">Phone: <span>+91-8858931470</span></h3>
        <h3 className="email">Email: <span>priyanshu.vermaa0@gmail.com</span></h3>
         
        </Row >    
      <h5 className="link">Designed & Built by PriyanshuVerma
          <button onClick={() => {
  window.open("https://github.com/Priyanshuverma19");
}}
  className='socailmediabtn'><AiFillGithub className='icon' /></button>
<button onClick={() => {
  window.open("https://www.linkedin.com/in/priyanshu-vermaa/");
}}
  className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
        </h5>
        <hr/>
        <h5 className="copyright">© Copyright 2023</h5>  
      </Container>
    </div>
  );
}

export default Contactpage;
