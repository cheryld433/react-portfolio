import React from "react";
import "../src/App.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return(
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />    
        <Route exact path="/contact" component={Contact} />
        <Route exact path="portfolio" component={Portfolio} />
      </div>
    </Router>
  )
}

export default App;
