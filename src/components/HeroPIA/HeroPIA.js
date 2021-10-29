import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HeroPIA.css";

export default class HeroPIA extends Component {
  static propTypes = {
    heroPIA: PropTypes.object,
  };

  render() {
    const heroPIA = this.props.heroPIA;
    return (
      <div>
        {/* External div */}
        <div
          className="hero-pia-container"
          style={{
            backgroundImage: `url(${heroPIA.logoPIA})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div> /* End external div */
    );
  }
}
