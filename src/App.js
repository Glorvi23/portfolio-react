import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Project from "./components/Project/Project"

function App() {
  return (
    <div>
      <Router basename="/">
        <Switch>
          <Route exact path ="/" component={Project}/>
          {/* <Route path="" */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
