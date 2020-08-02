import React from "react";
import {Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Homemade from "../../images/Homemade.png";
import Notetaker from "../../images/notetaker.png";
import EmployeeDirectory from "../../images/react-directory.png";
import RedPlanet from "../../images/red-planet.png";
// import WeatherDashboard from "../../images/weather-dashboard.png";
// import FitnessTracker from "../../images/fitness-tracker.png";
import BudgetTracker from "../../images/budget-tracker.png";
import Burger from "../../images/burger.png";
import Navbar from "../Navbar";
import "../pages/Home.css"


const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-wrapper">
                <Row>
                    <div className="portfolio-title jumbotron-4 justify-contect-center">
                        <h1 className="display-3 justify-content-center">Portfolio</h1>
                    </div>
                    <Row>
                        <div>
                            <br/>
                        </div>
                    </Row>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100"
                                    src={EmployeeDirectory}
                                    alt="Employee Directory"/>
                                <Carousel.Caption>
                                    <h3>React Employee Directory</h3>
                                    <h6>In this assignment I created an employee directory with React. The requirements
                                    for this assignment was to break up the application into UI components, manage 
                                    component state, and respond to user events. The user will be able to view the 
                                    entire employee directoroy, sort by name and search by name.</h6>
                                    {/* <h6>Technologies: Express</h6> */}
                                    <a href="https://cheryld433.github.io/employee-tracker-react/" target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    {/* <a href="https://note-taker-14482.herokuapp.com/" target="_blank">
                                        <i className="fa fa-external-link"></i>
                                    </a> */} 
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100"
                                    src={Homemade}
                                    alt="Homemade website"/>
                                <Carousel.Caption>
                                    <h3>Homemade</h3>
                                    <h6>An interactive webpage where you can choose a region of the world. This application 
                                        will provide you with dinner recipes and drinks and some regional music.</h6>
                                    {/* <h6>Technologies: Javascript JQuery HTML AJAX SASS Edamam Recipe Search API CocktailDB API Jamendo API</h6> */}
                                    <a href="https://cheryld433.github.io/HomeMade/" target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100"
                                    src={RedPlanet}
                                    alt="Red Planet Voyagers"/>
                                <Carousel.Caption>
                                    <h3>Red Planet</h3>
                                    <h6>Looking to vacation to Mars? Check the weather for your stay before you go! 
                                        Red Planet Voyagers, your daily dose of Mars info. View weather trends, 
                                        forecast, and data charts. View photos for a more enticing visit and view 
                                        upcoming launch dates!</h6>
                                    {/* <h6>Technologies: </h6> */}
                                    <a href="https://github.com/cheryld433/Red-Planet-Voyagers.git" target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://team-5-project-2.herokuapp.com/" target="_blank">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100"
                                    src={BudgetTracker}
                                    alt="Budget Tracker"/>
                                <Carousel.Caption>
                                    <h3>Budget Tracker</h3>
                                    <p>With this application the user will be able to track their withdrawals and 
                                       deposits with or without a data/internet connection. When traveling the 
                                        users account balance is accurate. When entering transactions offline, 
                                        the app will populate the total when back online.</p>
                                    {/* <a href="https://cheryld433.github.io/Weather-Dashboard/" target="blank">
                                        <i className="fab fa-github"></i>
                                    </a> */}
                                    <a href="https://radiant-escarpment-58792.herokuapp.com/" target="_blank">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100"
                                    src={Notetaker}
                                    alt="Notetaker"/>

                                <Carousel.Caption>
                                    <h3>Note Taker</h3>
                                    <p>This aplication is a server side application using Express.js. With this 
                                        application the client can write, save, and delete notes. The information 
                                        is saved and retrieved from a JSON file.</p>
                                    {/* <a href="https://cheryld433.github.io/Weather-Dashboard/" target="blank">
                                        <i className="fab fa-github"></i>
                                    </a> */}
                                    <a href="https://note-taker-14482.herokuapp.com/" target="_blank">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100"
                                    src={Burger}
                                    alt="Burger website"/>

                                <Carousel.Caption>
                                    <h3>Burger</h3>
                                    <p>This application is an exercise in Model View Controller to structure 
                                        the code base. This application is a simple application for building 
                                        a burger and devouring it. In this application I created a homemade ORM file.</p>
                                    {/* <a href=" https://github.com/cheryld433/workout_tracker.git" target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a> */}
                                    <a href="https://lit-forest-25766.herokuapp.com/" target="_blank">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
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
    )
}

export default Portfolio;
