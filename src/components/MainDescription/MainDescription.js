import React, { Component } from 'react';
import "./MainDescription.css";
import icon from '../../assets/logo-512x512.png'

export default class MainDescription extends Component {
  render() {
    return (
      <div> {/* External div */}
        <div className="main-description-row">
          <div className="main-description-col-lg-2 main-description-col-md-3 main-description-col-sm-6 main-description-col-xs-6">
            <div className="main-description-logo-icon">
              <img src={icon} alt="E-Club Polimi Icon" width="100%" height="100%"></img>
            </div>
          </div>
          <div className="main-description-col-lg-2 main-description-col-md-3 main-description-col-sm-6 main-description-col-xs-6">
            <div className="main-description-title">
              Learn<br/>
              Network<br/>
              Build<br/>
            </div>
          </div>
          <div className="main-description-col-lg-8 main-description-col-md-6 main-description-col-sm-12 main-description-col-xs-12">
            <div className="main-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </div>
        </div>
      </div> /* End external div */
    )
  }
}
