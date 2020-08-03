import React from "react";
import {Col, Row} from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Navbar from "../../components/Navbar";
import "./Home.css";
import Resume from "../../assets/cheryl_daniels.pdf";



const Home = () => {
    return (
        <div className="home-container">
            <div className="container">
                <div className="home-wrapper">
                    <div className="row">
                        <div className="col-12">
                            
                            <div className="row name-title jumbotron-4 justify-content-center">
                                {/* possible reveal affect here */}
                                <Slide left>
                                <h1 className="display-3">Cheryl Daniels</h1>
                                </Slide>
                            </div>
                            {/* To create a flexbox container and to transform direct children 
                           into flex items, use the d-flex class: */}
                            <div className="row subtitle d=flex justify-content-center">
                                {/* <h5>Empty space to make links and navbar to bottom of page</h5> */} </div>
                            <Row className="d-flex justify-content-center">
                                {/* links to icons for github, linkedIn and my Resume */}
                                <Row className="row-icon-row">
                                    <Col size="xs">
                                        <a href="https://github.com/cheryld433">
                                            <i className="fab fa-github fa-2x icon"></i>
                                        </a>
                                    </Col>
                                    <Col size="xs">
                                        <a href="https://www.linkedin.com/in/cheryl-daniels-17171619a/">
                                            <i className="fab fa-linkedin fa-2x icon"></i>
                                        </a>
                                    </Col>
                                    {/* need to add resume file  */}
                                    <Col size="xs">
                                        <a href={Resume}
                                            download>
                                            <i className="fas fa-file fa-2x icon"></i>
                                        </a>
                                    </Col>
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
                </div>
            </div>
        </div>

    )
}

export default Home;
