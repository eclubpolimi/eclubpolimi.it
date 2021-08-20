import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Events from "./views/Events";
import PassionInAction from "./views/PassionInAction";
import Join from "./views/Join";
import Hosts from "./views/Hosts";

function Site() {
  const baseName = process.env.REACT_APP_GITHUB_HEAD_REF;
  const pathName = window.location.pathname;

  return (
    <Router basename={baseName}>

      <p>Basename: {baseName}</p>
      <p>Pathname: {pathName}</p>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/Events" component={Events}></Route>
        <Route exact path="/Hosts" component={Hosts}></Route>
        <Route
          exact
          path="/PassionInAction"
          component={PassionInAction}
        ></Route>
        <Route exact path="/Join" component={Join}></Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Site />, document.getElementById("root"));
