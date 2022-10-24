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
import Travel from "views/Travel";

import SiteData from "Data";
import "common.css";

function Site() {
  return (
    <Router>
      <Navbar items={SiteData.NavbarItems} />
      <Routes>
        <Route path={SiteData.HomeTarget} element={<Home />} />
        <Route path={SiteData.AboutUsTarget} element={<About />} />
        <Route path={SiteData.EventsTarget} element={<Events />} />
        <Route path={SiteData.GuestsTarget} element={<Hosts />} />
        <Route path={SiteData.PiaTarget} element={<PassionInAction />} />
        <Route path={SiteData.NetworkTarget} element={<Network />} />
        <Route path={SiteData.JoinTarget} element={<Join />} />
        <Route path={SiteData.OpenDayTarget} element={<OpenDay />} />
        <Route
          path={SiteData.NewsTarget}
          element={<Navigate to={SiteData.OpenDayTarget} replace />}
        />
        <Route path={SiteData.TravelTarget} element={<Travel />} />
        <Route
          path={`${SiteData.TravelTarget}/*`}
          element={<Navigate to={SiteData.TravelTarget} replace />}
        />
        <Route
          path={SiteData.StartupChallengeTarget}
          element={<StartupChallenge />}
        />
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
