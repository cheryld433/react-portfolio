import React from "react";
import { Row, Col} from "react-bootstrap";
 import Navbar from "../../components/Navbar";
import "../pages/Home.css";
import Photo from "../../images/Me.jpeg"

const About = () => {
    return(
        <div className="about-container">
            <div id="about-wrapper">
                <Row>
                <div class="about-title jumbotron-4"><h1 class="display-3  contact">About Me</h1></div>
                    <Row className="photo-row justify-content-center">
                        <img className="my-img resize" src={Photo} alt="Cheryl Daniels" /> 
                 </Row>
                    <Row className="about-text">
                        <Col></Col>
                        <Col md={8} className="title-wrapper">
                            <p>I have always enjoyed learing new things, just last year I 
                                taught myself how to flip houses. This experience gave me the 
                                opportunity to work on my creative side. I was able to take a 
                                home that needed a bit of care, work with a team of experts and
                                bring the home back to life. This experience helped me hone my 
                                organization skills, the value of teamwork and reminded me of 
                                the importance of patience.
                                I am currently learning full-stack web development at UNC Chapel Hill. 
                                This program allows me to incorporate my interest in computers and design. 
                                Throuhgout the bootcamp I am learning several markup languages including HTML, 
                                CSS, Javascript, Node.js, Express, and MySQL, MongoDB, and React. I am excited to demonstrate my 
                                new skills and translate them into a new career in web development. 
                                This project will be a collection of all the projects that I build along the 
                                way, I hope you enjoy it.</p>
                        </Col>
                        <Col></Col>
                    </Row>
                </Row>
                    <Row className="home-navbar">
                                <Col></Col>
                                <Col xs={12}
                                    className="justify-content-center">
                                    <Navbar/>
                                </Col>
                                <Col></Col>
                            </Row>
                            {/* footer */}
                            <div className="row">
                                <p className="d-flex justify-content-center footer">&copy;Copyright 2020 Cheryl Daniels</p>
                            </div>
            </div>
        </div>
    );
}

export default About;