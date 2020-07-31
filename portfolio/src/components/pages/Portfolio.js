import React from "react";
import {Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import Portfolio from "./src/components/pages/Portfolio.js";
import Homemade from "../../images/Homemade.png";
import Notetaker from "../../images/notetaker.png";
import RedPlanet from "../../images/red-planet.png";
import WeatherDashboard from "../../images/weather-dashboard.png";
import FitnessTracker from "../../images/fitness-tracker.png";
import Burger from "../../images/burger.png";
import Navbar from "../Navbar";
import "../pages/Home.css"


const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-wrapper">
                <Row>
                    <Row className="portfolio-title jumbotron-4 justify-contect-center">
                        <h1 className="display-4">Portfolio</h1>
                    </Row>
                    <Row> {/* <ReactBootstrapCarousel> */}
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100"
                                    src={Homemade}
                                    alt="Homemade website"/>
                                <Carousel.Caption>
                                    <h3>Homemade</h3>
                                    {/* description of app */}
                                    <h6>An interactive webpage where you can choose a region of the world. This application 
                                       will provide you with dinner recipes and drinks and some regional music.</h6>
                                    {/* technology used in app */}
                                    <h6>Technologies: Javascript JQuery HTML AJAX SASS Edamam Recipe Search API CocktailDB API Jamendo API</h6>
                                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    {/* link to the github repo */}
                                    {/* link to the deployed app */}
                                    <a href="https://cheryld433.github.io/HomeMade/" target="_blank"><i className="fab fa-github"></i></a>
                                    {/* <a href="" target="" ><i className="fa fa-external-link"></i></a> */} 
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src={Notetaker} alt="Notetaker"/>

                                <Carousel.Caption>
                                    <h3>Notetaker</h3>
                                    {/* description of app */}
                                    <h6>This aplication is a server side application using Express.js. 
                                        With this application the client can write, save, and delete notes.
                                        The information is saved and retrieved from a JSON file.</h6>
                                    {/* technology used in app */}
                                    <h6>Technologies: Express</h6>
                                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    {/* link to the github repo */}
                                    {/* link to the deployed app */}
                                    <a href="https://cheryld433.github.io/Note-Taker/" target="">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://note-taker-14482.herokuapp.com/" target="_blank">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src={RedPlanet} alt="Red Planet Voyagers"/>

                                <Carousel.Caption>
                                    <h3>Red Planet</h3>
                                    {/* description of app */}
                                    <h6>Looking to vacation to Mars? Check the weather for your stay before you go! 
                                        Red Planet Voyagers, your daily dose of Mars info. View weather trends, 
                                        forecast, and data charts. View photos for a more enticing visit and view 
                                        upcoming launch dates!</h6>
                                    {/* technology used in app */}
                                    {/* <h6>Technologies: </h6> */}
                                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    {/* link to the github repo */}
                                    {/* link to the deployed app */}
                                    <a href="https://github.com/cheryld433/Red-Planet-Voyagers.git" target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://team-5-project-2.herokuapp.com/" target="_blank">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src={Burger} alt="Weather Dashboard"/>

                                <Carousel.Caption>
                                    <h3>Weather Dashboard</h3>
                                    {/* description of app */}
                                    {/* technology used in app */}
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    {/* link to the github repo */}
                                    {/* link to the deployed app */}
                                    <a href="https://cheryld433.github.io/Weather-Dashboard/" target="blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    {/* <a href="" target="">
                                        <i className="fa fa-external-link"></i>
                                    </a> */}
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src={FitnessTracker} alt="Fitness Tracker"/>

                                <Carousel.Caption>
                                    <h3>Fitness Tracker</h3>
                                    {/* description of app */}
                                    {/* technology used in app */}
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    {/* link to the github repo */}
                                    {/* link to the deployed app */}
                                    <a href=" https://github.com/cheryld433/workout_tracker.git" target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://trace-my-workout.herokuapp.com/?id=5f13054658b53e0017f18862" target="_blank">
                                        <i className="fa fa-external-link"></i>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                        {/* </ReactBootstrapCarousel> */} 
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
            </div>


            </div>
        // </div>
    )

}

export default Portfolio;
