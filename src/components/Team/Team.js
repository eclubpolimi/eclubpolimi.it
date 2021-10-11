import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Team.css";

import TabSelector from "../TabSelector";
import FlipCard from "../FlipCard";

export default class Team extends Component {
  static propTypes = {
    // Team object (fields: "teamName", "teamComponents" (list) (fields: "name". "image", "description"))
    team: PropTypes.object,
  };

  render() {
    return (
      <div className="team-container">
        <div className="team-name">{this.props.team.teamName}</div>
        <div className="team">
          {this.props.team.teamComponents.map((member) => (
            <div className="team-component">
              <FlipCard
                frontImage={member.image}
                height={"100%"}
                width={"100%"}
                frontText={member.name}
                backText={member.description}
              ></FlipCard>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
