import React, {Component} from "react";
import "../src/App.css"
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr />
  
          <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />    
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
        </div>
      </HashRouter>
    );
  }
}

// const Home = () => <div><h2>Home</h2></div>
// const About = () => <div><h2>About</h2></div>

export default App;


// const App = () => {
//   return(
//     <HashRouter basename="/">
//       <div>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={About} />    
//         <Route exact path="/contact" component={Contact} />
//         <Route exact path="/portfolio" component={Portfolio} />
//       </div>
//     </HashRouter>
//   )
// }

// export default App;
