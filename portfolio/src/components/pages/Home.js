import React from "react";
import { Col, Row } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import "./Home.css";
import Resume from "../../assets/cheryl_daniels.pdf";
// import resume 

// LOOK INTO REACT-REVEAL FOR ANIMATION OF THE WEBPAGE!!!!!!!
const Home = () => {
   return(
       <div className="home-container">
           <div className="container">
               <div className="home-wrapper">
                   <div className="row">
                       <div className="col-12">
                           <div className="row name-title jumbotron-4 justify-content-center">
                               {/* possible reveal affect here */}
                               <h1 className="display-">Cheryl Daniels</h1>
                           </div>
                           {/* To create a flexbox container and to transform direct children 
                           into flex items, use the d-flex class: */}
                           <div className="row subtitle d=flex justify-content-center">
                               {/* <h5>Empty space to make links and navbar to bottom of page</h5> */}
                           </div>
                           <Row className="d-flex justify-content-center">
                               {/* links to icons for github, linkedIn and my Resume */}
                               <Row className="row-icon-row">
                                   <Col size="xs"><a href="https://github.com/cheryld433"><i className="fab fa-github fa-2x icon"></i></a></Col>
                                   <Col size="xs"><a href="https://www.linkedin.com/in/cheryl-daniels-17171619a/"></a><i className="fab fa-linkedin fa-2x icon"></i></Col>
                                   {/* need to add resume file  */}
                                   <Col size="xs"><a href={Resume} download><i className="fas fa-file fa-2x icon"></i></a></Col>
                               </Row>
                           </Row>
                           {/* may use react-reveal on navbar */}
                           <div className="row-justify-content-center about-navbar">
                               <Navbar />
                           </div>
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
// need to attach resume;
// need to attach css;


export default Home;
