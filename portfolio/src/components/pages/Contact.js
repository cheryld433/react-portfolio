import React from "react";
import { Col, Row } from "react-bootstrap";
import Form from"../form";
import Navbar from "../../components/Navbar";
import "./Home.css";

const Contact = () => {
    return(

        <div>
            <div className="contact-container">
                <div id="contact-wrapper">
                    <Row>
                    {/* possible need to add a row here */}
                    <Row className="contact-title jumbotron-4 justify-content-center">
                        <Col></Col>
                        {/* title */}
                        <Col xs={8} className="title-wrapper">
                            <Row className="justify-content-center">
                                <h1 className="display-4 contact" >Contact</h1>
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row ClassName="contact-wrapper">
                        <Col></Col>
                        {/* Form (name, email, message, submit button) */}
                        <Col xs={8} className="form-wrapper">
                            {/* insert form here */}
                            <Row className="justify-content-center">
                                <Form />
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
                    </Row>
                     {/* Row may end here? */}
                     <Row className="contact-nav">
                        <Col></Col>
                        <Col xs={8} className="justify-content-center">
                            <Navbar />
                        </Col>
                        <Col></Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Contact;