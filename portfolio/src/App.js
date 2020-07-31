import React from "react";
import "../src/App.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
// import Navbar from "../src/components/Navbar/index";

const App = () => {
  return(
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />    
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  )
}

export default App;
