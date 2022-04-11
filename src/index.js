import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
import OpenDay from "views/OpenDay";
import StartupChallenge from "views/StartupChallenge";

import SiteData from "Data";
import "common.css";

function Site() {
  return (
    <Router>
      <Navbar items={SiteData.NavbarItems} />
      <Routes>
        <Route exact path={SiteData.HomeTarget} element={<Home />} />
        <Route exact path={SiteData.AboutUsTarget} element={<About />} />
        <Route exact path={SiteData.EventsTarget} element={<Events />} />
        <Route exact path={SiteData.GuestsTarget} element={<Hosts />} />
        <Route exact path={SiteData.PiaTarget} element={<PassionInAction />} />
        <Route exact path={SiteData.NetworkTarget} element={<Network />} />
        <Route exact path={SiteData.JoinTarget} element={<Join />} />
        <Route exact path={SiteData.OpenDayTarget} element={<OpenDay />} />
        <Route exact path={SiteData.StartupChallengeTarget} element={<StartupChallenge />} />
        <Route
          path="*"
          element={<Navigate to={SiteData.HomeTarget} replace />}
        />
      </Routes>
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
