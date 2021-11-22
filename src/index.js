import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "components/Navbar";
import Home from "views/Home";
import About from "views/About";
import Events from "views/Events";
import PassionInAction from "views/PassionInAction";
import Join from "views/Join";
import Hosts from "views/Hosts";
import Footer from "components/Footer/Footer";

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
        <Route exact path={SiteData.JoinTarget} component={Join} />
      </Switch>
      <Footer
        organizationLogo={SiteData.LogoWhite}
        polimiLogo={SiteData.LogoPolimi}
        copyrightName="E-club Polimi"
        facebookUrl="https://facebook.com/"
        instagramUrl="https://instagram.com/"
        linkedinUrl="https://linkedin.com/"
      />
    </Router>
  );
}

ReactDOM.render(<Site />, document.getElementById("root"));
