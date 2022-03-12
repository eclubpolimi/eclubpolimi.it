import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from "components/Navbar";
import Home from "views/Home";
import About from "views/About";
import Events from "views/Events";
import PassionInAction from "views/PassionInAction";
import Network from "views/Network";
import Join from "views/Join";
import Hosts from "views/Hosts";
import Footer from "components/Footer";

import SiteData from "Data";
import "common.css";

function Site() {
  return (
    <Router>
      <Navbar items={SiteData.NavbarItems} />
      <Switch>
        <Route exact path={SiteData.HomeTarget} component={Home} />
        <Route exact path={SiteData.AboutUsTarget} component={About} />
        <Route exact path={SiteData.EventsTarget} component={Events} />
        <Route exact path={SiteData.GuestsTarget} component={Hosts} />
        <Route exact path={SiteData.PiaTarget} component={PassionInAction} />
        <Route exact path={SiteData.NetworkTarget} component={Network} />
        <Route exact path={SiteData.JoinTarget} component={Join} />
        <Redirect from="*" to={SiteData.HomeTarget} />
      </Switch>
      <Footer
        logo={SiteData.LogoWhite}
        copyrightName="E-Club Polimi"
        facebookUrl="https://www.facebook.com/eclubpolimi/"
        instagramUrl="https://www.instagram.com/eclubpolimi/"
        linkedinUrl="https://www.linkedin.com/company/eclubpolimi/"
      />
    </Router>
  );
}

ReactDOM.render(<Site />, document.getElementById("root"));
