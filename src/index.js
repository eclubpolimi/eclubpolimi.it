import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import JoinUsBar from "./components/JoinUsBar";
import Home from "./views/Home";
import About from "./views/About";
import Events from "./views/Events";
import PassionInAction from "./views/PassionInAction";
import Join from "./views/Join";
import Hosts from "./views/Hosts";

import "./common.css";

function Site() {
  const pathName = window.location.pathname;
  
  return (
    <Router basename={pathName}>
      <Navbar />
      <JoinUsBar  />
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
