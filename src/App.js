import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home"

function App() {
  return (
    <div>
      <Router basename="/">
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/portfolio" component={Portfolio}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
