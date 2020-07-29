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
                    <Row className="about-title jumbotron-4 justify-content-center">
                        <h1 className="display-4">About Me</h1>
                    </Row>
                    <Row className="photo-row justify-content-center">
                        <img className="my-img" src={Photo} alt="Cheryl Daniels" /> 
                    </Row>
                    <Row className="about-text">
                        <Col></Col>
                        <Col xs={8}>
                            <p></p>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row className="about-navbar">
                        <Col></Col>
                        <Col xs={3} className="justify-content-center">
                            <Navbar />
                        </Col>
                        <Col></Col>
                    </Row>
                </Row>
            </div>
        </div>
    );
}

export default About;