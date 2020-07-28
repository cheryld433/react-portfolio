import React from 'react';
import { BrowswerRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import './App.css';

const App = () => {
  return (
   <Router>
     <div>
       <Navbar />
       <Switch>
         <Route exact path={["/", "/react-portfolio"]}>
           <Home />
         </Route>

         <Route exact path="/about">
           <About />
         </Route>

         <Route exact path="/portfolio">
         <Portfolio //props={portfolio}  
         />
         </Route>

         <Route exact path="/contact">
           <Contact />
         </Route>

       </Switch>
       <Footer />
     </div>

   </Router>
  );
}

export default App;
